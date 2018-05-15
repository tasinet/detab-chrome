Detab is a Google Chrome/Chromium extension that disables the tab functionality by detaching newly created tabs in new windows.

It is made with tiling window managers in mind, that usually have native tab management.

What's under the hood? Literally two lines:

    chrome.tabs.onCreated.addListener( tab => {
        chrome.windows.create({tabId: tab.id})
    });

