export const projects = [
  {
    id: 1,
    name: "Query Vault 2.0",
    subtitle: "Multi-Modal AI System",
    description: "Architected a multi-modal RAG system handling document, audio, and video inputs for contextual query answering. Built end-to-end pipeline for ingestion, embedding generation, and semantic retrieval using Pinecone.",
    tech: ["FastAPI", "PostgreSQL", "Pinecone", "Next.js", "LLaMA", "Whisper"],
    github: "https://github.com/spidyraj",
    demo: null,
    image: "/images/project-queryvault.png",
    highlight: "Multi-Modal RAG · Deployed on Railway"
  },
  {
    id: 2,
    name: "Task Management System",
    subtitle: "Full-Stack Application",
    description: "Designed RESTful backend with layered architecture and optimized PostgreSQL queries. Implemented secure JWT authentication with access/refresh token mechanism. Improved API response time by 25% through query optimization.",
    tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    github: "https://github.com/spidyraj",
    demo: null,
    image: "/images/project-taskmanager.png",
    highlight: "25% faster API response"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    subtitle: "Backend-Centric Full-Stack",
    description: "Developed REST APIs using Spring Boot with layered architecture. Implemented authentication using Spring Security and JWT. Designed backend services for workouts, calorie tracking, and user activity monitoring. Containerized with Docker.",
    tech: ["Spring Boot", "MySQL", "React", "Docker", "JWT"],
    github: "https://github.com/spidyraj",
    demo: null,
    image: "/images/project-fitnesstracker.png",
    highlight: "Dockerized · Spring Security"
  }
]
