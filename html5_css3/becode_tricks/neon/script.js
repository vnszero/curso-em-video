const contenedor = document.querySelectorAll(".container .letra");

let tiempo = 1000
contenedor.forEach(element => {

    setInterval(() => {
        setTimeout(() => {
            element.classList.toggle("animar")        
        }, tiempo);             
        tiempo += 100;
    }, 300);
        
});
