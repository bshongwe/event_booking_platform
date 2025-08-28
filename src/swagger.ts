import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import YAML from "yaml";
import { Express } from "express";
import path from "path";

const file = readFileSync(path.join(__dirname, "openapi/openapi.yaml"), "utf8");
const swaggerDocument = YAML.parse(file);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
    explorer: true
  }));
}
