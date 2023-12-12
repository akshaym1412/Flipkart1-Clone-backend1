import { Router } from "express";
import { Checkout,PaymentVerification } from "../controllers/paymentController.js";
import { Cart, Delete, Login, Product, Products, Signup } from "../controllers/productController.js";

const route=Router();

route.post('/login',Login)
route.post("/signup",Signup)
route.get("/products",Products)
route.get("/product/:id",Product)
route.post("/cart",Cart)

route.delete("/remove/:id",Delete)

route.post("/checkout",Checkout);

route.post("/paymentverification",PaymentVerification)

export default route;
