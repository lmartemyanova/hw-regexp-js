import Validator from '../validator';

describe('must give positive results', () => {

    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test.each([
        ['name from latin letters', 'Lola', 'Lola'], 
        ['name not more than 3 numbers in the middle', 'Lola123Lola', 'Lola123Lola'],
        ['name with - in the middle', 'Lola-Lola', 'Lola-Lola'],
        ['name with _ in the middle', 'Lola_Lola', 'Lola_Lola'],
        ['name with _, - and not more than 3 numbers straight in the middle', 'Lola_1-2_3-Lola', 'Lola_1-2_3-Lola'],
    ])('testing validator function with %s status and %s username', (_, username, expected) => {
        expect(validator.validateUsername(username)).toBe(expected);
    });
});

describe('must give negative results', () => {

    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test.each([
        ['start with number', '8Indigo', 'Введите корректное имя'],
        ['end with number', 'Anna19', 'Введите корректное имя'], 
        ['more than 3 numbers straight', 'Kitty12345ii', 'Введите корректное имя'], 
        ['start with _', '_Anna', 'Введите корректное имя'], 
        ['end with _', 'Anna_', 'Введите корректное имя'], 
        ['start with -', '-Anna', 'Введите корректное имя'], 
        ['end with -', 'Anna-', 'Введите корректное имя'], 
        ['not latin letters', 'кошечка11ав', 'Введите корректное имя'], 
        ['other symbols (not - & _)', 'Anna=love', 'Введите корректное имя'], 
    ])('testing validator function with %s status and %s username', (_, username, expected) => {
        expect(() => validator.validateUsername(username)).toThrow(expected);
    });
});
