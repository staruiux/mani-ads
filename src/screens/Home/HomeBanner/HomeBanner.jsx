import BannerStand from "../../../assets/HomePage/Banner/bannerStand.png";
import Banner from "../../../assets/HomePage/Banner/banner.jpg";
import Cloud1 from "../../../assets/HomePage/Banner/cloud1.png";
import Cloud2 from "../../../assets/HomePage/Banner/cloud2.png";

export default function HomeBanner() {
  return (
    <section className="relative w-full bg-[#f2f2f2] overflow-hidden h-[60vh]">
      <div className="group relative  mx-auto px-6 py-10 border h-full">

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
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Your Complete <br />
              <span className="text-red-600">Ad Booking</span> Solution
            </h1>

            <p className="mt-4 text-gray-700 text-lg">
              Book your advertising space —
              <span className="text-red-500 font-medium">
                {" "}anytime, anywhere!
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
            style={{backgroundImage : `url(${BannerStand})`, backgroundSize : "contain",}}
          >
           
          </div>
        </div>
      </div>
    </section>
  );
}
