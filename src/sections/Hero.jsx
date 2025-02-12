import { useEffect, useState } from "react";
import { statistics } from "../constants";
import { LuLayers3 } from "react-icons/lu";
import { LuTable2 } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";


const Hero = () => {
  const [cardPosition, setCardPosition] = useState(200); // Default top value for the fixed card

  // Detect when the footer is approaching
  const handleScroll = () => {
    const footer = document.getElementById("footer"); // Assuming you have a footer with an id of "footer"
    const card = document.getElementById("card");

    if (footer) {
      const footerTop = footer.getBoundingClientRect().top;
      const cardHeight = card.getBoundingClientRect().height;

      // When the footer is 150px away from the bottom of the card
      if (footerTop < cardHeight + 100) {
        setCardPosition(footerTop - cardHeight - 20); // Stop the card before the footer
      } else {
        setCardPosition(200); // Reset the card position when not near the footer
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col-reverse sm:flex-row md:flex-row-reverse items-center py-10 px-6 gap-10">
      {/* Left Section - Text Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="flex flex-col items-start w-full sm:w-1/2 text-center sm:text-left lg:mr-[150px]"
      >
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          SOFTWARE
        </h1>
        <span className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#353334] opacity-20 mt-0 sm:text-center md:text-center">
          ENGINEER
        </span>

        <p className="text-gray-400 text-lg sm:text-xl max-w-lg mt-4">
          Passionate about creating intuitive and engaging user experiences.
          Specializing in transforming ideas into beautifully crafted products.
        </p>

        {/* Statistics Section */}
        <div className="flex justify-start items-start flex-wrap w-full mt-10 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start"
            >
              <p className="text-7xl font-bold text-white">{stat.value}</p>
              <p className="leading-7 text-gray-500 text-lg w-[120px] text-center sm:text-left">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 px-4 mt-10">
          <div className="w-full max-w-4xl sm:max-w-md lg:max-w-4xl h-[230px] lg:w-[310px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#f46c38] dark:border-gray-700">
            <LuLayers3 className="text-white text-4xl my-2" />
            <p className="mb-3 font-semibold text-white md:text-2xl">
              DYNAMIC ANIMATION, MOTION DESIGN
            </p>
            <div className="text-right">
              <a
                href="/experience"
                className="inline-flex font-medium rounded-lg border-2 p-2 hover:bg-white duration-300"
              >
                <FaLongArrowAltRight className=" text-white hover:text-orange-600"/>
              </a>
            </div>
          </div>

          <div className="w-full max-w-xs sm:max-w-md lg:max-w-4xl p-6 h-[230px] lg:w-[350px] lg:mx-28 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-[#c5ff41] dark:border-gray-700">
            <LuTable2 className="text-black text-4xl my-2" />
            <p className="mb-3 font-semibold text-black md:text-2xl">
              FRAMER, FIGMA, WORDPRESS, REACTJS
            </p>
            <div className="text-right">
              <a
                href="/projects"
                className="inline-flex font-medium hover:bg-black rounded-lg border-2 border-black p-2 duration-300"
              >
                <FaLongArrowAltRight className="hover:text-white"/>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Fixed Card Component */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        id="card"
        className=" lg:fixed flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 sm:w-96 sm:p-2 sm:h-96 md:w-[344px] md:h-[640px] lg:w-[344px] lg:h-[500px] lg:py-4 p-4"
        style={{
          top: `${cardPosition}px`,
          left: "10%", // Center the card
        }} // Dynamically adjust position
      >
        {/* Centered Image */}
        <div className="flex justify-center">
          <div className="block overflow-hidden rounded-md md:w-[240px] md:h-[284px] lg:w-[240px] lg:h-[284px]">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Centered Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
          <h6 className="mb-2 text-black text-3xl font-bold">Aabid Ahmed</h6>
          <p className="text-slate-600 leading-normal font-semibold">
            A Software Engineer who has developed countless innovative solutions
            for various clients.
          </p>
        </div>

        {/* Icons at the Bottom */}
        <div className="flex flex-row px-4 pb-4 pt-0 mt-auto gap-5 justify-center text-orange-600 text-2xl">
          <FiTwitter />
          <IoLogoInstagram />
          <MdOutlineMail />
          <BiBasketball />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
