import express, { json } from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import route from './Routes/routes.js';
import cors from 'cors';
import defalutdata from './default.js';
import razorpay from "razorpay";

dotenv.config();
const app=express();
export const instance = new razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET,
  });
app.use(json());
app.use(cors);
app.use(express.urlencoded({extended:true}));
app.use("/",route)



app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})
const port=process.env.PORT||7000;
const Username=process.env.DB_Username;
const Password=process.env.DB_Password;
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`);
    connection(Username,Password);
})
defalutdata();