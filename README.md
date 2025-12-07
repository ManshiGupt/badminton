🏸 Badminton Scoring App

A clean and modern web application for tracking badminton match scores.
Supports live scoring, multiple games, undo functionality, and automatic match winner detection — all wrapped in a stylish, responsive UI.

🔗 Live Demo: https://badminton123.netlify.app/

🚀 How to Run the Project Locally

Clone the repository

git clone <your-repo-url>


Navigate to the project directory

cd badminton-scoring-app


Install dependencies

npm install


Start the development server

npm start


Open browser and go to:

http://localhost:3000

🧠 Approach

The project is built using React (functional components + hooks).

The scoring follow standard badminton rules:

Game win at 21 points with a 2-point lead.

If tied at 29–29, first to 30 wins.

When a game ends:

Scores reset

New game begins

Game result is added to history

Match winner is determined based on Best of 3 or Best of 5.

Undo feature removes only the most recent point.

UI is styled using TailwindCSS, with a consistent neon-themed badminton look.

Player names and match setup values are saved in localStorage to persist across reloads.

The project is split into reusable components:

MatchSetup

LiveScore

ScoreButtons

GameSummary

📌 Assumptions

Only singles match format (Player A vs Player B).

Supported match formats:

Best of 3

Best of 5

Undo removes the last point only, not full game rollback.

Designed as a general scoring helper — not for official tournament systems.

No backend is required — everything runs client-side.

🌐 Deployment

The app is deployed on Netlify using continuous deployment.

🔗 Live Deployment: https://badminton123.netlify.app/

Any new changes pushed to the repository will auto-deploy.