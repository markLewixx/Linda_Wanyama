import React, { useState, useEffect } from "react";
import {
  Heart,
  Users,
  Leaf,
  Globe,
  TreePine,
  Fish,
  Bird,
  Shield,
  TrendingUp,
  Award,
  MapPin,
  Calendar,
  ChevronRight,
  Play,
  Star,
  Target,
  Zap,
} from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function ImpactsPage() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("wildlife");
  const [counter, setCounter] = useState({
    animals: 0,
    trees: 0,
    communities: 0,
    countries: 0,
  });

  const impactStats = [
    {
      id: "animals",
      number: 1200000,
      label: "Animals Protected",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      suffix: "+",
    },
    {
      id: "trees",
      number: 2500000,
      label: "Trees Planted",
      icon: TreePine,
      color: "from-green-500 to-emerald-500",
      suffix: "+",
    },
    {
      id: "communities",
      number: 850,
      label: "Communities Empowered",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      suffix: "+",
    },
    {
      id: "countries",
      number: 67,
      label: "Countries Reached",
      icon: Globe,
      color: "from-purple-500 to-violet-500",
      suffix: "",
    },
  ];

  const categoryData = {
    wildlife: {
      title: "Wildlife Conservation",
      icon: Bird,
      color: "emerald",
      stats: [
        { label: "Species Protected", value: "2,847", trend: "+12%" },
        { label: "Habitats Restored", value: "156,000 acres", trend: "+8%" },
        { label: "Anti-Poaching Operations", value: "340", trend: "+25%" },
        { label: "Wildlife Corridors Created", value: "89", trend: "+15%" },
      ],
      projects: [
        {
          title: "Save the Rhinos Initiative",
          location: "Kenya & Tanzania",
          impact: "400+ rhinos protected",
          image:
            "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=250&fit=crop",
        },
        {
          title: "Tiger Recovery Program",
          location: "India & Nepal",
          impact: "180% population increase",
          image:
            "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=250&fit=crop",
        },
      ],
    },
    marine: {
      title: "Marine Protection",
      icon: Fish,
      color: "blue",
      stats: [
        { label: "Marine Protected Areas", value: "45", trend: "+18%" },
        { label: "Ocean Area Protected", value: "2.3M acres", trend: "+22%" },
        { label: "Coral Reefs Restored", value: "1,200", trend: "+30%" },
        { label: "Fishing Communities Supported", value: "280", trend: "+14%" },
      ],
      projects: [
        {
          title: "Great Barrier Reef Restoration",
          location: "Australia",
          impact: "15,000 coral fragments planted",
          image:
            "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop",
        },
        {
          title: "Sea Turtle Conservation",
          location: "Costa Rica",
          impact: "5,600+ turtles saved",
          image:
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=250&fit=crop",
        },
      ],
    },
    forests: {
      title: "Forest Conservation",
      icon: TreePine,
      color: "red",
      stats: [
        {
          label: "Forest Area Protected",
          value: "890,000 acres",
          trend: "+16%",
        },
        { label: "Reforestation Projects", value: "127", trend: "+28%" },
        { label: "Carbon Offset", value: "2.8M tons CO₂", trend: "+35%" },
        { label: "Indigenous Communities", value: "95", trend: "+20%" },
      ],
      projects: [
        {
          title: "Amazon Rainforest Shield",
          location: "Brazil & Peru",
          impact: "500,000 acres protected",
          image:
            "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=400&h=250&fit=crop",
        },
        {
          title: "Borneo Orangutan Habitat",
          location: "Malaysia & Indonesia",
          impact: "1,200 orangutans protected",
          image:
            "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop",
        },
      ],
    },
  };

  const milestones = [
    {
      year: "2024",
      title: "Global Impact Recognition",
      description: "Awarded UN Environmental Excellence Prize",
      icon: Award,
      color: "gold",
    },
    {
      year: "2023",
      title: "Million Tree Milestone",
      description: "Successfully planted our 2 millionth tree",
      icon: TreePine,
      color: "green",
    },
    {
      year: "2022",
      title: "Marine Sanctuary Network",
      description: "Established 25 new marine protected areas",
      icon: Fish,
      color: "blue",
    },
    {
      year: "2021",
      title: "Community Partnership Expansion",
      description: "Reached 500+ local communities worldwide",
      icon: Users,
      color: "purple",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Marine Biologist",
      organization: "Ocean Research Institute",
      quote:
        "Linda Wanyama's marine conservation work has been transformational. Their innovative approaches have helped restore coral reefs we thought were lost forever.",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=faces",
    },
    {
      name: "Chief Amara Okafor",
      role: "Community Leader",
      organization: "Maasai Community Council",
      quote:
        "Working with Linda Wanyama has empowered our community to protect our wildlife while maintaining our traditional way of life. True partnership.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
    },
    {
      name: "Prof. Miguel Rodriguez",
      role: "Conservation Scientist",
      organization: "Amazon Research Center",
      quote:
        "The scale and effectiveness of their reforestation programs are unmatched. They're not just planting trees, they're rebuilding ecosystems.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
    },
  ];

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      impactStats.forEach((stat) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += Math.ceil(end / 100);
          if (start >= end) {
            setCounter((prev) => ({ ...prev, [stat.id]: end }));
            clearInterval(timer);
          } else {
            setCounter((prev) => ({ ...prev, [stat.id]: start }));
          }
        }, stepTime);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

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

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K";
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-white">
      {/*Navigation Bar (Assuming Nav component is imported) */}
      <Nav></Nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 text-white py-24 h-fit overflow-hidden mt-16">
        <img
          src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop"
          alt="Elephant in the wild"
          className="w-full h-full object-cover object-center absolute top-0 left-0"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-emerald-900/70 to-blue-900/70 flex " />
        <div className="absolute inset-0 bg-black/20"> </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              Our Global
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Impact
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90 animate-fade-in-up animation-delay-300">
              Measuring meaningful change across the planet. Every number tells
              a story of hope, conservation, and lasting impact.
            </p>
          </div>

          {/* Impact Counter Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {impactStats.map((stat, index) => (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {formatNumber(counter[stat.id])}
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Categories */}
      <section id="categories" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Impact by
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Category
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our conservation efforts across different ecosystems and
              see the measurable difference we're making.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(categoryData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all= duration-300 ${
                  activeTab === key
                    ? `bg-${data.color}-500 text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <data.icon className="h-5 w-5 mr-2" />
                {data.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Stats Grid */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  {categoryData[activeTab].title} Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categoryData[activeTab].stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {stat.label}
                      </div>
                      <div
                        className={`text-xs font-semibold text-${categoryData[activeTab].color}-600 flex items-center`}
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.trend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Featured Projects
                </h3>
                <div className="space-y-6">
                  {categoryData[activeTab].projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="p-4 flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {project.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                          <div
                            className={`text-sm font-semibold text-${categoryData[activeTab].color}-600`}
                          >
                            {project.impact}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section
        id="milestones"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Major
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Milestones
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Key achievements that mark our journey toward a more sustainable
              world.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } group`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-sm font-semibold text-gray-500 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                    milestone.color === "gold"
                      ? "from-yellow-400 to-orange-500"
                      : milestone.color === "green"
                      ? "from-green-400 to-emerald-500"
                      : milestone.color === "blue"
                      ? "from-blue-400 to-cyan-500"
                      : "from-purple-400 to-violet-500"
                  } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <milestone.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Voices of
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Hear from partners and communities about our collaborative
              conservation efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-emerald-500"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-emerald-600">
                      {testimonial.organization}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Target className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of Our Impact Story
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Your support multiplies our impact. Join thousands of conservation
              champions making a real difference for our planet's future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <Zap className="mr-2 h-5 w-5" />
              Make an Impact Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Impact Stories
            </button>
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
