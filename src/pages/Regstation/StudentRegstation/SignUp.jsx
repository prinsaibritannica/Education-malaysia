
// import React, { useEffect, useState } from "react";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";
// import { LuRefreshCw } from "react-icons/lu";
// import api from "../../../api";
// import { toast } from "react-toastify";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { handleErrors } from "../../../utils/handleErrors";

// const SignUp = () => {
//   const [captcha, setCaptcha] = useState("");
//   const [userCaptcha, setUserCaptcha] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [countriesData, setCountriesData] = useState([]);
//   const [phonecode, setPhonecode] = useState([]);
//   const [levels, setLevels] = useState([]);
//   const [courseCategories, setCourseCategories] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     country_code: "",
//     mobile: "",
//     password: "",
//     confirm_password: "",
//     highest_qualification: "",
//     interested_course_category: "",
//     nationality: ""
//   });

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await api.get("/phonecodes");
//         const phonecode = Array.isArray(response.data) ? response.data : response.data.data;
//         setPhonecode(phonecode);

//         const res = await api.get("/countries");
//         const countries = Array.isArray(res.data) ? res.data : res.data.data;
//         setCountriesData(countries);

//         const levelsResponse = await api.get("/levels");
//         const levels = levelsResponse.data.data;
//         setLevels(levels);

//         const categoriesResponse = await api.get("/course-categories");
//         const categories = Array.isArray(categoriesResponse.data) ? categoriesResponse.data : categoriesResponse.data.data;
//         setCourseCategories(categories);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     generateCaptcha();
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const generateCaptcha = () => {
//     const operators = ["+", "-", "×"];
//     const num1 = Math.floor(Math.random() * 10) + 1;
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     const operator = operators[Math.floor(Math.random() * operators.length)];
//     setCaptcha(`${num1} ${operator} ${num2}`);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const [num1, operator, num2] = captcha.split(" ");
//   let expectedAnswer;
//   if (operator === "+") {
//     expectedAnswer = parseInt(num1) + parseInt(num2);
//   } else if (operator === "-") {
//     expectedAnswer = parseInt(num1) - parseInt(num2);
//   } else if (operator === "×") {
//     expectedAnswer = parseInt(num1) * parseInt(num2);
//   }

//   if (parseInt(userCaptcha) !== expectedAnswer) {
//     toast.error("Incorrect captcha value.");
//     generateCaptcha();
//     setUserCaptcha("");
//     return;
//   }

//   try {
//     const response = await api.post("/student/register", null, { params: formData });
//     console.log("Registration Response:", response.data);

//     const studentId =
//       response.data?.id || response.data?.data?.id || response.data?.student_id;

//     if (studentId) {
//       localStorage.setItem("student_id", studentId);
      
//       // Save token if available in response
//       const token = response.data?.token || response.data?.data?.token;
//       if (token) {
//         localStorage.setItem("token", token);
//       }

//       // Check if redirecting from courses page
//       const params = new URLSearchParams(location.search);
//       const programId = params.get('program_id');
//       const redirect = params.get('redirect');

//       toast.success("Registration successful!");

//       if (programId && redirect === 'courses') {
//         // Redirect back to courses WITH parameters for auto-apply
//       navigate(`/courses-in-malaysia?program_id=${programId}&redirect=courses`);
//       } else {
//         // Normal flow - email confirmation
//         navigate("/confirmed-email");
//       }
//     } else {
//       toast.error("Registration failed. Please check your details.");
//     }
//   } catch (error) {
//     console.error("Registration failed:", error.response?.data || error);

//     if (error.response?.data?.errors) {
//       handleErrors(error.response.data.errors);
//     } else if (error.response?.data?.message) {
//       toast.error(error.response.data.message);
//     } else {
//       toast.error("Registration failed. Please try again.");
//     }
//   }
// };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#0f1f3d] via-[#1a2f4f] to-[#2a4365] flex items-center justify-center overflow-auto p-4">
//       <div className="relative w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden transition-all duration-500">
        
//         {/* Left Side - Join Community Section */}
//         <div className="lg:w-1/2 hidden lg:flex items-center justify-center p-12 text-white">
//           <div className="space-y-6">
//             <h1 className="text-5xl font-bold leading-tight">
//               {/* Join the<br />Community */}
//               Start Your study in malaysia journey today! 

//             </h1>
//             <p className="text-lg text-gray-300 max-w-md leading-relaxed">
//             sign up to get university options, fees, scholarships & visa guidance.
//             </p>
            
//             <div className="space-y-4 mt-10">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">12+ Years of Experience
// </span>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">5000+ Students Guided
// </span>
//               </div>

//              <div className="flex items-center gap-3">
//   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
//     <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       {/* Shield + check icon */}
//       <path 
//         d="M12 2l7 3v5c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z"
//         strokeWidth="1.6"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path 
//         d="M9.5 13.5l1.8 1.8 4-5"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   </div>

//   <span className="text-sm">97% Visa Success Rate</span>
// </div>

              
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
//                   </svg>
//                 </div>
//                 <span className="text-sm">Direct Tie-up With Malaysian Universities
// </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Form Section */}
//         <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Sign Up
//           </h2>
          
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <InputWithIcon 
//               icon={<FaUser />} 
//               placeholder="Full Name" 
//               name="name" 
//               value={formData.name} 
//               onChange={handleChange} 
//             />
            
//             <InputWithIcon 
//               icon={<FaEnvelope />} 
//               type="email" 
//               placeholder="Email" 
//               name="email" 
//               value={formData.email} 
//               onChange={handleChange} 
//             />

//             <div className="flex gap-2">
//               <div className="relative w-1/3">
//                 <select 
//                   name="country_code" 
//                   value={formData.country_code} 
//                   onChange={handleChange} 
//                   className="appearance-none w-full px-3 py-2.5 rounded-md border border-gray-300 bg-white text-gray-600 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
//                 >
//                   <option value="">Code</option>
//                   {phonecode.map((code, idx) => (
//                     <option key={idx} value={code.phonecode}>+{code.phonecode}</option>
//                   ))}
//                 </select>
//                 <FiChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//               </div>
//               <input 
//                 type="tel" 
//                 placeholder="Phone Number" 
//                 name="mobile" 
//                 value={formData.mobile} 
//                 onChange={handleChange} 
//                 className="w-2/3 px-4 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               />
//             </div>

//             <SelectInput 
//               label="Qualification Level" 
//               name="highest_qualification" 
//               value={formData.highest_qualification} 
//               onChange={handleChange} 
//               options={levels.map((level) => level.level)} 
//             />
            
//             <SelectInput 
//               label="interested_course_category" 
//               name="interested_course_category" 
//               value={formData.interested_course_category} 
//               onChange={handleChange} 
//               options={courseCategories.map((cat) => cat.name)} 
//             />
            
//             <SelectInput 
//               label="Nationality" 
//               name="nationality" 
//               value={formData.nationality} 
//               onChange={handleChange} 
//               options={countriesData.map((country) => country.name)} 
//             />

//             <div className="relative">
//               <InputWithIcon 
//                 icon={<FaLock />} 
//                 placeholder="Password" 
//                 type={showPassword ? "text" : "password"} 
//                 name="password" 
//                 value={formData.password} 
//                 onChange={handleChange} 
//               />
//               <span 
//                 className="absolute right-3 top-3 text-gray-500 cursor-pointer" 
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             <div className="relative">
//               <InputWithIcon 
//                 icon={<FaLock />} 
//                 placeholder="Confirm Password" 
//                 type={showConfirmPassword ? "text" : "password"} 
//                 name="confirm_password" 
//                 value={formData.confirm_password} 
//                 onChange={handleChange} 
//               />
//               <span 
//                 className="absolute right-3 top-3 text-gray-500 cursor-pointer" 
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="bg-gray-200 text-gray-700 font-semibold px-5 py-2.5 rounded-md shadow-sm select-none min-w-[80px] text-center text-sm">
//                 {captcha}
//               </div>
//               <LuRefreshCw 
//                 onClick={generateCaptcha} 
//                 className="cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300" 
//                 size={20} 
//               />
//               <input 
//                 type="text" 
//                 placeholder="Enter Captcha Value" 
//                 value={userCaptcha} 
//                 onChange={(e) => setUserCaptcha(e.target.value)} 
//                 className="flex-1 px-4 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               />
//             </div>

//             <button 
//               type="submit" 
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
//             >
//               Sign Up
//             </button>

//             <div className="text-center text-sm text-gray-600 mt-4">
//               <p>
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-blue-600 font-semibold hover:underline cursor-pointer">
//                   Sign In
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InputWithIcon = ({ icon, placeholder, type = "text", name, value, onChange }) => (
//   <div className="relative">
//     <div className="absolute left-3 top-3 text-gray-500">{icon}</div>
//     <input 
//       type={type} 
//       name={name} 
//       value={value} 
//       onChange={onChange} 
//       placeholder={placeholder} 
//       className="w-full pl-10 pr-3 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
//     />
//   </div>
// );

// const SelectInput = ({ label, options, name, value, onChange }) => (
//   <div className="relative">
//     <select 
//       name={name} 
//       value={value} 
//       onChange={onChange} 
//       className="appearance-none w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-500 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
//     >
//       <option value="" disabled hidden>{label}</option>
//       {options.map((opt, idx) => (
//         <option key={idx} value={opt}>{opt}</option>
//       ))}
//     </select>
//     <FiChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
//   </div>
// );

// export default SignUp;



import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { LuRefreshCw } from "react-icons/lu";
import api from "../../../api";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { handleErrors } from "../../../utils/handleErrors";

const SignUp = () => {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [phonecode, setPhonecode] = useState([]);
  const [levels, setLevels] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country_code: "",
    mobile: "",
    password: "",
    confirm_password: "",
    highest_qualification: "",
    interested_course_category: "",
    nationality: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/phonecodes");
        const phonecode = Array.isArray(response.data) ? response.data : response.data.data;
        setPhonecode(phonecode);

        const res = await api.get("/countries");
        const countries = Array.isArray(res.data) ? res.data : res.data.data;
        setCountriesData(countries);

        const levelsResponse = await api.get("/levels");
        const levels = levelsResponse.data.data;
        setLevels(levels);

        const categoriesResponse = await api.get("/course-categories");
        const categories = Array.isArray(categoriesResponse.data) ? categoriesResponse.data : categoriesResponse.data.data;
        setCourseCategories(categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    generateCaptcha();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const generateCaptcha = () => {
    const operators = ["+", "-", "×"];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = operators[Math.floor(Math.random() * operators.length)];
    setCaptcha(`${num1} ${operator} ${num2}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  const [num1, operator, num2] = captcha.split(" ");
  let expectedAnswer;
  if (operator === "+") {
    expectedAnswer = parseInt(num1) + parseInt(num2);
  } else if (operator === "-") {
    expectedAnswer = parseInt(num1) - parseInt(num2);
  } else if (operator === "×") {
    expectedAnswer = parseInt(num1) * parseInt(num2);
  }

  if (parseInt(userCaptcha) !== expectedAnswer) {
    toast.error("Incorrect captcha value.");
    generateCaptcha();
    setUserCaptcha("");
    return;
  }

  try {
    const response = await api.post("/student/register", null, { params: formData });
    console.log("Registration Response:", response.data);

    const studentId =
      response.data?.id || response.data?.data?.id || response.data?.student_id;

    if (studentId) {
      localStorage.setItem("student_id", studentId);
      
      // ✅ YE NAYA CODE ADD KARO
      const token = response.data?.token || response.data?.data?.token;
      if (token) {
        localStorage.setItem("token", token);
      }

      // ✅ Check if redirecting from courses page
      const params = new URLSearchParams(location.search);
      const programId = params.get('program_id');
      const redirect = params.get('redirect');

      toast.success("Registration successful!");

      if (programId && redirect === 'courses') {
        // ✅ Redirect back to courses WITH parameters
        navigate(`/courses-in-malaysias?program_id=${programId}&redirect=courses`);
      } else {
        // Normal flow - email confirmation
        navigate("/confirmed-email");
      }
    } else {
      toast.error("Registration failed. Please check your details.");
    }
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error);

    if (error.response?.data?.errors) {
      handleErrors(error.response.data.errors);
    } else if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Registration failed. Please try again.");
    }
  }
};

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f1f3d] via-[#1a2f4f] to-[#2a4365] flex items-center justify-center overflow-auto p-4">
      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden transition-all duration-500">
        
        {/* Left Side - Join Community Section */}
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center p-12 text-white">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              {/* Join the<br />Community */}
              Start Your study in malaysia journey today! 

            </h1>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
            sign up to get university options, fees, scholarships & visa guidance.
            </p>
            
            <div className="space-y-4 mt-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span className="text-sm">12+ Years of Experience
</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">5000+ Students Guided
</span>
              </div>

             <div className="flex items-center gap-3">
  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {/* Shield + check icon */}
      <path 
        d="M12 2l7 3v5c0 5-3 9-7 11-4-2-7-6-7-11V5l7-3z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M9.5 13.5l1.8 1.8 4-5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  <span className="text-sm">97% Visa Success Rate</span>
</div>

              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="text-sm">Direct Tie-up With Malaysian Universities
</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sign Up
          </h2>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputWithIcon 
              icon={<FaUser />} 
              placeholder="Full Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
            
            <InputWithIcon 
              icon={<FaEnvelope />} 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />

            <div className="flex gap-2">
              <div className="relative w-1/3">
                <select 
                  name="country_code" 
                  value={formData.country_code} 
                  onChange={handleChange} 
                  className="appearance-none w-full px-3 py-2.5 rounded-md border border-gray-300 bg-white text-gray-600 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                >
                  <option value="">Code</option>
                  {phonecode.map((code, idx) => (
                    <option key={idx} value={code.phonecode}>+{code.phonecode}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                className="w-2/3 px-4 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>

            <SelectInput 
              label="Qualification Level" 
              name="highest_qualification" 
              value={formData.highest_qualification} 
              onChange={handleChange} 
              options={levels.map((level) => level.level)} 
            />
            
            <SelectInput 
              label="interested_course_category" 
              name="interested_course_category" 
              value={formData.interested_course_category} 
              onChange={handleChange} 
              options={courseCategories.map((cat) => cat.name)} 
            />
            
            <SelectInput 
              label="Nationality" 
              name="nationality" 
              value={formData.nationality} 
              onChange={handleChange} 
              options={countriesData.map((country) => country.name)} 
            />

            <div className="relative">
              <InputWithIcon 
                icon={<FaLock />} 
                placeholder="Password" 
                type={showPassword ? "text" : "password"} 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
              />
              <span 
                className="absolute right-3 top-3 text-gray-500 cursor-pointer" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="relative">
              <InputWithIcon 
                icon={<FaLock />} 
                placeholder="Confirm Password" 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirm_password" 
                value={formData.confirm_password} 
                onChange={handleChange} 
              />
              <span 
                className="absolute right-3 top-3 text-gray-500 cursor-pointer" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gray-200 text-gray-700 font-semibold px-5 py-2.5 rounded-md shadow-sm select-none min-w-[80px] text-center text-sm">
                {captcha}
              </div>
              <LuRefreshCw 
                onClick={generateCaptcha} 
                className="cursor-pointer text-gray-600 hover:text-gray-900 transition-transform duration-300" 
                size={20} 
              />
              <input 
                type="text" 
                placeholder="Enter Captcha Value" 
                value={userCaptcha} 
                onChange={(e) => setUserCaptcha(e.target.value)} 
                className="flex-1 px-4 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-semibold hover:underline cursor-pointer">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputWithIcon = ({ icon, placeholder, type = "text", name, value, onChange }) => (
  <div className="relative">
    <div className="absolute left-3 top-3 text-gray-500">{icon}</div>
    <input 
      type={type} 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="w-full pl-10 pr-3 py-2.5 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" 
    />
  </div>
);

const SelectInput = ({ label, options, name, value, onChange }) => (
  <div className="relative">
    <select 
      name={name} 
      value={value} 
      onChange={onChange} 
      className="appearance-none w-full px-4 py-2.5 rounded-md border border-gray-300 bg-white text-gray-500 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
    >
      <option value="" disabled hidden>{label}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
    <FiChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
  </div>
);

export default SignUp;
