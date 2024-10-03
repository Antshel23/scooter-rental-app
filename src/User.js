const Scooter = require('../src/Scooter')
const ScooterApp = require('../src/ScooterApp')

class User {
    constructor(username, password, age) {
        this.username = username
        this.password = password
        this.age = age
        this.loggedIn = false
    }

login(password) {

}

logout() {

}
}

module.exports = User