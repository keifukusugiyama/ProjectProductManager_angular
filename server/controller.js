//use models ProductSchema
const Product = require("./models");

//export to routes.js
module.exports = {

    //get /products 
    all: (req, res) => {
        //retrieve all the Products
        Product.find({})
            //if successful, respond with json file of result
            .then(results => res.json(results))
            //if there's error, respond with json file of error
            .catch(err => res.json(err))
    },

    //get /products/id 
    perId: (req, res) =>{
        //find Product with id provided on the route
        Product.findById(req.params.id)
        //if successful, respond with json file of result
        .then(result => res.json( result))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //post /products 
    new:(req, res)=>{
        //create new Product with returned json file on body
        Product.create(req.body)
        //if successful, respond with json file with newly created Product
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //put /products/:id 
    update:(req, res)=>{
        //find Product by id given on the route, update with json file on body
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        //if successful, respond with json file with the updating Product
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    },

    //delete /products/:id 
    delete:(req, res)=>{
        //find Product by id given on the route, delete it
        Product.findByIdAndDelete(req.params.id)
        //if successful, respond with json file with the deleted Product
        .then(results => res.json(results))
        //if there's error, respond with json file of error
        .catch(err => res.json(err))
    }

}