export default class Validator {
    validateUsername(username) {
        const re = /^[a-z]((?!.*\d{4})[a-z0-9-_])*[a-z]$/i.test(username);

        if (re) {
            return username;
        } else {
            throw new Error('Введите корректное имя');
        };
    };
};
