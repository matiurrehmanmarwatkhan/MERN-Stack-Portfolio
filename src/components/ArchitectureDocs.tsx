import React, { useState } from "react";
import { 
  FolderTree, 
  Database, 
  Network, 
  Compass, 
  Palette, 
  Search, 
  BookOpen, 
  Terminal, 
  HelpCircle,
  FileCode,
  Layers,
  Server,
  CloudLightning,
  ChevronRight,
  TrendingUp
} from "lucide-react";

export default function ArchitectureDocs() {
  const [activeTab, setActiveTab] = useState("architecture");

  const menuItems = [
    { id: "architecture", label: "MERN Architecture", icon: Compass },
    { id: "folders", label: "Folders (Front & Back)", icon: FolderTree },
    { id: "database", label: "MongoDB & API Design", icon: Database },
    { id: "design", label: "UI Component Breakdown", icon: Palette },
    { id: "deployment", label: "Deployment & SEO Guide", icon: CloudLightning },
    { id: "careerAdvice", label: "Recruiter & Client Tips", icon: TrendingUp },
  ];

  return (
    <div className="w-full sophisticated-glass rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
      {/* Tab Header */}
      <div className="p-6 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-[#0A0A0C]/55">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-sans font-semibold text-zinc-900 dark:text-slate-100 flex items-center gap-2">
              <Terminal className="text-sky-500 dark:text-sky-400 w-5 h-5 animate-pulse" />
              MERN Stack Architecture Blueprints
            </h3>
            <p className="text-xs text-zinc-500 dark:text-slate-400 mt-1">
              Interactive system design, database schemas, responsive component trees, and developer guidelines.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-sky-500 text-black dark:bg-sky-400 dark:text-zinc-950 shadow-md shadow-sky-400/20"
                      : "bg-zinc-100 dark:bg-zinc-900/60 text-zinc-650 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/50 dark:border-zinc-850"
                  }`}
                  id={`arch-tab-${item.id}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-6 md:p-8 min-h-[450px] bg-white/40 dark:bg-zinc-950/20">
        {/* ARCHITECTURE WORKFLOW */}
        {activeTab === "architecture" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
              <h4 className="text-sm font-sans font-semibold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> 1. End-To-End MERN Stack Architecture Flow
              </h4>
              <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                The application coordinates a modern decoupling state mechanism. The Frontend leverages React on single-page state, talking over Axios JSON payloads to an Express Node.js cluster, which maintains secure validations with MongoDB via Mongoose.
              </p>
              
              {/* Visual ASCII Flow Chart */}
              <div className="bg-zinc-900 dark:bg-[#060608] p-4 rounded-xl font-mono text-xs text-sky-400 overflow-x-auto leading-relaxed border border-zinc-800 dark:border-sky-950/40">
                {`[Client Browser] ---> (React UI Pages / View States) ---> [SPA State/Axios Clients]
                                       |
                                       v (REST HTTP Request Over SSL - cors enabled)
 [MongoDB Atlas] <--- (Mongoose Models) <--- [Express Router] <--- [Node Server Cluster]`}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
                <h5 className="text-xs font-bold uppercase text-zinc-400 dark:text-slate-400 tracking-wider mb-3">Frontend Stack Highlights</h5>
                <ul className="space-y-2 text-xs text-zinc-650 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Vite bundler</strong> - High speed compile speeds with state optimizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Tailwind v4 CSS</strong> - Native rendering without bloating bundles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Framer Motion (motion/react)</strong> - Declared physics-based screen transitions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
                <h5 className="text-xs font-bold uppercase text-zinc-400 dark:text-slate-400 tracking-wider mb-3">Backend Stack Highlights</h5>
                <ul className="space-y-2 text-xs text-zinc-650 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Express.js Server</strong> - Clean modular Router matching controller endpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Mongoose Driver</strong> - Strict schema mapping with connection pooling state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" />
                    <span><strong>Global Error Middleware</strong> - Robust server logging preserving stack traces</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step-by-Step Development Roadmap */}
            <div className="bg-sky-500/5 dark:bg-sky-500/5 p-5 rounded-2xl border border-sky-500/10 dark:border-sky-500/10 font-sans">
              <h4 className="text-sky-600 dark:text-sky-400 font-sans font-medium text-sm mb-3">🛠️ Professional MERN Development Roadmap (9-Step)</h4>
              <div className="space-y-3.5">
                {[
                  { step: "Phase 1", name: "Requirements Blueprinting", desc: "Formulate database specs, UI design mockups, and API payload expectations." },
                  { step: "Phase 2", name: "Local Server Scaffold", desc: "Bootstrap Express on Node.js, create mongoose schemas, and test routes with REST Clients." },
                  { step: "Phase 3", name: "Atlas Storage Pairing", desc: "Register a high-availability MongoDB Atlas collection and bind URI connections securely." },
                  { step: "Phase 4", name: "Robust CRUD Controllers", desc: "Build parameter validators, sanitized error handlers, and transactional database actions." },
                  { step: "Phase 5", name: "Frontend State Architecture", desc: "Initialize Vite + React, set up Tailwind themes, global contexts, and API managers." },
                  { step: "Phase 6", name: "Premium Section Framing", desc: "Implement reactive Hero, Projects portfolio grid, and responsive education chronological cards." },
                  { step: "Phase 7", name: "Physics Transitioning", desc: "Incorporate motion transitions, scrolling observers, and dynamic dark mode toggling." },
                  { step: "Phase 8", name: "Production Testing & Hardening", desc: "Apply CORS access restrictions, rate-limiter profiles, and lint type integrity verification." },
                  { step: "Phase 9", name: "Multi-Cloud Deployments", desc: "Push frontend bundles to Vercel/Netlify CDN nodes, and Express runtime processes to Render/AWS." }
                ].map((ph, idx) => (
                  <div key={idx} className="flex gap-3 text-xs">
                    <span className="font-mono bg-sky-500/10 dark:bg-sky-500/10 text-sky-655 dark:text-sky-300 px-2 py-0.5 rounded-lg text-[10px] uppercase font-bold shrink-0 self-start mt-0.5">
                      {ph.step}
                    </span>
                    <div>
                      <strong className="text-zinc-800 dark:text-slate-200">{ph.name}</strong> — <span className="text-zinc-500 dark:text-slate-400">{ph.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FOLDERS STRUCTURE */}
        {activeTab === "folders" && (
          <div className="space-y-6 animate-fadeIn">
            <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed">
              Below is the comprehensive enterprise production-ready MERN directory blueprint designed to maintain highly isolated frontend views and backend controllers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Tree */}
              <div className="bg-zinc-900 dark:bg-[#060608] p-5 rounded-2xl border border-zinc-800 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800 dark:border-white/5">
                  <FolderTree className="text-sky-400 w-4 h-4" />
                  <span className="text-xs font-semibold uppercase text-zinc-300 tracking-wider">Frontend Boilerplate Tree</span>
                </div>
                <pre className="font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
{`portfolio-frontend/
├── public/                 # Static items (resume, avatars)
├── src/
│   ├── assets/             # Raw images & global logos
│   ├── components/         # Highly modular reusable UI
│   │   ├── Header.jsx      # Sticky glass navigation
│   │   ├── Hero.jsx        # High-impact presentation
│   │   ├── About.jsx       # Bio & key statistics panel
│   │   ├── Skills.jsx      # Animated percentage bars
│   │   ├── Projects.jsx    # Scrollable showcase grid
│   │   ├── Education.jsx   # Timeline components
│   │   └── Contact.jsx     # Validated submission form
│   ├── App.jsx             # Master UI orchestrator
│   ├── index.css           # Tailwind system directives
│   ├── main.jsx            # DOM node mounting entry
│   └── data.js             # Shared static portfolio data
├── .env.example            # Environment configurations (VITE_API)
└── vite.config.ts          # Vite bundler parameters`}
                </pre>
              </div>

              {/* Backend Tree */}
              <div className="bg-zinc-900 dark:bg-[#060608] p-5 rounded-2xl border border-zinc-800 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800 dark:border-white/5">
                  <Server className="text-sky-400 w-4 h-4" />
                  <span className="text-xs font-semibold uppercase text-zinc-300 tracking-wider">Backend Service Tree</span>
                </div>
                <pre className="font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
{`portfolio-backend/
├── config/
│   └── db.js               # MongoDB Mongoose connector pool
├── controllers/
│   └── contactController.js# Submissions CRUD handlers
├── models/
│   └── Contact.js          # Mongoose structured Document Schema
├── routes/
│   └── contactRoutes.js    # API route routing maps
├── middleware/
│   ├── devlogger.js        # Request monitoring console
│   └── errorHandler.js     # Enterprise global exception filter
├── .env.example            # Database & Port credentials (MONGO_URI)
├── package.json            # Deployment start and dependencies
└── server.js               # Root file launching Node processes`}
                </pre>
              </div>
            </div>

            {/* NPM Libraries required */}
            <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 space-y-3">
              <h5 className="text-xs font-semibold uppercase text-zinc-700 dark:text-slate-300 uppercase tracking-widest">Required Production NPM Packages</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong className="text-sky-600 dark:text-sky-400">Frontend Core:</strong>
                  <ul className="list-disc pl-4 mt-1 text-zinc-550 dark:text-slate-400 space-y-1">
                    <li><code>motion/react</code> (Animation lifecycles)</li>
                    <li><code>lucide-react</code> (Vector icons)</li>
                    <li><code>axios</code> (Asynchronous HTTP transactions)</li>
                    <li><code>react-hook-form</code> (Optimized client inputs)</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-sky-600 dark:text-sky-400">Backend Core:</strong>
                  <ul className="list-disc pl-4 mt-1 text-zinc-550 dark:text-slate-400 space-y-1">
                    <li><code>express</code> (Custom rest engines)</li>
                    <li><code>mongoose</code> (Atlas MongoDB models mapping)</li>
                    <li><code>dotenv</code> & <code>cors</code> (Headers & Secrets)</li>
                    <li><code>express-rate-limit</code> (DDoS form guard)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DATABASE SCHEMAS & APIS */}
        {activeTab === "database" && (
          <div className="space-y-6 animate-fadeIn">
            <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed">
              Mongoose acts as the data driver, enforcing clean structures and casting validation constraints directly into the document layer before committing transactions to MongoDB Atlas.
            </p>

            <div className="bg-zinc-900 dark:bg-[#060608] p-5 rounded-2xl border border-zinc-800 dark:border-white/5">
              <h4 className="text-xs font-semibold uppercase text-sky-400 mb-3 flex items-center gap-1.5 font-sans">
                <FileCode className="w-3.5 h-3.5" /> Mongoose Model Design: Contact Schema
              </h4>
              <pre className="font-mono text-xs text-zinc-300 overflow-x-auto p-2">
{`import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    match: [
      /^\\s*@/i, // Validated email pattern matching
      'Please fill a valid email address'
    ]
  },
  subject: {
    type: String,
    required: [true, 'Please configure a subject line'],
    maxlength: [100, 'Subject limit is 100 characters']
  },
  message: {
    type: String,
    required: [true, 'Please type a message'],
    minlength: [10, 'Messages must exceed 10 characters']
  }
}, {
  timestamps: true // Auto-manages: createdAt & updatedAt timestamps
});

export default mongoose.model('Contact', ContactSchema);`}
              </pre>
            </div>

            {/* REST API Endpoints Table */}
            <div className="bg-zinc-50/50 dark:bg-[#0A0A0C]/45 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80">
              <div className="p-4 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-[#0A0A0C]/50">
                <h5 className="text-xs font-semibold uppercase text-zinc-700 dark:text-slate-300 tracking-wider">REST API Endpoints Specification</h5>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-zinc-650 dark:text-slate-300">
                  <thead className="bg-[#e4e4e7]/60 dark:bg-[#060608] text-zinc-805 dark:text-slate-400 capitalize border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                      <th className="p-3">HTTP Method</th>
                      <th className="p-3">Endpoint Route</th>
                      <th className="p-3">Payload / Body</th>
                      <th className="p-3">Successful Response (200/201)</th>
                      <th className="p-3">Function Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    <tr>
                      <td className="p-3 font-bold text-sky-600 dark:text-sky-400">POST</td>
                      <td className="p-3 font-mono text-zinc-900 dark:text-white">/api/contact</td>
                      <td className="p-3"><code>{"{ name, email, subject, message }"}</code></td>
                      <td className="p-3"><code>{"{ success: true, message: 'Saved' }"}</code></td>
                      <td className="p-3 text-zinc-500 dark:text-slate-400">Stores validated user enquiry to Database and notifies administration</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-sky-502 dark:text-sky-305">GET</td>
                      <td className="p-3 font-mono text-zinc-900 dark:text-white">/api/contact</td>
                      <td className="p-3">None</td>
                      <td className="p-3"><code>{"{ success: true, data: [...] }"}</code></td>
                      <td className="p-3 text-zinc-500 dark:text-slate-400">Retrieves historical submissions feed (for Admin dashboards)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-sky-620 dark:text-sky-400">DELETE</td>
                      <td className="p-3 font-mono text-zinc-900 dark:text-white">/api/contact/:id</td>
                      <td className="p-3">None</td>
                      <td className="p-3"><code>{"{ success: true, message: 'Deleted' }"}</code></td>
                      <td className="p-3 text-zinc-500 dark:text-slate-400">Removes an message document by object ID params (Admin access)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* UI COMPONENT BREAKDOWN & PATTERNS */}
        {activeTab === "design" && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-sm font-sans font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2">
              <Palette className="w-4 h-4" /> UI Layout, Color Typography & Component Maps
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 space-y-3">
                <h5 className="font-semibold text-zinc-800 dark:text-slate-200 font-sans">Suggested Color Palettes</h5>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded bg-[#0A0A0C] border border-white/10 shrink-0"></span>
                    <div>
                      <strong className="text-zinc-700 dark:text-slate-300 font-sans">Deep Sophisticated Glass Canvas (#0A0A0C)</strong>
                      <p className="text-[10px] text-zinc-400 dark:text-slate-500 font-sans">Dark aesthetic core background preventing visual eye fatigue</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded bg-sky-500 shrink-0"></span>
                    <div>
                      <strong className="text-zinc-700 dark:text-slate-300 font-sans">Brand Accent Sky-blue (#0ea5e9)</strong>
                      <p className="text-[10px] text-zinc-400 dark:text-slate-500 font-sans">Interactive markers, progress values, buttons, and badges</p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="w-6 h-6 rounded bg-zinc-200/50 dark:bg-white/5 border border-zinc-350 dark:border-white/10 shrink-0"></span>
                    <div>
                      <strong className="text-zinc-700 dark:text-slate-300 font-sans">Sophisticated Translucent Shield</strong>
                      <p className="text-[10px] text-zinc-400 dark:text-slate-500 font-sans">Translucent components applying premium backdrop blur styles</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 space-y-3">
                <h5 className="font-semibold text-zinc-800 dark:text-slate-200">Typography Settings</h5>
                <ul className="space-y-1.5 text-zinc-650 dark:text-slate-300">
                  <li><strong>Headings:</strong> <code>font-sans text-zinc-900 dark:text-slate-100 tracking-tight</code> using <strong>Inter</strong> & Serif Italics</li>
                  <li><strong>Subtitles/Metadata:</strong> <code>font-sans font-medium text-sky-505 dark:text-sky-400</code> for visual accents</li>
                  <li><strong>Telemetry / Code blocks:</strong> <code>font-mono text-xs</code> using <strong>JetBrains Mono</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 dark:bg-[#060608] p-5 rounded-2xl border border-zinc-800 dark:border-white/5 space-y-3 font-sans">
              <h5 className="text-xs font-semibold uppercase text-zinc-300">Component Decomposition Breakdown</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                To respect React standards, states flow downward while dispatch signals propagate upwards using lightweight props:
              </p>
              <ul className="list-disc pl-5 text-xs text-zinc-300 space-y-2">
                <li><strong>Shared Base & Glass Cards</strong>: High-contrast grid frames dynamically measuring dimensions via element resize observers.</li>
                <li><strong>Contact Handlers</strong>: Employs <code>async/await</code> request cycles managing localized loading flags, returning feedback on state toasts.</li>
                <li><strong>Resume Download Strategies</strong>: Instead of complex PDF pipelines, import the PDF CV directly using Vite asset loaders (<code>/assets/MERN Stack CV.pdf</code>) and bind it to the standard anchor <code>download</code> tag attributes.</li>
              </ul>
            </div>
          </div>
        )}

        {/* DEPLOYMENT & SEO */}
        {activeTab === "deployment" && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-sm font-sans font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2">
              <CloudLightning className="w-4 h-4" /> Multi-Cloud Production Deployment Guide
            </h4>

            <div className="space-y-4 text-xs">
              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
                <h5 className="font-semibold text-sky-600 dark:text-sky-400 mb-1.5">🚀 Frontend Distribution: Vercel CDN</h5>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-650 dark:text-slate-300">
                  <li>Install Vercel CLI locally or authorize Vercel GitHub Integration.</li>
                  <li>Configure build settings in the Vercel dashboard:
                    <ul className="list-disc pl-4 mt-1 text-zinc-500 dark:text-slate-400 text-[11px]">
                      <li>Build Command: <code>npm run build</code></li>
                      <li>Output Directory: <code>dist</code></li>
                    </ul>
                  </li>
                  <li>Add <code>vercel.json</code> to redirect all fallback routes to <code>/index.html</code> (preventing 404s on browser reloads).</li>
                </ol>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
                <h5 className="font-semibold text-sky-505 dark:text-sky-400 mb-1.5 font-sans">💾 Backend Cluster: Render Web Services</h5>
                <ol className="list-decimal pl-4 space-y-1 text-zinc-650 dark:text-slate-300 font-sans">
                  <li>Commit the standalone Express server repository to GitHub.</li>
                  <li>Create a new "Web Service" on the Render control plane, choosing the <strong>Node</strong> runtime environments.</li>
                  <li>Establish key environment parameters:
                    <ul className="list-disc pl-4 mt-1 text-zinc-500 dark:text-slate-400 text-[11px]">
                      <li>Build Command: <code>npm install</code></li>
                      <li>Start Command: <code>npm start</code> (or <code>node server.js</code>)</li>
                      <li>Inject Environment Variables: <code>MONGO_URI</code> & <code>CORS_ORIGIN</code></li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/40 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80">
                <h5 className="font-semibold text-zinc-800 dark:text-slate-200 mb-1.5 font-sans">🔍 Portfolio SEO Optimization Recommendations</h5>
                <ul className="list-disc pl-4 space-y-1 text-zinc-650 dark:text-slate-300 font-sans text-xs">
                  <li><strong>Semantic Markups</strong>: Implement structured HTML5 tags (e.g. <code>{"<header>"}</code>, <code>{"<main>"}</code>, <code>{"<section>"}</code>) to improve indexability.</li>
                  <li><strong>Alt attributes Pairings</strong>: Ensure all project banners hold specific labels (e.g. <code>alt="Mati Ur Rehman React Dashboard Showcase"</code>).</li>
                  <li><strong>Lightweight Assets</strong>: Deliver compressed WebP avatar and mockup sheets with rapid visual load-in rates.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* RECRUITER & CLIENT ADVICE */}
        {activeTab === "careerAdvice" && (
          <div className="space-y-6 animate-fadeIn text-xs text-zinc-650 dark:text-slate-300 font-sans">
            <h4 className="text-sm font-sans font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2">
              <TrendingUp className="w-4.5 h-4.5" /> High-Conversions Recruiter & Freelance Optimization Blueprint
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-50 dark:bg-zinc-900/35 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 space-y-2">
                <h5 className="font-bold text-sky-600 dark:text-sky-300 flex items-center gap-1.5">
                  💼 Convincing Recruiters
                </h5>
                <ul className="list-disc pl-4 space-y-1.5 text-zinc-550 dark:text-slate-400">
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">One-Click Resume Action</strong>: Place a high-prominence resume button on the Hero area so talent acquisition scouts find details within 3 seconds.</li>
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">Verifiable Code Quality</strong>: Keep clean repositories on GitHub linked directly to projects. Real recruiters look at commits, read package list structures, and verify structure cleanliness.</li>
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">Include Live Mockups</strong>: Provide genuine deployments (like the ones currently configured in your project) so they can test fluid interactivity on mobile.</li>
                </ul>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/35 p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 space-y-2">
                <h5 className="font-bold text-sky-604 dark:text-sky-300 flex items-center gap-1.5 font-sans">
                  🤝 Attracting Freelance Clients
                </h5>
                <ul className="list-disc pl-4 space-y-1.5 text-zinc-550 dark:text-slate-400 font-sans">
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">Frame Work as Problem-Solving</strong>: Instead of merely listing dry tags (e.g., "Node.js"), explain value outcomes (e.g., "Building fast backend APIs that process thousands of items safely").</li>
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">Maintain an Active Submissions Board</strong>: Showing a message log viewer on the portfolio live dashboard (like we did in the Contact area) signals the web stack operates flawlessly.</li>
                  <li><strong className="text-zinc-800 dark:text-slate-200 font-sans">Offer Fast Load Times</strong>: Ensure the site opens under 1.2 seconds. Slow assets cause potential clients to exit layouts instantly.</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 dark:bg-[#060608] p-5 rounded-2xl border border-zinc-800 dark:border-white/5 text-center text-zinc-300 dark:text-slate-400 font-sans">
              💡 <strong>Senior Advice:</strong> Keep your repositories clean, document your project READMEs with setup instructions, and constantly deploy your small-scale works. Real-world interactive items convert visitors infinitely faster than static representations!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
