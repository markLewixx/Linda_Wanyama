import React, { useState, useEffect } from 'react';
import { Globe, Heart, Users, Leaf, ArrowRight, MapPin, Calendar, Target, Zap, Search, Filter, ChevronDown, Play, Shield, Waves, TreePine, Bird, Fish, Rabbit, Star, Navigation } from 'lucide-react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContactSec from './components/ContactSec';


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'wildlife', name: 'Wildlife Protection', icon: Shield },
    { id: 'marine', name: 'Marine Conservation', icon: Waves },
    { id: 'forest', name: 'Forest Conservation', icon: TreePine },
    { id: 'community', name: 'Community Programs', icon: Users }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'africa', name: 'Africa' },
    { id: 'asia', name: 'Asia' },
    { id: 'americas', name: 'Americas' },
    { id: 'oceania', name: 'Oceania' },
    { id: 'europe', name: 'Europe' }
  ];

  const projects = [
    {
      id: 1,
      title: "Amazon Rainforest Guardian Program",
      category: "forest",
      region: "americas",
      location: "Brazil, Colombia, Peru",
      status: "ongoing",
      duration: "2018 - Present",
      budget: "$2.5M",
      description: "Protecting 100,000 acres of pristine Amazon rainforest through community partnerships and advanced monitoring technology.",
      image: "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=600&h=400&fit=crop",
      progress: 75,
      impact: {
        species: "15,000+ species protected",
        communities: "25 indigenous communities supported",
        area: "100,000 acres preserved",
        trees: "500,000 trees monitored"
      },
      highlights: [
        "Reduced deforestation by 40% in target areas",
        "Trained 150+ local conservation rangers",
        "Established 5 new protected corridors"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1574263867128-14d97db2b07f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "African Elephant Sanctuary Network",
      category: "wildlife",
      region: "africa",
      location: "Kenya, Tanzania, Botswana",
      status: "ongoing",
      duration: "2015 - Present",
      budget: "$3.2M",
      description: "Creating safe havens for orphaned elephants and implementing anti-poaching initiatives across East Africa.",
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600&h=400&fit=crop",
      progress: 85,
      impact: {
        species: "300+ elephants rescued",
        communities: "40 local communities engaged",
        area: "80,000 acres protected",
        rangers: "200+ anti-poaching rangers trained"
      },
      highlights: [
        "95% survival rate for rescued elephant calves",
        "50% reduction in poaching incidents",
        "Established 3 new elephant corridors"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1534759926787-89b2d8adb2d6?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Great Barrier Reef Restoration",
      category: "marine",
      region: "oceania",
      location: "Australia",
      status: "ongoing",
      duration: "2020 - 2027",
      budget: "$4.1M",
      description: "Innovative coral restoration and marine ecosystem protection program using cutting-edge biotechnology.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      progress: 60,
      impact: {
        species: "200+ coral species restored",
        communities: "15 coastal communities involved",
        area: "50km² reef protected",
        coral: "100,000+ coral fragments planted"
      },
      highlights: [
        "30% improvement in coral health metrics",
        "Developed heat-resistant coral varieties",
        "Trained 50+ marine biologists"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Himalayan Snow Leopard Conservation",
      category: "wildlife",
      region: "asia",
      location: "Nepal, Bhutan, Tibet",
      status: "ongoing",
      duration: "2017 - Present",
      budget: "$1.8M",
      description: "Protecting the endangered snow leopard through habitat preservation and human-wildlife conflict resolution.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
      progress: 70,
      impact: {
        species: "80+ snow leopards monitored",
        communities: "30 mountain communities supported",
        area: "25,000 acres protected",
        conflicts: "90% reduction in livestock predation"
      },
      highlights: [
        "Installed 200+ camera traps for monitoring",
        "Established predator-proof livestock corrals",
        "Created eco-tourism opportunities"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Borneo Orangutan Rescue Initiative",
      category: "wildlife",
      region: "asia",
      location: "Indonesia, Malaysia",
      status: "ongoing",
      duration: "2016 - Present",
      budget: "$2.7M",
      description: "Rescuing and rehabilitating orphaned orangutans while protecting their rapidly diminishing habitat.",
      image: "https://images.unsplash.com/photo-1605379399843-5665c3a7cdd3?w=600&h=400&fit=crop",
      progress: 80,
      impact: {
        species: "150+ orangutans rescued",
        communities: "20 communities engaged",
        area: "60,000 acres protected",
        rehabilitation: "85% successful release rate"
      },
      highlights: [
        "Built 3 rehabilitation centers",
        "Reforested 5,000 acres of degraded habitat",
        "Trained 75+ local wildlife veterinarians"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Mediterranean Sea Turtle Protection",
      category: "marine",
      region: "europe",
      location: "Greece, Turkey, Cyprus",
      status: "completed",
      duration: "2019 - 2023",
      budget: "$1.5M",
      description: "Protecting nesting beaches and migration routes of endangered loggerhead and green sea turtles.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      progress: 100,
      impact: {
        species: "500+ sea turtles tagged",
        communities: "12 coastal communities involved",
        area: "30 nesting beaches protected",
        nests: "2,000+ turtle nests safeguarded"
      },
      highlights: [
        "Achieved 90% nesting success rate",
        "Reduced plastic pollution by 60%",
        "Established marine protected areas"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 7,
      title: "Andean Condor Recovery Program",
      category: "wildlife",
      region: "americas",
      location: "Argentina, Chile, Colombia",
      status: "ongoing",
      duration: "2021 - Present",
      budget: "$1.2M",
      description: "Breeding and reintroduction program for the iconic Andean condor, South America's largest flying bird.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=400&fit=crop",
      progress: 45,
      impact: {
        species: "25+ condors bred in captivity",
        communities: "15 Andean communities involved",
        area: "40,000 acres monitored",
        releases: "12 successful releases to wild"
      },
      highlights: [
        "Established 2 breeding centers",
        "GPS-tracked released condors",
        "Created educational programs"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 8,
      title: "Community Forest Guardians",
      category: "community",
      region: "africa",
      location: "Madagascar, Democratic Republic of Congo",
      status: "ongoing",
      duration: "2019 - Present",
      budget: "$1.9M",
      description: "Empowering local communities to become forest guardians through sustainable livelihood programs.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      progress: 65,
      impact: {
        species: "Multiple lemur species protected",
        communities: "35 communities empowered",
        area: "70,000 acres under community management",
        livelihoods: "500+ alternative livelihoods created"
      },
      highlights: [
        "Established community-managed reserves",
        "Launched eco-tourism initiatives",
        "Provided micro-finance programs"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1574263867128-14d97db2b07f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=400&h=300&fit=crop"
      ]
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesRegion = selectedRegion === 'all' || project.region === selectedRegion;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesRegion && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'wildlife': return Shield;
      case 'marine': return Waves;
      case 'forest': return TreePine;
      case 'community': return Users;
      default: return Globe;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav></Nav>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden mt-16">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=400&fit=crop"
          alt="Our Projects"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute inset-0  bg-gradient-to-r from-emerald-900/70 to-blue-900/70 flex " />
        <div className="relative z-10 flex items-center justify-center text-center h-full text-white px-4">
          <div className="max-w-4xl ">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 ">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl">
              Discover our global conservation initiatives making a real
              difference
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </button>
                  );
                })}
              </div>

              {/* Region Filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                {regions.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Found {filteredProjects.length} Projects
            </h2>
            <p className="text-gray-600">
              Making a difference across the globe through targeted conservation
              efforts
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        <CategoryIcon className="h-5 w-5 text-emerald-600" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Target className="h-4 w-4 mr-2" />
                        {project.budget}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-black/50 z-50 flex items-center  justify-center p-4 ">
          <div className="bg-white rounded-2xl hidden-scrollbar  max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className=" absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
              >
                <ArrowRight className="h-6 w-6 rotate-45 " />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${getStatusColor(
                    selectedProject.status
                  )}`}
                >
                  {selectedProject.status}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">
                    {selectedProject.location}
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Duration</div>
                  <div className="text-gray-600">
                    {selectedProject.duration}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Budget</div>
                  <div className="text-gray-600">{selectedProject.budget}</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Impact & Results
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(selectedProject.impact).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <Star className="h-5 w-5 text-yellow-500 mr-3" />
                        <span className="text-gray-900 font-medium">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Zap className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Support This Project
                </button>
                <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300">
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <ContactSec> </ContactSec>
      {/*Footer*/}
      <Footer></Footer>
    </div>
  );}