window.CSFloat = window.CSFloat || {};

window.CSFloat.createUI = async function (onChange) {

    const UI = window.CSFloat.UI;

    if (document.getElementById(UI.wrapperId))
        return;

    const settings = await window.CSFloat.getSettings();

    const wrapper = document.createElement("div");
    wrapper.id = UI.wrapperId;

    wrapper.innerHTML = `
        <div class="csfloat-enhancer-title">
            Marketplace Filters
        </div>

        <label>
            <input
                id="${UI.onlineToggleId}"
                type="checkbox"
                ${settings.onlineOnly ? "checked" : ""}
            >
            Online Sellers
        </label>

        <label>
            <input
                id="${UI.bargainToggleId}"
                type="checkbox"
                ${settings.bargainOnly ? "checked" : ""}
            >
            Bargainable
        </label>
    `;

    const target = document.querySelector(".advanced-search");

    if (!target)
        return;

    target.parentNode.insertBefore(wrapper, target);

    const online = document.getElementById(UI.onlineToggleId);
    const bargain = document.getElementById(UI.bargainToggleId);

    online.addEventListener("change", async () => {

        await window.CSFloat.setOnlineOnly(online.checked);

        if (typeof onChange === "function")
            onChange();

    });

    bargain.addEventListener("change", async () => {

        await window.CSFloat.setBargainOnly(bargain.checked);

        if (typeof onChange === "function")
            onChange();

    });

};