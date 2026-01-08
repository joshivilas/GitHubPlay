# GithubPlay

A browser extension that allows you to play MP4 videos from GitHub URLs directly in your browser without downloading the files.

## Features

- 🎬 Play MP4 videos from GitHub repositories directly in your browser
- 🔗 Automatically converts GitHub blob URLs to raw URLs
- 🎮 Built-in video controls (play, pause, seek, volume)
- 💾 Remembers your last used URL
- ⚡ No downloads required - stream videos directly
- 🎨 Beautiful gradient UI design

## Installation

### Chrome / Edge / Brave

1. Download or clone this repository
2. Open your browser and go to:
   - **Chrome**: `chrome://extensions/`
   - **Edge**: `edge://extensions/`
   - **Brave**: `brave://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the `GithubPlay` folder
6. The extension icon will appear in your browser toolbar

### Firefox

1. Download or clone this repository
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Navigate to the `GithubPlay` folder and select `manifest.json`
5. The extension will be loaded temporarily

## Usage

1. Click the GithubPlay extension icon in your browser toolbar
2. Paste a GitHub MP4 file URL into the input field
3. Click "Play Video" or press Enter
4. The video will load and play directly in the extension popup

### Supported URL Formats

- `https://github.com/user/repo/blob/branch/path/to/video.mp4`
- `https://raw.githubusercontent.com/user/repo/branch/path/to/video.mp4`

The extension automatically converts blob URLs to raw URLs for proper streaming.

### Example URLs to Try

You can test with any public GitHub repository that contains MP4 files. The URL should look like:
```
https://github.com/username/repository/blob/main/video.mp4
```

## Requirements

- Video files must be in MP4 format
- Video files must be publicly accessible or in repositories you have access to
- Modern browser with Manifest V3 support (Chrome 88+, Edge 88+, Firefox 109+)

## Files Structure

```
GithubPlay/
├── manifest.json      # Extension configuration
├── popup.html         # Extension popup UI
├── popup.js          # Video player logic
├── styles.css        # Styling
├── icons/            # Extension icons (optional)
└── README.md         # This file
```

## How It Works

1. Takes a GitHub URL pointing to an MP4 file
2. Converts it to a raw GitHub URL if needed
3. Loads the video in an HTML5 video player
4. Streams the video directly without requiring a download

## Known Limitations

- Only supports MP4 video format
- Videos must be publicly accessible
- Large video files may take time to buffer
- Private repository videos require browser to be logged into GitHub

## Privacy

This extension:
- Does not collect any data
- Does not track your usage
- Only accesses URLs you explicitly provide
- Stores only your last used URL locally in your browser

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

MIT

## Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.
