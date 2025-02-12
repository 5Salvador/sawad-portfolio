import { PiSuitcaseBold } from "react-icons/pi";
import { FaRegEdit, FaRegFolder } from "react-icons/fa";
import { FiHome, FiTool } from "react-icons/fi";
import { motion } from "framer-motion";


const Navbar = ({ onScroll }) => {
  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  // OnClick functions for individual icons
  const handleHomeClick = () => {
    onScroll("home");
  };

  const handleProjectClick = () => {
    onScroll("project");
  };

  const handleExperienceClick = () => {
    onScroll("experience");
  };
  const handleToolsClick = () => {
    onScroll("tools");
  };
  const handleDesignClick = () => {
    onScroll("design");
  };


  return (
    

    <motion.div
      className="flex flex-row justify-center mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

   
      
      <div className="flex flex-row justify-center gap-4  p-2 bg-[#1C1A19] rounded-xl w-full max-w-[300px] my-10">
        {[
          { icon: <FiHome onClick={handleHomeClick} />, label: "Home" },
          { icon: <FaRegFolder onClick={handleProjectClick} />, label: "Project" },
          { icon: <PiSuitcaseBold onClick={handleExperienceClick} />, label: "Experience" },
          { icon: <FiTool onClick={handleToolsClick} />, label: "Tools" },
          { icon: <FaRegEdit onClick={handleDesignClick} />, label: "Thoughts" },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            className="relative group flex flex-col items-center"
          >
            <div className="text-white md:w-8 md:h-8 w-6 h-6 cursor-pointer text-2xl">
              {item.icon}
            </div>
            <div className="absolute top-full mt-1 px-2 py-1 text-white text-sm bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
