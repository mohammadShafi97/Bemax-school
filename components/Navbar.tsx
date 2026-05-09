"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = pathname === "/" && !scrolled && !isOpen;

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics & AI", path: "/academics" },
    { name: "Beyond Academics", path: "/beyond-academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Student Support", path: "/student-support" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent py-4"
          : scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer z-50 relative"
          >
            <img
              src="/logo.png"
              alt="BE MAX Logo"
              className="w-12 md:w-16 object-cover"
            />
            <img
              src="/logo-2.jpg"
              alt="BE MAX Name"
              className="w-32 md:w-44 hidden sm:block"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-medium transition-colors outline-none border-0 hover:text-accent relative text-sm ${
                    isActive
                      ? "text-accent"
                      : isTransparent
                        ? "text-white drop-shadow-md"
                        : "text-slate-700"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event("openPopupForm"))}
            className="bg-accent hidden lg:block text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Apply for 2026-27
          </button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-50 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isTransparent ? "text-white drop-shadow-md" : "text-slate-800"} focus:outline-none p-2`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl fixed inset-0 z-40 overflow-y-auto pt-24 pb-6"
          >
            <div className="px-6 space-y-4 flex flex-col items-center">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center px-3 py-3 rounded-md text-lg font-medium transition-colors ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-slate-800 hover:text-accent hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-6 w-full">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new Event("openPopupForm"));
                  }}
                  className="w-full bg-accent text-white px-4 py-4 rounded-full font-bold shadow-md block text-center mt-2 text-lg"
                >
                  Apply for 2026-27
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
