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
    const newUser = new User(username, password, age)
    this.registeredUsers[username] = newUser
    console.log(`User: ${newUser.username} created!`)
    return true
    }
    else {
        throw Error('Please ensure the details provided meet the requirements')
    }
}

loginUser(username, password) {

}

logoutUser(username) {

}

createScooter(station) {

}

dockScooter(scooter, station) {

}

rentScooter(scooter, user) {

}

print() {

}
}

module.exports = ScooterApp