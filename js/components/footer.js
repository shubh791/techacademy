function getFooterRootPrefix() {
  if (typeof window !== "undefined" && window.TECHACADEMY_ROOT_PATH !== undefined) {
    return window.TECHACADEMY_ROOT_PATH;
  }
  if (typeof window !== "undefined") {
    const loc = window.location.pathname || "";
    // If inside a specific course subdirectory e.g. /courses/machine-learning/
    const courseSubMatch = loc.match(/\/courses\/([^\/]+)/);
    if (courseSubMatch && courseSubMatch[1] && !courseSubMatch[1].endsWith(".html") && courseSubMatch[1] !== "index.html" && courseSubMatch[1] !== "courses") {
      return "../../";
    }
    if (loc.includes("/courses/") || loc.includes("/offers/") || loc.includes("/online-training/") || loc.includes("/job-placements/") || loc.includes("/contact/")) {
      return "../";
    }
  }
  return "./";
}

function resolveFooterSectionUrl(hash) {
  const root = getFooterRootPrefix();
  if (typeof window !== "undefined") {
    const loc = window.location.pathname || "";
    if (loc.includes("/courses/")) {
      return (window.location.protocol === "file:" ? root + "index.html" : root) + hash;
    }
  }
  return hash;
}

function renderFooter(containerId = "site-footer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const rootPrefix = getFooterRootPrefix();
  const homeUrl = (typeof window !== "undefined" && window.location.protocol === "file:") ? (rootPrefix + "index.html") : (rootPrefix === "./" ? "./" : rootPrefix);
  const logoSrc = rootPrefix + "favicon.svg";

  container.innerHTML = `
    <footer class="bg-[#071329] text-slate-300 border-t border-white/10" aria-label="Site Footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        <!-- Main Footer Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          
          <!-- LEFT SIDE: Brand, Tagline, Contact & Social Links (~50%) -->
          <div class="lg:col-span-6 space-y-6">
            
            <!-- TechAcademy Wordmark & Logo Badge -->
            <a href="${homeUrl}" class="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 w-fit group" aria-label="TechAcademy Home">
              <div class="w-11 h-11 rounded-xl overflow-hidden shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <img src="${logoSrc}" alt="TechAcademy Logo" class="w-full h-full object-contain" width="44" height="44" />
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-2xl tracking-tight text-white group-hover:text-slate-100 transition-colors">
                  Tech<span class="text-amber-400">Academy</span>
                </span>
                <span class="text-[10px] tracking-widest uppercase font-medium text-slate-400 -mt-1">
                  Global Training Provider
                </span>
              </div>
            </a>

            <!-- Tagline -->
            <p class="text-sm text-slate-300 font-normal leading-relaxed max-w-md">
              Transforming organisations and individuals worldwide through accredited professional certification and bespoke corporate training.
            </p>

            <!-- Direct Contact Info -->
            <div class="space-y-2 pt-1 text-sm">
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:01344203999" class="font-semibold text-white hover:text-amber-400 transition-colors">
                  01344203999 <span class="font-normal text-slate-400 text-xs">(Available 24/7)</span>
                </a>
              </div>
              <div class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@techacademy.com" class="text-slate-300 hover:text-white transition-colors">
                  info@techacademy.com
                </a>
              </div>
            </div>

            <!-- Social Profiles (Monochrome White Treatment) -->
            <div class="flex items-center gap-3 pt-2">
              <a href="https://www.linkedin.com/company/the-knowledge-academy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:scale-105 transition-all">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z"/></svg>
              </a>
              <a href="https://x.com/TKA_Training" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:scale-105 transition-all">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://en-gb.facebook.com/The.Knowledge.Academy.Ltd/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:scale-105 transition-all">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a href="https://www.instagram.com/the_knowledge_academy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:scale-105 transition-all">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/@TheKnowledgeAcademy." target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:scale-105 transition-all">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

          </div>

          <!-- RIGHT SIDE: 3 Compact Navigation Columns (~50%) -->
          <div class="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            <!-- Column 1: Courses & Delivery -->
            <div class="space-y-4">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">
                Courses
              </h4>
              <ul class="space-y-2.5 text-sm">
                <li>
                  <a href="${resolveFooterSectionUrl('#courses')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Browse Courses
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#expert-training')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Online Instructor-led
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#expert-training')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Online Self-paced
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#expert-training')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Classroom & Onsite
                  </a>
                </li>
              </ul>
            </div>

            <!-- Column 2: Company -->
            <div class="space-y-4">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">
                Company
              </h4>
              <ul class="space-y-2.5 text-sm">
                <li>
                  <a href="${resolveFooterSectionUrl('#about')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#bespoke-training')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Bespoke Training
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#offers')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Offers & Discounts
                  </a>
                </li>
                <li>
                  <a href="${resolveFooterSectionUrl('#contact')}" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <!-- Column 3: Resources & Insights -->
            <div class="space-y-4 col-span-2 sm:col-span-1">
              <h4 class="text-xs font-bold text-white uppercase tracking-wider">
                Discover
              </h4>
              <ul class="space-y-2.5 text-sm">
                <li>
                  <a href="#knowledge-centre" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Knowledge Centre
                  </a>
                </li>
                <li>
                  <a href="#global-impact" class="text-slate-300 hover:text-amber-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Global Locations
                  </a>
                </li>
                <li>
                  <button type="button" onclick="window.openEnquireModal('Footer Consultation')" class="text-slate-300 hover:text-amber-400 transition-colors inline-block text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded">
                    Talk to an Advisor
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        <!-- Bottom Copyright Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 TechAcademy Ltd. All rights reserved.</p>
          <div class="flex items-center gap-6">
            <a href="#key-features" class="hover:text-slate-200 transition-colors">Terms & Conditions</a>
            <a href="#key-features" class="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#key-features" class="hover:text-slate-200 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

if (typeof window !== "undefined") {
  window.renderFooter = renderFooter;
}
