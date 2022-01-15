function alternateCase(caseName) {
    let char = ""
    let hasil = ""

    for(let i = 0; i < caseName.length; i++) {
        char = caseName.charAt(i)
        if(char == char.toUpperCase()) {
            hasil += char.toLowerCase()
        } else {
            hasil += char.toUpperCase()
        }
    }
    return hasil
}

console.log(alternateCase("abc"))
console.log(alternateCase("ABC"))
console.log(alternateCase("Hello World"))