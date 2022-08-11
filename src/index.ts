import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {
    // app.log.info(context);
    const {
      pull_request: { title },
      repository: { name },
    } = context.payload;

    let prefix = "[FE]";
    if (name.toLocaleLowerCase().indexOf("backend") > -1) {
      prefix = "[BE]";
    }

    const pr = context.pullRequest({
      title: `${prefix} ${title}`,
    });

    await context.octokit.pulls.update(pr);
  });
};
