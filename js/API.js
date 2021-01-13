export let apiFetch = []; //global var contain current category data that fetched by api
export async function api(apiURL) {
  if (apiURL == undefined) {
    apiURL = "Now"; //defulte
  }

  let searchURL =
    "https://api.themoviedb.org/3/search/movie?query=mad&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false";
  let trendingURL =
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  let popularURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  let topratedURL =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  let upcomingURL =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  let NowURL =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  //let URL="https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
  //let latestURL="https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44";

  if (apiURL == "search") {
    apiFetch = await fetch(searchURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  } else if (apiURL == "trending") {
    apiFetch = await fetch(trendingURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  }
  // else if(apiURL=="latest")
  // {
  //     apiFetch= await fetch(latestURL);
  //     apiFetch = (await apiFetch.json()).results;
  //     return apiFetch;
  // }
  else if (apiURL == "popular") {
    apiFetch = await fetch(popularURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  } else if (apiURL == "toprated") {
    apiFetch = await fetch(topratedURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  } else if (apiURL == "upcoming") {
    apiFetch = await fetch(upcomingURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  } else if (apiURL == "Now") {
    apiFetch = await fetch(NowURL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  } else if (apiURL == "URL") {
    apiFetch = await fetch(URL);
    apiFetch = (await apiFetch.json()).results;
    return apiFetch;
  }
}
