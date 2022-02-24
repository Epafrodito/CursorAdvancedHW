let numberFromUserN = +prompt('Введіть ціле значення N');
while (!Number.isInteger(numberFromUserN) || !numberFromUserN) {
    numberFromUserN = +prompt('Введіть ціле значення N');
}

console.log(numberFromUserN);

let numberFromUserM = +prompt('Введіть ціле значення M');
while (!Number.isInteger(numberFromUserM) || (numberFromUserM < numberFromUserN) || !numberFromUserM) {
    numberFromUserM = +prompt('Введіть ціле значення M');
}

console.log(numberFromUserM);

let withOutEven = confirm('Пропускати парні числа?');

let result = 0;
let i = numberFromUserN;

do {
  console.log(i);
  if (withOutEven) {
      if ( i % 2 != 0 ) {
      result += i;
  }} else { 
  result = result + i}
  i += 1;
} while (i <= numberFromUserM)

console.log(result);

document.writeln (`
    Значення числа N: ${numberFromUserN} <br>
    Значення числа M: ${numberFromUserM} <br>
    Пропускати парні числа: ${withOutEven} <br>
    Сума: ${result}`
)