#!/usr/bin/env node

const { program } = require('commander');
const {addCustomer , findCustomer , removeCustomer , updateCustomer , listCustomer} = require('./index');
const { prompt } = require('inquirer');


program
  .version('0.0.1')
  .description('Client Management')

//  Customer Questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Enter Customer First Name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Enter Customer Last Name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter Customer Phone Number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Customer Email Address'
    }
]

//Commands
// program
//   .command('add <firstname> <lastname> <phone> <email>')
//   .alias('a') //short command
//   .action((fisrtname,lastname, phone, email) => {
//       addCustomer({fisrtname, lastname , phone , email});

//   });

program 
 .command('add')
 .alias('a')
 .description('Add a Customer')
 .action(() => {
     prompt(questions).then(answers => addCustomer(answers));
});


program
 .command('find <name>')
 .alias('f')
 .description('Find a customer')
 .action(name => findCustomer(name));

program
 .command('update <_id>')
 .alias('u')
 .description('Update a Customer')
 .action(_id =>{
     prompt(questions).then(answers => updateCustomer(_id,answers));
 });

program
 .command('remove <_id>')
 .alias('r')
 .description('Remove a Customer')
 .action(_id => removeCustomer(_id));

program
 .command('list')
 .alias('l')
 .action(listCustomer);

program.parse(process.argv);