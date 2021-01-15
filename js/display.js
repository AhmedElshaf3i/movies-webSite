import { api } from "./API.js";
/**
 * @param {*} apiFetchURL string
 * @param {*} stat string
 * @returns promise
 */

export async function display(apiFetchURL, stat) {
  let data = [];
  //if search by sending an api key to send to api fun to fetch data from api
  if (stat == "byAPI") {
    data = await api(apiFetchURL);
  }
  //if search by sending an array of object to display it
  else {
    data = apiFetchURL;
  }
  let cartona = ``;
  for (let i = 0; i < data.length; i++) {
    cartona += `
         <div class="col-md-4 my-3">
         <div class="text-center  rounded moviesContent ">
             <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" alt=""
                 class="imgMoveis img-fluid rounded">
             <div class="layer d-flex align-items-center">
                 <div>
                     <h2>${data[i].title} </h2>
                     <p>${data[i].overview}</p>
                     <p>rate:${data[i].vote_average}</p>
                     <p>${data[i].release_date}</p>
                 </div>
             </div>
         </div>
     </div>

     `;
  }
  $("#movies").html(cartona);
}
