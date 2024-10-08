const User = require('./User.js')

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
console.log(`${this.user.username} has taken Scooter ${this.serial}`)
    return true
 }
 else if (!user instanceof User) {
    throw new Error('Not possible')
 }
 else if (user instanceof User && this.charge < 20 && this.isBroken == false) {
    throw new Error('Scooter needs to charge')
 }
 else if (user instanceof User && this.charge > 20 && this.isBroken !== false) {
    throw new Error('Scooter is broken')
     }

}

dock(station) {
if (this.user) {
    this.user = null
    console.log(`Scooter: ${this.serial} docked at ${station}`)
    return true
}
else {
    throw new Error('Scooter is not rented')
}
}
}


module.exports = Scooter