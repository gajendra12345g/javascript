const diffarr=(arr,arr1)=>{
    return arr.filter((element)=>element!=arr1.includes(element))

}
console.log(diffarr([1,2,3],[1,2,]))