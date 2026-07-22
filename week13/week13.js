 const fetchPosts = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     const userPost = data.slice(0, 3);
//     console.log(userPost);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchPosts();

// const createPost = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },

//       body: JSON.stringify({
//         title: "First post",
//         body: "what are you saying",
//         userId: 78,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// createPost();

const updatePost = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "second post",
          body: "Learning API",
          userId: 89,
        }),
      },
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

updatePost();

const deletePost = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      },
    );
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

deletePost()