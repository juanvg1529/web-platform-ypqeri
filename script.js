console.log("hello!");
/*sumar dos numeros, agregarle el 20% y dividir entre 3 */
function aritmetica(x, y) {
  let sum;
  sum = x + y;
  console.log(`la suma de los numero es ${sum}`);
  sum = sum + sum * 0.2;
  console.log(`al agregar el 20% es ${sum}`);
  sum = sum / 3;
  console.log(`al dividir por 3`);
}
aritmetica(2, 3);
