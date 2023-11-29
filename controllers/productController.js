import User from "../database/UserSchema.js";
import productsSchema from "../database/ProductsSchema.js";
import cartSchema from "../database/CartSchema.js";

export const Login =async(req,res)=>{
    const {Mobile,Password}=req.body;
    const value=await User.findOne({Mobile:Mobile})
    if(value){
       if(value.Password===Password){
       res.json(value);
       }
       else{
           res.json("Wrong password"); 
       }
    }
    else{
       res.json("User doesn't exit");
    }
   }
   export const Signup= async(req,res)=>{
       const data= await new User(req.body);
       const{Mobile,Email}=data;
       const exist=await User.findOne({Mobile:Mobile}&&{Email:Email})
       if(!exist){
           data.save();
           res.json({
               status:"Sucess",
               data
           })}
       else{
          res.json("User exist");
   }}
   export const Products=async(req,res)=>{
    const data=await productsSchema.find({})
    res.status(200).json(data)
    }
   export const Product=async(req,res)=>{
   const {id}=req.params;
   const data=await productsSchema.findOne({'id':id})
   res.status(200).json(data)
   }


   export const Cart=async(req,res)=>{
       try{
       const data = await new cartSchema(req.body);
       data.save();
       res.status(200).json({data});
       }
       catch(err){
           console.log(err);
       }
       
   }
   
   export const Delete=async(req,res)=>{
       const {id}=req.params;
       const data=await cartSchema.deleteOne({"id":id})
       res.status(200).json(data)
   }
   