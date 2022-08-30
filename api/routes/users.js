const { Router } = require('express');
const router = Router();
const User = require("../models/User");

router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id)
    try {

    } catch(err) {
        res.status(500).json(err)
    }
})