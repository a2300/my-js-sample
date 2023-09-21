import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

// Health check endpoint
router.get('/', (req , res) => {
    // Check if the MongoDB connection is established
    if (mongoose.connection.readyState === 1) {
      res.status(200).json({ status: 'OK', message: 'Application is healthy' });
    } else {
      res.status(500).json({ status: 'Error', message: 'MongoDB connection is not established' });
    }
  });

export const healthRouter = router;