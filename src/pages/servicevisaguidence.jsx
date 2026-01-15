// import React from "react";
// import {
//   GraduationCap,
//   MapPin,
//   Building2,
//   RefreshCw,
//   Activity,
//   Shield,
//   Camera,
//   Plane,
//   DollarSign,
//   BookOpen,
//   AlertCircle,
//   CheckCircle,
//   Clock,
//   AlertTriangle,
//   FileText,
//   Heart,
//   Globe,
// } from "lucide-react";

// // ===== Hero Section =====
// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
//               <GraduationCap className="w-16 h-16" />
//             </div>
//           </div>

//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
//             Malaysia Student Visa Guidelines
//           </h1>

//           <div className="flex items-center justify-center space-x-2 mb-6">
//             <MapPin className="w-5 h-5" />
//             <p className="text-xl sm:text-2xl text-emerald-100">2025 Edition</p>
//           </div>

//           <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
//             Complete guidance on eligibility, required documents, and application rules from Education Malaysia Global Services (EMGS)
//           </p>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12 fill-slate-50">
//           <path d="M0,30 Q360,0 720,30 T1440,30 L1440,60 L0,60 Z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// // ===== Document Card =====
// const DocumentCard = ({ icon, title, details, color }) => (
//   <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300">
//     <div className={`bg-gradient-to-r ${color} p-4`}>
//       <div className="text-white">{icon}</div>
//     </div>
//     <div className="p-5">
//       <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
//       <p className="text-sm text-slate-600 leading-relaxed">{details}</p>
//     </div>
//   </div>
// );

// // ===== Required Documents =====
// const DocumentsSection = () => {
//   const documents = [
//     { icon: <FileText className="w-6 h-6" />, title: "Passport", details: "Must be valid for at least 18 months, include bio-data page, all visa pages, and observation page (if any).", color: "from-blue-500 to-blue-600" },
//     { icon: <Camera className="w-6 h-6" />, title: "Photograph", details: "Recent color photo, 35mm × 45mm, with a white background (check using EMGS Photo Checker).", color: "from-purple-500 to-purple-600" },
//     { icon: <BookOpen className="w-6 h-6" />, title: "Offer Letter", details: "Official Letter of Acceptance from a Malaysian university or college recognized by EMGS.", color: "from-emerald-500 to-emerald-600" },
//     { icon: <FileText className="w-6 h-6" />, title: "Academic Certificates", details: "Certified copies of all previous academic records and transcripts.", color: "from-orange-500 to-orange-600" },
//     { icon: <Heart className="w-6 h-6" />, title: "Health Declaration Form", details: "Must be filled, signed, and uploaded with your visa application.", color: "from-rose-500 to-rose-600" },
//     { icon: <Globe className="w-6 h-6" />, title: "English Proficiency", details: "Valid test score (IELTS, TOEFL, PTE, MUET, OET, or Cambridge).", color: "from-cyan-500 to-cyan-600" },
//     { icon: <Shield className="w-6 h-6" />, title: "Yellow Fever Certificate", details: "Required if you are from a yellow-fever-risk country.", color: "from-yellow-500 to-yellow-600" },
//     { icon: <AlertTriangle className="w-6 h-6" />, title: "Special Documents", details: "NOC (Sudan), LOE (Iran), or others as notified by Immigration Malaysia (if applicable).", color: "from-red-500 to-red-600" },
//     { icon: <FileText className="w-6 h-6" />, title: "Personal Bond", details: "Paid by your institution to Immigration Malaysia; refundable after course completion.", color: "from-indigo-500 to-indigo-600" },
//   ];

//   return (
//     <section className="py-16 bg-slate-50">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Required Documents</h2>
//         <p className="text-slate-600 text-lg">Ensure all documents are prepared and valid before applying</p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//         {documents.map((doc, index) => (
//           <DocumentCard key={index} {...doc} />
//         ))}
//       </div>
//     </section>
//   );
// };

// // ===== Info Card =====
// const InfoCard = ({ icon, title, color, items }) => (
//   <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200">
//     <div className={`bg-gradient-to-r ${color} p-5 text-white`}>
//       <div className="flex items-center space-x-3">
//         {icon}
//         <h3 className="text-xl font-bold">{title}</h3>
//       </div>
//     </div>

//     <div className="p-6">
//       <ul className="space-y-3">
//         {items.map((item, index) => (
//           <li key={index} className="flex items-start text-sm text-slate-700 leading-relaxed">
//             <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">✓</span>
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// // ===== Additional Info Section =====
// const AdditionalInfo = () => {
//   const sections = [
//     { icon: <Building2 className="w-7 h-7" />, title: "Additional Documents for Sarawak", color: "from-teal-500 to-teal-600", items: ["Authorization Letter from the institution", "Cover Letter addressed to the Sarawak Immigration Department", "Pre-VAL Medical Report if completed outside EMGS-approved clinics"] },
//     { icon: <RefreshCw className="w-7 h-7" />, title: "Renewal of Student Pass", color: "from-blue-500 to-blue-600", items: ["Updated passport photo and valid passport", "Latest academic transcript and attendance record (minimum 80%)", "Medical screening (if required)", "Insurance renewal certificate", "Apply for renewal at least 6–8 weeks before expiry to avoid penalties"] },
//     { icon: <Activity className="w-7 h-7" />, title: "Medical Screening Guidelines", color: "from-rose-500 to-rose-600", items: ["Must be completed within 7 days of arrival in Malaysia", "Screening should be done only at EMGS-approved clinics", "Medical results are uploaded directly to EMGS for clearance", "Failure to comply may result in visa cancellation or rejection"] },
//     { icon: <Shield className="w-7 h-7" />, title: "Health Insurance", color: "from-emerald-500 to-emerald-600", items: ["Every international student must hold valid EMGS-approved health insurance", "Choose between New Scheme (comprehensive) or Old Scheme (limited)", "Insurance must cover hospitalization, surgical costs, and emergency treatments", "Insurance validity must match the duration of your Student Pass"] },
//   ];

//   return (
//     <section className="py-16">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Additional Information</h2>
//         <p className="text-slate-600 text-lg">Important guidelines for your visa application process</p>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
//         {sections.map((section, index) => (
//           <InfoCard key={index} {...section} />
//         ))}
//       </div>

//       <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg p-6 mt-10">
//         <div className="flex items-start space-x-3">
//           <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
//           <div>
//             <h3 className="font-bold text-slate-800 text-lg mb-2">Important Notes</h3>
//             <ul className="space-y-2 text-slate-700">
//               <li>Applications must be submitted through the institution via EMGS.</li>
//               <li>Processing time may vary (3–6 weeks) depending on nationality and documentation.</li>
//               <li>Students must maintain good academic performance and attendance to renew.</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ===== Checklist Section =====
// const ChecklistSection = () => {
//   const checklist = [
//     "Offer Letter from a Malaysian university/college",
//     "Valid passport (18+ months)",
//     "Academic transcripts & English test results",
//     "Health declaration form",
//     "Passport photo (white background)",
//     "Insurance coverage & personal bond",
//     "VAL approval from EMGS",
//     "SEV (if required)",
//     "Medical screening in Malaysia (within 7 days)",
//     "Student Pass endorsement on passport",
//   ];

//   return (
//     <section className="py-16 bg-slate-50">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Summary Checklist</h2>
//         <p className="text-slate-600 text-lg">Everything you need before applying</p>
//       </div>

//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white flex items-center space-x-3">
//           <CheckCircle className="w-8 h-8" />
//           <h3 className="text-2xl font-bold">Application Checklist</h3>
//         </div>

//         <div className="p-6 sm:p-8 space-y-4">
//           {checklist.map((item, index) => (
//             <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors duration-200 group">
//               <div className="flex-shrink-0 mt-1">
//                 <div className="w-6 h-6 rounded-full bg-emerald-100 group-hover:bg-emerald-200 flex items-center justify-center transition-colors duration-200">
//                   <CheckCircle className="w-4 h-4 text-emerald-600" />
//                 </div>
//               </div>
//               <p className="text-slate-700 leading-relaxed flex-1">{item}</p>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
//           <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
//             <div className="flex items-center space-x-3 mb-3">
//               <Clock className="w-6 h-6 text-blue-600" />
//               <h4 className="font-bold text-slate-800">Processing Time</h4>
//             </div>
//             <p className="text-sm text-slate-700 leading-relaxed">
//               Applications typically take 3–6 weeks to process, depending on your nationality and documentation completeness.
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
//             <div className="flex items-center space-x-3 mb-3">
//               <AlertTriangle className="w-6 h-6 text-amber-600" />
//               <h4 className="font-bold text-slate-800">Stay Compliant</h4>
//             </div>
//             <p className="text-sm text-slate-700 leading-relaxed">
//               Maintain good academic performance and at least 80% attendance to ensure successful visa renewal.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ===== Main Page =====
// export default function VisaGuidelines() {
//   return (
//     <div className="w-full min-h-screen bg-white">
//       <Hero />
//       <DocumentsSection />
//       <AdditionalInfo />
//       <ChecklistSection />
//     </div>
//   );
// }
import {
  GraduationCap, MapPin, Building2, RefreshCw, Activity, Shield, Camera,
  Plane, DollarSign, BookOpen, AlertCircle, CheckCircle, Clock,
  AlertTriangle, FileText, Heart, Globe,
} from 'lucide-react';

//===== COMPONENT 1: Hero =====

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <GraduationCap className="w-16 h-16" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Malaysia Student Visa Guidelines
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-5 h-5" />
            <p className="text-xl sm:text-2xl text-emerald-100">2025 Edition</p>
          </div>

          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Complete guidance on eligibility, required documents, and application rules from Education Malaysia Global Services (EMGS)
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-8 sm:h-12 fill-slate-50">
          <path d="M0,30 Q360,0 720,30 T1440,30 L1440,60 L0,60 Z"></path>
        </svg>
      </div>
    </div>
  );
}

//===== COMPONENT 2: DocumentCard (Helper) =====

function DocumentCard({ icon, title, details, color }) {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300">
      <div className={`bg-gradient-to-r ${color} p-4`}>
        <div className="text-white">{icon}</div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{details}</p>
      </div>
    </div>
  );
}

//===== COMPONENT 3: DocumentsSection =====

function DocumentsSection() {
  const documents = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Passport',
      details: 'Must be valid for at least 18 months, include bio-data page, all visa pages, and observation page (if any).',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Photograph',
      details: 'Recent color photo, 35mm × 45mm, with a white background (check using EMGS Photo Checker).',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Offer Letter',
      details: 'Official Letter of Acceptance from a Malaysian university or college recognized by EMGS.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Academic Certificates',
      details: 'Certified copies of all previous academic records and transcripts.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health Declaration Form',
      details: 'Must be filled, signed, and uploaded with your visa application.',
      color: 'from-rose-500 to-rose-600'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'English Proficiency',
      details: 'Valid test score (IELTS, TOEFL, PTE, MUET, OET, or Cambridge).',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Yellow Fever Certificate',
      details: 'Required if you are from a yellow-fever-risk country.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Special Documents',
      details: 'NOC (Sudan), LOE (Iran), or others as notified by Immigration Malaysia (if applicable).',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Personal Bond',
      details: 'Paid by your institution to Immigration Malaysia; refundable after course completion.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Required Documents</h2>
        <p className="text-slate-600 text-lg">Ensure all documents are prepared and valid before applying</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <DocumentCard key={index} {...doc} />
        ))}
      </div>
    </div>
  );
}

//===== COMPONENT 4: ChecklistSection =====

function ChecklistSection() {
  const checklist = [
    'Offer Letter from a Malaysian university/college',
    'Valid passport (18+ months)',
    'Academic transcripts & English test results',
    'Health declaration form',
    'Passport photo (white background)',
    'Insurance coverage & personal bond',
    'VAL approval from EMGS',
    'SEV (if required)',
    'Medical screening in Malaysia (within 7 days)',
    'Student Pass endorsement on passport'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-3">Summary Checklist</h2>
        <p className="text-slate-600 text-lg">Everything you need before applying</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-6 text-white">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Application Checklist</h3>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors duration-200">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <h4 className="font-bold text-slate-800">Processing Time</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Applications typically take 3–6 weeks to process, depending on your nationality and documentation completeness.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h4 className="font-bold text-slate-800">Stay Compliant</h4>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Maintain good academic performance and at least 80% attendance to ensure successful visa renewal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


//===== COMPONENT 5: InfoCard (Helper) =====

function InfoCard({ icon, title, color, items }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200">
      <div className={`bg-gradient-to-r ${color} p-5 text-white`}>
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-slate-700 leading-relaxed">
              <span className="text-emerald-500 mr-2 mt-1 flex-shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//===== COMPONENT 6: AdditionalInfo =====

function AdditionalInfo() {
  const sections = [
    {
      icon: <Building2 className="w-7 h-7" />,
      title: 'Additional Documents for Sarawak',
      color: 'from-teal-500 to-teal-600',
      items: [
        'Authorization Letter from the institution',
        'Cover Letter addressed to the Sarawak Immigration Department',
        'Pre-VAL Medical Report if completed outside EMGS-approved clinics'
      ]
    },
    {
      icon: <RefreshCw className="w-7 h-7" />,
      title: 'Renewal of Student Pass',
      color: 'from-blue-500 to-blue-600',
      items: [
        'Updated passport photo and valid passport',
        'Latest academic transcript and attendance record (minimum 80%)',
        'Medical screening (if required)',
        'Insurance renewal certificate',
        'Apply for renewal at least 6–8 weeks before expiry to avoid penalties'
      ]
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: 'Medical Screening Guidelines',
      color: 'from-rose-500 to-rose-600',
      items: [
        'Must be completed within 7 days of arrival in Malaysia',
        'Screening should be done only at EMGS-approved clinics',
        'Medical results are uploaded directly to EMGS for clearance',
        'Failure to comply may result in visa cancellation or rejection'
      ]
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: 'Health Insurance',
      color: 'from-emerald-500 to-emerald-600',
      items: [
        'Every international student must hold valid EMGS-approved health insurance',
        'Choose between New Scheme (comprehensive) or Old Scheme (limited)',
        'Insurance must cover hospitalization, surgical costs, and emergency treatments',
        'Insurance validity must match the duration of your Student Pass'
      ]
    },
    {
      icon: <Camera className="w-7 h-7" />,
      title: 'Photo & Passport Format',
      color: 'from-purple-500 to-purple-600',
      items: [
        'Neutral facial expression, no shadows, plain white background',
        'No headgear unless for religious reasons',
        'Passport must be clear, uncut, and unobstructed in scans',
        'Use the EMGS Photo Checker before uploading'
      ]
    },
    {
      icon: <Plane className="w-7 h-7" />,
      title: 'Single Entry Visa (SEV)',
      color: 'from-cyan-500 to-cyan-600',
      items: [
        'Check if your nationality requires a Single Entry Visa (SEV)',
        'Apply at the nearest Malaysian Embassy or Consulate in your country',
        'Bring along your Visa Approval Letter (VAL) when applying',
        'Nationals from SEV-exempt countries can enter with the VAL only',
        'Find the updated SEV-required country list on the EMGS website'
      ]
    },
    {
      icon: <DollarSign className="w-7 h-7" />,
      title: 'Personal Bond',
      color: 'from-amber-500 to-amber-600',
      items: [
        'Refundable security deposit paid to Immigration Malaysia by your university/college',
        'Amount varies depending on nationality (ranging roughly from RM 200 to RM 2,000)',
        'Refundable after you complete or withdraw from your course (subject to compliance with laws)'
      ]
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: 'English Proficiency Rules',
      color: 'from-indigo-500 to-indigo-600',
      items: [
        'Upload your English certificate during the VAL application',
        'Missing or invalid certificates can cause processing delays or shorter visa validity',
        'Accepted tests: IELTS, TOEFL, PTE, MUET, OET, Cambridge, ELS CIEP'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">Additional Information</h2>
        <p className="text-slate-600 text-lg">Important guidelines for your visa application process</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <InfoCard key={index} {...section} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mt-8">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Important Notes</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Applications must be submitted through the institution via EMGS</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Processing time may vary (3–6 weeks) depending on nationality and documentation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span>Students must maintain good academic performance and attendance to renew</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


//===== MAIN PAGE: Merged Component =====
// Yeh file ka main component hai jo sabko render karta hai

export default function MalaysiaVisaPage() {
  return (
    <main>
      <Hero />
      
      {/* Hero ke neeche ka content area */}
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
          <DocumentsSection />
          <ChecklistSection />
          <AdditionalInfo />
        </div>
      </div>
    </main>
  );
}