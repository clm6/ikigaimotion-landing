import HeroSection from '@/components/HeroSection'
import CourseRecommendations from '@/components/CourseRecommendations'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeroSection />
      <CourseRecommendations />
      <CallToAction />
    </main>
  )
} 