interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Steps to Discover Your Ikigai in 2024',
    excerpt: 'Learn the proven framework used by millions to find their life purpose and create lasting fulfillment.',
    author: 'Dr. Sarah Chen',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'Personal Development',
    image: '/api/placeholder/400/250'
  },
  {
    id: '2',
    title: 'The Science Behind Japanese Longevity',
    excerpt: 'Discover how ikigai principles contribute to the remarkable longevity of Okinawan centenarians.',
    author: 'Prof. Michael Tanaka',
    date: 'Jan 12, 2024',
    readTime: '7 min read',
    category: 'Wellness',
    image: '/api/placeholder/400/250'
  },
  {
    id: '3',
    title: 'From Burnout to Purpose: A Personal Journey',
    excerpt: 'One woman\'s transformative journey from corporate burnout to finding her true calling.',
    author: 'Emma Rodriguez',
    date: 'Jan 10, 2024',
    readTime: '4 min read',
    category: 'Success Stories',
    image: '/api/placeholder/400/250'
  },
  {
    id: '4',
    title: 'Ikigai vs. Western Goal Setting: What Works Better?',
    excerpt: 'Comparing traditional goal-setting methods with the Japanese philosophy of purpose-driven living.',
    author: 'Dr. James Wilson',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    category: 'Philosophy',
    image: '/api/placeholder/400/250'
  }
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover practical wisdom, inspiring stories, and evidence-based strategies for finding your ikigai
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📝</div>
                  <div className="text-sm opacity-90">{post.category}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 ml-3">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
} 