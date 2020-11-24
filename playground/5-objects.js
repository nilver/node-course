// object property shorthand

const name = 'Nilver'
const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'Caracas'
}
//console.log(user)
// object destructuring
const product = {
    label: 'Red shoes',
    price: 3,
    stock: 233,
    salesPrice: undefined
}
/* const price = product.price
console.log(price) 
const {label: labelAux, price, noEsta = 4} = product
console.log(labelAux)
console.log(price) 
console.log(noEsta)*/
const transaction = (type, {label,s = '3a4'}) => {
    console.log(type, label, s)
}

transaction('order', product)
