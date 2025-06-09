// src/components/sections/Hero/Hero.tsx
import React, { useState, useEffect } from "react";
import { Star, MapPin, Scissors, Phone, Calendar, Award } from "lucide-react";
import { businessInfo, reviews } from "../../../data";
import { useMousePosition } from "../../../hooks/useMousePosition";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate reviews with flip animation
  useEffect(() => {
    if (!isPaused && reviews.length > 1) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const getReviewForIndex = (index: number) => {
    const adjustedIndex = (currentReviewIndex + index) % reviews.length;
    return reviews[adjustedIndex];
  };

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
      {/* Improved Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/30" />

        {/* Mouse-following subtle glow */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
          }}
        />

        {/* Clean geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Dynamic angled transition to white section */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 sm:h-20 lg:h-24"
            viewBox="0 0 1200 96"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96 L0,60 L300,20 L600,40 L900,10 L1200,30 L1200,96 Z"
              fill="white"
              className="drop-shadow-xl"
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-white/20">
              <Award className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-medium">
                Award-Winning Barber
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 leading-none">
              <span className="block">
                {businessInfo.name.split(" ")[0].toUpperCase()}
              </span>
              <span className="block text-white/80 -mt-1 sm:-mt-2 lg:-mt-4">
                {businessInfo.name.split(" ")[1].toUpperCase()}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-0.5 bg-white" />
              <p className="text-base sm:text-lg lg:text-xl text-white/80 uppercase tracking-wider font-medium">
                {businessInfo.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              {businessInfo.description}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                  {businessInfo.rating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {businessInfo.reviewCount} Reviews
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                  {businessInfo.experience}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                  {businessInfo.startingPrice}
                </div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                  Starting From
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white/60" />
              <span className="text-sm sm:text-base text-white/80">
                {businessInfo.contact.address}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">Call</span>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image Area */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden aspect-[4/5]">
                {/* Timothy's photo */}
                <img
                  src="/timothy-photo.jpg"
                  alt={`${businessInfo.name} - ${businessInfo.title}`}
                  className="w-full h-full object-cover"
                />

                {/* Fallback if image fails to load */}
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center absolute inset-0 opacity-0 peer-[img:error]:opacity-100">
                  <div className="text-center">
                    <Scissors className="w-12 sm:w-16 h-12 sm:h-16 text-white/40 mx-auto mb-3 sm:mb-4" />
                    <p className="text-white/60 text-base sm:text-lg">
                      Timothy's Photo
                    </p>
                    <p className="text-white/40 text-sm">Coming Soon</p>
                  </div>
                </div>

                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Premium Sliding Card Stack - Clean */}
              <div
                className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 w-[280px] sm:w-[320px] h-[140px] sm:h-[160px] z-20"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Card Stack with 4 visible layers */}
                {[0, 1, 2, 3].map((stackIndex) => {
                  const reviewIndex =
                    (currentReviewIndex + stackIndex) % reviews.length;
                  const review = reviews[reviewIndex];
                  const isActive = stackIndex === 0;

                  return (
                    <div
                      key={`${currentReviewIndex}-${stackIndex}`}
                      className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        isActive ? "z-40" : `z-${30 - stackIndex * 5}`
                      }`}
                      style={{
                        transform: `
                          translateX(${stackIndex * 4}px) 
                          translateY(${stackIndex * -6}px) 
                          scale(${1 - stackIndex * 0.03})
                          rotate(${stackIndex * 0.5}deg)
                        `,
                        opacity: isActive ? 1 : 0.7 - stackIndex * 0.15,
                        transformOrigin: "bottom left",
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-2xl shadow-lg transition-all duration-1000 overflow-hidden">
                        <div className="relative p-4 sm:p-5 h-full flex flex-col justify-between text-black">
                          {/* Rating Section */}
                          <div>
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`fill-yellow-400 text-yellow-400 transition-all duration-300 ${
                                    isActive ? "w-4 h-4" : "w-3 h-3"
                                  }`}
                                />
                              ))}
                              <span
                                className={`text-gray-600 font-semibold ml-1 transition-all duration-300 ${
                                  isActive ? "text-sm" : "text-xs"
                                }`}
                              >
                                {review.rating.toFixed(1)}
                              </span>
                            </div>

                            <p
                              className={`font-medium text-gray-800 leading-relaxed mb-3 transition-all duration-300 ${
                                isActive
                                  ? "text-sm line-clamp-3"
                                  : "text-xs line-clamp-2"
                              }`}
                            >
                              "{review.comment}"
                            </p>
                          </div>

                          {/* Customer Info */}
                          <div className="flex items-center gap-2">
                            <div
                              className={`bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isActive ? "w-6 h-6" : "w-5 h-5"
                              }`}
                            >
                              <span
                                className={`font-bold text-gray-700 transition-all duration-300 ${
                                  isActive ? "text-sm" : "text-xs"
                                }`}
                              >
                                {review.name.charAt(0)}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`font-medium text-gray-700 truncate transition-all duration-300 ${
                                  isActive ? "text-sm" : "text-xs"
                                }`}
                              >
                                {review.name}
                              </p>
                              <p
                                className={`text-gray-500 transition-all duration-300 ${
                                  isActive ? "text-xs" : "text-[10px]"
                                }`}
                              >
                                {review.service} • Verified
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Elegant progress indicator */}
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1.5">
                    {reviews.map((_, index) => (
                      <div
                        key={index}
                        className={`rounded-full transition-all duration-500 ${
                          index === currentReviewIndex
                            ? "w-6 h-2 bg-white"
                            : "w-2 h-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border border-white/10 rounded-full" />
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 border border-white/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-[70px] sm:bottom-[80px] lg:bottom-[60px] left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mb-2">
          Scroll
        </div>
        <div className="w-0.5 h-6 sm:h-8 bg-gradient-to-b from-white to-transparent mx-auto animate-pulse" />
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 border-l-2 border-t-2 border-white/20" />
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 border-r-2 border-b-2 border-white/20" />
    </section>
  );
};

export default Hero;
