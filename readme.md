📌 Group Chat App

A simple, modern, real-time group chat application built with Node.js, Express, and Socket.IO.
Users can join instantly by entering their name, see online user count, and chat with everyone in real-time — no login required.

🚀 Features

💬 Real-time messaging using Socket.IO

👥 Live online user count

🧑‍💻 Display sender name with each message

🎨 Modern and clean chat UI

📱 Fully responsive (mobile + desktop)

⚡ Instant message updates

🔐 No authentication required

🖥️ Front-end + back-end included

🛠️ Tech Stack

Frontend:

HTML

CSS

JavaScript

Socket.IO Client

Backend:

Node.js

Express.js

Socket.IO

HTTP Server

📂 Folder Structure
project/
│── public/
│   ├── index.html
│   ├── name.html
│   ├── style.css
│   ├── name.css
│   └── script.js
│
│── server.js
│── package.json
│── README.md

📦 Installation

Clone the repository:

git clone <your-repo-url>
cd project


Install dependencies:

npm install

▶️ Run the App

Start the server:

node server.js


The app will run at:

http://localhost:3000

🧑‍💻 How It Works
🔹 1. Name Page

Users enter their name, stored in localStorage.

🔹 2. Chat Page

User connects to Socket.IO

Server broadcasts online count

Messages sent with:

{
  "name": "User",
  "message": "Hello!",
  "from": "socketId"
}


Client checks from === socket.id to style messages as me or other

📡 Socket Events
Client → Server
Event	Description
new-message	Sends message and username
Server → Client
Event	Description
message	Broadcast message to all users
online	Sends current online user count
🎨 UI Highlights

Modern message bubbles

Distinction between your messages and others' messages

Smooth scroll

Beautiful full-screen layout

Gradient onboarding screen

📜 License

This project is free to use and modify.