///Define a function, iterativeLog, that accepts an array.
function iterativeLog(array) {
  debugger;
  ///Call .forEach() on this array, and inside the callback,
  array.forEach((element, index) => {
  ///log each element with the format ${index}: ${element}!.
  console.log(`${index}: ${element}`);
})
}

//Define a function, iterate, that accepts a callback.
function iterate(callback) {
//Within the iterate function, you should initialize an array —
  var numbers = [1,2,3]
//Call .forEach() on this array, passing the callback to .forEach().
  numbers.forEach(callback)
//Then return the array that you initialized.
  return numbers;
}

//Define a function, doToArray that accepts an array and a callback.
function doToArray(array, callback) {
//Call .forEach() on the array, passing the callback as the forEach callback.
  array.forEach(callback)
}
