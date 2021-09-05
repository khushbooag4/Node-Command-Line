const { program } = require('commander');

program
  .version('0.0.1')
  .description('Client Management')
program
 .option('-d, --debug <type>','output debugging' , 'false')
 .option('-s , --small', 'small piza size')
 .option('-p, --pizza-type <type>','pizza type')
 .option('--sauce', 'pizza with sauce')

program.parse(process.argv);

const options = program.opts();
const saucestr = options.sauce ? 'sauce' : 'no-sauce';
if(options.debug) {
    console.log('Pizza Order')
    console.log(`Order Placed: ${options.debug}`);
}
if(options.small) console.log('Small size pizza');
if(options.pizzaType) console.log(`Pizza Type: ${options.pizzaType}`);