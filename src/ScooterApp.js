const Scooter = require('./Scooter.js')
const User = require('./User.js')

class ScooterApp {
    constructor() {
this.stations = {
    'England': [],
    'France': [],
    'Spain': []
}
this.registeredUsers = {}
this.scooters = []
}

registerUser(username,password,age) {
    if (typeof username == 'string' && typeof password == 'string' && typeof age == 'number') {
        if (this.registeredUsers[username]) {
            throw new Error('User already exists');
        }
    const newUser = new User(username, password, age)
    this.registeredUsers[username] = newUser
    //console.log(`User: ${newUser.username} created!`)
    return true
    }
    else {
        throw new Error('Please ensure the details provided meet the requirements')
    }
}

loginUser(username, password) {
    if (this.registeredUsers[username]) {
    return this.registeredUsers[username].login(password)
}
    else {
    throw new Error('Username does not exist. Try again')
}
}

logoutUser(username) {
    if (this.registeredUsers[username]) {
        return this.registeredUsers[username].logout()
    }
    else {
        throw new Error('Username does not exist. Try again')
    }
}

createScooter(station) {
    if (this.stations[station]) {
    const newScooter = new Scooter(station)
    this.stations[station].push(newScooter.serial)
    this.scooters.push(newScooter)
    return newScooter
}
    else {
    throw new Error('Station does not exist')
}
}

dockScooter(scooter, station) {
    if (scooter instanceof Scooter && this.stations[station]) {
        if (!scooter.user) {
    this.stations[station].push(scooter.serial)
    scooter.dock(station)
        }
}
else {
    throw new Error('Docking not possible')
}
}

rentScooter(station, user) {
    if (this.stations[station] && this.stations[station].length > 0 && user instanceof User) {
    const scooterSerial = this.stations[station][0]
    const scooterChosen = this.scooters.find(scooter => scooter.serial === scooterSerial)
    scooterChosen.rent(user)
    this.stations[station].shift()
    }
    else {
        throw new Error('Scooter unavailable')
    }
}

print() {

}
}

module.exports = ScooterApp