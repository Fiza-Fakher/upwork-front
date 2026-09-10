import React from 'react';
import { Check } from 'lucide-react';
import { plans } from '../../constant';

function Pricing() {
 
  return (
    <section className="flex flex-col justify-center items-center px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl lg:text-6xl md:text-5xl font-bold text-gray-900 mb-3">
        Simple Pricing
      </h1>
      <p className="text-gray-600 text-lg mb-12 lg:pt-4">
        Start free, upgrade when you need more
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[78%] max-w-4xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-3xl p-8 h-[105%] ${
              plan.isPremium ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
            }`}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {plan.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {plan.subtitle}
              </p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {plan.price}
              </div>
              <p className="text-gray-600 text-sm">
                {plan.credits}
              </p>
            </div>

            <button
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white mb-6 transition-all ${
                plan.isPremium
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {plan.button}
            </button>

            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;