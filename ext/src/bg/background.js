var settings = new Store("settings");

chrome.tabs.onCreated.addListener( tab => {
    if (settings.get('new_window_popup_mode') && tab.url !== 'chrome://newtab/') {
        openPopup(tab);
    } else {
        openNormal(tab);
    }
});

openNormal = (tab) => {
    chrome.windows.create({tabId: tab.id})
}

openPopup = (tab) => {
    chrome.windows.create({tabId: tab.id, type: 'popup'})
}

toggleActiveTab = () => {
    chrome.windows.getCurrent( win => {
        const windowType = win.type;
        chrome.tabs.getAllInWindow( tabs => {
            const tab = tabs.filter( tab => tab.active )[0];
            if (windowType === 'normal') {
                openPopup(tab);
            } else {
                openNormal(tab);
            }
        });
    });
}

chrome.commands.onCommand.addListener( () => toggleActiveTab() );
