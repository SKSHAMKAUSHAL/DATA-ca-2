const express = require('express');
const path = require('path');
const router= express.Router();
const User = require('./schema');



//post
router.post('/save',async()=>{
    const{user,date,duration,caloriesBurned,exercise}=req.body;
    if(!user||!date||!duration){
        return res.status(500).json({ "user field are in complete" :error})
    }
    
    
   try{ 
    
    const users= new User({
        user:user,
        date:date,
        duration:duration,
        caloriesBurned:caloriesBurned,
        exercise:exercise
    })
    const saveUser = await users.save();
    res.json(saveUser)
   }
   catch(error){
    res.status(500).json({'error':error})
}
})


//get

router.get('/get/:id',async()=>{
const uid =req.params.body;
try{
    const user= await User.findById(uid);
    req.json(user)
}
catch(error){
    res.status(500).json({'error':error})
}
})


//put


router.put('/put/:id',async()=>{
    const uid =req.params.body;
    try{
        const user= await User.findByIdAndUpdate(
            uid,
            {$set:req.body},
            {new:true}
        )
       
    }
    catch(error){
        res.status(500).json({'error':error})
    }
    })


//delete
    
router.delete('/delete/:id',async()=>{
    const uid =req.params.body;
    try{
        const user= await User.findByIdAnddelete(uid);
    }
    catch(error){
        res.status(500).json({'error':error})
    }
    })




    module.exports=router;