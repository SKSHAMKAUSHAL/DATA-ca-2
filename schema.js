const mongoose = require('mongoose');

const Workout= new mongoose.Schema({
user:{
    type:String,
    require:true
},
date:{
    type:Number,
    require:true
},
duration:{
type:Number,
require:true
},
caloriesBurned:{
    type:Number
},
exercise:[]
})


//2 
const opexercise = new mongoose.Schema({
name:{
    type:String,
    require:true
},
reps:{
    type:Number    
},
sets:{
type:Number
},
weight:{
    type:Number
}

})




module.exports=mongoose.model('user',Workout);
module.exports=mongoose.model('op',opexercise);