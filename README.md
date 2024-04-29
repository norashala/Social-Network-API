# Social-Network-API

This project is a social media startup's API built to handle large amounts of unstructured data using a NoSQL database. It provides endpoints for managing users, thoughts, reactions, and friendships.

## Features

- Start server and sync Mongoose models to MongoDB database.
- Retrieve user and thought data via API GET routes.
- Create, update, and delete users and thoughts via API POST, PUT, and DELETE routes.
- Create and delete reactions to thoughts.
- Add and remove friends from a user’s friend list.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- MongoDB
- Insomnia (or any API testing tool)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git

2. Navigate to the project directory:

     cd project-directory

3. Install dependencies:

   npm install

## API Documentation

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:userId**: Retrieve a specific user by ID.
- **GET /api/thoughts**: Retrieve all thoughts.
- **GET /api/thoughts/:thoughtId**: Retrieve a specific thought by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:userId**: Update an existing user.
- **DELETE /api/users/:userId**: Delete a user.
- **POST /api/thoughts/:userId**: Create a new thought for a specific user.
- **PUT /api/thoughts/:thoughtId**: Update an existing thought.
- **DELETE /api/thoughts/:thoughtId**: Delete a thought.
- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought.
- **POST /api/users/:userId/friends/:friendId**: Add a friend to a user’s friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user’s friend list.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

https://drive.google.com/file/d/195YClWWQ4QMTbvxVMI4xU-T-RBhjVpbD/view?usp=sharing
