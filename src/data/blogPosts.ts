export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  youtubeUrl?: string
  tags: string[]
  slug?: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Tools That Helped Me Find My Purpose',
    excerpt: 'Discover the exact tools and resources that transformed my journey from confusion to clarity. From personality assessments to goal-tracking apps, these are the game-changers that made all the difference.',
    author: 'Craig Martinez',
    date: 'Jan 20, 2024',
    readTime: '8 min read',
    category: 'Personal Development',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example1',
    tags: ['purpose', 'tools', 'self-discovery', 'productivity'],
    slug: 'top-5-tools-find-purpose',
    featured: true
  },
  {
    id: '2',
    title: 'Best Courses to Discover Your Ikigai',
    excerpt: 'Curated list of the most effective online courses that will guide you through the ikigai discovery process. From Coursera to Udemy, find the perfect course for your learning style.',
    author: 'Craig Martinez',
    date: 'Jan 18, 2024',
    readTime: '6 min read',
    category: 'Learning',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example2',
    tags: ['courses', 'ikigai', 'learning', 'online-education'],
    slug: 'best-courses-discover-ikigai',
    featured: true
  },
  {
    id: '3',
    title: 'Daily Journaling Prompts for Self-Discovery',
    excerpt: 'Transform your journaling practice with these 30 powerful prompts designed to unlock your deepest desires, values, and potential. Perfect for beginners and experienced journalers alike.',
    author: 'Craig Martinez',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
    category: 'Mindfulness',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    tags: ['journaling', 'self-discovery', 'mindfulness', 'daily-practice'],
    slug: 'daily-journaling-prompts-self-discovery',
    featured: true
  },
  {
    id: '4',
    title: 'How to Create Your Personal Ikigai Map',
    excerpt: 'Step-by-step guide to mapping out your unique ikigai using our proven framework. Includes downloadable templates and real examples from successful transformations.',
    author: 'Craig Martinez',
    date: 'Jan 12, 2024',
    readTime: '10 min read',
    category: 'Guides',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example4',
    tags: ['ikigai-map', 'planning', 'goal-setting', 'templates'],
    slug: 'create-personal-ikigai-map'
  },
  {
    id: '5',
    title: 'The Science Behind Japanese Longevity and Ikigai',
    excerpt: 'Explore the fascinating research connecting ikigai principles to the remarkable longevity of Okinawan centenarians. Learn how purpose-driven living extends both quality and quantity of life.',
    author: 'Craig Martinez',
    date: 'Jan 10, 2024',
    readTime: '7 min read',
    category: 'Research',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example5',
    tags: ['longevity', 'japanese-culture', 'research', 'wellness'],
    slug: 'science-japanese-longevity-ikigai'
  },
  {
    id: '6',
    title: 'From Burnout to Purpose: My Personal Journey',
    excerpt: 'An honest account of my own transformation from corporate burnout to finding true purpose. The challenges, breakthroughs, and lessons learned along the way.',
    author: 'Craig Martinez',
    date: 'Jan 8, 2024',
    readTime: '12 min read',
    category: 'Success Stories',
    image: '/api/placeholder/400/250',
    youtubeUrl: 'https://www.youtube.com/watch?v=example6',
    tags: ['burnout', 'personal-story', 'transformation', 'career-change'],
    slug: 'burnout-to-purpose-personal-journey'
  }
]

// Helper functions for blog management
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured)

export const getPostsByCategory = (category: string) => 
  blogPosts.filter(post => post.category === category)

export const getPostsByTag = (tag: string) => 
  blogPosts.filter(post => post.tags.includes(tag))

export const getPostBySlug = (slug: string) => 
  blogPosts.find(post => post.slug === slug)

// Template for adding new blog posts
export const createNewBlogPost = (post: Omit<BlogPost, 'id'>): BlogPost => {
  const newId = (blogPosts.length + 1).toString()
  return {
    ...post,
    id: newId
  }
}

// Example of how to add a new blog post:
/*
const newPost = createNewBlogPost({
  title: 'Your New Blog Post Title',
  excerpt: 'A compelling excerpt that describes what the post is about...',
  author: 'Craig Martinez',
  date: 'Jan 25, 2024',
  readTime: '5 min read',
  category: 'Personal Development',
  image: '/api/placeholder/400/250',
  youtubeUrl: 'https://www.youtube.com/watch?v=your-video-id',
  tags: ['tag1', 'tag2', 'tag3'],
  slug: 'your-new-blog-post-slug',
  featured: false
})

// Then add it to the blogPosts array
blogPosts.push(newPost)
*/ 