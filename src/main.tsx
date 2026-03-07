import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./router.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { AppDataProvider } from "./provider/AppDataProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AppDataProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </AppDataProvider>
        </ThemeProvider>
    </StrictMode>,
);
