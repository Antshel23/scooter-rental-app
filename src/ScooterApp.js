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
        if (age < 17) {
            throw new Error('Minimum age: 18')
        }
    const newUser = new User(username, password, age)
    this.registeredUsers[username] = newUser
    console.log(`User: ${newUser.username} created!`)
    return true
    }
    else {
        throw new Error('Please ensure the details provided meet the requirements')
    }
}

loginUser(username, password) {
    if (this.registeredUsers[username]) {
    return this.registeredUsers[username].login(password)
    console.log('Login successful')
}
    else {
    throw new Error('Username does not exist. Try again')
}
}

logoutUser(username) {
    if (this.registeredUsers[username]) {
        return this.registeredUsers[username].logout()
        console.log('Log out successful')
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
    console.log(`New Scooter: ${newScooter.serial} created at ${newScooter.station}`)
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
    console.log(`Scooter: ${scooter.serial} docked at ${scooter.station}`)
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
    console.log(`Scooter: ${scooterSerial} rented to ${user.username} from ${station}`)
    }
    else {
        throw new Error('Scooter unavailable')
    }
}

print() {
console.log(this.registeredUsers)
console.log(this.stations)
}
}

module.exports = ScooterApp