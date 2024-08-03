document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-input");

    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        const query = searchInput.value;
        console.log(`Query: ${query}`);
    });
});
