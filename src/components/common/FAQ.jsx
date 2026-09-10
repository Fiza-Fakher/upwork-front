import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../../constant';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center px-6 py-16 mx-auto bg-[var(--secondary)]">
  <h1 className="text-5xl font-bold text-gray-900 mb-2 text-center">
    Frequently Asked Questions
  </h1>
  <h5 className="text-gray-600 mb-8 text-center pt-4">
    Everything you need to know
  </h5>

  
  <div className="w-full max-w-3xl mx-auto space-y-4 ">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-sm transition-shadow bg-[var(--primary)]"
      >
        <div
          className="flex justify-between items-center"
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="font-semibold text-gray-900">{faq.question}</h3>
          {openIndex === index ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {openIndex === index && (
          <p className="mt-2 text-gray-600 pt-4">{faq.answer}</p>
        )}
      </div>
    ))}
  </div>
</section>

  );
}

export default FAQ;
