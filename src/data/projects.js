export const projects = [
  {
    id: 1,
    name: "Query Vault 2.0",
    subtitle: "Multi-Modal AI System",
    problem: "Traditional semantic search struggles with varied media sources (audio, video, documents). Users needed a unified system to query context accurately across multi-modal data.",
    architecture: "User Request → FastAPI → Whisper (Speech-to-Text) → LLaMA (Summarization) → Embedding Generation → Pinecone (Vector Retrieval) → Contextual LLM Response.",
    tech: ["FastAPI", "PostgreSQL", "Pinecone", "Next.js", "LLaMA", "Whisper"],
    decisions: [
      "Why Pinecone: Chosen for its sub-ms retrieval speeds at high vector dimensions, crucial for real-time RAG.",
      "Embeddings: Leveraged SentenceTransformers for fast textual embeddings and stored metadata alongside vectors for filtered search.",
      "FastAPI Concurrency: Used AsyncIO to handle simultaneous model inference limits without blocking the main event loop.",
      "LLaMA + Whisper Integration: Whisper transcribes audio chunks into text streams, which are then passed to LLaMA for high-level chunk contextualization before embedding."
    ],
    challenges: "Handling large media inputs without API timeouts. Solved by implementing background workers and asynchronous processing pipelines.",
    results: "Reduced multi-modal query resolution time by 40% natively. Successfully deployed highly concurrent architecture on Railway.",
    github: "https://github.com/spidyraj/multimodal_chatbot_multiluinguial",
    demo: null,
    image: "/images/project-queryvault.png",
    highlight: "Multi-Modal RAG · Deployed on Railway"
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
    subtitle: "Backend-Centric Service",
    problem: "Real-time calorie and workout tracking required a scalable microservices-like isolation to handle burst traffic.",
    architecture: "React Frontend → Spring Boot REST API → Spring Security Filters → Dockerized MySQL Container.",
    tech: ["Spring Boot", "MySQL", "React", "Docker", "JWT"],
    decisions: [
      "Dockerization: Standardized the development and deployment environment, ensuring no 'works on my machine' errors.",
      "Spring Security: Implemented fine-grained Role-Based Access Control (RBAC) endpoints."
    ],
    challenges: "Configuring container networks for seamless DB-API communication. Solved by defining isolated Docker bridge networks.",
    results: "Robust internal isolation and zero-downtime deployment capabilities.",
    github: "https://github.com/spidyraj/Fitness-Tracker-Full-Stack-Application",
    demo: null,
    image: "/images/project-fitnesstracker.png",
    highlight: "Dockerized · Spring Security"
  }
]
