import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import logo from "../../assets/logo.png";
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
    <header className="w-full bg-black text-white">
      <div className="w-[90%] mx-auto h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <img src={logo} alt="Mani Ads Logo" />
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-10 text-lg">
          <Link to='/' className="hover:text-red-500" style={{color : "white"}}>Home</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-red-500" style={{background:"transparent"}}>
              Services <FaChevronDown size={14} />
            </button>

            {open && (
              <div className="absolute top-full mt-0.5 w-48 bg-white text-black rounded-md shadow-lg py-3 z-50">
                {services.map((service, i) => (
                  <Link
                    key={i}
                    to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-5 py-2 text-sm hover:bg-gray-100"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to='/about-us' className="hover:text-red-500" style={{color : "white"}}>About Us</Link>
          <Link to='/contact-us' className="hover:text-red-500" style={{color : "white"}}>Contact Us</Link>
          <Link to='/advertise' className="hover:text-red-500" style={{color : "white"}}>Advertise</Link>
        </nav>

        <button className="text-white px-5 py-2 rounded-full text-sm" style={{backgroundColor:'red', outline:'none', border:'none'}}>
          Become Advertiser
        </button>
      </div>
    </header>
  );
}
