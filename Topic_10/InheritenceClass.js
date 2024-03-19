class User{
    constructor(usrName){
        this.usrName = usrName;
    }

    UserName() {
        console.log('User name is ' + this.usrName)
    }
}

const usr = new User('Abdullah')
// console.log(usr)
// usr.UserName()

class Teacher extends User{
    constructor( email , password , usrName){
        super(usrName)
        this.email = email;
        this.password = password;
    }

    Course(){
        console.log(`New Course Addeed by  ${this.usrName}`)
    }
}

const teach = new Teacher('@gmail.com','123','khan')
teach.Course()

console.log(teach instanceof Teacher)