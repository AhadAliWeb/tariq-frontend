"use client";

import ReactCountryFlag from "react-country-flag";

const countries = [
  { code: "US", label: "Online Quran Classes in USA" },
  { code: "GB", label: "Online Quran Classes in UK" },
  { code: "AE", label: "Online Quran Classes in UAE" },
  { code: "SA", label: "Online Quran Classes in KSA" },
  { code: "CA", label: "Online Quran Classes in Canada" },
  { code: "AU", label: "Online Quran Classes in Australia" },
];

const allItems = [...countries, ...countries];

export default function CountrySlider() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-950 via-emerald-900 to-teal-900 py-5 border-y border-emerald-700/40">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-emerald-950 to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-emerald-950 to-transparent" />

        <div className="marquee-track flex items-center whitespace-nowrap">
          {allItems.map((item, idx) => (
            <SliderItem key={idx} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

function SliderItem({ item }) {
  return (
    <div className="inline-flex items-center gap-3 px-8 py-1 group cursor-default select-none">
      <span className="flex-shrink-0 rounded-sm overflow-hidden shadow-md ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
        <ReactCountryFlag
          countryCode={item.code}
          svg
          style={{ width: "2em", height: "1.4em", display: "block" }}
          title={item.code}
        />
      </span>

      <span
        className="text-emerald-100 font-semibold text-sm tracking-wide transition-colors duration-200 group-hover:text-amber-300"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {item.label}
      </span>

      <span className="ml-4 text-emerald-600 text-lg font-light select-none">✦</span>
    </div>
  );
}