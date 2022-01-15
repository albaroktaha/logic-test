function multiple3and5(multiple) {
    let hasilSum = 0;
    let sum = "";
    let hasil = "";

    for(let i = 1; i < multiple; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            sum+= `${i} + `
            hasilSum+=i
        }
    }
    sum = sum.split("").splice(0, sum.length-3).join("")
    hasil = `${hasilSum} = ${sum}`
    return hasil
    
}

console.log(multiple3and5(10));
console.log(multiple3and5(20));