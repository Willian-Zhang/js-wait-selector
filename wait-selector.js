const sleep = (ms) => new Promise(r => setTimeout(r, ms));
if (!window.MutationObserver) {
    throw Error('Environment does not support MutationObserver');
}
const wait$all = async (selectors, observee = document.body, mustWait = false) => {
    let elements = observee.querySelectorAll(selectors);
    if (!mustWait && elements.length > 0) {
        return elements;
    }
    return new Promise((resolve, reject) => {
        let observer = new MutationObserver((mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    elements = observee.querySelectorAll(selectors);
                    if (elements.length > 0) {
                        observer.disconnect();
                        resolve(elements);
                    }
                }
            }
        });
        const config = { attributes: false, childList: true, subtree: false };
        observer.observe(observee, config);
    });
};
const wait$ = async (selectors, observee = document.body, mustWait = false) => {
    let elements = observee.querySelector(selectors);
    if (!mustWait && elements) {
        return elements;
    }
    return new Promise((resolve, reject) => {
        let observer = new MutationObserver((mutationsList, observer) => {
            for (let mutation of mutationsList) {
                if (mutation.type == 'childList') {
                    elements = observee.querySelector(selectors);
                    if (elements) {
                        observer.disconnect();
                        resolve(elements);
                    }
                }
            }
        });
        const config = { attributes: false, childList: true, subtree: false };
        observer.observe(observee, config);
    });
};
//# sourceMappingURL=wait-selector.js.map