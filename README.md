# Advanced React Hooks – Practice Project

A small React project built with Vite to practice advanced React hooks such as `useReducer`, `useEffect`, `useState`, and custom hooks.

---

## Overview

This app consists of two components:
- A **Timer** that displays the current time updated every second.
- A **Calculator** that handles basic math operations using `useReducer`.

---

## Tech Stack

- React
- Vite
- JavaScript (ES6+)

---

## Project Structure
```
src/
├── components/
│   ├── Calculator/
│   │   └── Calculator.jsx
│   └── Timer/
│       └── Timer.jsx
├── customHooks/
│   └── useActualDate.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Features

### Timer
- Uses the custom hook `useActualDate` to get the current date.
- Displays the current time formatted with `.toLocaleTimeString()`.
- Updates every second using `setInterval`.

### Calculator
- Supports addition, subtraction, multiplication, division and percentage.
- Manages all state with `useReducer`.
- Keeps a record of previous results.

---

## React Hooks Used

| Hook | Where | Purpose |
|------|-------|---------|
| `useState` | `useActualDate.jsx` | Stores the current date object |
| `useEffect` | `useActualDate.jsx` | Sets up and cleans up the `setInterval` |
| `useReducer` | `Calculator.jsx` | Manages all calculator state and logic |
| `useActualDate` *(custom)* | `App.jsx` | Abstracts date/time logic into a reusable hook |

---

## Getting Started
```bash
npm install
npm run dev
```

---

## Author 

Made by [https://github.com/Ren-mayday]
