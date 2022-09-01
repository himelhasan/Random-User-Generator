console.log("%c random.js", "color:red;font-size:15px; background:black");
// ৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে।
// তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে।
//সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে।
// তবে দেখাতে হবে।
const loadRandomUser = () => {
  url = "https://randomuser.me/api/";
  fetch(url)
    .then((response) => response.json())
    .then((data) => randomUser(data));
};

const randomUser = (data) => {
  console.log(data.results[0]);
  const title = data.results[0].name.title;
  const first = data.results[0].name.first;
  const last = data.results[0].name.last;
  const fullName = title.concat(" ", first, " ", last);
  const email = data.results[0].email;
  const birthday = data.results[0].dob.date;
  const age = data.results[0].dob.age;
  const phone = data.results[0].phone;
  const password = data.results[0].login.password;
  const image = data.results[0].picture.medium;
  const city = data.results[0].location.city;
  const country = data.results[0].location.country;
  const postcode = data.results[0].location.postcode.state;
  const street =
    data.results[0].location.street.name + " " + data.results[0].location.street.number;
  const address = street + " " + city + " " + country + " " + postcode;

  const wrapperForUser = document.getElementById("wrapperForUser");
  const div = document.createElement("div");
  div.innerHTML = `
  
    <img
    class="rounded-circle"
    src="${image}"
  />
  <h3 class="name">${fullName}</h3>
  <p class="title">${email}</p>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush text-left">
    <li class="list-group-item  text-left">Address:${address}</li>
    <li class="list-group-item text-left">Age: ${age}</li>
    <li class="list-group-item text-left">${phone}</li>
    <li class="list-group-item text-left">Password: ${password}</li>
    <li class="list-group-item text-left">${phone}</li>
  </ul>
</div>
  
  
  
  
    `;
  wrapperForUser.append(div);
};
loadRandomUser();
