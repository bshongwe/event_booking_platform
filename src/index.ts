import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/data-source";
import * as dotenv from "dotenv";
import { setupSwagger } from "./swagger";

dotenv.config();
const app = express();
app.use(express.json());

setupSwagger(app);

// TODO: add routes here
// app.use("/api/users", userRoutes);
// app.use("/api/venues", venueRoutes);

AppDataSource.initialize().then(() => {
  console.log("Database connected");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(error => console.log(error));