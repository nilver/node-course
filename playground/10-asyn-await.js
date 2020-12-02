
const add = (a,b ) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(a < 0 || b < 0 ){
                return reject('Should be positive')
            }
            resolve(a +b)
        }, 2000)
    })
}
const doWork = async () =>{
   const sum = await add(5,-3)
   const sum2 = await add(sum,2)
   const sum3 = await add(sum2,-5)
   return sum3
   
}

console.log(doWork())
console.log('---------------------------------')
doWork().then((ok) => {
    console.log('Result: ', ok)
}).catch((e) => {
    console.log('Error !', e)
})