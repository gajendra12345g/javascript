var str="kanak";
const check=(str)=>{
    let reverse=str.split('').reverse().join('');
    return reverse===str;
}
console.log(check(str))