import { motion } from "framer-motion";
import cage from "../assets/image/3.png";

const Banner = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center py-20 space-y-10">
        <motion.h1
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
          className="text-4xl font-bold text-center"
        >
          Design is not what it looks like and feels like. Design is how
          <span className="text-gray-400 underline block">it Works</span>
        </motion.h1>
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
                delay: 0.6,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
          className="bg-primary hover:bg-black hover:text-white duration-300 py-2 px-4"
        >
          More News
        </motion.button>
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
          className="flex justify-center items-center gap-2"
        >
          <div className="text-center space-y-3 px-5 ">
            <p className="font-bold">Design Tools</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elixt</p>
          </div>
          <div className="text-center space-y-3 px-5">
            <p className="font-bold">Design Tools</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          </div>
        </motion.div>
        <img className="w-full max-w-550px" src={cage} alt="" />
      </div>
    </>
  );
};
export default Banner;
