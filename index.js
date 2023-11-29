import express, { json } from 'express';
import dotenv from 'dotenv';
import route from './Routes/routes.js';
import cors from 'cors';
import "./database/db.js"
import razorpay from "razorpay";
dotenv.config();
const app=express();
export const instance = new razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET,
  });
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/api",route)


app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})

const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`);
})

