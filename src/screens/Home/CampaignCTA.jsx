import bgImage from "../../assets/HomePage/Campaign/bg-red.png";
import girlCharacter from "../../assets/HomePage/Campaign/girlcharacter.png";
import squareinside from "../../assets/HomePage/Campaign/squareinside.png";
import questionmark from "../../assets/HomePage/Campaign/questionmark.png";
import plant from "../../assets/HomePage/Campaign/plant.png";

export default function CampaignCTA() {
  return (
    <section className="w-full bg-[#F2F2F2] py-16">
      <div className="w-[90%] mx-auto px-6">
        <div className="group relative overflow-hidden rounded-3xl bg-white py-12 hover:py-20 transition-all duration-500 ease-out">
          <div className="flex flex-col md:flex-row items-center gap-12 px-8 md:px-14">
            <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] flex-shrink-0">
              <img
                src={bgImage}
                alt=""
                className="
                  absolute  w-full h-full object-contain
                  group-hover:scale-130
                "
              />

              <img
                src={squareinside}
                alt=""
                className="
                  absolute top-6 left-15 w-20 md:w-14
                  transition-transform duration-500 ease-out
                  group-hover:scale-200 group-hover:-translate-x-2
                "
              />

              <img
                src={questionmark}
                alt=""
                className="
                  absolute top-4 right-15 w-10 md:w-8
                  transition-transform duration-500 ease-out
                  group-hover:scale-200 group-hover:-translate-y-2
                "
              />

              <img
                src={plant}
                alt=""
                className="
                  absolute bottom-4 right-10 w-16 md:w-10
                  transition-transform duration-500 ease-out
                  group-hover:scale-300 group-hover:translate-x-2
                "
              />

              <img
                src={girlCharacter}
                alt="Campaign Illustration"
                className="
                  relative z-10 w-full h-full object-contain
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
            </div>

            <div className="flex-1 text-center md:text-left transition-all duration-500 ease-out group-hover:translate-x-2 pl-18 pr-30">
              <h2
                style={{ color: "#000000" }}
                className="text-[30px] font-poppins font-semibold text-[#111111] leading-snug"
              >
                <span className="relative inline-block">
                  Uncertai{" "}
                  <span className="absolute left-0 -bottom-1 w-[45%] h-0.75 bg-red-500" />
                </span>
                n where to begin? Let us craft the ideal campaign for you.
              </h2>

              <p className="mt-4 text-[#555555] text-[16px]">
                Our team of advertising specialists will analyze your goals,
                target audience, and budget to create a customized advertising
                strategy that maximizes your ROI.
              </p>

              <div className="mt-auto flex justify-end">
                <button
                  style={{ backgroundColor: "#E63946", height:"57px" }}
                  className="text-white px-8 py-3 rounded-lg text-[19px] transition-colors mt-18 min-w-51"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
