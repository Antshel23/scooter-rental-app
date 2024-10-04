const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('function tests', () => {
    test('registerUser for positive case', () => {
        const app1 = new ScooterApp();
        expect(app1.registerUser('antshel23', 'pass', 22)).toEqual(true);
    });
});

