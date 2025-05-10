# Deployment Instructions for Taewan Goo's Website

This document provides instructions for deploying the updated website with a home page featuring your profile and the Projects page.

## Setup and Prerequisites

1. **Profile Image Setup**
   - Copy your profile image to the public folder:
   ```bash
   cp /Users/twgoo/Downloads/profile.png /Users/twgoo/Desktop/gootec.github.io/blog/public/
   ```

   - To use your profile image as a favicon, generate favicon files from your profile image using a tool like [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/), then replace the existing icon files in the public directory.

2. **Install Dependencies**
   ```bash
   cd /Users/twgoo/Desktop/gootec.github.io/blog
   npm install
   ```

## Deployment Steps

1. **Local Development Testing**
   ```bash
   npm start
   ```
   
   The website will be available at http://localhost:3000 for local testing.

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```
   
   If you encounter issues with large files during deployment, try:
   
   ```bash
   # Check file sizes
   ls -lh /Users/twgoo/Desktop/gootec.github.io/blog/public/
   
   # Compress large image files if needed
   
   # Deploy with reduced history depth
   npx gh-pages --depth 1 -d build
   ```

## Website Structure

The website now has three main pages:

1. **Home Page** - Features your profile image and two main navigation buttons (CV and PROJECTS)
2. **CV Page** - Displays your academic background, publications, and skills
3. **Projects Page** - Showcases your ongoing research projects and collaborations

## Customizing the Projects Page

The Projects page is defined in `/Users/twgoo/Desktop/gootec.github.io/blog/src/pages/Projects.js`. To add or update projects:

1. Locate the project cards in the Projects.js file
2. Follow the existing structure to add or modify projects
3. Each project has:
   - Title
   - Tags
   - Description
   - Details (Leaders, Members, GitHub links, etc.)

Example of adding a new project:
```jsx
<div className="project-card">
  <div className="project-header">
    <h2>New Project Title</h2>
    <div className="project-tags">
      <span className="project-tag">Project Type</span>
    </div>
  </div>
  <p className="project-description">
    Project description here.
  </p>
  <div className="project-details">
    <div className="project-detail">
      <span className="detail-label">Leader:</span>
      <span className="detail-value">Name</span>
    </div>
    <div className="project-detail">
      <span className="detail-label">My Role:</span>
      <span className="detail-value">Role description</span>
    </div>
  </div>
</div>
```

## Troubleshooting

If you encounter issues:

1. Make sure your profile image is in the public folder and not too large
2. Check that all dependencies are installed (`npm install`)
3. If routes are not working, ensure you're using HashRouter in App.js
4. For GitHub Pages deployment issues, try using the depth parameter as shown above
