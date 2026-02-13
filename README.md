# 🎰 Fun88 Casino Mockup

A high-performance, mobile-responsive Casino platform mockup built with **React**, **Vite**, and **Tailwind CSS**. This project replicates the core user experience of a modern gaming site, including dynamic game filtering, favorite management, and a seamless mobile interface.

## 🚀 Features

- **Dynamic Game Grid:** Responsive grid supporting categorization (Slots, Arcade, Table Games, etc.) and real-time search.
- **Provider Filtering:** Grouped provider carousel that filters the game library by software house.
- **Advanced State Management:** Powered by **Zustand** with persistence (Local Storage) so user favorites and settings survive page refreshes.
- **Mobile-First UX:** - Smooth animated Bottom Navigation bar using **Framer Motion**.
  - **Expand Mode:** One-tap toggle to hide Navbar/BottomBar for a full-screen gaming experience.
- **Mock API Service:** Simulated asynchronous data fetching with realistic loading delays and **Skeleton UI** placeholders.
- **Optimized Performance:** Uses `clip-path` for complex UI elements (Favorite slants) and CSS `@apply` for clean, reusable styles.

## 🛠️ Tech Stack

- **Core:** [Vite](https://vitejs.dev/) + [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **State:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** Custom SVG Icon Library

## 📂 Project Structure

```text
src/
├── assets/             # SVG icons
├── components/         # Reusable UI (GameCard, BannerCarousel, etc.)
├── lib/               # Mock datasets (Games, Categories, Banners)
├── layouts/            # Page wrappers (MainLayout)
├── services/           # Mock API logic (gameService)
├── store/              # Zustand global state (useGameStore, useUserStore)
├── types/              # Centralized TypeScript interfaces
└── index.css           # Custom Tailwind @apply components