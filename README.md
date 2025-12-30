# SDG 3 — Student Mental Health (Action Campaign)

This project is a **single-page responsive website** designed for **SDG 3 (Good Health & Well-Being)** with a focus on **student mental health awareness and support**.  
The website is built using **HTML, CSS, and JavaScript** and includes interactive sections and animations.

---

## Files Included

- `index.html` — page structure + sections
- `style.css` — styling, layout, responsive breakpoints
- `script.js` — interactions + animations
- `Img/` — all images/icons used by the website

---

## How to Run

1. Download and unzip the folder.
2. Open the folder.
3. Double click `index.html` to open it in your browser.

> If images do not appear, make sure the folder name is exactly `Img` and file names match exactly (including spaces and capital letters).

---

## Website Sections (One Page)

- **Hero / Home** (CTA button: Get Help Now)
- **About Us**
- **Key Issues** (tabs: Stress & Anxiety / Sleep Problems / Loneliness)
- **Self-Check** (radio scale + instant tip)
- **Get Help** (helpline + safety note)
- **Events** (cards with external links)
- **Success Stories** (carousel)
- **Footer** (contact + social media)

---

## Interactions & Animations (JavaScript)

### 1) Key Issues Tabs (Dynamic Content)
- Switching tabs updates:
  - title
  - illustration
  - bullet lists
  - background theme
- Includes a short **swap animation** during content change.

### 2) Self-Check (Instant Feedback)
- User selects a point on a scale.
- A short tip appears immediately based on selection.

### 3) Success Stories Carousel + Animation
- Previous/Next buttons cycle between stories.
- Story text transitions using a **fade + slide** animation.

### 4) Scroll Reveal Animation
- Elements with `.reveal` fade in and move up slightly when they enter the viewport.

### 5) Mobile Burger Menu
- Desktop navigation switches to a **burger menu** on smaller screens.
- Menu opens as a slide panel with overlay.
- Menu can be closed by:
  - close button
  - clicking overlay
  - pressing ESC
  - clicking any menu link

---

## Responsive Design

- Desktop navigation visible on large screens.
- Burger menu appears below `820px`.
- Grid layouts shift into stacked layouts on smaller screens.
- Events grid changes from 4 columns → 2 columns → 1 column depending on screen width.

---

## Notes (For Submission)

- This is a student project website for educational purposes.
- The content is informational and **not medical advice**.
- External links (Events/Social) can be updated later by changing the `<a href="">` values in HTML.
