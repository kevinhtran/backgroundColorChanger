
const text = document.getElementById("text");
const author = document.getElementById("author");

let url = "https://type.fit/api/quotes";

clickButton.addEventListener('click', getQuote);

function getQuote() {
  fetch(url)
    .then((data) => {
      return data.json();
    }).then((quotes) => {
      let number = Math.floor(Math.random() * quotes.length);

      text.innerHTML = `<span>"</span> ${quotes[number].text} <span>"</span>`;
      author.innerHTML = `<span>---</span> ${quotes[number].author}`;
    })
    .catch((error) => {
    });
};

