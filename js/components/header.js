/**
 * TechAcademy - Shared Responsive Header Component with Course Mega Menu
 * Rich training-brand purple navbar visually connected with the hero and interactive mega menu
 */

function getRootPrefix() {
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

function resolveCourseUrl(href) {
  if (!href) return "#";
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
    return href;
  }
  const root = getRootPrefix();
  const cleanHref = href.replace(/^\//, "");
  if (typeof window !== "undefined" && window.location.protocol === "file:") {
    const suffix = cleanHref.endsWith("/") ? "index.html" : (cleanHref.endsWith(".html") ? "" : "/index.html");
    return root + cleanHref + (cleanHref.endsWith("/") ? "index.html" : (cleanHref.endsWith(".html") ? "" : "/index.html"));
  }
  if (root !== "./" && root !== "/") {
    return root + cleanHref;
  }
  return "/" + cleanHref;
}

function resolveSectionUrl(hash) {
  const root = getRootPrefix();
  if (typeof window !== "undefined") {
    const loc = window.location.pathname || "";
    if (loc.includes("/courses/")) {
      return (window.location.protocol === "file:" ? root + "index.html" : root) + hash;
    }
  }
  return hash;
}

function getCourseCategoriesData() {
  if (typeof TECHACADEMY_COURSE_CATEGORIES !== "undefined") {
    return TECHACADEMY_COURSE_CATEGORIES;
  }
  if (typeof window !== "undefined" && window.TECHACADEMY_COURSE_CATEGORIES) {
    return window.TECHACADEMY_COURSE_CATEGORIES;
  }
  return [];
}

/**
 * Builds HTML for the topics content of a specific category in the desktop mega menu right panel
 */
function buildDesktopCategoryTopicsHtml(category, isActive = false) {
  if (!category) return "";

  let regularCoursesHtml = "";
  let popularCoursesHtml = "";
  let mastersCoursesHtml = "";

  category.groups.forEach((group) => {
    const listItemsHtml = group.courses
      .map((course) => {
        let badgeTag = "";
        if (course.badge === "POPULAR" || group.type === "popular") {
          badgeTag = `<span class="text-[9px] font-bold tracking-wider uppercase text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.5 rounded shrink-0 ml-3">POPULAR</span>`;
        } else if (course.badge === "MASTERS" || group.type === "masters") {
          badgeTag = `<span class="text-[9px] font-bold tracking-wider uppercase text-[#45318A] bg-purple-50 border border-purple-200/80 px-1.5 py-0.5 rounded shrink-0 ml-3">MASTERS</span>`;
        }

        return `
          <li>
            <a 
              href="${resolveCourseUrl(course.href)}" 
              class="course-menu-link group/link flex items-center justify-between text-[14px] text-slate-800 hover:text-[#45318A] hover:bg-purple-50/70 rounded-md px-2.5 py-1.5 transition-all focus:outline-none focus:bg-purple-50 focus:text-[#45318A]"
            >
              <span class="group-hover/link:translate-x-0.5 transition-transform leading-relaxed font-normal">${course.name}</span>
              ${badgeTag}
            </a>
          </li>
        `;
      })
      .join("");

    if (group.type === "popular") {
      popularCoursesHtml = `
        <div class="pt-4 mt-4 border-t border-slate-100">
          <div class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-amber-600 uppercase">
            <svg class="w-3.5 h-3.5 text-amber-500 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span>Popular Courses</span>
          </div>
          <ul class="space-y-0.5">
            ${listItemsHtml}
          </ul>
        </div>
      `;
    } else if (group.type === "masters") {
      mastersCoursesHtml = `
        <div class="pt-4 mt-4 border-t border-slate-100">
          <div class="mb-2 flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-[#45318A] uppercase">
            <svg class="w-3.5 h-3.5 text-[#45318A] shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.99 10.99 0 00-.25 2.449c0 4.142 3.134 7.5 7 7.5s7-3.358 7-7.5c0-.853-.09-1.678-.25-2.449l2.644-1.133a1 1 0 000-1.84l-7-3zM10 4.236L15.356 6.5 10 8.764 4.644 6.5 10 4.236z"></path>
            </svg>
            <span>Masters Program</span>
          </div>
          <ul class="space-y-0.5">
            ${listItemsHtml}
          </ul>
        </div>
      `;
    } else {
      regularCoursesHtml = `
        <ul class="space-y-0.5">
          ${listItemsHtml}
        </ul>
      `;
    }
  });

  return `
    <div id="mega-topics-${category.id}" class="mega-topics-panel ${isActive ? "" : "hidden"} space-y-2" data-category-id="${category.id}">
      ${regularCoursesHtml}
      ${popularCoursesHtml}
      ${mastersCoursesHtml}
    </div>
  `;
}

/**
 * Builds HTML for the full 2-panel desktop mega menu
 */
function buildDesktopMegaMenuHtml() {
  const categories = getCourseCategoriesData();
  const defaultCatId = categories.length > 0 ? categories[0].id : "artificial-intelligence";

  const categoryButtonsHtml = categories
    .map((category) => {
      const isActive = category.id === defaultCatId;
      return `
        <li>
          <button 
            type="button" 
            class="mega-menu-cat-btn w-full text-left px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 flex items-center justify-between group cursor-pointer ${
              isActive
                ? "bg-slate-100 text-[#45318A] font-semibold"
                : "text-slate-700 hover:text-[#45318A] hover:bg-slate-50 font-medium"
            }" 
            data-cat-target="${category.id}"
          >
            <span>${category.title}</span>
            <svg class="w-4 h-4 text-slate-400 group-hover:text-[#45318A] transition-colors ${
              isActive ? "text-[#45318A] opacity-100" : "opacity-0 group-hover:opacity-100"
            }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      `;
    })
    .join("");

  const topicsPanelsHtml = categories
    .map((category) => buildDesktopCategoryTopicsHtml(category, category.id === defaultCatId))
    .join("");

  return `
    <div 
      id="courses-mega-menu" 
      class="hidden absolute top-full left-0 right-0 w-full bg-white border-t border-slate-200 shadow-2xl z-50 transition-all duration-200 text-slate-900" 
      role="region" 
      aria-label="Courses Mega Menu"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-8 max-h-[calc(85vh-4.5rem)] overflow-y-auto custom-scrollbar">
        <div class="flex flex-col md:flex-row items-stretch">
          
          <!-- Left Panel: Categories -->
          <div class="w-full md:w-72 lg:w-80 shrink-0 pr-0 md:pr-6 lg:pr-8 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-slate-200/80">
            <div class="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-3 px-3.5">
              CATEGORIES
            </div>
            <ul class="space-y-1" id="mega-menu-categories-list">
              ${categoryButtonsHtml}
              <li class="pt-2 mt-2 border-t border-slate-100">
                <a 
                  href="${resolveCourseUrl('courses.html')}" 
                  class="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#45318A] hover:bg-purple-50 transition-all duration-150 flex items-center justify-between group cursor-pointer"
                >
                  <span class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
                    </svg>
                    <span>Explore all categories</span>
                  </span>
                  <svg class="w-4 h-4 text-[#45318A] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <!-- Right Panel: Topics -->
          <div class="flex-1 pt-6 md:pt-0 pl-0 md:pl-6 lg:pl-10 min-h-[360px]">
            <div class="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-3 px-2.5">
              TOPICS
            </div>
            <div id="mega-menu-topics-container">
              ${topicsPanelsHtml}
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

/**
 * Builds HTML for the mobile course accordion items
 */
function buildMobileCoursesAccordionHtml() {
  const categories = getCourseCategoriesData();

  const categoriesHtml = categories
    .map((category) => {
      let groupsHtml = "";
      category.groups.forEach((group) => {
        let groupTitle = "";
        if (group.type === "popular") {
          groupTitle = `<div class="text-[10px] font-bold tracking-wider text-amber-400 uppercase pt-2 pb-1 px-2 border-t border-white/10">Popular Courses</div>`;
        } else if (group.type === "masters") {
          groupTitle = `<div class="text-[10px] font-bold tracking-wider text-purple-300 uppercase pt-2 pb-1 px-2 border-t border-white/10">Masters Program</div>`;
        }

        const coursesList = group.courses
          .map((course) => {
            return `
              <a 
                href="${resolveCourseUrl(course.href)}" 
                class="mobile-course-link block py-2 px-3 text-xs text-slate-200 hover:text-amber-400 hover:bg-white/10 rounded transition-colors leading-snug"
              >
                ${course.name}
              </a>
            `;
          })
          .join("");

        groupsHtml += `
          ${groupTitle}
          <div class="space-y-0.5">
            ${coursesList}
          </div>
        `;
      });

      return `
        <div class="mobile-category-item border border-white/10 rounded-lg overflow-hidden bg-white/5">
          <button 
            type="button" 
            class="mobile-cat-toggle w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:text-amber-400 hover:bg-white/5 transition-colors cursor-pointer" 
            aria-expanded="false"
          >
            <span>${category.title}</span>
            <svg class="mobile-cat-chevron w-3.5 h-3.5 text-white/70 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          <div class="mobile-cat-content hidden px-1 pb-2 pt-0.5 space-y-1 bg-black/20">
            ${groupsHtml}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    ${categoriesHtml}
    <div class="pt-2">
      <a 
        href="${resolveCourseUrl('courses.html')}" 
        class="block py-2.5 px-3.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white bg-white/10 rounded-lg text-center transition-colors"
      >
        Explore all categories &rarr;
      </a>
    </div>
  `;
}

function renderHeader(containerId = "site-header") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Make shared header sticky globally
  container.classList.add("sticky", "top-0", "z-50");
  container.style.position = "sticky";
  container.style.top = "0";
  container.style.zIndex = "50";

  const rootPrefix = getRootPrefix();
  const homeUrl = (typeof window !== "undefined" && window.location.protocol === "file:") ? (rootPrefix + "index.html") : (rootPrefix === "./" ? "./" : rootPrefix);
  const logoSrc = rootPrefix + "favicon.svg";

  const desktopMegaMenuHtml = buildDesktopMegaMenuHtml();
  const mobileAccordionHtml = buildMobileCoursesAccordionHtml();

  container.innerHTML = `
    <nav class="bg-[#3E267D] border-b border-white/15 shadow-sm relative transition-shadow duration-200" id="main-nav" aria-label="Main Navigation">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 sm:h-18">
          
          <!-- TechAcademy Professional Wordmark & Logo Badge -->
          <div class="flex items-center">
            <a href="${homeUrl}" class="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg py-1 group" aria-label="TechAcademy Home">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md shadow-purple-950/40 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <img src="${logoSrc}" alt="TechAcademy Logo" class="w-full h-full object-contain" width="40" height="40" />
              </div>
              <span class="font-extrabold text-2xl tracking-tight text-white group-hover:text-slate-100 transition-colors">
                Tech<span class="text-amber-400">Academy</span>
              </span>
            </a>
          </div>

          <!-- Desktop Navigation Links -->
          <div class="hidden md:flex items-center gap-6 lg:gap-8">
            
            <!-- Courses Mega Menu Button -->
            <button 
              type="button" 
              id="courses-menu-btn" 
              class="courses-nav-btn text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1 inline-flex items-center gap-1.5 cursor-pointer"
              aria-expanded="false" 
              aria-controls="courses-mega-menu"
              aria-haspopup="true"
            >
              <span>Courses</span>
              <svg id="courses-chevron-icon" class="w-4 h-4 text-white/80 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
              <span class="courses-indicator absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </button>

            <a href="${resolveCourseUrl('online-training.html')}" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Online Training
              <span class="courses-indicator absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="${resolveCourseUrl('offers.html')}" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Offers
              <span class="courses-indicator absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="${resolveCourseUrl('job-placements.html')}" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Job Placements
              <span class="courses-indicator absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="${resolveCourseUrl('contact-us.html')}" class="text-sm font-medium text-white/95 hover:text-white transition-colors py-2 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md px-1">
              Contact Us
              <span class="courses-indicator absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
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

      <!-- Desktop Mega Menu Dropdown -->
      ${desktopMegaMenuHtml}

      <!-- Mobile Dropdown Drawer -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-white/15 bg-[#341F69] shadow-2xl transition-all" aria-label="Mobile Navigation">
        <div class="max-w-7xl mx-auto px-4 py-5 space-y-2">
          
          <!-- Mobile Courses Accordion Item -->
          <div class="border-b border-white/10 pb-2">
            <button 
              type="button" 
              id="mobile-courses-btn" 
              class="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-white hover:text-amber-400 hover:bg-white/10 transition-colors cursor-pointer"
              aria-expanded="false"
            >
              <span class="flex items-center gap-2.5">
                <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Courses
              </span>
              <svg id="mobile-courses-chevron" class="w-4 h-4 text-white/80 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div id="mobile-courses-accordion" class="hidden pl-2 pr-1 pt-2 pb-2 space-y-2">
              ${mobileAccordionHtml}
            </div>
          </div>

          <a href="${resolveCourseUrl('online-training.html')}" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Online Training
          </a>
          <a href="${resolveCourseUrl('offers.html')}" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Offers
          </a>
          <a href="${resolveCourseUrl('job-placements.html')}" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Job Placements
          </a>
          <a href="${resolveCourseUrl('contact-us.html')}" class="mobile-nav-link block px-4 py-2.5 rounded-lg text-sm font-medium text-white hover:text-amber-400 hover:bg-white/10 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  `;

  // Attach interactive behavior
  setupCoursesMegaMenu();
  setupMobileDrawer();
  setupThemeSwitcher();

  // Attach sticky scroll state listener (subtle shadow & border)
  if (!window.__techacademy_scroll_listener_attached) {
    window.__techacademy_scroll_listener_attached = true;
    const updateNavScroll = () => {
      const navEl = document.getElementById("main-nav");
      if (navEl) {
        if (window.scrollY > 8) {
          navEl.classList.add("shadow-lg", "border-purple-950/50");
        } else {
          navEl.classList.remove("shadow-lg", "border-purple-950/50");
        }
      }
    };
    window.addEventListener("scroll", updateNavScroll, { passive: true });
    updateNavScroll();
  }
}

/**
 * Controller for Desktop Mega Menu & Mobile Accordions
 */
function setupCoursesMegaMenu() {
  const coursesBtn = document.getElementById("courses-menu-btn");
  const coursesMegaMenu = document.getElementById("courses-mega-menu");
  const coursesChevron = document.getElementById("courses-chevron-icon");
  if (!coursesBtn || !coursesMegaMenu) return;

  const coursesIndicator = coursesBtn.querySelector(".courses-indicator");

  function openCoursesMegaMenu() {
    coursesMegaMenu.classList.remove("hidden");
    coursesBtn.setAttribute("aria-expanded", "true");
    if (coursesChevron) coursesChevron.classList.add("rotate-180");
    if (coursesIndicator) coursesIndicator.classList.add("!w-full");
  }

  function closeCoursesMegaMenu() {
    coursesMegaMenu.classList.add("hidden");
    coursesBtn.setAttribute("aria-expanded", "false");
    if (coursesChevron) coursesChevron.classList.remove("rotate-180");
    if (coursesIndicator) coursesIndicator.classList.remove("!w-full");
  }

  function toggleCoursesMegaMenu(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const isClosed = coursesMegaMenu.classList.contains("hidden");
    if (isClosed) {
      openCoursesMegaMenu();
    } else {
      closeCoursesMegaMenu();
    }
  }

  // Click on "Courses" desktop button
  coursesBtn.addEventListener("click", toggleCoursesMegaMenu);

  // Click anywhere outside closes mega menu
  document.addEventListener("click", (e) => {
    if (!coursesBtn.contains(e.target) && !coursesMegaMenu.contains(e.target)) {
      closeCoursesMegaMenu();
    }
  });

  // Escape key closes mega menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !coursesMegaMenu.classList.contains("hidden")) {
      closeCoursesMegaMenu();
      coursesBtn.focus();
    }
  });

  // Desktop Category Tab Switching (Click & Hover)
  const catBtns = coursesMegaMenu.querySelectorAll(".mega-menu-cat-btn");
  const topicPanels = coursesMegaMenu.querySelectorAll(".mega-topics-panel");

  function selectCategory(targetCatId) {
    catBtns.forEach((btn) => {
      const isTarget = btn.getAttribute("data-cat-target") === targetCatId;
      const arrowIcon = btn.querySelector("svg");
      if (isTarget) {
        btn.classList.add("bg-slate-100", "text-[#45318A]", "font-semibold");
        btn.classList.remove("text-slate-700", "hover:bg-slate-50", "font-medium");
        if (arrowIcon) {
          arrowIcon.classList.add("text-[#45318A]", "opacity-100");
          arrowIcon.classList.remove("opacity-0");
        }
      } else {
        btn.classList.remove("bg-slate-100", "text-[#45318A]", "font-semibold");
        btn.classList.add("text-slate-700", "hover:bg-slate-50", "font-medium");
        if (arrowIcon) {
          arrowIcon.classList.remove("text-[#45318A]", "opacity-100");
          arrowIcon.classList.add("opacity-0");
        }
      }
    });

    topicPanels.forEach((panel) => {
      if (panel.getAttribute("data-category-id") === targetCatId) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  }

  catBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const targetCatId = btn.getAttribute("data-cat-target");
      if (targetCatId) selectCategory(targetCatId);
    });

    btn.addEventListener("mouseenter", () => {
      const targetCatId = btn.getAttribute("data-cat-target");
      if (targetCatId) selectCategory(targetCatId);
    });
  });

  // Selecting any course closes mega menu
  coursesMegaMenu.querySelectorAll(".course-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeCoursesMegaMenu();
    });
  });

  // Mobile Courses Accordion Toggle
  const mobileCoursesBtn = document.getElementById("mobile-courses-btn");
  const mobileCoursesAccordion = document.getElementById("mobile-courses-accordion");
  const mobileCoursesChevron = document.getElementById("mobile-courses-chevron");

  if (mobileCoursesBtn && mobileCoursesAccordion) {
    mobileCoursesBtn.addEventListener("click", () => {
      const isClosed = mobileCoursesAccordion.classList.contains("hidden");
      if (isClosed) {
        mobileCoursesAccordion.classList.remove("hidden");
        mobileCoursesBtn.setAttribute("aria-expanded", "true");
        if (mobileCoursesChevron) mobileCoursesChevron.classList.add("rotate-180");
      } else {
        mobileCoursesAccordion.classList.add("hidden");
        mobileCoursesBtn.setAttribute("aria-expanded", "false");
        if (mobileCoursesChevron) mobileCoursesChevron.classList.remove("rotate-180");
      }
    });
  }

  // Mobile Category Accordions (independently expandable)
  document.querySelectorAll(".mobile-cat-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".mobile-category-item");
      if (!parent) return;
      const content = parent.querySelector(".mobile-cat-content");
      const chevron = parent.querySelector(".mobile-cat-chevron");
      if (!content) return;

      const isClosed = content.classList.contains("hidden");
      if (isClosed) {
        content.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
        if (chevron) chevron.classList.add("rotate-180");
      } else {
        content.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        if (chevron) chevron.classList.remove("rotate-180");
      }
    });
  });
}

/**
 * Controller for Mobile Navigation Drawer
 */
function setupMobileDrawer() {
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
        if (hamburgerIcon) hamburgerIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("hidden");
        menuBtn.setAttribute("aria-expanded", "true");
        if (hamburgerIcon) hamburgerIcon.classList.add("hidden");
        if (closeIcon) closeIcon.classList.remove("hidden");
      }
    });

    // Close mobile menu on regular link click
    document.querySelectorAll(".mobile-nav-link, .mobile-course-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        if (hamburgerIcon) hamburgerIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
      });
    });
  }
}

if (typeof window !== "undefined") {
  window.renderHeader = renderHeader;
}



/**
 * Global Floating Theme Switcher Component
 * Injects floating toggle button and accessible popover for instant theme switching
 */
function setupThemeSwitcher() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('techacademy-theme-switcher')) return;

  const currentTheme = (document.documentElement.dataset && document.documentElement.dataset.theme) || 'techacademy';

  const switcherContainer = document.createElement('div');
  switcherContainer.id = 'techacademy-theme-switcher';
  switcherContainer.setAttribute('aria-label', 'Website Theme Switcher');

  switcherContainer.innerHTML = `
    <!-- Floating Trigger Button -->
    <button 
      type="button" 
      id="theme-switcher-toggle"
      class="theme-switcher-toggle-btn group relative"
      aria-label="Change website theme"
      aria-expanded="false"
      aria-controls="theme-popover-menu"
      title="Switch theme"
    >
      <!-- Paint Palette / Theme Icon -->
      <svg class="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
      </svg>
      
      <!-- Tooltip on hover -->
      <span class="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md border border-white/10 hidden sm:block">
        Switch theme
      </span>
    </button>

    <!-- Compact Popover Panel -->
    <div 
      id="theme-popover-menu" 
      class="theme-popover-panel hidden"
      role="region"
      aria-label="Theme Selection"
    >
      <div class="px-2 py-1.5 mb-1.5 border-b border-white/10 flex items-center justify-between">
        <span class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Select Theme</span>
        <span class="text-[9px] text-slate-500 font-mono">2 THEMES</span>
      </div>

      <div class="space-y-1">
        <!-- Option 1: TechAcademy -->
        <button 
          type="button"
          class="theme-option-btn ${currentTheme === 'techacademy' ? 'active' : ''}"
          data-set-theme="techacademy"
        >
          <div class="flex items-center gap-2.5">
            <div class="flex items-center -space-x-1">
              <span class="theme-color-dot" style="background-color: #45318A;"></span>
              <span class="theme-color-dot" style="background-color: #F59E0B;"></span>
            </div>
            <div>
              <div class="font-bold text-xs text-white">TechAcademy</div>
              <div class="text-[10px] text-slate-400 font-normal">Classic Purple & Gold</div>
            </div>
          </div>
          <svg class="w-4 h-4 text-amber-400 ${currentTheme === 'techacademy' ? 'opacity-100' : 'opacity-0'} transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>

        <!-- Option 2: Aivora X -->
        <button 
          type="button"
          class="theme-option-btn ${currentTheme === 'aivora' ? 'active' : ''}"
          data-set-theme="aivora"
        >
          <div class="flex items-center gap-2.5">
            <div class="flex items-center -space-x-1">
              <span class="theme-color-dot" style="background-color: #0C234C;"></span>
              <span class="theme-color-dot" style="background-color: #47C1E8;"></span>
            </div>
            <div>
              <div class="font-bold text-xs text-white">Aivora X</div>
              <div class="text-[10px] text-slate-400 font-normal">Royal Blue & Cyan</div>
            </div>
          </div>
          <svg class="w-4 h-4 text-[#47c1e8] ${currentTheme === 'aivora' ? 'opacity-100' : 'opacity-0'} transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(switcherContainer);

  // Behavior
  const toggleBtn = switcherContainer.querySelector('#theme-switcher-toggle');
  const popover = switcherContainer.querySelector('#theme-popover-menu');
  const optionBtns = switcherContainer.querySelectorAll('.theme-option-btn');

  if (!toggleBtn || !popover) return;

  function openPopover() {
    popover.classList.remove('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closePopover() {
    popover.classList.add('hidden');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isClosed = popover.classList.contains('hidden');
    if (isClosed) openPopover();
    else closePopover();
  });

  document.addEventListener('click', (e) => {
    if (!switcherContainer.contains(e.target)) {
      closePopover();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popover.classList.contains('hidden')) {
      closePopover();
      toggleBtn.focus();
    }
  });

  function applyTheme(themeName) {
    document.documentElement.dataset.theme = themeName;
    try {
      localStorage.setItem('techacademy-theme', themeName);
    } catch (e) {}

    // Update checkmark & active state
    optionBtns.forEach((btn) => {
      const isTarget = btn.getAttribute('data-set-theme') === themeName;
      const checkIcon = btn.querySelector('svg');
      if (isTarget) {
        btn.classList.add('active');
        if (checkIcon) {
          checkIcon.classList.remove('opacity-0');
          checkIcon.classList.add('opacity-100');
        }
      } else {
        btn.classList.remove('active');
        if (checkIcon) {
          checkIcon.classList.add('opacity-0');
          checkIcon.classList.remove('opacity-100');
        }
      }
    });

    window.dispatchEvent(new CustomEvent('techacademy-theme-changed', { detail: { theme: themeName } }));
  }

  optionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const chosenTheme = btn.getAttribute('data-set-theme');
      if (chosenTheme) {
        applyTheme(chosenTheme);
        closePopover();
      }
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupThemeSwitcher);
  } else {
    setupThemeSwitcher();
  }
}
