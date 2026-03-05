import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Feeds from "./pages/Feeds";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Mood from "./pages/Mood";
import Error404 from "./pages/Error404";

export default function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/feed" element={<Feeds />} />
                <Route index element={<Portfolio />} />
                <Route path="/post/:slug" element={<BlogPost />} />
                <Route path="/mood" element={<Mood />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
}
