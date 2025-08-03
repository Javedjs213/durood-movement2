const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");
const Counter = require("../models/Counter");
// const redis = require("redis");

// const redisClient = redis.createClient({ url: process.env.REDIS_URL });
// redisClient.connect();

// Submit Durood
router.post("/submit", async (req, res) => {
  try {
    let { name, country, duroodCount } = req.body;

    name = name?.trim();      
    country = country?.trim();

    const newSubmission = new Submission({ name, country, duroodCount });
    await newSubmission.save();

    // Update MongoDB Counter
    const counter = await Counter.findOneAndUpdate(
      { name: "total" },
      { $inc: { count: duroodCount } },
      { new: true, upsert: true }
    );

    // Update Redis Cache
    // await redisClient.set("durood_total", counter.count.toString());

    res.status(201).json({ status: true, info: "Durood submitted successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ status: false, error: "Failed to submit Durood" });
  }
});

// Get Total Durood Count
router.get("/total", async (req, res) => {
  try {
    // const cached = await redisClient.get("durood_total");
    // if (cached) {
    //   return res.json({ total: parseInt(cached) });
    // }

    const counter = await Counter.findOne({ name: "total" });
    const total = counter?.count || 0;

    // await redisClient.set("durood_total", total.toString());

    res.status(200).json({status: true,  info: total });

  } catch (err) {
    res.status(500).json({status: false, error: "Failed to get total Durood" });
  }
});



// Get Recent Submissions
router.get("/recent", async (req, res) => {
  try {
    
    const recent = await Submission.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select("name country createdAt");

    res.status(200).json({status: true, info: recent});
  } catch (err) {
    res.status(500).json({status: false, error: "Failed to fetch recent submissions" });
  }
});

module.exports = router;
