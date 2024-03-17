// class User{
//     constructor(userName , email , password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptedPassword(){
//         return `#14${this.password}hase`
//     }

//     changeUser(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const newUser = new User('Abrar khan','khan@gmail.com','125')
// console.log(newUser.encryptedPassword())
// console.log(newUser.changeUser())

function User(userName , email , password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function(){
   return `0#${this.password.toUpperCase()}*253#`
}
User.prototype.changeUser = function(){
    return `${this.userName.toUpperCase()}`
}

const secUser = new User('khan Sahab','sahab@gmail.com','123456')
console.log(secUser.changeUser())
console.log(secUser.encryptedPassword())