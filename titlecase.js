const find=(str)=>{
    return str.replace(/\w\s*/g, (word)=>word.charAt(0).toUpperCase()+word.substr(1).toLowerCase())
}
console.log(find("my name is gajendra"))