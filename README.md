# Shanes-Social-Network-API

Shanes-Social-Network-API is a backend application that simulates a social network's data management using a NoSQL database. <br>
It enables users to share thoughts, react to friends' thoughts, and manage a friends list, all through a well-defined API.

## Features

- Users can create, update, and delete their profiles.
- Users can post their thoughts, update them, and delete them.
- Users can add friends to and remove friends from their friends list.
- Users can post reactions to thoughts.
- When a user is deleted, their thoughts are also deleted (Cascade Delete).
- When a thought is created with a username, it automatically links the thought to the respective user's profile.

## Technologies Used

- Express.js for routing.
- MongoDB as the database.
- Mongoose ODM for data modeling.
- JavaScript date library for formatting timestamps.

## Getting Started

### Prerequisites

- MongoDB installed on your machine. [Installation Guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

### Installation
   
- git clone https://github.com/S10skeleton/Shanes-Social-Network-API.git
- npm install
- npm run seed

### Usage

- npm start

### API Routes

- /api/users for user operations.
- /api/thoughts for thought operations.
- /api/users/:userId/friends/:friendId for managing friends.
- /api/thoughts/:thoughtId/reactions for managing reactions.

### Github Repo and Walkthru Video Links

https://drive.google.com/file/d/191hApQZSsvyo_QpIPuJNbuNIMN1_fQ5Q/view
https://github.com/S10skeleton/Shanes-Social-Network-API
