import User from '../usernames';

test('must create User object correctly if name is valid', () => {
    let user = new User('Anna');
    const correct = {
        _name: 'Anna',
    };
    expect(user).toEqual(correct);
});

test('must throw error if name is invalid', () => {
    expect(() => {
        new User('Anna99');
    }).toThrow('Введите корректное имя');
});

test('must get name of user if name was valid', () => {
    let user = new User('Anna');
    expect(user.name).toBe('Anna');
});
