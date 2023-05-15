// write a for loop function
//filter for odd numbers
//if odd, return
//else, keep looping

    // const oddArray = []

    // function onlyOdd (numArray) {
    //     for (let i = 0; i < numArray.length; i++) {
    //         if ((numArray[i] % 2) > 0) {
    //             oddArray.push(numArray[i])
    //         }
    // }return oddArray
    // }

    // console.log(onlyOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// loop through the string
// count vowels
// consonants = string.length - vowels
// console.log the template literal message
    
    // let countVowels = []

    // function vowels (word) {
    //     for (let i = 0; i < word.length; i++){
    //         if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
    //             countVowels.push(word[i])
    //         } 
    //     } let consonants = word.length - countVowels.length
    //     console.log(`${word} has ${consonants} consonants and ${countVowels.length} vowels`)
    // }
    // vowels("awesome")

// loop 
// remove item at array.length-1 and push to new array

    // const reverseOrder = []
    // function reverseArray (array) {
    //     for (let i = array.length -1; i >= 0; i--) {
    //         reverseOrder.push(array[i])  
    //     } return reverseOrder
    // }
    // console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]))

// console.log 1 to 100
// if value x3 = "Fizz" replaces
// if value x5 = "Buzz" replaces
// if values x15 = "FizzBuzz" replaces

    function FizzBuzz (num) {
        for (let num =1; num <=100; num++)
        if (num % 15 === 0) {
            console.log("FizzBuzz")
        } else if(num % 5 === 0) {
            console.log("Buzz")
        } else if (num % 3 === 0) {
            console.log("Fizz")
        } else { 
            console.log(num)
        }
    }
    FizzBuzz(100)