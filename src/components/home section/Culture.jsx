

import React from "react";
import {
  GraduationCap,
  Briefcase,
  Globe,
  MapPin,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

function Malaysia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl w-full">

          {/* ---------- Title Section ---------- */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight px-4">
           Where Knowledge Grows and Opportunities Thrive in Malaysia

            </p>
           <p className="text-slate-600 text-base max-w-6xl mx-auto leading-relaxed px-4 text-justify">
  Discover a nation that blends academic excellence with real-world career pathways,
  offering students an affordable, innovative, and globally connected study experience.
</p>
          </div>

          {/* ---------- Stats Cards ---------- */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-2 sm:px-0">
            {[
              // { color: "from-blue-300 to-blue-400", value: "100+", label: "Accredited Universities and University College" },
              // { color: "from-green-300 to-green-400", value: "130K+", label: "International Students" },
              // { color: "from-orange-300 to-red-400", value: "$400B+", label: "Strong GDP Economy" },
              // { color: "from-purple-300 to-pink-400", value: "97%", label: " Study Visa Success Rate" },

                { color: "from-[#003893] to-[#003893]", value: "100+", label: "Accredited Universities and University College" },
              { color: "from-[#003893] to-[#003893]", value: "130K+", label: "International Students" },
              { color: "from-[#003893] to-[#003893]", value: "$400B+", label: "Strong GDP Economy" },
              { color: "from-[#003893] to-[#003893]", value: "97%", label: " Study Visa Success Rate" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} p-4 sm:p-6 md:p-8 rounded-2xl text-white text-center shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-300`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{item.value}</div>
                <div className="text-xs sm:text-sm md:text-base opacity-90 leading-snug">{item.label}</div>
              </div>
            ))}
          </div>

          {/* ---------- Info Cards (Icons beside Titles) ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />,
                bg: "bg-blue-100",
                title: "Safe & Peaceful Environment",
                desc: "Malaysia is known for its political stability, low crime rates, and student-friendly cities, ensuring a secure and comfortable place to study and live.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />,
                bg: "bg-green-100",
                title: "Post-Study Opportunities",
                desc: "Graduates can take advantage of Malaysia’s post-study options, including stay-back pathways that support job searching, skill development, and professional employment.",
              },
              {
                icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" />,
                bg: "bg-yellow-100",
                title: "Pathways to Global Universities",
                desc: "Malaysia provides flexible credit-transfer routes to top universities in the UK, Australia, and Europe, enabling students to earn internationally recognised degrees at a lower cost.",
              },
              {
                icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />,
                bg: "bg-purple-100",
                title: "Modern Infrastructure",
                desc: "Universities are equipped with state-of-the-art facilities, digital learning platforms, research labs, and innovative teaching environments designed for future-ready education.",
              },
              {
                icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />,
                bg: "bg-orange-100",
                title: "Affordable Quality of Life",
                desc: "With reasonably priced accommodation, transportation, food, and healthcare, students enjoy a high standard of living without excessive costs",
              },
              {
                icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600" />,
                bg: "bg-cyan-100",
                title: "Supportive Student Services",
                desc: "Dedicated international student offices assist with visa processes, housing, orientation, and academic support, ensuring a smooth and successful education journey.",
              },

            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ---------- About Malaysia ---------- */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl shadow-lg border border-gray-200 mx-2 sm:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              
              {/* Left Column */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  About Malaysia
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Capital:</span>
                    <span className="text-sm sm:text-base">Kuala Lumpur</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Population:</span>
                    <span className="text-sm sm:text-base">34 Million</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Language:</span>
                    <span className="text-sm sm:text-base">Malay, English widely spoken</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Climate:</span>
                    <span className="text-sm sm:text-base">Tropical, warm year-round</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  Economy & Industries
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Growth:</span>
                    <span className="text-sm sm:text-base">~5% annually</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Unemployment:</span>
                    <span className="text-sm sm:text-base">3.0%</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">Top Sectors:</span>
                    <span className="text-sm sm:text-base">Electronics, IT, Oil & Gas, Healthcare</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                    <span className="font-semibold text-base sm:text-lg w-full sm:w-40 flex-shrink-0">States:</span>
                    <span className="text-sm sm:text-base">13 States & 3 Federal Territories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Malaysia;