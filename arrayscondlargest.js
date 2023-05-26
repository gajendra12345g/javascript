const arr=[1,4,3,6,5,]
const find=(arr)=>{
    const s=arr.sort((a,b)=>b-a);
    return s[1]
}
console.log(find(arr));