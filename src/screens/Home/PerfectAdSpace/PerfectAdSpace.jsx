"use client";

import { useMemo, useState } from "react";
import image1 from "../../../assets/HomePage/PerfectAdSpace/image1.png";
import image2 from "../../../assets/HomePage/PerfectAdSpace/image2.png";
import image3 from "../../../assets/HomePage/PerfectAdSpace/image3.png";
import image4 from "../../../assets/HomePage/PerfectAdSpace/image4.png";
import image5 from "../../../assets/HomePage/PerfectAdSpace/image5.png";
import image6 from "../../../assets/HomePage/PerfectAdSpace/image6.png";
import image7 from "../../../assets/HomePage/PerfectAdSpace/image7.png";
import image8 from "../../../assets/HomePage/PerfectAdSpace/image8.png";
import image9 from "../../../assets/HomePage/PerfectAdSpace/image9.png";
import image10 from "../../../assets/HomePage/PerfectAdSpace/image10.png";
import image11 from "../../../assets/HomePage/PerfectAdSpace/image11.png";
import image12 from "../../../assets/HomePage/PerfectAdSpace/image12.png";
import SearchIcon from "../../../assets/HomePage/PerfectAdSpace/SearchIcon.svg";

const TABS = ["All", "Billboards", "Digital", "Transit", "Indoor", "Events"];

const AD_SPACES = [
  { id: 1, title: "Malls", category: "Indoor", image: image1 },
  {
    id: 2,
    title: "Road side & Highways",
    category: "Billboards",
    image: image2,
  },
  { id: 3, title: "Buildings", category: "Digital", image: image3 },
  { id: 4, title: "Metro", category: "Transit", image: image4 },
  { id: 5, title: "Bus Stop", category: "Transit", image: image5 },
  { id: 6, title: "Theater", category: "Indoor", image: image6 },
  { id: 7, title: "Airport", category: "Indoor", image: image7 },
  { id: 8, title: "Print Media", category: "Events", image: image8 },
  { id: 9, title: "Stadium", category: "Events", image: image9 },
  { id: 10, title: "Fuel Station", category: "Billboards", image: image10 },
  { id: 11, title: "Taxi Ads", category: "Transit", image: image11 },
  { id: 12, title: "Influencer", category: "Digital", image: image12 },
  { id: 13, title: "Stadium", category: "Events", image: image1 },
  { id: 14, title: "Fuel Station", category: "Billboards", image: image2 },
  { id: 15, title: "Taxi Ads", category: "Transit", image: image3 },
  { id: 16, title: "Influencer", category: "Digital", image: image4 },
  { id: 17, title: "Taxi Ads", category: "Transit", image: image5 },
  { id: 18, title: "Influencer", category: "Digital", image: image6 },
];

export default function PerfectAdSpace() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return AD_SPACES.filter((item) => {
      const matchTab = activeTab === "All" || item.category === activeTab;
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  return (
    <div className="w-full bg-white px-4 md:px-10 lg:px-15 2xl:px-40 py-8 border-5 h-[90vh] pb-25 font-poppins">
      <h1
        style={{ fontSize: "48px" }}
        className=" font-bold mb-6 relative inline-block text-black text-left w-full "
      >
        Find Your Perfect Ad Space
        <span className="absolute left-0 -bottom-1 h-0.75 w-20 bg-[#FF0004] rounded"></span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 mt-12">
        <div className="flex flex-wrap gap-6 mb-15">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? "red" : undefined, height: "px"
              }}
              className={`
                
                px-6 py-2 rounded-lg text-[18px] p-90
                transition-all duration-300 ease-in-out outline-none border-none focus:outline-none
                focus-visible:outline-none   
                focus-visible:ring-0
                
                ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }
                    ${tab === "All" ? "w-60" : ""}
            `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex w-full max-w-150 h-13 rounded-full overflow-hidden bg-white mb-15">
          {/* Input */}
          <div className="relative flex-1 border border-gray-400 rounded-l-full border-r-0">
            <img
              src={SearchIcon}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6.5 h-6.5 text-[#D1D0D0]"
            />

            <input
              type="text"
              placeholder="Search for ad spaces"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-full pl-10 pr-4 text-sm outline-none bg-transparent placeholder:text-[#D1D0D0] placeholder:text-[15px] text-[#000000] font-semibold ml-5"
            />
          </div>

          {/* Button (NO left radius) */}
          <button
            style={{
              backgroundColor: "#F10012",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            className="px-8 text-white text-sm font-medium rounded-r-full "
          >
            Search
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-6
                    overflow-y-auto pr-2 max-h-[60vh]"
      >
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-75 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <div
              className="absolute inset-0
                                     bg-black/60
                                      translate-y-full
                                      group-hover:translate-y-0
                                      transition-transform
                                      duration-300
                                      ease-out
                                      flex items-center justify-center
                                     "
            >
              <h3
                className="
      text-white text-lg font-semibold
      translate-y-4
      group-hover:translate-y-0
      transition-transform
      duration-500
      ease-out
    "
              >
                {item.title}
              </h3>
            </div>

            <div className="absolute bottom-0 py-3 bg-black/30 left-0 right-0 text-center text-white font-medium group-hover:opacity-0 transition">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
