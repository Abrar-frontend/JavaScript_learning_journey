// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const str = ""
console.log(Boolean(str))

const NO = 0n
console.log(Boolean(NO))

const def = undefined;
console.log(Boolean(def))

//truthy values
// "0", 'false', " ", [], {}, function(){}

const func = function (){}
console.log(Boolean(func))

const user = []
console.log(Boolean(user))

const obj = {}
console.log(Boolean(obj))

if(Object.keys(obj).length == 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 10 ?? 5
val1 = 5 ?? null
val1 = undefined ?? 5

console.log(val1)
