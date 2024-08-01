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
