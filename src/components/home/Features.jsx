import React from "react";

import { featureCards } from "../../constant";

function Features() {
 
  return (
    <section className="flex flex-col justify-center items-center px-6 py-16  mx-auto bg-[var(--secondary)]">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
        Powerful Features
      </h1>
      <p className="text-gray-600 text-lg mb-12">
        Everything you need to land your next Upwork client
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {featureCards.map((item, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-shadow duration-300 pointer-cursor lg:h-[200px] lg:w-[400px]"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;