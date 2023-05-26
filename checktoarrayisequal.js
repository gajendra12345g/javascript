const arr=[1,2,3,4,5];
const arr1=[1,2,3,4,5];
const check=(arr,arr1)=>{
    if(arr.length!=arr1.length){
        return false;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr1[i]){
            return false;

        }
    }
    return true;
}
console.log(check(arr,arr1))