let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199
}


function getAvg(obj) {
    let sum = 0;
    let count = 0;
    for (key in obj) {
        sum = sum + obj[key];
        count++;
    }
    return sum / count;
}

console.log(getAvg(salaries));