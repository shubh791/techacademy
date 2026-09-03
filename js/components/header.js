/**
 * TechAcademy - Shared Responsive Header Component
 * Rich training-brand purple navbar visually connected with the hero
 */

function renderHeader(containerId = "site-header") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <nav class="bg-[#3E267D] border-b border-white/15 shadow-sm" id="main-nav" aria-label="Main Navigation">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-18">
          
          <!-- TechAcademy Professional Wordmark & Logo Badge -->
          <div class="flex items-center">
            <a href="/" class="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 group" aria-label="TechAcademy Home">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md shadow-purple-950/40 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <img src="./favicon.svg" alt="TechAcademy Logo" class="w-full h-full object-contain" width="40" height="40" />
              </div>
              <span class="font-extrabold text-2xl tracking-tight text-white group-hover:text-slate-100 transition-colors">
                Tech<span class="text-amber-400">Academy</span>
              </span>
            </a>
          </div>

          <!-- Desktop Navigation Links (Links Only: Courses, About, Offers, Contact Us) -->
          <div class="hidden md:flex items-center gap-8">
            <a href="#courses" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Courses
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#about" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#offers" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Offers
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#contact" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Contact Us
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle Button -->
          <div class="flex items-center md:hidden">
            <button 
              id="mobile-menu-btn" 
              type="button"
              aria-label="Toggle navigation menu" 
              aria-expanded="false"
              class="p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <svg id="hamburger-icon" class="w-6 h-6 block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-white/15 bg-[#341F69] shadow-2xl transition-all" aria-label="Mobile Navigation">
        <div class="max-w-7xl mx-auto px-4 py-5 space-y-1.5">
          <a href="#courses" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Courses
          </a>
          <a href="#about" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            About
          </a>
          <a href="#offers" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Offers
          </a>
          <a href="#contact" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  `;

  // Attach mobile toggle event listeners
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      }
    });

    // Close mobile menu on link click
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      });
    });
  }
}

if (typeof window !== "undefined") {
  window.renderHeader = renderHeader;
}
