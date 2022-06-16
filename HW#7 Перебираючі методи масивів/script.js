// Function #1
function getRandomArray (length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr;
}

console.log('Масив випадкових чисел:',getRandomArray(15, 1, 100));

// function getRandomArray2 (length, min, max) {
//     const arr = Array.from({length}, () => 
//     Math.floor(Math.random() * (max - min + 1)) + min);

//     return arr;
// }

// console.log(getRandomArray2(15, 1, 100));

// Function #3
const numberArray3 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getAverage (...numbers) {
    const total = numbers.reduce((sum, current) => sum + current, 0);
    const result = total / numbers.length;

    return result;
}

console.log('Середнє арифметичне:', getAverage(...numberArray3));

// Function #4
const numberArray4 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getMedian(...numbers) {
  numbers.sort((a, b) => a - b);

  if (numbers.length % 2) {
    const result = numbers.length / 2 - 0.5;

     return numbers[result];
  } else {
    const resultLeft = numbers.length / 2;
    const resultRigth = (numbers.length / 2) + 1;
    result = (resultLeft + resultRigth) / 2;

    return result;
  }
}

console.log('Медіана:', getMedian(...numberArray4));

// Function #5 

const numberArray5 = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers (...numbers) {
    const result = numbers.filter(item => item % 2);

    return result;
}

console.log('Видаляє парні числа:', filterEvenNumbers(...numberArray5));

//Function #6

const numberArray6 = [1, -2, 3, -4, -5, 6];

function countPositiveNumbers(...numbers) {
    const result = numbers.filter(item => item > 0);

    return result.length;
}

console.log('Кількість чисел більших за нуль:', countPositiveNumbers(...numberArray6));

// Function #7 

let numberArray7 = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

const getDividedByFive = (...arr) => arr.filter(item => item % 5 == 0);

console.log('Числа, які діляться націло на 5:',getDividedByFive(...numberArray7));


// Function #8

function replaceBadWords(str) {
     const result = str.split(' ').map(item => item.replace('fuck' || 'shit', '****')).join(' ');

    return result;
}

console.log('Змінює "погане" слово:' , replaceBadWords('Are you fucking kidding?'));

// Function #9

const chunkStr = (str, n, acc) => { 
    const newStr = str.toLowerCase()
    if (newStr.length === 0) {

        return acc
    } else {
        acc.push(newStr.substring(0, n));

        return chunkStr(newStr.substring(n), n, acc);
    }
}

console.log('Розбиває на склади:', chunkStr('Commander', 3, []));

