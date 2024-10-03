const Scooter = require('../src/Scooter')
const User = require('../src/User')

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