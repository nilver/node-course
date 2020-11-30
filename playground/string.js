function modifyArray(nums) {
    
    let  n = Array.from(nums.toString()).map(Number)
    let res=[]

    n.forEach((e) => {
        if(e % 2 ==0){
            res.push(e*2)
        }else{
            res.push(e*3)
        }
    })

    console.log(res)
}

modifyArray("1816".split(' ').map(Number))