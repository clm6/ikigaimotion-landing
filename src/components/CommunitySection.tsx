interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

interface Stat {
  number: string
  label: string
  icon: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    content: 'Finding my ikigai through this platform completely transformed my career. I went from feeling stuck to launching my own consulting business.',
    avatar: 'SJ',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'StartupXYZ',
    content: 'The tools and resources here helped me realize my passion for teaching. Now I mentor junior developers and feel truly fulfilled.',
    avatar: 'MC',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Healthcare Professional',
    company: 'City Hospital',
    content: 'After years of burnout, discovering my ikigai gave me a new perspective on my work. I now find meaning in every patient interaction.',
    avatar: 'ER',
    rating: 5
  }
]

const stats: Stat[] = [
  { number: '50K+', label: 'People Discovered Their Ikigai', icon: '🎯' },
  { number: '95%', label: 'Report Increased Life Satisfaction', icon: '😊' },
  { number: '200+', label: 'Success Stories Shared', icon: '📖' },
  { number: '4.9★', label: 'Average User Rating', icon: '⭐' }
]

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of people who have transformed their lives by discovering their ikigai
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect & Grow Together</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Weekly live Q&A sessions with ikigai experts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Private community forum for support and networking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Monthly challenges and accountability groups</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Exclusive workshops and masterclasses</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-semibold mb-2">Join Our Community</h4>
                <p className="text-blue-100 mb-4">Connect with like-minded people on the same journey</p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                  Join Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 