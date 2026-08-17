"use client";

import { Phone } from "lucide-react";

export default function ContactButtons({
  phoneNumber = "13322525428",
  message = "Assalam o Aliakum. I want to enroll for the Demo Class.",
}) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="fixed flex flex-col items-center gap-3 z-50"
      style={{
        right: "20px",
        bottom: "20px",
      }}
    >
      {/* CALL BUTTON */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call us"
        className="
          flex items-center justify-center
          rounded-full
          block
          bg-[#c9a24a]
          text-white
          shadow-lg
          transition-all duration-300 ease-out
          hover:scale-110
          hover:bg-blue-700
          active:scale-95
        "
        style={{
          width: "64px",
          height: "64px",
          minWidth: "64px",
          minHeight: "64px",
        }}
      >
        <Phone
          className="w-7 h-7"
          strokeWidth={2.5}
        />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex items-center justify-center
          rounded-full
          text-white
          shadow-lg
          transition-all duration-300 ease-out
          hover:scale-110
          active:scale-95
        "
        style={{
          width: "64px",
          height: "64px",
          minWidth: "64px",
          minHeight: "64px",
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
        }}
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />

          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.543 5.876L0 24l6.31-1.518A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.366l-.36-.214-3.733.979.997-3.648-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
        </svg>
      </a>
    </div>
  );
}