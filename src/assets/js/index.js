import devLog from "lib/js/devLogger";

devLog.logInProduction('Run in "production" environment');
devLog.notify("Welcome to F5-studio start theme!");
devLog.warning("Using jQuery is dagger for your brain!");
devLog.error("Change git user name, user email, and repo!");
devLog.handler(() => {
    console.log('%cThis notifications show you who use DevLogger))', "font-size: 18px;font-weight: bold");
});
