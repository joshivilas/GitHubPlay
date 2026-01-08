document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('urlInput');
    const playBtn = document.getElementById('playBtn');
    const errorMsg = document.getElementById('errorMsg');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    const videoUrl = document.getElementById('videoUrl');

    // Load saved URL from storage
    chrome.storage.local.get(['lastUrl'], function(result) {
        if (result.lastUrl) {
            urlInput.value = result.lastUrl;
        }
    });

    // Handle play button click
    playBtn.addEventListener('click', playVideo);

    // Handle Enter key press
    urlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            playVideo();
        }
    });

    function playVideo() {
        const url = urlInput.value.trim();
        
        // Validate URL
        if (!url) {
            showError('Please enter a URL');
            return;
        }

        if (!url.includes('github.com')) {
            showError('Please enter a valid GitHub URL');
            return;
        }

        if (!url.toLowerCase().endsWith('.mp4')) {
            showError('URL must point to an MP4 file');
            return;
        }

        // Hide error and show video container
        hideError();

        // Convert to raw URL
        const rawUrl = convertToRawUrl(url);

        // Save URL to storage
        chrome.storage.local.set({ lastUrl: url });

        // Create video player page
        const playerUrl = chrome.runtime.getURL('player.html') + '?video=' + encodeURIComponent(rawUrl);
        
        // Open in new tab
        chrome.tabs.create({ url: playerUrl });
    }

    function convertToRawUrl(url) {
        // If already a raw URL, return as is
        if (url.includes('raw.githubusercontent.com')) {
            return url;
        }

        // Convert blob URL to raw URL
        // From: https://github.com/user/repo/blob/branch/path/to/file.mp4
        // To: https://raw.githubusercontent.com/user/repo/branch/path/to/file.mp4
        if (url.includes('github.com') && url.includes('/blob/')) {
            return url
                .replace('github.com', 'raw.githubusercontent.com')
                .replace('/blob/', '/');
        }

        return url;
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.display = 'block';
    }

    function hideError() {
        errorMsg.style.display = 'none';
        errorMsg.textContent = '';
    }
});
