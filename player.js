// Get video URL from query parameter
const urlParams = new URLSearchParams(window.location.search);
const videoUrl = urlParams.get('video');

const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const videoUrlLink = document.getElementById('videoUrl');
const loadingMsg = document.getElementById('loadingMsg');
const errorMsg = document.getElementById('errorMsg');
const errorText = document.getElementById('errorText');

if (!videoUrl) {
    showError('No video URL provided');
} else {
    // Display the URL
    videoUrlLink.textContent = videoUrl;
    videoUrlLink.href = videoUrl;

    // Set video source
    videoSource.src = videoUrl;
    videoPlayer.load();

    // Handle video loaded
    videoPlayer.addEventListener('loadedmetadata', function() {
        loadingMsg.style.display = 'none';
        videoPlayer.style.display = 'block';
        videoPlayer.play().catch(err => {
            console.log('Auto-play prevented:', err);
        });
    });

    // Handle video errors
    videoPlayer.addEventListener('error', function(e) {
        loadingMsg.style.display = 'none';
        showError('Failed to load video. Please ensure the URL is correct and the file is publicly accessible.');
    });
}

function showError(message) {
    errorText.textContent = message;
    errorMsg.style.display = 'block';
}
