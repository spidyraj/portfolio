export const blogs = [
  {
    id: 1,
    slug: "building-multimodal-rag-system",
    title: "Building a Multi-Modal RAG System from Scratch",
    excerpt: "How I architected Query Vault 2.0 — a system that handles documents, audio, and video for contextual AI query answering using FastAPI, Pinecone, and LLaMA.",
    date: "March 15, 2025",
    readTime: "8 min read",
    tag: "AI / ML",
    content: `# Building a Multi-Modal RAG System from Scratch

## Introduction
Retrieval-Augmented Generation (RAG) has transformed how we build AI applications. Instead of relying solely on a model's training data, RAG allows us to inject relevant, up-to-date context directly into the model's prompt at inference time. In Query Vault 2.0, I pushed this further by supporting not just documents, but also audio and video inputs.

## Architecture Overview
The system is divided into three layers:

**1. Ingestion Layer** — accepts PDFs, audio files, and video files. Documents are chunked and embedded using a sentence transformer model. Audio is transcribed using OpenAI's Whisper, then embedded similarly. Video frames are extracted and captioned.

**2. Retrieval Layer** — all embeddings are stored in Pinecone. At query time, the user's question is embedded and the top-k nearest neighbors are fetched using cosine similarity.

**3. Inference Layer** — the retrieved chunks are assembled into a context-rich prompt and passed to LLaMA for final answer generation.

## Tech Stack
- **FastAPI** for the backend API
- **Pinecone** as the vector database for storing and querying embeddings
- **LLaMA** (via Ollama) for local LLM inference
- **Whisper** for audio-to-text transcription
- **PostgreSQL** for user and session management
- **Next.js** for the frontend

## Key Challenges & Solutions

**Challenge: Handling multiple modalities uniformly**
Each modality produces text in a different way — PDFs via text extraction, audio via Whisper transcription, video via frame captioning. The solution was a unified "chunk" format with metadata tags indicating the source modality, allowing the retrieval layer to remain modality-agnostic.

**Challenge: Embedding latency on large files**
Long documents could produce hundreds of chunks. I implemented async batch embedding with a queue system so the user could start querying after partial ingestion while the rest processed in the background.

**Challenge: Relevance quality**
Early tests showed the model sometimes hallucinating when retrieved chunks were only tangentially related. I added a reranking step using a cross-encoder model to filter the top-k chunks before sending them to LLaMA.

## Results
- Successfully handles PDFs up to 50MB, audio up to 30 minutes, and video up to 10 minutes
- Average query response time: ~2.3 seconds on Railway's free tier
- Deployed as a full-stack application with JWT authentication

## Conclusion
Building Query Vault 2.0 deepened my understanding of vector databases, embedding models, and LLM prompt engineering. The biggest takeaway: the quality of your retrieval pipeline matters far more than the size of your language model.`
  },
  {
    id: 2,
    slug: "jwt-authentication-spring-boot",
    title: "JWT Authentication in Spring Boot — A Deep Dive",
    excerpt: "A complete guide to implementing secure JWT-based authentication with access and refresh tokens in a Spring Boot application.",
    date: "February 10, 2025",
    readTime: "6 min read",
    tag: "Backend",
    content: `# JWT Authentication in Spring Boot — A Deep Dive

## Why JWT?
JSON Web Tokens provide a stateless, scalable authentication mechanism. Unlike session-based auth, the server doesn't need to store any session data — the token itself carries all the information needed to verify the user's identity.

## Access vs Refresh Tokens
A common mistake is using a single long-lived JWT. The better pattern:

- **Access Token**: Short-lived (15 minutes). Used for every API call. If stolen, damage is time-limited.
- **Refresh Token**: Long-lived (7 days). Stored securely (HttpOnly cookie or secure storage). Used only to get new access tokens.

## Implementation in Spring Boot

### Dependencies
\`\`\`xml
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-api</artifactId>
  <version>0.11.5</version>
</dependency>
\`\`\`

### JwtService
The core service generates and validates tokens using a secret key loaded from application properties. The token includes the username as subject, issued-at timestamp, and expiration.

### Security Filter Chain
A custom \`JwtAuthFilter\` extends \`OncePerRequestFilter\`. It intercepts every request, extracts the Bearer token from the Authorization header, validates it, and sets the authentication in the SecurityContextHolder.

### Refresh Token Flow
1. Client sends expired access token + refresh token to \`/auth/refresh\`
2. Server validates refresh token from the database
3. Server issues new access token (and optionally rotates refresh token)
4. Client stores new access token

## Security Best Practices
- Never store sensitive data in the JWT payload (it's base64-encoded, not encrypted)
- Use HTTPS always — JWTs can be intercepted over plain HTTP
- Implement token rotation for refresh tokens to detect theft
- Keep access token expiry short (15–30 minutes maximum)
- Store refresh tokens in the database so they can be revoked

## Conclusion
JWT authentication in Spring Boot is well-supported via Spring Security. The key is understanding the access/refresh token pattern and implementing it correctly to balance security with user experience.`
  },
  {
    id: 3,
    slug: "dockerizing-fullstack-app",
    title: "Dockerizing Your Full-Stack Application",
    excerpt: "A step-by-step walkthrough of containerizing a Spring Boot + React app with Docker and Docker Compose for consistent deployments.",
    date: "January 20, 2025",
    readTime: "5 min read",
    tag: "DevOps",
    content: `# Dockerizing Your Full-Stack Application

## Why Docker?
Docker solves the classic "works on my machine" problem. By packaging your application with all its dependencies into a container, you guarantee that it runs identically in development, staging, and production environments.

## The Application Stack
We're containerizing:
- **Spring Boot** backend (Java 17)
- **React** frontend (served via Nginx)
- **MySQL** database

## Writing the Dockerfiles

### Backend Dockerfile (multi-stage build)
\`\`\`dockerfile
# Build stage
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
\`\`\`

The multi-stage build keeps the final image small — only the JRE and the compiled JAR, not Maven or the source code.

### Frontend Dockerfile
\`\`\`dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
\`\`\`

## Docker Compose
\`\`\`yaml
version: '3.8'
services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: fitnessdb
      MYSQL_ROOT_PASSWORD: \${DB_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    depends_on:
      - db
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://db:3306/fitnessdb

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mysql_data:
\`\`\`

## Deployment
With Docker Compose, deploying to any Linux server is:
\`\`\`bash
git clone your-repo
docker compose up -d
\`\`\`

That's it. The entire stack spins up in minutes on any machine with Docker installed.

## Lessons Learned
- Always use multi-stage builds to keep image sizes small
- Never hardcode secrets — use environment variables or Docker secrets
- Use named volumes for database data persistence
- Health checks in Compose ensure services start in the right order

## Conclusion
Docker transformed my deployment workflow. What used to require hours of server configuration now takes minutes. For any backend engineer, containerization is a must-have skill.`
  }
]
