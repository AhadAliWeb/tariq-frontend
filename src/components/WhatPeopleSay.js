"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  { id: 1, embedId: "bolaQTIMN70", title: "Student Testimonial 1" },
  { id: 2, embedId: "fH0_hItQ3c0", title: "Student Testimonial 2" },
  { id: 3, embedId: "zgb_CNzewjA", title: "Student Testimonial 3" },
  { id: 4, embedId: "cEQ6_AXyzAk", title: "Student Testimonial 4" },
];

export default function WhatPeopleSay() {
  const playerRefs = useRef([]);
  const playersReady = useRef([]);
  const currentIndex = useRef(0);
  const userPaused = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const initPlayers = () => {
      videos.forEach((video, i) => {
        const player = new window.YT.Player(`yt-player-${video.id}`, {
          videoId: video.embedId,
          playerVars: {
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            controls: 1,
          },
          events: {
            onReady: (event) => {
              playersReady.current[i] = event.target;
              // First video: mute + autoplay (mute is required by browser autoplay policy)
              if (i === 0) {
                event.target.mute();
                event.target.playVideo();
              }
            },
            onStateChange: (event) => {
              const YT = window.YT;

              // User manually paused
              if (event.data === YT.PlayerState.PAUSED) {
                userPaused.current = true;
              }

              // User resumed or video started playing
              if (event.data === YT.PlayerState.PLAYING) {
                userPaused.current = false;
                currentIndex.current = i;
                setActiveIndex(i);
              }

              // Video ended — advance to next unless user paused
              if (event.data === YT.PlayerState.ENDED) {
                if (!userPaused.current) {
                  const next = i + 1;
                  if (next < videos.length && playersReady.current[next]) {
                    currentIndex.current = next;
                    setActiveIndex(next);
                    // Unmute subsequent videos — autoplay is already unblocked by this point
                    playersReady.current[next].unMute();
                    playersReady.current[next].playVideo();
                  }
                }
              }
            },
          },
        });
        playerRefs.current[i] = player;
      });
    };

    const loadAPI = () => {
      // Case 1: API already fully ready
      if (window.YT && window.YT.Player) {
        initPlayers();
        return;
      }
      // Case 2: Script tag already in DOM but not finished loading yet
      if (document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        window.onYouTubeIframeAPIReady = initPlayers;
        return;
      }
      // Case 3: First load — inject script
      window.onYouTubeIframeAPIReady = initPlayers;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    };

    loadAPI();

    return () => {
      playerRefs.current.forEach((p) => {
        try { p?.destroy?.(); } catch (_) { }
      });
    };
  }, []);

  return (
    <section className="bg-[var(--color-wcu-bg)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Hadith */}
          <div className="mb-6 bg-[var(--color-primary-800)] rounded-2xl px-6 py-5">
            <p
              className="font-heading text-2xl sm:text-3xl text-[var(--color-secondary-300)] leading-relaxed"
              dir="rtl"
            >
              «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
            </p>
            <p className="text-xs text-[var(--color-primary-200)] mt-2 text-center">
              "The best of you are those who learn the Quran and teach it." —{" "}
              <em>Sahih al-Bukhari</em>
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wcu-heading)] leading-tight">
            What Do{" "}
            <span className="text-[var(--color-wcu-heading-accent)]">
              People Say
            </span>{" "}
            About Us?
          </h2>

          <p className="mt-4 text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed">
            Don't take our word for it — hear directly from the students and
            families whose lives have been transformed through the light of the
            Quran.
          </p>
        </div>

        {/* YouTube Embeds — single row, scrollable on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={`rounded-2xl overflow-hidden shadow-md flex-shrink-0 w-72 sm:w-80 lg:w-auto transition-all duration-300 ${activeIndex === i
                  ? "ring-2 ring-[var(--color-wcu-heading-accent)] ring-offset-2"
                  : ""
                }`}
            >
              <div className="aspect-[9/16]">
                <div id={`yt-player-${video.id}`} className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}