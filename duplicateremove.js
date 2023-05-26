const arr=[1,2,1,1,5,]
const duplicate=(array)=>{
    return [...new Set(array)]
}
console.log(duplicate(arr))