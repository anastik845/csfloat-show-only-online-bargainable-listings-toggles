window.CSFloat = window.CSFloat || {};

const KEYS = window.CSFloat.STORAGE_KEYS;

window.CSFloat.getSettings = function () {

    return new Promise(resolve => {

        chrome.storage.local.get(
            [
                KEYS.onlineOnly,
                KEYS.bargainOnly
            ],
            data => {
                resolve({
                    onlineOnly: !!data[KEYS.onlineOnly],
                    bargainOnly: !!data[KEYS.bargainOnly]
                });
            }
        );
    });
};

window.CSFloat.setOnlineOnly = function (value) {
    return chrome.storage.local.set({
        [KEYS.onlineOnly]: value
    });
};

window.CSFloat.setBargainOnly = function (value) {
    return chrome.storage.local.set({
        [KEYS.bargainOnly]: value
    });
};

window.CSFloat.getOnlineOnly = async function () {
    return (await window.CSFloat.getSettings()).onlineOnly;
};

window.CSFloat.getBargainOnly = async function () {
    return (await window.CSFloat.getSettings()).bargainOnly;
};