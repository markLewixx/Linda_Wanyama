import React, { useState, useEffect } from "react";
import {
  Globe,
  Heart,
  Users,
  Leaf,
  ArrowRight,
  Award,
  Target,
  Eye,
  Zap,
  Shield,
  Compass,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [expandedValue, setExpandedValue] = useState(null);

  const timelineEvents = [
    {
      year: "2001",
      title: "Founded with a Vision",
      description:
        "WorldLife was established by a group of passionate conservationists determined to make a global impact.",
      image:
        "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=300&h=200&fit=crop",
    },
    {
      year: "2005",
      title: "First International Project",
      description:
        "Launched our first major conservation initiative in the Amazon rainforest, protecting 10,000 acres.",
      image:
        "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=300&h=200&fit=crop",
    },
    {
      year: "2010",
      title: "Marine Conservation Program",
      description:
        "Expanded into ocean conservation with our first marine protected area in the Pacific.",
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop",
    },
    {
      year: "2015",
      title: "Community Partnership Initiative",
      description:
        "Launched programs to work directly with local communities for sustainable conservation.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop",
    },
    {
      year: "2020",
      title: "Digital Conservation Platform",
      description:
        "Developed cutting-edge technology to monitor and protect wildlife using AI and satellite data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    },
    {
      year: "2024",
      title: "Global Impact Milestone",
      description:
        "Reached our goal of protecting over 1 million animals and 50 countries worldwide.",
      image:
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=300&h=200&fit=crop",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      position: "Executive Director",
      bio: "Marine biologist with 20 years of experience in conservation leadership.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    },
    {
      name: "Marcus Rodriguez",
      position: "Conservation Director",
      bio: "Former wildlife photographer turned conservationist, specializing in endangered species.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Dr. Amara Okafor",
      position: "Community Programs Director",
      bio: "Anthropologist focused on sustainable development and community-based conservation.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
    },
    {
      name: "James Mitchell",
      position: "Technology Director",
      bio: "Environmental engineer developing innovative solutions for wildlife monitoring.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Protection",
      description:
        "We are committed to safeguarding endangered species and their habitats for future generations.",
      details:
        "Our protection efforts span across terrestrial, marine, and aerial ecosystems. We work with local governments and international bodies to establish protected areas, implement anti-poaching measures, and create wildlife corridors that allow animals to migrate safely.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Local communities are at the heart of sustainable conservation efforts.",
      details:
        "We believe that lasting conservation success requires the active participation of local communities. Our programs provide education, alternative livelihoods, and direct benefits to communities that live alongside wildlife, creating a positive cycle of protection and prosperity.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology and scientific research for maximum impact.",
      details:
        "From satellite monitoring to AI-powered wildlife tracking, we embrace innovation to enhance our conservation efforts. Our research partnerships with leading universities help us develop new strategies and technologies that can be scaled globally.",
    },
    {
      icon: Compass,
      title: "Transparency",
      description:
        "Open communication and accountability in all our conservation work.",
      details:
        "We maintain complete transparency in our operations, finances, and impact reporting. Our donors and partners receive regular updates on project progress, and we undergo independent audits to ensure the highest standards of accountability.",
    },
  ];

  const achievements = [
    { number: "50+", label: "Countries with Active Programs" },
    { number: "1M+", label: "Animals Protected" },
    { number: "500+", label: "Communities Supported" },
    { number: "2M+", label: "Trees Planted" },
    { number: "25", label: "Years of Impact" },
    { number: "100+", label: "Species Saved from Extinction" },
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimeline((prev) => (prev + 1) % timelineEvents.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
    <Nav></Nav>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mt-16">
        <img
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=400&fit=crop"
          alt="About WorldLife"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-blue-900/70" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About WorldLife
            </h1>
            <p className="text-xl md:text-2xl">
              Protecting wildlife and preserving our planet for over 25 years
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="h-12 w-12 text-emerald-600" />
                <h2 className="text-4xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To protect endangered wildlife and preserve natural habitats
                through innovative conservation strategies, community
                partnerships, and cutting-edge technology. We believe that every
                species has intrinsic value and plays a crucial role in
                maintaining the delicate balance of our ecosystems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission extends beyond conservation to include education,
                sustainable development, and empowering local communities to
                become guardians of their natural heritage.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="h-12 w-12 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where wildlife thrives in harmony with human
                communities, where every species is protected, and where future
                generations inherit a planet rich in biodiversity and natural
                beauty.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where conservation is not just the
                responsibility of organizations like ours, but a shared
                commitment embraced by communities, governments, and individuals
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section
        id="timeline"
        className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact - discover how WorldLife
              has grown over the years
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-blue-400 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                      activeTimeline === index ? "ring-4 ring-emerald-200" : ""
                    }`}
                  >
                    <div className="text-3xl font-bold text-emerald-600 mb-2">
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white transition-all duration-300 ${
                    activeTimeline === index
                      ? "bg-emerald-500 scale-125"
                      : "bg-blue-500"
                  }`}
                ></div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full p-4 mr-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{value.description}</p>

                <button
                  onClick={() =>
                    setExpandedValue(expandedValue === index ? null : index)
                  }
                  className="flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Learn More
                  {expandedValue === index ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </button>

                {expandedValue === index && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg">
                    <p className="text-gray-700">{value.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate experts dedicated to wildlife conservation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See the tangible difference we've made together
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Together, we can protect wildlife and preserve our planet for future
            generations. Every action, no matter how small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Become a Member
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
              View Our Projects
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer></Footer>
    </div>
  );
}
