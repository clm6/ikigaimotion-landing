export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Discover Your Ikigai?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join thousands of people who have transformed their lives by finding their true purpose. 
          Start your journey today with our curated learning resources.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a 
            href="https://coursera.org/affiliate-link-placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105 inline-block"
          >
            Start Learning Today
          </a>
          <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">
            Get Free Resources
          </button>
        </div>
        
        <div className="bg-white bg-opacity-10 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2">🎁 Special Offer</h3>
          <p className="text-blue-100 text-sm">
            Get 20% off your first course when you enroll through our affiliate link. 
            Plus, receive exclusive ikigai discovery worksheets.
          </p>
        </div>
        
        <div className="mt-8 text-sm text-blue-200">
          <p>* Affiliate link - we may earn a commission at no extra cost to you</p>
        </div>
      </div>
    </section>
  )
} 