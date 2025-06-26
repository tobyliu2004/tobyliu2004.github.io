# Toby Liu Portfolio Website

A modern, responsive portfolio website built from scratch with HTML, CSS, and JavaScript.

## Features

- Clean, modern design with smooth animations
- Fully responsive for mobile and desktop
- Sticky navigation with active section highlighting
- Interactive project cards showcasing GitHub repositories
- Contact form with email integration
- Performance optimized with lazy loading and debounced scroll events
- Subtle parallax effects and hover animations

## Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles and animations
├── js/
│   └── main.js        # JavaScript interactions
└── README.md          # This file
```

## Setup

1. The website is ready to deploy. Simply upload all files to your web hosting service.

2. To connect to tobyliu.dev:
   - Point your domain DNS to your hosting provider
   - Upload the files to the root directory

3. To push to GitHub:
   ```bash
   cd portfolio-website
   git init
   git add .
   git commit -m "Initial portfolio website"
   git remote add origin https://github.com/tobyliu2004/[your-repo-name].git
   git push -u origin main
   ```

## Customization

- Update the profile image URL in index.html if needed
- Modify colors in the CSS variables (style.css)
- Add more projects by duplicating the project card structure
- Update contact information in the contact section

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Inter)

## Performance Features

- Lightweight, no heavy frameworks
- Optimized animations with CSS transforms
- Debounced scroll events
- Lazy loading for images
- Minimal external dependencies