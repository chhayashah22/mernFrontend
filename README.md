# React + Vite
Overview

This is the frontend of the NGO project, built using React.js. It provides an interactive user interface for donors, volunteers, and administrators to interact with the system.

Tech Stack

Frontend: React.js, React Router

State Management: Context API/Redux (if applicable)

Styling: Tailwind CSS

Authentication: JWT (JSON Web Token)

API Calls: Axios

Installation

Prerequisites

Ensure you have the following installed:

Node.js (v16 or later)

npm or yarn

Steps to Run

# Clone the repository
git clone https://github.com/chhayashah22/mernFrontend

# Navigate to the project directory
cd ngo-frontend

# Install dependencies
npm install

# Set up environment variables
Create a `.env` file in the root directory and add the following:

REACT_APP_API_URL=your_backend_api_url
REACT_APP_RAZORPAY_PUBLIC_KEY=your_razorpay_public_key

```bash
# Start the development server
npm run dev

The frontend will run at http://localhost:5173.

Project Structure

ngo-frontend/
│── public/
│── src/
│   │── components/        # Reusable components            
│   │── App.js             # Main App component
│   └── index.js           # Entry point
│── .env                   # Environment variables
│── package.json           # Dependencies and scripts
└── README.md              # Documentation

Features

User Authentication: Register, Login

Donation System: Secure donation processing

API Integration

The frontend communicates with the backend API for authentication, donations.

All API requests are handled using Axios.

Protected routes require authentication tokens.

Deployment

To deploy on Vercel, Netlify, or Firebase:

Push your code to GitHub.

Connect your repository to the deployment service.

Configure environment variables in the deployment settings.

Deploy and monitor logs.

License

This project is licensed under the MIT License.
