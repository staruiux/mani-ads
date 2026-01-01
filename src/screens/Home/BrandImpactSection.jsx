import { useEffect, useRef, useState } from "react";

const topCards = [
  { id: 1, value: "99%", label: "weekly metro reach" },
  { id: 2, value: "#1", label: "media partner (AIMA)" },
  { id: 3, value: "#1", label: "sales team (Media i)" },
  { id: 4, value: "35k+", label: "sites" },
];

const bottomStats = [
  { value: 15000, label: "Premium Ad Spaces World Wide", suffix: "+" },
  { value: 150000000, label: "Daily Audience Reach", suffix: "+" },
  { value: 98, label: "Client Satisfaction Rate", suffix: "%" },
];

export default function BrandImpactSection() {
  const [animationDone, setAnimationDone] = useState(false);

  const [hovered, setHovered] = useState(false);
  const [bottomHovered, setBottomHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(bottomStats.map(() => 0));
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  // Smooth easing function for natural animation
  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  // Bottom count animation (only once on first hover)
  useEffect(() => {
    if (!bottomHovered || hasAnimated) return;

    startTimeRef.current = null;
    setAnimationDone(false); // reset display mode

    const duration = 2000; // 2 seconds total animation

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;

      const elapsed = timestamp - startTimeRef.current;

      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = progress; // pure linear

      setCounts(
        bottomStats.map((item) => Math.floor(item.value * easedProgress))
      );

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCounts(bottomStats.map((item) => item.value));
        setAnimationDone(true); // switch to final text
        setHasAnimated(true); // block future animations
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [bottomHovered, hasAnimated]);

  // Bottom
  const finalDisplay = ["15000+", "150M+", "98%"];

  return (
    <section className="w-full bg-[#f2f2f2] py-20 mt-39">
      {/* ---------------- TOP SECTION ---------------- */}
      <div
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 p-15"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex justify-center items-center gap-20">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Card 1 – Big */}
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

            {/* Card 3 – Small */}
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

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Card 2 – Small */}
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

            {/* Card 4 – Big */}
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

        {/* Content */}
        <div className="w-4xl p-15 text-left flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold text-black mb-5">
            <span
              style={{ color: "#000000" }}
              className="relative inline-block font-poppins text-[45px] font-bold"
            >
              Where{" "}
              <span className="absolute left-0 bottom-1 w-[20%] h-0.75 bg-red-500" />
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

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div
        className="bg-white mt-20 py-16 "
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
