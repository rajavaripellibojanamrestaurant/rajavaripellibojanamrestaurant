<<<<<<< HEAD
# Raja Vari Pelli Bhojanam — Website

A React + Tailwind CSS + Three.js website for **Raja Vari Pelli Bhojanam** (Royal Wedding Feast),
a multi-cuisine restaurant in Kondapur/Gachibowli, Hyderabad.

## Features
- Animated Three.js hero centerpiece: a rotating brass diya with an orbiting marigold-petal ring
- Full menu (80+ dishes) transcribed from the printed menu, organized by category, with:
  - Live search
  - Veg / Non-Veg filter
  - Category tabs
- About / hospitality section, Services (Dine-In, Takeaway, Catering), Contact + embedded map
- Mobile-responsive nav, smooth scroll, reduced-motion support, visible focus states

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Project structure
```
src/
  data/menu.js          # all menu items + restaurant info — edit prices/dishes here
  components/
    Navbar.jsx
    Hero.jsx
    Hero3D.jsx          # three.js scene
    About.jsx
    Menu.jsx
    Services.jsx
    Contact.jsx
  App.jsx
  index.css
```

## Customizing
- **Colors/fonts**: edit `tailwind.config.js` (maroon, marigold, gold, leaf, cream tokens).
- **Menu/prices**: edit `src/data/menu.js` — the Menu page renders directly from this file.
- **Contact info / map**: update `restaurant` object in `src/data/menu.js` and the map query
  string in `src/components/Contact.jsx`.
- **Real photos**: swap the Three.js hero for an `<img>`/video background if you'd prefer real
  food photography — the rest of the layout doesn't depend on it.

## Notes
- Built with Vite. Network access was unavailable in the build sandbox used to generate this
  project, so `npm install` / `npm run build` have not been executed here — run them on your
  machine to verify, and open a GitHub issue style note to me if you hit anything unexpected.
=======
## Hi there 👋

<!--
**rajavaripellibojanamrestaurant/rajavaripellibojanamrestaurant** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
>>>>>>> 195d9bff72cf19f54adf927313dbf37a2aaa976c
