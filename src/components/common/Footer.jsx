import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-white text-black pt-12 pb-2 flex flex-col items-center">
      
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between lg:gap-20 px-4 sm:px-6">
        
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className='flex justify-center items-center'>
            <img src="logo.png" alt="Logo" className='h-16'/>
            <h2 className='font-bold text-xl pl-2 pt-4'>QuickPitch</h2>
          </div>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xs">
            Generate winning proposals instantly.
          </p>
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left mt-8 md:mt-0">
          
          <div className='md:ml-20'>
            <h3 className="font-bold mb-2 text-base sm:text-base">Product</h3>
            <ul className="space-y-2 text-gray-500 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-600 transition">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">How It Works</a></li>
            </ul>
          </div>

          <div className='md:ml-20'>
            <h3 className="font-bold mb-2 text-base sm:text-base">Legal</h3>
            <ul className="space-y-1 text-gray-500 text-sm sm:text-base">
              <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className='md:ml-40'>
            <h3 className="font-bold mb-2 text-base sm:text-base">Contact</h3>
            <ul className="space-y-1 text-gray-500 text-sm sm:text-base">
              <li><a href="mailto:hello@proposalai.com" className="hover:text-blue-600 transition">hello@proposalai.com</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Support</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Text */}
      <div className="w-full bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
    
    <div className="w-full h-px bg-gray-300 mb-6"></div>

    {/* Copyright + Made with love */}
    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm lg:text-base pb-8">
      <p>© 2025 ProposalAI. All rights reserved.</p>

      <p className="mt-4 md:mt-0">
        Made with <span className="text-red-500">❤️</span> by Fiza Fakher      </p>
    </div>
  </div>
</div>
    </footer>
  );
}

export default Footer;