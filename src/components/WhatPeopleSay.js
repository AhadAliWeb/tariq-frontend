"use client";

const videos = [
  {
    id: 1,
    embedId: "YOUR_VIDEO_ID_1",
    title: "Student Testimonial 1",
  },
  {
    id: 2,
    embedId: "YOUR_VIDEO_ID_2",
    title: "Student Testimonial 2",
  },
  {
    id: 3,
    embedId: "YOUR_VIDEO_ID_3",
    title: "Student Testimonial 3",
  },
  {
    id: 4,
    embedId: "YOUR_VIDEO_ID_4",
    title: "Student Testimonial 4",
  },
];

export default function WhatPeopleSay() {
  return (
    <section className="bg-[var(--color-wcu-bg)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Hadith */}
          <div className="mb-6 bg-[var(--color-primary-800)] rounded-2xl px-6 py-5">
            <p className="font-heading text-2xl sm:text-3xl text-[var(--color-secondary-300)] leading-relaxed" dir="rtl">
              «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
            </p>
            <p className="text-xs text-[var(--color-primary-200)] mt-2 text-center">
              "The best of you are those who learn the Quran and teach it." — <em>Sahih al-Bukhari</em>
            </p>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-wcu-heading)] leading-tight">
            What Do{" "}
            <span className="text-[var(--color-wcu-heading-accent)]">People Say</span>{" "}
            About Us?
          </h2>

          <p className="mt-4 text-[var(--color-wcu-subtext)] text-base sm:text-lg leading-relaxed">
            Don't take our word for it — hear directly from the students and families whose lives have been transformed through the light of the Quran.
          </p>
        </div>

        {/* YouTube Embeds — single row, scrollable on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {videos.map((video) => (
            <div key={video.id} className="rounded-2xl overflow-hidden shadow-md flex-shrink-0 w-72 sm:w-80 lg:w-auto">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}