let lowerLimitEven = 1
let upperLimitEven = 10
let lowerLimitOdd = 1
let upperLimitOdd = 10

console.log ("NUMEROS PARES")
for (lowerLimitEven; lowerLimitEven <= upperLimitEven; lowerLimitEven++){
    if (lowerLimitEven % 2 == 0)
    console.log("El número " + lowerLimitEven + " " + "es par")
}
console.log ("NUMEROS IMPARES")
for (lowerLimitOdd; lowerLimitOdd <= upperLimitOdd; lowerLimitOdd++){
    if (lowerLimitOdd % 2 == !0)
    console.log("El número " + lowerLimitOdd + " " + "es impar")
}