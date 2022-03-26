function reverse(value) {
    if ( typeof(word) !== "string") {
        console.log("Only string values will be processed by the function.")
        return
    }
    
    let characterArray = value.split('')
    let reverseArray = characterArray.reverse()
    return reverseArray.join('')
  }
  
  console.log(reverse("Lemuel"))