const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('function tests', () => {
    test('registerUser for positive case', () => {
        const app1 = new ScooterApp()
        expect(app1.registerUser('antshel23', 'pass', 22)).toEqual(true);
    })
    test('Cannot registerUser for invalid input', () => {
        const app2 = new ScooterApp()
        expect(() => {
            app2.registerUser('antshel23', 11, 22)
        }).toThrow('Please ensure the details provided meet the requirements')
    })

    test('Cannot registerUser for existing user', () => {
        const app1 = new ScooterApp()
        app1.registerUser('antshel23', 'pass', 22)
        expect(() => {
            app1.registerUser('antshel23', 'anotherPass', 30)
        }).toThrow('User already exists')
})
})

