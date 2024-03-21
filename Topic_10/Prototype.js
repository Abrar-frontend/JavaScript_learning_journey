const myName = 'khan    '


let arr = ['khan','12345']

let Heros = {
    Sahlawdeen : 'Heros in war',
    MehmadFatah : 'Koston Dinya',

    Heros : function(){
        console.log('All islamic heros')
    } 
}
let no = 1233
// Heros.Heros()

Object.prototype.AllInON = function(){
    console.log('this function is have every where')
}

// myName.AllInON()
// arr.AllInON()
// no.AllInON()

Array.prototype.arryFunc = function(){
    console.log('this function have only in array')
}

// arr.arryFunc()
// no.arryFunc()


const user = {
    name : 'abrar',
    email : 'abrar@gmail.com'
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssigment : 'js Assigment',
    fulltime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

// console.log(TASupport.isAvailable)
// console.log(teacher.name)

Object.setPrototypeOf(teachingSupport,teacher)
// console.log(teachingSupport.makeVideo)

String.prototype.trueLength = function(){
    console.log(`${this.trim().length}`)
}

myName.trueLength()


