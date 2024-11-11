import { motion } from "framer-motion";
import logo from "../assets/image/1.png";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row ">
        {/* Text */}
        <div className="flex flex-col items-center md:items-start justify-center basis-1/2 space-y-5 text-center md:text-left min-h-[300px] md:min-h-[600px]  py-20 px-10 ">
          <motion.h1
            // sliding Up
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
                  delay: 0.2,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold"
          >
            Unlock a Passion, Side Hustle, or New
            <span className="text-gray-400 underline block 2xl:inline-block p-2 "> Profession</span>
          </motion.h1>
          <motion.p
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
                  delay: 0.6,
                },
              },
            }}
            initial="initial"
            animate="animate"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos eligendi mollitia
          </motion.p>
          <motion.button
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
            animate="animate"
            className="bg-black hover:bg-primary duration-300 opacity-100"
          >
            <p className="text-white text-sm font-semibold py-2 px-4">
              More News
            </p>
          </motion.button>
        </div>
        {/* Picture */}
        <div className=" basis-1/2 flex justify-center items-center ">
          <img className="w-full max-w-[450px] xl:max-w-[700px]" src={logo} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;

// w-[90%] md:max-w-[550px] xl:max-w-[600px]
