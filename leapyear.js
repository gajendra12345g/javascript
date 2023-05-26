const check =(year)=>{
    if(year%4==0&&(year%100!=000||year%400==0)){
        return true;}
        else{
            return false;
        }
    }
console.log(check(2000))