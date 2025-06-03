import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8 text-emerald-600"
              src="https://cdn-icons-png.flaticon.com/128/16821/16821939.png"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              LINDA WANYAMA
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/impacts"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Impacts
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contacts
            </Link>
          </div>
          <Link to="/donation">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav