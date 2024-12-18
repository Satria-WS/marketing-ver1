import { motion } from "framer-motion";
import cage from "../assets/image/3.png";

const Banner = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row min-h-[700px]">
        <div className="flex flex-col items-center justify-center md:items-start xl:max-w-[600px] py-20 space-y-10">
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
            className="text-4xl font-bold "
          >
            Design is not what it looks like and feels like. Design is how 
            <p className="text-gray-400 underline">it Works</p>
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
            className="flex justify-center items-center min-w-[300px] gap-10"
          >
            <div className=" space-y-2">
              <p className="font-bold ">Design Tools</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elixt</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold ">Design Tools</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center">
          <img className="w-full max-w-550px xl:max-w-[650px] 2xl:max-w-[800px] 2xl:ml-20" src={cage} alt="" />
        </div>
      </div>
    </>
  );
};
export default Banner;
