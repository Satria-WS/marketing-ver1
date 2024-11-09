import { motion } from "framer-motion";
import logoPlant from "../assets/image/2.png";

const Service = () => {
  const cardLoop = Array.from({ length: 3 }, (_, k) => k);

  return (
    <>
      <div className="container border border-pink-400 ">
        <h1 className="text-4xl font-bold py-12 xl:max-w-[300px]">
          Classes to Spark Your
          <span className="text-gray-400 underline pl-5">Creativity</span>
        </h1>
        {/* card */}
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-1 ">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center p-5 "
          >
            <img className="w-full max-w-[300px]" src={logoPlant} alt="plant" />
          </motion.div>
          {/* card-content */}
          {cardLoop.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + 0.2 * index}}
              className="p-5 space-y-5"
            >
              <img
                className="w-full max-w-14"
                src={logoPlant}
                alt="mini-play"
              />
              <p className="uppercase font-semibold text-xl"> LEARN BY DOING</p>
              <p className="text-gray-500 pl-6 border-l-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
                asperiores magnam? Assumenda perferendis optio dicta natus
                nobis, cupiditate eveniet libero ratione quam iusto!
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Service;
