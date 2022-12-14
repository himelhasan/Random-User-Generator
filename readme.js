/* problem 1

1. Write an arrow function that will take 3 parameters, will multiply
   the parameters and will return the result.

2. Write the following sentence in three lines and print the result:
   I am a web developer. I love to code. I love to eat biryani.

3. Write an arrow function that will take 2 parameters: One parameter
   will come from you and the other parameter will be a default
   parameter. Add these two parameters and return the result.

================================================================

Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result.

Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.

1. You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.

2. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
   return/get all the elements which are divisible by 10 using
   array.filter() method.

3. Now do the same task of question 2. But do this using array.find()
   method. Then compare the output of question 2 & question 3.

You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.

1. Practice Problem reduce() */

const people = [
  { name: "Meena", age: 20 },
  { name: "Reena", age: 15 },
  { name: "Suchorita", age: 22 },
];

/* Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */
// Practice Problem: Access Object values

const student = {
  name: "Fredie",
  age: 26,
};

// Console the value of age

// Practice Problem: Access Object values
let data = {
  location: [
    {
      latitude: "345.345,567.67",
      longitude: "895.875,983.87",
      city: "dhaka",
      country: "Bnagladesh",
    },
  ],
};

//

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

/* Challenging
??? Console the value of email
??? Console the value of address
??? Console the value of city
??? Console the value of lat
??? Console the value of company name
 */

/* ??????????????? ??????????????? ES???, ???????????? ??????????????????????????????????????? ?????? ???????????? ???????????? ??????????????? ??????????????????????????? ???????????????????????? ????????? ???????????????  

// ???. ????????? const ?????? ????????? let ???????????? ???????????????????????? ??????????????????????????? ???????????? ?????? ???????????? ?????????????????? ?????????????????? ???????????? ???????????? ???????????? ???????????? ???????????? const ???????????? ?????????????????? let ???????????? ???????????????????????? ??????????????????????????? ????????? ???????????????

// ???. ???????????????????????? ????????????????????? ???????????? ???????????? ????????????????????? ???????????? ???????????? ??????????????? ??????????????? ???????????? ??????????????????????????? ????????? ???????????????????????? ?????? ????????? ???????????????????????? ???????????? ??????????????? ????????????????????? ???????????? ???????????? ????????????????????? ??????????????????????????? ???????????? ????????? ???????????????????????????????????? ??????????????? ????????????????????? ?????? ??????????????? ??????????????????????????? ?????? ????????? ??????????????? ???????????????????????? ????????????????????? ?????? ??????????????? ??????????????? 

// ???.??? ???????????? ????????????????????????????????? ??????????????? arrow ??????????????? ??????????????????????????? ???????????? ????????? ????????? ????????????????????? ????????? ????????? ???????????? ????????? ??????????????? ???????????? ????????? ??????????????? ???????????????????????? ??? ???????????? ????????? ????????? ?????????????????? ??????????????? 

// ???.??? ???????????? ??????????????? ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ?????????????????? ????????? ????????????????????? ??????????????? ????????? ???????????? ?????????????????????????????? ??????????????? ????????????????????????????????? ?????? ???????????? ??? ????????? ???????????? ??????????????? ??????????????? ??????????????? ????????? ??????????????? ????????????????????? ???????????? ???????????? ?????????????????? ????????? ????????? ???????????? ?????????????????? ????????? 

// ???.??? ??????????????? ??????????????? ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ??????????????????????????? ???????????? ????????? ????????????????????? ????????? ????????? ??????????????? ????????????????????????????????? ???????????? ????????? ??????????????? ??????????????????????????????????????? ????????? ????????? ????????? ????????????????????? ????????????????????? ??????????????? 

// ???.??? ??????????????? ??????????????? ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ??????????????? ?????? arrow ????????????????????? ????????? ???????????????????????? ????????????????????? ?????????????????? ?????????????????????????????? ??????????????? ????????????????????????????????? ?????? ???????????? ??? ????????? ???????????? ??????????????? ??????????????? ??????????????? ????????? ??????????????? ????????????????????? ???????????? ???????????? ?????????????????? ????????? ????????? ???????????? ?????????????????? ???????????? 



.



???. [????????? ??????????????????] ???????????? ??????????????? ??????????????? ?????????: javascript function declaration vs arrow function ??????????????? ?????????????????? ???????????????????????? ????????? ??????????????? ?????????????????? ???????????? 

???.???. ??????????????????????????????????????? ?????? var, let, const ?????? ??????????????? ?????????????????????????????? ??????? 

 .

???. ???????????????????????? ????????????????????? ???????????? array ???????????? ??????????????? ??????????????? ????????? ????????? array ?????? ???????????? map ????????? ???????????? ?????????????????????????????? ???????????????????????? ??? ???????????? ???????????? ????????? ??????????????? ?????????????????? array ?????????????????? ?????????????????? ???????????? ??????????????? ?????? ??????????????? ???????????? 

???. [ ???????????????????????????????????? ??????????????? ??????????????? ???????????? ????????? ????????? ] ???????????????????????? ????????????????????? ???????????? array ???????????? ???????????? ??????????????? ?????????????????? ????????? ????????? ???????????? ???????????? ???????????? filter ????????? ????????? 

???. ???????????? array ?????? ??????????????? ???????????????????????? ????????????????????? ???????????? ?????????????????? ????????? ????????????????????? ?????? price ????????? ???????????? ?????????????????? ????????? ??????????????????????????? find ???????????? ????????? ???????????? 

???.??? [????????????????????????] ??????????????????????????????????????? ??? array ?????? map, forEach, filter, find ??????????????? ???????????? ?????? ????????? ??????????????? ???????????? ?????????????????? ???????????? ??????????????? 



.

???. ?????????????????? ???????????? ??????????????????????????????????????? ????????????????????? ?????? ????????? ???????????? ???????????????????????????????????? ???????????????????????? ?????????????????? ??????????????????????????? ???????????? ???????????? destructuring ????????? ???????????? 

???. [?????????????????????????????????] array ?????? destructuring ???????????? ?????? ???????????? ???????????? ???????????? ???????????? ????????? ?????? ??????????????? ??????????????? ?????? ?????????????????? ?????? destructuring ????????? 'three' ???????????? ???????????? ???????????????????????? ??? ?????????????????? 

??????. ??????????????? ????????????????????????????????? ??????????????? ???????????? ??????????????? ?????????????????? ????????? ????????????????????? ????????? ????????? ??????????????? ????????????????????????????????? ???????????? ????????? ??????????????? ????????????????????????????????? ?????? ????????? ????????? ??????????????? ????????????????????? ??????????????? ?????? ??????????????? ????????????????????????????????? ?????? ???????????? ?????????????????? ?????????????????? ?????????????????? ???????????? ????????? ?????? 



.

[??????????????????]

??????. ???????????? nested ????????????????????? ??????????????????????????? ????????? (?????????????????? ???????????? ????????????????????? ?????? ??????????????????????????? ?????? ?????????????????? ?????? ????????????????????? ??????????????? ??????????????? ???????????? ????????? ????????????????????? ?????? ??????????????????????????? ?????? ?????????????????? ?????? ????????????????????? ??????????????? ??????????????? ????????? ????????? ???????????? ????????????????????? ??????????????????????????? ???????????? ????????? ??????????????? ???????????? ??????????????????????????? ?????? ????????? ???????????? array ???????????? ??????????????? ????????? ???????????? ????????????????????? )

??????. ??????????????? ????????????????????? ??? ?????? ?????? ????????? ?????? ?????????????????????????????? ??????????????? ???????????? ?????? ?????????????????? ?????????????????? ????????? ???????????? ???????????? ???????????? ???????????????????????? ???????????? 



???????????? ?????? ?????? ?????? ??????????????? ??????????????? ???????????? ???????????? ??????????????? ?????????????????? ???????????? ???????????? ?????????????????? ???????????? ??????????????? ????????? ??????????????? ??????????????? ???????????? ?????????????????? ??????????????? ?????? ??????????????? ???????????? ???????????? ???????????? ??????????????? ?????????????????? ?????? ??????????????? ?????? ?????????????????? ????????? ????????? ???????????? ????????? ??????????????? ??????????????? ???????????? ????????????????????? ??????????????? ???????????? ES??? ??? ?????????????????? ??????????????? ??????????????? ??????????????? ?????????????????? ????????? ???????????? ???????????????????????? ???????????? ???????????? ???????????? ?????????????????? ???????????? ??????????????? ???????????? ????????? ??????????????? 



.

???????????? ?????? ?????????????????? checkmate ???????????? ??????????????? ???????????????????????? ??????????????? ????????? ??????????????? 

 */

//
/* 
API ???????????????????????? 

???. ???????????? ???????????????????????? ??????????????? ?????????????????? jsonplaceholder ?????? ???????????????????????? ???????????? ???????????? fetch ????????? ?????????????????? ??????????????? ??? ?????????????????? ???????????? ????????? ???????????? ??????????????? ???????????????????????? ??? comments ?????? API ?????? ???????????? ??????????????? ???????????? ??????????????????????????????????????? ???????????? ????????? ????????? ????????? ???????????? ??????????????? ??? ??????????????? ????????????????????? ??????????????? 

???. ?????? ?????????????????? ?????? ???????????????????????? ??????????????? ??? ?????????????????? ?????????????????? ?????????????????? ???????????? ???????????? html ??? ?????????????????? ????????????????????? ??????????????? ???????????? ????????????????????? ????????? ??????????????? ???????????? ??????????????? ??????????????? ?????????????????? ??????????????? ???????????? ???????????? ????????? ???????????? ??????????????? ????????? ???????????? ???????????? ???????????????????????? ??? ????????????????????? 

???. ?????????????????? ????????????????????? ???????????? ???????????? ?????? ???????????? ????????? ?????????????????? ???????????? ????????? ??????????????? ??????????????? ????????? ??????????????? ????????? ???????????????????????? ????????? ???????????? ?????????????????? ???????????? ????????? ????????? ??????????????? ????????? ???????????? ???????????????????????? ??? ????????????????????? ?????????????????? ???????????? ????????? ????????? ???????????? ?????? ??????????????? ??????????????????????????? ?????????????????? ????????????????????? 

???. ???????????? ?????? ???????????? ????????? ?????????????????? ?????? ???????????? ???????????????????????? ??? ???????????????????????? ????????? ????????? ?????? ??????????????? arrow ??????????????? ????????? ???????????? ????????????????????? ??????????????? ????????? ????????? ????????????????????? ?????????????????? forEach ????????? ???????????? ????????????????????? ??????????????? 

???. ???????????????????????? ???????????? ???????????? ????????? ???????????? ?????????????????? ??? ??????????????? ???????????? (?????????????????? ?????? div ??? ?????? ????????? ???????????? ???????????? ??? )????????? ?????????????????? ?????? ???????????? ???????????? ???????????? api ?????? url ??? ??????????????? (???????????????????????????????????? ???????????????????????? ????????????????????? ????????????) ????????? ???????????? ????????? ???????????? ????????? ???????????? ???????????????????????? ??? ?????????????????? ????????????????????? ??????????????? 



???. randomuser ?????? ???????????????????????? ??? ???????????? (randomuser.me) ??? ???????????? ??????????????? ???????????? ???????????? ????????? ??????????????? ??????????????? ????????????????????? ????????? ????????????????????? ???????????? ??????????????? ????????? ????????????????????? location ?????? ??????????????? ?????? ???????????? ???????????? ?????? ?????????????????? ???????????????????????? ?????? ?????????????????? street, city, coordinates, timezone ??????????????? ?????????????????? ?????????????????? ???????????? ????????? ?????????????????? ???????????? 



???. network ??????????????? ???????????? ???????????? ????????? ??????????????? ??????????????? ???????????? ??????????????? ??????????????? ???????????? ?????? ????????????????????? ??????????????? ???????????? ??????????????? ????????? ???????????????????????? ??????????????? ??????????????? ?????? ?????????????????? ???????????? ??????????????? ????????????????????? ???????????? ?????????????????? 

.

???. ???????????????????????????-???

the meal db ?????? ??????????????? ????????? the sports db ???????????? ???????????? ??????????????? ????????? ????????????????????? ??????????????????????????? ?????? ?????????????????? ???????????? ???????????? ????????? ????????? ???????????? ????????? ???????????? ???????????? ???????????????????????? ??? ???????????? ?????????????????? ?????? ?????? ???????????? ????????? ?????????????????? ???????????? api ???????????? ?????? ????????? ????????? ?????? ?????? ????????? ????????? ???????????? ?????????????????? ??????????????? ??????????????? ???????????? ???????????? ????????? ???????????? ????????? ???????????????????????? ?????????????????? ?????????????????? ??????????????? ?????????????????????????????? ????????????????????????????????? ???????????? ?????????????????? mealdb ?????? ???????????? ???????????? ????????? ?????????????????? ??????????????? ???????????? ??????????????? ??????????????? ????????????????????? 



???. ???????????????????????????-???

???????????? sports db ?????? ???????????? ?????? ???????????????????????? ?????????????????? ?????????????????? ???????????? ??????????????? ????????????????????? ????????? ???????????? ???????????? ??????????????? ????????????????????? ???????????? ???????????? ????????? ????????? ??????????????? ????????? ????????????????????? ?????????????????? ???????????? ???????????? ???????????? ?????? ????????? ?????????????????? ???????????? ????????? ????????? ????????? ???????????? ???????????? ??????????????? ??????????????? ???????????? ???????????? ????????? ???????????? ???????????? ???????????????  



.

??????????????? ????????????????????? ???????????????????????? ??? ?????? ????????? ?????????????????? ????????? ??????????????? ???????????? ???????????? ??????????????? ????????? ???????????? ?????????????????? ???????????? ??????????????? 
*/

/* 

??????????????????????????? ??? ???????????????????????? 

???. ???????????? ????????????????????? ??????????????????????????? ???????????? ????????? ????????????????????? ?????? ????????????????????? ?????????????????? ??????????????????????????? ?????????????????? ??????????????? ???????????? ??????????????????????????? ?????? ????????? ????????? ???????????? ?????????????????? ????????????????????? , ?????????????????? ??????????????????????????? ?????? ????????? ????????? ???????????? array ??? ???????????? ??????????????????????????? ?????? ????????? ????????? ???????????? ???????????????(????????????) ??? ?????? ???????????? ?????? ?????? ???????????? ?????? ???????????? ?????? ???????????? ???????????? ????????????????????? ?????? ??????????????? ???????????? ??????????????????????????? ????????????????????? ??????????????? ?????? ???????????? ??????????????? ??????????????? ??????????????? ???????????? 

.

???. ???????????? ???????????????????????? ????????????????????? ???????????? ???????????? ????????????????????? ???????????????????????? ??????????????????????????? ???????????? ??????????????? ??????????????? ??????????????? ????????????????????? ?????? ???????????? ??????????????? ??????????????????????????? ?????? ????????? ??????????????? ???????????????????????? ????????????????????? ?????? ??????????????? ??????????????? ?????? ??????????????? ???????????? ??????????????????????????? ????????? ????????????--???????????? ????????????????????? ????????????????????? ????????? ??????????????? ??????????????????????????? ??????????????? ?????????????????? ??????????????????????????? ????????? ?????? ??????????????????????????? ?????? ????????? ???????????? array ??????????????? ????????????????????? ??????????????? ?????? ?????????????????? ??????????????? ?????? ???????????? ???????????? ??????????????? ??????????????? ????????? ??????????????? ??????????????? 

.

???.???. ??????????????? ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ??????????????? ???????????? ?????? ????????????????????? ??????????????? 

???.???. ?????? ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ??????????????????????????? ??????????????? ?????? ????????????????????? ????????? ????????? ?????? ????????????????????????????????? ???????????? ?????????????????? 17 ???????????? ????????? ????????? ??????????????? ????????????????????? ??????????????? 

???.??? ?????????, ????????????????????????????????? ??????????????? ???????????? ?????????????????? ??????????????? ?????????????????? ?????? ????????????????????? ????????? ????????? ?????? ??????????????? ????????????????????????????????? ??????????????? ??????????????? ????????? ??????????????? ??????????????????????????????????????? ????????? ????????? ????????????????????? ????????? ???????????? ????????? ????????? ??????????????? ????????????????????? ????????? ???????????? 

???.??? ?????????????????? ???????????? ??????????????? ?????????????????? ??????????????? ??????????????? ?????????????????? ??????????????? ????????????????????????????????? ??????????????? ?????? arrow ????????????????????? ????????? ???????????????????????? ????????????????????? ?????????????????? ?????????????????????????????? ??????????????? ????????????????????????????????? ?????? ???????????? ??? ????????? ???????????? ??????????????? ??????????????? ????????????????????? ???????????? ????????? ??????????????? ????????????????????? ???????????? ???????????? ?????????????????? ????????? ????????? ???????????? ?????????????????? ???????????? 



.



???. ???????????????????????? ????????????????????? ???????????? array ???????????? ??????????????? ??????????????? ????????? ????????? array ?????? ???????????? map ????????? ???????????? ?????????????????????????????? ???????????????????????? ??? ???????????? ????????? ????????? ??????????????? ?????????????????? array ?????????????????? ?????????????????? ???????????? ??????????????? ?????? ??????????????? ???????????? 



???. ??????????????????????????????????????? ??? array ?????? map, forEach, filter, find ??????????????? ???????????? ?????? ????????? ??????????????? ???????????? ?????????????????? ???????????? ??????????????? 



.

???. ?????????????????? ???????????? ??????????????????????????????????????? ????????????????????? ?????? ????????? ???????????? ???????????????????????????????????? ???????????????????????? ?????????????????? ??????????????????????????? ???????????? ???????????? destructuring ????????? ???????????? array ?????? destructuring ???????????? ?????? ???????????? ???????????? ???????????? ???????????? ????????? ?????? ????????????????????? ??????????????? ?????? ?????????????????? ?????? destructuring ????????? 'balance' ???????????? ???????????? ???????????????????????? ??? ??????????????????



???. ???????????? ???????????????????????? ??????????????? ?????????????????? jsonplaceholder ?????? ???????????????????????? ???????????? ???????????? fetch ????????? ?????????????????? ??????????????? ??? ?????????????????? ???????????? ????????? ???????????? ??????????????? ???????????????????????? ??? photos ?????? API ?????? ???????????? ??????????????? ???????????? ??????????????????????????????????????? ???????????? ????????? ????????? ????????? ???????????? ??????????????? ??? ??????????????? ????????????????????? ??????????????? ??????????????? ?????????????????? ??????????????? ?????????????????? (????????? ???????????? ?????????????????????????????? ?????? ???????????????) ?????????????????? ???????????? ???????????? html ???????????? ???????????????????????? ??? ????????? ????????? ???????????? ???????????? ???????????? ?????????????????? ????????????????????? 



???. ?????????????????????????????? ??????????????? ??????????????? ???????????? ???????????? ?????????????????? div ?????????????????? ??????????????? ???????????? ?????? ???????????????????????????????????? ?????? ????????? ?????? ???????????? ????????? ??????????????? ???????????? ???????????? ???????????? ???????????? ???????????? ????????? ???????????? API ?????? ???????????? ?????? ????????? photos ?????? ????????? ???????????????????????????????????? ${id} ??????????????? ??????????????? ???????????? ?????????????????? ???????????? photo ?????? url ???????????? ???????????? ???????????? ????????? thumbnail ???????????? ?????????????????? ????????????????????? ???????????? ???????????? title ?????????????????????????????? ????????????????????? 



???. ???????????? ?????? ???????????? ????????? ?????????????????? ?????? ???????????? ???????????????????????? ??? ???????????????????????? ????????? ????????? ?????? ??????????????? arrow ??????????????? ????????? ???????????? ????????????????????? ??????????????? ????????? ????????? ????????????????????? ?????????????????? forEach ????????? ???????????? ????????????????????? ??????????????? 



.

??????. ????????????????????? ???????????????????????? 

?????? ??????????????? 34 ???????????? ????????? ???????????? ??????????????? ??????????????? ????????? the meal db ?????? ?????????????????? ????????? ????????? ??????????????? ?????? ?????????????????? ??????????????? ????????? the coktaildb ???????????? ???????????? ??????????????? ????????? ????????????????????? ??????????????????????????? ?????? ?????????????????? ???????????? ???????????? ????????? ????????? ???????????? ????????? ???????????? ???????????? ???????????????????????? ??? ???????????? ?????????????????? ?????? ?????? ???????????? ????????? ?????????????????? ???????????? api ???????????? ?????? ????????? ????????? ?????? ?????? ????????? ????????? ???????????? ?????????????????? ??????????????? ??????????????? ???????????? ???????????? ????????? ???????????? ????????? ???????????????????????? ?????????????????? ?????????????????? ??????????????? ?????????????????????????????? ????????????????????????????????? ???????????? ?????????????????? mealdb ?????? ???????????? ???????????? ????????? ?????????????????? ??????????????? ???????????? ??????????????? ??????????????? ????????????????????? 



.



?????????????????????????????? ??? ??????????????????????????????: 

?????????????????????????????? ???????????? ????????? ?????????????????????????????? ??? ??????????????? ??? ?????????????????????????????? ??? ???????????? ???????????? ???????????? API ????????????????????? ??????????????????????????? ???????????? ???????????? ???????????? ??????????????? ???????????? ????????? ????????? ??????????????? ?????????????????? ?????????????????? API ???????????? ???????????? ??????????????? ?????????????????? ????????? ???????????? ???????????????????????? ??? ????????????????????? ?????????????????? ???????????? ???????????? API ?????? ??????????????? ????????? ?????????????????????????????? 

*/
