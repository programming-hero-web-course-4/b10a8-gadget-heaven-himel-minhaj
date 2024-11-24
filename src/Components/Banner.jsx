
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className=" border border-white rounded-xl p-5 bg-white/30  md:w-[1100px] mx-auto flex justify-center items-center bottom-52 left-0 right-0 relative">
        <img
          className="w-full object-cover rounded-xl h-[500px]"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
