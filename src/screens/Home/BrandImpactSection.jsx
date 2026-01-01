import { useEffect, useRef, useState } from "react";

const bottomStats = [
  { value: 15000, label: "Premium Ad Spaces World Wide", suffix: "+" },
  { value: 150, label: "Daily Audience Reach", suffix: "M+" },
  { value: 98, label: "Client Satisfaction Rate", suffix: "%" },
];

const animationStages = [
  [
    { value: 15, duration: 0 },
    { value: 150, duration: 300 },
    { value: 1500, duration: 300 },
    { value: 15000, duration: 800 },
  ],
  [
    { value: 1, duration: 0 },
    { value: 15, duration: 300 },
    { value: 150, duration: 800 },
  ],
  [
    { value: 95, duration: 0 },
    { value: 96, duration: 200 },
    { value: 97, duration: 200 },
    { value: 98, duration: 400 },
  ],
];

export default function BrandImpactSection() {
  const [animationDone, setAnimationDone] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [bottomHovered, setBottomHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [counts, setCounts] = useState([15, 1, 95]);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (!bottomHovered || hasAnimated) return;

    setAnimationDone(false);

    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];

    bottomStats.forEach((stat, statIndex) => {
      const stages = animationStages[statIndex];
      let accumulatedDelay = 0;

      stages.forEach((stage, stageIndex) => {
        const timeout = setTimeout(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[statIndex] = stage.value;
            return newCounts;
          });

          if (
            statIndex === bottomStats.length - 1 &&
            stageIndex === stages.length - 1
          ) {
            setTimeout(() => {
              setAnimationDone(true);
              setHasAnimated(true);
            }, 100);
          }
        }, accumulatedDelay);

        timeoutsRef.current.push(timeout);
        accumulatedDelay += stage.duration;
      });
    });

    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [bottomHovered, hasAnimated]);

  const finalDisplay = ["15000+", "150M+", "98%"];

  return (
    <section className="w-full bg-[#f2f2f2] py-20 mt-39">
      <div
        className=" mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-5 p-15 "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex justify-center items-center gap-20 ">
          <div className="flex flex-col gap-6 ">
            <div
              className="rounded-xl min-w-72 p-6 flex flex-col justify-end items-start h-74 overflow-hidden"
              style={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.5) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <h3
                style={{ color: "#000000" }}
                className="text-[32px] font-poppins font-bold text-black"
              >
                99%
              </h3>
              <p
                style={{ color: "#000000" }}
                className="text-[22px] font-poppins text-gray-800"
              >
                weekly metro reach
              </p>
            </div>

            <div
              className="rounded-xl min-w-72 p-6 flex flex-col justify-end items-start h-34 overflow-hidden"
              style={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.5) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <h3
                style={{ color: "#000000" }}
                className="text-[32px] font-poppins font-bold text-black"
              >
                #1
              </h3>
              <p
                style={{ color: "#000000" }}
                className="text-[22px] font-poppins text-gray-800"
              >
                sales team (Media i)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl min-w-72 p-6 flex flex-col justify-end items-start h-34 overflow-hidden "
              style={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.5) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <h3
                style={{ color: "#000000" }}
                className="text-[32px] font-poppins font-bold text-black"
              >
                #1
              </h3>
              <p
                style={{ color: "#000000" }}
                className="text-[22px] font-poppins text-gray-800"
              >
                media partner (AIMA)
              </p>
            </div>

            <div
              className="rounded-xl min-w-72  p-6 flex flex-col justify-end items-start h-74 overflow-hidden"
              style={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.5) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              <h3
                style={{ color: "#000000" }}
                className="text-[32px] font-poppins font-bold text-black"
              >
                35k+
              </h3>
              <p
                style={{ color: "#000000" }}
                className="text-[23px] font-poppins text-gray-800"
              >
                sites
              </p>
            </div>
          </div>
        </div>

        <div className="p-15 text-left flex flex-col justify-center items-start ">
          <h2 className="text-4xl font-bold  mb-5">
            <span
              style={{ color: "#000000" }}
              className="font-poppins text-[45px] font-bold"
            >
              <span className="relative inline-block">
                Where
                <span className="absolute left-2 bottom-0 w-[60%] h-0.75 bg-red-500" />
              </span>
              Brands Can't Be Ignored
            </span>
          </h2>

          <p className="text-gray-700 leading-relaxed  text-[20px]">
            In a world flooded with ads, standing out is everything. Our
            billboard and out-of-home solutions put your brand in the
            spotlight—capturing attention where it matters most. Whether it's a
            high-traffic highway, a bustling metro station, or a digital screen
            in the heart of the city, we make sure your message is bold, clear,
            and impossible to miss.
          </p>
        </div>
      </div>

      <div
        className="bg-white mt-20 py-16"
        onMouseEnter={() => setBottomHovered(true)}
        onMouseLeave={() => setBottomHovered(false)}
      >
        <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center text-center h-72">
          {bottomStats.map((item, index) => (
            <div key={index}>
              <h3 className=" font-semibold text-[#FF3B30]  text-[48px]">
                {animationDone ? (
                  finalDisplay[index]
                ) : (
                  <>
                    {counts[index].toLocaleString()}
                    {item.suffix}
                  </>
                )}
              </h3>
              <p className="mt-2 text-gray-700 text-[21px] font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
