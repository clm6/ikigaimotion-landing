import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CourseRecommendations from '@/components/CourseRecommendations'
import BlogSection from '@/components/BlogSection'
import ToolsSection from '@/components/ToolsSection'
import CommunitySection from '@/components/CommunitySection'
import NewsletterSignup from '@/components/NewsletterSignup'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="courses">
        <CourseRecommendations />
      </div>
      
      <BlogSection />
      
      <ToolsSection />
      
      <CommunitySection />
      
      <NewsletterSignup />
      
      <CallToAction />
      
      <Footer />
    </main>
  )
} 