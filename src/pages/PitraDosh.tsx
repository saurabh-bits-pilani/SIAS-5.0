import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Users, Calendar, Heart, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const PitraDosh = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Dynamic media links - easy to update when needed
  const mediaLinks = {
    heroImage: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/ultra_realistic_scene_of_an_ancestral_portrait_wall.jpeg',
    symptomsImages: [
      {
        url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/Symptoms%20of%20Pitra%20Dosh-%201.webp',
        title: 'Pitra Dosh Symptoms - Family Issues',
        description: 'Common symptoms include family disputes, health problems, and financial difficulties'
      },
      {
        url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/Symptoms%20of%20Pitra%20Dosh-2.webp',
        title: 'Pitra Dosh Effects - Life Obstacles',
        description: 'Persistent obstacles in career, marriage delays, and chronic health issues'
      }
    ],
    ritualImages: [
      {
        url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/ultra_realistic_image_of_a_half_prepared_shraddha_ceremony%20(1).webp',
        title: 'Shraddha Ceremony Preparation',
        description: 'Traditional Shraddha ceremony setup for ancestral worship and Pitra Dosh remedy'
      },
      {
        url: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/ultra_realistic_image_of_a_half_prepared_shraddha_ceremony.webp',
        title: 'Complete Shraddha Ritual',
        description: 'Complete Shraddha ceremony with all traditional elements for Pitra Dosh mitigation'
      }
    ],
    mantraAudio: 'https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/Pitru%20Gayatri%20Mantra%20With%20Lyrics%20%EF%BD%9C%20%E0%A4%AA%E0%A4%BF%E0%A4%A4%E0%A5%83%20%E0%A4%97%E0%A4%BE%E0%A4%AF%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%AE%E0%A4%82%E0%A4%A4%E0%A5%8D%E0%A4%B0%20%EF%BD%9C%20Seek%20Blessings%20From%20Ancestors%20%EF%BD%9C%20Pitru%20Paksha.mp3',
    easyTarpanVidhiVideo: 'https://pub-6dc6a649f1bd48ceb877305103f5ac87.r2.dev/Pitra%20-%20WebP/Easy%20tarpan%20vidhi%202.mp4'
  };

  const allImages = [...mediaLinks.symptomsImages, ...mediaLinks.ritualImages];

  const handlePlayPause = () => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setIsPlaying(false);
    }

    if (!isPlaying) {
      const audio = new Audio(mediaLinks.mantraAudio);
      audio.addEventListener('loadstart', () => {
        // Audio started loading
      });
      audio.addEventListener('canplay', () => {
        audio.play();
        setIsPlaying(true);
        setCurrentAudio(audio);
      });
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      });
      audio.addEventListener('error', () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <>
      <SEOHead
        title="Pitra Dosh - Causes, Symptoms & Remedies | Soul Infinity"
        description="Learn about Pitra Dosh, its causes, symptoms, and effective remedies. Discover traditional Shraddha ceremonies and mantras to seek ancestral blessings with Soul Infinity."
        keywords="pitra dosh, ancestral karma, shraddha ceremony, pitru paksha, ancestral blessings, pitra dosh remedy, soul infinity, saurabh jain, vedic rituals"
        image={mediaLinks.heroImage}
      />

      {/* Breadcrumb */}
      <section className="bg-surface py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/gallery" className="text-gray-500 hover:text-gray-700">Gallery</Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary-600 font-medium">Pitra Dosh</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mediaLinks.heroImage}
            alt="Ancestral Portrait Wall - Pitra Dosh" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Link
              to="/gallery"
              className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Gallery
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading font-bold text-4xl md:text-5xl mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-300">Pitra Dosh</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-6"
            >
              Understanding Ancestral Karma and Its Remedies Through Traditional Vedic Wisdom
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-orange-200"
            >
              पितृभ्यो नमः। श्राद्धं कुर्वन्ति ये मर्त्याः पितृलोकं व्रजन्ति ते॥
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">What is Pitra Dosh?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pitra Dosh is a karmic condition in Vedic astrology that occurs when the souls of our ancestors 
              are not at peace. This cosmic imbalance can create obstacles in various aspects of life, 
              from health and wealth to relationships and spiritual growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Ancestral Connection</h3>
              <p className="text-gray-600">Spiritual connection with our departed ancestors affects our life journey</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Generational Impact</h3>
              <p className="text-gray-600">Karmic patterns passed down through generations create life challenges</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Heart className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg mb-2">Healing Remedies</h3>
              <p className="text-gray-600">Traditional rituals and mantras can bring peace to ancestral souls</p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Signs and Symptoms</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognizing the signs of Pitra Dosh can help you understand the root cause of persistent life challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900">Common Manifestations</h3>
              <ul className="space-y-4">
                {[
                  'Persistent family disputes and lack of harmony',
                  'Chronic health issues without clear medical cause',
                  'Financial instability despite hard work',
                  'Delays in marriage or relationship problems',
                  'Career obstacles and lack of professional growth',
                  'Childlessness or difficulties in childbirth',
                  'Recurring nightmares or disturbed sleep',
                  'Feeling of negative presence in the home'
                ].map((symptom, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaLinks.symptomsImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-soft"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-bold text-white text-sm mb-1">{image.title}</h4>
                      <p className="text-gray-200 text-xs">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Root Causes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the origins of Pitra Dosh helps in applying the right remedies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Neglect of Ancestral Rituals',
                description: 'Not performing proper last rites or annual Shraddha ceremonies for departed ancestors',
                icon: '🕯️'
              },
              {
                title: 'Unfulfilled Ancestral Wishes',
                description: 'When ancestors had strong unfulfilled desires or died in traumatic circumstances',
                icon: '💭'
              },
              {
                title: 'Disrespect to Parents/Elders',
                description: 'Treating parents, grandparents, or elderly family members with disrespect',
                icon: '👴'
              },
              {
                title: 'Breaking Family Traditions',
                description: 'Abandoning important family customs and spiritual practices',
                icon: '⛩️'
              },
              {
                title: 'Karmic Inheritance',
                description: 'Negative karma passed down from previous generations affecting the family lineage',
                icon: '🔄'
              },
              {
                title: 'Improper Funeral Rites',
                description: 'Incomplete or incorrect performance of last rites and post-death ceremonies',
                icon: '🙏'
              }
            ].map((cause, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{cause.icon}</div>
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{cause.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cause.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remedies Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Traditional Remedies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Time-tested Vedic remedies to appease ancestors and remove Pitra Dosh from your life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="font-heading font-bold text-2xl text-gray-900">Ritual Remedies</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Shraddha Ceremony',
                    description: 'Annual ritual during Pitru Paksha to honor and feed the ancestors',
                    importance: 'Most Important'
                  },
                  {
                    title: 'Pitra Gayatri Mantra',
                    description: 'Sacred chanting to seek forgiveness and blessings from ancestors',
                    importance: 'Daily Practice'
                  },
                  {
                    title: 'Food Donation (Anna Daan)',
                    description: 'Feeding the poor, especially Brahmins, on auspicious days',
                    importance: 'Highly Effective'
                  },
                  {
                    title: 'Gaya Shraddha',
                    description: 'Performing Shraddha at sacred places like Gaya for maximum benefit',
                    importance: 'Powerful Remedy'
                  }
                ].map((remedy, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-gray-900">{remedy.title}</h4>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {remedy.importance}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{remedy.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mediaLinks.ritualImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-soft"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-bold text-white text-sm mb-1">{image.title}</h4>
                      <p className="text-gray-200 text-xs">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mantra Section */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
            <h3 className="font-heading font-bold text-2xl text-gray-900 mb-6">
              Pitra Gayatri Mantra
            </h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
              <p className="text-lg text-gray-800 leading-relaxed font-medium devanagari mb-4">
                ॐ पितृगणाय विद्महे जगत्धराय धीमहि तन्नो पितृः प्रचोदयात्॥
              </p>
              <p className="text-gray-600 italic">
                "Om Pitruganaya Vidmahe Jagat Dharaya Dhimahi Tanno Pitruh Prachodayat"
              </p>
            </div>
            
            <div className="text-center mb-6">
              <button
                onClick={handlePlayPause}
                aria-label={isPlaying ? 'Pause Pitra Gayatri Mantra' : 'Play Pitra Gayatri Mantra'}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isPlaying
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-6 h-6" />
                    <span>Pause Chanting</span>
                  </>
                ) : (
                  <>
                    <Play className="w-6 h-6" />
                    <span>Listen to Mantra</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-gray-700">
              Chant this powerful mantra 108 times daily to seek forgiveness and blessings from your ancestors
            </p>
          </div>
        </div>
      </section>
      {/* Practical Guidance Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Practical Guidance: Easy Tarpan Vidhi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch this step-by-step demonstration of the traditional Tarpan ritual, 
              an essential practice for honoring ancestors and mitigating Pitra Dosh effects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-soft">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Pitra%20-%20WebP/ultra_realistic_image_of_a_half_prepared_shraddha_ceremony.webp"
                >
                  <source src={mediaLinks.easyTarpanVidhiVideo} type="video/mp4" />
                  Your browser does not support the video tag. Please update your browser or 
                  <a href={mediaLinks.easyTarpanVidhiVideo} className="text-blue-500 underline">
                    download the video directly
                  </a>.
                </video>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Step-by-Step Tarpan Ritual Demonstration
                </h3>
                <p className="text-gray-600 mb-4">
                  This video provides clear instructions on performing the Tarpan ritual, 
                  which involves offering water and prayers to ancestors for their peace and blessings.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🕒</div>
                    <h4 className="font-semibold text-gray-900">Best Time</h4>
                    <p className="text-sm text-gray-600">Early morning or during Pitru Paksha</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🙏</div>
                    <h4 className="font-semibold text-gray-900">Purpose</h4>
                    <p className="text-sm text-gray-600">Honor ancestors and seek their blessings</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💧</div>
                    <h4 className="font-semibold text-gray-900">Materials</h4>
                    <p className="text-sm text-gray-600">Sacred water, rice, and prayers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Tips */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-heading font-bold text-lg text-yellow-800 mb-3 flex items-center">
                <span className="mr-2">💡</span>
                Important Tips for Tarpan Ritual
              </h4>
              <ul className="text-yellow-700 space-y-2">
                <li>• Perform the ritual with complete devotion and pure intentions</li>
                <li>• Face east or south direction while performing Tarpan</li>
                <li>• Use clean, preferably sacred water (Ganga Jal if available)</li>
                <li>• Chant the names of your ancestors while offering water</li>
                <li>• Conclude with prayers for their peace and your family's well-being</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Sacred Imagery</span>
            </h2>
            <p className="text-xl text-gray-600">
              Visual representations of Pitra Dosh symptoms and remedial ceremonies
            </p>
          </motion.div>

          {/* Image Carousel */}
          <div className="relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft"
            >
              <div className="relative">
                <img
                  src={allImages[currentImageIndex].url}
                  alt={allImages[currentImageIndex].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading font-bold text-xl mb-2">
                    {allImages[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-200">
                    {allImages[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ArrowRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Remedies */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-gray-900 mb-8 text-center">
            Additional Spiritual Remedies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary-300 hover:ring-opacity-75 border border-blue-100">
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🌿</span>
                Charitable Acts
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Donate food to the needy on Amavasya days</li>
                <li>• Feed crows and dogs regularly</li>
                <li>• Plant trees in memory of ancestors</li>
                <li>• Support elderly people in need</li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary-300 hover:ring-opacity-75 border border-blue-100">
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🕉️</span>
                Spiritual Practices
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular meditation and prayer</li>
                <li>• Visit temples dedicated to Lord Vishnu</li>
                <li>• Perform Rudrabhishek on Mondays</li>
                <li>• Maintain family photographs with respect</li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary-300 hover:ring-opacity-75 border border-blue-100">
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📅</span>
                Timing Considerations
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pitru Paksha (September-October) is most effective</li>
                <li>• Amavasya days for regular offerings</li>
                <li>• Death anniversary dates of ancestors</li>
                <li>• Ekadashi days for fasting and prayers</li>
              </ul>
            </div>

            <div className="group bg-white rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-primary-300 hover:ring-opacity-75 border border-blue-100">
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4 flex items-center">
                <span className="mr-2">🔮</span>
                Professional Help
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Consult experienced astrologers</li>
                <li>• Perform remedies under expert guidance</li>
                <li>• Get birth chart analysis for specific remedies</li>
                <li>• Regular follow-up and monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://pub-5d1db6c95ad0491c90e15290c1e62703.r2.dev/Spritual/Cosmic%20Music.jpg" 
            alt="Cosmic Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-yellow-200">Need Guidance for Pitra Dosh?</span>
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get personalized analysis and specific remedies for your family's ancestral karma patterns. 
            Saurabh Jain can help identify and resolve Pitra Dosh through authentic Vedic methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#contact-form-section"
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Book Consultation
            </a>
            <a
              href="https://wa.me/919079053840?text=Hi, I need guidance regarding Pitra Dosh and ancestral remedies"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PitraDosh;