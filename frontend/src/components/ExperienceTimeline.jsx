import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaExpand, FaTimes, FaTrophy } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import ImageSlider from "./ImageSlider";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: "csi-hackathon",
    role: "Hackathon Management Lead",
    organization: "CSI SFIT (Computer Society of India)",
    period: "2025 - Present",
    duration: "Hackathon Lead",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Leadership & Operations",
    icon: <FaTrophy className="text-amber-600 text-lg sm:text-xl" />,
    description:
      "Managed end-to-end hackathon operations in collaboration with the CSI team. Oversaw logistics, team onboarding, technical troubleshooting, judge paneling workflows, and live platform operations to deliver a smooth competition experience for all participating teams.",
    skills: [
      "Hackathon Operations",
      "Event Management",
      "CSI Team Leadership",
      "Technical Coordination",
      "Judging & Rubrics Workflow",
    ],
    mediaImages: ["/csi-h-1.png", "/csi-h-2.png"],
    mediaTitles: [
      "CSI Hackathon Management - Team & Event Execution (Phase 1)",
      "CSI Hackathon Management - Live Operations & Platform (Phase 2)",
    ],
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    id: "ieee-head",
    role: "Joint Tech Head",
    organization: "IEEE SFIT Student Branch",
    period: "Jun 2026 - Present",
    duration: "Student Leadership",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Technical Leadership",
    icon: <SiIeee className="text-blue-600 text-xl sm:text-2xl" />,
    description:
      "As Joint Head of the IEEE Student Branch, I collaborate with the core committee to plan and execute technical events, workshops, hackathons, and speaker sessions. I coordinate with team members, manage technical operations, and drive student technical development.",
    skills: [
      "Full-Stack Web Development",
      "Web Application Engineering",
      "Team Leadership",
      "Technical Event Operations",
    ],
    mediaImage: "/ieee.png",
    mediaTitle: "IEEE Leadership & Technical Appointments",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
  },
  {
    id: "csi-tech",
    role: "Technical Executive",
    organization: "CSI SFIT (Computer Society of India)",
    period: "May 2025 - May 2026",
    duration: "1 yr 1 mo",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Technical Executive",
    icon: <FaBriefcase className="text-indigo-600 text-lg sm:text-xl" />,
    description:
      "As a Technical Executive at the Computer Society of India (CSI) Student Chapter, I contributed to planning and organizing technical events, workshops, and hackathons. I collaborated with the committee to build engagement, solve complex technical tasks, and build modern web solutions.",
    skills: [
      "Back-End Web Development",
      "Full-Stack Development",
      "System Architecture",
      "Workshop Hosting",
    ],
    mediaImage: "/csi.png",
    mediaTitle: "CSI Technical Executive Appointment & Activities",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  {
    id: "education-sfit",
    role: "Information Technology Engineering (B.E.)",
    organization: "St. Francis Institute of Technology (SFIT)",
    period: "2024 - 2028",
    duration: "4 yrs Degree",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Education & Degree",
    icon: <FaGraduationCap className="text-emerald-600 text-xl sm:text-2xl" />,
    description:
      "Pursuing Bachelor of Engineering degree in Information Technology Engineering. Deep diving into Data Structures, Algorithms, Object-Oriented Design, Database Engineering, and Modern Web Architecture.",
    skills: [
      "Data Structures & Algorithms",
      "Database Systems (DBMS)",
      "Web Engineering",
      "Software Engineering",
    ],
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const nodesRef = useRef([]);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current && containerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const node = nodesRef.current[index];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (node) {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
          );
        }

        const isEven = index % 2 === 0;
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            x: window.innerWidth >= 768 ? (isEven ? -30 : 30) : 0,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative min-h-screen w-full bg-slate-50 text-slate-900 px-4 sm:px-6 md:px-12 py-24 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600">
            Leadership & Track Record
          </p>
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Experience & <span className="text-blue-600">Milestones</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Positions of responsibility, student body leadership, and technical initiatives driving developer community engagement.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-slate-200 rounded-full overflow-hidden">
          <div
            ref={lineRef}
            className="w-full h-full bg-blue-600 origin-top shadow-xs"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Node Circle on Line */}
                <div
                  ref={(el) => (nodesRef.current[index] = el)}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                </div>

                {/* Timeline Card Container */}
                <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="group bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
                  >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-8 right-8 h-1 bg-blue-600 rounded-full" />

                    {/* Role Header & Type Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                        <FaCalendarAlt className="text-blue-600" />
                        {item.period} ({item.duration})
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-blue-600 mt-1">
                      {item.organization}
                    </h4>

                    {/* Location */}
                    <p className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5 mb-4">
                      <FaMapMarkerAlt className="text-red-500" />
                      {item.location}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Multiple Images Slider */}
                    {item.mediaImages && item.mediaImages.length > 0 && (
                      <div className="mb-6">
                        <ImageSlider
                          images={item.mediaImages}
                          titles={item.mediaTitles}
                          onExpandImage={(img) => setSelectedImage(img)}
                        />
                      </div>
                    )}

                    {/* Single Attachment Preview */}
                    {!item.mediaImages && item.mediaImage && (
                      <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 p-2 group/media relative">
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-200">
                          <img
                            src={item.mediaImage}
                            alt={item.mediaTitle}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/media:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-900/40 flex items-end justify-between p-3">
                            <span className="text-xs font-semibold text-white truncate max-w-[80%]">
                              📄 {item.mediaTitle}
                            </span>
                            <button
                              onClick={() => setSelectedImage(item.mediaImage)}
                              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-1 text-xs font-semibold"
                              title="Expand Image"
                            >
                              <FaExpand size={12} />
                              <span>View</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal Lightbox */}
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
              alt="Experience preview"
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-slate-200"
            />
          </div>
        </div>
      )}
    </section>
  );
}

