import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const experiences = [
  {
    id: 1,
    company: "Starting and Growing a Carreer on web Desing",
    description:
      "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    duration: "Jan 2020 - Present",
    link: "/starting-a-career-in-web-design", // Add the link to a specific page for each experience
  },
  {
    id: 2,
    company: "Create a Landing Page that Performs Great",
    description:
      "Developed innovative UI designs for e-commerce platforms, enhancing usability and boosting sales by 30%.",
    duration: "May 2018 - Dec 2019",
    link: "/create-a-landing-page-that-performs-great", // Add the link to a specific page for each experience
  },
  {
    id: 3,
    company: "How can Designer Prepare for the Future?",
    description:
      "Collaborated with developers to build seamless web applications, ensuring responsive and accessible design.",
    duration: "Jul 2015 - Apr 2018",
    link: "/how-can-designers-prepare-for-the-future", // Add the link to a specific page for each experience
  },
];

const Design = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8 my-20"
    >
      {/* Heading Section */}
      <div className="text-center lg:text-left lg:w-1/2 lg:mr-28 lg:ml-auto">
        <p className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          DESIGN
        </p>
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b6b4bd] opacity-20 mt-2">
          THOUGHTS
        </p>
      </div>

      {/* Experience Cards */}
      <div className=" mx-auto px-4 lg:w-1/2 lg:mr-36 lg:ml-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 px-4 lg:grid-cols-1 lg:w-[700px] mx-auto place-items-center">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              to={exp.link} // Set the link dynamically from the `link` property
              className="flex flex-col bg-transparent p-6 gap-4 rounded-lg hover:bg-[#181C14] duration-300 transform hover:-translate-y-2 transition-all shadow-lg"
            >
              <div className=" group hover flex-1">
                <div className="flex flex-row justify-between">
                  <p className="text-white font-bold text-xl sm:text-2xl lg:text-2xl lg:w-[400px]">
                    {exp.company}
                  </p>
                  <div className=" text-xl sm:text-2xl text-orange-600 flex justify-end">
                    <MdArrowOutward className="hidden md:block lg:block transform transition-all duration-100 group-hover:translate-y-[-15px]" />
                  </div>
                </div>
                <p className="text-darkLight text-sm sm:text-base mt-2">
                  {exp.description}
                </p>
                <div className="flex flex-row">
                  <p className="text-darkLight mt-3">{exp.duration}</p>
                  <div className="justify-end ml-auto">
                    <p className="text-darkLight mt-3">6min read</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Design;
