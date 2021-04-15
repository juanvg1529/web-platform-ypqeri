console.log("hello!");
/*sumar dos numeros, agregarle el 20% y dividir entre 3 */
// function aritmetica(x, y) {
//   let sum;
//   sum = x + y;
//   console.log(`la suma de los numero es: ${sum}`);
//   sum = sum + sum * 0.2;
//   console.log(`al agregar el 20% es: ${sum}`);
//   sum = sum / 3;
//   console.log(`al dividir por 3 es: ${sum}`);
// }
aritmetica(2, 3);
let name1, lastname;
function saludar(name1, lastname) {
  alert(`saludos ${name1} ${lastname}`);
}
saludar("juan", "vera");
function pensamiento() {
  let numero = Number(prompt("Elija un numero "));
  if (numero < 0) {
    alert("Aleja los pensamientos negativos de tu vida only good vibes");
  } else {
    alert("solo hakuna matata");
  }
}
/* A function that displays a message telling if Temperaure is less than 0, its cold outside, if is more than 23, its hot outside, if is les than 23 and more than 0, its kind of warm */

function Temperature() {
  let grade = Number(prompt("ingrese el valor de T"));
  if (typeof grade === "string" || isNaN(grade)) {
    alert("Error jeje only numbers dude!");
  }

  if (grade <= 0) {
    alert("Its cold outside");
  }
  if (grade > 23) {
    alert("its hot Outside ");
  }
  if (grade < 23 && grade > 0) {
    alert("Is kind of warm");
  }
}
//Number of letters
function numberLetters() {
  let palabra = prompt("Type a word");
  if (palabra.length === 0) {
    alert("Error, type a word");
  } else {
    alert(`the length of the word is ${palabra.length}`);
  }
}
