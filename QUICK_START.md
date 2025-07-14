# Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Setup Instructions

### Option 1: Using the batch file (Windows)
1. Double-click `setup.bat` to install dependencies and start the development server
2. Open http://localhost:3000 in your browser

### Option 2: Manual setup
1. Open terminal/command prompt in the project directory
2. Run: `npm install`
3. Run: `npm run dev`
4. Open http://localhost:3000 in your browser

## Project Features

✅ **Hero Section** - Compelling headline with "Discover Your Ikigai" theme
✅ **Course Recommendations** - 3 curated Coursera courses with descriptions
✅ **Call-to-Action** - Affiliate link placeholder ready for your actual link
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Modern UI** - Beautiful gradients and animations

## Customization

### Update Affiliate Link
Edit `src/components/CallToAction.tsx` and replace:
```typescript
href="https://coursera.org/affiliate-link-placeholder"
```
with your actual Coursera affiliate link.

### Add More Courses
Edit the `courses` array in `src/components/CourseRecommendations.tsx` to add or modify course recommendations.

### Change Colors
Modify the color scheme in `tailwind.config.js` or update the CSS classes in the components.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
Run `npm run build` then `npm start` for production build.

## Support
If you encounter any issues, check the main README.md file for detailed instructions. 