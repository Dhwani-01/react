const {Signup,Login,Addproduct}=require("../Controllers/AuthController");
const router=require("express").Router();
const {userVerification}=require("../Middlewares/AuthMiddleware");

router.post("/login-signup",Signup)
router.post("/login",Login)

router.post("/superuser-addProduct",Addproduct)


router.get("/home",userVerification,(req,res)=>{
    const userData = { email: req.user.email }; 
    res.json(userData);
})


router.get("/superuser-home",userVerification,(req,res)=>{
    const userData = { email: req.user.email }; 
    res.json(userData);
})


module.exports=router;

