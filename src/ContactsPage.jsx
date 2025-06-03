import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Send,
  MessageCircle,
  Users,
  Calendar,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Building,
  User,
  AlertCircle,
  CheckCircle,
  Heart,
  Briefcase,
  HelpCircle,
  Newspaper
} from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function ContactsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    newsletter: false
  });
  const [formStatus, setFormStatus] = useState('');

  const offices = [
    {
      city: "Nairobi",
      country: "Kenya",
      address: "Green Park Towers, 15th Floor\nUpper Hill Road\nNairobi, Kenya",
      phone: "+254 20 123 4567",
      email: "nairobi@lindawanyama.org",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM EAT",
      image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=400&h=300&fit=crop",
      isPrimary: true,
      languages: ["English", "Swahili", "Kikuyu"]
    },
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Conservation Way\nGreen Valley, CA 90210\nUnited States",
      phone: "+1 (555) 123-4567",
      email: "usa@lindawanyama.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM PST",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      isPrimary: false,
      languages: ["English", "Spanish"]
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "Conservation House\n45 Regent Street\nLondon W1B 2QR\nUnited Kingdom",
      phone: "+44 20 7123 4567",
      email: "uk@lindawanyama.org",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      isPrimary: false,
      languages: ["English", "French", "German"]
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "Edifício Verde\nAvenida Paulista, 1000\nSão Paulo, SP 01310-100\nBrazil",
      phone: "+55 11 1234 5678",
      email: "brazil@lindawanyama.org",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM BRT",
      image: "https://images.unsplash.com/photo-1541344237750-e323105b2b95?w=400&h=300&fit=crop",
      isPrimary: false,
      languages: ["Portuguese", "English", "Spanish"]
    }
  ];

  const contactCategories = [
    {
      title: "General Inquiries",
      description: "Questions about our work, programs, or organization",
      icon: HelpCircle,
      color: "blue",
      email: "info@lindawanyama.org"
    },
    {
      title: "Partnerships",
      description: "Corporate partnerships, collaborations, and sponsorships",
      icon: Briefcase,
      color: "emerald",
      email: "partnerships@lindawanyama.org"
    },
    {
      title: "Donations",
      description: "Support our mission through financial contributions",
      icon: Heart,
      color: "red",
      email: "donations@lindawanyama.org"
    },
    {
      title: "Volunteer",
      description: "Join our conservation efforts as a volunteer",
      icon: Users,
      color: "purple",
      email: "volunteer@lindawanyama.org"
    },
    {
      title: "Media & Press",
      description: "Press releases, interviews, and media inquiries",
      icon: Newspaper,
      color: "orange",
      email: "media@lindawanyama.org"
    },
    {
      title: "Emergency",
      description: "Urgent conservation issues or wildlife emergencies",
      icon: AlertCircle,
      color: "red",
      phone: "+254 700 123 456"
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", followers: "2.5M", color: "blue" },
    { name: "Twitter", icon: Twitter, url: "#", followers: "1.8M", color: "sky" },
    { name: "Instagram", icon: Instagram, url: "#", followers: "3.2M", color: "pink" },
    { name: "LinkedIn", icon: Linkedin, url: "#", followers: "850K", color: "blue" },
    { name: "YouTube", icon: Youtube, url: "#", followers: "1.2M", color: "red" }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        newsletter: false
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }, 1500);
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
        {/* Navigation Bar */}
        <Nav></Nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-teal-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Get In
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 animate-fade-in-up animation-delay-300">
            Ready to make a difference? We're here to connect, collaborate, and create lasting change together.
          </p>
          
          {/* Quick Contact Icons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-600">
            <a href="tel:+254201234567" className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Phone className="h-5 w-5 mr-3" />
              <span>Call Us</span>
            </a>
            <a href="mailto:info@lindawanyama.org" className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Mail className="h-5 w-5 mr-3" />
              <span>Email Us</span>
            </a>
            <button className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <MessageCircle className="h-5 w-5 mr-3" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Categories */}
      <section id="categories" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Can We
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Help You?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the category that best describes your inquiry for faster, more personalized assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${category.color}-400 to-${category.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.email && (
                    <a href={`mailto:${category.email}`} className={`text-${category.color}-600 hover:text-${category.color}-800 font-medium flex items-center`}>
                      <Mail className="h-4 w-4 mr-2" />
                      {category.email}
                    </a>
                  )}
                  {category.phone && (
                    <a href={`tel:${category.phone}`} className={`text-${category.color}-600 hover:text-${category.color}-800 font-medium flex items-center`}>
                      <Phone className="h-4 w-4 mr-2" />
                      {category.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiries</option>
                      <option value="partnerships">Partnerships</option>
                      <option value="donations">Donations</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="media">Media & Press</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us more about your inquiry or how we can help..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Subscribe to our newsletter for conservation updates
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="flex items-center text-green-600 bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
              </form>
            
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
              
              {/* Quick Contact Info */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">Main: +254 20 123 4567</p>
                    <p className="text-gray-600">Emergency: +254 700 123 456</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@lindawanyama.org</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM EAT</p>
                    <p className="text-sm text-gray-500">Closed on Sundays and holidays</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center p-4 bg-${social.color}-50 rounded-xl hover:bg-${social.color}-100 transition-colors duration-200 group`}
                    >
                      <social.icon className={`h-6 w-6 text-${social.color}-600 mr-3 group-hover:scale-110 transition-transform duration-200`} />
                      <div>
                        <div className="font-medium text-gray-900">{social.name}</div>
                        <div className={`text-sm text-${social.color}-600`}>{social.followers}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section id="offices" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Global
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Offices
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're present across continents to better serve our mission and communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  office.isPrimary ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {office.isPrimary && (
                  <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 text-sm font-medium text-center">
                    Headquarters
                  </div>
                )}
                
                <div className="relative">
                  <img
                    src={office.image}
                    alt={`${office.city} office`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-900">
                    {office.city}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {office.city}, {office.country}
                    </h3>
                    <Building className="h-5 w-5 text-gray-400" />
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 whitespace-pre-line">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`tel:${office.phone}`} className="text-sm text-blue-600 hover:text-blue-800">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <a href={`mailto:${office.email}`} className="text-sm text-blue-600 hover:text-blue-800">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{office.hours}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">Languages:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {office.languages.map((lang, langIndex) => (
                            <span
                              key={langIndex}
                              className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="text-emerald-600 hover:text-emerald-800 font-medium text-sm flex items-center">
                        Get Directions
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our work and how to get involved.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I volunteer with Linda Wanyama?",
                answer: "We offer various volunteer opportunities from field work to administrative support. Contact our volunteer coordinator at volunteer@lindawanyama.org or fill out our contact form with 'Volunteer' category selected."
              },
              {
                question: "What is the best way to make a donation?",
                answer: "You can donate through our secure online platform, by contacting donations@lindawanyama.org, or visiting any of our offices. We accept various payment methods and can provide tax receipts."
              },
              {
                question: "Do you accept corporate partnerships?",
                answer: "Yes! We welcome partnerships with organizations that share our conservation values. Contact partnerships@lindawanyama.org to discuss collaboration opportunities."
              },
              {
                question: "How do I report a wildlife emergency?",
                answer: "For urgent wildlife emergencies, call our 24/7 hotline at +254 700 123 456 or contact the emergency category through our contact form."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );
}