# 🚀 Dev Stack

A dark, modern developer technology stack builder inspired by the provided DevStack Penpot design. Users can explore curated technologies, add them to a personal stack, remove individual items, and clear the entire stack.

## 🛠️ Technologies

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- JSON
- React-Toastify

## ✨ 3 Main Features

1. **Technology Stack Builder** — Browse technology cards and add technologies to Your Stack without duplicates.
2. **Responsive Penpot-inspired UI** — Dark interface, orange → pink → violet gradient, 3-column desktop cards, responsive tablet/mobile layouts, and centered mobile branding.
3. **Interactive Feedback** — React-Toastify alerts for add, duplicate, remove, and remove-all actions, plus a loading state while JSON data is fetched.

## 📂 Project Structure

```text
dev-stack/
├── public/
│   ├── assets/
│   │   └── dev-stack-visual.webp
│   └── data/
│       └── technologies.json
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── TechnologyCard.jsx
│   │   └── YourStack.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Open the Local URL shown by Vite, for example `http://localhost:5173/`.

## 📘 React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like UI code inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it?

`useState` stores changing data in a component. I used it for the technology list, selected stack, and mobile navbar menu.

### 4. What does the `useEffect` hook do, and why did you need it?

`useEffect` runs side effects after rendering. I used it to fetch the technology JSON file when the app loads.

### 5. Why does every `.map()` item need a unique `key` prop?

React uses the key to identify each list item efficiently when the list changes. In this project, the technology `id` is used as the key.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. For example, Your Stack shows an empty message when `stack.length === 0`; otherwise it shows the selected items.

### 7. How do you pass data from parent to child, and how does a child send something back?

A parent passes data and functions through props. The child calls the function it received when the user performs an action. In this project, `App` passes `technology` and `onAdd` to `TechnologyCard`.

## 🌿 Git Commit Suggestions

Use at least 8 meaningful commits:

```text
git add .
git commit -m "chore: initialize vite react project"

git add .
git commit -m "feat: add responsive navbar and mobile menu"

git add .
git commit -m "feat: build hero section and brand theme"

git add .
git commit -m "feat: add technology json data"

git add .
git commit -m "feat: render responsive technology cards"

git add .
git commit -m "feat: implement your stack add and remove"

git add .
git commit -m "feat: add toast notifications and loading state"

git add .
git commit -m "feat: complete footer and responsive polish"
```
