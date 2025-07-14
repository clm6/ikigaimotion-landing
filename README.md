# Ikigai Motion Landing Page

A responsive landing page for ikigaimotion.com built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Compelling headline and call-to-action buttons
- **Course Recommendations**: 3 curated Coursera courses with descriptions
- **Call-to-Action**: Affiliate link integration with special offers
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Clean, professional design with gradient backgrounds

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ikigaimotion-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ikigaimotion-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── HeroSection.tsx
│       ├── CourseRecommendations.tsx
│       └── CallToAction.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Customization

### Affiliate Links
Update the affiliate link placeholder in `src/components/CallToAction.tsx`:
```typescript
href="https://coursera.org/your-actual-affiliate-link"
```

### Course Recommendations
Modify the courses array in `src/components/CourseRecommendations.tsx` to add or change recommended courses.

### Styling
The project uses Tailwind CSS. Custom colors and styles can be added in `tailwind.config.js`.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@ikigaimotion.com or create an issue in the repository. 