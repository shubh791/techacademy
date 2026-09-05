/**
 * TechAcademy - All Courses Page Component
 * Premium 2-column catalogue layout with sticky left category sidebar,
 * top real-time search, unique course-specific PNG visuals from assets/,
 * and enquiry modal integration.
 */

(function () {
  function getRootPrefix() {
    if (typeof window !== "undefined" && window.TECHACADEMY_ROOT_PATH !== undefined) {
      return window.TECHACADEMY_ROOT_PATH;
    }
    if (typeof window !== "undefined") {
      const loc = window.location.pathname || "";
      if (loc.includes("/courses/") || loc.includes("/offers/") || loc.includes("/online-training/") || loc.includes("/job-placements/") || loc.includes("/contact/")) {
        return "../";
      }
    }
    return "./";
  }

  // Resolve each course directly to its own local PNG folder.
  function getCourseIconSrc(course) {
    const root = getRootPrefix();
    const cid = (course.id || course.href || "")
      .toLowerCase()
      .replace(/^\/courses\/|\/$/g, "");

    return `${root}assets/${cid}/course-icon.png`;
  }

  // App State
  let currentCategory = "all";
  let searchQuery = "";

  function getCategories() {
    if (typeof TECHACADEMY_COURSE_CATEGORIES !== "undefined") {
      return TECHACADEMY_COURSE_CATEGORIES;
    }
    if (typeof window !== "undefined" && window.TECHACADEMY_COURSE_CATEGORIES) {
      return window.TECHACADEMY_COURSE_CATEGORIES;
    }
    return [];
  }

  function getAllCourses() {
    if (typeof TECHACADEMY_COURSES !== "undefined") {
      return TECHACADEMY_COURSES;
    }
    if (typeof window !== "undefined" && window.TECHACADEMY_COURSES) {
      return window.TECHACADEMY_COURSES;
    }
    return [];
  }

  function resolveUrl(href) {
    if (typeof resolveCourseUrl === "function") {
      return resolveCourseUrl(href);
    }
    return href;
  }

  /**
   * Renders the desktop left category sidebar navigation
   */
  function renderDesktopSidebar() {
    const sidebarContainer = document.getElementById("desktop-category-sidebar");
    if (!sidebarContainer) return;

    const categories = getCategories();
    const allCourses = getAllCourses();

    const isAllActive = currentCategory === "all";

    let html = `
      <button 
        type="button" 
        data-cat-filter="all" 
        class="cat-nav-btn w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
          isAllActive
            ? "bg-[#45318A] text-white shadow-md shadow-purple-950/20"
            : "text-slate-700 hover:text-[#45318A] hover:bg-purple-50/70"
        }"
      >
        <span class="truncate">All Courses</span>
        <div class="flex items-center gap-1.5 shrink-0">
          <span class="text-xs px-2 py-0.5 rounded-full ${
            isAllActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-purple-100 group-hover:text-[#45318A]"
          }">${allCourses.length}</span>
          <svg class="w-4 h-4 transition-transform duration-150 ${
            isAllActive ? "text-amber-400 translate-x-0.5" : "text-slate-400 group-hover:text-[#45318A] group-hover:translate-x-0.5"
          }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    `;

    categories.forEach((cat) => {
      let count = 0;
      cat.groups.forEach((g) => (count += (g.courses || []).length));
      const isActive = currentCategory === cat.id;

      html += `
        <button 
          type="button" 
          data-cat-filter="${cat.id}" 
          class="cat-nav-btn w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-between group cursor-pointer ${
            isActive
              ? "bg-[#45318A] text-white shadow-md shadow-purple-950/20"
              : "text-slate-700 hover:text-[#45318A] hover:bg-purple-50/70"
          }"
        >
          <span class="truncate">${cat.title}</span>
          <div class="flex items-center gap-1.5 shrink-0">
            <span class="text-xs px-2 py-0.5 rounded-full ${
              isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-purple-100 group-hover:text-[#45318A]"
            }">${count}</span>
            <svg class="w-4 h-4 transition-transform duration-150 ${
              isActive ? "text-amber-400 translate-x-0.5" : "text-slate-400 group-hover:text-[#45318A] group-hover:translate-x-0.5"
            }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      `;
    });

    sidebarContainer.innerHTML = html;

    sidebarContainer.querySelectorAll(".cat-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.getAttribute("data-cat-filter");
        currentCategory = catId;
        renderDesktopSidebar();
        renderMobileChips();
        renderCatalogue();
      });
    });
  }

  /**
   * Renders horizontal mobile category chips for small screens
   */
  function renderMobileChips() {
    const chipsContainer = document.getElementById("mobile-category-chips");
    if (!chipsContainer) return;

    const categories = getCategories();
    const allCourses = getAllCourses();

    let html = `
      <button 
        type="button" 
        data-mobile-cat="all" 
        class="mobile-chip-btn px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
          currentCategory === "all"
            ? "bg-[#45318A] text-white shadow-xs"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-purple-50"
        }"
      >
        All (${allCourses.length})
      </button>
    `;

    categories.forEach((cat) => {
      let count = 0;
      cat.groups.forEach((g) => (count += (g.courses || []).length));
      const isActive = currentCategory === cat.id;

      html += `
        <button 
          type="button" 
          data-mobile-cat="${cat.id}" 
          class="mobile-chip-btn px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
            isActive
              ? "bg-[#45318A] text-white shadow-xs"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-purple-50"
          }"
        >
          ${cat.title} (${count})
        </button>
      `;
    });

    chipsContainer.innerHTML = html;

    chipsContainer.querySelectorAll(".mobile-chip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.getAttribute("data-mobile-cat");
        currentCategory = catId;
        renderDesktopSidebar();
        renderMobileChips();
        renderCatalogue();
      });
    });
  }

  /**
   * Main Course Cards Catalogue Grid Renderer
   */
  function renderCatalogue() {
    const catalogueContainer = document.getElementById("courses-catalogue-container");
    const countDisplay = document.getElementById("courses-count-display");
    if (!catalogueContainer) return;

    const categories = getCategories();
    const query = searchQuery.trim().toLowerCase();

    let filteredCourses = [];

    categories.forEach((cat) => {
      if (currentCategory !== "all" && cat.id !== currentCategory) {
        return;
      }

      cat.groups.forEach((group) => {
        group.courses.forEach((course) => {
          const nameMatch = (course.name || "").toLowerCase().includes(query);
          const catMatch = (cat.title || "").toLowerCase().includes(query);
          const topicMatch = (group.title || "").toLowerCase().includes(query);

          if (!query || nameMatch || catMatch || topicMatch) {
            filteredCourses.push({
              course,
              cat,
              group
            });
          }
        });
      });
    });

    // Update Status Count Display
    if (countDisplay) {
      if (query) {
        countDisplay.innerHTML = `Showing <span class="font-bold text-[#45318A]">${filteredCourses.length}</span> courses matching &ldquo;${searchQuery}&rdquo;`;
      } else if (currentCategory === "all") {
        countDisplay.innerHTML = `Showing all <span class="font-bold text-[#45318A]">${filteredCourses.length}</span> courses across <span class="font-bold text-slate-800">${categories.length}</span> categories`;
      } else {
        const activeCat = categories.find((c) => c.id === currentCategory);
        countDisplay.innerHTML = `Showing <span class="font-bold text-[#45318A]">${filteredCourses.length}</span> courses in <span class="font-bold text-slate-800">${activeCat ? activeCat.title : "Selected Category"}</span>`;
      }
    }

    // Zero State
    if (filteredCourses.length === 0) {
      catalogueContainer.innerHTML = `
        <div class="p-10 sm:p-12 text-center bg-white border border-slate-200 rounded-2xl shadow-xs max-w-lg mx-auto my-8">
          <div class="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-200/60 shadow-inner">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-1.5">No courses found matching "${searchQuery}"</h3>
          <p class="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
            Try adjusting your keywords, browsing all categories, or speak to our training advisors for customized syllabi.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button 
              type="button" 
              id="courses-reset-filter-btn" 
              class="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              Reset Filters
            </button>
            <button 
              type="button" 
              onclick="window.openCoursesEnquiryModal('General Course Enquiry')"
              class="px-4 py-2.5 rounded-xl bg-[#45318A] hover:bg-[#341F69] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              Enquire Directly
            </button>
          </div>
        </div>
      `;

      const resetBtn = document.getElementById("courses-reset-filter-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          searchQuery = "";
          currentCategory = "all";
          const searchInput = document.getElementById("all-courses-search");
          if (searchInput) searchInput.value = "";
          const clearBtn = document.getElementById("courses-search-clear");
          if (clearBtn) clearBtn.classList.add("hidden");
          renderDesktopSidebar();
          renderMobileChips();
          renderCatalogue();
        });
      }
      return;
    }

    // Render 3-Column Responsive Course Card Grid
    const cardsHtml = filteredCourses
      .map(({ course, cat, group }) => {
        const targetUrl = resolveUrl(course.href);
        const iconSrc = getCourseIconSrc(course);

        // Genuine badges only (POPULAR or MASTERS)
        let badgeHtml = "";
        if (course.badge === "POPULAR" || group.type === "popular") {
          badgeHtml = `
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 uppercase tracking-wide shrink-0 shadow-2xs">
              <svg class="w-3 h-3 fill-amber-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              Popular
            </span>
          `;
        } else if (course.badge === "MASTERS" || group.type === "masters") {
          badgeHtml = `
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-[#45318A] border border-purple-200 uppercase tracking-wide shrink-0 shadow-2xs">
              <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.99 10.99 0 00-.25 2.449c0 4.142 3.134 7.5 7 7.5s7-3.358 7-7.5c0-.853-.09-1.678-.25-2.449l2.644-1.133a1 1 0 000-1.84l-7-3zM10 4.236L15.356 6.5 10 8.764 4.644 6.5 10 4.236z"/></svg>
              Masters
            </span>
          `;
        }

        return `
          <div class="course-card bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#45318A]/40 transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:-translate-y-1">
            
            <!-- TOP HEADER: TechAcademy Deep Purple Brand -->
            <div class="bg-gradient-to-br from-[#2D1B5E] via-[#3E267D] to-[#482F8E] p-5 text-white relative flex items-start gap-4 min-h-[120px]">
              
              <!-- Standardized Unique PNG Icon Container -->
              <a href="${targetUrl}" class="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400" aria-label="${course.name} icon">
                <img 
                  src="${iconSrc}" 
                  alt="${course.name} course icon" 
                  class="w-full h-full object-contain"
                  width="56"
                  height="56"
                  loading="lazy"
                />
              </a>

              <!-- Top Text Details -->
              <div class="flex-1 min-w-0 pr-1">
                <div class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400/95 mb-1 truncate">
                  ${cat.title}
                </div>
                <h3 class="font-bold text-white text-sm sm:text-[15px] leading-snug line-clamp-3 group-hover:text-amber-300 transition-colors">
                  <a href="${targetUrl}" class="focus:outline-none focus:underline">
                    ${course.name}
                  </a>
                </h3>
              </div>

            </div>

            <!-- BOTTOM BODY: Minimal Clean Meta & Direct Action -->
            <div class="p-5 flex flex-col justify-between flex-1 bg-white">
              
              <!-- Badges / Metadata row -->
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="text-xs text-slate-500 font-medium">
                  Professional Certification
                </span>
                ${badgeHtml}
              </div>

              <!-- Action Link -->
              <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">
                  ${cat.title}
                </span>

                <a 
                  href="${targetUrl}" 
                  class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#45318A] group-hover:text-amber-600 transition-colors cursor-pointer"
                  aria-label="View ${course.name} course details"
                >
                  <span>View Course</span>
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

            </div>

          </div>
        `;
      })
      .join("");

    catalogueContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
        ${cardsHtml}
      </div>
    `;
  }

  /**
   * Search Input controller with real-time reactive filtering
   */
  function setupSearch() {
    const searchInput = document.getElementById("all-courses-search");
    const clearBtn = document.getElementById("courses-search-clear");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.remove("hidden");
        } else {
          clearBtn.classList.add("hidden");
        }
      }
      renderCatalogue();
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearBtn.classList.add("hidden");
        searchInput.focus();
        renderCatalogue();
      });
    }
  }

  /**
   * Reusable Course Enquiry Modal Integration
   */
  function setupModal() {
    const modal = document.getElementById("courses-enquiry-modal");
    const closeBtn = document.getElementById("courses-modal-close-btn");
    const backdrop = document.getElementById("courses-modal-backdrop");
    const form = document.getElementById("courses-modal-enquiry-form");
    const courseInterestSelect = document.getElementById("courses-enquiry-course-select");
    const successMsg = document.getElementById("courses-modal-success-msg");

    // Populate course select dropdown
    if (courseInterestSelect) {
      const allCourses = getAllCourses();
      let optionsHtml = `<option value="General Course Enquiry">General Course Advisory / Multiple Courses</option>`;
      allCourses.forEach((c) => {
        optionsHtml += `<option value="${c.name}">${c.name} (${c.category})</option>`;
      });
      courseInterestSelect.innerHTML = optionsHtml;
    }

    window.openCoursesEnquiryModal = function (preferredCourseName) {
      if (!modal) return;
      modal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");

      if (courseInterestSelect && preferredCourseName) {
        const matchingOpt = Array.from(courseInterestSelect.options).find(
          (opt) => opt.value.toLowerCase() === preferredCourseName.toLowerCase()
        );
        if (matchingOpt) {
          courseInterestSelect.value = matchingOpt.value;
        } else {
          courseInterestSelect.value = "General Course Enquiry";
        }
      }

      if (form) form.reset();
      if (successMsg) successMsg.classList.add("hidden");
    };

    window.closeCoursesEnquiryModal = function () {
      if (!modal) return;
      modal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    };

    if (closeBtn) closeBtn.addEventListener("click", window.closeCoursesEnquiryModal);
    if (backdrop) backdrop.addEventListener("click", window.closeCoursesEnquiryModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
        window.closeCoursesEnquiryModal();
      }
    });

    document.querySelectorAll("[data-courses-modal-trigger]").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const topic = trigger.getAttribute("data-topic") || "General Course Enquiry";
        window.openCoursesEnquiryModal(topic);
      });
    });

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById("courses-modal-submit-btn");
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `<span>Submitting...</span>`;
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<span>Submit Enquiry</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`;
          }
          if (successMsg) successMsg.classList.remove("hidden");
          setTimeout(() => {
            window.closeCoursesEnquiryModal();
          }, 2000);
        }, 700);
      });
    }
  }

  // Master Initializer
  window.initTechAcademyCoursesPage = function () {
    renderDesktopSidebar();
    renderMobileChips();
    renderCatalogue();
    setupSearch();
    setupModal();
  };
})();
