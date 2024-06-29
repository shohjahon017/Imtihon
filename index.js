//1-masala
// function reverseString(str) {
//   let res = str.split("");
//   return res.reverse();
// }
// console.log(reverseString("54529"));

//2-masala

//3-masala
// let arr = +prompt("sonni kiriting");

// for (let i = 1; i <= arr; i++) {
//   console.log(i);
// }

//4-masala
// function pairAndOddArray(arr) {
//   let sum = 0;
//   let res = 0;
//   arr.forEach(function (value) {
//     if (value % 2 == 1) {
//       res = sum += value;
//     }
//     if (value % 2 == 0) {
//       res = sum += value;
//     }
//   });
//   return res;
// }
// console.log(pairAndOddArray([1, 2, 5, 6, 8, 9]));

//5-masala
// function removeSymbol(str) {
//   let res = "";
//   res = str.replaceAll("!", "");
//   return res;
// }
// console.log(removeSymbol("s!alo!m!"));

//6-masala
// function sumTwoArray(arr1, arr2) {
//   let sum = 0;
//   let res = arr1.concat(arr2);
//   res.forEach(function (value) {
//     sum += value;
//   });
//   return sum;
// }
// console.log(sumTwoArray([1, 2, 5, 6, 3], [1, 5, 6, 8]));

//7-masala
// function removeFirstAndLast(str) {
//   let res = "";
//   for (const iterator of str) {
//     if (iterator != str.length - 1) {
//       res = iterator;
//     }
//   }
//   return res;
// }
// console.log(removeFirstAndLast("salom"));

//8-masala
// function reverseElement(arr) {
//   let res = "";
//   for (const iterator of arr) {
//     if (iterator != arr) {
//       res = iterator;
//     }
//   }
//   return res;
// }
// console.log(reverseElement("hello world"));

//9-masala
// function removeElement(str) {
//   let res = "";
//   for (const iterator of str) {
//     if (iterator != 0) {
//       res = iterator;
//     }
//   }
//   return res;
// }
// console.log(removeElement("1,2,53,0"));
//10-masala
// function smallElement(arr) {
//   let min = 0;
//   for (let i = arr; i < arr; i++) {
//     if (arr > min) {
//       min = arr;
//     }
//   }
//   return min;
// }
// console.log(smallElement([5, 9, 6, 7, 8]));
