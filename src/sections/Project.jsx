import image from "../assets/image1.avif";
import { MdArrowOutward } from "react-icons/md";
import image2 from "../assets/image2.avif";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      viewport={{ once: true }}
      className=" container mx-auto px-4 mt-20 py-8 mb-20"
    >
      {/* Heading Section */}
      <div className="text-center lg:text-left lg:w-1/2 lg:mr-32 lg:ml-auto">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          RECENT
        </h1>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b6b4bd] opacity-20 mt-0">
          PROJECTS
        </h1>
      </div>

      {/* Projects Section */}

      <div className="mx-auto px-4 lg:w-1/2 lg:mr-36 lg:ml-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:grid-cols-1 max-w-[800px] mx-auto w-full place-items-center">
          {[
            { id: 1, title: "Revo", desc: "Free Framer Template", img: image },
            {
              id: 2,
              title: "NajmAI",
              desc: "SaaS Framer Template",
              img: image2,
            },
            {
              id: 3,
              title: "Nashra",
              desc: "SaaS Framer Template",
              img: image,
            },
          ].map((project) => (
            <div
              key={project.id}
              className="group  flex w-full bg-transparent p-4 gap-4 rounded-lg hover:bg-[#181C14] duration-300 transform hover:-translate-y-2 transition-all items-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  {project.title}
                </p>
                <p className="text-darkLight text-md sm:text-md">
                  {project.desc}
                </p>
              </div>
              <div className="text-xl sm:text-2xl text-orange-600 flex items-center shrink-0 mb-24">
                <MdArrowOutward className="hidden md:block transform transition-all duration-100 group-hover:translate-y-[-15px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
