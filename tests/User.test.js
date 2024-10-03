const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('test constructor', () => {
    test('constructor values as expected', () => {
        const user1 = new User('Antshel23', 'pass', 22)
        expect(user1).toEqual({username: 'Antshel23', password: 'pass', age: 22, loggedIn: false})
    })
})

describe('login function', () => {
    test('login possible', () => {
        const user1 = new User('Antshel23', 'pass', 22)
        expect(user1.login('pass')).toEqual(true)
    })
})

describe('logout function', () => {
    test('logout possible', () => {
        const user1 = new User('Antshel23', 'pass', 22)
        user1.login('pass')
        expect(user1.logout()).toEqual(true)
    })
})
