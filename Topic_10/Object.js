// function MultiplyBy5(num){
//    return num * 5
// }

// MultiplyBy5.power = 5;

// // console.log(MultiplyBy5.power)
// console.log(MultiplyBy5(5))
// console.log(MultiplyBy5.prototype)

function CreateUser(Username , score){
    this.username = Username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    this.score++
}

CreateUser.prototype.printMe = function (){
    return `${this.username} score is ${this.score}`
}

const khan = new CreateUser('khan', 5)
khan.increment()
console.log(khan.printMe())

// when use new keyword what happenend behind the scence
// A new object is created: The new keyword initiates the creation of a new JavaScript object.
// A prototype is linked: Mean that the prototype is link to the create obj by using of new keyword