var prom = new Promise((resolve,rejec)=>{
    setTimeout(()=> {
        resolve(5);
    },5000);
});
prom.then((numero)=>{
    console.log(numero);
})