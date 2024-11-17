const router = require('express').Router();
const User = require('../models/user');
const List =require('../models/list');


//create
router.post('/addTask',async (req,res)=>{
    try{
    const {title,description,id}=req.body;
    const existinguser=await User.findById(id)
    if(existinguser){
        const list = new List({title,description,user: existinguser});
        await list.save().then(()=>{res.status(200).json({list})})
        existinguser.list.push(list)
        existinguser.save()
    }
}
catch{
    res.status(400).json({message:'Error'})
}
})

//update
router.put('/updateTask/:id',async (req,res)=>{
    try{
    const {title,description,email}=req.body;
    const existinguser=await User.findOne({email});
    if(existinguser){
        const list = await List.findByIdAndUpdate(req.params.id,{title,description});
        list.save().then(()=>{
            res.status(200).json({msg:"updated"})
        })
    }
}
catch{
    res.status(400).json({message:'Error'})
}
})

//Delete
router.delete('/deleteTask/:id',async (req,res)=>{
    try{
    const {id}=req.body;
    const existinguser=await User.findByIdAndUpdate(id,{$pull:{list:req.params.id}});
    if(existinguser){ 
        await List.findByIdAndDelete(req.params.id).then(()=>{
            res.status(200).json({msg:"deleted"})
        })
    }
}
catch{
    res.status(400).json({message:'Error'})
}
}) 
  
//getTask
router.get('/getTask/:id',async (req,res)=>{
    try {
        const list = await List.find({ user: req.params.id }).sort({
          createdAt: -1,
        });
        if (list.length !== 0) {
          res.status(200).json({ list: list });
        }
      } catch (error) {
        console.log(error);
      }
})


module.exports=router;