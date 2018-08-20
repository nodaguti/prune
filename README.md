# Prune

> Github branch watcher that helps find and prune old, stale branches

![Prune](prune.png)

A Slack bot that runs on Google Apps Script for watching branches of a repository and notifying stale ones to Slack.

## Usage

1. Go through and finish [`clasp`'s "Install" procedures](https://github.com/google/clasp#install).
2. Clone this repository to your local computer.

```sh
git clone --depth=1 https://github.com/nodaguti/prune.git
```

3. Install all dependencies.

```sh
yarn install
```

4. Put your [scriptId](https://github.com/google/clasp#scriptid-required) to `.clasp.json`
5. Copy `.env.example`, rename it to `.env`, and edit it to set your tokens and change notification criteria (See the next section for more details).
6. Build and deploy the software to Google Apps Script platform.

```
yarn deploy
```

7. You can open the uploaded script via the following command.

```
clasp open
```

8. If you'd like to run the script periodially like `cron`, [Time-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers) would help you.

## Settings

### GITHUB_USERNAME: string

An username that will be used for retrieving branch lists of a repository from Github.

### GITHUB_TOKEN: string

A token string tied with the username specified at `GITHUB_USERNAME`, which can be generated at https://github.com/settings/tokens. Prune requires the `repo` scope.

### GITHUB_REPO_OWNER: string

An owner of a repository you want to watch. If you are going to watch https://github.com/nodaguti/prune for example, `nodaguti` is an owner of the repository.

### GITHUB_REPO_NAME: string

A name of a repository you want to watch. If you are going to watch https://github.com/nodaguti/prune for example, `prune` is a name of the repository.

### GITHUB_BRANCH_NAME_FILTER: string

A string respresenting a regular expression to watch only branches that have specific names. If `^feature[/\-]` is specified for instance, only branches whose name starts with `feature-` or `feature/` will be notified.

### GITHUB_BRANCH_AGE_THRESHOLD: number

Branches whose age is younger than or equal to this number of days will not be notified.

### GITHUB_BRANCH_AGE_THRESHOLD_SHOWN_AS_OLD: number

Branches whose age is older than or equal to this number of days will be marked as `old` and shown with a red border.

### SLACK_TOKEN: string

A token for a Slack workspace you want Prune to post notifications.

### SLACK_CHANNEL_NAME: string

A channel name you want Prune to post nofitications.

### SLACK_BOT_NAME: string

A name of this bot that will be shown on your workspace.

## Acknowledgement

This software is based on [gas-clasp-starter](https://github.com/howdy39/gas-clasp-starter).

## License

This software is released under the MIT License, see LICENSE.txt.
