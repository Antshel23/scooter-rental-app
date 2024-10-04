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
//console.log(`${this.user} has taken Scooter ${this.serial}!`)
return true
 }
 else if (!user instanceof User) {
    throw new Error('Not possible')
    return false
 }
 else if (user instanceof User && this.charge < 20 && this.isBroken == false) {
    throw new Error('Scooter needs to charge')
    return false
 }
 else if (user instanceof User && this.charge > 20 && this.isBroken !== false) {
    throw new Error('Scooter is broken')
    return false
     }

}

dock(station) {
if (this.user) {
    //add scooterapp dockScooter function to add back to station
this.user = null
return true
}
else {
    throw new Error('Scooter is not rented')
    return false
}
}
}


module.exports = Scooter