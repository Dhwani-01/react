const User=require("../Models/UserModel");
const Product=require("../Models/ProductModel");
const {createSecretToken}=require("../util/SecretToken");
const bcrypt=require("bcryptjs");


module.exports.Signup=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const user=await User.create({email,password});
        const token=createSecretToken(user._id,user.superuser);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    } 
    catch (error) {
      console.error(error);
    }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id,user.superuser);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true ,superuser:user.superuser,user});
     next()
  } catch (error) {
    console.error(error);
  }
}


module.exports.Addproduct=async(req,res,next)=>{
  try{
      const {Name,Amount}=req.body;
      const existingProduct=await Product.findOne({Name});
      if(existingProduct){
          return res.json({message:"Product already exists"});
      }
      const product=await Product.create({Name,Amount});
      res
      .status(201)
      .json({ message: "Product added successfully", success: true, product });
    next();
  } 
  catch (error) {
    console.error(error);
  }
};


