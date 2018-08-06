import { fetchBranches, fetchBranch } from './github';
import { post } from './slack';
import { daysFromToday } from './utils';

declare var global: any;
declare const process: any;

global.main = (): void => {
  const owner: string = process.env.GITHUB_REPO_OWNER;
  const repo: string = process.env.GITHUB_REPO_NAME;

  const branches = fetchBranches(owner, repo);
  const featureBranches = branches.filter((branch) => /^feature[\-\/]/.test(branch.name)).map((branch) => {
    const { name } = branch;
    return fetchBranch(owner, repo, name);
  });
  const attachments = featureBranches.map((branch) => {
    const days = daysFromToday(new Date(branch.commit.commit.author.date));
    const stale = days >= 30;

    return {
      fallback: `${branch.name}: ${branch.commit.commit.author.date}`,
      title: branch.name,
      title_link: branch._links.html,
      text: `Last commit created by ${branch.commit.commit.author.name}, ${days} days ago`,
      color: stale ? 'danger' : undefined,
    };
  });

  post(attachments);
};
