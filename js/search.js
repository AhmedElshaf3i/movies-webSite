import { api, apiFetch } from "./API.js";
import { display } from "./display.js";

export async function search() {
  /*******************search by word *********************/
  let data = await api("search");

  $("#searchWord").keyup(async () => {
    let inputSearch = $("#searchWord").val().toLowerCase();
    //if input empty display current
    if (inputSearch == "") {
      display(apiFetch);
    } else {
      let titleData = data.filter((x) => {
        if (x.title !== undefined) {
          if (x.title.toLowerCase().includes(inputSearch)) return x;
        }
      });
      display(titleData);
    }
  });

  /*******************search in the current category*********************/

  $("#search").keyup(() => {
    let inputSearch = $("#search").val().toLowerCase();
    //if input empty display current
    if (inputSearch == "") {
      display(apiFetch);
    } else {
      //apiFetch global array contain curent category data
      let titleData = apiFetch.filter((x) => {
        if(x.title!==undefined)
        {
          if(x.title.toLowerCase().includes(inputSearch))
          return x;
        }
        
      });

      display(titleData);
    }
  });
}
