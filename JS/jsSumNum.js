function Sum(num) {
    let sum = 0;
    for (let i=0; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

let num = 5;
console.log(Sum(num));