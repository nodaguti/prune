declare const process: any;

const POST_URL: string = 'https://slack.com/api/chat.postMessage';
const TOKEN: string = process.env.SLACK_TOKEN;
const CHANNEL: string = process.env.SLACK_CHANNEL_NAME;
const USERNAME: string = process.env.SLACK_BOT_NAME;

export function post(attachments: object): void {
  // @ts-ignore
  UrlFetchApp.fetch(POST_URL, {
    method: 'post',
    payload: {
      token: TOKEN,
      channel: CHANNEL,
      username: USERNAME,
      attachments: JSON.stringify(attachments),
    },
  });
}
