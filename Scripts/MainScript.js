const recipes = [];

const search = document.getElementById("search");
search.addEventListener("input", (e) => {
  let keyword = e.target.value.toLowerCase();
  document.querySelectorAll(".recipe").forEach(r => {
    r.style.display = r.innerText.toLowerCase().includes(keyword) ? "block" : "none";
  });
});