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

test('Cannot registerUser for underage user', () => {
    const app1 = new ScooterApp()
    expect(() => {
        app1.registerUser('antshel23', 'pass', 15)
    }).toThrow('Minimum age: 18')
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

describe('createScooter function tests', () => {
    test('createScooter for positive case', () => {
        const app1 = new ScooterApp()
        app1.createScooter('England')
        app1.createScooter('France')
        app1.createScooter('England')
        expect(app1.stations).toEqual({ England: [ 1, 3 ], France: [ 2 ], Spain: [] });
    })
    test('cannot createScooter for negative case', () => {
        const app1 = new ScooterApp()
        expect(() => app1.createScooter('Germany')).toThrow('Station does not exist');
    })
})

describe('dockScooter function tests', () => {
    test('dockScooter for positive case', () => {
        const app2 = new ScooterApp()
        app2.registerUser('antshel2', 'pass', 22)
        const user = app2.registeredUsers['antshel2']
        app2.loginUser('antshel2', 'pass')
        const scooter1 = app2.createScooter('England')
        scooter1.rent(user)
        app2.dockScooter(scooter1,'England')
        expect(app2.stations['England']).toEqual([scooter1.serial]);
    })
    test('cannot dockScooter for negative case', () => {
        const app3 = new ScooterApp()
        app3.registerUser('antshel2', 'pass', 22)
        const user = app3.registeredUsers['antshel2']
        app3.loginUser('antshel2', 'pass')
        const scooter2 = app3.createScooter('England')
        scooter2.rent(user)
        expect(() => app3.dockScooter(scooter2,'Germany')).toThrow('Docking not possible');
    })
})

describe('rentScooter function tests', () => {
    test('rentScooter for positive case', () => {
        const app = new ScooterApp()
        app.registerUser('antshel2', 'pass', 22)
        const user = app.registeredUsers['antshel2']
        app.loginUser('antshel2', 'pass')
        const scooter1 = app.createScooter('England')
        app.rentScooter('England', user)
        expect(app.stations['England']).toEqual([]);
        expect(scooter1.user.username).toContain('antshel2');
    })
    test('cannot rentScooter for negative case', () => {
        const app = new ScooterApp()
        app.registerUser('antshel2', 'pass', 22)
        const user = app.registeredUsers['antshel2']
        app.loginUser('antshel2', 'pass')
        const scooter1 = app.createScooter('England')
        expect(() => app.rentScooter('Spain', user)).toThrow('Scooter unavailable');
    })
})

describe('print function tests', () => {
    test('prints info', () => {
        const app = new ScooterApp()
        app.registerUser('antshel2', 'pass', 22)
        const user = app.registeredUsers['antshel2']
        app.loginUser('antshel2', 'pass')
        const scooter1 = app.createScooter('England')
        expect(app.print()).not.toBe(null)
    })
})