import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import Form from "../../sections/Form";
import image from "../../assets/computer.avif";

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
          className="flex flex-col  w-full sm:w-1/2  sm:text-left lg:mr-[80px]"
        >
          <img className="rounded-3xl" src={image} alt="" />
          

          <p className="text-2xl lg:text-5xl text-white font-bold lg:w-[800px] mt-2 p-2">
            Create a Landing Page That Performs Great
          </p>

          <p className="text-[38px] text-white font-bold mt-10">
            What is a landing page?
          </p>

          <p className="text-darkLight p-2 mt-5 mb-5 text-xl">
            Whether you work in marketing, sales, or product design, you
            understand the importance of a quality landing page. Landing pages
            are standalone websites used to generate leads or sales—in other
            words, they help you increase your revenue. Unlike typical web
            pages, landing pages only have one call to action, or CTA, and they
            are usually tied to a specific marketing or advertising campaign.
            The hyper-focused nature of landing pages means they come with a
            pretty standard set of best practices.
          </p>

          <h5 className="text-2xl lg:text-4xl text-white font-bold lg:w-[800px] mt-2 p-2">
            Landing pages vs. front pages
          </h5>

          <p className="text-darkLight p-2 mt-2 my text-xl">
            A typical front page or website in general includes a full
            navigation bar with tons of links throughout the page linking to
            other pages or pieces of content. A good landing page should only
            have one link, or multiple links that all point to the same thing.
            Having one CTA on your landing page increases conversions because
            there’s less distraction—fewer equally appealing options to prompt
            your users into leaving your landing page.
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            Your brand’s front page has totally different goals. It should show
            off your brand’s personality, let people explore different features,
            find blogs and support articles, or even apply for a job. But they
            won’t necessarily purchase your product from the front page. And
            that’s why we need landing pages.
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            Since landing pages are tied to specific campaigns, you don’t need
            to worry about users lacking information about your product. They
            arrived at your landing page because they were interested in an ad
            or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or
            similar places on the web. With super-detailed campaigns pointing to
            easy-to-use landing pages, you’re getting high-quality leads that
            are actually interested in using your product.
          </p>

          <h5 className="text-2xl lg:text-4xl text-white font-bold lg:w-[800px] mt-5 p-2">
            Best practices for creating a landing page
          </h5>

          <p className="text-xl text-darkLight p-2">
            What makes an easy-to-use landing page? Overall, it’s clear,
            concise, and doesn’t give users any options except for the main CTA.
            In terms of copy, your landing page should have one clear message.
            The header of your page should promote the desired action you want
            visitors to take and explain the benefits of performing this action.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            The visual design of your page should be very simple. Unlike your
            front page, this is not the place to go crazy with brand
            personality—so no wild animations or complex design elements. You
            wouldn’t want to distract visitors from performing the main action
            of your page.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            Landing page CTAs are typically buttons, sometimes accompanied by an
            input field if you need to collect user information. To ensure your
            buttons are clicked, make sure they stand out visually. This can be
            done by contrasting the button color with your page background and
            using clear copy on the button itself. For example, if you are
            asking visitors to book a demo, write “Book a demo” clearly on the
            CTA button.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            If you’re looking to create a high-converting landing page but don’t
            know where to start, explore professional templates at{" "}
            <span className="text-orange-500">Templyo</span>. These templates
            are designed to simplify the process, helping you build beautiful,
            effective landing pages in no time.
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
