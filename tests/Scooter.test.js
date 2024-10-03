const Scooter = require('../src/Scooter')

describe('test constructor', () => {
    test('constructor values ', () => {
        const scooter1 = new Scooter('euston')
        const scooter2 = new Scooter('euston')
        expect(scooter2).toEqual({station: 'euston', user: null, serial: 2, charge: 100, isBroken: false})
    })
})