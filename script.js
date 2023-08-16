const accessKey = "x-Vy6Xax3ASFmWLWsxP78hCChWkOpydSZozVn2tX3FQ";
const inputElement = document.getElementById("search");
const showMore = document.querySelector(".show-btn");
const htmlElement = document.querySelector(".Image-Container");
let page = 1;
async function searchImages() {
  inputData = inputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
//   console.log(results);
  results.map((result) => {
    dom = `
    <div class="Images">
    <img
      src="${result.urls.small}"
      alt="${result.alt_description}"
    />
    <a target="_blank" href="${result.links.html}">${result.alt_description}</a>
    </div>
  `
    htmlElement.innerHTML += dom
  })

  page++;
  if(page > 1)
  {
    showMore.style.display = "flex"
  }
}

document.getElementById("search-btn").addEventListener("click",()=>{
    htmlElement.innerHTML = "";
    searchImages();
})
showMore.addEventListener("click",()=>{
    searchImages();
})