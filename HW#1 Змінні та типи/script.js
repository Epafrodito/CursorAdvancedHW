let tomato = 15.678;

let banana = 123.965;

let kivi = 90.2345;

let maxPrice = Math.max(tomato, banana, kivi);

console.log('Максимальне число:', maxPrice);

console.log('Мінімальне число:', Math.min( tomato, banana, kivi));

let summ = tomato + banana + kivi;

console.log('Вартість товару:', summ);

let rounded = Math.floor(tomato) + Math.floor(banana) + Math.floor(kivi);

console.log('Вартість товару без копійок:', rounded);

let roundedToBigger = Math.round(rounded / 100) *100;

console.log('Сума товару округленна до сотень:', roundedToBigger);

let summ2 = Math.floor(summ);

let even = summ2 % 2 === 0;  

console.log('Сума товару парна:', even);

let restFrom500 = 500 - summ;

console.log('Решта при оплаті товару (500 грн.):', restFrom500);

let avarage = +(summ/3).toFixed(2);

console.log('Середня ціна товару:', avarage);

let  sell = Math.random() * 100;

console.log('Випадкова знижка:', Math.floor(sell));

let sellToFixed = +sell.toFixed(2);

let sellPrice = summ - ((summ * sellToFixed) / 100); 

console.log('Вартість товару зі знижкої:', +sellPrice.toFixed(2));

let profit =  (summ / 2) - ((summ * sellToFixed) /100)  

console.log('Чистий прибуток:', +profit.toFixed(2));

document.writeln(
    `1.Максимальне число: ${maxPrice}<br>
     2.Мінімальне число: ${Math.min( tomato, banana, kivi)}<br>
     3.Вартість товару: ${summ}<br>
     4.Вартість товару без копійок: ${rounded}<br>
     5.Сума товару округленна до сотень: ${roundedToBigger}<br>
     6.Сума товару парна: ${even}<br>
     7.Решта при оплаті товару (500 грн.): ${restFrom500}<br>
     8.Середня ціна товару: ${avarage}<br>
     9.Випадкова знижка: ${Math.floor(sell)}<br>
     10.Вартість товару зі знижкої: ${sellPrice.toFixed(2)}<br>
     11.Чистий прибуток: ${+profit.toFixed(2)}`
     )