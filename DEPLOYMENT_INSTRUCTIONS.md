# Deployment Instructions

This document provides instructions for deploying the updated website.

## Setup and Deployment

1. **Initial Setup**
   - The website is now a React application located in the `/blog` directory
   - The homepage has been set to "https://gootec.github.io" in package.json

2. **Local Development**
   - Navigate to the `/blog` directory: `cd /Users/twgoo/Desktop/gootec.github.io/blog`
   - Install dependencies: `npm install`
   - Start the development server: `npm start`
   - View the site at: `http://localhost:3000`

3. **Deployment**
   - Navigate to the `/blog` directory: `cd /Users/twgoo/Desktop/gootec.github.io/blog`
   - Build and deploy the site: `npm run deploy`
   - This will use gh-pages to deploy the site to GitHub Pages

4. **Verify Deployment**
   - Visit your site at: https://gootec.github.io
   - Check that all sections display correctly
   - Test responsiveness on mobile devices

## Important Files

- **Main CV Content**: `/blog/src/App.js`
- **Styling**: `/blog/src/App.css` and `/blog/src/index.css`
- **Configuration**: `/blog/package.json` 
- **HTML Template**: `/blog/public/index.html`

## Future Updates

To update your CV in the future:
1. Edit the content in `/blog/src/App.js`
2. Run `npm run deploy` from the `/blog` directory
3. GitHub Pages will update with your changes

## Troubleshooting

If you encounter deployment issues:
- Check that the repository settings have GitHub Pages enabled
- Ensure the "homepage" field in package.json is correct
- Verify that the gh-pages branch exists and is set as the source for GitHub Pages
