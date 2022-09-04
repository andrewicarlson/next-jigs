import { program } from "commander";
import makePage from "./utils/makePage/index.js";
import makeComponent from "./utils/makeComponent/index.js";

program.description("Quickly scaffold your Next app");
program.name('next-jig');
program.usage("<command>");
program.addHelpCommand(true);

program
    .command("make:page")
    .argument("[pageName]", "Name of the page you'd like to create.")
    .option("--api")
    .option('--js')
    .description("Scaffold a new page in /pages or /src/pages.")
    .action(makePage);

program
    .command("make:component")
    .argument("[component]", "Name of the component you'd like to create.")
    .option('--js')
    .description("Scaffold a new component in /components.")
    .action(makeComponent);

program.parse(process.argv);