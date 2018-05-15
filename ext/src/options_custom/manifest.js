// SAMPLE
this.manifest = {
    "name": "Detab",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("settings"),
            "group": "Settings",
            "name": "new_window_popup_mode",
            "type": "checkbox",
            "label": "Open new windows in popup mode",
        },
        {
            "tab": i18n.get("settings"),
            "group": "Information",
            "type": "description",
            "text": "<H4>Popup mode has no \"chrome\" around the page content:<BR>No tab bar, location bar or any other toolbar.</h4>"
        },
        {
            "tab": i18n.get("settings"),
            "group": "Information",
            "type": "description",
            "text": "<H4>Pro Tip: Press Ctrl+Shift+L to toggle between normal mode and popup mode</H4>"
        },
    ]
};
