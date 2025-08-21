const numbers = [1,2,3,4,5,6,7,8,9]
const evenNumbers = []
const oddNumbers = []
for (number of numbers) {
    if (number % 2 == 0) {
        evenNumbers.push(number)
    }
    else {
        oddNumbers.push(number)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)