import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../../assets/Footer/logo.svg";
import { Link } from "react-router-dom";

const services = [
  "Signboard Ads",
  "Newspaper Ads",
  "Digital Ads",
  "Transit Ads",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white p-3">
      <div className="w-[97%] mx-auto h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-end gap-2 font-semibold ">
          <img
            style={{ height: "45px", width: "79px" }}
            src={logo}
            alt="Mani Ads Logo"
          />
          <h1 style={{ fontSize: "32px" }} className=" font-bold">
            <span className="relative inline-block mr-3">
              Mani
              <span className="absolute left-2/5 -translate-x-1/2 -bottom-1 w-[75%] h-0.5 bg-red-500" />
            </span>
            Ads
          </h1>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-20 text-[20px] font-medium">
          <Link
            to="/"
            className="hover:text-red-500"
            style={{ color: "white" }}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 hover:text-red-500"
              style={{
                background: "transparent",
                fontSize: "20px",
                color: "white",
                border: "none",
                outline: "none",
                boxShadow: "none",
                appearance: "none",
                WebkitAppearance: "none",
                MozAppearance: "none",
              }}
            >
              Services <FaChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute top-full mt-0.5 w-48 bg-white text-black rounded-md shadow-lg py-3 z-50">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    to={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="block px-5 py-2 text-sm hover:bg-gray-100"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about-us"
            className="hover:text-red-500 text-[20px]"
            style={{ color: "white" }}
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className="hover:text-red-500 text-[20px]"
            style={{ color: "white" }}
          >
            Contact Us
          </Link>
          <Link
            to="/advertise"
            className="hover:text-red-500 text-[20px]"
            style={{ color: "white" }}
          >
            Advertise
          </Link>
        </nav>

        <button
          className="text-white px-5 py-2 min-w-60 font-poppins"
          style={{
            backgroundColor: "red",
            outline: "none",
            border: "none",
            height: "52px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Become Advertiser
        </button>
      </div>
    </header>
  );
}
