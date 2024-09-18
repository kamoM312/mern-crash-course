import express from "express";

import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

//put - update all fields
//patch - update some fields
router.put("/:id", updateProduct);

// :id is a dynamic value, async is a controller function
router.delete("/:id", deleteProduct);


export default router;