import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import Form from "../../sections/Form";
import image from "../../assets/a70g11.avif";

const StartingCareerInWebDesignPage = () => {
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
    // Reset scroll position to top on page load
    window.scrollTo(0, 0); 

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative flex flex-col-reverse sm:flex-row md:flex-row-reverse items-center py-10 px-6 gap-10">
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="flex flex-col  w-full sm:w-1/2 sm:text-left lg:mr-[80px]"
        >
          <img className="rounded-3xl" src={image} alt="" />
          <div className="flex flex-row justify-between text-darkLight gap-2 p-2">
            <p>Apr 8, 2022</p>
            <div className="flex justify-end">
              <p>6min read</p>
            </div>
          </div>

          <h5 className="text-2xl lg:text-5xl text-white font-bold lg:w-[800px] mt-2 p-2">
          Starting and Growing a Career in Web Design
          </h5>

          <p className="text-darkLight p-2 mt-20 mb-4 text-xl">
            As the internet continues to develop and grow exponentially, jobs
            related to the industry do too, particularly those that relate to
            web design and development. The prediction is that by 2029, the job
            outlook for these two fields will grow by 8%—significantly faster
            than average. Whether you’re seeking salaried employment or aiming
            to work in a freelance capacity, a career in web design can offer a
            variety of employment arrangements, competitive salaries, and
            opportunities to utilize both technical and creative skill sets.
          </p>

          <h5 className="text-2xl lg:text-5xl text-white font-bold lg:w-[800px] mt-2 p-2">
            What does a career in web design involve?
          </h5>

          <p className="text-darkLight p-2 mt-4 my text-xl">
            A career in website design can involve the design, creation, and
            coding of a range of website types. Other tasks will typically
            include liaising with clients and discussing website specifications,
            incorporating feedback, working on graphic design and image editing,
            and enabling multimedia features such as audio and video. Requiring
            a range of creative and technical skills, web designers may be
            involved in work across a range of industries, including software
            companies, IT consultancies, web design companies, corporate
            organizations, and more.
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            In contrast with web developers, web designers tend to play a more
            creative role, crafting the overall vision and design of a site, and
            determining how to best incorporate the necessary functionality.
            However, there can be significant overlap between the roles.
          </p>

          <h5 className="text-2xl lg:text-5xl text-white font-bold lg:w-[800px] mt-5 p-2">
            Are web designers in demand?
          </h5>

          <p className="text-xl text-darkLight p-2">
            In our ever-increasingly digital environment, there is a constant
            need for websites—and therefore for web designers and developers.
            With 17.4 billion websites in existence as of January 2020, the
            demand for web developers is only expected to rise. Web designers
            with significant coding experience are typically in higher demand
            and can usually expect a higher salary. Like all jobs, there are
            likely to be a range of opportunities, some of which are better paid
            than others.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            If you are interested in pursuing a career in web design or starting
            a freelance business, having a professional portfolio website is
            essential. You can explore ready-made web design templates tailored
            for showcasing your work and impressing potential clients at
            Templyo. These templates make it easier to create stunning websites
            without the need for extensive coding knowledge.
          </p>
        </motion.div>

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
      <Form />

      <Footer />
    </>
  );
};

export default StartingCareerInWebDesignPage;
