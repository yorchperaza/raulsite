'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, CheckCircle, Users, TrendingDown, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Type definitions
interface GalleryImage {
  url: string;
  alt: string;
  category: string;
  title?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

// Sample data - Replace with your actual images
const categories: Category[] = [
  { id: 'driveways', name: 'Driveways', description: 'Custom concrete driveways', icon: '🚗' },
  { id: 'patios', name: 'Patios', description: 'Beautiful outdoor living spaces', icon: '🏡' },
  { id: 'foundations', name: 'Foundations', description: 'Solid foundation work', icon: '🏗️' },
  { id: 'sidewalks', name: 'Sidewalks', description: 'Durable walkways', icon: '🚶' },
  { id: 'stamped', name: 'Stamped Concrete', description: 'Decorative stamped designs', icon: '✨' },
  { id: 'commercial', name: 'Commercial', description: 'Commercial projects', icon: '🏢' },
];

// Sample images - Replace these URLs with your actual image paths
const galleryImages: GalleryImage[] = [
  // Driveways
  { url: '/images/PHOTO-2025-05-25-13-47-04.jpg', alt: 'Concrete Project', category: 'driveways', title: 'Driveway Project' },
  { url: '/images/PHOTO-2025-05-25-13-57-27.jpg', alt: 'Concrete Project', category: 'driveways', title: 'Custom Driveway' },
  { url: '/images/PHOTO-2025-05-25-14-03-21.jpg', alt: 'Concrete Project', category: 'driveways', title: 'Residential Driveway' },
  { url: '/images/PHOTO-2025-05-25-14-09-14.jpg', alt: 'Concrete Project', category: 'driveways', title: 'Driveway Installation' },
  { url: '/images/PHOTO-2025-06-17-17-55-36.jpg', alt: 'Concrete Project', category: 'driveways', title: 'Modern Driveway' },

  // Patios
  { url: '/images/PHOTO-2025-05-25-13-52-05.jpg', alt: 'Concrete Project', category: 'patios', title: 'Patio Project' },
  { url: '/images/PHOTO-2025-05-25-13-58-17.jpg', alt: 'Concrete Project', category: 'patios', title: 'Backyard Patio' },
  { url: '/images/PHOTO-2025-05-25-14-04-55.jpg', alt: 'Concrete Project', category: 'patios', title: 'Custom Patio' },
  { url: '/images/PHOTO-2025-05-25-14-09-25.jpg', alt: 'Concrete Project', category: 'patios', title: 'Outdoor Living Area' },
  { url: '/images/PHOTO-2025-06-17-18-10-58.jpg', alt: 'Concrete Project', category: 'patios', title: 'Patio Extension' },

  // Foundations
  { url: '/images/PHOTO-2025-05-25-13-53-03.jpg', alt: 'Concrete Project', category: 'foundations', title: 'Foundation Work' },
  { url: '/images/PHOTO-2025-05-25-13-58-42.jpg', alt: 'Concrete Project', category: 'foundations', title: 'Concrete Foundation' },
  { url: '/images/PHOTO-2025-05-25-14-05-31.jpg', alt: 'Concrete Project', category: 'foundations', title: 'Foundation Repair' },
  { url: '/images/PHOTO-2025-05-25-14-12-48.jpg', alt: 'Concrete Project', category: 'foundations', title: 'Structural Concrete' },

  // Sidewalks
  { url: '/images/PHOTO-2025-05-25-13-54-50.jpg', alt: 'Concrete Project', category: 'sidewalks', title: 'Sidewalk Project' },
  { url: '/images/PHOTO-2025-05-25-14-00-49.jpg', alt: 'Concrete Project', category: 'sidewalks', title: 'Walkway Installation' },
  { url: '/images/PHOTO-2025-05-25-14-06-15.jpg', alt: 'Concrete Project', category: 'sidewalks', title: 'Custom Walkway' },
  { url: '/images/PHOTO-2025-05-25-14-13-08.jpg', alt: 'Concrete Project', category: 'sidewalks', title: 'Concrete Path' },

  // Stamped Concrete
  { url: '/images/PHOTO-2025-05-25-13-55-41.jpg', alt: 'Concrete Project', category: 'stamped', title: 'Stamped Design' },
  { url: '/images/PHOTO-2025-05-25-14-01-30.jpg', alt: 'Concrete Project', category: 'stamped', title: 'Decorative Concrete' },
  { url: '/images/PHOTO-2025-05-25-14-06-44.jpg', alt: 'Concrete Project', category: 'stamped', title: 'Stamped Patio' },
  { url: '/images/PHOTO-2025-05-25-14-17-41.jpg', alt: 'Concrete Project', category: 'stamped', title: 'Textured Concrete' },

  // Commercial
  { url: '/images/PHOTO-2025-05-25-13-57-12.jpg', alt: 'Concrete Project', category: 'commercial', title: 'Commercial Project' },
  { url: '/images/PHOTO-2025-05-25-14-02-59.jpg', alt: 'Concrete Project', category: 'commercial', title: 'Commercial Flooring' },
  { url: '/images/PHOTO-2025-05-25-14-07-05.jpg', alt: 'Concrete Project', category: 'commercial', title: 'Commercial Paving' },
  { url: '/images/PHOTO-2025-05-25-14-23-52.jpg', alt: 'Concrete Project', category: 'commercial', title: 'Industrial Concrete' },
];

const OnsiteConcreteLanding = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'tabs' | 'inline'>('tabs');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/images/onsiteconcrete.png" 
                alt="Onsite Concrete, Inc." 
                className="h-30 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+13038304684" className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition group">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-orange-200 transition">
                  <Phone className="w-5 h-5" />
                </div>
                (303) 830-4684
              </a>
              <a href="#contact" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg hover:from-orange-700 hover:to-orange-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-orange-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-500/30">
              <span className="text-orange-300 font-semibold">🏆 A+ BBB Rated • 23+ Years Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Concrete Services in <span className="text-orange-400">Denver Metro</span>
            </h2>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              When you choose Onsite Concrete, Inc. for your project you will have confidence 
              that you are working with highly trained, professional craftsmen with over 23 years 
              of combined experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-orange-800 transition shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 font-semibold text-lg">
                Get Free Estimate
              </a>
              <a href="#gallery" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition border-2 border-white/30 font-semibold text-lg">
                View Our Work
              </a>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Onsite Concrete, Inc.</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Excellence in concrete services backed by experience, quality, and customer satisfaction</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Star, title: 'A+ BBB Rated', desc: 'Top-rated service excellence', color: 'from-yellow-400 to-orange-500' },
              { icon: CheckCircle, title: '100% Satisfaction', desc: 'Guaranteed quality work', color: 'from-green-400 to-emerald-500' },
              { icon: Users, title: 'Professional Workers', desc: '15+ years same crew', color: 'from-blue-400 to-cyan-500' },
              { icon: TrendingDown, title: 'Competitive Prices', desc: 'Best value guaranteed', color: 'from-purple-400 to-pink-500' },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 rounded-3xl p-10 shadow-xl border border-orange-200">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Commitment</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Professional, bonded and insured to work in all Denver metro area municipalities',
                    'Solid relationships with inspectors assuring your project is done correctly – every time',
                    'Competitive pricing through vendor relationships, savings passed to you'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Same professional crew for the last 15 years',
                    'Trained and knowledgeable in all aspects of concrete work',
                    'Supervisors and crew members are industry-trained professionals'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Work Gallery</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Browse through our portfolio of completed projects showcasing quality craftsmanship</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                viewMode === 'tabs' 
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-orange-500/50 scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
              }`}
            >
              Tabs View
            </button>
            <button
              onClick={() => setViewMode('inline')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                viewMode === 'inline' 
                  ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-orange-500/50 scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
              }`}
            >
              Inline View
            </button>
          </div>

          {/* Tabs View */}
          {viewMode === 'tabs' && (
            <div>
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === 'all'
                      ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/50 scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border border-gray-200'
                  }`}
                >
                  <span className="mr-2">🎨</span>
                  All Projects
                  {activeTab === 'all' && <span className="ml-2 text-sm">({galleryImages.length})</span>}
                </button>
                {categories.map(cat => {
                  const count = galleryImages.filter(img => img.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`group px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === cat.id
                          ? 'bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg shadow-orange-500/50 scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg border border-gray-200'
                      }`}
                    >
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                      {activeTab === cat.id && <span className="ml-2 text-sm">({count})</span>}
                    </button>
                  );
                })}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
                    onClick={() => openLightbox(idx)}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/600x450/e5e5e5/666666?text=${encodeURIComponent(img.alt)}`;
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <ZoomIn className="w-5 h-5 text-orange-600" />
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-bold text-xl mb-1">{img.title || img.alt}</h3>
                        <p className="text-sm text-gray-300">
                          {categories.find(c => c.id === img.category)?.name}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Card Info */}
                    <div className="p-4 bg-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{img.title || img.alt}</h4>
                          <p className="text-xs text-gray-500">{categories.find(c => c.id === img.category)?.name}</p>
                        </div>
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition">
                          <ZoomIn className="w-4 h-4 text-orange-600 group-hover:text-white transition" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inline View */}
          {viewMode === 'inline' && (
            <div className="space-y-20">
              {categories.map(cat => {
                const categoryImages = galleryImages.filter(img => img.category === cat.id);
                if (categoryImages.length === 0) return null;
                
                return (
                  <div key={cat.id} className="scroll-mt-20">
                    <div className="mb-8 text-center">
                      <div className="inline-flex items-center justify-center space-x-3 mb-4">
                        <span className="text-4xl">{cat.icon}</span>
                        <h3 className="text-4xl font-bold text-gray-800">{cat.name}</h3>
                      </div>
                      <p className="text-gray-600 text-lg">{cat.description}</p>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryImages.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
                          onClick={() => {
                            const globalIndex = galleryImages.findIndex(gi => gi.url === img.url);
                            openLightbox(globalIndex);
                          }}
                        >
                          <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                            <img
                              src={img.url}
                              alt={img.alt}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/600x450/e5e5e5/666666?text=${encodeURIComponent(img.alt)}`;
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            
                            <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                              <ZoomIn className="w-5 h-5 text-orange-600" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                              <h3 className="font-bold text-xl mb-1">{img.title || img.alt}</h3>
                            </div>
                          </div>

                          <div className="p-4 bg-white">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-800 text-sm">{img.title || img.alt}</h4>
                              </div>
                              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition">
                                <ZoomIn className="w-4 h-4 text-orange-600 group-hover:text-white transition" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition group z-50"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition group z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition group z-50"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Image */}
          <div className="max-w-6xl max-h-[90vh] w-full flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <img
                src={filteredImages[currentImageIndex].url}
                alt={filteredImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/1200x900/e5e5e5/666666?text=${encodeURIComponent(filteredImages[currentImageIndex].alt)}`;
                }}
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold mb-2">
                {filteredImages[currentImageIndex].title || filteredImages[currentImageIndex].alt}
              </h3>
              <p className="text-gray-300 mb-3">
                {categories.find(c => c.id === filteredImages[currentImageIndex].category)?.name}
              </p>
              <p className="text-gray-400 text-sm">
                Image {currentImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
            {filteredImages.slice(Math.max(0, currentImageIndex - 3), Math.min(filteredImages.length, currentImageIndex + 4)).map((img, idx) => {
              const actualIdx = Math.max(0, currentImageIndex - 3) + idx;
              return (
                <button
                  key={actualIdx}
                  onClick={() => setCurrentImageIndex(actualIdx)}
                  className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                    actualIdx === currentImageIndex 
                      ? 'ring-4 ring-orange-500 scale-110' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/100x100/e5e5e5/666666?text=${encodeURIComponent(img.alt)}`;
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Contact Section - REST OF THE CODE CONTINUES... */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get A Free Estimate</h2>
            <p className="text-gray-600 text-lg">Contact Onsite Concrete, Inc. We'll be glad to help.</p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              {[
                { icon: MapPin, title: 'Our Address', content: '2196 W Iliff Ave\nEnglewood, CO 80110', color: 'from-red-500 to-orange-500' },
                { icon: Phone, title: 'Call Us', content: '+1 (303) 830-4684', link: 'tel:+13038304684', color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: 'Send Us an Email', content: 'Onsite.c@hotmail.com', link: 'mailto:Onsite.c@hotmail.com', color: 'from-blue-500 to-cyan-500' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-orange-600 hover:text-orange-700 font-semibold transition">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 p-8 rounded-2xl border border-orange-200 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">Business Hours</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-2 border-b border-orange-200">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-orange-200">
                    <span className="font-semibold">Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    data-lpignore="true"
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    data-lpignore="true"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    data-lpignore="true"
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    placeholder="(303) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">OC</span>
                </div>
                <h3 className="text-2xl font-bold">Onsite Concrete, Inc.</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional concrete services in Denver metro area with over 23 years of combined experience. 
                Quality workmanship guaranteed on every project.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Services</h4>
              <ul className="space-y-3 text-gray-400">
                {categories.map(cat => (
                  <li key={cat.id} className="hover:text-orange-400 transition cursor-pointer">
                    <span className="mr-2">{cat.icon}</span>
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-orange-500 flex-shrink-0" />
                  <span>2196 W Iliff Ave<br />Englewood, CO 80110</span>
                </li>
                <li>
                  <a href="tel:+13038304684" className="flex items-center text-orange-400 hover:text-orange-300 transition">
                    <Phone className="w-5 h-5 mr-3" />
                    (303) 830-4684
                  </a>
                </li>
                <li>
                  <a href="mailto:Onsite.c@hotmail.com" className="flex items-center text-orange-400 hover:text-orange-300 transition">
                    <Mail className="w-5 h-5 mr-3" />
                    Onsite.c@hotmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Onsite Concrete, Inc. All rights reserved. 
              <span className="mx-2">•</span>
              <span className="text-orange-400">A+ BBB Rated</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnsiteConcreteLanding;
