var button = document.getElementById("submit");

button.addEventListener("click", () => {
  let userName = document.getElementById("name").value;
  let userMessage = document.getElementById("message").value;
  let postsDiv = document.getElementsByClassName("posts")[0];

  let div = document.createElement("div");

  let p1 = document.createElement("p");
  let userMessageInput = document.createTextNode(userMessage);
  p1.appendChild(userMessageInput);

  let p2 = document.createElement("p");
  let userNameInput = document.createTextNode("Posted By: " + userName);
  p2.appendChild(userNameInput);

  const brk = document.createElement("hr");

  div.append(p1);
  div.append(p2);
  div.append(brk);

  postsDiv.append(div);
});
