const fName = 'Cleo'
const userAge = 36

const user= {
    fName,
    age: userAge,
    location: 'Philadelphia'
}
console.log(user)

//Object Destructuring: when you have an object and you are trying to access properties from it

const product = {
   label: 'Sula by Toni Morrison',
   price: 17.5,
   stock: 300, 
   salePrice: undefined,
   rating: 4.5
}

const transaction = (type, {label, stock = 0}) => {
    console.log(type, label, stock)
}

transaction('order', product)
