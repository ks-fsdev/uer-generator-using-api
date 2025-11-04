fetch("https://randomuser.me/api")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    return (user = {
      gender: data.results[0].gender,
      dob: data.results[0].dob.date,
      email: data.results[0].email,
      phone: data.results[0].cell,
      age: data.results[0].dob.age,
      name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
      image: data.results[0].picture.large,
    });
    console.log(user);
  });

async function fetchUser() {
  await fetch("https://randomuser.me/api")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      user = {
        gender: data.results[0].gender,
        dob: data.results[0].dob.date,
        email: data.results[0].email,
        phone: data.results[0].cell,
        age: data.results[0].dob.age,
        name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
        image: data.results[0].picture.large,
      };

      document.getElementById("name").innerText = user.name;
      document.getElementById("gender").innerText = user.gender;
      document.getElementById("email").innerText = user.email;
      document.getElementById("phone").innerText = user.phone;
      document.getElementById("dob").innerText = user.dob;
      document.getElementById("img").src = user.image;
    });
}

fetchUser();
