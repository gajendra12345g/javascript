const arr=["gajendra","rajput","karepatas"];
const longest=(q)=>{
    return q.reduce((longest,current)=>{return current.length>longest.length?current:longest},'')
}
console.log(longest(arr))