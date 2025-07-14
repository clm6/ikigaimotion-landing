interface Course {
  id: string
  title: string
  instructor: string
  rating: number
  students: string
  description: string
  image: string
  category: string
}

const courses: Course[] = [
  {
    id: '1',
    title: 'The Science of Well-Being',
    instructor: 'Laurie Santos',
    rating: 4.9,
    students: '4.2M',
    description: 'Learn the science behind happiness and well-being. Discover research-based strategies to increase your happiness and build more productive habits.',
    image: '/api/placeholder/300/200',
    category: 'Psychology & Personal Development'
  },
  {
    id: '2',
    title: 'Learning How to Learn',
    instructor: 'Barbara Oakley',
    rating: 4.8,
    students: '3.8M',
    description: 'Master powerful mental tools to help you tackle any subject. Learn how to learn more effectively and overcome mental barriers.',
    image: '/api/placeholder/300/200',
    category: 'Learning & Study Skills'
  },
  {
    id: '3',
    title: 'Mindfulness and Resilience to Stress',
    instructor: 'Dr. Elizabeth A. Stanley',
    rating: 4.7,
    students: '2.1M',
    description: 'Develop mindfulness practices to build resilience and manage stress effectively. Learn evidence-based techniques for mental well-being.',
    image: '/api/placeholder/300/200',
    category: 'Mindfulness & Stress Management'
  }
]

export default function CourseRecommendations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recommended Courses for Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated courses to help you discover your ikigai and develop the skills you need to thrive
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-sm opacity-90">{course.category}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">{course.rating}</span>
                  <span className="text-sm text-gray-500 ml-2">({course.students} students)</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                <p className="text-gray-700 mb-4">{course.description}</p>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 