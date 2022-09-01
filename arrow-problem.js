//// ES6 RECAP

// 1) Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.
const threePara = (x, y, z) => x * y * z;
console.log(threePara(5, 5, 5));

// 2) Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.
const threeLine = `
I am a web developer.
I love to code.
I love to eat biryani.`;
console.log(threeLine);

/* 
3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const twoParams = (x, y = 10) => x + y;
console.log(twoParams(6));

/* 
Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */

const friends = [
  "parvej",
  "Nakib",
  "Neloy",
  "Shusmoy",
  "Saad",
  "Arif",
  "Shoron",
  "Naeem",
  "Fahad",
  "Rony",
  "Konkon",
  "Tanim",
  "Mahmud",
];
const evenFriendsName = (friends) => {
  const friendsName = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      friendsName.push(friend);
    }
  }
  console.log(friendsName);
};
evenFriendsName(friends);

/* 
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
 */

const first = [20, 34, 45, 56, 67, 78, 89, 90];
const second = [98, 89, 78, 67, 56, 45, 34, 23, 12, 10, 29];
const maxNumberFromNewArray = (first, second) => {
  const third = first.concat(second);
  //   console.log("The new array is", third);

  let maxNum = "";
  for (const num of third) {
    if (num > maxNum) {
      //   console.log(num);
      maxNum = num;
    }
  }
  //   console.log(maxNum);
  return maxNum;
};
console.log("The max number is:", maxNumberFromNewArray(first, second));

/* 
1. You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/

const oddArray = [1, 3, 5, 7, 9];
const makeEven = (oddArray) => {
  let evenArray = [];
  for (let i = 0; i < oddArray.length; i++) {
    const num = oddArray[i];
    const newEven = num + 1;
    evenArray.push(newEven);
  }
  console.log(evenArray);
};
makeEven(oddArray);

//alternate way with map
const makeEvenMap = (oddArray) => {
  const evenArray = oddArray.map((x) => x + 1);
  console.log(evenArray);
};
makeEvenMap(oddArray);

/* You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
   return/get all the elements which are divisible by 10 using
   array.filter() method.
 */

const newArr = [33, 50, 79, 78, 90, 101, 30];

const divisible = (arr) => {
  const tenDivisible = arr.filter((x) => x % 10 === 0);
  console.log(tenDivisible);
};
divisible(newArr);

//  Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.
const xxx = [98, 89, 78, 67, 33, 50, 79, 78, 90, 101, 30, 56, 45, 34, 23, 12, 10, 29];
const usuingFilterToFindTenDivisible = (x) => {
  const u = x.filter((x) => x % 10 === 0);
  const t = x.find((x) => x % 10 === 0);
  console.log(t);
  console.log(u);
  for (const ux of u) {
    if (u[ux] === t) {
      console.log("True");
    } else {
      console.log("False");
    }
  }
};

usuingFilterToFindTenDivisible(xxx);

/* 
You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/

const arrayReduce = [1, 9, 17, 22];
const initalValue = 0;
const sumWithReduce = arrayReduce.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initalValue
);
console.log(sumWithReduce);

const arrayReducePractice = [1, 9, 17, 22];
const sumWithReduceFunction = arrayReducePractice.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initalValue
);
console.log("toal with reduce", sumWithReduceFunction);

/* 
1. Practice Problem reduce() 

const people = [
    { name: "Meena", age: 20 },
    { name: "Reena", age: 15 },
    { name: "Suchorita", age: 22 },
];

Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */

const people = [
  { name: "Meena", age: 20 },
  { name: "Reena", age: 15 },
  { name: "Suchorita", age: 22 },
];

const totalAge = people.reduce((previous, current) => previous + current.age, 0);

// getAgeData(people);
console.log(totalAge);

const productOfHimel = [
  { name: "Iphone", price: 27000 },
  { name: "laptop", price: 17000 },
  { name: "External Drive", price: 4000 },
  { name: "Mechanical Board", price: 5000 },
  { name: "Razer Mouse", price: 5000 },
  { name: "Laptop Coller", price: 2500 },
  { name: "Gaming Chair", price: 18500 },
];

const totalCostinGadget = productOfHimel.reduce((prev, curr) => prev + curr.price, 0);
console.log("total expenses in Gadget", totalCostinGadget);
// total expenses in Gadget 74000

/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
 */

const aa = [1, 2, 3, 4, 5, 6];

const aMultipication = (aa) => {
  const ax = aa.map((x) => x * 5);
  console.log(ax);
};
aMultipication(aa);

// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো

const aabb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const arrayFilter = (aabb) => {
  const asd = aabb.filter((x) => x % 2 === 1);
  console.log(asd);
};
arrayFilter(aabb);

// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।

const Gadgets = [
  { name: "Iphone", price: 27000 },
  { name: "laptop", price: 17000 },
  { name: "External Drive", price: 4000 },
  { name: "Mechanical Board", price: 5000 },
  { name: "Razer Mouse", price: 5000 },
  { name: "Laptop Coller", price: 2500 },
  { name: "Gaming Chair", price: 18500 },
];

const find5000 = (obj) => {
  const xxx = obj.find((x) => x.price == 5000);
  console.log(xxx);
};
find5000(Gadgets);

/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।
 */

const [firstz, secondz, thirdz, fourthz, fivez, sixz] = [
  { name: "Iphone", price: 27000 },
  { name: "laptop", price: 17000 },
  { name: "External Drive", price: 4000 },
  { name: "Mechanical Board", price: 5000 },
  { name: "Razer Mouse", price: 5000 },
  { name: "Laptop Coller", price: 2500 },
  { name: "Gaming Chair", price: 18500 },
];
console.log("third is:", thirdz);
