import { useEffect, useRef, useState } from "react";

const topCards = [
  { value: "99%", label: "weekly metro reach" },
  { value: "#1", label: "media partner (AIMA)" },
  { value: "#1", label: "sales team (Media i)" },
  { value: "35k+", label: "sites" },
];

const bottomStats = [
  { value: 15000, label: "Premium Ad Spaces World Wide", suffix: "+" },
  { value: 150000000, label: "Daily Audience Reach", suffix: "+" },
  { value: 98, label: "Client Satisfaction Rate", suffix: "%" },
];

export default function BrandImpactSection() {
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

    setHasAnimated(true);
    startTimeRef.current = null;

    const duration = 2000; // 2 seconds total animation

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCounts(
        bottomStats.map((item) => Math.floor(item.value * easedProgress))
      );

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure final values are exact
        setCounts(bottomStats.map((item) => item.value));
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [bottomHovered, hasAnimated]);

  return (
    <section className="w-full bg-[#f2f2f2] py-20">
      {/* ---------------- TOP SECTION ---------------- */}
      <div 
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Cards with gradient animation */}
        <div className="grid grid-cols-2 gap-6">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="h-44 rounded-xl p-6 flex flex-col justify-end relative overflow-hidden"
              style={{
                background: hovered
                  ? "linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)"
                  : "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
                transition: "background 0.5s ease-in-out",
              }}
            >
              <h3 className="text-2xl font-bold text-black relative z-10">
                {card.value}
              </h3>
              <p className="text-sm text-gray-800 relative z-10">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-5">
            <span className="underline decoration-red-500 decoration-4 underline-offset-6">
              Where Brands Can't Be Ignored
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-xl">
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
        className="bg-white mt-20 py-16"
        onMouseEnter={() => setBottomHovered(true)}
        onMouseLeave={() => setBottomHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {bottomStats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-red-500 tabular-nums">
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>
              <p className="mt-2 text-gray-700 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}