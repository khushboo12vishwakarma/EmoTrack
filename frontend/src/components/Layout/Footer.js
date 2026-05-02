import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-950 via-violet-900 to-purple-950 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-violet-400 to-purple-500 p-2.5 rounded-xl shadow-lg">
                <Brain className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold text-violet-100">EmoTrack</span>
            </div>
            <p className="text-violet-200 text-sm leading-relaxed">
              Your AI-powered emotional companion helping millions track, understand, and improve their mental wellbeing through advanced emotion analysis.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">100% Secure & Private</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link to="/login" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Login
              </Link>
              <Link to="/signup" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Sign Up
              </Link>
              <Link to="/dashboard" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Dashboard
              </Link>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm text-left w-full"
              >
                Back to Top
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <div className="space-y-3">
              <a 
                href="https://reactjs.org/docs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/yourusername/emotracker" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm"
              >
                GitHub
              </a>
              <Link to="/faq" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                FAQ
              </Link>
              <Link to="/privacy" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-violet-200 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-violet-200 text-sm">Email us</p>
                  <a href="mailto:support@emotracker.com" className="text-white text-sm hover:text-violet-300 transition-colors">
                    support@emotracker.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-violet-200 text-sm">Call us</p>
                  <a href="tel:+1234567890" className="text-white text-sm hover:text-violet-300 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-violet-200 text-sm">Visit us</p>
                  <p className="text-white text-sm">
                    123 Wellness Street<br />
                    San Francisco, CA 94102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-violet-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-violet-300 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} EmoTrack. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
