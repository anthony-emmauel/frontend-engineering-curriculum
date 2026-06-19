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

const fetchUser = async () => {
  try {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
    const apiData = await api.json();
    console.log(apiData);
  } catch (error) {
    console.log(error);
  }
};

fetchUser();
