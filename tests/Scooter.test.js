const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('test constructor', () => {
    test('constructor values as expected', () => {
        const scooter1 = new Scooter('England')
        const scooter2 = new Scooter('England')
        expect(scooter2).toEqual({station: 'England', user: null, serial: 2, charge: 100, isBroken: false})
    })
})

describe('rent function', () => {
    test('rent out to a positive user ', () => {
        const scooter3 = new Scooter('England')
        const user3 = new User('ant', 'pass', 22)
        expect(scooter3.rent(user3)).toBe(true)
    })
    test('cannot rent out to a negativee user ', () => {
        const scooter3 = new Scooter('England')
        const na = 1
        expect(scooter3.rent(na)).toBe(undefined)
    })
})

describe('dock function', () => {
    test('dock removes from using user', () => {
const scooter4 = new Scooter('England')
const user4 = new User('ant', 'pass', 22)
scooter4.rent(user4)
        expect(scooter4.dock('England')).toBe(true)
    })
        test('dock cannot remove from a non-using user', () => {
const scooter5 = new Scooter('England')
const user5 = new User('ant', 'pass', 22)
scooter5.rent(user5)
        scooter5.dock('England')
        expect(() => scooter5.dock('England')).toThrow('Scooter is not rented')
    })
})