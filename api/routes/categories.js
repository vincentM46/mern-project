// const { Router } = require('express');
// const router = Router();
// const Category = require('../models/Category');

// router.post("/api", async (req, res) => {
//     const newCategory = new Category(req.body);
//     try {
//       const savedCategory = await newCategory.save();
//       res.status(200).json(savedCategory);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   router.get("/api", async (req, res) => {
//       try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     });
  
//   module.exports = router;