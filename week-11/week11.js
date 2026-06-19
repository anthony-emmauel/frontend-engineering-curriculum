// const errorMessage = new Promise((resolve, reject) => {
//   reject("network error");
// });

// errorMessage
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Version 2
// const getMessage = async () => {
//   try {
//     const result = await errorMessage;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getMessage();

const createUserCard = (name, email, phone) => {
  const card = document.createElement("div");
  card.classList.add("user-card");

  const userName = document.createElement("p");
  userName.classList.add("user-name");
  userName.textContent = `${name}`;

  const userMail = document.createElement("p");
  userMail.classList.add("user-mail");
  userMail.textContent = `${email}`;

  const userPhone = document.createElement("p");
  userPhone.classList.add("user-phone");
  userPhone.textContent = `${phone}`;

  card.appendChild(userName);
  card.appendChild(userMail);
  card.appendChild(userPhone);

  return card;
};

const fetchUser = async () => {
  try {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const apiData = await api.json();
    const renderCard = (data) => {
      const userContainer = document.getElementById("user-container");
      userContainer.innerHTML = "";
      data.forEach((apiData) => {
        const { name, email, phone } = apiData;
        userContainer.appendChild(createUserCard(name, email, phone));
      });
    };
    renderCard(apiData);
  } catch (error) {
    console.log(error);
  }
};
fetchUser();
