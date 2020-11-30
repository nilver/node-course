/* const add = (a, b, callback) => {

    setTimeout(() =>{
        const res = a +b
        callback(res)
    }, 2000)
}

add(4,5, (e) => {
    console.log(e)
} ) */

const doWorkCallback = (callback) =>{

    setTimeout(() =>{
        //callback('this is error', undefined)
        callback(undefined, [3,4,4])
    }, 2000)

}

doWorkCallback((error, result) =>{
    if(error){
        return console.log(error)
    }

    console.log(result)
})
