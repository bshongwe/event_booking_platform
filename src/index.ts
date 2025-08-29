import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/data-source";
import * as dotenv from "dotenv";
import { setupSwagger } from "./swagger";

dotenv.config();
const app = express();
app.use(express.json());

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