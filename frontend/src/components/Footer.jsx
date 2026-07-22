import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCheck, FaCopy, FaArrowUp } from "react-icons/fa";
import resume from "/ganesh_resume.pdf";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ganeshbirajdar286@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-200/80 pt-16 pb-12 px-6 md:px-16 text-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Col 1: Brand & Recruiter Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-blue-500/20">
                GB
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Ganesh Birajdar
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Full Stack & Systems Engineer with experience in React, Node.js, WebSockets, WebRTC, and database systems. IEEE Student Branch Joint Tech Head & CSI Hackathon Lead.
            </p>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open for Software Engineering Internships & Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  About & Summary
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-blue-600 transition-colors">
                  Experience & Timeline
                </Link>
              </li>
              <li>
                <Link to="/hackathon" className="hover:text-blue-600 transition-colors">
                  Hackathon Leadership
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-600 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-blue-600 transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link to="/terminal" className="hover:text-blue-600 transition-colors">
                  Interactive Dev Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Recruiter Actions */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Quick Connect
            </h4>

            {/* Quick Copy Email Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div className="truncate">
                <p className="text-xs text-slate-500 font-medium">Direct Email</p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  ganeshbirajdar286@gmail.com
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition flex items-center gap-1.5 shadow-xs cursor-pointer ml-2 flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-600" size={12} />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-slate-500" size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Buttons: Resume & Socials */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={resume}
                download="Ganesh_Birajdar_Resume.pdf"
                className="flex-1 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold text-center shadow-xs shadow-blue-500/20 transition"
              >
                Download Resume PDF
              </a>

              <a
                href="https://github.com/ganeshbirajdar286"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ganesh Birajdar. Built with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-medium text-slate-600 hover:text-blue-600 transition cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
              <FaArrowUp size={10} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
