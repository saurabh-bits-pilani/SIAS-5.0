import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock blog posts with your custom images
  const mockPosts = [
    {
      id: '1',
      title: 'Ketu: The Hidden Power Within You',
      description: 'Explore the profound significance of Ketu, the south lunar node, and its role in spiritual detachment, healing, and unlocking hidden powers within your astrological chart. Discover how embracing Ketu\'s energy can lead to self-realization and inner peace.',
      image: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Blog%20Images-%20Ancient%20Wisdom/2_rahu_ketu_mysteries_prompt_twin_shadowy_serpents_coiling.jpeg',
      publishedAt: new Date('2024-01-20'),
      readTime: '6 min read',
      category: 'Vedic Astrology',
      url: 'https://medium.com/@saurabhiim/ketu-the-hidden-power-within-you-093cc5156747',
      excerpt: 'Explore the profound significance of Ketu, the south lunar node, and its role in spiritual detachment, healing, and unlocking hidden powers within your astrological chart. Discover how embracing Ketu\'s energy can lead to self-realization and inner peace.',
      featured: true
    }
  ];

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const categories = ['All', 'Vedic Astrology', 'Planetary Wisdom', 'Spiritual Growth', 'Modern Applications', 'Remedial Measures'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest insights...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Spiritual Blog - Astrology Insights & Ancient Wisdom | Soul Infinity"
        description="Explore our collection of articles on Vedic astrology, spiritual growth, planetary wisdom, and cosmic insights by Saurabh Jain to support your spiritual journey."
        keywords="spiritual blog, astrology articles, vedic astrology insights, saurabh jain blog, planetary wisdom, spiritual growth, cosmic guidance"
       image="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Blog%20Images-%20Ancient%20Wisdom/2_rahu_ketu_mysteries_prompt_twin_shadowy_serpents_coiling.jpeg"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/New_Hero-image-%20banner%20/banner%2021.webp" 
            alt="Spiritual Background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">Cosmic Wisdom</span> Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto"
            >
              शुभं करोति कल्याणं आरोग्यं धनसंपदा। शत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तुते॥
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-soft-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(featuredPost.publishedAt, 'MMM dd, yyyy')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={featuredPost.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center w-fit"
                  >
                    Read Full Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </span>
            </h2>
            <p className="text-gray-600">
              Dive deeper into the world of spiritual wisdom and cosmic insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 line-clamp-2 hover:text-primary-800 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{format(post.publishedAt, 'MMM dd')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-800 font-semibold hover:text-primary-700 transition-colors group"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Spritual/Cosmic%20Music%20-2.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-300">Stay Connected to Cosmic Wisdom</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get the latest spiritual insights, astrology updates, and healing wisdom delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-primary-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;