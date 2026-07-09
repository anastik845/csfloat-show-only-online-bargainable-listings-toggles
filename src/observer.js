window.CSFloat = window.CSFloat || {};

window.CSFloat.initObserver = function () {

    if (window.CSFloat._observer)
        return;

    let timer = null;

    const schedule = () => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            if (window.CSFloat.applyFilters) {
                window.CSFloat.applyFilters();
            }

        }, 100);

    };

    window.CSFloat._observer = new MutationObserver(mutations => {

        for (const mutation of mutations) {

            if (!mutation.addedNodes.length)
                continue;
        
            let hasNewCards = false;
        
            for (const node of mutation.addedNodes) {
        
                if (node.nodeType !== Node.ELEMENT_NODE)
                    continue;
    
                if (node.matches?.("item-card")) {
                    hasNewCards = true;
                    break;
                }
        
                if (node.querySelector?.("item-card")) {
                    hasNewCards = true;
                    break;
                }
            }
        
            if (hasNewCards) {
                schedule();
                break;
            }
        }

    });

    window.CSFloat._observer.observe(document.body, {
        childList: true,
        subtree: true
    });

};