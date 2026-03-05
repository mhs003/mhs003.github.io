import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Mood from "./pages/Mood";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/post/:slug" element={<BlogPost />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/mood" element={<Mood />} />
                <Route path="*" element={<>404</>} />
            </Route>
        </Routes>
    );
}
