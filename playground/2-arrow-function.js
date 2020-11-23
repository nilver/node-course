//const square = function (num){

  //  return num*num
//}

//const squareArrow = (e) => {
 //   return e * e
//}

//const squareArrow2 = (e) => e * e

//console.log(squareArrow(4))
//console.log(squareArrow2(5))

const event = {
    name: 'TAke a exam',
    guestList: ['Luis','Juan','Carlos'],
    printSomething() {
        console.log('print function, name: '+ this.name)
        this.guestList.forEach((item) => {
            console.log(item + 'is attending '+this.name)
        })
    }
}

event.printSomething()