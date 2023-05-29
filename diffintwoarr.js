const diffarr=(arr,arr1)=>{
    return arr.filter(element=>!arr1.includes(element))

}
console.log(diffarr([1,2,3,4,5,10],[1,2,5,9,0]))