class User {
    constructor(username, password, age) {
        this.username = username
        this.password = password
        this.age = age
        this.loggedIn = false
    }

login(password) {
if (password == this.password) {
    this.loggedIn = true
    console.log('Logged in')
    return true
}
else {
    throw Error('Incorrect password')
    return false
}
}

logout() {
    if (this.loggedIn == true) {
this.loggedIn = false
 console.log('Logged out')
return true
    }
    else {
        throw Error ('Already logged out')
    }
}
}

module.exports = User