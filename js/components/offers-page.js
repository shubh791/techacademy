/**
 * TechAcademy - Offers Page Interactive Component
 * Handles dynamic course offer catalogue, category tabs, real-time search filtering,
 * pagination/load-more, and modal enquiry integration.
 */

// Course-specific icon helper for offer cards
function getOfferCourseIconSvg(course) {
  const cid = (course.id || "").toLowerCase();
  const ccat = (course.category || "").toLowerCase();

  if (cid.includes("python") || cid.includes("code") || cid.includes("programming")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    `;
  }

  if (ccat.includes("artificial-intelligence") || ccat.includes("intelligence") || cid.includes("ai") || cid.includes("machine-learning") || cid.includes("deep-learning")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3"></circle>
        <circle cx="4" cy="6" r="2"></circle>
        <circle cx="20" cy="6" r="2"></circle>
        <circle cx="4" cy="18" r="2"></circle>
        <circle cx="20" cy="18" r="2"></circle>
        <line x1="6" y1="7" x2="9.5" y2="10.5"></line>
        <line x1="18" y1="7" x2="14.5" y2="10.5"></line>
        <line x1="6" y1="17" x2="9.5" y2="13.5"></line>
        <line x1="18" y1="17" x2="14.5" y2="13.5"></line>
      </svg>
    `;
  }

  if (ccat.includes("cloud") || cid.includes("aws") || cid.includes("azure") || cid.includes("gcp") || cid.includes("kubernetes")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    `;
  }

  if (ccat.includes("cyber") || cid.includes("hacker") || cid.includes("security") || cid.includes("cissp") || cid.includes("cisa")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    `;
  }

  if (ccat.includes("network") || cid.includes("firewall") || cid.includes("cisco") || cid.includes("paloalto") || cid.includes("checkpoint")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    `;
  }

  if (ccat.includes("digital") || ccat.includes("marketing") || cid.includes("seo") || cid.includes("ads") || cid.includes("analytics")) {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      </svg>
    `;
  }

  // Fallback graduation cap
  return `
    <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
    </svg>
  `;
}

// Course short summary helper
function getOfferCourseSummary(course) {
  const cid = (course.id || "").toLowerCase();
  if (cid.includes("introduction-to-artificial-intelligence")) {
    return "Foundations of AI, machine learning concepts, and hands-on tools with 100% job guarantee.";
  }
  if (cid.includes("python-programming-for-ai")) {
    return "Core Python, data manipulation, algorithm development, and AI project architectures.";
  }
  if (cid.includes("machine-learning")) {
    return "Supervised, unsupervised algorithms, model evaluation, and real-world deployment.";
  }
  if (cid.includes("aws-certified-cloud-practitioner")) {
    return "AWS Cloud fundamentals, core services, security compliance, and exam preparation.";
  }
  if (cid.includes("certified-ethical-hacker")) {
    return "Network defense, vulnerability assessments, penetration testing, and ethical hacking.";
  }
  if (cid.includes("digital-marketing-expert")) {
    return "Comprehensive marketing mastery covering SEO, Meta Ads, Google Ads, and Web Analytics.";
  }
  if (cid.includes("ccna-security")) {
    return "Cisco network security infrastructure, firewall management, and VPN configurations.";
  }
  return "Comprehensive accredited professional curriculum with interactive live labs and dedicated mentor support.";
}

// Generate single Offer Card HTML
function createOfferCardHtml(course, isFeatured = false) {
  const iconSvg = getOfferCourseIconSvg(course);
  const summary = getOfferCourseSummary(course);

  return `
    <div class="offer-card group bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-purple-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden" data-course-id="${course.id}" data-category="${course.category}">
      
      <!-- Top Accent Bar on Hover -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#45318A] to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div>
        <!-- Top Metadata Row: Category & Icon -->
        <div class="flex items-center justify-between gap-3 mb-4">
          <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-[#45318A] border border-purple-200/60">
            ${course.category}
          </span>
          <div class="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-purple-50 border border-slate-100 group-hover:border-purple-200 flex items-center justify-center shrink-0 transition-colors shadow-xs">
            ${iconSvg}
          </div>
        </div>

        <!-- Course Title -->
        <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#45318A] transition-colors leading-snug mb-2.5">
          ${course.name}
        </h3>

        <!-- Short Description -->
        <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5 line-clamp-2">
          ${summary}
        </p>

        <!-- Offer Highlights Tag -->
        <div class="flex items-center gap-2 mb-6">
          <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>100% Job Guarantee &amp; Labs</span>
          </span>
          ${course.code ? `<span class="text-[11px] font-mono text-slate-400 font-medium">${course.code}</span>` : ""}
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div class="pt-4 border-t border-slate-100 flex items-center gap-2.5">
        <button 
          type="button" 
          class="offer-enquire-btn flex-1 py-2.5 px-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
          data-course-name="${course.name}"
          data-course-slug="${course.id}"
          data-course-category="${course.category}"
          aria-label="Enquire for ${course.name} offer"
        >
          <span>Enquire Now</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>

        <a 
          href="${course.href}" 
          class="py-2.5 px-3 rounded-lg bg-slate-50 hover:bg-purple-50 text-slate-700 hover:text-[#45318A] border border-slate-200/80 font-semibold text-xs sm:text-sm transition-colors text-center shrink-0 cursor-pointer"
          title="View full course syllabus"
        >
          View Course
        </a>
      </div>

    </div>
  `;
}

// Master initialization for the Offers Page
function initTechAcademyOffersPage() {
  const courses = window.TECHACADEMY_COURSES || [];
  const categories = window.TECHACADEMY_COURSE_CATEGORIES || [];

  // State
  let activeCategory = "all";
  let activeSearchQuery = "";
  let currentDisplayLimit = 12;

  // DOM Containers
  const featuredContainer = document.getElementById("featured-offers-grid");
  const categoryPillsContainer = document.getElementById("category-filter-pills");
  const categorySelect = document.getElementById("offers-category-select");
  const searchInput = document.getElementById("offers-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const allOffersContainer = document.getElementById("all-offers-grid");
  const offersCountBadge = document.getElementById("offers-count-badge");
  const loadMoreBtn = document.getElementById("load-more-offers-btn");
  const loadMoreWrapper = document.getElementById("load-more-wrapper");
  const emptyStateWrapper = document.getElementById("offers-empty-state");
  const resetFiltersBtn = document.getElementById("reset-offers-filters-btn");

  // 1. Render Featured Offers Grid (6 prominent courses across domains)
  if (featuredContainer && courses.length > 0) {
    const featuredCourseIds = [
      "introduction-to-artificial-intelligence",
      "machine-learning",
      "aws-certified-cloud-practitioner",
      "certified-ethical-hacker-ceh",
      "digital-marketing-expert",
      "ccna-security"
    ];

    let featuredCourses = courses.filter(c => featuredCourseIds.includes(c.id));
    if (featuredCourses.length === 0) {
      featuredCourses = courses.slice(0, 6);
    }

    featuredContainer.innerHTML = featuredCourses
      .map(c => createOfferCardHtml(c, true))
      .join("");
  }

  // 2. Render Category Filter Tabs & Category Select Dropdown
  if (categoryPillsContainer && categories.length > 0) {
    const totalCount = courses.length;

    let pillsHtml = `
      <button 
        type="button" 
        class="category-pill-btn px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${activeCategory === 'all' ? 'bg-[#45318A] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-[#45318A] border border-slate-200/80'}"
        data-category-slug="all"
      >
        All Categories (${totalCount})
      </button>
    `;

    categories.forEach(cat => {
      const catCount = courses.filter(c => c.category.toLowerCase() === cat.title.toLowerCase() || c.category.toLowerCase().includes(cat.slug.toLowerCase())).length;
      pillsHtml += `
        <button 
          type="button" 
          class="category-pill-btn px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 ${activeCategory === cat.title ? 'bg-[#45318A] text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-[#45318A] border border-slate-200/80'}"
          data-category-slug="${cat.title}"
        >
          ${cat.title} (${catCount})
        </button>
      `;
    });

    categoryPillsContainer.innerHTML = pillsHtml;

    // Attach pill click listeners
    const pillButtons = categoryPillsContainer.querySelectorAll(".category-pill-btn");
    pillButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-category-slug");
        activeCategory = selected;
        currentDisplayLimit = 12;

        // Update pill UI
        pillButtons.forEach(b => {
          b.classList.remove("bg-[#45318A]", "text-white", "shadow-sm");
          b.classList.add("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");
        });
        btn.classList.add("bg-[#45318A]", "text-white", "shadow-sm");
        btn.classList.remove("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");

        // Sync dropdown
        if (categorySelect) {
          categorySelect.value = selected === "all" ? "all" : selected;
        }

        renderFilteredOffers();
      });
    });
  }

  // Populate category select dropdown
  if (categorySelect && categories.length > 0) {
    let selectHtml = `<option value="all">All Categories (${courses.length})</option>`;
    categories.forEach(cat => {
      const catCount = courses.filter(c => c.category.toLowerCase() === cat.title.toLowerCase() || c.category.toLowerCase().includes(cat.slug.toLowerCase())).length;
      selectHtml += `<option value="${cat.title}">${cat.title} (${catCount})</option>`;
    });
    categorySelect.innerHTML = selectHtml;

    categorySelect.addEventListener("change", (e) => {
      activeCategory = e.target.value;
      currentDisplayLimit = 12;

      // Sync pills
      if (categoryPillsContainer) {
        const pillButtons = categoryPillsContainer.querySelectorAll(".category-pill-btn");
        pillButtons.forEach(b => {
          const cat = b.getAttribute("data-category-slug");
          if (cat === activeCategory || (activeCategory === "all" && cat === "all")) {
            b.classList.add("bg-[#45318A]", "text-white", "shadow-sm");
            b.classList.remove("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");
          } else {
            b.classList.remove("bg-[#45318A]", "text-white", "shadow-sm");
            b.classList.add("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");
          }
        });
      }

      renderFilteredOffers();
    });
  }

  // 3. Search Input Filtering
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = (e.target.value || "").trim().toLowerCase();
      currentDisplayLimit = 12;

      if (clearSearchBtn) {
        if (activeSearchQuery.length > 0) {
          clearSearchBtn.classList.remove("hidden");
        } else {
          clearSearchBtn.classList.add("hidden");
        }
      }

      renderFilteredOffers();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        activeSearchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderFilteredOffers();
      }
    });
  }

  // Reset all filters button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      activeCategory = "all";
      activeSearchQuery = "";
      currentDisplayLimit = 12;

      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.classList.add("hidden");
      if (categorySelect) categorySelect.value = "all";

      if (categoryPillsContainer) {
        const pillButtons = categoryPillsContainer.querySelectorAll(".category-pill-btn");
        pillButtons.forEach(b => {
          if (b.getAttribute("data-category-slug") === "all") {
            b.classList.add("bg-[#45318A]", "text-white", "shadow-sm");
            b.classList.remove("bg-white", "text-slate-700");
          } else {
            b.classList.remove("bg-[#45318A]", "text-white");
            b.classList.add("bg-white", "text-slate-700");
          }
        });
      }

      renderFilteredOffers();
    });
  }

  // Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      currentDisplayLimit += 12;
      renderFilteredOffers(false);
    });
  }

  // 4. Filter & Render Offers Function
  function renderFilteredOffers(scrollOnReset = false) {
    if (!allOffersContainer) return;

    let filtered = courses;

    // Filter by Category
    if (activeCategory && activeCategory !== "all") {
      filtered = filtered.filter(c => {
        return c.category.toLowerCase() === activeCategory.toLowerCase() ||
               c.category.toLowerCase().includes(activeCategory.toLowerCase());
      });
    }

    // Filter by Search Query
    if (activeSearchQuery) {
      filtered = filtered.filter(c => {
        const nameMatch = c.name.toLowerCase().includes(activeSearchQuery);
        const codeMatch = c.code && c.code.toLowerCase().includes(activeSearchQuery);
        const catMatch = c.category && c.category.toLowerCase().includes(activeSearchQuery);
        return nameMatch || codeMatch || catMatch;
      });
    }

    // Update count badge
    if (offersCountBadge) {
      offersCountBadge.textContent = `Showing ${Math.min(filtered.length, currentDisplayLimit)} of ${filtered.length} offers`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      allOffersContainer.innerHTML = "";
      if (emptyStateWrapper) emptyStateWrapper.classList.remove("hidden");
      if (loadMoreWrapper) loadMoreWrapper.classList.add("hidden");
      return;
    }

    if (emptyStateWrapper) emptyStateWrapper.classList.add("hidden");

    // Paginate / Limit
    const visibleBatch = filtered.slice(0, currentDisplayLimit);
    allOffersContainer.innerHTML = visibleBatch.map(c => createOfferCardHtml(c, false)).join("");

    // Show/Hide Load More Button
    if (loadMoreWrapper) {
      if (filtered.length > currentDisplayLimit) {
        loadMoreWrapper.classList.remove("hidden");
      } else {
        loadMoreWrapper.classList.add("hidden");
      }
    }
  }

  // Initial render of offer list
  renderFilteredOffers();

  // 5. Shared Enquiry Modal Logic
  setupOffersModalInteractions();
}

// Interactive Controller for Offers Enquiry Modal
function setupOffersModalInteractions() {
  const modal = document.getElementById("offers-enquiry-modal");
  if (!modal) return;

  let lastActiveTrigger = null;

  function openOffersModal(courseContext = null, triggerElement = null) {
    lastActiveTrigger = triggerElement || document.activeElement;

    const modalTitle = document.getElementById("offers-modal-title");
    const courseTitleInput = document.getElementById("offers-course-title-input");
    const courseSlugInput = document.getElementById("offers-course-slug-input");
    const courseCategoryInput = document.getElementById("offers-course-category-input");
    const successMsg = document.getElementById("offers-modal-success-msg");
    const submitBtn = document.getElementById("offers-modal-submit-btn");

    if (successMsg) successMsg.classList.add("hidden");

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Submit Enquiry</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>';
      submitBtn.classList.remove("bg-emerald-500", "text-white");
      submitBtn.classList.add("bg-amber-400", "text-slate-950");
    }

    if (courseContext && courseContext.name) {
      if (modalTitle) modalTitle.textContent = "Enquire: " + courseContext.name;
      if (courseTitleInput) courseTitleInput.value = courseContext.name;
      if (courseSlugInput) courseSlugInput.value = courseContext.slug || "";
      if (courseCategoryInput) courseCategoryInput.value = courseContext.category || "";
    } else {
      if (modalTitle) modalTitle.textContent = "Request Exclusive Training Offer";
      if (courseTitleInput) courseTitleInput.value = "Exclusive Training Offers";
      if (courseSlugInput) courseSlugInput.value = "offers";
      if (courseCategoryInput) courseCategoryInput.value = "General Offers";
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      const firstInput = document.getElementById("offers-enquiry-name");
      if (firstInput) firstInput.focus();
    }, 60);
  }

  function closeOffersModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";

    // Close any country dropdown
    const dropdowns = modal.querySelectorAll(".country-dropdown");
    dropdowns.forEach(d => d.classList.add("hidden"));
    const countryBtns = modal.querySelectorAll(".country-btn");
    countryBtns.forEach(b => b.setAttribute("aria-expanded", "false"));

    if (lastActiveTrigger && typeof lastActiveTrigger.focus === "function") {
      lastActiveTrigger.focus();
    }
  }

  window.openOffersModal = openOffersModal;
  window.closeOffersModal = closeOffersModal;

  // Event Delegation for offer enquire buttons
  document.addEventListener("click", (e) => {
    const cardBtn = e.target.closest(".offer-enquire-btn");
    if (cardBtn) {
      e.preventDefault();
      e.stopPropagation();
      const courseName = cardBtn.getAttribute("data-course-name");
      const courseSlug = cardBtn.getAttribute("data-course-slug");
      const courseCategory = cardBtn.getAttribute("data-course-category");
      openOffersModal({ name: courseName, slug: courseSlug, category: courseCategory }, cardBtn);
      return;
    }

    const genericOffersTrigger = e.target.closest("[data-offers-modal-trigger]");
    if (genericOffersTrigger) {
      e.preventDefault();
      e.stopPropagation();
      openOffersModal(null, genericOffersTrigger);
      return;
    }
  });

  // Modal Backdrop click & Escape key
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeOffersModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeOffersModal();
    }
  });

  // Initialize Phone Country Selector inside modal
  if (typeof initCountrySelectors === "function") {
    initCountrySelectors();
  }

  // Form submission handler
  const form = document.getElementById("offers-enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("offers-modal-submit-btn");
      const successMsg = document.getElementById("offers-modal-success-msg");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitted ✓";
        submitBtn.classList.remove("bg-amber-400", "text-slate-950");
        submitBtn.classList.add("bg-emerald-500", "text-white");
      }

      if (successMsg) {
        successMsg.classList.remove("hidden");
      }

      setTimeout(() => {
        closeOffersModal();
        form.reset();
        if (successMsg) successMsg.classList.add("hidden");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Submit Enquiry</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>';
          submitBtn.classList.remove("bg-emerald-500", "text-white");
          submitBtn.classList.add("bg-amber-400", "text-slate-950");
        }
      }, 2400);
    });
  }
}

if (typeof window !== "undefined") {
  window.initTechAcademyOffersPage = initTechAcademyOffersPage;
}
