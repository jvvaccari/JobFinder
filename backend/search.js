document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-input");

    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        const query = searchInput.value;
        console.log(`Query: ${query}`);
    });
});

function filterJobs(jobs, term) {
    let filtered_jobs = [];

    for (const job of jobs) {
        if (job.title.contains(term)) {
            filtered_jobs.push(job);
        }
    }

    for (const job of jobs) {
        if (job.description.contains(term)) {
            filtered_jobs.push(job);
        }
    }

    return filtered_jobs;
}
