let opcion = parseInt(prompt("Ingresa el número del ejercicio que deseas realizar (del 1 al 3)"))
if (opcion === 1) {
    const numbers = [];
    let min = 1;
    let max = 100;
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random()*(max-min+1)+min);
        numbers.push(x)
    }
    console.log(numbers);
}else if (opcion === 2) {
    let numbers = prompt("Ingresa varios numeros separados por comas para guardarlos en el array:");
    const array_numbers = numbers.split(",");
    console.log(array_numbers);
    
}else if (opcion === 3) {
    const numbers = [10, 40, 30, 20, 15, 5];
    numbers.sort((a, b) =>{
        return a -b;
    });
    console.log(numbers);
}

else{
    document.write("Ingresa una opción válida")
}