//Функція №1
function showMaxDigital() {
  let number = +prompt("Введіть число:", "723");
  while (isNaN(number) === true || !number) {
    number = +prompt("Введіть число:", "723");
  }

  let result = getBiggestDigital(number);

  alert(result);
}

function getBiggestDigital(number) {
  let largestNumber = 0;
  for (let i = 0; i <= String(number).length; i++) {
    if (String(number)[i] > largestNumber) {
      largestNumber = String(number)[i];
    }
  }

  return largestNumber;
}

fun1.onclick = showMaxDigital;

//Функція №2
function showRaisePow() {
  let number = getNumberForPrompt("Введіть  число:", "21");
  let numberPow = getNumberForPrompt("Введіть степінь числа:", "2");
  let result = getRaisePow(number, numberPow);
  alert(result);
}

function getNumberForPrompt(label, defaultNamber) {
  let number = +prompt(label, defaultNamber);
  while (isNaN(number) === true || !number) {
    number = +prompt(label, defaultNamber);
  }
  return number;
}

function getRaisePow(number, numberPow) {
  let result = 0;
  for (let i = 1; i <= numberPow; i++) {
    result = number * number;
  }

  return result;
}

fun2.onclick = showRaisePow;

//Функція №3
function showGetFirstLetter() {
  let text = prompt("Введіть текст", "cUrSoR");
  let result = getFirstLetter(text);
  alert(result)
}

function getFirstLetter(text) {
  let firstBig = text[0].toUpperCase() + text.toLowerCase().slice(1);
   return firstBig;
}

fun3.onclick = showGetFirstLetter;

//Функція №4
function showCleanWage() {
  let wage = +prompt("Введіть вашу заробітню плату:", "7654");
  let tax = +prompt("Вкажіть податок", "23");
  let result = getCleanWage(wage, tax);
  
  alert(result)
}


function getCleanWage(wage, tax) {
  let cleanWage = wage - wage * (tax / 100);

  return cleanWage;
}

fun4.onclick = showCleanWage;

//Функція №5
function showRandomNumber() {
  let minNumber = +prompt("Вкажіть від якого числа:", "15");
  let maxNumber = +prompt("Вкажіть до якого числа:", "45");
  let result = getRandomNumber(minNumber, maxNumber);

  alert(result);
}

function getRandomNumber(minNumber, maxNumber) {
  let randomNumber = Math.floor(
    Math.random() * (maxNumber - minNumber) + minNumber
  );

  return randomNumber;
}

fun5.onclick = showRandomNumber;

//Функція №6
function showCountLetter() {
  let text = prompt("Введіть слово:", "Асталавіста");
  let letter = prompt("Вкажіть букву, яку потрібно порахувати:", "а");
  let result = countLetter(text, letter);
  alert(result)
}

function countLetter(text, letter) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let chart = text.toLowerCase().charAt(i);
    if (chart === letter) {
      count = count + 1;
    }
  }
  return count;
}

fun6.onclick = showCountLetter;

//Функція №7
function convertCurrency() {
  let currency = prompt("Вкажіть суму та валюту:", "150$");
  let exchangeRate = 33;
  if (currency.indexOf("$") !== -1) {
    let currencyDoll = currency.slice(0, -1) * exchangeRate + " uah";
    alert(currencyDoll);
  } else if (currency.indexOf("uah") !== -1) {
    let currencyUah = currency.slice(0, -3) / exchangeRate + " $";
    alert(currencyUah);
  } else {
    alert("Помилка! Невідома валюта!");
  }
}

fun7.onclick = convertCurrency;

//Функція №8
function showRandomPassword(){
  let number = prompt("Введіть кількість символів", "8");
  let result = getRandomPassword(number);
  alert(result)
}

function getRandomPassword(number) {
  let randomPassword = Math.floor(
    Math.pow(10, number - 1) + Math.random() * 9 * Math.pow(10, number - 1)
  );

  return randomPassword;
}

fun8.onclick = showRandomPassword;

//Функція №9
function showDeleteLetters() {
  let text = prompt("Введіть текст:", "Атлантичне узбережжя");
  let letter = prompt("Яку букву видалити?", "т");
  let result = deleteLetters(text, letter);
  alert(result)

}

function deleteLetters(text, letter) {
  let textDeleteLetters = text.replaceAll(`${letter}`, "");

  return textDeleteLetters;
}

fun9.onclick = showDeleteLetters;

//Функція №10
function showIsPalyndrom() {
  let text = prompt("Введіть текст:", "Я несу гусеня");
  let result = isPalyndrom(text);
  alert(result);
}

function isPalyndrom(text) {
  return (
    text.toLowerCase().replaceAll(" ", "") ===
    Array.from(text.toLowerCase().replaceAll(" ", "")).reverse().join("")
  );
}

fun10.onclick = showIsPalyndrom;

//Функція №11
function showRemoveSameLetters() {
  let string = prompt("Введіть текст:", "Бісквіт був дуже ніжним");
  let result = removeSameLetters(string);
  alert(result);
}

function calcLetterCountInText(letter, text) {
  let count = text
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (letter === char) return acc + 1;
      return acc;
    }, 0);

  return count;
}

function removeSameLetters(text) {
  let result = text.split("").reduce((acc, letter) => {
    let count = calcLetterCountInText(letter, text);
    if (count === 1) {
      return acc + letter;
    }
    return acc;
  }, "");
  
  return result;
}

fun11.onclick = showRemoveSameLetters;
