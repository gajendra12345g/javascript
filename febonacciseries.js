const febo=(n)=>{
   const arr=[0,1];
   for(let i=2;i<=n;i++){
        const next=arr[i-1]+arr[i-2];
        arr.push(next);
   }
   return arr;
}
 console.log(febo(5));