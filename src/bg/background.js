chrome.tabs.onCreated.addListener( tab => {
    chrome.windows.create({tabId: tab.id, type: 'popup'})
});
