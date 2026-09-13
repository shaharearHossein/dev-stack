# Dev Stack

Dev Stack is a dark, modern technology stack builder inspired by the provided DevStack Penpot design. It allows users to explore curated developer technologies, add their favorite technologies to a personal stack, remove individual items, and clear the entire stack with ease. The project is fully responsive and provides an interactive experience for building a personalized technology stack.

## Technologies

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- JSON
- React-Toastify

## 3 Main Features

১. Technology Stack Builder — প্রযুক্তির কার্ডগুলো ব্রাউজ করে কোনো প্রযুক্তি ডুপ্লিকেট ছাড়াই Your Stack-এ যোগ করা যাবে।

২. Responsive Penpot-inspired UI — ডার্ক ইন্টারফেস, কমলা → গোলাপি → বেগুনি গ্রেডিয়েন্ট, ডেস্কটপে ৩-কলামের কার্ড এবং ট্যাবলেট/মোবাইলে responsive layout। মোবাইলে ব্র্যান্ডিং মাঝখানে থাকবে।

৩. Interactive Feedback — প্রযুক্তি যোগ, ডুপ্লিকেট যোগের চেষ্টা, রিমুভ এবং Remove All-এর জন্য React-Toastify alert ব্যবহার করা হয়েছে। JSON data load হওয়ার সময় loading state-ও দেখানো হয়েছে।


## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like UI code inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it?

useState stores changing data in a component. I used it for the technology list, selected stack, and mobile navbar menu.

### 4. What does the `useEffect` hook do, and why did you need it?

useEffect runs side effects after rendering. I used it to fetch the technology JSON file when the app loads.

### 5. Why does every `.map()` item need a unique `key` prop?

React uses the key to identify each list item efficiently when the list changes. In this project, the technology id is used as the key.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. For example, Your Stack shows an empty message when stack.length === 0; otherwise it shows the selected items.

### 7. How do you pass data from parent to child, and how does a child send something back?

A parent passes data and functions through props. The child calls the function it received when the user performs an action. In this project, App  passes technology and onAdd to TechnologyCard.



##  Git Commit Suggestions

Use at least 8 meaningful commits:

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
