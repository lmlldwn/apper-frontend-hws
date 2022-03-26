function reverse(value) {
    if (! (typeof(value) === "string"))
        return
    
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
console.log(`Palindrome: ${isPalindrome(word)}`)
