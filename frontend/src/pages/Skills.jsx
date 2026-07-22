import React, { useState } from "react";
import LogoLoop from "../components/LogoLoop.jsx";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiC,
  SiPython,
  SiGit,
  SiPostman,
  SiExpress,
  SiRedux,
  SiRedis,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const skillCategories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend Engineering" },
  { id: "backend", name: "Backend & Systems" },
  { id: "database", name: "Databases & Storage" },
  { id: "languages", name: "Languages & Tools" },
];

const skillsData = [
  { name: "React.js", category: "frontend", icon: <SiReact className="text-sky-500" />, level: "Advanced", desc: "Component architecture, hooks, state management, SPA routing" },
  { name: "TypeScript", category: "languages", icon: <SiTypescript className="text-blue-600" />, level: "Proficient", desc: "Strong typing, interface definitions, scalable codebase design" },
  { name: "Node.js", category: "backend", icon: <SiNodedotjs className="text-emerald-600" />, level: "Advanced", desc: "Async runtime, event loops, REST API engineering, microservices" },
  { name: "Express.js", category: "backend", icon: <SiExpress className="text-slate-800" />, level: "Advanced", desc: "Middleware pipelines, API routes, JWT authentication, CORS" },
  { name: "WebSockets & WebRTC", category: "backend", icon: <SiNodedotjs className="text-indigo-600" />, level: "Proficient", desc: "Bi-directional socket chat, peer video streaming, low latency feeds" },
  { name: "MongoDB", category: "database", icon: <SiMongodb className="text-emerald-500" />, level: "Advanced", desc: "Document modeling, aggregation pipelines, schema validation" },
  { name: "PostgreSQL", category: "database", icon: <SiPostgresql className="text-blue-700" />, level: "Intermediate", desc: "Relational queries, ACID transactions, relational indexing" },
  { name: "MySQL", category: "database", icon: <SiMysql className="text-blue-600" />, level: "Intermediate", desc: "Normalized schemas, complex joins, stored procedures" },
  { name: "Redis", category: "database", icon: <SiRedis className="text-red-600" />, level: "Intermediate", desc: "In-memory caching, pub/sub queues, session store" },
  { name: "JavaScript (ES6+)", category: "languages", icon: <SiJavascript className="text-amber-500" />, level: "Advanced", desc: "Promises, async/await, closures, DOM manipulation, functional JS" },
  { name: "Java", category: "languages", icon: <DiJava className="text-red-500" />, level: "Proficient", desc: "Object-oriented programming, data structures & algorithms" },
  { name: "C Language", category: "languages", icon: <SiC className="text-blue-500" />, level: "Proficient", desc: "Pointers, memory management, foundational CS concepts" },
  { name: "Python", category: "languages", icon: <SiPython className="text-yellow-600" />, level: "Intermediate", desc: "Scripting, algorithm implementations, data manipulation" },
  { name: "Tailwind CSS", category: "frontend", icon: <SiTailwindcss className="text-cyan-500" />, level: "Advanced", desc: "Utility-first design systems, responsive layouts, modern UI" },
  { name: "Redux / Toolkit", category: "frontend", icon: <SiRedux className="text-purple-600" />, level: "Proficient", desc: "Global state management, slices, thunk middleware" },
  { name: "Git & GitHub", category: "languages", icon: <SiGit className="text-orange-600" />, level: "Advanced", desc: "Branching strategies, PR reviews, merge conflict resolution" },
  { name: "Postman", category: "languages", icon: <SiPostman className="text-orange-500" />, level: "Advanced", desc: "API testing, automated endpoint suites, environment mockups" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all"
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  const techLogos = [
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
    { node: <SiC />, title: "C Language", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <DiJava />, title: "Java", href: "https://www.java.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900 px-6 md:px-16 pt-32 pb-24 bg-grid-pattern">

      {/* HEADING SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600">
            Technical Competencies
          </p>
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Skills & <span className="text-blue-600">Technologies</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Production-proven full stack engineering toolkit covering frontend frameworks, backend runtimes, database management, and system concepts.
        </p>

        {/* Tab Filter Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${activeTab === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* SKILLS CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl p-2.5 rounded-xl bg-slate-100 border border-slate-200/60">
                  {skill.icon}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {skill.level}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900">
                {skill.name}
              </h3>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                {skill.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LOGO SCROLLER SECTION */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-200/80">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
          Technologies Scroller
        </p>
        <div className="relative h-[120px] overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm">
          <LogoLoop
            logos={techLogos}
            speed={35}
            direction="left"
            logoHeight={50}
            gap={50}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technologies I use"
          />
        </div>
      </div>
    </div>
  );
}

