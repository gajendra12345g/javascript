const check=(email)=>{
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}
console.log(check("gajendra@gmail.com"));
