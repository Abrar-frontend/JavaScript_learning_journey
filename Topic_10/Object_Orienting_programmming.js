class User{

    constructor(){
    this.userName = "Khan",
    this.loginCount = 8,
    this.signIn  = true
    }

    userDetail(){
        console.log(`User Name is ${this.userName}`)
        console.log(this)
    }
}

// const newUser = new User()
// newUser.userDetail()

function user(user , count , login){
    this.userName = user;
    this.lgoinCount = count;
    this.IsLogin = login

    this.userDetails = function(){
        console.log(`Welcome ${this.userName}`)
    }
    return this 
}

const userOne = new user('khan Sahab',8,true)
console.log(userOne)