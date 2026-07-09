window.CSFloat = window.CSFloat || {};

window.CSFloat.applyFilters = async function () {
    console.count("applyFilters");
    console.time("applyFilters");
    const settings = await window.CSFloat.getSettings();

    const cards = document.querySelectorAll("item-card");

    cards.forEach(card => {

        let visible = true;

        if (settings.onlineOnly) {

            const seller = card.querySelector("app-seller-details-widget");

            if (seller) {

                const text = seller.textContent || "";

                if (!text.includes("Online"))
                    visible = false;

            }

        }

        if (visible && settings.bargainOnly) {

            const buttons = [...card.querySelectorAll("button")];

            const hasBargain = buttons.some(btn =>
                btn.textContent &&
                btn.textContent.trim().includes("Bargain")
            );

            if (!hasBargain)
                visible = false;

        }

        card.style.display = visible ? "" : "none";

    });
    console.timeEnd("applyFilters");
};