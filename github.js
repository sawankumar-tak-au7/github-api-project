class Github {
  constructor() {
    this.client_id = '0cd4507ff410da691f76';
    this.client_secret = 'af618f9935613d7410240a08b04c806f6fcf0c5d';
    this.repo_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort = ${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await profileRepo.json();

    return {
      profile,
      repos
    }
  }
}