function convertToVowels(word) {
    if ( typeof(word) !== "string") {
        console.log("Only string values will be processed by the function.")
        return
    }
    let wordVowels = []

    let letters = word.split('')
    let vowels = ['a','e','i','o','u']
    letters.forEach((letterItem, letterIndex) => {
        for (let i = 0; i < vowels.length ; i++) {
            if ( letterItem.toLowerCase() === vowels[i]) {
                wordVowels.push(letterItem)
                break
            }
        }
    })

    return wordVowels.join('')
}


console.log(convertToVowels("Lemuel Aldwin Garcia"))