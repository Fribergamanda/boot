const output = document.querySelector('#output'); 
const dateElement = document.getElementById("date"); //datum

let news = []; //spara allting som hämtas

const fetchNews = () => { // funktion, där data hämtas
  fetch ('https://feeder.co/out/secret/discover/news.json ') //('https://jsonplaceholder.typicode.com/todos') //funkar med denna
    .then(res => res.json()) //returnerar
    .then(data => { // tillgång till data
      news = data;
      console.log(news); //så de syns i konsolen
      listNews(); // funktion, skapad längre ner
    })
}

fetchNews();

const newNews = (news) => { //funktion, där de skapas komponenter

  let card = document.createElement('div'); //skapar en div 
  card.classList.add('card', 'p-3', 'my-3', 'news'); // klasserna i diven

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between');

  let title = document.createElement('h3');
  title.classList.add('title');
  title.innerText = news.title; //objektet + titeln

  innerCard.appendChild(title);
  card.appendChild(innerCard);
  output.appendChild(card);
}

const listNews = () => { //list news funktion
  output.innerHTML = ''; // nolla output, så den ej plussar på varje gång
  news.forEach(news => {
  newNews(news); //funktion, där varje news matas in
  })
}

// datum
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
