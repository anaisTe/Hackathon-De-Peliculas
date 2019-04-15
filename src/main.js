
const getFetchJSON = (url) => {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);  
      })
      .catch(error => {
        return error;
      });
  };

  arr = ['harry_potter', 'batman', 'superman','it'].forEach((ele) =>{
    getFetchJSON(`http://www.omdbapi.com/?t=${ele}&apikey=f3f0406a`);
  })
 