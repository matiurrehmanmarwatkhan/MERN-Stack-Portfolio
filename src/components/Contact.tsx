import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMsg("Please fill in all requested fields (Name, Email, Message).");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! Your message was received successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to deliver message. Please resolve input errors and try once more.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("Network or connection breakdown. Please retry or contact direct: matiurrehmanmarwatkhan@gmail.com.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#050505] transition-colors duration-500 border-b border-zinc-200 dark:border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold font-mono tracking-widest text-sky-500 dark:text-sky-400 uppercase">
            Let's Collaborate
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Contact Mati Ur Rehman
          </p>
          <div className="mt-3 w-16 h-1 bg-sky-550 dark:bg-sky-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-display text-zinc-800 dark:text-zinc-100 font-sans tracking-tight">
              Drop Me A Line
            </h3>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed text-justify">
              Are you currently searching for a dedicated React or Express junior back-end developer to strengthen your project delivery milestones? Want to build custom full-stack solutions together? Fill in the form or connect directly!
            </p>

            {/* Icon cards */}
            <div className="space-y-4">
              
              {/* Card 1: Email */}
              <div className="flex items-center space-x-4 p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-500 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Email Direct</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-zinc-850 dark:text-zinc-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="flex items-center space-x-4 p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-505 dark:text-sky-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Call or WhatsApp</h4>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-zinc-850 dark:text-zinc-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="flex items-center space-x-4 p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-500 dark:text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Location coordinates</h4>
                  <span className="text-sm font-bold text-zinc-850 dark:text-zinc-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Card 4: Operating Hours */}
              <div className="flex items-center space-x-4 p-4 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 hover:-translate-y-0.5 transition-all duration-300">
                <div className="p-3 rounded-xl bg-sky-100 dark:bg-zinc-800 text-sky-500 dark:text-sky-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold">Active timezone response</h4>
                  <span className="text-sm font-bold text-zinc-855 dark:text-zinc-200">
                    GMT+5 (Pakistan Standard Time) - 24h reply
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 shadow-md border border-zinc-200 dark:border-zinc-800/80 relative">
              
              {/* Feedback Success banner */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-8 animate-slide-in">
                  <div className="p-3 rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950/20 dark:text-sky-400 animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">Message Transmitted!</h4>
                  <p className="text-sm text-zinc-650 dark:text-zinc-400 max-w-sm">
                    {responseMsg}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-4 py-2 rounded-xl text-xs font-mono font-bold border border-zinc-300 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Error diagnosis feedback */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-amber-50 dark:bg-zinc-900/80 border border-amber-200 dark:border-amber-400/20 text-sm text-amber-800 dark:text-amber-400 flex items-start space-x-2.5 animate-slide-in">
                      <AlertTriangle className="w-5 h-5 text-amber-550 shrink-0 mt-0.5" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  {/* Name and Email grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="flex flex-col space-y-1.5 matches-focus-animation">
                      <label htmlFor="name" className="text-xs font-mono font-bold text-zinc-455 uppercase tracking-wide">
                        Your Professional Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 text-sm text-zinc-800 dark:text-zinc-150 placeholder-zinc-400 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all duration-300 input-spot"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono font-bold text-zinc-455 uppercase tracking-wide">
                        Your Contact Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="recruiter@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 text-sm text-zinc-800 dark:text-zinc-150 placeholder-zinc-400 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all duration-300"
                      />
                    </div>

                  </div>

                  {/* Subject input */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono font-bold text-zinc-455 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Collaboration opportunities, interview, etc..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 text-sm text-zinc-800 dark:text-zinc-150 placeholder-zinc-400 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all duration-300"
                    />
                  </div>

                  {/* Message body */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono font-bold text-zinc-455 uppercase tracking-wide">
                      Message Body *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi Mati, I reviewed your React portfolio and projects. Let's block an interview session to connect..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 text-sm text-zinc-800 dark:text-zinc-150 placeholder-zinc-400 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Send Action */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-sky-500 text-black font-mono font-bold tracking-wide hover:bg-sky-600 dark:bg-sky-400 dark:text-zinc-950 dark:hover:bg-sky-305 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center space-x-2 animate-pulse">
                        <span className="w-2.5 h-2.5 bg-zinc-950 rounded-full animate-bounce" />
                        <span>DISPATCHING MESSAGE...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE IN SECONDS</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-500 dark:text-zinc-500">
                    🛡️ Mati values your privacy. Submitted communication details are saved securely.
                  </p>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
