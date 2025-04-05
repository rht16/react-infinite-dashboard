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
 

## 📡 API Details

This project uses the public **[Random User API](https://randomuser.me/)** to fetch user data dynamically.

### 🔄 Fetch Users

**Endpoint:**
**Method:** `GET`

**Query Parameters:**

| Parameter | Description                         | Example       |
|-----------|-------------------------------------|---------------|
| `results` | Number of users to fetch            | `results=10`  |
| `page`    | Page number for pagination          | `page=2`      |
| `seed`    | Seed for consistent results across requests | `seed=abc` |

**Example Request:**
**Sample Response:**
https://randomuser.me/api/?results=10&page=1&seed=abc
```json
{
  "results": [
    {
      "name": {
        "title": "Mr",
        "first": "John",
        "last": "Doe"
      },
      "email": "john.doe@example.com",
      "dob": {
        "age": 30
      },
      "nat": "US",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg"
      }
    }
  ],
  "info": {
    "seed": "abc",
    "results": 10,
    "page": 1,
    "version": "1.4"
  }
}
```
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

 <img width="1353" alt="Screenshot 2025-04-05 at 8 53 05 PM" src="https://github.com/user-attachments/assets/a077bf8e-7b6a-4de1-b356-3c77cd9d3a75" />

 <img width="1335" alt="Screenshot 2025-04-05 at 8 52 42 PM" src="https://github.com/user-attachments/assets/bf9831be-620d-44f5-a61f-82f50dbc0062" />

<img width="1363" alt="Screenshot 2025-04-05 at 8 51 58 PM" src="https://github.com/user-attachments/assets/37d53310-daf3-4ec4-9f4b-b9983ef75df5" />

 
