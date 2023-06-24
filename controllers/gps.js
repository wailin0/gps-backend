const express = require('express');
const router = express.Router();
const GPS = require("../models/GPS")

router.get("/", async (req, res)  => {
  try {
    const response = await GPS.findAll()
    return res.json(response)
  }
  catch (e) {
    return res.status(500).json(e)
  }
})


router.post("/", async (req, res)  => {
  try {
    const response = await GPS.create(req.body)
    return res.status(201).json(response)
  }
  catch (e) {
    return res.status(500).json(e)
  }
})




module.exports = router;
