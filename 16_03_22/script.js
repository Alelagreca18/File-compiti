//Sezione Commenti

const inputName = document.querySelector("#naming");
const inputEmail = document.querySelector("#mail");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const commentsList = document.querySelector("#comments");

const comments = [];

const renderComments = () => {
    commentsList.innerHTML = comments.map(
        (comment) => `<li>
         <p>${comment}</p>
         <img src"${avatar}">
      </li>`
    )
    .join("");
}

submit.addEventListener("click", () =>{
    comments.push(input.value, submit.value, inputName.value, inputEmail.value, );
    input.value = "";

    renderComments();
});

//(URL: https://randomuser.me/photos)