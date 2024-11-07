import { motion } from "framer-motion";
import logoPlant from "../assets/image/2.png";

const Service = () => {
  const cardLoop = Array.from({ length: 4 }, (_, k) => k);

  return (
    <>
      <div className="container border border-pink-400 ">
        <h1 className="text-4xl font-bold py-12">
          Classes to Spark Your
          <span className="text-gray-400 underline">Creativity</span>
        </h1>
        {/* card */}
        <div className="grid grid-cols-1 grid-rows-1 gap-1 ">
          {/* image */}
          <div className="flex justify-center items-center p-5 bg-red-500 ">
            <img className="w-full max-w-[300px]" src={logoPlant} alt="plant" />
          </div>
          {/* card-content */}
          {cardLoop.map((item, index) => (
            <div className="p-5 space-y-5">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Service;
