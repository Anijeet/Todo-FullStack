const router = require('express').Router();
const User = require('../models/user');
const bcrypt= require('bcryptjs')

//Signup

router.post('/register',async (req,res)=>{
    try {
        const { email, username, password} = req.body;
        const hashedpassword=bcrypt.hashSync(password)
        const user = new User({email, username, password: hashedpassword})
        await user.save().then(()=>
            res.status(200).json({message: "Sign Up Successfully"})
        )
    } catch (error) {
        res.status(200).json({message: "User already exists"})      
    }
});

//Signin
router.post('/signin',async (req,res)=>{
    try {
       const user =await User.findOne({email: req.body.email});
       if(!user){
        res.status(200).json({msg:"Please SignUp first"})
       }
       const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)

       if(!isPasswordCorrect){
        res.status(200).json({msg: "Invalid Password"})
       }

       const{password,...others}=user._doc;
       res.status(200).json({user:others})

    } catch (error) {
        res.status(200).json({msg: "User already exists"})      
    }
});

module.exports = router