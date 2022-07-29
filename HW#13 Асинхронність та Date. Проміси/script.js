async function getRandomChinese(length) {
    const arr = [];
    const getSymbol = () => new Promise((resolve) => {
        return setTimeout(() => {
            const symbol = Date.now().toString().slice(-5);
            const resul = String.fromCharCode(symbol);
            resolve(resul);
        },50);
    });

    do {
        await getSymbol().then((el) => arr.push(el));
    } while (arr.length < length);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(arr.join('')));
        }, length * 50);
    });
}

getRandomChinese(7);
