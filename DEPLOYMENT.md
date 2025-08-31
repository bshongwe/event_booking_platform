# Production Deployment Guide

This guide describes how to deploy the Event Booking Platform API in a production environment.

## 1. Build the Project
Compile TypeScript to JavaScript:
```bash
npm run build
```

## 2. Prepare Environment Variables

Create a `.env` file with production settings (database credentials, API keys, etc.).

### Secrets Management in Production
- **Never commit your `.env` file to source control.**
- Use GitHub Secrets, environment variables in your CI/CD pipeline, or a secrets manager (AWS Secrets Manager, Azure Key Vault, etc.) to securely inject secrets at runtime.
- For Docker, use `--env-file` or environment variables set by your orchestration platform.

## 3. Docker Deployment
### Build Docker Image
```bash
docker build -t event-booking-platform .
```

### Run Docker Container
```bash
docker run -d -p 80:3000 --env-file .env event-booking-platform
```

### Using Docker Compose
For multi-service setups:
```bash
docker-compose up -d
```

## 4. Database Setup
- Ensure your production database is accessible.
- Run seed scripts if needed.

## 5. Reverse Proxy (Optional)
Use Nginx or Apache to route traffic and handle SSL:
- Configure HTTPS
- Forward requests to the API container

## 6. Monitoring & Scaling
- Use PM2, Docker Swarm, or Kubernetes for process management and scaling.
- Set up logging and monitoring.

## 7. Security Best Practices
- Enable HTTPS
- Set up firewalls and access controls
- Regularly update dependencies

## Performance Improvements
- Gzip compression is enabled for all API responses
- Database connection pooling is configured (max 10, min 2)
- Query logging is enabled for analysis
- Database indexes added for faster queries on key columns

## Example Docker Compose
```yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "80:3000"
    env_file:
      - .env
    depends_on:
      - db
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: eventdb
    volumes:
      - db_data:/var/lib/postgresql/data
volumes:
  db_data:
```

## Cloud Deployment
For AWS, Azure, or DigitalOcean, use their respective container services and follow similar steps.

---
For questions or platform-specific instructions, see the README or contact the maintainer.
