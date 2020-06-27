let searchResult = document.querySelector('div');
let searchButton = document.querySelector('button');

searchButton.addEventListener('click', showSearchResults);

function showSearchResults() {
  searchResult.innerHTML = `
        <h2>Search Results</h2>
        <p>To become a web developer you need to learn HTML, CSS and JavaScript</p>
    `;
}
