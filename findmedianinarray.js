const rotateright=(arr,pos)=>{
    const rotate=[...arr];
    for(let i=0;i<pos;i++){
        rotate.unshift(rotate.pop())
    }
    return rotate;

}
console.log(rotateright([1,2,3,4,5,6,],3))