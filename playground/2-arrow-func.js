// const square = function (x){
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

//shorthand syntax
// const square = (x) => x * x

// console.log(square(124))


// const event = {
//     name: 'Sounds & Stories',
//     printGuestList: function (){
//         console.log('Guest list for '+ this.name)
//     }
// }
// event.printGuestList()

//ES6 Method
const event = {
    //method into an object
    name: 'Sounds & Stories',
    guestList: ['Neil', 'Larry', 'Naima'],
    printGuestList(){
        console.log('Guest list for '+ this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' +this.name)
        })
    }
}
event.printGuestList()

//Arrow Function
// const event = { //not well suited for methods
//     name: 'Sounds & Stories',
//     printGuestList: () => {
//         console.log('Guest list for '+ this.name)
//     }
// }
// event.printGuestList()