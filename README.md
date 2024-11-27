# Color Picker Chrome Extension

## Overview

This Chrome extension allows users to pick colors from any webpage using the EyeDropper API. Selected colors are displayed in a popup UI and can be copied to the clipboard.

## Features

- **Color Selection**: Use the EyeDropper tool to select colors from web pages.
- **Clipboard Integration**: Copy selected colors directly to the clipboard.
- **UI Display**: Display the selected color in a popup with hexadecimal value and a color preview.

## Usage

1. **Installation**:
   - Clone the repository or download the extension files.
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode**.
   - Click on **Load unpacked** and select the extension directory.

2. **Using the Extension**:
   - Click on the extension icon in the Chrome toolbar to activate the color picker.
   - Click on any part of a webpage to select a color.
   - The selected color's hexadecimal value will be displayed in the popup UI.
   - Click on the color value to copy it to the clipboard.

3. **Requirements**:
   - Google Chrome browser.
   - Support for the EyeDropper API in Chrome.

## Development

### Technologies Used

- **Chrome Extension APIs**: `chrome.tabs`, `chrome.scripting`, `chrome.runtime`, etc.
- **JavaScript**: ES6+ for functionality and event handling.
- **HTML/CSS**: Popup UI layout and styles.

### How to Contribute

1. Fork and clone the repository.
2. Implement new features or enhancements.
3. Test thoroughly in Chrome browser.
4. Submit a pull request with a detailed description of changes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- EyeDropper API documentation from Chrome Developers.
- Inspiration from similar color picker extensions.
