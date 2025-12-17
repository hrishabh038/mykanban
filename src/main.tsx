import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer, Navbar } from "./components/components";
import Routing from "./pages/Routing";
import { AtomIcon } from "./assets/icons/icons";
import { BrowserRouter, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="w-screen h-screen overflow-auto bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100">
        <div className="z-40 fixed top-0 left-0 right-0 flex justify-center bg-neutral-950">
          <Navbar />
        </div>

        <div className="flex justify-center">
          <main
            className={twMerge(
              "px-4 w-full lg:w-[1000px]",
              window.location.pathname === "/home" ? "pt-24" : "py-24"
            )}
          >
            <Routing />
          </main>
        </div>
        <div className="flex justify-center bg-neutral-950">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>
);
