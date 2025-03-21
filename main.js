// 1. Bucles For
console.log("Ejercicio 1.1 - Números del 1 al 10:");
for (let i = 1; i <= 10; i++) console.log(i);

console.log("Ejercicio 1.2 - Números pares entre 0 y 20:");
for (let i = 0; i <= 20; i++) if (i % 2 === 0) console.log(i);

console.log("Ejercicio 1.3 - Triángulo de asteriscos:");
for (let i = 1; i <= 5; i++) console.log("*".repeat(i));

// 2. Recorrer arreglos
const arr1 = [3, 7, 2, 9, 5];
console.log("Ejercicio 2.1 - Suma de números:", arr1.reduce((acc, num) => acc + num, 0));

const arr2 = [12, 45, 6, 89, 23];
console.log("Ejercicio 2.2 - Número mayor:", Math.max(...arr2));

const arr3 = [15, 3, 8, 12, 1];
console.log("Ejercicio 2.3 - Números menores a 10:", arr3.filter(num => num < 10));

// 3. Arrow Functions
const sumar = (a, b) => a + b;
console.log("Ejercicio 3.1 - Sumar (3 + 4):", sumar(3, 4));

const cuadrado = num => num * num;
console.log("Ejercicio 3.2 - Cuadrado de 4:", cuadrado(4));

const arr4 = [2, 4, 6];
console.log("Ejercicio 3.3 - Valores duplicados:", arr4.map(num => num * 2));

// 4. Formato JSON
const libro = { titulo: "El poder de los hábitos", autor: "Charles Duhigg", año: 2012 };
console.log("Ejercicio 4.1 - Objeto a JSON:", JSON.stringify(libro));

const jsonStr = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';
const persona = JSON.parse(jsonStr);
console.log("Ejercicio 4.2 - Edad de Ana:", persona.edad);

const productosJson = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';
const productos = JSON.parse(productosJson);
console.log("Ejercicio 4.3 - Productos:", productos.map(p => p.producto));

// 5. Try Catch Finally
const dividir = (a, b) => {
    try {
        if (b === 0) throw new Error("No se puede dividir por cero.");
        return a / b;
    } catch (e) {
        return e.message;
    }
};
console.log("Ejercicio 5.1 - Divisiones:", dividir(10, 2), dividir(8, 0));

console.log("Ejercicio 5.2 - Variable no definida:");
try {
    console.log(variableNoDefinida);
} catch (e) {
    console.log("Error capturado:", e.message);
}

console.log("Ejercicio 5.3 - try-catch-finally:");
try {
    let resultado = 10 / 2;
    console.log("Resultado:", resultado);
} catch (e) {
    console.log("Error:", e.message);
} finally {
    console.log("Este mensaje siempre se imprimirá.");
}

// 6. Async Await
const esperar = segundos => new Promise(resolve => setTimeout(resolve, segundos * 1000));
const asyncFunction = async () => {
    console.log("Ejercicio 6.1 - Esperando...");
    await esperar(2);
    console.log("¡Tiempo cumplido!");
};
asyncFunction();

// 7. Fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log("Ejercicio 7.1 - Usuarios:");
        data.forEach(user => console.log(user.name));
    });
