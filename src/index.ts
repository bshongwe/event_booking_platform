import "reflect-metadata";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import { body, validationResult } from "express-validator";
import { AppDataSource } from "./config/data-source";
import * as dotenv from "dotenv";
import { setupSwagger } from "./swagger";

dotenv.config();
const app = express();

import compression from "compression";
app.use(compression());
app.use(express.json());

// Security: Set HTTP headers
app.use(helmet());

// Security: Configure CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Example input validation middleware (expand per route as needed)
app.use((req, res, next) => {
  // This is a placeholder for validation logic
  // Use express-validator in your route handlers for real validation
  next();
});

setupSwagger(app);

import userRoutes from "./routes/userRoutes";
import venueRoutes from "./routes/venueRoutes";
import eventRoutes from "./routes/eventRoutes";
import bookingRoutes from "./routes/bookingRoutes";
import spaceRoutes from "./routes/spaceRoutes";
import roleRoutes from "./routes/roleRoutes";

app.use("/api/users", userRoutes);
app.use("/api/venues", venueRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/spaces", spaceRoutes);
app.use("/api/roles", roleRoutes);

AppDataSource.initialize().then(() => {
  console.log("Database connected");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.log(error));