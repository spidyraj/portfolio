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
    results: "Processed multi-modal queries in <800ms, securely managing concurrent user sessions via Vercel edge functions and Pinecone Serverless vector storage.",
    github: "https://github.com/spidyraj/multimodal_chatbot_multiluinguial",
    demo: "https://multimodal-chatbot-multiluinguial.vercel.app/",
    image: "/images/chatbot.png",
    highlight: "Multi-Modal RAG · AES Encryption"
  },
  {
    id: 2,
    name: "Task Management System",
    subtitle: "Enterprise Full-Stack Application",
    problem: "Needed a scalable, secure task management system with advanced filtering, pagination, and real-time state synchronization.",
    architecture: "Next.js Frontend → Express.js API Layer → Prisma ORM → PostgreSQL (Supabase) Database.",
    tech: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "TailwindCSS", "JWT", "Vercel"],
    decisions: [
      "Layered Architecture: Clean separation of Next.js SPA frontend and REST API backend.",
      "Secure Auth: Implemented JWT with 15min access & 7day refresh tokens for seamless sessions.",
      "Optimistic UI: Enhanced UX with server state management and optimistic updates."
    ],
    challenges: "Handling complex state management with pagination and advanced filtering on the client side while maintaining sync with the backend. Solved using optimized React hooks.",
    results: "Engineered scalable REST APIs managing 10,000+ mock records with <50ms query response times via Prisma & PostgreSQL indexing.",
    github: "https://github.com/spidyraj/task_management_trial",
    demo: "https://task-management-trial-peach.vercel.app/",
    image: "/images/task_management.png",
    highlight: "Next.js & Express.js · JWT Auth"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    subtitle: "AI powered full stack application",
    problem: "Real-time calorie and workout tracking required a scalable, secure backend capable of handling concurrent users with role-based access and persistent data isolation.",
    architecture: "React Frontend (Vercel) → Spring Boot REST API → Spring Security (JWT) → PostgreSQL Database (Railway) · Dockerized for consistent deployment.",
    tech: ["Spring Boot", "PostgreSQL", "React", "Docker", "JWT", "Railway", "Vercel"],
    decisions: [
      "Dockerization: Standardized the development and deployment environment, ensuring no 'works on my machine' errors across all stages.",
      "Spring Security: Implemented fine-grained Role-Based Access Control (RBAC) with JWT access and refresh token mechanisms.",
      "Layered Architecture: Separated concerns via Controller → Service → Repository pattern for maintainability and testability."
    ],
    challenges: "Configuring container networking for seamless DB-API communication and managing CORS between the Vercel frontend and Railway backend. Solved using Docker bridge networks and Spring CORS configuration.",
    results: "Architected a high-throughput Spring Boot microservice capable of securely handling concurrent user data isolation via robust JWT Role-Based Access Control.",
    github: "https://github.com/spidyraj/Fitness-Tracker-Full-Stack-Application",
    demo: "https://fitness-tracker-full-stack-applicat.vercel.app",
    image: "/images/project-fitnesstracker.png",
    highlight: "Live Deployed · Spring Security · Docker"
  }
]
