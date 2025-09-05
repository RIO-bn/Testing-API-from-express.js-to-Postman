import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
//to start npm run dev
// manage the postman
// open the mongodb in collevtion cluster 0

app.use(express.json()); //to accept json data

app.use("/api/products",productRoutes)
//postman

console.log(process.env.MONGO_URI);
app.listen(5000, () => {
  connectDB();
  console.log("Server is running at http://localhost:"+ PORT);
});

// mqpYgjpI04mGhjVh
