export const projects = [
  {
    id: 1,
    name: "QueryVault",
    subtitle: "Multi-Modal RAG AI Chatbot",
    problem: "Standard chatbots lacked the ability to intuitively process vast multi-modal enterprise data without exposing PII. Users needed a robust, zero-knowledge RAG architecture for processing complex documents and audio.",
    architecture: "Next.js Frontend → FastAPI Microservice → LangChain → Pinecone Serverless → Llama 3 70B (via Groq) & Whisper-large-v3 → Supabase (encrypted logs).",
    tech: ["Next.js", "FastAPI", "Pinecone", "Llama 3 70B", "Supabase", "TailwindCSS"],
    decisions: [
      "Inference Acceleration: Shifted the heavy LLM lifting to Groq LPU engines, resulting in near-instantaneous responses with Llama 3 70B.",
      "Deep Privacy measures: Implemented AES Symmetric Encryption (Fernet) for all user chat logs, ensuring zero-knowledge privacy before hitting the DB.",
      "Audio Intelligence: Utilized Whisper-large-v3 via Groq for ultra-fast audio-to-text combined with gTTS for responsive audio generation."
    ],
    challenges: "Preserving meaning during dense document extraction. Solved using custom parsers with a Recursive Character Text Splitter to preserve contextual overlap prior to Pinecone embedding.",
    results: "Achieved ultra-low latency response cycles locally and deployed securely with encrypted databases and Vercel edge optimizations.",
    github: "https://github.com/spidyraj/multimodal_chatbot_multiluinguial",
    demo: "https://multimodal-chatbot-multiluinguial.vercel.app/",
    image: "/images/chatbot.png",
    highlight: "Multi-Modal RAG · AES Encryption"
  },
  {
    id: 2,
    name: "Task Management System",
    subtitle: "Enterprise CRUD Backend",
    problem: "Inefficient state synchronization between clients and databases causing race conditions.",
    architecture: "REST API → Spring Boot layered architecture (Controllers -> Services -> Repositories) → PostgreSQL Database.",
    tech: ["Spring Boot", "React", "PostgreSQL", "JWT"],
    decisions: [
      "Layered Architecture: Separated business logic from data access for modularity and testing.",
      "Secure Auth: Implemented JWT with stateless access/refresh token rotation to prevent token hijacking.",
      "DB Indexing: Applied composite indexing on frequently queried multi-tenant tables."
    ],
    challenges: "Identifying N+1 query problems in JPA/Hibernate relationships. Refactored queries to use JOIN FETCH for eager loading critical paths.",
    results: "Improved API response times by 25%. Scaled smoothly to handle 10k+ concurrent simulated connections.",
    github: "https://github.com/spidyraj/task_management_trial",
    demo: null,
    image: "/images/task_management.png",
    highlight: "25% faster API response"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    subtitle: "Backend-Centric Full-Stack Application",
    problem: "Real-time calorie and workout tracking required a scalable, secure backend capable of handling concurrent users with role-based access and persistent data isolation.",
    architecture: "React Frontend (Vercel) → Spring Boot REST API → Spring Security (JWT) → PostgreSQL Database (Railway) · Dockerized for consistent deployment.",
    tech: ["Spring Boot", "PostgreSQL", "React", "Docker", "JWT", "Railway"],
    decisions: [
      "Dockerization: Standardized the development and deployment environment, ensuring no 'works on my machine' errors across all stages.",
      "Spring Security: Implemented fine-grained Role-Based Access Control (RBAC) with JWT access and refresh token mechanisms.",
      "Layered Architecture: Separated concerns via Controller → Service → Repository pattern for maintainability and testability."
    ],
    challenges: "Configuring container networking for seamless DB-API communication and managing CORS between the Vercel frontend and Railway backend. Solved using Docker bridge networks and Spring CORS configuration.",
    results: "Full-stack production deployment with stable API performance, workout tracking, calorie management, activity monitoring, and an AI coaching interface.",
    github: "https://github.com/spidyraj/Fitness-Tracker-Full-Stack-Application",
    demo: "https://fitness-tracker-full-stack-applicat.vercel.app",
    image: "/images/project-fitnesstracker.png",
    highlight: "Live Deployed · Spring Security · Docker"
  }
]
