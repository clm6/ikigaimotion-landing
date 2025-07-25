'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">Ikigai Motion</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('tools')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Tools
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Community
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('tools')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Tools
              </button>
              <button 
                onClick={() => scrollToSection('community')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Community
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 