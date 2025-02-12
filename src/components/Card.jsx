import { useEffect, useState } from "react";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BiBasketball } from "react-icons/bi";

const Card = () => {
  const [setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer"); // Ensure your footer has an ID
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
      <div className="lg:relative lg:pb-20 ">
      <div className="lg:fixed  left-50 flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg 
        w-96 sm:w-96 sm:h-96 md:w-[344px] md:h-[640px] lg:w-[344px] lg:h-[600px] p-4">
  
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
    <h6 className="mb-2 text-black text-3xl font-bold">
    Aabid Ahmed
    </h6>
    <p className="text-slate-600 leading-normal font-semibold ">
      A Software Engineer who has developed countless innovative solutions for various clients.
    </p>
  </div>

  {/* Icons at the Bottom */}
  <div className="flex flex-row px-4 pb-4 pt-0 mt-auto gap-5 justify-center text-orange-600 text-2xl">
    <FiTwitter />
    <IoLogoInstagram />
    <MdOutlineMail />
    <BiBasketball />
  </div>

</div>

    </div>
  )
}

export default Card