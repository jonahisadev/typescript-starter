import chalk from "chalk";

const main = async () => {
  console.log("Hello world!");
};

main().catch((err) => {
  console.error(chalk.redBright(err));
});
