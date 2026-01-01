import BannerStand from "../../../assets/HomePage/Banner/bannerStand.png";
import Banner from "../../../assets/HomePage/Banner/banner.jpg";
import Cloud1 from "../../../assets/HomePage/Banner/cloud1.png";
import Cloud2 from "../../../assets/HomePage/Banner/cloud2.png";

export default function HomeBanner() {
  return (
    <section style={{
      background: "linear-gradient(to right,  #F9FAFB, #B6B3B3)",
    }} className="relative w-full overflow-hidden h-226">
      <div className="w-[90%] group relative  mx-auto px-6 py-10 ">
        <img
          src={Cloud1}
          alt="cloud"
          className="
            absolute -top-10 -left-160 w-130 opacity-100
            transition-transform duration-1000 ease-in-out
            group-hover:translate-x-140 
          "
        />

        <img
          src={Cloud2}
          alt="cloud"
          className="
            absolute top-35 -left-25 w-130 opacity-100
            transition-all duration-1000 ease-in-out
            group-hover:opacity-100 group-hover:translate-x-140 
          "
        />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 relative z-10">
          <div className="mt-55">
            <h1
              style={{ fontSize: "70px", color: "black", marginBottom: "30px" }}
              className="font-extrabold font-poppins text-black leading-tight text-left"
            >
              Your Complete
            </h1>
            <h1
              style={{ color: "black", fontSize: "70px" }}
              className="font-poppins font-extrabold text-left"
            >
              <span className="text-red-600">Ad Booking </span>Solution{" "}
            </h1>

            <p className="mt-4 text-gray-700 text-left text-[24px] font-semibold">
              Book your advertising space —
              <span className="text-red-500 font-medium ml-2">
                anytime, anywhere!
              </span>
            </p>
          </div>

          <div
            className="
              relative
              transition-transform duration-1000 ease-in-out h-200 w-230 right-5  -bottom-40
              group-hover:-translate-y-15
            "
            style={{
              backgroundImage: `url(${BannerStand})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="absolute top-75 left-30 z-1 text-[28px] font-poppins font-bold" style={{color:"black"}}>
              If you're seeing this, <br/>
              the ad already won</p>
            <img src={Banner} className="absolute top-40 left-20 h-105 w-190" />
          </div>
        </div>
      </div>
    </section>
  );
}
