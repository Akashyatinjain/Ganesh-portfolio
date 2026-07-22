import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error message
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ganeshbirajdar286@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setStatus("");
    setLoading(true);

    try {
      const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

      await axios.post(`${backend}/auth/sendEmail`, {
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
      setStatus("✅ Message sent successfully! I will reply promptly.");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please email directly at ganeshbirajdar286@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen w-full bg-slate-50 text-slate-900 flex flex-col items-center px-4 sm:px-6 pt-32 pb-24 bg-grid-pattern">

      {/* SECTION HEADER */}
      <div className="max-w-3xl text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <FaEnvelope className="text-blue-600" />
          <span>Recruiter & Developer Contact</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
          Let’s Build Something <span className="text-blue-600">Great Together</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Open for Software Engineering internships, full-time positions, and technical collaborations. Send a message or connect directly.
        </p>
      </div>

      {/* CONTACT FORM CONTAINER */}
      <div className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200/90 relative overflow-hidden">

        {/* Top Accent Line */}
        <div className="absolute top-0 left-10 right-10 h-1 bg-blue-600 rounded-full" />

        {/* Direct Email Card Strip */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Direct Email Address</p>
            <a
              href="mailto:ganeshbirajdar286@gmail.com"
              className="text-slate-900 text-base sm:text-lg font-extrabold hover:text-blue-600 transition"
            >
              ganeshbirajdar286@gmail.com
            </a>
          </div>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2 shadow-2xs transition cursor-pointer"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-600" size={14} />
                <span className="text-emerald-700">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <FaCopy className="text-slate-500" size={14} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <form onSubmit={onSubmitHandle} className="space-y-4">
          {/* Inputs Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Sarah Jenkins (Recruiter)"
                value={name}
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. sarah@company.com"
                value={email}
                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Message / Role Opportunity
            </label>
            <textarea
              placeholder="Tell me about your team, role opening, or project opportunity..."
              rows="5"
              value={message}
              className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
              onChange={(e) => setMessage(e.target.value)}
              disabled={loading}
            />
          </div>

          {/* Status Message */}
          {status && (
            <p className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold text-center">
              {status}
            </p>
          )}

          {/* Submit Button */}
          <button
            className={`w-full py-3.5 text-sm font-bold text-white rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer ${loading
                ? "bg-blue-400 cursor-not-allowed opacity-80"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20 active:scale-98"
              }`}
            type="submit"
            disabled={loading}
          >
            <FaPaperPlane size={14} />
            <span>{loading ? "Sending Message..." : "Send Direct Message"}</span>
          </button>
        </form>
      </div>

      {/* FOOTER SOCIAL STRIP */}
      <div className="mt-16 text-center space-y-6">
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Ganesh Birajdar
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4">
          <Link
            to="https://github.com/ganeshbirajdar286"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white rounded-2xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 shadow-xs transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white rounded-2xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 shadow-xs transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </Link>

          <a
            href="mailto:ganeshbirajdar286@gmail.com"
            className="p-3.5 bg-white rounded-2xl border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 shadow-xs transition"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

