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
    <section className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-8 lg:px-20 py-4 sm:pb-14 sm:pt-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-10 leading-tight">
        What Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003893] to-[#1b61ca]">
          Students Say
        </span>
      </h2>

      {/* Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-2xl shadow-lg border border-slate-200 p-6 h-[360px]"
            >
              <div className="bg-slate-200 h-28 w-full rounded-lg mb-4" />
              <div className="h-4 bg-slate-200 rounded mb-2 w-3/4" />
              <div className="h-4 bg-slate-200 rounded mb-4 w-1/2" />
              <div className="h-3 bg-slate-200 rounded mb-1 w-full" />
              <div className="h-3 bg-slate-200 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 1.8 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Autoplay]}
          className="pb-6"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id || index}>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 h-[360px] sm:h-[380px] flex flex-col rounded-t-xl">
                
                {/* Top Banner */}
                <div className="relative h-24 bg-gradient-to-br from-[#003893] to-[#1b61ca] rounded-t-xl">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.name
                      )}&background=003893&color=fff&bold=true`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="px-4 pt-12 pb-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* Country + Year */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{t.flag || "🌍"}</span>
                        {t.country && (
                          <span className="text-xs text-slate-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {t.country}
                          </span>
                        )}
                      </div>

                      {t.year && (
                        <span className="text-xs font-semibold text-[#003893] bg-blue-50 px-2 py-1 rounded-full">
                          {t.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {t.name}
                    </h3>

                    {t.program && (
                      <p className="text-xs text-blue-700 font-medium mt-0.5">
                        {t.program}
                      </p>
                    )}

                    {t.university && (
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <GraduationCap className="w-3 h-3" />
                        {t.university}
                      </p>
                    )}

                    <p className="text-sm text-slate-700 italic mt-3 line-clamp-4">
                      “{t.review}”
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="mt-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
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
