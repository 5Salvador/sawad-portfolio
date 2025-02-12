import { motion } from "framer-motion";
export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8 my-20"
    >
      <div className="text-center lg:text-left lg:w-1/2 lg:mr-32 lg:ml-auto">
        {/* Heading */}

        <div className="text-center lg:text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            LET&apos;S WORK
          </h1>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 mt-0">
            TOGETHER
          </h1>
        </div>

        {/* Form */}
        <div className="">
          <form className="mt-8 space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#b6b4bd] bg-opacity-20 text-darkLight border-none  rounded-md py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your@email.com"
                  className="w-full bg-[#b6b4bd] bg-opacity-20 text-gray-300 border-none  rounded-md py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Budget
              </label>
              <select className="w-full bg-[#b6b4bd] bg-opacity-20 text-gray-300 border border-orange-500 rounded-md py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none">
                <option className="text-black">$5k - $10k</option>
                <option className="text-black">$10k - $20k</option>
                <option className="text-black">$20k - $50k</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                placeholder="Message"
                className="w-full bg-[#b6b4bd] bg-opacity-20 text-gray-300 border-none  rounded-md py-3 px-4 h-32 resize-none focus:ring-2 focus:ring-orange-500 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white text-lg font-semibold py-3 rounded-md hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
