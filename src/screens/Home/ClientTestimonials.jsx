import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    rating: 4.5,
    text:
      "AdSpot helped us secure prime billboard locations that would have been impossible to find on our own. The booking process was seamless.",
    name: "Naina Joshi",
    role: "Marketing Director, Tech Vision Inc.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    rating: 5,
    text:
      "Their newspaper ad booking service saved us countless hours of back-and-forth with publishers. We saw a 40% increase in leads from our print campaigns.",
    name: "Suresh Batra",
    role: "CEO, GrowthBox",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    rating: 3,
    text:
      "The transit advertising options helped us reach commuters effectively. The analytics provided valuable insights for our campaign optimization.",
    name: "Aditya Verma",
    role: "Brand Manager, Urban Styles",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const StarRating = ({ rating, isHover }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div
      className={`flex gap-1 transition-transform duration-500 ease-out origin-left ${isHover ? "scale-160" : "scale-100"
        }`}
    >
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <span key={i} className="text-yellow-400 text-lg">
              <FaStar />
            </span>
          );
        }
        if (i === fullStars && halfStar) {
          return (
            <span key={i} className="relative inline-block text-lg w-[1em] h-[1em]">
              <FaStar className="text-gray-300 absolute inset-0" />
              <span className="absolute inset-0 overflow-hidden w-1/2">
                <FaStar className="text-yellow-400" />
              </span>
            </span>
          );
        }
        return (
          <span key={i} className="text-gray-300 text-lg">
            <FaStar />
          </span>
        );
      })}
    </div>
  );
};

export default function ClientTestimonials() {
  const [hovered, setHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  };

  return (
    <section
      className="w-full bg-[#F2F2F2] py-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-[80%] mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover how businesses are achieving their advertising goals
            with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-15">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200
                transition-all duration-800 hover:shadow-lg flex flex-col gap-4 justify-between"
              >
                <StarRating rating={item.rating} isHover={hasAnimated} />

                <p className="mt-4 text-gray-700 leading-relaxed text-left">
                  "{item.text}"
                </p>

                <div
                  className={`flex items-center gap-14 mt-6 ${hasAnimated ? "mb-8" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-12 h-12 rounded-full object-cover transition-transform duration-800 ease-out origin-left ${hasAnimated ? "scale-180" : "scale-100"}`}
                  />

                  <div>
                    <p className="font-medium text-black text-left">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 text-left">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}