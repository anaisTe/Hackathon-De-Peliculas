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


 // getFetchJSON(`http://www.omdbapi.com/?t=Avengers: Infinity War&apikey=f3f0406a`);

  const Adventure = document.getElementById('Adventure');
  const Horror = document.getElementById('Horror');
  const SciFi = document.getElementById('Sci-Fi');
  const Drama = document.getElementById('Drama');
  const Comedy = document.getElementById('Comedy');
  const Action = document.getElementById('Action');
  const idMovies = document.getElementById('idMovies');
 

 
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
  idMovies.addEventListener('click',(event)=> {
  const getId = event.target.id;
  console.log(getId);
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
 
