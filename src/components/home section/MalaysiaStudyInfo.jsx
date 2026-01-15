

// // import React from "react";
// // import { GraduationCap, ArrowUp } from "lucide-react";

// // const EducationSystem = () => {
// //   const nodes = [
// //     { id: "1", title: "Doctor of Philosophy", level: 1, column: 1, color: "lightblue", width: "full" },
// //     { id: "2", title: "Master's Degree", level: 2, column: 1, color: "lightblue", width: "third" },
// //     { id: "3", title: "Postgraduate Diploma", level: 2, column: 2, color: "lightblue", width: "third" },
// //     { id: "4", title: "Postgraduate Certificate", level: 2, column: 3, color: "lightblue", width: "third" },
// //     { id: "5", title: "Bachelor's Degree", level: 3, column: 1, color: "lightblue", width: "full" },
// //     { id: "6", title: "Malaysian Higher School Certificate (STPM)", level: 4, column: 1, color: "green", width: "third" },
// //     { id: "7", title: "MOE Matriculation Certificate (KPM) / University Foundation", level: 4, column: 2, color: "green", width: "third" },
// //     { id: "8", title: "Polytechnic Diploma", level: 4, column: 3, color: "green", width: "third" },
// //     { id: "9", title: "Community College Diploma", level: 4, column: 4, color: "green", width: "third" },
// //     { id: "10", title: "Community College Certificate", level: 5, column: 1, color: "green", width: "third" },
// //     { id: "11", title: "Malaysian Certificate of Education (SPM)", level: 6, column: 1, color: "orange", width: "half" },
// //     { id: "12", title: "Unified Examinations Certificate (UEC)", level: 6, column: 2, color: "orange", width: "half" },
// //     { id: "13", title: "Upper Secondary Education", level: 7, column: 1, color: "lightblue", width: "half" },
// //     { id: "14", title: "Chinese Independent Secondary School", level: 7, column: 2, color: "lightblue", width: "half" },
// //     { id: "15", title: "Lower Secondary Education", level: 8, column: 1, color: "lightblue", width: "full" },
// //     { id: "16", title: "Bahasa Melayu Assessment Literacy Test (UPLBM) or One-Year Transition Class", level: 9, column: 1, color: "orange", width: "full" },
// //     { id: "17", title: "National School (SK)", level: 10, column: 1, color: "lightblue", width: "third" },
// //     { id: "18", title: "National-Type Tamil School (SJKT)", level: 10, column: 2, color: "lightblue", width: "third" },
// //     { id: "19", title: "National-Type Chinese School (SJKC)", level: 10, column: 3, color: "lightblue", width: "third" },
// //     { id: "20", title: "Preschool", level: 11, column: 1, color: "green", width: "full" },
// //   ];

// //   const getColorClass = (color) => {
// //     switch (color) {
// //       case "lightblue":
// //         return "bg-[#60a5fa] text-white";
// //       case "green":
// //         return "bg-[#4ade80] text-white";
// //       case "orange":
// //         return "bg-[#fb923c] text-white";
// //       default:
// //         return "bg-[#60a5fa] text-white";
// //     }
// //   };

// //   const getWidthClass = (width) => {
// //     switch (width) {
// //       case "full":
// //         return "col-span-4";
// //       case "half":
// //         return "col-span-2";
// //       case "third":
// //         return "col-span-1";
// //       default:
// //         return "col-span-1";
// //     }
// //   };

// //   const getLevelNodes = (level) => {
// //     return nodes.filter((node) => node.level === level);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-3 sm:p-6 md:p-8 lg:p-10">
// //       <div className="overflow-x-auto">
// //         <div className="min-w-[600px] max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
          
// //           {/* Header with improved paragraph formatting */}
// //           <div className="text-center mb-12 sm:mb-16">
// //             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight px-4">
// //               Educational System
// //             </h1>
            
// //             {/* Professional formatted paragraph - 4 lines */}
// //             <div className="max-w-5xl mx-auto px-4">
// //               <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.6] text-justify">
// //                 Malaysia's education system is structured to provide <span className="font-semibold text-blue-600">accessible, high-quality learning</span> from early childhood to higher education. It follows the <span className="font-semibold text-blue-600">Malaysia Education Blueprint</span> and the <span className="font-semibold text-blue-600">Malaysian Qualifications Framework (MQF)</span>, ensuring strong national standards, global relevance, and clear academic pathways for both Malaysian and international students. The system combines traditional learning, modern digital tools, and industry-focused programmes that prepare students for global careers.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Flowchart */}
// //           <div className="space-y-4 sm:space-y-5 md:space-y-6">
// //             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((level) => {
// //               const levelNodes = getLevelNodes(level);
// //               if (levelNodes.length === 0) return null;

// //               return (
// //                 <div key={level} className="relative">
// //                   <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
// //                     {levelNodes.map((node) => (
// //                       <div
// //                         key={node.id}
// //                         className={`${getColorClass(node.color)} ${getWidthClass(
// //                           node.width
// //                         )} rounded-lg p-2 sm:p-3 md:p-4 relative flex flex-col justify-center items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 min-h-[50px] sm:min-h-[55px] md:min-h-[60px]`}
// //                       >
// //                         <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight">
// //                           {node.title}
// //                         </h3>
// //                         {node.subtitle && (
// //                           <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-90">
// //                             {node.subtitle}
// //                           </p>
// //                         )}

// //                         {/* Arrow */}
// //                         {level < 11 && (
// //                           <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
// //                             <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
// //                           </div>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EducationSystem;

// import React from "react";
// import { GraduationCap, ArrowUp } from "lucide-react";

// const EducationSystem = () => {
//   const nodes = [
//     { id: "1", title: "Doctor of Philosophy", level: 1, column: 1, width: "full" },
//     { id: "2", title: "Master's Degree", level: 2, column: 1, width: "third" },
//     { id: "3", title: "Postgraduate Diploma", level: 2, column: 2, width: "third" },
//     { id: "4", title: "Postgraduate Certificate", level: 2, column: 3, width: "third" },
//     { id: "5", title: "Bachelor's Degree", level: 3, column: 1, width: "full" },
//     { id: "6", title: "Malaysian Higher School Certificate (STPM)", level: 4, column: 1, width: "third" },
//     { id: "7", title: "MOE Matriculation Certificate (KPM) / University Foundation", level: 4, column: 2, width: "third" },
//     { id: "8", title: "Polytechnic Diploma", level: 4, column: 3, width: "third" },
//     { id: "9", title: "Community College Diploma", level: 4, column: 4, width: "third" },
//     { id: "10", title: "Community College Certificate", level: 5, column: 1, width: "third" },
//     { id: "11", title: "Malaysian Certificate of Education (SPM)", level: 6, column: 1, width: "half" },
//     { id: "12", title: "Unified Examinations Certificate (UEC)", level: 6, column: 2, width: "half" },
//     { id: "13", title: "Upper Secondary Education", level: 7, column: 1, width: "half" },
//     { id: "14", title: "Chinese Independent Secondary School", level: 7, column: 2, width: "half" },
//     { id: "15", title: "Lower Secondary Education", level: 8, column: 1, width: "full" },
//     { id: "16", title: "Bahasa Melayu Assessment Literacy Test (UPLBM) or One-Year Transition Class", level: 9, column: 1, width: "full" },
//     { id: "17", title: "National School (SK)", level: 10, column: 1, width: "third" },
//     { id: "18", title: "National-Type Tamil School (SJKT)", level: 10, column: 2, width: "third" },
//     { id: "19", title: "National-Type Chinese School (SJKC)", level: 10, column: 3, width: "third" },
//     { id: "20", title: "Preschool", level: 11, column: 1, width: "full" },
//   ];

//   const getWidthClass = (width) => {
//     switch (width) {
//       case "full":
//         return "col-span-4";
//       case "half":
//         return "col-span-2";
//       case "third":
//         return "col-span-1";
//       default:
//         return "col-span-1";
//     }
//   };

//   const getLevelNodes = (level) => {
//     return nodes.filter((node) => node.level === level);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-3 sm:p-6 md:p-8 lg:p-10">
//       <div className="overflow-x-auto">
//         <div className="min-w-[600px] max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-blue-100">
          
//           {/* Header with improved paragraph formatting */}
//           <div className="text-center mb-12 sm:mb-16">
//              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight px-4">
//               Educational System
//             </h1>
            
            
//             {/* Professional formatted paragraph - 4 lines */}
//             <div className="max-w-5xl mx-auto px-4">
//               <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.6] text-justify">
//                 Malaysia's education system is structured to provide <span className="font-semibold text-blue-600">accessible, high-quality learning</span> from early childhood to higher education. It follows the <span className="font-semibold text-blue-600">Malaysia Education Blueprint</span> and the <span className="font-semibold text-blue-600">Malaysian Qualifications Framework (MQF)</span>, ensuring strong national standards, global relevance, and clear academic pathways for both Malaysian and international students. The system combines traditional learning, modern digital tools, and industry-focused programmes that prepare students for global careers.
//               </p>
//             </div>
//           </div>

//           {/* Flowchart */}
//           <div className="space-y-4 sm:space-y-5 md:space-y-6">
//             {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((level) => {
//               const levelNodes = getLevelNodes(level);
//               if (levelNodes.length === 0) return null;

//               return (
//                 <div key={level} className="relative">
//                   <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
//                     {levelNodes.map((node) => (
//                       <div
//                         key={node.id}
//                         className={`bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/50 ${getWidthClass(
//                           node.width
//                         )} rounded-xl p-2 sm:p-3 md:p-4 relative flex flex-col justify-center items-center text-center hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 min-h-[50px] sm:min-h-[55px] md:min-h-[60px] border border-white/20`}
//                       >
//                         <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight drop-shadow-md">
//                           {node.title}
//                         </h3>
//                         {node.subtitle && (
//                           <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-90">
//                             {node.subtitle}
//                           </p>
//                         )}

//                         {/* Arrow */}
//                         {level < 11 && (
//                           <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
//                             <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 drop-shadow-lg" />
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationSystem;

import React from "react";
import { GraduationCap, ArrowUp } from "lucide-react";

const EducationSystem = () => {
  const nodes = [
    { id: "1", title: "Doctor of Philosophy", level: 1, column: 1, width: "full" },
    { id: "2", title: "Master's Degree", level: 2, column: 1, width: "third" },
    { id: "3", title: "Postgraduate Diploma", level: 2, column: 2, width: "third" },
    { id: "4", title: "Postgraduate Certificate", level: 2, column: 3, width: "third" },
    { id: "5", title: "Bachelor's Degree", level: 3, column: 1, width: "full" },
    { id: "6", title: "Malaysian Higher School Certificate (STPM)", level: 4, column: 1, width: "third" },
    { id: "7", title: "MOE Matriculation Certificate (KPM) / University Foundation", level: 4, column: 2, width: "third" },
    { id: "8", title: "Polytechnic Diploma", level: 4, column: 3, width: "third" },
    { id: "9", title: "Community College Diploma", level: 4, column: 4, width: "third" },
    { id: "10", title: "Community College Certificate", level: 5, column: 1, width: "third" },
    { id: "11", title: "Malaysian Certificate of Education (SPM)", level: 6, column: 1, width: "half" },
    { id: "12", title: "Unified Examinations Certificate (UEC)", level: 6, column: 2, width: "half" },
    { id: "13", title: "Upper Secondary Education", level: 7, column: 1, width: "half" },
    { id: "14", title: "Chinese Independent Secondary School", level: 7, column: 2, width: "half" },
    { id: "15", title: "Lower Secondary Education", level: 8, column: 1, width: "full" },
    { id: "16", title: "Bahasa Melayu Assessment Literacy Test (UPLBM) or One-Year Transition Class", level: 9, column: 1, width: "full" },
    { id: "17", title: "National School (SK)", level: 10, column: 1, width: "third" },
    { id: "18", title: "National-Type Tamil School (SJKT)", level: 10, column: 2, width: "third" },
    { id: "19", title: "National-Type Chinese School (SJKC)", level: 10, column: 3, width: "third" },
    { id: "20", title: "Preschool", level: 11, column: 1, width: "full" },
  ];

  const getWidthClass = (width) => {
    switch (width) {
      case "full":
        return "col-span-4";
      case "half":
        return "col-span-2";
      case "third":
        return "col-span-1";
      default:
        return "col-span-1";
    }
  };

  const getLevelNodes = (level) => {
    return nodes.filter((node) => node.level === level);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 p-3 sm:p-6 md:p-8 lg:p-10">
      <div className="overflow-x-auto">
        <div className="min-w-[600px] max-w-7xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-blue-100">
          
          {/* Header with improved paragraph formatting */}
          <div className="text-center mb-12 sm:mb-16">
             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight px-4">
              Educational System
            </h1>
            
            
            {/* Professional formatted paragraph - 4 lines */}
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.6] text-justify">
                Malaysia's education system is structured to provide <span className="font-semibold text-[#003893]">accessible, high-quality learning</span> from early childhood to higher education. It follows the <span className="font-semibold text-[#003893]">Malaysia Education Blueprint</span> and the <span className="font-semibold text-[#003893]">Malaysian Qualifications Framework (MQF)</span>, ensuring strong national standards, global relevance, and clear academic pathways for both Malaysian and international students. The system combines traditional learning, modern digital tools, and industry-focused programmes that prepare students for global careers.
              </p>
            </div>
          </div>

          {/* Flowchart */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((level) => {
              const levelNodes = getLevelNodes(level);
              if (levelNodes.length === 0) return null;

              return (
                <div key={level} className="relative">
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    {levelNodes.map((node) => (
                      <div
                        key={node.id}
                        className={`bg-gradient-to-br from-[#003893] to-[#003893] text-white shadow-lg shadow-[#003893]/50 ${getWidthClass(
                          node.width
                        )} rounded-xl p-2 sm:p-3 md:p-4 relative flex flex-col justify-center items-center text-center hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 min-h-[50px] sm:min-h-[55px] md:min-h-[60px] border border-white/20`}
                      >
                        <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight drop-shadow-md">
                          {node.title}
                        </h3>
                        {node.subtitle && (
                          <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-90">
                            {node.subtitle}
                          </p>
                        )}

                        {/* Arrow */}
                        {level < 11 && (
                          <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#003893] drop-shadow-lg" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationSystem;