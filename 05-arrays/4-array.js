// Prototype constructor allows you to add new properties and methods to the Array() object
Array.prototype.myUcase = function() {
for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
console.log(fruits)

// reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right)
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// reduceRight() (from right - to - left)
var numbers = [175, 50, 25];
const myFunc = (total, num)=> {
    return total - num;
  }
console.log(numbers.reduce(myFunc));
console.log(numbers.reduceRight(myFunc));

// reverse() method reverses the order of the elements in an array. Changes the original array
fruits.reverse()
console.log(fruits)

// slice() method returns the selected elements in an array, as a new array object
//Works till end-1
//Returns a new array
// array.slice(start*=0, end*=length)
console.log(fruits.slice(1,3))
fruitscopy = fruits.slice()
fruits[0] = "XXXXX"
console.log(fruits,fruitscopy)