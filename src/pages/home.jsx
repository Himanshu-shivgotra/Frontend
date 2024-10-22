import { useState } from "react";
import CardsSection from "../sections/processSection";
import DisclaimerSection from "../sections/disclaimer";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="bg-blue-500 flex flex-col">
        {/* Announcement Section */}
        <div className="bg-[#B52685] flex text-white text-start font-semibold py-2 px-4 sm:px-12 text-xs sm:text-sm w-full">
          <span>
            <img
              src="https://m.media-amazon.com/images/G/31/amazonservices/Announc.webp"
              className="h-5 sm:h-6 mr-2 sm:mr-3 "
              alt="img"
            />
          </span>
          &nbsp;Just Announced: Now Amazon.in sellers will save more as they sell more.
          <a href="#" className="underline ml-2">
            Explore now
          </a>
        </div>

        {/* Main Content Section */}
        <div className="container w-full sm:w-2/3 mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-4 bg-blue-500">
            <div>
              <img
                src="https://m.media-amazon.com/images/G/01/sell/images/seller-central_logo-white.svg"
                className="h-8 sm:h-11 w-[10rem] sm:w-[15rem]"
                alt="Seller Logo"
              />
            </div>
            <div className="flex space-x-4 sm:space-x-10 w-full sm:w-1/3 justify-around mt-4 sm:mt-0">
              <div
                className="relative flex items-center cursor-pointer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Link to={'login'}>
                  <h2 className="text-white text-base sm:text-lg">Login</h2>
                </Link>
                <div
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${hover ? "w-full" : "w-0"
                    }`}
                />
              </div>
              <Link
                to={"store"}
                className="bg-orange-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300 text-center text-sm sm:text-base"
              >
                Buy Items
              </Link>
            </div>
          </div>

          {/* Hero Section */}
          <div className="flex flex-col-reverse sm:flex-row justify-between">
            <div className="flex flex-col items-start justify-start text-start py-8 sm:py-16 w-full sm:w-1/2">
              <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
                Begin your selling journey on Amazon.in
              </h1>
              <p className="text-white text-base sm:text-lg mb-8">
                Login or register as a seller on Amazon.in and pay lesser selling fee* with every order
              </p>

              <div className="flex w-full space-x-4 mb-8 items-center">
                <button className="bg-orange-500 shadow-lg text-black py-2 sm:py-4 px-6 sm:px-12 rounded-full text-base sm:text-xl font-bold hover:bg-orange-600 transition duration-300">
                  Start Selling
                </button>
                <button className="bg-white text-black py-1 px-4 sm:px-6 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition duration-300 border-2 border-black">
                  Know More
                </button>
              </div>

              <div
                className="relative w-full"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <a href="#" className="text-white text-base sm:text-lg">
                  Disclaimer
                </a>
                <div
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${hover ? "w-20" : "w-0"
                    }`}
                />
              </div>
            </div>

            <div className="w-full sm:w-auto mb-8 sm:mb-0 flex justify-center">
              <img
                src="https://m.media-amazon.com/images/G/31/amazonservices/Go_live_selling_fee_drop_KV.webp"
                alt="Amazon Seller Image"
                className="w-[250px] sm:w-[397px] h-[250px] sm:h-[400px] md:object-contain rounded-full transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white w-full py-8 sm:py-12">
          <div className="max-w-full sm:max-w-3xl mx-auto bg-blue-500 text-white py-6 px-4 sm:px-8 rounded-lg">
            <p className="font-bold text-lg sm:text-xl flex">
              <span>
                <img
                  src="https://m.media-amazon.com/images/G/01/sell/images/icon-magic-sparkle-white.svg"
                  alt=""
                  className="mr-2"
                />
              </span>
              5 Steps to increase your chances of earning ₹1 Lakh or more within 60 days of launch*
            </p>
            <a href="#" className="text-white underline mt-2">
              Disclaimer
            </a>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <CardsSection />
      <DisclaimerSection />
      <Footer />
    </>
  );
};

export default Home;
