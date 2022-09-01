// Practice Problem: Access Object values
// Console the value of age
const student = {
  name: "Fredie",
  age: 26,
};
console.log(student.age);

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
console.log(data.location[0].latitude);
console.log(data.location[0].longitude);
console.log(data.location[0].city);
console.log(data.location[0].country);

/* Challenging
  ● Console the value of email
  ● Console the value of address
  ● Console the value of city
  ● Console the value of lat
  ● Console the value of company name
   */
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
    phone: "02-770-736-803",
  },
};

// Console the value of email
// ● Console the value of address
// ● Console the value of city
// ● Console the value of lat
// ● Console the value of company name

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);

/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। 
একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।
 */

const tempString = `
hey this is ${user.name}, I work for ${user.company.name}. The office is situated at ${user.address.city} and you can call me
at my office number ${user.company.phone}. Hope to see you soon.


`;
console.log(tempString);

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const simpleObj = {
  lat: "345.345,567.67",
  long: "895.875,983.87",
  city: "dhaka",
  country: "Bnagladesh",
};

const { lat, long, city, country } = simpleObj;
console.log("The Latitude", lat);

/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। 
    আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। 
    এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
 */

const personalDetails = {
  name: "Himel Hasan",
  blood: "AB+",
  profession: {
    name: "Freelancer",
    skill: [
      "Web development",
      "Digital Marketing",
      "Email Marketing",
      "Search Engine Optimization",
      "Graphic Design",
      "Basic Video Editing",
    ],
    marketplace: ["Upwork", "Fiverr", "Local", "Freelancer"],
    experience: 5,
    isTopRated: true,
  },
  education: [
    {
      course: "ssc",
      institute: "A.k High School",
      year: 2013,
      gpa: 4.69,
    },
    {
      course: "hsc",
      institute: "Dhonia University College",
      year: 2015,
      gpa: 4.25,
    },
    {
      course: "B.A",
      institute: "Adamjee Canatonment College",
      year: 2019,
      gpa: 3.1,
    },
  ],
  father: "Abudl Quddue",
  mother: "Umma Habiba",
  isMarrid: true,
  wife: {
    name: "Anni Kaniz",
    blood: "AB+",
    father: "Akter Hossain",
    mother: "Polly Akter",
    education: "BBA Graduate",
    kids: "",
  },
  Siblings: [
    {
      name: "Kaniz Fatema",
      blood: "O+",
      isMarrid: true,
      partner: [
        {
          name: "Jahid Hossain",
          profession: "Civil Engineer",
        },
      ],
      education: "BA Graduate",
    },
  ],
};

console.log(personalDetails.wife?.kids);
