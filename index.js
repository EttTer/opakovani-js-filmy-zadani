'use strict';

/* tady bude tvůj kód 
const movies = (props)=>{
    const {title,year,posterUrl,genres} =props

    return `<div class="movie">
<img class="movie__img" src="${posterUrl}" alt="Vykoupení z věznice Shawshank">
<h2 class="movie__title">${title}</h2>
<p class="movie__year">${year}</p>
<p class="movie__genre">${genres}</p>
</div>`};

  
const Film = ()=> {document.querySelector(".movies").innerHTML = movies.map((item)=>{
    return movies(item);}).join("");
};
*/




    const showMovies =(data)=> {
data.forEach(item =>{console.log(item.title)}) };

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
.then((response) => {
  return response.json();
})
.then(showMovies)
   



