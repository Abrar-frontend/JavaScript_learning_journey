function setUserName(userName){
 this.userName = userName;
 console.log('checked')
}

function createUser(userName , email ,password ){
    setUserName.call(this, userName)
    this.email = email;
    this.password = password;
}

const user = new createUser('Abrar Khan','kahn@gmail.com','khan is kahn')
console.log(user)