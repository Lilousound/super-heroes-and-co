# 🦸‍♂️ Super Heroes & Co

**A fun web app to find your perfect superhero match based on your personality!**
Built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS** to practice modern web development concepts.

🔗 **[Live Demo](https://super-heroes-and-co.vercel.app/)**

---

## 🛠️ **Technologies Used**

| Technology       | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| **Next.js**      | Framework for server-side rendering, routing, and optimized performance. |
| **React**        | UI library for building interactive components.                          |
| **TypeScript**   | Strong typing to catch errors early and improve code maintainability.    |
| **Tailwind CSS** | Utility-first CSS framework for rapid, customizable styling.             |
| **Vercel**       | Hosting platform for seamless deployment and CI/CD.                      |

---

## 🎨 **Design & UX Choices**

### **1. Minimalist & Playful UI**

- **Tailwind CSS** for a clean, responsive design with smooth animations.
- **Card-based layout** to showcase superheroes in an engaging way.
- **Dark/light mode** for accessibility and user preference.

### **2. Intuitive Questionnaire**

- **Step-by-step form** with clear questions to guide users.
- **Real-time feedback** (e.g., selected tags, progress indicators).
- **Dynamic hero suggestions** based on user inputs.

### **3. Context API for State Management**

- Used **React Context** (`SurveyContext`) to manage:
  - User selections (tags, answers).
  - Global state (e.g., selected hero, questionnaire progress).
- Avoids prop drilling and keeps logic centralized.

---

## 🎯 **Features**

✅ **Interactive Quiz**

- Answer questions to discover your superhero match.
- Tag-based filtering (e.g., "Strength," "Intelligence").

✅ **Hero Cards**

- Responsive grid layout with hero profiles.
- Dynamic rendering based on user preferences.

✅ **State Management**

- **React Context + `useReducer`** for complex state logic.

✅ **Performance Optimizations**

- Next.js **static generation** for fast loading.
- **Image optimization** via `next/image`.

✅ **Accessibility**

- Semantic HTML + ARIA labels.
- Keyboard-navigable UI.

---

## 💡 **Why This Project?**

### **Learning Goals**

- **Master React Hooks**: `useState`, `useEffect`, `useContext`, `useReducer`.
- **TypeScript Proficiency**: Strong typing for props, state, and context.
- **Next.js Fundamentals**: Routing, API routes, and SSR.
- **Tailwind CSS**: Utility-first styling without bloated CSS files.
- **State Management**: Context API vs. Redux (lightweight alternative).

### **Challenges Overcome**

- **ESLint/TypeScript Config**: Resolved dependency conflicts (e.g., `eslint@8` + `eslint-config-next`).
- **Dynamic Rendering**: Optimized hero card updates based on user inputs.
- **Deployment**: Fixed Vercel build errors (Node.js version, `legacy-peer-deps`).

---

## 📢 Contribution & Feedback

This project is open source! Contributions and feedback are welcome:

Suggestions: New features, UI improvements, or bug fixes. Issues: Open an issue or contact me directly.

---

## 📧 Get in Touch

Have questions, suggestions, or just want to chat about the project? I’d love to hear from you! 😊

📩 Email me at: aurelieraout@gmail.com
Whether it’s feedback, collaboration ideas, or even a friendly "hello," don’t hesitate to reach out!
