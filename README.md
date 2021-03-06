Detab is a Google Chrome/Chromium extension that disables the tab functionality by detaching newly created tabs in new windows.

It is made with tiling window managers in mind, that usually have native tab management.

What's under the hood? The crux of it is literally two lines:

    chrome.tabs.onCreated.addListener( tab => {
        chrome.windows.create({tabId: tab.id})
    });

It is also on the [Chrome Web Store](https://chrome.google.com/webstore/detail/detab-detach-new-tabs-upo/chffoojfmdlemhkjmcgbdkaheoenmfkk).

To install from here, drag-drop the .crx file to your chrome://extensions page.

You can optionally open new windows in popup mode (hiding all toolbars).

You can also toggle popup mode (i.e. show/hide all toolbars) with Ctrl+Shift+L.
