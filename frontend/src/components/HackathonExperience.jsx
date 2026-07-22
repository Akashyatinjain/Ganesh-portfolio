import React, { useState } from "react";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

export default function HackathonExperience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const hackathonImages = ["/csi-h-1.png", "/csi-h-2.png"];
  const hackathonTitles = [
    "CSI Hackathon Management - Team Briefing & Event Execution",
    "CSI Hackathon Management - Live Competition & Technical Operations",
  ];

  return (
    <section id="hackathon" className="relative w-full bg-slate-50 text-slate-900 py-20 sm:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-b border-slate-200/80 bg-dot-pattern">

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-amber-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <FaTrophy className="text-amber-600" />
            <span>Featured Leadership Milestone</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Hackathon Leadership <span className="text-amber-600">with CSI</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Organizing, managing, and executing large-scale technical hackathons alongside the Computer Society of India (CSI SFIT) committee.
          </p>
        </div>

        {/* Content Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">

          {/* Top Decorative Amber Line */}
          <div className="absolute top-0 left-10 right-10 h-1 bg-amber-500 rounded-full" />

          {/* Left Column: Interactive Image Slider (7 cols) */}
          <div className="lg:col-span-7 w-full space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Hackathon Gallery & Highlights
              </span>
              <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                2 Photos • Interactive Slider
              </span>
            </div>

            <ImageSlider
              images={hackathonImages}
              titles={hackathonTitles}
              onExpandImage={(img) => setSelectedImage(img)}
            />
          </div>

          {/* Right Column: Experience Details (5 cols) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-between space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  <FaCalendarAlt className="text-amber-600" />
                  CSI Event Season
                </span>
                <span className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  <FaMapMarkerAlt className="text-red-500" />
                  SFIT, Mumbai
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                Hackathon Management Lead
              </h3>
              <p className="text-amber-700 font-bold text-sm mb-4">
                Computer Society of India (CSI SFIT)
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Spearheaded technical operations, venue coordination, and participant onboarding during high-stakes hackathons. Collaborated closely with the CSI committee to ensure seamless judging workflows, real-time mentor assistance, and flawless event execution.
              </p>
            </div>

            {/* Key Responsibilities */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Responsibilities & Impact
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={14} />
                  <span>Coordinated hackathon logistics, team registrations, and portal setup for participating teams.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0" size={14} />
                  <span>Managed live technical query resolution and infrastructure support during 24-hour hackathon sprints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={14} />
                  <span>Streamlined judging evaluation rubrics, team pitching order, and final leaderboard announcements.</span>
                </li>
              </ul>
            </div>

            {/* Skill Tags */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Hackathon Management",
                  "CSI Team Leadership",
                  "Event Logistics",
                  "Technical Operations",
                  "Problem Solving",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-semibold bg-amber-50 text-amber-800 rounded-md border border-amber-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-white border border-slate-200 rounded-2xl p-4 overflow-hidden flex flex-col items-center justify-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full transition z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
            <img
              src={selectedImage}
              alt="Hackathon Experience Full Preview"
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-slate-200 shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

