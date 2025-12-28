"use client";
import { useMemo, useState } from "react";
import image1 from "../../../assets/HomePage/PerfectAdSpace/image1.jpg"

const TABS = ["All", "Billboards", "Digital", "Transit", "Indoor", "Events"];

const AD_SPACES = [
    { id: 1, title: "Malls", category: "Indoor", image: image1 },
    { id: 2, title: "Road side & Highways", category: "Billboards", image: image1 },
    { id: 3, title: "Buildings", category: "Digital", image: image1 },
    { id: 4, title: "Metro", category: "Transit", image: image1 },
    { id: 5, title: "Bus Stop", category: "Transit", image: image1 },
    { id: 6, title: "Theater", category: "Indoor", image: image1 },
    { id: 7, title: "Airport", category: "Indoor", image: image1 },
    { id: 8, title: "Print Media", category: "Events", image: image1 },
    { id: 9, title: "Stadium", category: "Events", image: image1 },
    { id: 10, title: "Fuel Station", category: "Billboards", image: image1 },
    { id: 11, title: "Taxi Ads", category: "Transit", image: image1 },
    { id: 12, title: "Influencer", category: "Digital", image: image1 },
    { id: 13, title: "Stadium", category: "Events", image: image1 },
    { id: 14, title: "Fuel Station", category: "Billboards", image: image1 },
    { id: 15, title: "Taxi Ads", category: "Transit", image: image1 },
    { id: 16, title: "Influencer", category: "Digital", image: image1 },
    { id: 17, title: "Taxi Ads", category: "Transit", image: image1 },
    { id: 18, title: "Influencer", category: "Digital", image: image1 },
];

export default function PerfectAdSpace() {
    const [activeTab, setActiveTab] = useState("All");
    const [search, setSearch] = useState("");

    const filteredData = useMemo(() => {
        return AD_SPACES.filter((item) => {
            const matchTab =
                activeTab === "All" || item.category === activeTab;
            const matchSearch = item.title
                .toLowerCase()
                .includes(search.toLowerCase());
            return matchTab && matchSearch;
        });
    }, [activeTab, search]);

    return (
        <div className="w-full bg-white px-4 md:px-10 lg:px-15 2xl:px-40 py-8 border-5 border-red-500 h-[90vh] pb-25">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 relative inline-block text-black text-left w-full">
                Find Your Perfect Ad Space
                <span className="absolute left-0 -bottom-1 h-0.75 w-10 bg-red-600 rounded"></span>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-3">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                backgroundColor: activeTab === tab ? "red" : undefined,
                            }}
                            className={`
                px-6 py-2 rounded-lg text-sm font-medium
                transition-all duration-300 ease-in-out outline-none border-none focus:outline-none
                 focus-visible:outline-none   
        focus-visible:ring-0 
                ${activeTab === tab
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }
            `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>


                <div className="flex w-full lg:w-90">
                    <input
                        type="text"
                        placeholder="Search for ad spaces"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 h-11 px-4 border border-gray-300 rounded-l-full focus:outline-none text-sm"
                    />
                    <button className="h-11 px-6 bg-red-600 text-white rounded-r-full text-sm font-medium">
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
