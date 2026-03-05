import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="min-h-screen selection:bg-emerald selection:text-white">
            <div className="fixed inset-0 grid-bg -z-10"></div>
            <Header />
            <main className="max-w-5xl mx-auto py-12 px-4 space-y-12">
                <Outlet />
                <Footer />
            </main>
        </div>
    );
}
