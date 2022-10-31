let postsArray = [];

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

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

const postForm = document.querySelector(".post-form");
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = document.querySelector("#post-title").value;
  const bodyInput = document.querySelector("#post-body").value;
  const post = {
    title: titleInput,
    body: bodyInput,
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
    });
});
