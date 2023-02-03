"use strict";

const Film = (props) => {
  const { posterUrl, year, title, genres, url } = props;
  return `
  <div class="movie">
 <img class="movie__img" src="${posterUrl}" alt="Vykoupení z věznice Shawshank">
 <h2 class="movie__title"></h2>${title}</h2>
 <p class="movie__year">${year}/p>
 <p class="movie__genre">${genres}</p>
</div>`;
};

/*const showMovies1 = (data) => {
  const movieList = document.querySelector(".id");

  movieList.innerHTML = data.forEach((item) => {
    return Film;
  });
};*/

/*const showMovies = (data) => {
  const movieList = document.querySelector(".id");
  movieList.innerHTML = data.forEach((item) => {
    return `<div class="movie">
<img class="movie__img" src="${item.posterUrl}" alt="Vykoupení z věznice Shawshank">
<h2 class="movie__title">${item.title}</h2>
<p class="movie__year">${item.year}</p>
<p class="movie__genre">${item.genres}</p>
<div class="movie-link">
<a href="${item.url}" target="_blank">Odkaz na CSFD</a>
</div>
</div>`;
  });
};*/

const showMovies = (data) => {
  /*const movieList =*/ document.querySelector(".movies").innerHTML = data
    .map((item) => {
      return Film(item);
    })
    .join("");
};

fetch("https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies")
  .then((response) => {
    return response.json();
  })
  .then((data)=>showMovies(data));
