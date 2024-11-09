import { motion } from "framer-motion";
import image_4 from "../assets/image/4.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Section = () => {
  return (
    <div className="container border border-blue-500">
      <div className="flex flex-col items-center md:flex-row  min-h-[500px]">
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center   w-full"
        >
          <img
            className="w-full max-w-[450px] xl:max-w-[600px] 2xl:max-w-[700px] 2xl:ml-20 "
            src={image_4}
            alt="orang-ngelamun"
          />
        </motion.div>

        {/* section-1 Tech addict */}
        <motion.div
          variants={{
            initial: {
              y: 50,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center md:items-start text-center md:text-left py-10 px-10 space-y-5"
        >
          <p>Tech Addict</p>
          <h1 className="text-4xl  font-semibold">
            Tech really Understood Our
            <span className="text-gray-400 font-semibold underline block">
              Needs
            </span>
          </h1>
          <button className="bg-primary hover:bg-black hover:text-white py-2 px-4 rounded-lg duration-300">
            More News
          </button>
        </motion.div>
      </div>
      {/* section-2 email */}
      <motion.div
        variants={{
          initial: {
            y: 50,
            opacity: 0,
          },
          animate: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.8,
            },
          },
        }}
        initial="initial"
        whileInView="animate"
        className="flex flex-col justify-center items-center space-y-5 pt-10"
      >
        <h2 className="text-3xl font-semibold">Join our email</h2>
        <p>Get 20% off per order</p>
        <button className="bg-primary hover:bg-black hover:text-white py-2 px-4 rounded-md duration-700">
          Subcribe
        </button>
      </motion.div>
      {/* secton-icon */}
      <div className="">
        <ul className="flex space-x-3 justify-center py-5 ">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Section;
