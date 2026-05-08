import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8 relative overflow-hidden mt-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col items-start gap-4">
              <img
                src="/logo.png"
                alt="BE MAX Logo"
                className="w-20 object-cover bg-white p-2 rounded-xl"
              />
              <img src="/logo-2.jpg" alt="BE MAX Text" className="w-48 " />
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Empowering the Future, Stress-Free. We provide a caring yet
              demanding educational environment designed to help students reach
              their maximum potential.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-1 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-1 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:-translate-y-1 transition-all"
                aria-label="Youtube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full inline-block"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Academics & AI
                </Link>
              </li>
              <li>
                <Link
                  href="/beyond-academics"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Beyond Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/student-support"
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Student Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Sister Organizations */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full inline-block"></span>
              Sister Organizations
            </h3>
            <ul className="space-y-3">
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                <a href="https://bemaxacademy.com/" target="_blank">
                  Bemax Academy
                </a>
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Be Max Global Solutions
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Be Max Publications
              </li>
              <li className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                Be Max Learning App
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block text-accent hover:text-white font-medium underline underline-offset-4 transition-colors"
              >
                Parent Portal Login &rarr;
              </Link>
            </div>
          </div>

          {/* Contact Group */}
          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-accent rounded-full inline-block"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-primary-200">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-white" size={16} />
                </div>
                <span className="text-sm leading-relaxed">
                  <strong>Mevaram Campus:</strong>
                  <br />
                  Thattamala P.O, Kollam, Kerala
                  <br />
                  <span className="text-accent text-xs mt-1 block">
                    Coming 2027: Thazhuthala, Kottiyam
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FiPhone className="text-white" size={16} />
                </div>
                <span className="text-sm">
                  0474 2920263
                  <br />
                  +91 9446 898 543
                  <br />
                  +91 9446 898 549
                </span>
              </div>
              <div className="flex items-center gap-3 text-primary-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <FiMail className="text-white" size={16} />
                </div>
                <span className="text-sm">info@bemaxpublicschool.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-400">
          <p>
            © 2026 BE MAX Public School. A venture of the BE MAX Group of
            Institutions.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer">
              Website redesign by SXS Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
