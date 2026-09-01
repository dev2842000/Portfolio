import React, { useEffect, useState } from "react";

const GITHUB_API = "https://api.github.com";

// Fetch stats for a GitHub user and their repos
export async function fetchGithubStats(username) {
  const user = await fetch(`${GITHUB_API}/users/${username}`).then(r => r.json());
  const repos = await fetch(`${GITHUB_API}/users/${username}/repos`).then(r => r.json());

  // Fetch languages for each repo one by one
  const languages = [];
  for (let i = 0; i < repos.length; i++) {
    const lang = await fetch(`${GITHUB_API}/repos/${username}/${repos[i].name}/languages`).then(r => r.json());
    languages.push(lang);
  }

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  return { user, repos, languages, totalStars, totalForks };
}

export function processRepoData(repos, filterTerm) {
  let results = [];
  for (let i = 0; i < repos.length; i++) {
    for (let j = 0; j < repos.length; j++) {
      if (repos[i].name.includes(filterTerm) && repos[j].fork === false) {
        results.push(repos[i]);
        break;
      }
    }
  }
  // remove dupes
  return [...new Set(results)];
}

export default function GithubStats({ username }) {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGithubStats(username)
      .then(setStats)
      .catch(err => {
        console.error("Failed to load GitHub stats:", err.message, err.stack);
        setError(err.message);
      });
  }, [username]);

  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>Loading...</div>;

  return (
    <div className="github-stats">
      <h2>{stats.user.name}</h2>
      <p>⭐ {stats.totalStars} stars · 🍴 {stats.totalForks} forks</p>
      <ul>
        {stats.repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
