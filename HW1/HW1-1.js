function transform(values){
  for(let i = 0; i < values.length ; i++) {
    let item = values[i]
    if ( !Number.isInteger(item)){
      console.log("Invalid datatype was passed.")
      return
    }
  }

  let squaredValues = values.map(num => num*num)
  let sortedValues = squaredValues.sort(function(a,b) {return a-b})
  
  return sortedValues
}

let nums=[1,2,3,4]
const squaredNumbers = transform(nums)
console.log(squaredNumbers)