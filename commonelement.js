const arr1=[1,2,3,4,5,]
const arr2=[1,2,3,4]
const find=(arr1,arr2)=>{
    return arr1.filter((item)=>arr2.includes(item))
}
console.log(find(arr1,arr2))