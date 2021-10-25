const dogs = [
  {text: 'Golden Retriever', hypoallegenic: false, maxWieght: 75},
  {text: 'Shiba inu', hypoallegenic: false, maxWieght: 23},
  {text: 'Poodle', hypoallegenic: true, maxWieght: 70},
]


////todos.find({}, function(error, ){
  //
//})


const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, dogs)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}