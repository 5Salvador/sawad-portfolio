import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

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

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 my-20 py-8"
    >
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
      <div className=" mx-auto px-4 lg:w-1/2 lg:mr-36 lg:ml-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 px-4 lg:grid-cols-1 lg:w-[700px] mx-auto place-items-center">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col bg-transparent p-6 gap-4 rounded-lg hover:bg-[#181C14] duration-300 transform hover:-translate-y-2 transition-all shadow-lg"
            >
              <div className="group hover flex-1">
                <div className="flex flex-row justify-between">
                  <p className="text-white font-bold text-xl sm:text-2xl">
                    {exp.company}
                  </p>
                  <div className="text-xl sm:text-2xl text-orange-600 flex items-center justify-end">
                    <MdArrowOutward className="hidden md:block lg:block transform transition-all duration-100 group-hover:translate-y-[-15px]"/>
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
    </motion.div>
  );
};

export default Experience;
