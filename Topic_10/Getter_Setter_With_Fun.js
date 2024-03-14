function User(email , password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this , 'email',{
        get: function(){
           return this._email.toUpperCase()
        },
        set: function(value){
         this._email = value
        }
    })

    Object.defineProperty(this , 'password',{
        get: function(){
           return `45^${this._password.trim()}@12`
        },
        set: function(value){
         this._password = value
        }
    })
  
}

const khan = new User('khan@gmail.com','  khaniskhan         ')
console.log(khan.email)
console.log(khan.password)