import { motion } from "framer-motion";

export default function PremiumTools() {
  const tools = [
    { name: "Framer", desc: "Website Builder", img: "/framer.png" },
    { name: "Figma", desc: "Design Tool", img: "/figma.png" },
    { name: "Lemon Squeezy", desc: "Payments Provider", img: "/lemon.png" },
    { name: "ChatGPT", desc: "AI Assistant", img: "/chatgpt.png" },
    { name: "Notion", desc: "Productivity Tool", img: "/notion.png" },
    { name: "Nextjs", desc: "React framework", img: "/nextjs.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen px-4 my-20"
    >
      {/* Heading */}
      <div className="text-center lg:text-left lg:w-1/2 lg:mr-32 lg:ml-auto">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          PREMIUM
        </h1>
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#b6b4bd] opacity-20 mt-0">
          TOOLS
        </h1>
      </div>

      {/* Tools Grid */}
      <div className="mx-auto px-4 lg:w-1/2 lg:mr-36 lg:ml-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-transparent p-6 rounded-lg hover:bg-gray-900"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-lg p-2 px-2 py-2">
                <img src={tool.img} alt={tool.name} className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white font-bold text-2xl">{tool.name}</p>
                <p className="text-md text-darkLight font-semibold">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
