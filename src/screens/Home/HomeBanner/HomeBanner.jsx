import BannerStand from "../../../assets/HomePage/Banner/bannerStand.png";
import Banner from "../../../assets/HomePage/Banner/banner.jpg";
import Cloud1 from "../../../assets/HomePage/Banner/cloud1.png";
import Cloud2 from "../../../assets/HomePage/Banner/cloud2.png";

export default function HomeBanner() {
  return (
    <section  style={{
    background: "linear-gradient(to right,  #F9FAFB, #B6B3B3)",
  }} className="relative w-full overflow-hidden h-226">
      <div className="w-[90%] group relative  mx-auto px-6 py-10 ">
        {/* ☁️ CLOUD 1 – always visible */}
        <img
          src={Cloud1}
          alt="cloud"
          className="
            absolute top-10 -left-120 w-100 opacity-40
            transition-transform duration-700 ease-in-out
            group-hover:translate-x-140 
          "
        />

        <img
          src={Cloud2}
          alt="cloud"
          className="
            absolute top-50 left-10 w-100 opacity-40
            transition-all duration-700 ease-in-out
            group-hover:opacity-30 group-hover:translate-x-140 
          "
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          {/* LEFT CONTENT */}
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

          {/* RIGHT BANNER */}
          <div
            className="
              relative
              transition-transform duration-700 ease-in-out
              group-hover:-translate-y-17 border
            "
            style={{
              backgroundImage: `url(${BannerStand})`,
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
