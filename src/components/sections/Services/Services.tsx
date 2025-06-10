// src/components/sections/Services/Services.tsx
import { useState } from "react";
import { Clock, Star, Plus, Check } from "lucide-react";
import { services, serviceExtras, servicesInfo } from "../../../data";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #000 1px, transparent 1px), linear-gradient(-45deg, #000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full mb-4 sm:mb-6">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">{servicesInfo.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6">
            {servicesInfo.title}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-0.5 bg-black" />
            <div className="w-2 h-2 bg-black rotate-45" />
            <div className="w-12 sm:w-16 h-0.5 bg-black" />
          </div>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {servicesInfo.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white border-2 border-gray-100 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-black hover:shadow-2xl ${
                service.popular ? "ring-2 ring-yellow-400 ring-opacity-50" : ""
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Service Header */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-black transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Price & Duration */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl sm:text-3xl font-black">
                    {service.price}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Includes:</h4>
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>

              {/* Book Button */}
              <button
                className={`w-full py-3 px-6 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                  hoveredService === service.id
                    ? "bg-black text-white shadow-lg transform -translate-y-1"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                Book Now
              </button>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-black rounded-2xl transition-all duration-500 pointer-events-none ${
                  hoveredService === service.id ? "opacity-5" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Service Extras */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            {serviceExtras.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {serviceExtras.items.map((extra, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{extra.name}</h4>
                  <span className="text-lg font-bold">{extra.price}</span>
                </div>
                <p className="text-sm text-gray-600">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Info */}
        <div className="text-center bg-black text-white rounded-2xl p-8 sm:p-10 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Book?
          </h3>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {servicesInfo.bookingNote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-10">
            <button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 rounded-lg">
              Book Online
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 rounded-lg">
              Call Now
            </button>
          </div>

          {/* Policies */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/70">
            {servicesInfo.policies.map((policy, index) => (
              <div key={index} className="flex items-start gap-2">
                <Plus className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>{policy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
