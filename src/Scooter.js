const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

class Scooter {
    static nextSerial = 1

    constructor(station) {
        this.station = station
        this.user = null
        this.serial = Scooter.nextSerial++
        this.charge = 100
        this.isBroken = false
    }

rent(user) {
 if (user instanceof User && this.charge > 20 && this.isBroken == false) {
this.user = user
return true
console.log(`${this.user} has taken Scooter ${this.serial}!`)
 }
 else if (user instanceof User && this.charge < 20 && this.isBroken == false) {
throw Error('Scooter needs to charge')
 }
 else if (user instanceof User && this.charge > 20 && this.isBroken !== false) {
    throw Error('Scooter is broken')
     }
     else {
        throw Error('Not possible')
     }
}

dock(station) {

}
}

module.exports = Scooter