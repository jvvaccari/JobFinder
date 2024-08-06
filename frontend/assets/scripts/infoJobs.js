document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/jobs")
        .then((response) => response.json())
        .then((jobs) => {
            const jobsContainer = document.getElementById("jobs-container");
            jobsContainer.innerHTML = "";

            jobs.forEach((job) => {
                const jobElement = document.createElement("div");
                
                jobElement.innerHTML = `
                    <div class="card d-flex flex-row justify-content-center align-items-center p-5">
                        <img class="img-jobs" alt="company image" src="${job.image}"/>
                        <div class="d-flex flex-column col-lg-9 col-md-6 col-sm-7 mt-3">
                            <p class="h6">${job.title}</p>
                            <p class="h2">${job.company}</p>
                            <p class="h7">R$${job.salary}</p>
                        </div>
                        <div class="mx-1">
                            <a class="btn btn-main py-3 px-3">Ver Vaga</a>
                        </div>
                    </div>
                `;
                jobsContainer.appendChild(jobElement);
            });
        })
        .catch((error) => console.error("Error:", error));
});
