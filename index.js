let postsArray = [];
const titleInput = document.querySelector("#post-title");
const bodyInput = document.querySelector("#post-body");
const postForm = document.querySelector(".post-form");

function renderPosts() {
  let html = "";
  for (let post of postsArray) {
    html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr />
      `;
    document.querySelector(".posts").innerHTML = html;
  }
}

function clearForm() {
  titleInput.value = "";
  bodyInput.value = "";
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const post = {
    title: postTitle,
    body: postBody,
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();
      clearForm();
    });
});
