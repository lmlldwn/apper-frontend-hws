function reverse(value) {
    if (! (typeof(value) === "string"))
        return
    
    let characterArray = value.split('')
    let reverseArray = characterArray.reverse()
    return reverseArray.join('')
  }
  
  console.log(reverse("Lemuel"))