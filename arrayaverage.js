const arr=[1,2,3,4,5,];
const ave=(arr)=>{
    const sum=arr.reduce((total,number)=>total+number,0);
    return sum/arr.length;
}
console.log(ave(arr));