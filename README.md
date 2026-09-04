# Luv Kumar Portfolio

A modern personal portfolio website designed to showcase a developer profile, projects, certifications, resume, and contact information in a polished, interactive layout.

This project is built as a static website using HTML, CSS, and JavaScript, with a sleek animated background, a dark/light theme toggle, and a terminal-style command interface to add a unique developer-focused look.

## Live Demo

The portfolio is designed to be deployed using GitHub Pages and is intended to run from the main branch.

## Project Overview

This portfolio website is built for:

- showcasing technical projects and skills
- presenting certifications and academic experience
- providing a downloadable resume
- making it easy for recruiters or clients to contact the developer
- demonstrating frontend design and UI development capabilities

It is especially suited for a computer science student or junior developer looking to present a strong online presence.

## Features

- responsive single-page portfolio layout
- modern hero section with profile presentation
- animated background with layered geometric shapes and motion effects
- dark/light theme toggle with saved user preference
- interactive terminal-inspired command area
- project section highlighting featured work
- skills and certification cards
- contact form that opens the user’s email client
- direct links to GitHub and LinkedIn
- dedicated resume page for PDF-style download
- dedicated certificates page for certificate listing and access

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Git and GitHub
- GitHub Pages for deployment

## Project Structure

```text
.
├── index.html               # Main portfolio landing page
├── styles.css               # Core styling, layout, animations, theme system
├── script.js                # Interactive behavior, terminal commands, theme logic
├── resume.html              # Resume page with download button
├── certificates.html        # Certifications page
├── profile.jpeg             # Profile image asset
├── Introduction_to_Cybersecurity_certificate_krishshukla10000-gmail-com.pdf
├── luv-kumar-certificate.pdf
├── LuvKumar-JNUJ_July24_CYB_-certificate.pdf
├── README.md                # Project documentation
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow for Pages deployment
├── .gitignore
└── LICENSE                  # License file if present in the repo
```

## Website Sections

### Home
The landing section introduces the user, provides a short personal summary, and includes CTAs to view projects and access the resume.

### About
Includes a short biography, education details, and training focus areas such as:

- Responsive design
- JavaScript and TypeScript
- Git and GitHub
- Cybersecurity fundamentals
- Data structures and web technologies

### Projects
Showcases selected work with short descriptions and links. The current portfolio includes:

- Personal Portfolio Website
- C Programming Practice

### Skills
Displays technologies and areas of focus, including:

- HTML
- CSS
- JavaScript
- C and Python
- Responsive Design
- Git and GitHub
- Data Structures

### Certifications
Lists major certifications and links to the certificates page for more detailed viewing.

### Contact
Provides:

- email address
- phone number
- location
- GitHub link
- LinkedIn link
- contact form for sending email-based messages

## Local Setup

### Option 1: Open directly in a browser
You can open the project by launching index.html directly in a browser.

### Option 2: Run a local web server
From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment to GitHub Pages

This project is configured with a GitHub Actions workflow to deploy the static site to GitHub Pages.

### Deployment steps

1. Push the project to GitHub.
2. Ensure the default branch is main.
3. Open the repository on GitHub.
4. Go to Settings → Pages.
5. Set Source to GitHub Actions.
6. Save the settings.
7. The deployment workflow in .github/workflows/deploy.yml will build and publish the site.

### Repository branch requirement

The deployment workflow is configured to run on the main branch.

```yaml
on:
  push:
    branches: ["main"]
```

### Live URL

```text
https://krishshukla07.github.io/Luv-Kumar-Portfolio/
```

GitHub repository:

```text
https://github.com/KrishShukla07/Luv-Kumar-Portfolio
```

## Customization Guide

To personalize the portfolio for your own use:

### Update the personal profile
Edit the content in index.html:

- name
- title
- summary
- education details
- project descriptions
- email address
- phone number
- location
- social media links

### Update resume information
Modify the content in resume.html to reflect your current career goals, education, skills, and experience.

### Update certifications
Replace or add certificate cards in index.html and update the certificates page content in certificates.html.

### Update project links
Change GitHub and portfolio project URLs in index.html to your own projects and repositories.

### Change theme or visual style
Adjust colors, gradients, shadows, and layout spacing in styles.css.

## Notes

- The portfolio is static and lightweight, making it fast to load and easy to host.
- It is suitable for personal branding, internships, junior developer applications, and portfolio sharing.
- The project is intentionally simple to maintain and easy to customize without extra frameworks or build tools.

## Author

Luv Kumar

GitHub: https://github.com/KrishShukla07
LinkedIn: https://linkedin.com/in/luv-kumar-109767224
Email: krishshukla10000@gmail.com

## License

This project is intended for personal and portfolio use. If you plan to use it for a public project or share it publicly, ensure you add the appropriate license for your preferred usage terms.
