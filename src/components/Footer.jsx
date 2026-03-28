import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
                AB<span className="text-brand-red">CD</span>
              </span>
              <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">
                School
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Providing the maximum learning experience for LP 1 to 4 students
              through holistic education and modern facilities.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="font-bold text-slate-400 hover:text-white transition-colors"
              >
                FB
              </a>
              <a
                href="#"
                className="font-bold text-slate-400 hover:text-white transition-colors"
              >
                X
              </a>
              <a
                href="#"
                className="font-bold text-slate-400 hover:text-white transition-colors"
              >
                IG
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-red transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="hover:text-brand-red transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/campus"
                  className="hover:text-brand-red transition-colors"
                >
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-brand-red transition-colors"
                >
                  Extra Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-brand-red transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-brand-red transition-colors"
                >
                  School Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                <span>
                  ABCD
                  <br />
                  California
                  <br />
                  <span className="text-slate-500 text-xs mt-1 block">
                    (Exact location details)
                  </span>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-red mr-3 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-red mr-3 flex-shrink-0" />
                <span>info@abcdschool.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Office Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="text-white">8:30 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-brand-red">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ABCD School. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
