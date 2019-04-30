class dmlObject {
    /**
     * @return {boolean}
     */
    constructor(selector) {
        Object.defineProperty(this, 'selector', { value: (typeof selector === 'string') ? selector : null });
        Object.defineProperty(this, 'instance', { value: createInstance(selector) });
        if(!this.selector) return false;
    }

    get isList() {
        return (this.instance instanceof NodeList);
    }

    get length() {
        return (this.isList) ? this.instance.length : 1;
    }

    get first() {
        if(this.isList) return (this.length > 0) ? this.instance[0] : null;
        else return this.instance;
    }
}

function createInstance(selector) {
    if(selector instanceof HTMLElement) return selector;
    else if(typeof selector === 'string') return document.querySelectorAll(selector);
    else return null;
}

export default dmlObject;