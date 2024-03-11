class User{
    constructor(email,passowrd){
        this.email = email;
        this.passowrd = passowrd
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get passowrd(){
        return `@6${this._passowrd}5#1%`
    }

    set passowrd(value){
        this._passowrd = value
    }
}

const obj = new User('khan@gmail.com',152)
console.log(obj.passowrd)