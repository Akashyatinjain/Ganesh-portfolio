import React, { useState, useRef, useEffect } from "react";
import { 
  FiTerminal, FiMaximize2, 
  FiMinimize2, FiUser, FiCode, 
  FiFolder, FiSend, FiAward
} from "react-icons/fi";
import { FaTerminal, FaMagic, FaSun, FaMoon } from "react-icons/fa";

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [historyCommands, setHistoryCommands] = useState([]);
  const [theme, setTheme] = useState("light"); // light, dark, matrix
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        type: "system",
        content: (
          <div className="space-y-2 mb-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2 font-bold text-blue-600">
              <FaTerminal className="animate-pulse" />
              <span>Ganesh Birajdar's Developer Console [v2.5.0]</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Type <span className="text-blue-600 font-bold">'type'</span> or <span className="text-indigo-600 font-semibold">'help'</span> to inspect Ganesh's full profile overview (Hackathons, Skills, Projects, & Contact).
            </p>
            <p className="text-xs text-slate-500">
              💡 <span className="text-emerald-600 font-semibold">Pro tip:</span> Click <span className="text-blue-600 font-mono font-semibold">'type'</span> below to view all info, or try <span className="text-slate-800 font-mono">'theme dark'</span>!
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  // Auto-scroll terminal body internally
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = [
    { label: "type (all info)", cmd: "type", icon: <FaMagic className="text-blue-600" /> },
    { label: "help", cmd: "help", icon: <FiTerminal className="text-slate-600" /> },
    { label: "about", cmd: "about", icon: <FiUser className="text-indigo-600" /> },
    { label: "skills", cmd: "skills", icon: <FiCode className="text-emerald-600" /> },
    { label: "projects", cmd: "projects", icon: <FiFolder className="text-blue-600" /> },
    { label: "hackathons", cmd: "hackathons", icon: <FiAward className="text-amber-600" /> },
    { label: "contact", cmd: "contact", icon: <FiSend className="text-blue-600" /> },
    { label: "theme toggle", cmd: theme === "light" ? "theme dark" : "theme light", icon: theme === "light" ? <FaMoon className="text-indigo-600" /> : <FaSun className="text-amber-500" /> },
  ];

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const args = lower.split(" ");
    const mainCmd = args[0];

    const newHistory = [...history, { type: "user", cmd: trimmed }];
    setHistoryCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    let responseOutput = null;

    switch (mainCmd) {
      case "type":
      case "all":
      case "overview":
      case "summary":
      case "profile":
      case "info":
        responseOutput = (
          <div className="my-3 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 text-xs sm:text-sm font-sans text-slate-800">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                  GB
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Ganesh Birajdar — Portfolio Overview</h4>
                  <p className="text-xs text-blue-600 font-semibold">Software Developer & Web Engineer | B.E. IT @ SFIT</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">🎓 Education & Leadership</p>
                <ul className="space-y-1 text-xs text-slate-700 font-medium">
                  <li>• B.E. Information Technology (SFIT Mumbai, 2024-2028)</li>
                  <li>• IEEE SFIT Student Branch — Joint Tech Head</li>
                  <li>• CSI SFIT — Hackathon Management Lead</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">🚀 Featured Projects</p>
                <ul className="space-y-1 text-xs text-slate-700 font-medium">
                  <li>• <strong>Swasthya:</strong> Health Telemetry & WebRTC consultations</li>
                  <li>• <strong>WhatsApp Web:</strong> Real-time messaging platform (Socket.io)</li>
                </ul>
              </div>
            </div>
          </div>
        );
        break;

      case "help":
        responseOutput = (
          <div className="my-2 space-y-1.5 font-mono text-xs text-slate-700">
            <p className="font-bold text-slate-900 mb-1">Available commands:</p>
            <p>• <span className="text-blue-600 font-bold">type</span> : Full profile summary card</p>
            <p>• <span className="text-blue-600 font-bold">about</span> : Bio and engineering focus</p>
            <p>• <span className="text-blue-600 font-bold">skills</span> : Full technical stack matrix</p>
            <p>• <span className="text-blue-600 font-bold">projects</span> : Production applications list</p>
            <p>• <span className="text-blue-600 font-bold">hackathons</span> : Leadership & CSI milestones</p>
            <p>• <span className="text-blue-600 font-bold">contact</span> : Email and social links</p>
            <p>• <span className="text-blue-600 font-bold">theme [light/dark]</span> : Toggle terminal theme</p>
            <p>• <span className="text-blue-600 font-bold">clear</span> : Clear console output screen</p>
          </div>
        );
        break;

      case "about":
        responseOutput = (
          <div className="my-2 p-3 rounded-xl bg-slate-100 border border-slate-200 font-sans text-xs text-slate-700 leading-relaxed space-y-2">
            <p className="font-bold text-slate-900">Ganesh Birajdar — Software Engineer</p>
            <p>I build high-performance web applications with clean architecture and real-time backend communication protocols. Strong background in data structures, API design, and team leadership.</p>
          </div>
        );
        break;

      case "skills":
        responseOutput = (
          <div className="my-2 p-3 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs text-slate-700 space-y-1">
            <p className="font-bold text-slate-900 mb-1">Tech Stack Matrix:</p>
            <p>• Frontend: React.js, TypeScript, Redux Toolkit, Tailwind CSS</p>
            <p>• Backend: Node.js, Express.js, WebSockets, WebRTC</p>
            <p>• Databases: MongoDB, PostgreSQL, MySQL, Redis</p>
            <p>• Languages: JavaScript, Java, C, Python</p>
          </div>
        );
        break;

      case "projects":
        responseOutput = (
          <div className="my-2 space-y-2 font-sans text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <p className="font-bold text-blue-600">1. Swasthya Health Tech</p>
              <p className="text-slate-600">Real-time health telemetry & WebRTC consultations</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <p className="font-bold text-indigo-600">2. WhatsApp Web Platform</p>
              <p className="text-slate-600">Real-time socket messaging & presence engine</p>
            </div>
          </div>
        );
        break;

      case "hackathons":
        responseOutput = (
          <div className="my-2 p-3 rounded-xl bg-amber-50 border border-amber-200 font-sans text-xs text-amber-900 space-y-1">
            <p className="font-bold text-amber-800">CSI SFIT Hackathon Management Lead</p>
            <p>Spearheaded technical setup, team onboarding, and live competition logistics for CSI hackathons.</p>
          </div>
        );
        break;

      case "contact":
        responseOutput = (
          <div className="my-2 p-3 rounded-xl bg-slate-100 border border-slate-200 font-sans text-xs text-slate-800 space-y-1">
            <p><strong>Email:</strong> ganeshbirajdar286@gmail.com</p>
            <p><strong>GitHub:</strong> github.com/ganeshbirajdar286</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/ganesh-fulchand-birajdar/</p>
          </div>
        );
        break;

      case "theme":
        const targetTheme = args[1] || (theme === "light" ? "dark" : "light");
        if (["light", "dark", "matrix"].includes(targetTheme)) {
          setTheme(targetTheme);
          responseOutput = <p className="text-xs font-mono text-emerald-600">Theme switched to '{targetTheme}'</p>;
        } else {
          responseOutput = <p className="text-xs font-mono text-red-500">Unknown theme. Try: theme light, theme dark</p>;
        }
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        responseOutput = (
          <p className="text-xs font-mono text-red-500">
            Command not found: '{trimmed}'. Type <span className="font-bold underline cursor-pointer" onClick={() => handleCommand("help")}>'help'</span> for list.
          </p>
        );
        break;
    }

    setHistory([...newHistory, { type: "system", content: responseOutput }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyCommands.length > 0) {
        const nextIdx = commandIndex + 1;
        if (nextIdx < historyCommands.length) {
          setCommandIndex(nextIdx);
          setInput(historyCommands[historyCommands.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIdx = commandIndex - 1;
        setCommandIndex(nextIdx);
        setInput(historyCommands[historyCommands.length - 1 - nextIdx]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput("");
      }
    }
  };

  const themeStyles = {
    light: {
      container: "bg-white border-slate-200 text-slate-900 shadow-xl",
      header: "bg-slate-100 border-slate-200 text-slate-700",
      body: "bg-slate-50 text-slate-900",
      prompt: "text-blue-600 font-bold",
      userText: "text-slate-900 font-semibold",
    },
    dark: {
      container: "bg-[#0f172a] border-slate-800 text-slate-100 shadow-2xl",
      header: "bg-slate-900 border-slate-800 text-slate-300",
      body: "bg-[#0b0f19] text-slate-200",
      prompt: "text-sky-400 font-bold",
      userText: "text-white font-semibold",
    },
    matrix: {
      container: "bg-black border-emerald-900 text-emerald-400 shadow-2xl font-mono",
      header: "bg-emerald-950 border-emerald-900 text-emerald-400",
      body: "bg-black text-emerald-400",
      prompt: "text-emerald-400 font-bold",
      userText: "text-emerald-300 font-bold",
    },
  }[theme];

  return (
    <section id="terminal" className="relative w-full bg-slate-50 text-slate-900 py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          <p className="uppercase tracking-[0.2em] text-xs font-bold text-blue-600">
            Interactive Widget
          </p>
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
          Developer <span className="text-blue-600">Terminal</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Inspect Ganesh's profile using command-line shortcuts. Type commands or click the chips below.
        </p>
      </div>

      {/* Main Terminal Box */}
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${themeStyles.container} ${isExpanded ? "fixed inset-4 z-50 max-w-none" : ""}`}>
          
          {/* Terminal Window Top Titlebar */}
          <div className={`px-4 py-3 border-b flex items-center justify-between ${themeStyles.header}`}>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-2 text-xs font-mono font-bold tracking-wide">
                ganesh@dev-laptop:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-200/60 hover:bg-slate-200 text-slate-700 transition cursor-pointer font-semibold"
                title="Toggle Theme"
              >
                {theme === "light" ? <FaMoon size={12} /> : <FaSun size={12} />}
                <span>{theme === "light" ? "Dark" : "Light"}</span>
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg hover:bg-slate-200/60 transition cursor-pointer"
                title={isExpanded ? "Minimize" : "Maximize"}
              >
                {isExpanded ? <FiMinimize2 size={14} /> : <FiMaximize2 size={14} />}
              </button>
            </div>
          </div>

          {/* Quick Command Action Chips */}
          <div className="px-4 py-2.5 bg-slate-100/90 border-b border-slate-200/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
              <FaTerminal size={10} /> Quick Run:
            </span>
            {quickCommands.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleCommand(item.cmd)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-blue-600 text-xs font-semibold whitespace-nowrap transition shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className={`p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm ${themeStyles.body}`}
            style={{ height: isExpanded ? "calc(100vh - 120px)" : "360px" }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="mb-3">
                {item.type === "user" ? (
                  <div className="flex items-center gap-2">
                    <span className={themeStyles.prompt}>ganesh@dev:~$</span>
                    <span className={themeStyles.userText}>{item.cmd}</span>
                  </div>
                ) : (
                  <div>{item.content}</div>
                )}
              </div>
            ))}

            {/* Input Prompt Row */}
            <div className="flex items-center gap-2 pt-1">
              <span className={themeStyles.prompt}>ganesh@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none font-mono text-xs sm:text-sm"
                placeholder="type 'help' or click buttons above..."
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
