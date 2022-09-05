let baseTriangle= parseFloat(prompt("Podes ingresar la base del triangulo (cm):"));
let heightTriangle= parseFloat(prompt("Ahora podes ingresar la altura del triangulo (cm):"));
let radioCircle= parseFloat(prompt("Por ultimo ingresa el radio del circulo (cm):"));
let areaTriangle=baseTriangle*heightTriangle/2;
let areaCircle=Math.PI*Math.pow(radioCircle,2);
console.log(`El area del triangulo es: ${areaTriangle} cm2`);
console.log(`El area de un circulo es: ${areaCircle} cm2`);
