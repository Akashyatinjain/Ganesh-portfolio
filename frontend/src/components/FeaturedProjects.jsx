import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaThLarge,
  FaSyncAlt,
  FaCheckCircle,
  FaCodeBranch,
} from "react-icons/fa";
import Swasthya from "../assets/Swasthya.png";
import Whatsapp from "../assets/WhatsApp.png";

const projects = [
  {
    id: "swasthya",
    title: "Swasthya Health Tech",
    subtitle: "Healthcare Telemetry & Real-Time Diagnostics",
    description:
      "A comprehensive AI-assisted health tracking and diagnostic platform. Built with WebSocket telemetry feeds for real-time vital stats, interactive health charts, automated dietary planning, and WebRTC video consultations with certified specialists.",
    image: Swasthya,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "WebRTC", "Redis", "Node.js", "TailwindCSS"],
    link: "https://sih-nu-ten.vercel.app/",
    github: "https://github.com/ganeshbirajdar286/sih",
    category: "Full Stack / HealthTech",
    badgeColor: "bg-blue-600 text-white",
    highlights: [
      "Sub-50ms WebSocket telemetry streaming for patient vitals",
      "WebRTC peer-to-peer secure video consultation integration",
      "Redis caching layer for high-throughput diagnostic queries",
    ],
  },
  {
    id: "whatsapp",
    title: "WhatsApp Web Platform",
    subtitle: "Real-Time Messaging & Presence Engine",
    description:
      "A full-featured, responsive Web Messaging application supporting bi-directional instant chat with WebSockets, message delivery/read status indicators, active user presences, and rich media communication.",
    image: Whatsapp,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "Node.js", "TailwindCSS"],
    link: "https://whatsapp-three-amber.vercel.app/",
    github: "https://github.com/ganeshbirajdar286/whatsapp",
    category: "Real-time Systems",
    badgeColor: "bg-indigo-600 text-white",
    highlights: [
      "Bi-directional Socket.io room management for 1:1 and group chats",
      "Instant message state sync (sent, delivered, read receipts)",
      "Optimized MongoDB indexing for rapid search & chat history loading",
    ],
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' or 'grid'

  const cardRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // 360-Degree Rotating Switcher Function using GSAP
  const rotateToProject = (targetIndex, direction = "next") => {
    if (isRotating || targetIndex === currentIndex) return;
    setIsRotating(true);

    const cardEl = cardRef.current;
    const rotateAngle = direction === "next" ? 360 : -360;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(cardEl, { rotateY: 0, scale: 1 });
        setIsRotating(false);
      },
    });

    tl.to(cardEl, {
      rotateY: direction === "next" ? 180 : -180,
      scale: 0.9,
      opacity: 0.3,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(targetIndex);
      },
    });

    tl.to(cardEl, {
      rotateY: rotateAngle,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    rotateToProject(nextIdx, "next");
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    rotateToProject(prevIdx, "prev");
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-slate-50 text-slate-900 pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-16 overflow-hidden bg-dot-pattern"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-100/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Heading & View Mode Toggles */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600">
              Featured Systems & Applications
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Production-Grade <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl">
            Real-world applications built with scalable backend architectures, socket concurrency, and responsive client interfaces.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-xs">
            <button
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${viewMode === "showcase"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              <FaSyncAlt className={isRotating ? "animate-spin" : ""} />
              <span>360° Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${viewMode === "grid"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              <FaThLarge />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* SHOWCASE MODE */}
      {viewMode === "showcase" ? (
        <div className="relative max-w-6xl mx-auto perspective-1200 z-10">
          <div
            ref={cardRef}
            className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-slate-200/60 transition-shadow duration-500 transform-gpu relative overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Top Accent Blue Line */}
            <div className="absolute top-0 left-12 right-12 h-1 bg-blue-600 rounded-full" />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

              {/* Left Column: Image Preview */}
              <div className="w-full lg:w-1/2 group relative">
                <div
                  ref={imageRef}
                  className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md transition-transform duration-500 group-hover:scale-[1.01]"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />

                  {/* Quick Live Preview Badge */}
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 bg-slate-900/90 hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition shadow-md"
                  >
                    <span>Launch Live App</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Details */}
              <div ref={textRef} className="w-full lg:w-1/2 flex flex-col space-y-5 text-left">

                {/* Category & Counter */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${currentProject.badgeColor}`}>
                    {currentProject.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Architectural Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {currentProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" size={13} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies & Libraries
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-lg border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition active:scale-95"
                  >
                    <span>View Live Application</span>
                    <FaExternalLinkAlt size={12} />
                  </a>

                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs transition active:scale-95 flex items-center gap-2"
                      title="View GitHub Repository"
                    >
                      <FaCodeBranch size={14} className="text-slate-600" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls Bar below Card */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
            <div className="flex items-center gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => rotateToProject(idx, idx > currentIndex ? "next" : "prev")}
                  disabled={isRotating}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition cursor-pointer ${idx === currentIndex
                      ? "bg-white border-blue-600 text-blue-600 shadow-md shadow-blue-500/10"
                      : "bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900"
                    }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${idx === currentIndex ? "bg-blue-600" : "bg-slate-300"
                      }`}
                  />
                  <span>{proj.title}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={isRotating}
                className="p-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 transition active:scale-95 disabled:opacity-50 flex items-center gap-2 text-xs font-semibold shadow-xs cursor-pointer"
                title="Previous Project"
              >
                <FaArrowLeft size={14} />
                <span className="hidden sm:inline">Prev Project</span>
              </button>

              <button
                onClick={handleNext}
                disabled={isRotating}
                className="p-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 transition active:scale-95 disabled:opacity-50 flex items-center gap-2 text-xs font-semibold shadow-xs cursor-pointer"
                title="Next Project"
              >
                <span className="hidden sm:inline">Next Project</span>
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* GRID MODE */
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[16/10]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${proj.badgeColor}`}>
                    {proj.category}
                  </span>

                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors pt-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600">
                    {proj.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded-md border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition"
                >
                  <span>Live App</span>
                  <FaExternalLinkAlt size={12} />
                </a>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition"
                    title="View Code on GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

