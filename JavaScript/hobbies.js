const myForm = document.querySelector("#myForm");
const message = document.querySelector("#message");
const wordLimitIndicator = document.querySelector(".word-limit-indicator");
const maxWords = 10;

myForm.addEventListener("submit", function (event) {
  let words = message.value.split(" ");
  if (words.length > maxWords) {
    event.preventDefault();
    words = words.splice(0, maxWords);
    message.value = words.join(" ");
    alert("Word limit reached");
  }
});

message.addEventListener("input", function (event) {
  let words = message.value.split(" ");
  let wordCount = words.length;
  if (wordCount > maxWords) {
    words = words.splice(0, maxWords);
    message.value = words.join(" ");
    wordCount = maxWords;
    alert("Word limit reached");
  }
  wordLimitIndicator.textContent = `${wordCount}/${maxWords}`;
});

// Select the buttons and the list items
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const games = document.querySelectorAll(".game");

// Define the event listeners for each button
button1.addEventListener("click", () => {
  games.forEach((game) => {
    game.style.color = "red";
  });
});

button2.addEventListener("click", () => {
  games.forEach((game) => {
    game.style.color = "blue";
  });
});

button3.addEventListener("click", () => {
  games.forEach((game) => {
    game.style.color = "green";
  });
});
const links = document.querySelectorAll(".instagit");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const result = confirm("Redirect to another webpage");
    if (result === true) {
      window.location.href = event.target.href;
    }
  });
});