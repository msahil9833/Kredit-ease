import { img } from '../assets/img';
import { GoDatabase } from 'react-icons/go';
import { TiArrowForwardOutline } from 'react-icons/ti';

const Whatoffer = () => {
  return (
    <div
      className="relative lg:h-[660px] w-full bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url(${img.fourbg})` }}
    >
      <div className="boot-container flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full md:max-w-[700px] text-center md:text-left">
          <p className="text-lg text-white font-medium">What We Offer</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-2">
          At kreditEase we specialize in providing seamless financial solutions
          </h1>
          <p className="text-white opacity-70 text-lg mt-4">
          Helping individuals and businesses manage their financial needs effortlessly. Our expert team ensures quick approvals, hassle-free processing, and secure transactions, making us a reliable choice for credit and loan services.
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

        {/* Cards Section */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="w-full max-w-[330px] lg:w-[250px] h-auto lg:h-[380px] bg-white p-5 rounded-3xl border-5 border-white border-t-[#A6BD8F] lg:-mt-40">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[16px] font-semibold pt-5">Credit Card to Bank Account Settlement </p>
            <p className="text-[16px] opacity-50 pt-5">
            Struggling with urgent cash needs but don’t want to pay high ATM withdrawal charges on your credit card.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[330px] lg:w-[250px]  h-auto lg:h-[380px]  bg-white p-5 rounded-3xl border-5 border-white border-t-[#A6BD8F] lg:ml-10 lg:-mt-30">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[16px] font-semibold pt-5">Credit Card Services</p>
            <p className="text-[16px] opacity-50 pt-5">
            Choosing the right credit card can be confusing, but with CreditEase, we simplify the process by offering expert guidance to help.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[330px] lg:w-[250px]  h-auto lg:h-[380px] bg-white p-5 rounded-3xl border-5 border-white border-b-[#A6BD8F] lg:-mb-10">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[16px] font-semibold pt-5">Personal Loan Services </p>
            <p className="text-[16px] opacity-50 pt-5">
            Need urgent funds for a medical emergency, education, home renovation, wedding, or travel.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full max-w-[330px] lg:w-[250px] h-auto lg:h-[380px]  bg-white p-5 rounded-3xl border-5 border-white border-b-[#A6BD8F] lg:ml-10 lg:mt-10 lg:-mb-10">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#032539]">
              <GoDatabase className="text-[#A6BD8F] text-[30px]" />
            </div>
            <p className="text-[16px] font-semibold pt-5">Business Loan </p>
            <p className="text-[16px] opacity-50 pt-5">
            Services For entrepreneurs and business owners, CreditEase offers customized business loan solutions to support growth.
            </p>
            <div className="w-full h-[2px] bg-gray-300 mt-5"></div>
            <div className="flex items-center gap-2 pt-5 text-[#032539] font-medium cursor-pointer">
              <p>Learn more...</p>
              <TiArrowForwardOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatoffer;
