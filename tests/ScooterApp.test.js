const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('registerUser function tests', () => {
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

describe('loginUser function tests', () => {
    test('loginUser for positive case', () => {
        const app1 = new ScooterApp()
        app1.registerUser('antshel23', 'pass', 22)
        expect(app1.loginUser('antshel23', 'pass')).toEqual(true);
    })
    test('cannot loginUser for incorrect password', () => {
        const app1 = new ScooterApp();
        app1.registerUser('antshel23', 'pass', 22);
        expect(() => app1.loginUser('antshel23', 'pass1')).toThrow('Incorrect password');
      });

      test('cannot loginUser for incorrect username', () => {
        const app1 = new ScooterApp();
        app1.registerUser('antshel23', 'pass', 22);
        expect(() => app1.loginUser('antshel2', 'pass')).toThrow('Username does not exist. Try again');
      });
      
})

describe('logoutUser function tests', () => {
    test('logoutUser for positive case', () => {
        const app1 = new ScooterApp()
        app1.registerUser('antshel23', 'pass', 22)
        app1.loginUser('antshel23', 'pass')
        expect(app1.logoutUser('antshel23')).toEqual(true);
    })
    test('cannot loginoutUser that is already logged out', () => {
        const app1 = new ScooterApp()
        app1.registerUser('antshel23', 'pass', 22)
        app1.loginUser('antshel23', 'pass')
        app1.logoutUser('antshel23')
        expect(() => app1.logoutUser('antshel23')).toThrow('Already logged out');
      });

      test('cannot loginUser for incorrect username', () => {
        const app1 = new ScooterApp()
        app1.registerUser('antshel23', 'pass', 22)
        app1.loginUser('antshel23', 'pass')
        expect(() => app1.logoutUser('antshel2')).toThrow('Username does not exist. Try again');
      });
})