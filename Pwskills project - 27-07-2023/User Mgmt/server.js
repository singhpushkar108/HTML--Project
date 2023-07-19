//server.js
const express= require('express');
const User=require('./userModel2.js');
const mongoose=require('mongoose');
const app= express();
const port= process.env.port || 3000;


app.use(express.json());

mongoose.connect('mongodb+srv://Pushkar:qwerty1234@testdb.4baufmb.mongodb.net/')
.then(()=>{
    
    app.listen(port,()=>{
    console.log(`Server running at port: ${port}. Connected to database`);
    });
})
.catch((error)=>{
    console.log("something went wrong . Unable to connect to database");
})


// GET route to find a single user by their email
app.get('/getuser',async(req,res)=>{
    try{
        const userData = await User.findOne({ email: req.body.email });
        if (userData){
            res.status(200).json({
                status:200,
                userData
            });
        }
        else{
            throw new Error('User Not Found');
                
            }
        }
        catch(Error){
        res.status(404).json({error: Error.message});
    }
    
});


// POST route to register a new user
app.post('/register',async(req,res)=>{
    try{
        const userData = await User.findOne({ email: req.body.email });
        if (!userData){
            const user= await User.create(req.body);
            res.status(201).json({
                status:200,
                msg:"User Registered Successfully",
                user
            });
        }
        else{
            
            throw new Error('User already exists');
                
            } 
    }
    catch(Error){
        res.status(400).json({err: Error.message});
    }
    
});

// DELETE route to delete a user by their email
app.delete('/deluser',async(req,res)=>{
    //deleting a user
    try{
        const userData = await User.findOne({ email: req.body.email });
        if (userData){
            await User.deleteOne({ email: req.body.email });
            res.status(200).json({
                status:200,
                msg:"User Deleted Successfully"
            });
        }
        else{
            throw new Error('User Not Found');
            }
        }
        catch(Error){
        res.status(404).json({error:Error.message});
    }
    
});

// PATCH route to update a user's data by their email
app.patch('/update',async(req,res)=>{
    try{
        const userData=await User.findOne({email:req.body.email});
        if(userData){
            // Updating the user data with the new information from req.body
             if (req.body.name) {
                userData.name = req.body.name;
              }
            
            //save the updated user data  to the database
            await userData.save();
            
            res.status(200).json({
                status:200,
                msg:'User data updated successfully',
                updatedUser: userData
            });
        }
        else{
            throw new Error('User not found');
        }
    }
    catch(error){
        res.status(404).json({error:error.message});
    }
    
    
    
});


// Adding the middleware to the route where we handle login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        if (!email || !password) {
             res.status(400).json({ error: 'Email and password are mandatory fields for login.' });
            }
        
        else if(email && password){
            const userData = await User.findOne({email});
            if (userData && password===userData.password){
                
                res.status(200).json({
                    status:200,
                    msg:"User Login successfully",
                    userData
                });
            }
            else{
                throw new Error('Invalid email or password')
            }
        }
    }
    catch(Error){
        res.status(404).json({error:Error.message });
    }
});
