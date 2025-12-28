import facebook from '../../assets/Footer/Facebook.png';
import instagram from '../../assets/Footer/Instagram.png';
import youtube from '../../assets/Footer/Youtube.png';
import twitter from '../../assets/Footer/Twitter.png';
import appstore from '../../assets/Footer/Appstore.png';
import playstore from '../../assets/Footer/Googleplay.png';
import logo from "../../assets/logo.png";

const services = [
    "Signboard Ads",
    "Newspaper Ads",
    "Digital Ads",
    "Transit Ads",
];

export default function Footer() {
    return (
        <footer className="w-full bg-[#2B2B2C] text-gray-300">

            {/* Main Footer */}
            <div className="w-[90%] mx-auto py-20 grid grid-cols-1 md:grid-cols-5 gap-12">

                {/* Brand */}
                <div className="md:col-span-1">
                    <div className="flex items-center gap-2 text-white font-semibold text-lg mb-4">
                        <img src={logo} alt="mani ads"/>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Your one-stop solution for booking various advertising channels
                        effectively. We connect advertisers with premium ad spaces across
                        multiple platforms.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-medium mb-4">Quick Links</h4>
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
                    <h4 className="text-white font-medium mb-4">Quick Links</h4>
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
                    <h4 className="text-white font-medium mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        {services.map((service, i) => (
                            <li key={i}>{service}</li>
                        ))}
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-white font-medium mb-4">Social Links</h4>

                    <div className="flex gap-3 mb-6">
                        <img src={facebook} alt="Facebook" className="h-6 w-6 cursor-pointer"/>
                        <img src={instagram} alt="Instagram" className="h-6 w-6 cursor-pointer"/>
                        <img src={youtube} alt="YouTube" className="h-6 w-6 cursor-pointer"/>
                        <img src={twitter} alt="Twitter" className="h-6 w-6 cursor-pointer"/>
                    </div>

                    <div className="space-y-3">
                       <div className='flex gap-4 bg-black w-37.5 rounded-md px-3 py-1 text-xs items-center'>
                            <img src={appstore} alt="App Store" className="h-6 cursor-pointer"/>
                            <div className='flex flex-col justify-center items-center'>
                                <span>Get in on</span>
                                <span className="font-semibold ml-1">App Store</span>
                            </div>
                       </div>
                        <div className='flex gap-4 bg-black w-37.5 rounded-md px-3 py-1 text-xs items-center'>
                            <img src={playstore} alt="Play Store" className="h-6 cursor-pointer"/>
                            <div className='flex flex-col justify-center items-center'>
                                <span>Get in on</span>
                                <span className="font-semibold ml-1">Google Play</span>
                            </div>
                       </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 py-6">
                <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between text-xs text-gray-400">
                    <p>© 2025 Mani Ads. All rights reserved.</p>
                    <div className="flex gap-6 mt-2 md:mt-0">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </div>

        </footer>
    );
}
