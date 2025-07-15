# Ikigai Motion Landing Page

A comprehensive, responsive landing page for ikigaimotion.com built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### **Core Sections**
- **Hero Section**: Compelling headline with "Discover Your Ikigai" theme and dual call-to-action buttons
- **Course Recommendations**: 3 curated Coursera courses with detailed descriptions and ratings
- **Blog Section**: Featured articles with author information and read times
- **Interactive Tools**: 6 different tools including quizzes, calculators, and downloadable resources
- **Community Section**: Testimonials, statistics, and community features
- **Newsletter Signup**: Email capture with lead magnet ("Free Ikigai Starter Kit")
- **Call-to-Action**: Affiliate link integration with special offers
- **Footer**: Comprehensive footer with links, social media, and contact information

### **Navigation & UX**
- **Fixed Navigation Bar**: Smooth scrolling to different sections
- **Mobile-Responsive**: Optimized for all device sizes
- **Interactive Elements**: Hover effects, animations, and engaging micro-interactions
- **Lead Generation**: Multiple touchpoints for email capture and engagement

### **Engagement Features**
- **Social Proof**: Testimonials, statistics, and success stories
- **Interactive Tools**: Quizzes, calculators, and downloadable resources
- **Community Building**: Features for connecting with like-minded people
- **Content Marketing**: Blog section with valuable articles
- **Newsletter Integration**: Email list building with valuable lead magnets

## 🛠 Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## 📁 Project Structure

```
ikigaimotion-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx (Fixed nav with smooth scrolling)
│       ├── HeroSection.tsx (Main hero with CTA buttons)
│       ├── CourseRecommendations.tsx (3 Coursera courses)
│       ├── BlogSection.tsx (Featured articles)
│       ├── ToolsSection.tsx (Interactive tools & resources)
│       ├── CommunitySection.tsx (Testimonials & stats)
│       ├── NewsletterSignup.tsx (Email capture)
│       ├── CallToAction.tsx (Affiliate link CTA)
│       └── Footer.tsx (Comprehensive footer)
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

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

## 🎨 Customization

### **Affiliate Links**
Update the affiliate link placeholder in `src/components/CallToAction.tsx`:
```typescript
href="https://coursera.org/your-actual-affiliate-link"
```

### **Course Recommendations**
Modify the courses array in `src/components/CourseRecommendations.tsx` to add or change recommended courses.

### **Blog Content**
Edit the blog posts array in `src/components/BlogSection.tsx` to add your own articles.

### **Tools & Resources**
Update the tools array in `src/components/ToolsSection.tsx` to add new interactive tools.

### **Newsletter Integration**
Connect your email service provider in `src/components/NewsletterSignup.tsx`.

### **Community Features**
Update testimonials and statistics in `src/components/CommunitySection.tsx`.

### **Styling**
The project uses Tailwind CSS. Custom colors and styles can be added in `tailwind.config.js`.

## 📊 Conversion Optimization

### **Multiple Touchpoints**
- Hero section CTA buttons
- Course enrollment buttons
- Tool interaction prompts
- Newsletter signup
- Community join buttons
- Final CTA section

### **Social Proof Elements**
- User testimonials
- Statistics and numbers
- Success stories
- Expert endorsements

### **Lead Magnets**
- Free Ikigai Starter Kit
- 7-Day Challenge
- Values Assessment
- Weekly newsletter

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**
Build the project for production:
```bash
npm run build
npm start
```

## 📈 Analytics & Tracking

### **Recommended Integrations**
- Google Analytics 4
- Facebook Pixel
- LinkedIn Insight Tag
- Email service provider (ConvertKit, Mailchimp, etc.)
- Heat mapping tools (Hotjar, Crazy Egg)

### **Key Metrics to Track**
- Newsletter signup rate
- Course click-through rate
- Tool engagement
- Time on page
- Scroll depth
- Conversion rates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email support@ikigaimotion.com or create an issue in the repository.

## 🎯 Next Steps

### **Immediate Actions**
1. Replace affiliate link placeholders with actual links
2. Set up email service provider integration
3. Add Google Analytics tracking
4. Customize content for your specific audience

### **Future Enhancements**
- Add user authentication
- Implement actual quiz functionality
- Create admin dashboard for content management
- Add A/B testing capabilities
- Integrate with CRM systems 