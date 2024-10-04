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
}
else {
    throw new Error('Station does not exist')
}
}

dockScooter(scooter, station) {

}

rentScooter(scooter, user) {

}

print() {

}
}

module.exports = ScooterApp