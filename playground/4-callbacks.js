/* setTimeout(() =>{
    console.log('2nd seconds')

}, 2000)

const names = ['NIlver','Li','Ka']
const shortNames = names.filter((name) => {
    return name.length < 3 
})
//console.log(shortNames)

const geoCode = (address, callback) =>{

    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0
        }
        callback(data)
    
    }, 2000)
    }

geoCode('Caracas', (re) => {
    console.log(re)
}) */

//challenge
const add = (a, b, callback) =>{
    setTimeout(() =>{
        const result = a + b    
        callback(result)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})