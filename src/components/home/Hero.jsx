import React from "react";
import { MdOutlineElectricBolt, MdOutlinePlayCircleOutline } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { stats } from "../../constant";

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center px-4 pt-2 pb-10 bg-[var(--primary)]">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl leading-tight mt-8">
          <span>
            Generate Winning <br className="sm:block hidden" /> Upwork Proposals in <br className="sm:block hidden" /> Seconds
          </span>
        </h1>

        {/* Subheading */}
        <h5 className="text-md sm:text-base text-gray-500 mt-4 leading-relaxed">
          <span>
            Free 10 proposal credits per day — No signup needed. Start
            generating
          </span>
          <span> personalized proposals instantly.</span>
        </h5>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 mt-8 flex-wrap">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex gap-2 cursor-pointer justify-center items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
            <MdOutlineElectricBolt size={20} /> Try for Free
          </button>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border border-gray-300 text-black cursor-pointer flex gap-2 justify-center items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base mt-2 sm:mt-0">
            <MdOutlinePlayCircleOutline size={20} /> See a Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center mt-12 gap-4 flex-wrap">
          {stats.map((stat, index) => (
            <h5
              key={index}
              className="flex justify-center items-center gap-2 
                bg-[var(--secondary)] px-3 py-3 rounded-lg shadow-md 
                transition-all duration-300"
            >
              <FaRegCircleCheck className="text-green-600" />
              {stat}
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
