import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Form from "../sections/Form";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";

const experiences = [
  {
    id: 1,
    company: "PixelForge Studios",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    duration: "Jan 2020 - Present",
  },
  {
    id: 2,
    company: "Creative Minds",
    description:
      "Developed innovative UI designs for e-commerce platforms, enhancing usability and boosting sales by 30%.",
    duration: "May 2018 - Dec 2019",
  },
  {
    id: 3,
    company: "TechNova Solutions",
    description:
      "Collaborated with developers to build seamless web applications, ensuring responsive and accessible design.",
    duration: "Jul 2015 - Apr 2018",
  },
];

const ExperiencePage = () => {
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
    <>
      <Navbar />

      <div className="container mx-auto px-4 my-10 py-8">
        {/* Heading Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:mr-28 lg:ml-auto">
          <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            12 YEARS OF
          </p>
          <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b6b4bd] opacity-20 mt-2">
            EXPERIENCE
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mx-auto px-4 lg:w-1/2 lg:mr-36 lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 px-4 lg:grid-cols-1 lg:w-[700px] mx-auto place-items-center">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col bg-transparent p-6 gap-4 rounded-lg hover:bg-[#181C14] duration-300 transform hover:-translate-y-2 transition-all shadow-lg"
              >
                <div className="flex-1">
                  <div className="flex flex-row justify-between">
                    <p className="text-white font-bold text-xl sm:text-2xl">
                      {exp.company}
                    </p>
                    <div className="text-xl sm:text-2xl text-orange-600 flex items-center justify-end">
                      <MdArrowOutward />
                    </div>
                  </div>

                  <p className="text-darkLight text-sm sm:text-base mt-2 ">
                    {exp.description}
                  </p>
                  <p className="text-darkLight mt-3">{exp.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto p-4 ml-auto mr-52 md:mr-[150px] md:ml-32 lg:ml-1 xl:ml-2">
              <Form />
              </div>
        {/* Right Section - Fixed Card Component */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          id="card"
          className=" lg:fixed flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 sm:w-96 sm:h-96 md:w-[344px] md:h-[640px] lg:w-[344px] lg:h-[500px] lg:py-4 p-4"
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
              A Software Engineer who has developed countless innovative
              solutions for various clients.
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
   
      <Footer />
    </>
  );
};

export default ExperiencePage;
