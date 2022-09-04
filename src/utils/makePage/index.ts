import chalk from "chalk";
import * as fs from "fs";

export default (pageName: string, options: { js?: boolean, api?: boolean }): void => {
    if (!pageName) {
        console.error(chalk.red('[pageName] is required.'));
        return;
    }

    const pagesPathPostfix = `/pages${options.api ? '/api' : ''}`;
    const pagesPath = fs.existsSync('./pages') ? '.' + pagesPathPostfix : './src' + pagesPathPostfix;

    if (!fs.existsSync(pagesPath)) {
        console.error(chalk.red(`Pages directory not found. Run this command from the root of your project and ensure ./pages/api or ./src/pages/api exists.`));
        return;
    }

    const newPagePath = pagesPath + '/' + pageName;
    const functionName = newPagePath.split('/').slice(-1)[0];
    const capitalizedFunctionName = functionName.charAt(0).toUpperCase() + functionName.slice(1);
    const fileExtension = options.js ? 'js' : 'ts';

    if (fs.existsSync(newPagePath)) {
        console.error(chalk.red(`${newPagePath} already exists.`))
        return;
    }

    try {
        fs.mkdirSync(newPagePath, {recursive: true});
        const fileContents = options.api ?
`export default function handler(req, res) {
    res.status(200);
}` :
`export default function ${capitalizedFunctionName}() {
    return (
        <div>${capitalizedFunctionName}</div>
    )
}`;
        fs.writeFileSync(`${newPagePath}/index.${fileExtension}${options.api ? '' : 'x'}`, fileContents);
        console.log(chalk.green(`${newPagePath} created.`));
        return;
    } catch (e) {
        console.error(chalk.red(e));
        return;
    }
}