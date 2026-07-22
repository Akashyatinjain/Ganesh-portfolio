import React, { useState } from "react";
import ganeshImg from "../assets/ganesh.jpg";
import TiltedCard from "../components/TiltedCard.jsx";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaCopy, FaCheck, FaDownload, FaArrowRight, FaCode, FaGraduationCap, FaTrophy } from "react-icons/fa";
import resume from "/ganesh_resume.pdf";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ganeshbirajdar286@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-[90vh] w-full bg-slate-50 text-slate-900 pt-28 sm:pt-36 pb-20 px-6 sm:px-8 lg:px-16 flex items-center bg-grid-pattern overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* LEFT COLUMN: Recruiter Pitch & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Software Engineering Internships & Roles</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Full Stack & <br />
              <span className="text-blue-600">Systems Engineer</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700">
              Ganesh Birajdar • Mumbai, India
            </p>
          </div>

          {/* Value Prop Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Computer Engineering student building production-ready applications with strong computer science fundamentals. Specialized in <span className="font-semibold text-slate-900">React.js, Node.js, Express, WebSockets, WebRTC, Redis,</span> and relational/document databases. Proven track record in student leadership as <span className="font-semibold text-slate-900">IEEE Joint Tech Head</span> and <span className="font-semibold text-slate-900">CSI Hackathon Lead</span>.
          </p>

          {/* Recruiter Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={resume}
              download="Ganesh_Birajdar_Resume.pdf"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition flex items-center gap-2"
            >
              <FaDownload size={14} />
              <span>Download Resume PDF</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm shadow-xs transition flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-600" size={14} />
                  <span className="text-emerald-700">Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy className="text-slate-500" size={14} />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>

            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-xs transition flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          {/* At-a-Glance Recruiter Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                <FaGraduationCap size={14} />
                <span>Education</span>
              </div>
              <p className="text-sm font-bold text-slate-900">B.E. IT Engineering</p>
              <p className="text-xs text-slate-500">SFIT Mumbai (2024–2028)</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
                <FaTrophy size={14} />
                <span>Leadership</span>
              </div>
              <p className="text-sm font-bold text-slate-900">IEEE Joint Tech Head</p>
              <p className="text-xs text-slate-500">CSI Hackathon Lead</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-1">
                <FaCode size={14} />
                <span>Core Stack</span>
              </div>
              <p className="text-sm font-bold text-slate-900">MERN & Real-time</p>
              <p className="text-xs text-slate-500">WebSockets, WebRTC, Redis</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Interactive Card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[380px] bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center space-y-5">

            {/* Photo Preview Container */}
            <div className="w-full flex justify-center">
              <TiltedCard
                imageSrc={ganeshImg}
                altText="Ganesh Birajdar"
                captionText="Ganesh Birajdar"
                containerHeight="240px"
                containerWidth="240px"
                imageHeight="240px"
                imageWidth="240px"
                rotateAmplitude={8}
                scaleOnHover={1.02}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>

            {/* Profile Brief */}
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Ganesh Birajdar
              </h3>
              <p className="text-xs font-semibold text-blue-600 mt-1">
                Software & Full Stack Developer
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Building scalable web applications, real-time messaging systems, and diagnostic tools.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-2 border-t border-slate-100">
              {["React", "Node.js", "Express", "MongoDB", "WebSockets", "TypeScript"].map((tag, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/ganeshbirajdar286"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl border border-slate-200/80 transition"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl border border-slate-200/80 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

