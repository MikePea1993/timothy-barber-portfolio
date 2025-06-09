import React, { useState, useEffect } from "react";
import {
  Scissors,
  Clock,
  Star,
  Calendar,
  Phone,
  Crown,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useMousePosition } from "../../../hooks/useMousePosition";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [expandedServices, setExpandedServices] = useState(new Set());
  const mousePosition = useMousePosition();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("services-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleService = (serviceId) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId);
    } else {
      newExpanded.add(serviceId);
    }
    setExpandedServices(newExpanded);
  };

  const services = [
    {
      id: 1,
      name: "Gents Hair Cut",
      subtitle: "Age 16 And Above",
      price: 19,
      duration: 30,
      description:
        "Professional precision cut using modern techniques with traditional craftsmanship",
      popular: true,
      features: [
        "Consultation & Styling",
        "Wash & Cut",
        "Professional Finish",
        "Complimentary Refreshment",
      ],
    },
    {
      id: 2,
      name: "Skin Fade Hair Cut",
      subtitle: "Premium Fade Service",
      price: 20,
      duration: 30,
      description:
        "Expert skin fade with seamless blending and contemporary styling techniques",
      popular: true,
      features: [
        "Precision Skin Fade",
        "Modern Styling",
        "Professional Tools",
        "Hot Towel Finish",
      ],
    },
    {
      id: 3,
      name: "Hair Cut + Beard Trim",
      subtitle: "Complete Grooming Package",
      price: 27,
      duration: 50,
      description:
        "Full grooming experience combining expert haircut with professional beard trimming",
      premium: true,
      features: [
        "Complete Hair Service",
        "Professional Beard Trim",
        "Hot Towel Treatment",
        "Premium Styling",
        "Full Grooming Experience",
      ],
    },
    {
      id: 4,
      name: "Child Haircut",
      subtitle: "Ages 4-15",
      price: 15,
      duration: 30,
      description:
        "Patient, gentle haircuts for children with a friendly, comfortable approach",
      features: [
        "Kid-Friendly Environment",
        "Patient Service",
        "Quick & Comfortable",
        "Professional Styling",
      ],
    },
    {
      id: 5,
      name: "OAP 65s Over",
      subtitle: "Senior Discount",
      price: 12,
      duration: 20,
      description:
        "Special pricing for seniors with the same professional quality and care",
      features: [
        "Senior Discount",
        "Gentle Professional Service",
        "Traditional & Modern Cuts",
        "Comfortable Experience",
      ],
    },
    {
      id: 6,
      name: "Just The Sides",
      subtitle: "Quick Touch-Up Service",
      price: 17,
      duration: 20,
      description:
        "Quick professional touch-up for sides and back to freshen your look",
      features: [
        "Sides & Back Trim",
        "Quick Professional Service",
        "Fresh Look Touch-Up",
        "Value Service",
      ],
    },
  ];

  return (
    <section
      id="services-section"
      className="min-h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Transition from About section (white to black) */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 lg:h-24"
          viewBox="0 0 1200 96"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,36 L300,76 L600,56 L900,86 L1200,66 L1200,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Mouse-following subtle glow */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
          }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-white/20">
            <Scissors className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="font-medium tracking-wider uppercase text-xs sm:text-sm">
              Services & Pricing
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-none">
            <span className="block">PROFESSIONAL</span>
            <span className="block text-white/60 -mt-1 sm:-mt-2">SERVICES</span>
          </h2>

          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-16 h-0.5 bg-white" />
            <span className="text-lg sm:text-xl font-medium tracking-wider text-center">
              STARTING FROM £12
            </span>
            <div className="w-8 sm:w-16 h-0.5 bg-white" />
          </div>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Nineteen years of expertise in modern fades, traditional cuts, and
            premium grooming. Professional-grade tools and techniques with
            complimentary refreshments.
          </p>
        </div>

        {/* Services Grid - Premium Layout */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Mobile Accordion View (< sm) */}
          <div className="block sm:hidden space-y-4 mb-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transition-all duration-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Collapsed Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{service.name}</h3>
                      {service.popular && (
                        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-bold">
                          Popular
                        </span>
                      )}
                      {service.premium && (
                        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs font-bold">
                          Premium
                        </span>
                      )}
                    </div>
                    <p className="text-white/60 text-sm">{service.subtitle}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-black">£{service.price}</div>
                    <div className="text-white/60 text-xs">
                      {service.duration}min
                    </div>
                  </div>
                  <div className="ml-3">
                    <div
                      className={`transform transition-transform duration-200 ${
                        expandedServices.has(service.id) ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedServices.has(service.id)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-white/10">
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-white/60 flex-shrink-0" />
                          <span className="text-white/80 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-white text-black py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Book This Service
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Full Cards View (sm+) */}
          <div className="hidden sm:block">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12">
              {/* Popular Services - Larger Cards */}
              {services
                .filter((s) => s.popular)
                .map((service, index) => (
                  <div
                    key={service.id}
                    className={`group bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-3 bg-white/10 rounded-xl">
                          <Crown className="w-5 sm:w-6 h-5 sm:h-6" />
                        </div>
                        <div className="bg-white text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider">
                          Most Popular
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <div className="text-3xl sm:text-4xl font-black">
                          £{service.price}
                        </div>
                        <div className="text-white/60 text-sm">
                          {service.duration} minutes
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black mb-2">
                      {service.name}
                    </h3>
                    <p className="text-white/60 font-medium mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                          <span className="text-white/80 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-white text-black py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group">
                      <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Book This Service
                    </button>
                  </div>
                ))}
            </div>

            {/* Premium Service - Full Width Highlight */}
            {services
              .filter((s) => s.premium)
              .map((service, index) => (
                <div
                  key={service.id}
                  className={`bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/30 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 hover:from-white/15 hover:to-white/10 transition-all duration-500 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <div className="p-2 sm:p-3 bg-white/10 rounded-xl w-fit">
                          <Sparkles className="w-5 sm:w-6 h-5 sm:h-6" />
                        </div>
                        <div className="bg-white text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider w-fit">
                          Premium Package
                        </div>
                      </div>

                      <h3 className="text-3xl sm:text-4xl font-black mb-2">
                        {service.name}
                      </h3>
                      <p className="text-white/60 font-medium mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-white/60 flex-shrink-0" />
                            <span className="text-white/80 text-sm sm:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center lg:text-right">
                      <div className="text-5xl sm:text-6xl font-black mb-2">
                        £{service.price}
                      </div>
                      <div className="text-white/60 mb-4 sm:mb-6">
                        {service.duration} minutes
                      </div>
                      <button className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 w-full lg:w-auto">
                        <Calendar className="w-5 h-5" />
                        Book Premium
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Other Services - Compact Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {services
                .filter((s) => !s.popular && !s.premium)
                .map((service, index) => (
                  <div
                    key={service.id}
                    className={`bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-5 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg sm:text-xl font-bold">
                        {service.name}
                      </h3>
                      <div className="text-xl sm:text-2xl font-black">
                        £{service.price}
                      </div>
                    </div>

                    <p className="text-white/60 text-sm mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <span>{service.duration} minutes</span>
                      <Clock className="w-4 h-4" />
                    </div>

                    <button className="w-full border border-white/30 text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider">
                      Book Service
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA - Matches Hero Style */}
        <div
          className={`text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
              READY TO BOOK?
            </h3>
            <p className="text-lg sm:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
              Experience nineteen years of barbering excellence with
              complimentary refreshments and the highest standard of
              professional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-white text-black px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-3 group">
                <Calendar className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-110 transition-transform" />
                Book Appointment
              </button>
              <button className="border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6" />
                <span className="hidden sm:inline">Call: 07496 589455</span>
                <span className="sm:hidden">Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transition to next section (black to white) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-20 lg:h-24"
          viewBox="0 0 1200 96"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,36 L300,76 L600,56 L900,86 L1200,66 L1200,96 L0,96 Z"
            fill="white"
            className="drop-shadow-xl"
          />
        </svg>
      </div>
    </section>
  );
};

export default Services;
