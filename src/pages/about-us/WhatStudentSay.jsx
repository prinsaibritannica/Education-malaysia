import React, { useState , useEffect} from "react";
import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "HASEEB",
    country: "PAKISTAN",
    text:
      "As a student I am really thankful that I got contacted with them. Their co-operation with students is really impressive and my overall experience is excellent with them.",
  },
  {
    name: "Neha",
    country: "INDIA",
    text:
      "I am studying accountancy in Malaysia and got a very good help from their Gurgaon office regarding choosing the right course.",
  },
  {
    name: "Aman",
    country: "NEPAL",
    text:
      "They guided me at every step from selecting the university to the visa process. The team is really helpful.",
  },
  {
    name: "Siti",
    country: "MALAYSIA",
    text:
      "Very professional and responsive. Their assistance helped me a lot in getting into the course I dreamed of.",
  },
];

const CustomPrev = (props) => (
  <button
    {...props}
    className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-orange-600"
  >
    <FaChevronLeft size={22} />
  </button>
);

const CustomNext = (props) => (
  <button
    {...props}
    className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-orange-600"
  >
    <FaChevronRight size={22} />
  </button>
);

const WhatStudentsSay = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNext />,
    prevArrow: <CustomPrev />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    country: "",
    review: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send formData to backend here
  };
       
     useEffect(() => {
         window.scrollTo({ top: 0, behavior: "smooth" });
       }, []);
 

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">What People Are Saying <span className="text-blue-600">About Us</span></h2>
        <p className="text-gray-600 text-lg">What Our Students Say?</p>
      </div>

      {/* Slider */}
      <Slider {...settings} className="relative mb-20 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white/60 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-white shadow flex items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="avatar"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-gray-700 text-md leading-relaxed">
                <FaQuoteLeft className="inline-block text-blue-600 mr-2" />
                {testimonial.text}
              </p>
              <p className="font-semibold text-blue-600 text-sm">
                {testimonial.name} <span className="text-gray-500">({testimonial.country})</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Review Form */}
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 w-full rounded-md border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 w-full rounded-md border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="px-4 py-3 w-full rounded-md border border-gray-300 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">What you are?</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Counselor">Counselor</option>
            </select>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="px-4 py-3 w-full rounded-md border border-gray-300 bg-white/80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose Country</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Nepal">Nepal</option>
            </select>
          </div>
          <textarea
            name="review"
            rows="5"
            placeholder="Enter your review"
            value={formData.review}
            onChange={handleChange}
            required
            className="px-4 py-3 w-full rounded-md border border-gray-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="inline-flex items-center border-2 border-blue-800 text-blue-800 font-semibold px-6 py-2 rounded-full transition hover:bg-blue-800 hover:text-white"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default WhatStudentsSay;
