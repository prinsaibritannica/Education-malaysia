import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../api"; // your axios instance

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await api.post("/student/login", formData);
    console.log("Login response:", response.data);

    const responseData = response.data.data || response.data;

    if (
      response.data?.message ===
      "Account not verified. Please verify your email. OTP sent to your email."
    ) {
      if (responseData?.id) {
        localStorage.setItem("student_id", responseData.id);
      }
      toast.info("Please verify your email. OTP sent to your email.");
      navigate("/confirmed-email");
    } else if (responseData && responseData.token) {
      // Save data to localStorage safely
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("student_id", responseData.id);
      localStorage.setItem("student_email", responseData.email);

      toast.success("Login successful!");

      navigate("/student/profile");
    } else {
      toast.error(response.data.message || "Login failed. Please try again.");
    }
  } catch (error) {
    console.error("Login failed:", error);
    console.error("API Error:", error.response?.data || error);
    toast.error(error.response?.data?.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 flex items-center justify-center overflow-auto p-4">
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex flex-col lg:flex-row overflow-hidden transition-all duration-500">
        <div className="lg:w-1/2 hidden lg:flex items-center justify-center p-10 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-extrabold">Welcome Back!</h2>
            <p className="text-md max-w-sm mx-auto opacity-90">
              Sign in to access your dashboard and continue learning.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white/80 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputWithIcon
              icon={<FaUser />}
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />
            <InputWithIcon
              icon={<FaLock />}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:opacity-90 transition-all disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            <div className="text-center text-sm text-gray-700 mt-4">
              <p>
                Forgot password?{' '}
                <Link to="/account/password/reset">
                  <b className="text-blue-600 cursor-pointer">Recover</b>
                </Link>
              </p>

              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-blue-600 hover:underline cursor-pointer">
                  <b>Sign Up</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const InputWithIcon = ({ icon, placeholder, name, value, onChange, type = "text" }) => (
  <div className="relative">
    <div className="absolute left-3 top-2.5 text-gray-500">{icon}</div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full pl-10 pr-3 py-2 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default Login;
// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { FaUser, FaLock } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../../api";

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await api.post("/student/login", formData);
//       console.log("Login response:", response.data);

//       const responseData = response.data.data || response.data;

//       if (
//         response.data?.message ===
//         "Account not verified. Please verify your email. OTP sent to your email."
//       ) {
//         if (responseData?.id) {
//           localStorage.setItem("student_id", responseData.id);
//         }
//         toast.info("Please verify your email. OTP sent to your email.");
//         navigate("/confirmed-email");
//       } else if (responseData && responseData.token) {
//         // Save data to localStorage safely
//         localStorage.setItem("token", responseData.token);
//         localStorage.setItem("student_id", responseData.id);
//         localStorage.setItem("student_email", responseData.email);

//         toast.success("Login successful!");

//         // 🔥 CHECK URL PARAMETERS FOR AUTO-APPLY
//         const params = new URLSearchParams(window.location.search);
//         const programId = params.get('program_id');
//         const redirect = params.get('redirect');
        
//         if (programId && redirect === 'courses') {
//           // Redirect to courses page WITH parameters for auto-apply
//           navigate(`/courses-in-malaysia?program_id=${programId}&redirect=courses`);
//         } else {
//           // Normal login flow
//           navigate("/student/profile");
//         }

//       } else {
//         toast.error(response.data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       console.error("API Error:", error.response?.data || error);
//       toast.error(error.response?.data?.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 flex items-center justify-center overflow-auto p-4">
//       <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 flex flex-col lg:flex-row overflow-hidden transition-all duration-500">
//         <div className="lg:w-1/2 hidden lg:flex items-center justify-center p-10 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white">
//           <div className="text-center space-y-6">
//             <h2 className="text-4xl font-extrabold">Welcome Back!</h2>
//             <p className="text-md max-w-sm mx-auto opacity-90">
//               Sign in to access your dashboard and continue learning.
//             </p>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 bg-white/80 p-8">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <InputWithIcon
//               icon={<FaUser />}
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//             />
//             <InputWithIcon
//               icon={<FaLock />}
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               type="password"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-2 rounded-lg shadow-md hover:opacity-90 transition-all disabled:opacity-50"
//             >
//               {loading ? "Signing In..." : "Sign In"}
//             </button>

//             <div className="text-center text-sm text-gray-700 mt-4">
//               <p>
//                 Forgot password?{' '}
//                 <Link to="/account/password/reset">
//                   <b className="text-blue-600 cursor-pointer">Recover</b>
//                 </Link>
//               </p>

//               <p>
//                 Don't have an account?{' '}
//                 <Link to="/signup" className="text-blue-600 hover:underline cursor-pointer">
//                   <b>Sign Up</b>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// const InputWithIcon = ({ icon, placeholder, name, value, onChange, type = "text" }) => (
//   <div className="relative">
//     <div className="absolute left-3 top-2.5 text-gray-500">{icon}</div>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="w-full pl-10 pr-3 py-2 rounded-md bg-white shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//     />
//   </div>
// );

// export default Login;