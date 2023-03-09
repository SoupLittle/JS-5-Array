// //Oppgave 1

// function getFirstElement(array) {
//     return array[0];
//   }
  
 
//   var list = ['a', 'b', 'c', 'd', 'e', 'f'];
//   console.log(getFirstElement(list)); 
    
// // Oppgave 2: bruk lenght

// function lastElement(array) {
//     return array[array.length - 1];
//   }
  
//   // Eksempel bruk:
//   var list = ['a', 'b', 'c', 'd', 'e', 'f'];
//   console.log(lastElement(list)); // skriver ut 'f'
  

// //Oppgave 3

function calculateSum(list) {
  var sum = 0;
  list.forEach(function(number) {
    sum += number;
  });
  return sum;
}

console.log(calculateSum([3, 66, 45]));  // Output: 114


function calculateProduct(list) {
  var product = 1;
  list.forEach(function(number) {
    product *= number;
  });
  return product;
}

console.log(calculateProduct([3, 66, 45]));  // Output: 8910

  

// //Oppgave 4

// var list1 = [1,2,3,4,5];
// var list2 = [0,1,2,3,4];
// var result = [];

// for (var i = 0; i < list1.length; i++) {
//   var sum = list1[i] + list2[i];
//   result.push(sum);
// }

// console.log(result);
