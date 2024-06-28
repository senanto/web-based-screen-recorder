let mediaRecorder;
let recordedChunks = [];
const video = document.getElementById('video');
const previewVideo = document.getElementById('previewVideo');
const fullVideo = document.getElementById('fullVideo');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const previewArea = document.getElementById('previewArea');
const fullVideoContainer = document.getElementById('fullVideoContainer');
const previewText = document.getElementById('previewText');
const fileSize = document.getElementById('fileSize');
const sizeValue = document.getElementById('sizeValue');
const downloadLink = document.getElementById('downloadLink');

startBtn.addEventListener('click', startRecording);
stopBtn.addEventListener('click', stopRecording);

function startRecording() {
    navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };
            mediaRecorder.onstop = showPreview;
            mediaRecorder.start();
            startBtn.disabled = true;
            stopBtn.disabled = false;
        })
        .catch(error => {
            console.error(error);
        });
}

function stopRecording() {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function showPreview() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const sizeInMB = (blob.size / (1024 * 1024)).toFixed(2);
    const quality = video.videoWidth + 'x' + video.videoHeight;
    sizeValue.textContent = `${sizeInMB} MB - ${quality}`;
    fileSize.style.display = 'block';
    previewArea.classList.remove('hidden');

    const url = URL.createObjectURL(blob);
    previewVideo.src = url;
    previewVideo.controls = true;

    downloadLink.href = url;
    downloadLink.download = 'screen-record.webm';
    downloadLink.addEventListener('click', () => {
        downloadLink.textContent = 'Downloading...';
        setTimeout(() => {
            downloadLink.textContent = 'Download';
        }, 2000);
    });
}