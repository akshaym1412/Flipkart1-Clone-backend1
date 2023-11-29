import { Router } from "express";
import { checkout,paymentVerification } from "../controllers/paymentController.js";
import { Cart, Delete, Login, Product, Products, Signup } from "../controllers/productController.js";

const route=Router();

route.post('/login',Login)
route.post("/signup",Signup)
route.get("/products",Products)
route.get("/product/:id",Product)
route.post("/cart",Cart)

route.delete("/remove/:id",Delete)

route.post("/checkout",checkout);

route.post("/paymentverification",paymentVerification)

export default route;
