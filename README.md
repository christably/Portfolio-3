My Portfolio Website

Thus is a comprehensive `README.md`** for my portfolio project. It explains the project purpose, features, technologies used, and includes **code-by-code walkthroughs** for both HTML and CSS.

---

```markdown
# Christabel Aidoo - Full-Stack Developer Portfolio

Welcome to the official portfolio of **Christabel Aidoo**, a resourceful Full-Stack Developer with a passion for programming, design, and AI-powered content creation.

This project is a personal website built to showcase my skills, experience, and projects using a clean, professional **black and gold** theme.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Code Explanation](#code-explanation)
  - [HTML Overview](#html-overview)
  - [CSS Overview](#css-overview)
- [Contact](#contact)

---

## Live Demo
https://bellsportfolio.netlify.app/

---

## Features

- Fully responsive design
- Animated hero section with a custom "I Love To Create." text animation
- CSS-only fading project sliders
- Smooth navigation and sticky header
- Organized sections: About, Skills, Projects, Experience, Education, Contact
- Downloadable and viewable CV
- Modern, stylish UI using a black and gold theme

---

## Technologies Used

- **HTML5**
- **CSS3**
- **Font Awesome** (for icons)
- **Google Fonts** (Poppins)
- **Responsive CSS Grid and Flexbox**
- **No JavaScript frameworks** — pure HTML/CSS only

---

## Project Structure

```

project/
│
├── index.html              # Main HTML file
├── styles.css              # All custom styling
├── assets/
│   └── imgs/               # Project and profile images
└── README.md               # Project documentation

````

---

## Code Explanation

### HTML Overview (`index.html`)

**Header + Navigation:**
```html
<header>
  ...
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    ...
  </ul>
</header>
````

* Sticky nav bar with internal section links
* Responsive hamburger icon (for future JS toggle)

**Hero Section:**

```html
<h1>Christabel Aidoo</h1>
<h2>Full-Stack Developer</h2>
<p id="creative">
  <span>I</span> <span>Love</span> <span>To</span> <span>Create.</span>
</p>
```

* Displays a glowing gold name and animated text
* CTA buttons for Contact, View CV (Google Drive), and Download CV (PDF)

**About, Skills, Experience, Education Sections:**

* Clearly divided and styled using semantic `<section>` tags
* Includes content written to showcase professionalism, skills, and experience

**Projects Section:**

```html
<div class="project-img">
  <img src="...1.png">
  <img src="...2.png">
  <img src="...3.png">
</div>
```

* Each project features an **auto-fading image slider** using only CSS
* Tech stack shown with styled `<span>` tags

**Contact Section:**

* Includes an email, phone, location placeholder, and social media links
* A working HTML form layout ready for backend integration

---

### CSS Overview (`styles.css`)

**Theme Colors:**

```css
:root {
  --black: #0d0d0d;
  --gold: #d4af37;
  --white: #ffffff;
}
```

* Elegant and luxurious gold on dark background

**Text Animation (Hero):**

```css
#creative span {
  opacity: 0;
  transform: translateY(20px);
  animation: wordFade 1s forwards;
}
```

* Delayed animation for each word in “I Love To Create.”

**Fading Project Images:**

```css
@keyframes fadeAnimation {
  0% { opacity: 0; }
  8% { opacity: 1; }
  25% { opacity: 1; }
  33% { opacity: 0; }
  100% { opacity: 0; }
}
```

* Project images fade in one at a time with different `nth-child` delays

**Buttons:**

```css
.primary-btn {
  background-color: var(--gold);
  color: var(--black);
}
```

* Distinct hover effects for primary and secondary buttons

**Responsiveness:**

* Uses CSS Grid and Flexbox
* Media queries for mobile-first design and typography scaling

---

## Contact

If you'd like to collaborate or get in touch:

* **Email:** [christabelaidoo202@gmail.com](mailto:christabelaidoo202@gmail.com)
* **Phone:** +233504887900
* **LinkedIn:** [Christabel on LinkedIn](https://www.linkedin.com/in/christabely)
* **GitHub:** [@christably](https://github.com/christably)

---

> © 2025 Christabel Aidoo — Built with passion and powered by code.

```

---
