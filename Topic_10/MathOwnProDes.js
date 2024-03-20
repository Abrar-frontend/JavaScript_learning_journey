const describer = Object.getOwnPropertyDescriptor(Math , "PI")
// console.log(describer)

// console.log(Math.PI)

const tea = {
    name : 'Lemon tea',
    price : 120,
    isAvailiable : true,

    order : function(){
        console.log('give your order')
    }
}


// console.log(Object.getOwnPropertyDescriptor(tea,'order'))

// console.log(tea.order = 'khan')

// Object.defineProperty(tea,'order',{
//     writable : false
// })

// console.log(Object.getOwnPropertyDescriptor(tea,'order'))
// tea.order = 'khan'

// console.log(tea)


for (let [key , value] of Object.entries(tea)){
    console.log(key , value)
} 