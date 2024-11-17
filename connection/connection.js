const mongoose=require('mongoose')

const conn = async(req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://todo:anijeet3@cluster0.zgvvd.mongodb.net/")
    console.log("Connected to MongoDB")
    } catch (error) {
        res.status(400).json({
            msg:"Not connected "
        })
    }
    
}

conn()