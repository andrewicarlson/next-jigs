import chalk from "chalk";
import * as fs from "fs";

export default (componentName: string, options: { js?: boolean }): void => {
    if (!componentName) {
        console.error(chalk.red('[componentName] is required.'));
        return;
    }

    const newComponentPath = './components/' + componentName;
    const functionName = newComponentPath.split('/').slice(-1)[0];
    const capitalizedFunctionName = functionName.charAt(0).toUpperCase() + functionName.slice(1);
    const fileExtension = options.js ? 'jsx' : 'tsx';

    if (fs.existsSync(newComponentPath)) {
        console.error(chalk.red(`${newComponentPath} already exists.`))
        return;
    }

    try {
        fs.mkdirSync(newComponentPath, {recursive: true});
        const fileContents =
`export default function ${capitalizedFunctionName}() {
    return (
        <div>${capitalizedFunctionName}</div>
    )
}`;
        fs.writeFileSync(`${newComponentPath}/index.${fileExtension}`, fileContents);
        console.log(chalk.green(`${newComponentPath} created.`));
        return;
    } catch (e) {
        console.error(chalk.red(e));
        return;
    }
}