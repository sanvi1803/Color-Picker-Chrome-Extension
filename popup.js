const btn = document.querySelector('.changeColorBtn');
const colorValue = document.querySelector('.colorValue');
const colorGrid = document.querySelector('.colorGrid');

btn.addEventListener('click', async () => {
    // console.log('clicked');

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    // This tab is the current tab opened in the chrome
    // console.log(tab);
    // This function is so as to inject script from popup.js inside a tab
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
    });
    try {
        if (!window.EyeDropper) {
            colorValue.textContent =
                "Your browser does not support the EyeDropper API";
            return;
        }
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then(async (result) => {
                colorValue.textContent = result.sRGBHex + ' copied to clipboard';
                colorGrid.style.backgroundColor = result.sRGBHex;
                try {
                    await navigator.clipboard.writeText(result.sRGBHex);
                } catch (error) {
                    console.error(error)
                }
                console.log(result.sRGBHex);

            })
            .catch((e) => {
                colorValue.textContent = e;
            }); // Log the selected color
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('User canceled color selection.');
        } else {
            console.error('Error while picking color:', error);
        }
    }
});