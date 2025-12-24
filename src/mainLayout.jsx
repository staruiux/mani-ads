import { Outlet } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

export default function MainLayOut() {
    return (
        <div className="h-screen w-full overflow-auto
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:'none']
          [scrollbar-width:'none']">
            <Header />
            <main className="w-full bg-[#000000] flex flex-col h-full">
                <div className="flex-1 w-full">
                    <Outlet />
                </div>
                <Footer />
            </main>
        </div>
    )
}