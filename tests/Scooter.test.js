const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('test constructor', () => {
    test('constructor values as expected', () => {
        const scooter1 = new Scooter('euston')
        const scooter2 = new Scooter('euston')
        expect(scooter2).toEqual({station: 'euston', user: null, serial: 2, charge: 100, isBroken: false})
    })
})

describe('test function', () => {
    test('rent out to a positive user ', () => {
        const scooter3 = new Scooter('euston')
        const user3 = new User('ant', 'pass', 22)
        expect(scooter3.rent(user3)).toBe(true)
    })
})