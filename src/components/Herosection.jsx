import { useState } from 'react';
import { img } from '../assets/img';
import { FiMenu, FiX } from 'react-icons/fi';

const Herosection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full lg:h-[800px] min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img.hero})` }}
    >
      <div className="boot-container flex pt-5 justify-between">
        <img className="w-10 md:w-32" src={img.logo} alt="logo" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-lg">
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('herosection')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Home
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('aboutus')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            About us
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('cardprocess')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Card
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('features')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Features
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('needhelp')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact us
          </h1>
        </div>

        <a
          href="https://wa.me/919669669866"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden lg:block w-40 h-12 bg-[#A6BD8F] px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
            Need help?
          </button>
        </a>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-900 text-white p-5 z-40">
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('herosection')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Home
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('aboutus')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            About us
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('cardprocess')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Card
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('features')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Features
          </h1>
          <h1
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById('needhelp')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact us
          </h1>
          <a
            href="https://wa.me/919669669866"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hidden lg:block w-40 h-12 bg-[#A6BD8F] px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
              Need help?
            </button>
          </a>
        </div>
      )}

      {/* Hero Section */}
      <div
        id="herosection"
        className="boot-container flex flex-col gap-10 lg:gap-32 md:flex-row items-center mt-10 md:mt-36 px-5"
      >
        <div className="text-center md:text-left max-w-xl">
          <h1 className="lg:w-[622px] text-3xl sm:text-4xl md:text-[70px] font-[800] text-white">
            Your Ultimate <br />
            <span className="text-[#A6BD8F]">Financial Partner</span>
          </h1>
          <p className="text-base sm:text-lg text-white mt-4">
            KreditEase is your trusted companion in navigating financial needs
            with ease and confidence. We offer seamless credit cards, loan
            services, providing you with instant access to funds from credit
            cards whenever you need them. Whether it’s for personal expenses,
            emergencies, or business needs, our quick and hassle free loan
            process ensures you get the financial support you require without
            delays..
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-10">
          <a
  href="https://wa.me/919669669866"
  target="_blank"
  rel="noopener noreferrer"
>

              <button className="w-44 h-12 bg-[#A6BD8F] px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]">
                Apply Now!!!
              </button>
            </a>
            <button
              className="w-44 h-12 border border-white text-white px-4 py-2 hover:bg-[#CADCFCE5] hover:text-[#00246B]"
              onClick={() =>
                document
                  .getElementById('weoffer')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Learn More...
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img src={img.card} alt="card" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
