function reverse(value) {
    if ( typeof(word) !== "string") {
        console.log("Only string values will be processed by the function.")
        return
    }
    
    let characterArray = value.split('')
    let reverseArray = characterArray.reverse()
    return reverseArray.join('')
  }
  
function isPalindrome(word){
    let reversedWord = reverse(word)

    if (word === reversedWord) {
        return true
    }

    return false
}
  
let word = "radar"
console.log(`Word: ${word}`)
console.log(`Palindrome: ${isPalindrome(word)}`)
