const express = require("express");
const router = express.Router();
const Dashboard = require("../models/Dashboard");

// CREATE
router.post("/", async (req, res) => {
  const newItem = new Dashboard(req.body);
  const saved = await newItem.save();
  res.json(saved);
});
router.put("/:id", async (req, res) => {
  const updated = await Dashboard.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// READ
router.get("/", async (req, res) => {
  const items = await Dashboard.find();
  res.json(items);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Dashboard.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
