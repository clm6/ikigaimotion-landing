'use client'

import { useState } from 'react'

interface Tool {
  id: string
  title: string
  description: string
  icon: string
  type: 'calculator' | 'quiz' | 'download' | 'interactive'
}

const tools: Tool[] = [
  {
    id: '1',
    title: 'Ikigai Discovery Quiz',
    description: 'Take our 10-minute assessment to identify your core values, strengths, and potential ikigai areas.',
    icon: '🧠',
    type: 'quiz'
  },
  {
    id: '2',
    title: 'Life Purpose Calculator',
    description: 'Analyze your current life satisfaction across 8 key dimensions and get personalized recommendations.',
    icon: '📊',
    type: 'calculator'
  },
  {
    id: '3',
    title: 'Goal Achievement Tracker',
    description: 'Track your progress toward meaningful goals with our interactive dashboard and milestone system.',
    icon: '🎯',
    type: 'interactive'
  },
  {
    id: '4',
    title: 'Free Ikigai Workbook',
    description: 'Download our comprehensive 30-page workbook with exercises, worksheets, and reflection prompts.',
    icon: '📖',
    type: 'download'
  },
  {
    id: '5',
    title: 'Values Assessment Tool',
    description: 'Discover your core values and how they align with your career, relationships, and life choices.',
    icon: '💎',
    type: 'quiz'
  },
  {
    id: '6',
    title: 'Habit Formation Tracker',
    description: 'Build positive habits that support your ikigai with our 21-day challenge tracker and reminders.',
    icon: '🌱',
    type: 'interactive'
  }
]

export default function ToolsSection() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const handleToolClick = (toolId: string) => {
    setSelectedTool(toolId)
    // In a real app, this would open the tool or navigate to it
  }

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Tools & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your ikigai with our proven tools, assessments, and downloadable resources
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              onClick={() => handleToolClick(tool.id)}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-blue-100 hover:border-blue-200"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {tool.type}
                </span>
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                  {tool.type === 'download' ? 'Download' : 'Start Now'} →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Tool Preview */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">🎯 Featured: Ikigai Discovery Quiz</h3>
                <p className="text-blue-100 mb-6">
                  Take our most popular assessment and discover your unique ikigai profile. 
                  Get personalized insights and actionable recommendations in just 10 minutes.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                    Take Quiz Now
                  </button>
                  <span className="text-blue-200 text-sm">✨ 50,000+ people have taken this quiz</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🧠</div>
                <div className="text-blue-200">
                  <div className="text-2xl font-bold">10 minutes</div>
                  <div className="text-sm">to discover your purpose</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 