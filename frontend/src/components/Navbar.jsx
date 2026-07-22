import { NavLink } from "react-router-dom";
import Magnet from "./Magnet";
import React, { useState } from "react";
import { FiMenu, FiX, FiArrowRight, FiFileText } from "react-icons/fi";
import resume from "/ganesh_resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
      ? "text-blue-600 bg-blue-50/80 font-semibold"
      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">

        {/* Brand Logo & Recruiter Status Pill */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 group-hover:bg-blue-700 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-blue-500/20 transition">
            GB
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition">
              Ganesh Birajdar
            </h1>
            <p className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Full Stack Engineer
            </p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/60">
          <NavLink to="/" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/experience" className={navLinkClass}>
            Experience
          </NavLink>
          <NavLink to="/hackathon" className={navLinkClass}>
            Hackathons
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/terminal" className={navLinkClass}>
            Terminal
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </ul>

        {/* Desktop Buttons: Resume & Let's Talk */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={resume}
            download="Ganesh_Birajdar_Resume.pdf"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition shadow-xs"
          >
            <FiFileText size={14} className="text-blue-600" />
            <span>Resume</span>
          </a>

          <Magnet padding={30} disabled={false} magnetStrength={4}>
            <NavLink to="/contact">
              <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-blue-500/20 transition cursor-pointer">
                <span>Let’s Talk</span>
                <FiArrowRight size={14} />
              </button>
            </NavLink>
          </Magnet>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-xl text-slate-700 bg-slate-100 border border-slate-200 text-xl"
          aria-label="Toggle Navigation Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <ul className="flex flex-col gap-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
              About Overview
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/experience" className={navLinkClass}>
              Experience & Timeline
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/hackathon" className={navLinkClass}>
              Hackathon Leadership
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>
              Featured Projects
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/skills" className={navLinkClass}>
              Skills Matrix
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/terminal" className={navLinkClass}>
              Dev Terminal
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
              Contact Me
            </NavLink>
          </ul>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={resume}
              download="Ganesh_Birajdar_Resume.pdf"
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs text-center flex items-center justify-center gap-2"
            >
              <FiFileText size={14} className="text-blue-600" />
              <span>Download Resume PDF</span>
            </a>

            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20">
                <span>Let’s Talk</span>
                <FiArrowRight size={14} />
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

