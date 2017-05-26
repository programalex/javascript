var prom = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve(5);
    },5000);
});
prom.then((numero)=>{
    console.log(numero);
})
.catch((err)=>{
    console.log("hay un error:${err}");
})


// asincrona

var prom = new Promise(function(resolve,reject){
const numero = 5;
if (numero == 15)
resolve("el numero es !!");
else
reject(Error("hay un error"));

});
promise.then(function(respuesta){
console.log(respuesta);
}, function(error){
    console.log(error);

})

// setTimeout

var prom = new  Promise(function(resolve,reject){
    setTimeout(function(){
        const numero = 5;
        if (numero == 15)
        resolve("llego promesa!!!");
else
reject(Error("hay un error"));


    
prom.then(function(respuesta){
    console.log(respuesta);
}, function(error){
    console.log(error);
});
    }, 3000);
});