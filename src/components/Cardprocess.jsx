import { img } from '../assets/img';

const Cardprocess = () => {
  return (
    <div id='cardprocess' className="mt-50 px-4">
      <div className="text-center">
        <p className="text-[20px] text-[#A6BD8F]">Card Process</p>
        <h1 className="text-[40px] md:text-[50px] font-bold text-[#032539]">
        How to Get the Card with KreditEase
        </h1>
        <p className="text-[18px] max-w-3xl mx-auto">
        KreditEase makes getting your new credit card fast, easy, and hassle-free!
Let me know if you want to add more specific details or contact info!

        </p>
      </div>

      {/* Steps */}
      <div className="boot-container space-y-20 mt-20">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step 1</p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
             Apply Easily
            </h1>
            <p className="text-[16px] md:text-[18px]">
            
            Reach out to KreditEase through our website, phone, or WhatsApp. Share your basic details and preferences so our team can recommend the best credit card suited to your needs—whether you want cashback, travel benefits, or low-interest rates.
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
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.phoneone}
              alt="Step 1"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step 2</p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
             Submit Minimal Documents
            </h1>
            <p className="text-[16px] md:text-[18px]">
            
            Provide the required documents for verification, such as your ID proof, address proof, income proof, and recent bank statements. Our process is fast, secure, and requires minimal paperwork.
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
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.phonetwo}
              alt="Step 2"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-[#A6BD8F] text-[20px] mb-3">Step 3 </p>
            <h1 className="text-[30px] md:text-[40px] font-bold mb-3">
            Quick Approval & Card Delivery
            </h1>
            <p className="text-[16px] md:text-[18px]">
           
            Once your documents are verified, we ensure quick approval. After approval, your credit card is processed and delivered to your address within a few working days!
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
          <div className="md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[400px] md:max-w-[600px]"
              src={img.phonethree}
              alt="Step 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardprocess;
