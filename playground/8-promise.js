const doWorkPromise = new Promise((resolve, rejected) => {
    setTimeout(() =>{
        //resolve([3,43,5])        
        rejected('This is error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) =>{
    console.log('Errorr!', error )
})