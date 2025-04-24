import { img } from '../assets/img';

const Weoffer = () => {
  return (
    <div
      id="weoffer"
      className="boot-container flex flex-col md:flex-row items-center md:gap-12 lg:gap-20 mt-16 md:mt-20 mb-16 md:mb-20 px-5"
    >
      <div className="w-full max-w-xl text-center md:text-left">
        <p className="text-lg text-gray-700 font-medium">
          What Kredit Ease Offer{' '}
        </p>
        <h1 className="lg:w-[732px] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
          Instant Credit Card Settlement to Bank Account
        </h1>
        <p className="text-gray-600 text-lg mt-4">
          At KreditEase, we make accessing funds from your credit card fast,
          simple, and secure. Our Instant Credit Card Settlement to Bank Account
          service allows you to convert your available credit limit into cash,
          transferred directly to your bank account within hours. Whether you
          need quick funds for personal needs, business requirements, or
          emergencies, KreditEase offers a hassle-free process with minimal and
          transparent charges.
        </p>
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

      <div className="w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={img.mobile}
          alt="mobile"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>
    </div>
  );
};

export default Weoffer;
