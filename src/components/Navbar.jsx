import logo from "../assets/image/1.png";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <>
      <motion.div
        // sliding bottom
        variants={{
          initial: {
            y: -100,
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
        className="container flex justify-between items-center  border border-orange-300"
      >
        <div className="flex items-center">
          <img className=" w-full max-w-[70px] " src={logo} alt="mother" />
          <h4 className="text-xl font-bold">HUSTLE</h4>
        </div>
        <div className="justify-center items-center hidden md:block ">
          <ul className="flex space-x-3 xl:space-x-10">
            <li>Home</li>
            <li>Features</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex items-center">
          <button className="bg-primary p-1 rounded-sm">
            <span className="text-white text-xs">Request For Quotes</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};
export default Navbar;
