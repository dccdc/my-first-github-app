import { Probot } from "probot";

export = (app: Probot) => {
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue! P:",
    });
    await context.octokit.issues.createComment(issueComment);
  });

  // app.on("issue_comment.created", async (context) => {
  //   const issueComment = context.issue({
  //     body: "Welcome for create a comment!",
  //   });
  //   await context.octokit.issues.createComment(issueComment);
  // });

  // app.on("pull_request", async (context) => {
  //   const pr = context.pullRequest({
  //     title: "[FE] hello world",
  //     body: "test content 1",
  //   });
  //   await context.octokit.pulls.update(pr);
  // });

  app.on("pull_request.opened", async (context) => {
    app.log.info(context);
    app.log.info("666");
    const pr = context.pullRequest({
      title: "[FE] hello world",
      body: "test content 2",
    });
    await context.octokit.pulls.update(pr);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
