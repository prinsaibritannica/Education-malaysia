

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { GraduationCap, MapPin } from "lucide-react";
// import api from "../../api";

// const TestimonialSlider = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const professionalPhotos = [
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
//   ];

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await api.get("/home");
//         const apiTestimonials =
//           res?.data?.data?.testimonials?.filter((t) => t.name && t.review) || [];

//         const updated = apiTestimonials.map((t, i) => ({
//           ...t,
//           image: professionalPhotos[i % professionalPhotos.length],
//         }));

//         setTestimonials(updated);
//       } catch (error) {
//         console.error("Failed to load testimonials:", error);
//         setTestimonials([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   return (
//     <section className="bg-gradient-to-b from-white to-blue-50 px-6 py-12 md:px-10 lg:px-20">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-10">
//         What our{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
//           Students Say
//         </span>
//       </h2>

//       {loading ? (
//         <div className="flex justify-center gap-5 flex-wrap">
//           {[1, 2, 3, 4].map((i) => (
//             <div
//               key={i}
//               className="animate-pulse bg-white rounded-2xl shadow-md border border-slate-200 p-6 w-72 h-[380px]"
//             >
//               <div className="bg-slate-200 h-32 w-full rounded-xl mb-6" />
//               <div className="h-4 bg-slate-200 rounded mb-2 w-3/4" />
//               <div className="h-4 bg-slate-200 rounded mb-4 w-1/2" />
//               <div className="h-3 bg-slate-200 rounded mb-1 w-full" />
//               <div className="h-3 bg-slate-200 rounded w-5/6" />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <Swiper
//           spaceBetween={16}
//           slidesPerView={1}
//           loop={true}
//           speed={800}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 2, spaceBetween: 14 },
//             768: { slidesPerView: 3, spaceBetween: 16 },
//             1024: { slidesPerView: 4, spaceBetween: 16 },
            
//           }}
//           modules={[Autoplay]}
//           className="pb-8"
//         >
//           {testimonials.map((t, index) => (
//             <SwiperSlide key={t.id || index} className="h-full flex justify-center">
//               <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 h-[380px] w-full flex flex-col justify-between">
//                 {/* Top Section */}
//                 <div className="relative h-28 bg-gradient-to-br from-blue-500 to-cyan-500 overflow-hidden">
//                   <div className="absolute inset-0 bg-black/10" />
//                   <img
//                     src={t.image}
//                     alt={t.name}
//                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
//                     onError={(e) => {
//                       e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                         t.name
//                       )}&size=400&background=3b82f6&color=fff&bold=true`;
//                     }}
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-4 pt-12 flex-1 flex flex-col justify-between">
//                   <div>
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center gap-2">
//                         <span className="text-lg">{t.flag || "🌍"}</span>
//                         {t.country && (
//                           <div className="flex items-center gap-1 text-xs text-slate-600">
//                             <MapPin className="w-3 h-3" />
//                             {t.country}
//                           </div>
//                         )}
//                       </div>
//                       {t.year && (
//                         <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//                           {t.year}
//                         </span>
//                       )}
//                     </div>

//                     <h3 className="text-base font-bold text-slate-900 mb-1">
//                       {t.name || "Student Name"}
//                     </h3>

//                     {t.program && (
//                       <p className="text-xs font-semibold text-blue-600 mb-1">
//                         {t.program}
//                       </p>
//                     )}

//                     {t.university && (
//                       <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
//                         <GraduationCap className="w-3 h-3" />
//                         {t.university}
//                       </p>
//                     )}

//                     <p className="text-slate-700 leading-relaxed text-xs italic line-clamp-4">
//                       "{t.review || t.content || "No testimonial available."}"
//                     </p>
//                   </div>

//                   {/* Rating Section */}
//                   <div className="mt-2">
//                     <div className="flex gap-1 justify-start">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className="w-3.5 h-3.5 text-yellow-400 fill-current"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       )}
//     </section>
//   );
// };

// export default TestimonialSlider;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { GraduationCap, MapPin } from "lucide-react";
import api from "../../api";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const professionalPhotos = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  ];

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await api.get("/home");
        const apiTestimonials =
          res?.data?.data?.testimonials?.filter((t) => t.name && t.review) || [];

        const updated = apiTestimonials.map((t, i) => ({
          ...t,
          image: professionalPhotos[i % professionalPhotos.length],
        }));

        setTestimonials(updated);
      } catch (error) {
        console.error("Failed to load testimonials:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 px-6 py-12 md:px-10 lg:px-20">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-10">
        What our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003893] to-[#003893]">
          Students Say
        </span>
      </h2>

      {loading ? (
        <div className="flex justify-center gap-5 flex-wrap">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-2xl shadow-md border border-slate-200 p-6 w-72 h-[380px]"
            >
              <div className="bg-slate-200 h-32 w-full rounded-xl mb-6" />
              <div className="h-4 bg-slate-200 rounded mb-2 w-3/4" />
              <div className="h-4 bg-slate-200 rounded mb-4 w-1/2" />
              <div className="h-3 bg-slate-200 rounded mb-1 w-full" />
              <div className="h-3 bg-slate-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 14 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            
          }}
          modules={[Autoplay]}
          className="pb-8"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id || index} className="h-full flex justify-center">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 h-[380px] w-full flex flex-col justify-between">
                {/* Top Section */}
                <div className="relative h-28 bg-gradient-to-br from-[#003893] to-[#003893] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10" />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.name
                      )}&size=400&background=003893&color=fff&bold=true`;
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-4 pt-12 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{t.flag || "🌍"}</span>
                        {t.country && (
                          <div className="flex items-center gap-1 text-xs text-slate-600">
                            <MapPin className="w-3 h-3" />
                            {t.country}
                          </div>
                        )}
                      </div>
                      {t.year && (
                        <span className="text-xs font-semibold text-[#003893] bg-blue-50 px-2 py-1 rounded-full">
                          {t.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {t.name || "Student Name"}
                    </h3>

                    {t.program && (
                      <p className="text-xs font-semibold text-[#003893] mb-1">
                        {t.program}
                      </p>
                    )}

                    {t.university && (
                      <p className="text-xs text-slate-500 mb-2 flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        {t.university}
                      </p>
                    )}

                    <p className="text-slate-700 leading-relaxed text-xs italic line-clamp-4">
                      "{t.review || t.content || "No testimonial available."}"
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="mt-2">
                    <div className="flex gap-1 justify-start">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default TestimonialSlider;