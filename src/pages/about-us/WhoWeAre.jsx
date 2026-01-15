import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaUserGraduate,
  FaHandshake,
  FaCogs,
  FaGlobeAsia,
  FaUsers
} from "react-icons/fa";

const WhoWeAre = () => {
  const [activeTab, setActiveTab] = useState("universities");

  const cardData = [
    {
      icon: <FaUniversity className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "Establish an India Office",
      description:
        "We will guide you in setting up your India office, including legal aspects like RBI license handling."
    },
    {
      icon: <FaCogs className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "Market Research and Analysis",
      description:
        "We analyze markets and build effective strategies tailored to your institution's goals."
    },
    {
      icon: <FaGlobeAsia className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "Marketing and Branding",
      description:
        "Expand your international reach and attract global candidates through education fairs and branding."
    },
    {
      icon: <FaCogs className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "We Understand Business",
      description:
        "Our industry experience helps us understand and cater to the diverse needs of the education sector."
    },
    {
      icon: <FaUsers className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "We Are Good At What We Do",
      description:
        "A skilled and experienced team providing cost-effective marketing solutions that deliver."
    },
    {
      icon: <FaHandshake className="mx-auto text-3xl text-blue-500 mb-4" />,
      title: "An Accomplished Team",
      description:
        "Our team works closely with clients to provide guidance and strategic planning throughout the process."
    }
  ];

  return (
    <div className="px-6 md:px-12 py-10 max-w-screen-xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        About <span className="text-blue-600">Education Malaysia</span>
      </h2>

      {/* ABOUT SECTION */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h3>
          <p className="text-gray-700 mb-4">
            <strong>The Achievement of Perfection is our goal but Excellence is Guarantee!</strong><br />
            Britannica Overseas is the cutting edge of higher education’s Recruitment, Marketing and student enrollment. We have been a well-founded solutions specialist to our partner institutions since 2015.
          </p>
          <p className="text-gray-700 mb-4">
            We serve over 100 institutions worldwide, operating multiple portals for countries like Malaysia, Germany, Canada, Australia, and the UK.
          </p>
          <p className="text-gray-700">
            We connect global students to universities through branding, marketing, and recruitment, supported by software innovations.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Vision</h3>
          <p className="text-gray-700 mb-4">
            To make a transformative impact on Study Abroad Services through innovation.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Mission</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Simplify admission & provide best education solutions.</li>
            <li>Build strong business relationships.</li>
            <li>Become the world’s most reliable brand.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Core Values</h3>
          <p className="text-gray-700 mb-4">
            Integrity, Honesty, Commitment, Transparency, Excellence and Value Addition.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Objective</h3>
          <p className="text-gray-700">To Expand the Academic Horizons.</p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["universities", "students", "partners"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition duration-300 flex items-center gap-2 ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "universities" && <FaUniversity />}
            {tab === "students" && <FaUserGraduate />}
            {tab === "partners" && <FaHandshake />}
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-md p-6 md:p-10 border"
      >
        {activeTab === "universities" && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FaUniversity className="text-blue-500" /> For Universities
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Partnered with esteemed institutions globally.</li>
              <li>Recruit highly qualified students via outreach programs.</li>
              <li>International student recruitment solutions, including marketing and support.</li>
              <li>Train and manage in-country agents to enhance reach and applications.</li>
              <li>Pre-screen applications to ensure quality and reduce workload.</li>
            </ul>
          </>
        )}

        {activeTab === "students" && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FaUserGraduate className="text-blue-500" /> For Students
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Comprehensive services from counseling to visa processing.</li>
              <li>Smart tech-based search platforms to find best destinations & courses.</li>
              <li>Support with admissions, loans, test coaching, and allied services.</li>
            </ul>
          </>
        )}

        {activeTab === "partners" && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <FaHandshake className="text-blue-500" /> For Partners
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Swift, Simple and Rewarding partner services.</li>
              <li>Empowerment through product training & tech platforms.</li>
              <li>High commissions, fast payments, and transparent practices.</li>
              <li>Global presence with 100+ universities in 6+ countries.</li>
            </ul>
          </>
        )}
      </motion.div>

      {/* SUPPORT */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
        <p className="text-gray-700">
          Our expert team assists students and partners through admission, visa, and post-enrollment processes. We are committed to excellence in global education services.
        </p>
      </div>

      {/* WHY CHOOSE US CARDS */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {cardData.slice(0, 3).map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {card.icon}
              <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-8 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
            Why Choose Us
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {cardData.slice(3).map((card, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {card.icon}
              <h4 className="text-lg font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
