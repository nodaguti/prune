import { fetchBranches, fetchBranch } from './github';
import { post } from './slack';
import { daysFromToday } from './utils';

declare var global: any;
declare const process: {
  env: { [key: string]: string };
};

global.main = (): void => {
  const {
    GITHUB_REPO_OWNER: owner,
    GITHUB_REPO_NAME: repo,
    GITHUB_BRANCH_NAME_FILTER: nameFilter,
    GITHUB_BRANCH_AGE_THRESHOLD: ageThreshold,
    GITHUB_BRANCH_AGE_THRESHOLD_SHOWN_AS_OLD: ageThresholdShownAsOld,
  } = process.env;

  const nameFilterReg = new RegExp(nameFilter);

  const branches = fetchBranches(owner, repo);
  const featureBranches = branches.filter((branch) => nameFilterReg.test(branch.name)).map((branch) => {
    const { name } = branch;
    return fetchBranch(owner, repo, name);
  });
  const attachments = featureBranches
    .map((branch) => {
      const days = daysFromToday(new Date(branch.commit.commit.author.date));

      if (days >= Number(ageThreshold)) {
        return null;
      }

      const stale = days >= Number(ageThresholdShownAsOld);

      return {
        fallback: `${branch.name}: ${branch.commit.commit.author.date}`,
        title: branch.name,
        title_link: branch._links.html,
        text: `Last commit created by ${branch.commit.commit.author.name}, ${days} days ago`,
        color: stale ? 'danger' : undefined,
      };
    })
    .filter((attachment) => !!attachment);

  post(attachments);
};
