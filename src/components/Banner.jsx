import cage from "../assets/image/3.png";
const Banner = () => {
  return (
    <>
      <div className="container py-20">
        <h1>Personal banner</h1>
        <button>Personal banner</button>
        <div>
          <div>
            <p>1</p>
            <p>2</p>
          </div>
          <div>
            <p>1</p>
            <p>2</p>
          </div>
        </div>
        <img className="w-full max-w-550px"  src={cage} alt=""/>
      </div>
    </>
  );
};
export default Banner;
