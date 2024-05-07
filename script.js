
// Search bar functionality
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  searchContributors(searchTerm);
});

function searchContributors(searchTerm) {
  const contributorLinks = contributors.getElementsByTagName("a");
  for (const link of contributorLinks) {
    const username = link.getAttribute("title").toLowerCase();
    if (username.includes(searchTerm)) {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  }
}



