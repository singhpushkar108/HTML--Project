//model.js
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Name is required'],
            maxLength:[30,'Name exceeded the max length of 30 characters']
        },
        
        email:{
            type:String,
            required:[true,'email is required'],
            maxLength:[60,'Invalid email. Email exceeded the max length of 60 characters'],
            unique: [true,'User already exists'],
             match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,'Invalid email format'],
        },
        
        password:{
            type:String,
            required:[true,'password is required'],
            minLength:[8,'Invalid password. Password must have length equal to or greater than 8 characters']
        }
        
    });




module.exports=mongoose.model('User',userSchema);