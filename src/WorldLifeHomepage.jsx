import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Leaf,
  Globe,
  ArrowRight,
  Play,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Link } from "react-router-dom";

export default function WorldLifeHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      title: "Protecting Wildlife Across the Globe",
      subtitle:
        "Join us in preserving endangered species and their natural habitats",
      image:
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1200&h=600&fit=crop",
    },
    {
      title: "Empowering Local Communities",
      subtitle:
        "Supporting sustainable development and conservation education worldwide",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
    },
    {
      title: "Building a Sustainable Future",
      subtitle:
        "Creating lasting change through innovative conservation programs",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop",
    },
  ];

  const stats = [
    { number: "50+", label: "Countries Protected", icon: Globe },
    { number: "1M+", label: "Animals Saved", icon: Heart },
    { number: "500+", label: "Communities Helped", icon: Users },
    { number: "2M+", label: "Trees Planted", icon: Leaf },
  ];

  const projects = [
    {
      title: "Amazon Rainforest Conservation",
      description:
        "Protecting 50,000 acres of pristine rainforest and supporting indigenous communities.",
      image:
        "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&h=300&fit=crop",
      location: "Brazil",
      impact: "15,000 species protected",
    },
    {
      title: "African Elephant Sanctuary",
      description:
        "Providing safe havens for orphaned elephants and anti-poaching initiatives.",
      image:
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=300&fit=crop",
      location: "Kenya",
      impact: "200+ elephants rescued",
    },
    {
      title: "Marine Life Protection",
      description:
        "Establishing marine protected areas and coral reef restoration programs.",
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      location: "Maldives",
      impact: "500km² ocean protected",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      {/* Navigation */}
      <Nav></Nav>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link to="/contacts">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>

              <a href="https://youtu.be/PL28bHZxVNE" target="_blank">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible.about
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Protecting Our Planet's
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Future
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over two decades, Linda Wanyama has been at the forefront of
                global conservation efforts. We believe that protecting wildlife
                and preserving natural habitats is essential for the health of
                our planet and future generations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our innovative approach combines cutting-edge science with
                community-based conservation, ensuring that our efforts create
                lasting positive impact for both wildlife and local communities.
              </p>
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
            <div
              className={`transition-all duration-1000 transform ${
                isVisible.about
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop"
                alt="Conservation team"
                className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Global
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we're making a difference across continents with our
              innovative conservation initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-semibold">
                      {project.impact}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        id="impact"
        className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Together, We're Creating Change
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Every donation, every volunteer hour, and every voice raised in
            support helps us protect the incredible diversity of life on our
            planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Make a Donation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join our mission? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@lindawanyama.org</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Conservation Way
                <br />
                Green Valley, CA 90210
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>

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
    </div>
  );
}
