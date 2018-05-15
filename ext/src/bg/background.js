chrome.tabs.onCreated.addListener( tab => {
    const options = {tabId: tab.id};

    if (tab.url !== 'chrome://newtab/')
        options.type = 'popup';

    chrome.windows.create(options);
});
