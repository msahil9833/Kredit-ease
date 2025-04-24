import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Needhelp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="needhelp" className="boot-container px-4 py-10">
      <h1 className="text-[50px] md:text-[70px] text-center mb-10">Need Help ?</h1>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="space-y-10 w-full lg:w-auto">
          {[
            {
              icon: <BsTelephone className="text-[50px]" />,
              title: "Call Anytime",
              detail: "9669669866",
            },
            {
              icon: <IoMailOutline className="text-[50px]" />,
              title: "Write Email",
              detail: "kreditease@gmail.com",
            },
            {
              icon: <IoLocationOutline className="text-[50px] " />,
              title: "Visit Office",
              detail: "3rd floor plot no 23 PU-4 Scheme no 54 In front of NRK BiZ park, Near Platinum plaza Indore 452001",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-5 sm:gap-10">
              <div className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] bg-[#A6BD8F1A] rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-[20px] sm:text-[26px] font-bold">{item.title}</p>
                <p className="text-[18px] sm:text-[24px] text-[#A6BD8F]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-15 w-full lg:w-[688px]">
          {[
            { question: "How does KreditEase help in Credit Card to Bank Account Settlement?", answer: "KreditEase allows you to convert your available credit card limit into cash, which is directly transferred to your bank account at minimal charges. This service is useful for urgent financial needs like medical expenses, bill payments, or business requirements" },
            { question: "What are the eligibility criteria for getting a Personal Loan through KreditEase?", answer: "To apply for a personal loan, you need to be either a salaried or self employed individual with a stable source of income. A good credit score (ideally 700+) is recommended for quick approval. Additionally, you must provide basic KYC documents such as ID proof, address proof, and income proof. Loan approval also depends on the lender’s specific criteria." },
            { question: "How long does it take to get a Business Loan approved", answer: "The approval time for a business loan depends on the loan amount and your documents. Generally, it takes 24-72 hours for processing, and once approved, the funds are disbursed within a few days." },
            { question: "Can I apply for a credit card through kreditEase ?", answer: "Yes! KreditEase helps you find and apply for the best credit card based on your financial needs. We offer lifetime free cards, cashback cards, travel rewards cards, and more, along with a hassle-free application process and expert assistance." },
            
          ].map((faq, index) => (
            <div key={index} className="space-y-2">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
                
              >
                <p className="text-[18px] sm:text-[20px]">{faq.question}</p>
                <IoIosArrowDown className={`text-xl transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              {openIndex === index && <p className="text-[16px] sm:text-[18px] mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Needhelp;

