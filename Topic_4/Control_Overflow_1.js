const isUsrLoggedIn = true;
const temprature = 40;

if(isUsrLoggedIn){
    console.log("Yes This Usr Is Logged In")
} else {
    console.log("Usr Isn't Logged In")
}

if(temprature < 50){
    console.log(`The tempratur is less then 50`)
} else if (temprature > 50){
    console.log("temprature is grater then 50")
} else {
    console.log("temprature is equal to 50")
}

// comparession value assign 
// <, >, <=, >=, ==, !=, ===, !==

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged In")
}

if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow user to buy something")
}
