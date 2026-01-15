

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../api";

// const UniversityRankingTable = () => {
//   const [rankings, setRankings] = useState([]);

//   useEffect(() => {
//     const fetchRankings = async () => {
//       try {
//         const response = await api.get("/home");
//         const universityRanks = response.data?.data?.universityRanks;

//         if (Array.isArray(universityRanks)) {
//           setRankings(universityRanks);
//         } else {
//           console.error("Unexpected universityRanks format");
//         }
//       } catch (error) {
//         console.error("Error fetching university rankings:", error);
//       }
//     };

//     fetchRankings();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-6 sm:mb-10">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
//             Malaysian University Rankings
//           </h1>
//           <p className="text-sm sm:text-base lg:text-lg text-gray-600">
//             Compare top Malaysian universities across major international ranking systems
//           </p>
//         </div>

//         {/* Table Section with Horizontal Scroll */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               {/* Table Header */}
//               <thead className="bg-blue-600">
//                 <tr>
//                   <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
//                     University
//                   </th>
//                   <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
//                     QS World Ranking
//                   </th>
//                   <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
//                     Times Ranking
//                   </th>
//                   <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
//                     QS Asia Ranking
//                   </th>
//                   {/* <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
//                     Malaysia Ranking
//                   </th> */}
//                 </tr>
//               </thead>

//               {/* Table Body */}
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rankings.map((uni, index) => (
//                   <tr
//                     key={uni.id}
//                     className="hover:bg-gray-50 transition-colors duration-150"
//                   >
//                     <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">
//                       <div className="min-w-max">{uni.name}</div>
//                       <Link
//                         to={`/${uni.uname}`}
//                         className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 whitespace-nowrap"
//                       >
//                         View All Courses →
//                       </Link>
//                     </td>
//                     <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
//                       <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
//                         {uni.qs_rank || "N/A"}
//                       </span>
//                     </td>
//                     <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
//                       <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800 whitespace-nowrap">
//                         {uni.times_rank || "N/A"}
//                       </span>
//                     </td>
//                     <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
//                       <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 whitespace-nowrap">
//                         {uni.qs_asia_rank || "N/A"}
//                       </span>
//                     </td>
//                     {/* <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
//                       <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
//                         #{index + 1}
//                       </span>
//                     </td> */}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UniversityRankingTable;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const UniversityRankingTable = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await api.get("/home");
        const universityRanks = response.data?.data?.universityRanks;

        if (Array.isArray(universityRanks)) {
          setRankings(universityRanks);
        } else {
          console.error("Unexpected universityRanks format");
        }
      } catch (error) {
        console.error("Error fetching university rankings:", error);
      }
    };

    fetchRankings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Malaysian University Rankings
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Compare top Malaysian universities across major international ranking systems
          </p>
        </div>

        {/* Table Section with Horizontal Scroll */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              {/* Table Header */}
              <thead className="bg-[#003893]">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                    University
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                    QS World Ranking
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                    Times Ranking
                  </th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                    QS Asia Ranking
                  </th>
                  {/* <th className="px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                    Malaysia Ranking
                  </th> */}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {rankings.map((uni, index) => (
                  <tr
                    key={uni.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">
                      <div className="min-w-max">{uni.name}</div>
                      <Link
                        to={`/${uni.uname}`}
                        className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 whitespace-nowrap"
                      >
                        View All Courses →
                      </Link>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                        {uni.qs_rank || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-green-100 text-green-800 whitespace-nowrap">
                        {uni.times_rank || "N/A"}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-purple-100 text-purple-800 whitespace-nowrap">
                        {uni.qs_asia_rank || "N/A"}
                      </span>
                    </td>
                    {/* <td className="px-4 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
                        #{index + 1}
                      </span>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityRankingTable;