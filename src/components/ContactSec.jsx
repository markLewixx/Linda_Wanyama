import { Mail, MapPin, Phone } from "lucide-react";


const ContactSec = () => {
  return (
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
            <p className="text-gray-600">info@worldlife.org</p>
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
  );
}

export default ContactSec