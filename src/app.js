window.CSFloat = window.CSFloat || {};

window.CSFloat.start = async function () {

    if (document.readyState === "loading") {

        await new Promise(resolve => {
            document.addEventListener(
                "DOMContentLoaded",
                resolve,
                { once: true }
            );
        });

    }

    await window.CSFloat.createUI(() => {

        if (typeof window.CSFloat.applyFilters === "function") {
            window.CSFloat.applyFilters();
        }

    });

    if (typeof window.CSFloat.initObserver === "function") {
        window.CSFloat.initObserver();
    }

    if (typeof window.CSFloat.applyFilters === "function") {
        window.CSFloat.applyFilters();
    }

};

window.CSFloat.start();