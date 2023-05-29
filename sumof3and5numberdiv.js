const sum=(number)=>{
    let sum1=0;
    for(let i=0;i<number;i++){
        if(i%3==0||i%5==0){
            sum1+=i;
        }
    }
    return sum1;
}
console.log(sum(50));