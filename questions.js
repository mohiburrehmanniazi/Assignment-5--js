// Question 1
function findPair(numbers, target) {
  const numSet = new Set();
  
  for (let num of numbers) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return [complement, num];
    }
    numSet.add(num);
  }
  
  return null;
}
  
// Question 2
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello")


// Question 3
function sumLargest(numbers) {
  numbers.sort(function(a,b){
    return b - a;
  });
  
  let sum = numbers[0] + numbers[1];
  return sum;
}

// Question 4
function filterStrings(strings) {
  return strings.filter(str => str.length > 3);
  
}


// Question 5
function filterEven(numbers) {
  return arr.filter(num => num % 2 == 0)
}

// Question 6
function pluck(objects, key) {
  const person = [{ name: "john", age: 24}, {name: "jane", age:25 }]
return person.name;
}

// Question 7
function isPalindrome(str) {
  if(tex.split("").reverse("").join("") == tex){
    console.log("true")
  }
  else{console.log("false")}
}

// Question 8
function mostFrequent(str) {
  // Your code here
}

// Question 9
function stringLengths(strings) {
  let result = []
  for (let i = 0; i < strings.length; i++) { 
  }
  return result.push(strings[i].length)
}

// Question 10
function firstGreater(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10){
      return i
    }
    return -1;
    }}
module.exports = {
  findPair,
  reverseString,
  sumLargest,
  filterStrings,
  filterEven,
  pluck,
  isPalindrome,
  mostFrequent,
  stringLengths,
  firstGreater
}
