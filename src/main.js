let newArray = [];
const getFetchJSON = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        newArray.push(data);
        arrData(newArray); 
      })
      .catch(error => {
        return error;
      });
  };

   arr = ['roma','Avengers: Infinity War', 'Annihilation', 'The Hangover','John Wick','it'].forEach((ele) =>{
    getFetchJSON(`https://www.omdbapi.com/?t=${ele}&apikey=f3f0406a`);
  });

  const Adventure = document.getElementById('Adventure');
  const Horror = document.getElementById('Horror');
  const SciFi = document.getElementById('Sci-Fi');
  const Drama = document.getElementById('Drama');
  const Comedy = document.getElementById('Comedy');
  const Action = document.getElementById('Action');
  const idMovies = document.getElementById('idMovies');
 

  let arrDataTotal = []
  const getFetchJSON3 = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
       if(data.hasOwnProperty('Title')){
         arrDataTotal.push(data)
       }
      })
      .catch(error => {
        return error;
      });
  };
  for(let i = 0; i < 9; i++) {
      for(let j = 0; j < 9; j++){
       for(let k= 0; k < 9; k++ ) {  
        getFetchJSON3(`https://www.omdbapi.com/?i=tt${i}${j}${k}7980&apikey=8f16c99f`);    
      }
    }
  }
  

const movieFilter = document.getElementById('movieFilter');

  const paintingData = (data, id, genres ) => {
    let dataToHtml = [];
    data.forEach((ele) => {
       let listData = ` 
       <div class="card-body" id="${genres}">
       <img src="${ele.Poster}" id="${genres}" class="card-img " alt="imgen de ${ele.Title} />
            <a href="#" class="btn btn-color"  id="${genres}"> ${genres} </a>
      </div>    
     `;
      dataToHtml.push(listData); 
    });
    id.innerHTML = dataToHtml.join(' ');
  };

  idMovies.addEventListener('click',(event) => {
  const getId = event.target.id;
  const data = arrDataTotal.filter(ele => ele.Genre.indexOf(getId)!==-1);
  console.log(data);
  
  let dataToHtml = [];
   data.forEach((ele) => {
    let listData = ` 
    <div class="card col-xs-10 col-sm-10 col-md-3 ">
    <img src="${ele.Poster}" class="card-img-top" alt="...">
    <div class=" card-body">
      <p class="card-font">${ele.Title}</p>
      <p class="card-text">${ele.Genre}</p>
      <p class="card-text"><small class="text-muted">Año: ${ele.Year}</small></p>
    </div>
  </div> `;
  dataToHtml.push(listData);  
});
movieFilter.innerHTML = dataToHtml.join(' ');
movieFilter.classList.remove('hidden');
movieFilter.classList.add('show');
idMovies.classList.add('hidden');
});

  
  const arrData = (data) => {      
    const genresAdventure = 'Adventure'
    const filterAdventure = data.filter(ele => ele.Title.indexOf('Avengers: Infinity War')!==-1);
       paintingData(filterAdventure, Adventure,genresAdventure);
       const genresHorror = 'Horror'
    const filterHorror = data.filter(ele => ele.Title.indexOf('It')!==-1);
       paintingData(filterHorror, Horror, genresHorror);
       const genresSciFi = 'Sci-Fi';
       const filterSciFi = data.filter(ele => ele.Title.indexOf('Annihilation')!==-1);      
       paintingData(filterSciFi, SciFi, genresSciFi);
       const genresDrama = 'Drama';
       const filterDrama = data.filter(ele => ele.Title.indexOf('Roma')!==-1);      
       paintingData(filterDrama, Drama, genresDrama);
       const genresComedy = 'Comedy';
       const filterComedy = data.filter(ele => ele.Title.indexOf('The Hangover')!==-1);      
       paintingData(filterComedy, Comedy, genresComedy);
       const genresAction = 'Action';
       const filterAction = data.filter(ele => ele.Title.indexOf('John Wick')!==-1);      
       paintingData(filterAction, Action, genresAction);
  };
 
  const getFetchJSONSearch = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
       console.log(data);
       printMovies(data.Search)

       
      })
      .catch(error => {
        return error;
      });
  };
const genresPage = document.getElementById('idMovies');
const search = document.getElementById('search');
const btnSearch = document.getElementById('btn-search')
btnSearch.addEventListener('click', () => {  
  const valueSearch = search.value;
 getFetchJSONSearch(`https://www.omdbapi.com/?s=${encodeURI(valueSearch)}&apikey=f3f0406a`);
  genresPage.classList.remove('show');
 genresPage.classList.add('hidden');
 
});

// https://www.omdbapi.com/?s=Batman&apikey=8f16c99f

// getFetchJSON1('https://www.omdbapi.com/?s=Batman&apikey=8f16c99f');

const searchMovies = document.getElementById('movieSearch');
const printMovies = (data) => {
  let dataToHtml = [];
  data.forEach((ele) => {
     let listData = ` 
     <div class="card col-xs-10 col-sm-10 col-md-3 ">
     <img src="${ele.Poster}" class="card-img-top" alt="...">
     <div class=" card-body">
       <p class="card-font">${ele.Title}</p>
       <p class="card-text">${ele.Type}</p>
       <p class="card-text"><small class="text-muted">${ele.Year}</small></p>
     </div>
   </div> `;
          dataToHtml.push(listData); 
        });
        searchMovies.innerHTML = dataToHtml.join(' ');
       };