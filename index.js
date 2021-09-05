const mongoose = require('mongoose');
const customer = require('./models/customer');
const {db} = require('./models/customer');

//Map global promise
mongoose.Promise = global.Promise;
//Connection to Database
const connect = async() => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/CommandLine")
        // console.log("MongoDB connected");

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
connect();

//Import Model
const Customer = require('./models/customer');

//Add Customer
const addCustomer = (customer) =>{
   Customer.create(customer).then(customer => {
       console.info("New Customer Added");
       db.close(); //If not it will hang
   });
};

//Find Customer
const findCustomer = (name) => {
  //Make case insensitive
  const search = new RegExp(name , 'i');
  Customer.find({$or: [{firstname: search},{lastname: search}]})
  .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
      });
};

//Update Customer 
const updateCustomer = (_id, customer) =>{
    Customer.updateOne({_id},customer)
     .then(customer => {
         console.log('Customer Updated');
         db.close();
     })
}
const removeCustomer = (_id) =>{
    Customer.remove({_id})
     .then(customer => {
         console.log('Customer Removed');
         db.close();
     })
}

//List Customers 
const listCustomer = () => {
    Customer.find()
     .then(customer => {
         console.info(customer);
         console.info(`${customer.length} customers`);
         db.close();
     })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}