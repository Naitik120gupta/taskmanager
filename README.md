# taskmanager
This project is a Node.js and MongoDB-based Task Management API. It provides CRUD operations for tasks along with filtering and sorting features. You can use this API to create, retrieve, update, delete, and manage tasks.

Features
Create a new task
Retrieve all tasks or specific tasks by ID
Update a task by ID
Delete a task by ID
Filter tasks by status (Pending, In-Progress, Done)
Sort tasks by due date, creation date, or priority
Technologies Used
Node.js: Backend runtime environment
Express.js: Web framework for Node.js
MongoDB: NoSQL database for task storage
Mongoose: MongoDB object modeling for Node.js
Body-Parser: Middleware to handle JSON request bodies
Getting Started
Prerequisites
Make sure you have the following installed on your local development environment:

Node.js (v14+)
MongoDB (v4.4+)

Folder Structure:
task-manager/
├── config/
│   └── db.js            # MongoDB connection setup
├── models/
│   └── taskModel.js      # Mongoose Task model
├── routes/
│   └── taskRoutes.js     # API routes for task management
├── server.js             # Entry point for the application
├── package.json          # Project metadata and dependencies
└── README.md             # Documentation file
