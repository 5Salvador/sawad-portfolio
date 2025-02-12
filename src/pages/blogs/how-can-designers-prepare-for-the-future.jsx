import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import Form from "../../sections/Form";
import image from "../../assets/designers.avif";

const HowCanDesignersPrepareForTheFuture = () => {
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
          className="flex flex-col  w-full sm:w-1/2 lg:mr-[80px]"
        >
          <img className="rounded-3xl" src={image} alt="" />
          <div className="flex flex-row justify-between text-darkLight gap-2 p-2">
            <p>Apr 8, 2022</p>
            <div className="flex justify-end">
              <p>6min read</p>
            </div>
          </div>
          
            <p className="text-2xl lg:text-5xl text-white font-bold lg:w-[700px] mt-2 p-2">
              How Can Designers Prepare for the Future?
            </p>
       

          <p className="text-darkLight p-2 mt-16 mb-5 text-xl">
            Last month, I had the chance to attend CSS Day in Amsterdam, a two
            day event split between a “UI day” focusing on the intersection of
            design and development and a “CSS day”, with speakers who covered
            more in-depth, technical CSS subjects. The talks were as diverse as
            the background of the speakers themselves, but there was one common
            thread: In this era of rapid change, are we, as product people,
            equipped to design for automation, machine learning, and AI?
          </p>

          <h5 className="text-2xl lg:text-[38px] text-white font-bold lg:w-[700px] mt-2 p-2">
            What does automation mean for designers?
          </h5>

          <p className="text-darkLight p-2 mt-2 my text-xl">
            It&apos;s hard to work on a product team that hasn&apos;t automated
            some part of their workflow in the name of productivity. If machines
            can take care of the repeatable tasks and heavy lifting, designers
            can focus on doing more meaningful work. But how does this affect
            the way we use the work being created by machines?
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            Josh Clark, founder of design studio Big Medium, provoked the
            audience with this very question during his talk, &apos;A.I. is your
            New Design Material&apos;. Some of the most impressive advancements
            in recent technology are things like facial recognition, predictive
            text, and image search, all powered by machine learning. But
            it&apos;s important to remember—all of these technologies are still
            built on code. The upside is less room for error. No real emotions,
            expectations, or feelings get in the way of the job it was designed
            to do.
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

          <p className="text-darkLight p-2 my-2 text-xl">
            Since landing pages are tied to specific campaigns, you don’t need
            to worry about users lacking information about your product. They
            arrived at your landing page because they were interested in an ad
            or post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or
            similar places on the web. With super-detailed campaigns pointing to
            easy-to-use landing pages, you’re getting high-quality leads that
            are actually interested in using your product.
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            Yet, as humans, we assume that when facial recognition fails, the
            whole process is inherently flawed. But was it really?
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            According to Josh, that is the most fundamental thing to understand
            when it comes to machines. Not meeting our human expectations,
            doesn’t automatically make the technology itself a failure. These
            things were, by definition, built on logic, which begs the question:
            Can a robot&apos;s solution actually be wrong?
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            The point of introducing machine learning into our products was
            never to have them do all the work. Instead, algorithms and
            logic-based solutions ought only provide humans with better insight
            so as to empower us to arrive at better solutions, faster.
          </p>

          <p className="text-darkLight p-2 my-2 text-xl">
            This fundamental understanding our users that really helps us make
            better products. This might be a simple example, but if a computer
            can figure out how to walk on it&apos;s own, maybe it&apos;s time to
            start investigating why and how these solutions were formed.
          </p>

          <h5 className="text-2xl lg:text-[38px] text-white font-bold lg:w-[700px] mt-5 p-2">
            How do we design for the unknown future?
          </h5>

          <p className="text-xl text-darkLight p-2">
            Jared Spool, Co-Founder of UIE asks, “What was the most important
            thing you learned yesterday, and how will it impact what you do in
            the future?”
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            As designers and researchers, we essentially always need to think
            about how we design products for the future, even as we’re meeting
            the demands of present day design. A tall order, especially when
            things move as fast as they have been over the last decade.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            To start, Jared advocates for looking back at the ways in which our
            design processes have already changed.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            Remember when UX/UI wasn&apos;t a priority for many companies? As a
            consultant during a time when the Internet had yet to hit mass
            market appeal, Jared was able to steer many companies into a mindset
            that considered the user experience of a product.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            But this also lets us gain input into how UX and UI has looked over
            the years, which might give us a better idea of what these concepts
            will look like moving forward. Jared describes a term called
            &quot;The UX Tipping Point&quot;, with great actionable steps on how
            to get there.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            In the past, designers had to fight for a seat at the table. If
            today you’re not starting from a place of advocating for user
            experience (like they were 10 years ago), they’re likely not
            starting at that tipping point. As a result, designers still have to
            ensure that the role of UX matures within the company, as well as
            the understanding of what makes UX important. When an organization
            hits the last stage, and fully embraces UX design from everything
            the company does, they fully hit The UX Tipping Point.
          </p>

          <h5 className="text-2xl lg:text-[38px] text-white font-bold lg:w-[600px] mt-5 p-2">
            Are we designing for users or ourselves?
          </h5>

          <p className="text-xl text-darkLight p-2 mt-2">
            People don&apos;t always know what they want, even if they think
            they do. As Joe Leech, a UX psychologist says, &quot;People want
            more choices, but can&apos;t deal with them.&rdquo;
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            So how do we design for our users, if our users aren’t always
            telling us the truth? This is one of the most important questions,
            and something that extensive UX research helps us accomplish.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            Back in the 2000s, psychologists Sheena Iyengar and Mark Lepper ran
            a study regarding consumer choices. They went to a local
            supermarket, and instructed the store to only sell 6 varieties of
            jam one week, followed by 30 varieties the following week.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            They ran a study on how much jam was sold, and to everyone&apos;s
            surprise, more jam was sold on the week with only 6 choices. But
            interestingly enough, when the consumers were asked which week they
            preferred more, they responded with the week that had 30 choices.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            Using this analogy, Joe makes a point that is hard to argue with,
            &ldquo;A designer who doesn&apos;t understand psychology is going to
            be more successful than an architect who doesn&apos;t understand
            physics&rdquo;.
          </p>

          <p className="text-xl text-darkLight p-2 mt-2">
            User research, and a wide variety of it, helps teams get as close as
            possible to the root of a user’s needs, over their wants. Studying
            responses on a larger scale is more work, but it helps form the
            foundation for true UX.
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

export default HowCanDesignersPrepareForTheFuture;
