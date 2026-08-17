"use client";

import { useState } from "react";
import FormPopup from "./FormPopup";

export default function BottomStrip() {

    const [popupOpen, setPopupOpen] = useState(false)
    
  return (
    <>
      <FormPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-bg-primary/95 backdrop-blur-md border-t border-white/20 shadow-[0_-4px_16px_0_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
        <div className="relative w-full max-w-md shrink-0">
          <span className="absolute inset-0 rounded-lg bg-primary-400 opacity-60 animate-ping-soft" />
          <button
            className="navbar-cta relative flex cursor-pointer items-center justify-center gap-2 w-full px-8 py-4 text-base font-bold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            style={{ backgroundColor: "#c9a24a" }}
            onClick={() => setPopupOpen(true)}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-300 animate-pulse shrink-0" />
            Get a free trial
          </button>
        </div>
      </div>
    </div>
    </>

  );
}