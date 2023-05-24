
(num => {
    let factorial: number = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
        console.log(factorial);
    }
    return factorial;
})(4);