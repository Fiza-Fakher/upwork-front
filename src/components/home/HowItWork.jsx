import React from 'react';
import { workCard } from '../../constant';

function HowItWork() {
  return (
    <section className="flex flex-col justify-center items-center bg-[var(--secondary)] py-16 px-4">
      <h1 className="text-5xl font-bold mb-5">How It Works</h1>
      <h4 className="text-gray-400 pt-2 text-center max-w-2xl text-lg">
        Simple, fast, and effective. Get your proposal ready in 4 easy steps.
      </h4>

      <div className="flex flex-col mt-14 lg:flex-row justify-center items-start lg:items-stretch gap-6">
        {workCard.map((item, index) => (
          <div
            key={index}
            className="group 
    flex flex-col items-start 
    bg-[var(--primary)] 
    p-6 rounded-xl relative w-64 
    border border-[var(--border)]
    transition-all duration-300 
    hover:shadow-xl 
    hover:-translate-y-2 
    hover:border-purple-400/50 
    hover:bg-white/60 
    backdrop-blur-md
    cursor-pointer"
          >

            {/* Step Badge */}
            <div className="
              absolute -top-4 left-1/2 
              transform -translate-x-1/2 
              w-8 h-8 flex justify-center items-center rounded-full 
              bg-gradient-to-r from-purple-500 to-blue-500 
              text-white font-bold shadow-md 
            ">
              {index + 1}
            </div>

            {/* Icon */}
            <div
              className="
                bg-gradient-to-r from-purple-500 to-blue-500 
                text-white py-2 px-2 rounded-xl text-3xl mb-4 
                transition-all duration-300 
                group-hover:scale-110 
                group-hover:shadow-lg
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.des}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWork;
