
// // import {
// //   FaFacebook,
// //   FaTwitter,
// //   FaLinkedin,
// //   FaPinterest,
// //   FaInstagram,
// //   FaYoutube,
// //   FaPhone,
// //   FaEnvelope,
// // } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import logo from "/logo (2).png";

// // const socialLinks = [
// //   { icon: FaFacebook, url: "https://www.facebook.com/educationmalaysia.in" },
// //   { icon: FaTwitter, url: "https://twitter.com/educatemalaysia/" },
// //   { icon: FaLinkedin, url: "https://www.linkedin.com/company/educationmalaysia/" },
// //   { icon: FaPinterest, url: "https://www.pinterest.com/educationmalaysiain/" },
// //   { icon: FaInstagram, url: "https://www.instagram.com/educationmalaysia.in/" },
// //   { icon: FaYoutube, url: "https://www.youtube.com/@educationmalaysia6986" },
// // ];

// // const scrollToTop = () => {
// //   window.scrollTo({ top: 0, behavior: "smooth" });
// // };

// // const Footer = () => {
// //   return (
// //     <footer className="text-black px-6 md:px-16 pt-16 pb-10 bg-sky-100">
// //       {/* Content */}
// //       <div className="max-w-7xl mx-auto">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

// //           {/* Logo & About */}
// //           <div>
// //             <img src={logo} alt="Education Malaysia" className="w-44 mb-6" />
// //             <p className="text-sm leading-relaxed text-black mb-6">
// //               Guiding students with trusted counseling, scholarships, and admission support
// //               to build successful careers through Malaysian education.
// //             </p>

// //             <h3 className="font-semibold mb-3 relative inline-block after:block after:w-8 after:h-[2px] after:bg-blue-400 after:mt-1">
// //               India Head Office
// //             </h3>

// //             <p className="text-sm leading-relaxed">
// //               B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram,
// //               Haryana, India 122002
// //             </p>

// //             <div className="mt-3 space-y-2 text-sm">
// //               <p className="flex items-center gap-2">
// //                 <FaPhone />{" "}
// //                 <a href="tel:+919818560331" className="hover:text-blue-600">
// //                   +91-98185-60331
// //                 </a>
// //               </p>
// //               <p className="flex items-center gap-2">
// //                 <FaEnvelope />{" "}
// //                 <a
// //                   href="mailto:info@educationmalaysia.in"
// //                   className="hover:text-blue-600"
// //                 >
// //                   info@educationmalaysia.in
// //                 </a>
// //               </p>
// //             </div>
// //           </div>

// //           {/* Top Courses */}
// //           <div>
// //             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[3px] after:bg-blue-400 after:mt-1">
// //               Top Courses
// //             </h2>
// //             <ul className="space-y-2 text-sm">
// //               <li><Link to="/courses-in-malaysia/accounting-finance">Accounting & Finance</Link></li>
// //               <li><Link to="/courses-in-malaysia/civil-engineering">Civil Engineering</Link></li>
// //               <li><Link to="/courses-in-malaysia/arts-fine-arts">Arts/Fine Arts</Link></li>
// //               <li><Link to="/courses-in-malaysia/hospitality">Hospitality</Link></li>
// //               <li><Link to="/courses-in-malaysia/business-management">Business Management</Link></li>
// //               <li><Link to="/courses-in-malaysia/computer-engineering">Computer Engineering</Link></li>
// //               <li><Link to="/courses-in-malaysia/physiology">Physiology</Link></li>
// //               <li><Link to="/courses-in-malaysia/medicine">Medicine</Link></li>
// //               <li><Link to="/courses-in-malaysia/business-information-systems">Business Info Systems</Link></li>
// //             </ul>
// //           </div>

// //           {/* Qualified Level */}
// //           <div>
// //             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">
// //               Qualified Level
// //             </h2>
// //             <ul className="space-y-2 text-sm">
// //               <li>
// //                 <Link to="/courses/pre-university" onClick={scrollToTop}>
// //                   Certificate
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/courses/pre-university" onClick={scrollToTop}>
// //                   Pre University
// //                 </Link>
// //               </li>
// //               <li><Link to="/courses/diploma">Diploma</Link></li>
// //               <li><Link to="/courses/under-graduate">Undergraduate</Link></li>
// //               <li><Link to="/courses/post-graduate">Post Graduate</Link></li>
// //               <li><Link to="/courses/phd">PhD Courses</Link></li>
// //             </ul>
// //           </div>

// //           {/* Help & Support */}
// //           <div>
// //             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">
// //               Help & Support
// //             </h2>
// //             <ul className="space-y-2 text-sm">
// //               <li><Link to="/faqs">FAQs</Link></li>
// //               <li><Link to="/what-people-say">What People Say</Link></li>
// //               <li><Link to="/contact-us">Contact Us</Link></li>
// //               <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
// //               <li><Link to="/blog">Blog</Link></li>
// //               <li><Link to="/privacy-policy">Privacy Policy</Link></li>
// //             </ul>

// //             <div className="flex gap-4 text-xl mt-6">
// //               {socialLinks.map(({ icon: Icon, url }, index) => (
// //                 <a
// //                   key={index}
// //                   href={url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="hover:text-blue-700"
// //                 >
// //                   <Icon />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaPinterest,
//   FaInstagram,
//   FaYoutube,
//   FaPhone,
//   FaEnvelope,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "/logo (2).png";

// const socialLinks = [
//   { icon: FaFacebook, url: "https://www.facebook.com/educationmalaysia.in" },
//   { icon: FaTwitter, url: "https://twitter.com/educatemalaysia/" },
//   { icon: FaLinkedin, url: "https://www.linkedin.com/company/educationmalaysia/" },
//   { icon: FaPinterest, url: "https://www.pinterest.com/educationmalaysiain/" },
//   { icon: FaInstagram, url: "https://www.instagram.com/educationmalaysia.in/" },
//   { icon: FaYoutube, url: "https://www.youtube.com/@educationmalaysia6986" },
// ];

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

// const Footer = () => {
//   return (
//     <footer className="text-white px-6 md:px-16 pt-16 pb-10 bg-[#0a1628]">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
//           <div>
//             <img src={logo} alt="Education Malaysia" className="w-44 mb-6" />
//             <p className="text-sm leading-relaxed mb-6 text-gray-300">
//               Guiding students with trusted counseling, scholarships, and admission support to build successful careers through Malaysian education.
//             </p>
//             <h3 className="font-semibold mb-3 relative inline-block after:block after:w-8 after:h-[2px] after:bg-blue-400 after:mt-1">
//               India Head Office
//             </h3>
//             <p className="text-sm leading-relaxed text-gray-300">
//               B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana, India 122002
//             </p>
//             <div className="mt-3 space-y-2 text-sm">
//               <p className="flex items-center gap-2 text-gray-300">
//                 <FaPhone />
//                 <a href="tel:+919818560331" className="hover:text-blue-400 transition">+91-98185-60331</a>
//               </p>
//               <p className="flex items-center gap-2 text-gray-300">
//                 <FaEnvelope />
//                 <a href="mailto:info@educationmalaysia.in" className="hover:text-blue-400 transition">info@educationmalaysia.in</a>
//               </p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[3px] after:bg-blue-400 after:mt-1">Top Courses</h2>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link to="/courses-in-malaysia/accounting-finance" className="hover:text-blue-400 transition">Accounting & Finance</Link></li>
//               <li><Link to="/courses-in-malaysia/civil-engineering" className="hover:text-blue-400 transition">Civil Engineering</Link></li>
//               <li><Link to="/courses-in-malaysia/arts-fine-arts" className="hover:text-blue-400 transition">Arts/Fine Arts</Link></li>
//               <li><Link to="/courses-in-malaysia/hospitality" className="hover:text-blue-400 transition">Hospitality</Link></li>
//               <li><Link to="/courses-in-malaysia/business-management" className="hover:text-blue-400 transition">Business Management</Link></li>
//               <li><Link to="/courses-in-malaysia/computer-engineering" className="hover:text-blue-400 transition">Computer Engineering</Link></li>
//               <li><Link to="/courses-in-malaysia/physiology" className="hover:text-blue-400 transition">Physiology</Link></li>
//               <li><Link to="/courses-in-malaysia/medicine" className="hover:text-blue-400 transition">Medicine</Link></li>
//               <li><Link to="/courses-in-malaysia/business-information-systems" className="hover:text-blue-400 transition">Business Info Systems</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">Qualified Level</h2>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link to="/courses/pre-university" onClick={scrollToTop} className="hover:text-blue-400 transition">Certificate</Link></li>
//               <li><Link to="/courses/pre-university" onClick={scrollToTop} className="hover:text-blue-400 transition">Pre University</Link></li>
//               <li><Link to="/courses/diploma" className="hover:text-blue-400 transition">Diploma</Link></li>
//               <li><Link to="/courses/under-graduate" className="hover:text-blue-400 transition">Undergraduate</Link></li>
//               <li><Link to="/courses/post-graduate" className="hover:text-blue-400 transition">Post Graduate</Link></li>
//               <li><Link to="/courses/phd" className="hover:text-blue-400 transition">PhD Courses</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">Help & Support</h2>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link to="/faqs" className="hover:text-blue-400 transition">FAQs</Link></li>
//               <li><Link to="/what-people-say" className="hover:text-blue-400 transition">What People Say</Link></li>
//               <li><Link to="/contact-us" className="hover:text-blue-400 transition">Contact Us</Link></li>
//               <li><Link to="/terms-and-conditions" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
//               <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
//               <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
//             </ul>
//             <div className="flex gap-4 text-xl mt-6 text-gray-300">
//               {socialLinks.map(({ icon: Icon, url }, index) => (
//                 <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/logo (2).png";

const socialLinks = [
  { icon: FaFacebook, url: "https://www.facebook.com/educationmalaysia.in" },
  { icon: FaTwitter, url: "https://twitter.com/educatemalaysia/" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/company/educationmalaysia/" },
  { icon: FaPinterest, url: "https://www.pinterest.com/educationmalaysiain/" },
  { icon: FaInstagram, url: "https://www.instagram.com/educationmalaysia.in/" },
  { icon: FaYoutube, url: "https://www.youtube.com/@educationmalaysia6986" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-16 pt-16 pb-10 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          <div>
            <img src={logo} alt="Education Malaysia" className="w-44 mb-6" />
            <p className="text-sm leading-relaxed mb-6 text-white">
              Guiding students with trusted counseling, scholarships, and admission support to build successful careers through Malaysian education.
            </p>
            <h3 className="font-semibold mb-3 relative inline-block after:block after:w-8 after:h-[2px] after:bg-blue-400 after:mt-1">
              India Head Office
            </h3>
            <p className="text-sm leading-relaxed text-white">
              B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana, India 122002
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-white">
                <FaPhone />
                <a href="tel:+919818560331" className="hover:text-blue-400 transition">+91-98185-60331</a>
              </p>
              <p className="flex items-center gap-2 text-white">
                <FaEnvelope />
                <a href="mailto:info@educationmalaysia.in" className="hover:text-blue-400 transition">info@educationmalaysia.in</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[3px] after:bg-blue-400 after:mt-1">Top Courses</h2>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/courses-in-malaysia/accounting-finance" className="hover:text-blue-400 transition">Accounting & Finance</Link></li>
              <li><Link to="/courses-in-malaysia/civil-engineering" className="hover:text-blue-400 transition">Civil Engineering</Link></li>
              <li><Link to="/courses-in-malaysia/arts-fine-arts" className="hover:text-blue-400 transition">Arts/Fine Arts</Link></li>
              <li><Link to="/courses-in-malaysia/hospitality" className="hover:text-blue-400 transition">Hospitality</Link></li>
              <li><Link to="/courses-in-malaysia/business-management" className="hover:text-blue-400 transition">Business Management</Link></li>
              <li><Link to="/courses-in-malaysia/computer-engineering" className="hover:text-blue-400 transition">Computer Engineering</Link></li>
              <li><Link to="/courses-in-malaysia/physiology" className="hover:text-blue-400 transition">Physiology</Link></li>
              <li><Link to="/courses-in-malaysia/medicine" className="hover:text-blue-400 transition">Medicine</Link></li>
              <li><Link to="/courses-in-malaysia/business-information-systems" className="hover:text-blue-400 transition">Business Info Systems</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">Qualified Level</h2>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/courses/pre-university" onClick={scrollToTop} className="hover:text-blue-400 transition">Certificate</Link></li>
              <li><Link to="/courses/pre-university" onClick={scrollToTop} className="hover:text-blue-400 transition">Pre University</Link></li>
              <li><Link to="/courses/diploma" className="hover:text-blue-400 transition">Diploma</Link></li>
              <li><Link to="/courses/under-graduate" className="hover:text-blue-400 transition">Undergraduate</Link></li>
              <li><Link to="/courses/post-graduate" className="hover:text-blue-400 transition">Post Graduate</Link></li>
              <li><Link to="/courses/phd" className="hover:text-blue-400 transition">PhD Courses</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-5 after:block after:w-10 after:h-[2px] after:bg-blue-400 after:mt-1">Help & Support</h2>
            <ul className="space-y-2 text-sm text-white">
              <li><Link to="/faqs" className="hover:text-blue-400 transition">FAQs</Link></li>
              <li><Link to="/what-people-say" className="hover:text-blue-400 transition">What People Say</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400 transition">Contact Us</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition">Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            </ul>
            <div className="flex gap-4 text-xl mt-6 text-white">
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;