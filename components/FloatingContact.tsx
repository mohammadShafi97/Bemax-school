import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContact = () => {
  const phoneNumber = "919446898543"; // Removed + for WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999]">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 relative group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href={callUrl}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 relative group"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Call Us
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;
