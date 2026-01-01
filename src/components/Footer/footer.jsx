import facebook from "../../assets/Footer/Facebook.png";
import instagram from "../../assets/Footer/Instagram.png";
import youtube from "../../assets/Footer/Youtube.png";
import twitter from "../../assets/Footer/Twitter.png";
import appstore from "../../assets/Footer/Appstore.png";
import playstore from "../../assets/Footer/Googleplay.png";
import logo from "../../assets/Footer/logo.svg";

const services = [
  "Signboard Ads",
  "Newspaper Ads",
  "Digital Ads",
  "Transit Ads",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#2B2B2C] text-white pt-20">
      {/* Main Footer */}
      <div className="w-[90%] mx-auto py-20 grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1 mr-19">
          <div className="flex items-end gap-2 font-semibold mb-8 mt-0">
            <img
              style={{ height: "45px", width: "79px" }}
              src={logo}
              alt="Mani Ads Logo"
            />
            <h1 style={{ fontSize: "32px" }} className=" font-bold">
              <span className="relative inline-block">
                Mani{" "} 
                    <span className="absolute -left-0 -bottom-1 w-[75%] h-0.5 bg-red-500"/>
              </span>
              Ads
            </h1>
          </div>
          <p className="leading-relaxed text-[14px]">
            Your one-stop solution for booking various advertising channels
            effectively. We connect advertisers with premium ad spaces across
            multiple platforms.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h4 className="text-white text-[14px] font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Quick Links (duplicate like image) */}
        <div>
          <h4 className="text-white text-[16px] font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-[16px] font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-[16px] font-bold mb-4">
            Social Links
          </h4>
          <div className="flex gap-3 mb-6">
            <a
              href="https://www.facebook.com/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="h-6 w-6 cursor-pointer"
              />
            </a>

            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="h-6 w-6 cursor-pointer"
              />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={youtube}
                alt="YouTube"
                className="h-6 w-6 cursor-pointer"
              />
            </a>

            <a
              href="https://twitter.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="h-6 w-6 cursor-pointer"
              />
            </a>
          </div>

          <div className="space-y-3">
            {/* App Store */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex gap-4 bg-black w-37.5 rounded-md px-3 py-1 text-xs items-center cursor-pointer hover:opacity-90 transition">
                <img src={appstore} alt="App Store" className="h-6" />
                <div className="flex flex-col justify-center items-center text-white">
                  <span>Get in on</span>
                  <span className="font-semibold ml-1">App Store</span>
                </div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex gap-4 bg-black w-37.5 rounded-md px-3 py-1 text-xs items-center cursor-pointer hover:opacity-90 transition">
                <img src={playstore} alt="Play Store" className="h-6" />
                <div className="flex flex-col justify-center items-center text-white">
                  <span>Get in on</span>
                  <span className="font-semibold ml-1">Google Play</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FFFFFF] y-600 py-6 ml-10 mr-10 ">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between text-gray-400 text-sm items-center">
          <p className="text-[16px]">© 2025 Mani Ads. All rights reserved.</p>
          <div className="flex gap-6 text-[14px] mt-2 md:mt-0 text-[#8F8F8F]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
