const Scooter = require('../src/Scooter')

describe('test constructor', () => {
    test('station set', () => {
        const scooter1 = new Scooter('euston')
        expect(scooter1.station).toBe('euston')
    })
})