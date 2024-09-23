import Validator from './validator';

export default class User {
    constructor(name) {
        this.name = name;
    };

    get name() {
        return this._name;
    };

    set name(value) {
        const validator = new Validator();
        this._name = validator.validateUsername(value);
    };
};
