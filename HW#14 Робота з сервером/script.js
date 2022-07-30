const getInfo = document.getElementById("getInfo");
const getPlanet = document.getElementById("getPlanet");
const getNextPlanet = document.getElementById("getNextPlanet");
const infoSection = document.querySelector(".infoSection");
const getFilm = document.getElementById("getFilm");
let urlPlanet = "https://swapi.dev/api/planets/?page=1";
const urlFilm = "https://swapi.dev/api/films/";

async function getPerson(url) {
  const res = await fetch(url).then((res) => res.json());
  return res;
}

async function getPartFilm() {
  infoSection.innerHTML = "";
  const part = getFilm.value;
  if (part < 1 || part > 6) return alert("Введіть значення від 1 до 6!");
  const res = await fetch(`${urlFilm}${part}`).then((res) => res.json());
  const arrHerous = res.characters;
  const herousInfo = "";
  const arr = [];
  arrHerous.forEach((el) => {
    getPerson(el).then((el) => {
      arr = [el.name, el.birth_year, el.gender];
      herousInfo += `<div class='infoElement'> <p>Name: ${arr[0]}</p><p>Birth year: ${arr[1]}</p><p>Gender: ${arr[2]}</div> `;
      infoSection.innerHTML = herousInfo;
      getPartFilm.value = "";
    });
  });
}

getInfo.addEventListener("click", getPartFilm);

async function getPlanets() {
  infoSection.innerHTML = "";
  const planet = "";
  const res = await fetch(urlPlanet).then((res) => res.json());
  const planetsArr = res.results;
  planetsArr.forEach((namePlanet) => {
    planet += `<li style="color: rgb(221, 228, 13)">${namePlanet.name}</li>`;
  });
  infoSection.innerHTML = planet;
}

getPlanet.addEventListener("click", getPlanets);

async function nextPlanet() {
  const res = await fetch(urlPlanet).then((res) => res.json());
  if (!res.next) return;
  urlPlanet = res.next;
  getPlanets();
}

getNextPlanet.addEventListener("click", nextPlanet);
