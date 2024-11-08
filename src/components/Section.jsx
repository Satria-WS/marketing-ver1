import { motion } from "framer-motion";
import image_4 from "../assets/image/4.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Section = () => {
  return (
    <div className="container border border-blue-500">
      {/* image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          className="w-full max-w-[550x] "
          src={image_4}
          alt="orang-ngelamun"
        />
      </motion.div>

      {/* section-1 */}
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
        className="flex flex-col justify-center items-center py-20 px-10 space-y-5"
      >
        <p>Tech Addict</p>
        <h1 className="text-4xl text-center font-semibold">
          Tech really Understood Our
          <span className="text-gray-400 font-semibold underline block">
            Needs
          </span>
        </h1>
        <button className="bg-primary hover:bg-black hover:text-white py-2 px-4 rounded-lg duration-300">
          More News
        </button>
      </motion.div>
      {/* section-2 */}
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
        className="flex flex-col justify-center items-center space-y-5"
      >
        <h2 className="text-3xl font-semibold">Join our email</h2>
        <p>Get 20% off per order</p>
        <button className="bg-primary hover:bg-black hover:text-white py-2 px-4 rounded-md duration-700">
          Subcribe
        </button>
      </motion.div>
      <div>
        {/* secton-icon */}
        <ul className="flex space-x-3 justify-center py-5">
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
