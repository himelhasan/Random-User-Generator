console.log("%c API ISSUES", "color:red;font-size:15px; background:black");

// ১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

// function loadData() {
//   const url = "https://jsonplaceholder.typicode.com/comments";
//   fetch(url).then((response) => response.json().then((data) => loadcomments(data)));
// }

// const dataLoad = (url) => {};
// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।

/* 
function loadcomments(data) {
  console.log(data[1].email);
  const commentContainer = document.getElementById("comment-container");

  for (const datum of data) {
    const li = document.createElement("li");
    li.innerHTML = `
          <li class="list-group-item"><b style="color:red">Email: </b>${datum.email} <b style="color:red">Comment: </b>${datum.body} </li>
         `;
    commentContainer.appendChild(li);
  }
}
 */
// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না।
// ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।
// loadData();
// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।

const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url).then((response) => response.json().then((data) => loadcomments(data)));
};

const loadcomments = (data) => {
  console.log(data[1].email);
  const commentContainer = document.getElementById("comment-container");

  for (const datum of data) {
    console.log("aaaaaaaaaaaaa", datum);
    const li = document.createElement("li");
    li.innerHTML = `
              <li class="list-group-item" onclick=showDetails(${datum.id})><b style="color:red">Comment: </b>${datum.id} <b style="color:red">Email: </b>${datum.email} </li>
             `;
    commentContainer.appendChild(li);
  }
};
// ৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা।

const showDetails = (id) => {
  console.log(id);
  url = `https://jsonplaceholder.typicode.com/comments/${id}`;

  fetch(url).then((response) =>
    response.json().then((data) => loadcommentsDetails(data))
  );
};

const loadcommentsDetails = (id) => {
  const commentDetails = document.getElementById("commentDetails");
  const div = document.createElement("div");
  commentDetails.innerHTML = "";
  div.innerHTML = `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${id.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${id.email}</h6>
    <p class="card-text">${id.body}</p>
    
  </div>
</div>
    `;
  commentDetails.append(div);
};

// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে।
//// on random.js
// ৭. network ট্যাব একটু ভালো করে দেখো। দরকার হলে। গুগলে সার্চ দিয়ে বা ইউটিউবে ভিডিও দেখে ফেলো। এখন বেশিরভাগ জিনিস বুঝতে না পারলেও দেখে ফেলো। ফিউচারে কাজে লাগবে।
