"use strict";
chrome.omnibox.onInputEntered.addListener((text) => {
    var newURL = "https://www.bing.com/search?q=" + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
});
