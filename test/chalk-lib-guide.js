/**
 * usage of 'chalk' lib;
 * run 'node test\chalk-lib-guide.js' in terminal to run it!
 *
 * Created by 仲夏 on 2017/5/8.
 */

const chalk = require('chalk')
const log = console.log;

log(chalk.blue('Hello ') + 'Jiangxtx, ' + chalk.red('my friend!!'));

// compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);