import { Mail, MapPin, Phone, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex gap-2 items-center mb-4">
              <BookOpen className="h-6 w-6 text-green-500" />
              <h2 className="font-bold text-xl">
                <span className="text-green-500">Notes</span>App
              </h2>
            </div>
            <p className="text-sm text-gray-400">
              Your personal note-taking application for organizing thoughts and ideas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-sm hover:text-green-500 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-green-500 transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="text-sm hover:text-green-500 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-sm hover:text-green-500 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-sm hover:text-green-500 transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-sm hover:text-green-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm hover:text-green-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Mail className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                <span className="text-sm">support@notesapp.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                <span className="text-sm">123 Notes Street, City, Country</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons using plain SVGs */}
            <div className="flex gap-4 mb-4 md:mb-0">
              {/* Facebook */}
              <a href="#facebook" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#twitter" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" aria-label="LinkedIn" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Mail */}
              <a href="#mail" aria-label="Email" className="bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <p className="text-sm text-gray-400">
              &copy; {currentYear} NotesApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;