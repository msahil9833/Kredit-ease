import { img } from '../assets/img';
import { GoDatabase } from 'react-icons/go';

const Aboutus = () => {
  return (
    <div
      id="aboutus"
      className="boot-container flex flex-col md:flex-row items-center mt-16  mb-30 px-5"
    >
      {/* Image Section */}
      <div className="w-96 mr-10 flex justify-center md:justify-start">
        <img
          src={img.person}
          alt="person"
          className="w-full rounded-2xl max-w-sm md:max-w-md lg:max-w-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-center md:text-left">
        <p className="text-lg text-[#A6BD8F] font-medium">About Us</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          About KreditEase
        </h1>
        <p className="text-gray-600 text-lg mt-4">
        A venture of UNNATI ASSOCIATES KreditEase is your one stop solution for comprehensive Credit Card
          Services and Instant Credit Card Settlement to Bank Account. Whether
          you re looking to apply for a new credit card, upgrade your existing
          one, or instantly convert your credit limit into cash, we offer
          seamless financial solutions tailored to your needs. Our expert team
          ensures fast processing, minimal paperwork, and complete transparency
          every step of the way.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6">
          {[
            'Instant Credit Card Settlement to Bank Account',
            'Expert Credit Card Assistance',
            'Fast & Hassle-Free Process',
            'Secure & Transparent Services',
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#032539]">
                <GoDatabase className="text-[#A6BD8F] text-[30px]" />
              </div>
              <p className="text-[18px]">{text}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <a
  href="https://wa.me/919669669866"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 w-[174px] h-[44px] border border-black text-black px-4 py-2 transition hover:bg-[#A6BD8F] hover:text-white">
    Learn More...
  </button>
</a>

      </div>
    </div>
  );
};

export default Aboutus;
