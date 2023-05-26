var str="573678";
const find=(str)=>{
    return /^\d+s/.test(str);
}
console.log(find(str));