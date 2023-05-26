const check=(arr)=>{
    if(arr<=1){
        return false;
    }
    for(let i=0; i<Math.sqrt(arr);i++){
       if(arr%0==0){
        return false;
       }
    }
    return true;
}
console.log(check(55))