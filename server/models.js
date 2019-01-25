//use mongoose 
var mongoose = require("mongoose");
//connect mongoose 
mongoose.connect('mongodb://localhost:27017/projectproductmanagementdb', (err)=>{
    //if there's error, log
    if(err){
        console.log(err)
    }
});

var ProductSchema = new mongoose.Schema({
    title: {type:String, required:true, minlength:[4, "Title: Minimum 4 characters needed"]},
    price: {type: Number, required:[true, "Price is required"]},
    imageUrl: {type: String}
}, {timestamps:true})

//export the TaskSchema to controller.js
module.exports = mongoose.model('Product', ProductSchema);
