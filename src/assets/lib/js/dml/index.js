import dmlo from './dmlo';

class DomManipulateLibrary {
    constructor() {
        return this.create;
    }

    create(selector) {
        return new dmlo(selector);
    }
}

export default new DomManipulateLibrary();
