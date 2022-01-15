function maxRedigit (number) {
    if(number.toString().length == 3 && number != 0 - 1) {
        let numb = number.toString().split("")
        let max = numb.sort((a,b) => {
            return b - a
        })
        let hasil = max.join("")
        return parseInt(hasil)
    } else {
        return null
    }
}

console.log(maxRedigit(123))
console.log(maxRedigit(213))
console.log(maxRedigit(321))
console.log(maxRedigit(-1))
console.log(maxRedigit(0))
console.log(maxRedigit(99))
console.log(maxRedigit(1000))