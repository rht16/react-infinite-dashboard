# 🚀 React Infinite Dashboard

This project is a responsive User Dashboard Application built with React + Vite. It includes a seamless authentication system (login/register), a scrollable user listing interface using the randomuser.me API, and a polished UI using Material UI (MUI).

Users can log in or register, then access a dashboard where random user cards are displayed in an infinite scrolling grid layout. Each user card displays the user’s photo, email, age, nationality, and more.

The goal of this project is to demonstrate a modern, scalable React setup with smooth navigation, clean UI components, and real-world features like protected routes and lazy loading.
---

## ⚙️ Tech Stack

- ⚡ [Vite](https://vitejs.dev/) – Fast dev server & bundler
- ⚛️ [React 18](https://reactjs.org/) – UI library
- 🎨 [Material UI (MUI)](https://mui.com/) – React UI component library
- 🔁 [React Router DOM v6](https://reactrouter.com/) – Routing
- 🔐 React Context – Auth state management
- ✅ [ESLint](https://eslint.org/) – Linting for consistent code

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rht16/react-infinite-dashboard.git
cd yreact-infinite-dashboard

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev

```

## 📦 Project Structure
- `src/`
  - `components/` – Reusable UI components
  - `context/`
    - `AuthProvider.jsx` – Provides authentication context
  - `hooks/`
    - `useAuth.js` – Custom hook to access auth state
  - `pages/`
    - `Login.jsx`
    - `Register.jsx`
    - `Dashboard.jsx`
  - `App.jsx` – Route configuration
  - `main.jsx` – Entry point of the app

✨ Features

	•	⚡ Vite-powered React App with blazing fast builds and HMR
	•	📦 Material UI (MUI) for beautiful and responsive design
	•	🔐 Authentication system (Login & Register) using React Context
	•	🧠 Custom Auth Hook – useAuth() for managing login/logout
	•	🧭 React Router DOM v6 for smooth client-side routing
	•	📄 Protected Routes – Users can only access Dashboard after login
	•	📱 Responsive Dashboard layout with lazy loading and infinite scroll
	•	⏳ Custom Loader – Using MUI loading button indicators
	•	🔧 ESLint pre-configured for clean code practices
	•	🎯 Easy to extend and plug into real backend authentication
