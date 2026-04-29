import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routing from "./pages/Routing";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div>
        <div className="fixed top-0 left-0 right-0 h-[60px] bg-neutral-900 border-b-1 border-neutral-800 flex items-center justify-center px-4">
          <div className="flex justify-between items-center w-[1000px] h-full">
            <Navbar />
          </div>
        </div>
        <div className="flex justify-center py-[100px] px-4">
          <div className="w-[1000px]">
            <Routing />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </StrictMode>,
);
