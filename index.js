fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    let html = "";
    for (let post of postArr) {
      html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr />
      `;
      document.querySelector(".posts").innerHTML = html;
    }
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
  console.log(post);
});
