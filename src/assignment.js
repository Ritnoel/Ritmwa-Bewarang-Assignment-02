// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
// function sumOfNumbers(arrayOfNumbers) {
//   const initialValue = 0;
//   const sumOfArray = arrayOfNumbers.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
//   return sumOfArray
// }

// const arraySum = sumOfNumbers([1, 2, 3, 4])
// console.log(`Sum of array is ${arraySum}`)

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    let evenNumbers = []
    arrayOfNumbers.map(function(number){
      if (number % 2 === 0) {
        evenNumbers.push(number)
      } else {
        console.log(`${number} is not an even number`)
      }
    })
    return evenNumbers.length
}
const checkForEvenNumbers = countEvenNumbers([2, 3, 6, 5, 8, 10, 14])
console.log(`Even numbers count is ${checkForEvenNumbers}`)

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  const temperatureInF = []
  arrayOfNumbers.map(function(number){
    let converted = ((number * 1.8) + 32)
    let truncated = Math.trunc(converted)
    temperatureInF.push(truncated)
  })
    return temperatureInF;
}

const tempInF = celsiusToFahrenheit([32, 100, 0, 72])
console.log(`temperatures in Fahrenheit are ${tempInF}`)



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

