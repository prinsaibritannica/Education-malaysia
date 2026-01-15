import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../../api"; // assuming you already have axios instance setup

export default function Recover() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRecover = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await api.post(
        "/student/forget-password",
        { email },
      
      );

      setMessage(response.data.message || "Recovery link sent to your email.");
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong, please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recover Account</h2>
          <p className="text-lg md:text-xl">
            Enter your registered email and we’ll send you a link to recover your account.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center p-10">
          <h3 className="text-2xl font-bold text-center mb-6">Recover</h3>
          <form onSubmit={handleRecover} className="space-y-4">
            {/* Email Field */}
            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Mail className="text-gray-500 mr-2" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your registered email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 focus:outline-none"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Recovery Link"}
            </button>
          </form>

          {/* Success & Error Messages */}
          {message && <p className="text-green-600 text-center mt-4">{message}</p>}
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            Remembered your password? {" "}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
