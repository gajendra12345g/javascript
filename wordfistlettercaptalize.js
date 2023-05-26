const work=(arr)=>{
    const word=arr.split(' ');
    const final= word.map((word)=>word.charAt(0).toUpperCase()+word.slice(1));
   return final.join(' ');
}
console.log(work("gajendra singh"))