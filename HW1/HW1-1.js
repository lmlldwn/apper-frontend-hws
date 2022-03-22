function transform(values){

    for(let i = 0; i < values.length ; i++) {
      let item = values[i]
      if ( !Number.isInteger(item)){
        console.log("Invalid datatype was passed.")
        return
      }
      console.log(item, index)
    }

  
    let squaredValues = values.map(num => num*num)
    let sortedValues = squaredValues.sort(function(a,b) {return a-b})
    
    return sortedValues
  }
  
  let nums=["le",1,2,3,4,"le"]
  const squaredNumbers = transform(nums)
  console.log(squaredNumbers)



////////// forEach was not implemented because return doesn't break the loop

// values.forEach((item, index) => {
//   if ( !Number.isInteger(item)){
//     console.log("Invalid datatype was passed.")
//     return
//   }
//   console.log(item, index)
// })