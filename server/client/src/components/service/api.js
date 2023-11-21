import Axios from 'axios';

export const authenticateSignup=async(details)=>{
 try{
    return await Axios.post(" /signup",details)
}
catch(err){
  console.log("Error while calling signup api",err)
}}

export const authenticateLogin=async(details)=>{
    try{
       return await Axios.post(" /login",details)
   }
   catch(err){
     console.log("Error while calling signup api",err)
   }}

export const products=async()=>{
 const response = await Axios.get(" /products")
 return response.data;
}

export const addcart=async(data)=>{
  return await Axios.post(" /cart",data);
}