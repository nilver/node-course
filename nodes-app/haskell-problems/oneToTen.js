//Find the last element of a list.

const list=[7,6,5,4,5,6,3,4,4]

console.log('last element of list: '+ list[list.length -1])

const last = (n) => {
    return (n.size ==1) ? n : last(n.rest);
}
list.rest

console.log('>Recursivo last element: '+ last(list))