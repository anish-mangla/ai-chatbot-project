# AI Chatbot Project

## Overview

This project is an AI-powered chatbot application built using a Node.js backend and a React frontend. The chatbot uses OpenAI's GPT-4 API for generating human-like responses and LangChain for multilingual support. The application is designed to handle customer queries and provide intelligent, real-time responses.

## Project Structure

```plaintext
ai-chatbot-project/
│
├── backend/                # Backend (Node.js) codebase
│   ├── src/                # Source files
│   │   ├── controllers/    # Express route handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Services (e.g., GPT-4, LangChain)
│   │   ├── config/         # Configuration files
│   │   ├── utils/          # Utility functions
│   │   ├── app.js          # Express app initialization
│   │   └── server.js       # Server entry point
│   ├── migrations/         # Database migration files
│   ├── seeds/              # Database seed files
│   └── package.json        # Backend dependencies and scripts
│
├── frontend/               # Frontend (React) codebase
│   ├── public/             # Public files (e.g., index.html)
│   ├── src/                # Source files
│   │   ├── components/     # React components
│   │   ├── pages/          # React pages
│   │   ├── services/       # Frontend services (e.g., API interactions)
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # React entry point
│   │   └── package.json    # Frontend dependencies and scripts
│
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── package.json            # Root dependencies and scripts

## Features

- **AI-Powered Responses**: Utilizes OpenAI's GPT-4 API to generate intelligent responses.
- **Multilingual Support**: Incorporates LangChain to handle multiple languages, making the chatbot accessible to a global audience.
- **User-Friendly Interface**: A React-based frontend providing a clean and intuitive chat experience.
- **Database Integration**: Stores user interactions in a PostgreSQL database for analysis and improvement.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- **PostgreSQL** (v12.x or later)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/anish-mangla/ai-chatbot-project.git
cd ai-chatbot-project

### 2. Install Dependencies

```bash
npm run install-all

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```plaintext
DB_USER=your_database_user
DB_HOST=localhost
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432

GPT_API_KEY=your-openai-api-key
LANGCHAIN_API_KEY=your-langchain-api-key

### Key Points:

- **Location**: The `.env` file should be placed in the `backend` directory since that is where these environment variables will be used.
- **Specific Variables**: The example includes placeholders for the necessary environment variables, such as database credentials (`DB_USER`, `DB_HOST`, etc.) and API keys (`GPT_API_KEY`, `LANGCHAIN_API_KEY`).
- **Format**: Environment variables should be written in the standard `key=value` format.

### 4. Initialize the Database

Run the database migration and seed scripts to set up your PostgreSQL database:

```bash
npm run db-init

### 5. Start the Application

Start the Backend:

```bash
npm run start-backend

Start the Frontend:

```bash
npm run start-frontend

### 6. Build for Production

To build the frontend for production:

```bash
npm run build-frontend

## Usage

Once the application is running:

- **Access the Frontend**: Open your browser and go to `http://localhost:3000`.
- **Chat with the AI**: Use the chatbox to send messages and receive responses from the AI-powered chatbot.

## Project Structure Details

### Backend

- **Controllers**: Handle incoming API requests and send responses.
- **Models**: Define the structure of the data in the PostgreSQL database.
- **Services**: Handle interactions with external APIs (e.g., GPT-4, LangChain).
- **Routes**: Define the API endpoints for the application.

### Frontend

- **Components**: Reusable React components for the UI.
- **Pages**: Top-level React components that represent pages (e.g., HomePage).
- **Services**: Manage API calls from the frontend to the backend.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries, please contact Anish Mangla.

### Summary:

- **Full Content**: The entire content of the `README.md` file is provided here. You can directly copy this and place it into your `README.md` file.
- **Usage Instructions**: The instructions are laid out clearly within the markdown structure, making it easy for someone to follow and set up the project.
- **Contributing Guidelines**: Instructions for contributing to the project are included.
- **Contact Information**: Placeholder contact details are provided, which you should replace with your own.
