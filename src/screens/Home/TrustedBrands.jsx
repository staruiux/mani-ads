import dabur from "../../assets/HomePage/TrustedBrands/dabur.png";
import patanjali from "../../assets/HomePage/TrustedBrands/patanjali.png";
import bata from "../../assets/HomePage/TrustedBrands/bata.png";
import mrf from "../../assets/HomePage/TrustedBrands/mrf.png";
import parle from "../../assets/HomePage/TrustedBrands/parle.png";
import swiggy from "../../assets/HomePage/TrustedBrands/swiggy.png";
import malabar from "../../assets/HomePage/TrustedBrands/malabar.png";
import cultfit from "../../assets/HomePage/TrustedBrands/cultfit.png";
import amul from "../../assets/HomePage/TrustedBrands/amul.png";
import airtel from "../../assets/HomePage/TrustedBrands/airtel.png";
import byjus from "../../assets/HomePage/TrustedBrands/byjus.png";
import burgerking from "../../assets/HomePage/TrustedBrands/burger.png";
const brands = [
    { id: 1, name: "Dabur", logo: dabur },
    { id: 2, name: "Patanjali", logo: patanjali },
    { id: 3, name: "Bata", logo: bata },
    { id: 4, name: "MRF", logo: mrf },
    { id: 5, name: "Parle", logo: parle },
    { id: 6, name: "Swiggy", logo: swiggy },
    { id: 7, name: "Malabar", logo: malabar },
    { id: 8, name: "CultFit", logo: cultfit },
    { id: 9, name: "Amul", logo: amul },
    { id: 10, name: "Airtel", logo: airtel },
    { id: 11, name: "Byjus", logo: byjus },
    { id: 12, name: "Burger King", logo: burgerking },
];

export default function TrustedBrands() {
    return (
        <section className="w-full bg-white py-20">
            <div className="mx-auto px-6">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold text-black">
                    <span className="relative inline-block">
                        Trusted By{" "}
                        <span className="absolute left-0 -bottom-1 w-[40%] h-[2px] bg-red-500" />
                    </span>

                    Leading Brands

                </h2>

                {/* Logos Grid */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-16 gap-x-10 items-center justify-items-center">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
