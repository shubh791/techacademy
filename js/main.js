/**
 * TechAcademy - Main Client Controller
 * Powers Hero Search Autocomplete, Voice Dictation, Popular Topics, and Key Features Contact Form
 */

document.addEventListener("DOMContentLoaded", () => {
  renderHeroArt();

  // 1. Render Header and Init Modal
  if (typeof renderHeader === "function") {
    renderHeader("site-header");
  }
  if (typeof initEnquireModal === "function") {
    initEnquireModal();
  }

  // 2. Setup Hero Search & Autocomplete
  setupHeroSearch();

  // 3. Setup Popular Topics Chips
  setupPopularTopics();

  // 4. Setup Inline Contact Form
  setupInlineContactForm();

  // 5. Setup Expert Training Interactive Panels
  setupExpertTraining();

  // 6. Render Footer
  if (typeof renderFooter === "function") {
    renderFooter("site-footer");
  }
});

/**
 * Reuse the same hero artwork composition at its responsive placement points.
 */
function renderHeroArt() {
  const template = document.getElementById("hero-art-template");
  const slots = document.querySelectorAll(".hero-art-slot");
  if (!template || !slots.length) return;

  slots.forEach((slot) => {
    slot.appendChild(template.content.cloneNode(true));
  });
}

/**
 * Hero Search Controller
 */
function setupHeroSearch() {
  const searchInput = document.getElementById("hero-course-search");
  const searchWrapper = document.getElementById("search-input-wrapper");
  const clearBtn = document.getElementById("search-clear-btn");
  const voiceBtn = document.getElementById("search-voice-btn");
  const resultsContainer = document.getElementById("search-results-dropdown");
  const fallbackBox = document.getElementById("search-no-results");
  const resultsList = document.getElementById("search-results-list");

  if (!searchInput || !resultsContainer || !resultsList) return;

  let activeIndex = -1;

  // Input typing event
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (clearBtn) {
      if (query.length > 0) {
        clearBtn.classList.remove("hidden");
      } else {
        clearBtn.classList.add("hidden");
      }
    }
    performSearch(query);
  });

  // Focus and Blur styling
  searchInput.addEventListener("focus", () => {
    if (searchWrapper) {
      searchWrapper.classList.add("search-focused-glow");
    }
    const query = searchInput.value.trim();
    if (query.length > 0) {
      resultsContainer.classList.remove("hidden");
    }
  });

  searchInput.addEventListener("blur", () => {
    if (searchWrapper) {
      searchWrapper.classList.remove("search-focused-glow");
    }
  });

  // Clear button click
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.add("hidden");
      resultsContainer.classList.add("hidden");
      if (fallbackBox) fallbackBox.classList.add("hidden");
      searchInput.focus();
    });
  }

  // Voice Search / Dictation
  if (voiceBtn) {
    voiceBtn.addEventListener("click", () => {
      startVoiceDictation(searchInput, voiceBtn);
    });
  }

  // Keyboard navigation within search dropdown
  searchInput.addEventListener("keydown", (e) => {
    const items = resultsList.querySelectorAll(".search-result-item");
    if (!resultsContainer.classList.contains("hidden") && items.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        activeIndex = (activeIndex + 1) % items.length;
        updateActiveItem(items, activeIndex);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        activeIndex = (activeIndex - 1 + items.length) % items.length;
        updateActiveItem(items, activeIndex);
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        items[activeIndex].click();
      } else if (e.key === "Escape") {
        resultsContainer.classList.add("hidden");
        activeIndex = -1;
      }
    }
  });

  // Close dropdown on outside click
  document.addEventListener("click", (e) => {
    if (!searchWrapper.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add("hidden");
      activeIndex = -1;
    }
  });

  function performSearch(query) {
    activeIndex = -1;
    if (!query) {
      resultsContainer.classList.add("hidden");
      if (fallbackBox) fallbackBox.classList.add("hidden");
      return;
    }

    const courses = window.TECHACADEMY_COURSES || [];
    const qLower = query.toLowerCase();

    // Filter matching courses
    const matches = courses.filter((c) => {
      return (
        c.name.toLowerCase().includes(qLower) ||
        c.category.toLowerCase().includes(qLower) ||
        c.topic.toLowerCase().includes(qLower) ||
        (c.code && c.code.toLowerCase().includes(qLower))
      );
    });

    resultsContainer.classList.remove("hidden");

    if (matches.length > 0) {
      if (fallbackBox) fallbackBox.classList.add("hidden");
      resultsList.classList.remove("hidden");

      resultsList.innerHTML = matches
        .slice(0, 7)
        .map((course, idx) => {
          // Highlight search matches
          const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
          const highlightedName = course.name.replace(regex, `<mark class="bg-amber-100 text-amber-900 px-0.5 rounded font-semibold">$1</mark>`);

          return `
            <li class="search-result-item px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-b-0 transition-colors flex items-center justify-between gap-3 group" data-index="${idx}" onclick="selectCourseItem('${encodeURIComponent(course.name)}')">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-[#002353] shrink-0 group-hover:bg-[#002353] group-hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-semibold text-slate-900 group-hover:text-[#002353] transition-colors truncate">
                      ${highlightedName}
                    </span>
                    ${course.badge ? `<span class="px-1.5 py-0.2 text-[10px] font-bold rounded bg-amber-100 text-amber-800 border border-amber-200 shrink-0">${course.badge}</span>` : ""}
                  </div>
                  <div class="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                    <span>${course.category}</span>
                    <span>•</span>
                    <span class="text-slate-400">Available: ${course.delivery ? course.delivery[0] : "Online / Classroom"}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button type="button" class="px-3 py-1 text-xs font-semibold text-[#002353] bg-purple-50 hover:bg-[#002353] hover:text-white rounded-md transition-colors border border-purple-200">
                  Enquire
                </button>
              </div>
            </li>
          `;
        })
        .join("");
    } else {
      // Show exact source of truth Fallback Box
      resultsList.classList.add("hidden");
      if (fallbackBox) {
        fallbackBox.classList.remove("hidden");
      }
    }
  }

  function updateActiveItem(items, index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("bg-white/15");
        item.scrollIntoView({ block: "nearest" });
      } else {
        item.classList.remove("bg-white/15");
      }
    });
  }
}

/**
 * Handle selecting an item from the course search dropdown
 */
function selectCourseItem(encodedName) {
  const courseName = decodeURIComponent(encodedName);
  if (typeof window.openEnquireModal === "function") {
    window.openEnquireModal(courseName);
  }
}

/**
 * Voice Dictation using Web Speech API
 */
function startVoiceDictation(inputElement, micButton) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  micButton.classList.add("mic-active");

  recognition.onstart = () => {
    inputElement.placeholder = "Listening... speak now";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    inputElement.value = transcript;
    inputElement.dispatchEvent(new Event("input"));
    micButton.classList.remove("mic-active");
    inputElement.placeholder = "Search for a course or topic";
  };

  recognition.onerror = () => {
    micButton.classList.remove("mic-active");
    inputElement.placeholder = "Search for a course or topic";
  };

  recognition.onend = () => {
    micButton.classList.remove("mic-active");
    inputElement.placeholder = "Search for a course or topic";
  };

  recognition.start();
}

/**
 * Setup Popular Topics Chips
 */
function setupPopularTopics() {
  const chips = document.querySelectorAll(".popular-topic-chip");
  const searchInput = document.getElementById("hero-course-search");

  chips.forEach((chip) => {
    chip.addEventListener("click", (e) => {
      const topicName = chip.getAttribute("data-topic");
      if (!topicName) return;

      // Fill search input and trigger search
      if (searchInput) {
        searchInput.value = topicName;
        searchInput.dispatchEvent(new Event("input"));
        searchInput.focus();
      }

      // Visual active feedback
      chips.forEach((c) => c.classList.remove("ring-2", "ring-amber-400", "bg-amber-400/20"));
      chip.classList.add("ring-2", "ring-amber-400", "bg-amber-400/20");
    });
  });
}

/**
 * Setup Inline Section Contact Form
 */
function setupInlineContactForm() {
  const form = document.getElementById("home-contact-form");
  const thanksMessage = document.getElementById("home-contact-thanks");
  const resetBtn = document.getElementById("home-contact-reset-btn");

  if (!form || !thanksMessage) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Basic form validation check
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="mobile"]');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim()) {
      return;
    }

    form.classList.add("hidden");
    thanksMessage.classList.remove("hidden");
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      form.reset();
      thanksMessage.classList.add("hidden");
      form.classList.remove("hidden");
    });
  }
}

/**
 * State and Controller for Expert Training Horizontal Accordion
 */
let currentActiveExpertFormat = -1; // -1 = all collapsed by default

function toggleExpertFormat(targetIndex, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const container = document.getElementById("expert-training-accordion");
  if (!container) return;
  const items = container.querySelectorAll(".training-accordion-item");

  if (currentActiveExpertFormat === targetIndex) {
    // Clicked on the already open card or its minus button -> CLOSE it!
    currentActiveExpertFormat = -1;
  } else {
    // Open the clicked format
    currentActiveExpertFormat = targetIndex;
  }

  items.forEach((item, idx) => {
    const collapsedView = item.querySelector(".collapsed-view");
    const expandedView = item.querySelector(".expanded-view");

    if (currentActiveExpertFormat === -1) {
      // ALL COLLAPSED STATE (Default: 4 equal tall vertical photo cards)
      item.className = "training-accordion-item w-full sm:w-auto lg:flex-1 h-[480px] lg:h-full rounded-2xl overflow-hidden cursor-pointer relative group transition-all duration-500 shadow-md hover:shadow-2xl bg-slate-900 border border-slate-200/40";
      if (collapsedView) collapsedView.classList.remove("hidden");
      if (expandedView) {
        expandedView.classList.add("hidden");
        expandedView.classList.remove("flex");
      }
    } else if (idx === currentActiveExpertFormat) {
      // ACTIVE EXPANDED STATE (Expands horizontally to show photo + details)
      item.className = "training-accordion-item is-active w-full lg:flex-[2.5] xl:flex-[2.7] h-auto lg:h-full rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl border border-slate-200/90 bg-white";
      if (collapsedView) collapsedView.classList.add("hidden");
      if (expandedView) {
        expandedView.classList.remove("hidden");
        expandedView.classList.add("flex");
      }
    } else {
      // COMPRESSED CARDS (Stacked as narrow vertical photo cards to the side)
      item.className = "training-accordion-item w-full lg:w-[140px] xl:w-[160px] lg:flex-none h-[480px] lg:h-full rounded-2xl overflow-hidden cursor-pointer relative group transition-all duration-500 shadow-md hover:shadow-xl bg-slate-900 border border-slate-200/40";
      if (collapsedView) collapsedView.classList.remove("hidden");
      if (expandedView) {
        expandedView.classList.add("hidden");
        expandedView.classList.remove("flex");
      }
    }
  });

  if (currentActiveExpertFormat !== -1 && window.innerWidth < 1024) {
    const activeItem = items[currentActiveExpertFormat];
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
}

function setupExpertTraining() {
  // Initial state is all-collapsed (-1)
  currentActiveExpertFormat = -1;
}

if (typeof window !== "undefined") {
  window.selectCourseItem = selectCourseItem;
  window.setupHeroSearch = setupHeroSearch;
  window.setupPopularTopics = setupPopularTopics;
  window.setupInlineContactForm = setupInlineContactForm;
  window.setupExpertTraining = setupExpertTraining;
  window.toggleExpertFormat = toggleExpertFormat;
  window.toggleKnowledgeFeatured = function (card, articleTitle) {
    if (!card) return;
    // Highlight effect
    card.classList.add("bg-[#f3f0fb]", "border-purple-300", "ring-2", "ring-purple-400/30");
    card.classList.remove("bg-[#f8f9fa]");
    if (typeof window.openEnquireModal === "function") {
      window.openEnquireModal(articleTitle || "Featured Career Guide");
    }
  };
}

