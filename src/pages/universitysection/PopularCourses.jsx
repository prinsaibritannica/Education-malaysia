import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";

const PopularCourses = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [universityCourses, setUniversityCourses] = useState([]);
  const [malaysiaCourses, setMalaysiaCourses] = useState([]);
  const [topCourses, setTopCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get(`/university-overview/${slug}`);
        // Correctly assign the nested data object to a variable
        const { data } = response.data;
//         console.log("Courses Data:", data);

        // Now use the 'data' variable to set your state
        setUniversityCourses(data.university_specializations_for_courses || []);
        setMalaysiaCourses(data.all_specializations_for_courses || []);
        setTopCourses(data.specializations_with_contents || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchCourses();
    }
  }, [slug]);
  
  // The rest of the component code remains the same...

  // Dynamically create the sections array using the state variables.
  const sections = [
    {
      title: "University Popular Courses",
      courses: universityCourses.slice(0, 15),
    },
    {
      title: "Malaysia Popular Courses",
      courses: malaysiaCourses.slice(0, 15),
    },
    {
      title: "Top Courses to Study in Malaysia",
      courses: topCourses.slice(0, 15),
    },
  ];

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">
        Loading courses...
      </div>
    );
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-[#f6f9fb] rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-[18px] font-semibold text-[#003366] mb-4">
              {section.title}
            </h2>
            <h2 className="text-[15px] font-semibold text-black mb-4">
              Top Streams:
            </h2>

            <div className="flex flex-wrap gap-3 mb-5">
              {section.courses.length > 0 ? (
                section.courses.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-3 py-1.5 border border-gray-300 rounded-full text-sm text-gray-800 hover:bg-blue-50 transition cursor-pointer"
                  >
                    <FaArrowRight className="text-blue-600 text-xs" />
                    <span className="text-[13px]">{course.name}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No courses available for this section.</p>
              )}
            </div>

            <div className="text-right">
              <button
                onClick={() => navigate("/courses")}
                className="bg-[#003366] text-white px-5 py-2 text-sm rounded-full hover:bg-[#002244] transition"
              >
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;