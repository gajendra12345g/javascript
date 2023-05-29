const find=(arr)=>{
    const sorted=arr.sort((a,b)=>b-a);
    return sorted[0]+sorted[1];
}
console.log(find([1,2,3,4,6]));