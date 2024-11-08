import { motion } from "framer-motion";
import map from "../assets/icon/1.png";
import message from "../assets/icon/2.png";
import plugin from "../assets/icon/3.png";

const Card = () => {
  const cardContent = [
    {
      image: map,
      title: "About",
    },
    {
      image: message,
      title: "Connection",
    },
    {
      image: plugin,
      title: "Plugin",
    },
  ];

  return (
    <>
      <div className="border border-purple-300 p-1 bg-gray-50">
        <div className="container border py-14 border-purple-300 space-y-7">
          {cardContent.map((item, index) => (
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
                    delay: 0.4 + 0.2 * index,
                  },
                },
              }}
              initial="initial"
              whileInView="animate"
              className="flex flex-col justify-center items-center bg-white space-y-5 px-5 py-10 shadow-xl rounded-xl"
            >
              <img
                src={item.image}
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                alt="icon"
              />
              <p>{item.title}</p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum quos a error praesentium fuga omnis libero aperiam
                blanditiis magni laudantium?
              </p>
              <p>Learn More</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Card;
