'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the email to your newsletter service
    setIsSubscribed(true)
    setEmail('')
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="text-4xl mb-4">🎁</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Ikigai Starter Kit
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join 25,000+ people who receive our weekly insights, exclusive tools, and early access to new resources.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
              >
                Get Free Kit
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-3">
              ✨ Includes: 7-Day Ikigai Challenge, Values Assessment, and Weekly Inspiration
            </p>
          </form>
        ) : (
          <div className="bg-green-500 bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="text-xl font-semibold mb-2">Welcome to the Community!</h3>
            <p className="text-blue-100">
              Check your email for your free Ikigai Starter Kit. We're excited to help you on your journey!
            </p>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">📧</div>
            <h4 className="font-semibold mb-2">Weekly Insights</h4>
            <p className="text-blue-200 text-sm">Practical tips and strategies for finding your ikigai</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold mb-2">Exclusive Tools</h4>
            <p className="text-blue-200 text-sm">Early access to new assessments and resources</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🤝</div>
            <h4 className="font-semibold mb-2">Community Access</h4>
            <p className="text-blue-200 text-sm">Connect with like-minded people on the same journey</p>
          </div>
        </div>
      </div>
    </section>
  )
} 