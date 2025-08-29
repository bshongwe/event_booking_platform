
import swaggerUi from "swagger-ui-express";
import { readFileSync, existsSync } from "fs";
import YAML from "yaml";
import { Express } from "express";
import path from "path";

let openapiPath = path.join(__dirname, "openapi/openapi.yaml");
if (!existsSync(openapiPath)) {
  // Fallback to src for development
  openapiPath = path.join(__dirname, "../src/openapi/openapi.yaml");
}
const file = readFileSync(openapiPath, "utf8");
const swaggerDocument = YAML.parse(file);

export function setupSwagger(app: Express) {
  // Debug: log loaded OpenAPI paths
  if (swaggerDocument && swaggerDocument.paths) {
    console.log("Swagger loaded paths:", Object.keys(swaggerDocument.paths));
  } else {
    console.error("Swagger document missing or malformed:", swaggerDocument);
  }

  app.use("/api-docs", swaggerUi.serve, (req: any, res: any, next: any) => {
    try {
      swaggerUi.setup(swaggerDocument, { explorer: true })(req, res, next);
    } catch (err) {
      console.error("Swagger UI error:", err);
      res.status(500).send("Swagger UI failed to load spec.");
    }
  });
}
