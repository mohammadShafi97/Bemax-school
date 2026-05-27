"use client";

import PageHeader from "@/components/ui/PageHeader";
import Section from "@/components/ui/Section";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { FiMapPin, FiPhone, FiMail, FiClock, FiAward } from "react-icons/fi";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919446898543";
    const message = `*New Inquiry from Website*
    
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Grade:* ${formData.grade || "N/A"}
*Message:* ${formData.message || "N/A"}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    // Clear form
    setFormData({
      name: "",
      phone: "",
      email: "",
      grade: "",
      message: "",
    });
  };
  return (
    <div className="overflow-hidden">
      <PageHeader
        imagePath="/hero-3.jpg"
        title={"We're Here to\nAssist You."}
        subtitle="Whether you have questions about our stress-free academic curriculum, want to see the BE MAX Express in person, or need details about our upcoming mega-campus in Kottiyam, our team is ready to help."
      />

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info & Credentials */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-slate-900 mb-8">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-accent mb-4">
                  Current Campus (Kollam)
                </h4>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-primary-500 mt-1 shrink-0" />
                    <span>
                      Mevaram, Thattamala P.O,
                      <br />
                      Kollam, Kerala - 691020
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FiPhone className="text-primary-500 mt-1 shrink-0" />
                    <span>
                      +91 9446 898 543
                      <br />
                      +91 9446 898 549
                      <br />
                      0474 2920263
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-primary-500 shrink-0" />
                    <span>info@bemaxpublicschool.com</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <h4 className="font-bold text-primary-600 mb-4">
                  Upcoming 2027 Campus
                </h4>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <FiMapPin className="text-primary-500 mt-1 shrink-0" />
                    <span>
                      Thazhuthala,
                      <br />
                      Kottiyam, Kerala
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-lg text-center mt-4">
                    <span className="block text-primary-600 font-bold mb-1">
                      Opening 2027
                    </span>
                    <span className="text-xs text-slate-500">
                      Construction Underway.
                      <br />
                      Open for Vision 2027 Enquiries.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
              <FiClock className="text-accent text-2xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Office Hours</h4>
                <p className="text-sm text-slate-600">
                  <strong>Monday to Saturday:</strong> 9:00 AM – 5:00 PM
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Sunday:</strong> Closed (Visits by prior appointment
                  only)
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
              <FiAward className="text-primary-600 text-2xl shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900 mb-2">
                  Our Credentials
                </h4>
                <p className="text-sm text-slate-600 font-bold">
                  India Didactics Association (IDA LEAP)
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Membership No:</strong> IDA26-L00674
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Secretariat: 422, DLF Tower A, Jasola District Centre, New
                  Delhi - 110025
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div>
            <AnimatedCard className="h-full" delay={0.2} hoverEffect="scale">
              <h3 className="text-2xl font-black text-slate-900 mb-6">
                Quick Enquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Name of Parent *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-slate-50"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-slate-50"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-slate-50"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Child's Grade Applying For
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-slate-50"
                    value={formData.grade}
                    onChange={(e) =>
                      setFormData({ ...formData, grade: e.target.value })
                    }
                  >
                    <option value="">Select Grade</option>
                    <option value="play-class">Play Class</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="grade-1-5">Grade 1 to 5</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 bg-slate-50 resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-[#e11d48] transition-all"
                >
                  Submit Inquiry
                </button>
              </form>
            </AnimatedCard>
          </div>
        </div>
      </Section>

      <Section bg="slate" className="pt-0">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Find Us on the Map
          </h3>
          <div className="w-full h-[400px] bg-slate-200 rounded-4xl overflow-hidden flex items-center justify-center text-slate-500 shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.1494616176296!2d76.64403077425028!3d8.865674791525738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e30007a47d13%3A0xf194389003fb4da0!2sBemax%20public%20school%20%26%20kids%20%7C%20Best%20School%20In%20Kollam!5e0!3m2!1sen!2sin!4v1777987807990!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-center text-slate-600 mt-6 max-w-2xl mx-auto italic text-sm">
            Directions: We are conveniently located at Mevaram, easily
            accessible for families in and around Kollam.
          </p>
        </div>
      </Section>
    </div>
  );
}
