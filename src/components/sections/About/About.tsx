import React, { useState, useEffect } from "react";
import {
  Star,
  Coffee,
  Award,
  Scissors,
  TrendingUp,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />,
      title: "19 Years Experience",
      description: "Nearly two decades perfecting the art of barbering",
    },
    {
      icon: <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />,
      title: "Modern & Traditional",
      description: "From skin fades to classic cuts using latest techniques",
    },
    {
      icon: <Star className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />,
      title: "5★ Reviews",
      description: "Consistently rated excellent by satisfied customers",
    },
    {
      icon: <Coffee className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" />,
      title: "Premium Experience",
      description: "Complimentary refreshments and high-quality service",
    },
  ];

  return (
    <section
      id="about-section"
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Scissors className="w-3 sm:w-4 h-3 sm:h-4 text-gray-700" />
              <span className="text-xs sm:text-sm font-medium text-gray-700">
                About Timothy
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-gray-900 leading-tight">
              Crafting Excellence for
              <span className="block text-gray-600">Nineteen Years</span>
            </h2>

            {/* Main Description */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Timothy David has been dedicated to the barber industry for{" "}
                <strong>nineteen years</strong>, staying up to date with modern
                looks while honoring traditional craftsmanship.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                From precision <strong>fades to skin fades</strong>, and classic
                traditional haircuts, Timothy uses the latest techniques and
                professional-grade tools to deliver exceptional results.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Priding himself on offering{" "}
                <strong>the best standard of service</strong>, every client
                enjoys complimentary refreshments and a premium barbering
                experience that keeps them coming back.
              </p>
            </div>

            {/* Service Promise */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border-l-4 border-gray-900">
              <div className="flex items-start gap-3">
                <Award className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    My Promise to You
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    You will receive the highest quality service, using
                    up-to-date techniques and tools, delivered with the passion
                    and expertise that comes from nearly two decades in the
                    industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="mb-3 sm:mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Highlight */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-5 sm:p-6 rounded-xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
                <h3 className="text-lg sm:text-xl font-bold">
                  Premium Experience
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Latest Techniques</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Professional Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>Refreshments Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" />
                  <span>5★ Service Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 sm:top-16 lg:top-20 right-4 sm:right-6 lg:right-8 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 border border-gray-200 rounded-full opacity-30" />
      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-4 sm:left-6 lg:left-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border border-gray-100 rounded-full opacity-20" />
    </section>
  );
};

export default About;
