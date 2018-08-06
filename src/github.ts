import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

declare const process: any;

const USERNAME = process.env.GITHUB_USERNAME;
const TOKEN = process.env.GITHUB_TOKEN;
const API_BASE = 'https://api.github.com/';

export interface SimpleBranch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
  protected: boolean;
  protection_url: string;
}

function generateOAuthCredentials(username: string, token: string): string {
  return Utilities.base64Encode(`${username}:${token}`);
}

function getOptions(username: string, token: string): URLFetchRequestOptions {
  const credentials = generateOAuthCredentials(username, token);
  const options = {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Basic ${credentials}`,
    },
  };

  return options;
}

export function fetchBranches(owner: string, repo: string, page: number = 1): Array<SimpleBranch> {
  const options = getOptions(USERNAME, TOKEN);
  const response = UrlFetchApp.fetch(`https://api.github.com/repos/${owner}/${repo}/branches?page=${page}`, options);
  let branches = JSON.parse(response.getContentText());

  if (branches.length !== 0) {
    branches = branches.concat(fetchBranches(owner, repo, page + 1));
  }

  return branches;
}

export function fetchBranch(owner: string, repo: string, branch: string) {
  const options = getOptions(USERNAME, TOKEN);
  const response = UrlFetchApp.fetch(`https://api.github.com/repos/${owner}/${repo}/branches/${branch}`, options);
  const json = JSON.parse(response.getContentText());
  return json;
}
