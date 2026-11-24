# Travel Buddy — Project Structure

> **An AI-powered tour guide and travel companion** that crafts smart itineraries, discovers Points of Interest (POIs), provides interactive visual maps, and manages trip budgets.

The repository is structured into two decoupled workspaces: **`server/`** (backend REST API & database models) and **`client/`** (React + Vite frontend interface).

---

## Directory Tree

```text
└── Travel-Buddy/
    ├── .gitignore
    ├── README.md
    ├── server/
    │   ├── .env
    │   ├── .env.example
    │   ├── app.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── routes/
    │   │   ├── auth.js
    │   │   ├── budget.js
    │   │   └── trip.js
    │   ├── node_modules/
    │   ├── models/
    │   │   ├── Budget.js
    │   │   ├── Trip.js
    │   │   └── User.js
    │   ├── middleware/
    │   │   └── authMw.js
    │   └── controllers/
    │       ├── authController.js
    │       ├── budgetController.js
    │       └── tripController.js
    ├── client/
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   ├── vite.config.js
    │   ├── src/
    │   │   ├── App.jsx
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── pages/
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── Login.jsx
    │   │   │   └── Register.jsx
    │   │   ├── components/
    │   │   │   ├── ActivityItem.jsx
    │   │   │   ├── Hero.jsx
    │   │   │   ├── HUDMetric.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   ├── StatBox.jsx
    │   │   │   └── TacticalInput.jsx
    │   │   └── asset/
    │   │       ├── vite.svg
    │   │       └── hero/
    │   │           ├── hero1.jpg
    │   │           ├── hero2.jpg
    │   │           └── hero3.jpg
    │   └── node_modules/
    └── .git/
```

---

## Workspace Overview

| Workspace | Core Stack | Responsibilities |
| :--- | :--- | :--- |
| **`server/`** | Node.js, Express, MongoDB, Mongoose, JWT | Authentication, AI itinerary & POI orchestration, and persistent trip/budget storage. |
| **`client/`** | React, Vite, Tailwind CSS, Leaflet, Framer Motion | Interactive visual maps, AI trip planning dashboard, and real-time budget telemetry. |