// let array = []; //1
//2 let array = [1, 2, 3, 4, "kubi"] 
// 3 let array = new Array(1,2,3)

// console.log(array.length);
// console.log(array);

// accessing arrays
// let arr = [1, 2, 3, 4, 5];
// let numbers = 0;
// for(let i = 0; i<arr.length; i++){
//     // console.log(arr[i])
//     numbers = numbers + arr[i];
//     // show one by one adding elements
//     // console.log(numbers);
    
// };

// //total sums
// // console.log(numbers);
// document.getElementById('add').innerText = numbers;
// let data = [2, 4, 6, 2];
// let total = 0;
// let totalDiv = document.getElementById('total');
// console.log(totalDiv);
// for(let i = 0; i<data.length; i++){
//     total = total+data[i]
//     // console.log(total);
//     totalDiv.innerHTML = total + "<br>";
//     // console.log(totalDiv);
// };
// totalDiv.innerHTML = "total: " + total;
// // console.log(totalDiv);

// Array from strng
// let sentence = "I love coding and programming with Javascirpt";
// let words = sentence.split(" ");
// console.log(words);

// for(let i=0; i<words.length; i++){
//     console.log("words: " + i + " index: "+ words[i]);
// }

// Array Aggregation -1

// let newArr = [];
// for(let i=0; i<100; i++){
//     newArr[i] = i+1
// };
// let p = newArr;
// newArr[0]=4000;
// console.log(p[0]);

// 2

// function copy(arr1, arr2){
//     for(let i =0; i<arr1.length; i++){
//         arr2[i] = arr1[i];
        
//     };
   
// };

// let ar = [1,2,3];
// let ar2 = [];
// copy(ar, ar2);
// console.log(ar2);


// let input = prompt('Please enter your name');
// let names = ['a', 'b', 'k'];

// if (names.includes(input)) {
//   console.log('Found');
// } else {
//   console.log('Not found');
// }

// let names = ['loi', 'ji', 'bill', 'chill'];
// let newNames = ['kk', 'ii'];

// let a = names.concat(newNames);

// console.log(a)
// let b = a.splice(2, 5);
// console.log(b)


// let num = [1, 2, 4, 9, 8];
// console.log(num.reverse());
// console.log(num.sort());


let his = ['kaku', 'maku', 'chaku', 'laku', 'happy'];
// let newHis = ['ajay', 'sajay', 'rajay'];
// console.log(his.splice(1,4))

// his.splice(2, 0, newHis);
// console.log(his);

var nums = [1,2,3,7,8,9, 10];
var newElements = [4,5,6];
nums.splice(2,2);
// console.log(nums)

function square(n){
    console.log(n, n*n);
    // document.getElementById('total').innerHTML  = (n, n*n);
};
let sum = [1,2,3,4,5,6,7,8,9,10];
sum.forEach(square);












