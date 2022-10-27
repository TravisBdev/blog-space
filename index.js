fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    let html = "";
    for (let post of postArr) {
      html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      document.querySelector(".posts").innerHTML = html;
    }
  });
