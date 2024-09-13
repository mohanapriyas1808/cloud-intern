Student Information Management System

This project is a full-stack web application that allows users to collect and store student information, such as name, subject, and marks, in a MySQL database. 
The frontend is built using React, the backend using Express.js, and MySQL serves as the database. 
The application is containerized using Docker for easy deployment and management.

/your-project-root
│
├── /backend              # Contains backend Node.js app
│   ├── Dockerfile        # Dockerfile for backend
│   └── server.js         # Your Node.js server
│
├── /frontend             # Contains frontend React app
│   ├── Dockerfile        # Dockerfile for frontend
│   └── package.json
│
├── docker-compose.yml    # The Docker Compose file
