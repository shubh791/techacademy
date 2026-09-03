/**
 * TechAcademy - Reusable Enquiry & Consultation Modal
 * Implements standard course enquiry form from the source of truth with responsive design and validation
 */

function initEnquireModal() {
  // Inject modal markup if not already present
  if (document.getElementById("enquire-modal")) return;

  const modalEl = document.createElement("div");
  modalEl.id = "enquire-modal";
  modalEl.className = "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm hidden";
  modalEl.setAttribute("role", "dialog");
  modalEl.setAttribute("aria-modal", "true");

  modalEl.innerHTML = `
    <div class="relative w-full max-w-xl bg-[#09152b] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-dropdownFade">
      
      <!-- Modal Header -->
      <div class="px-6 py-5 bg-[#001c44] border-b border-white/10 flex items-center justify-between">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">Speak With Our Advisors</span>
          <h3 class="text-lg sm:text-xl font-bold text-white mt-0.5" id="modal-heading-text">Talk to a Learning Expert</h3>
        </div>
        <button id="close-modal-btn" aria-label="Close modal" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 overflow-y-auto space-y-5">
        <p class="text-sm text-slate-300">
          Fill out your contact details below and our training experts will be in touch shortly to assist you.
        </p>

        <form id="techacademy-enquiry-form" class="space-y-4" onsubmit="handleEnquirySubmit(event)">
          <input type="hidden" id="enquiry-source-context" name="sourceContext" value="Direct Enquiry">

          <!-- Funding Source Radios (Exact reference match) -->
          <div>
            <label class="block text-xs font-semibold tracking-wider text-slate-300 uppercase mb-2">
              Who will be funding the course? <span class="text-amber-400">*</span>
            </label>
            <div class="grid grid-cols-3 gap-2 sm:gap-3">
              <label class="flex items-center justify-center p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer text-xs sm:text-sm text-slate-200 transition-colors has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10 has-[:checked]:text-amber-300 font-medium">
                <input type="radio" name="fundingType" value="employer" checked class="sr-only">
                <span>My employer</span>
              </label>
              <label class="flex items-center justify-center p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer text-xs sm:text-sm text-slate-200 transition-colors has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10 has-[:checked]:text-amber-300 font-medium">
                <input type="radio" name="fundingType" value="self" class="sr-only">
                <span>I will</span>
              </label>
              <label class="flex items-center justify-center p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer text-xs sm:text-sm text-slate-200 transition-colors has-[:checked]:border-amber-400 has-[:checked]:bg-amber-400/10 has-[:checked]:text-amber-300 font-medium">
                <input type="radio" name="fundingType" value="not_sure" class="sr-only">
                <span>Not sure</span>
              </label>
            </div>
          </div>

          <!-- Full Name -->
          <div>
            <label for="enquiry-name" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Full Name <span class="text-amber-400">*</span>
            </label>
            <input type="text" id="enquiry-name" required placeholder="e.g. Alexander Mitchell" class="w-full px-4 py-2.5 bg-slate-900/90 border border-white/15 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all">
          </div>

          <!-- Company Email -->
          <div>
            <label for="enquiry-email" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Email Address <span class="text-amber-400">*</span>
            </label>
            <input type="email" id="enquiry-email" required placeholder="name@company.com" class="w-full px-4 py-2.5 bg-slate-900/90 border border-white/15 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all">
          </div>

          <!-- Mobile Phone Number with Custom Flag Selector -->
          <div>
            <label for="enquiry-phone" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Mobile Number <span class="text-amber-400">*</span>
            </label>
            <div class="flex relative rounded-lg border border-white/15 focus-within:ring-2 focus-within:ring-amber-400 focus-within:border-amber-400 bg-slate-900/90 transition-all">
              <div id="modal-country-selector" data-country-selector data-default="gb" data-theme="dark" data-input-name="countryCode" class="shrink-0 border-r border-white/15"></div>
              <input type="tel" id="enquiry-phone" required placeholder="Mobile Number*" class="w-full px-3.5 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0 text-sm text-white placeholder-slate-500">
            </div>
          </div>

          <!-- Message / Special Requirements -->
          <div>
            <label for="enquiry-message" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Message or Specific Course Questions <span class="text-slate-500 font-normal lowercase">(optional)</span>
            </label>
            <textarea id="enquiry-message" rows="3" placeholder="Tell us about the courses or team size you are interested in..." class="w-full px-4 py-2.5 bg-slate-900/90 border border-white/15 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all resize-none"></textarea>
          </div>

          <!-- Consent -->
          <p class="text-[11px] text-slate-400 leading-relaxed">
            By submitting your details you agree to be contacted in order to respond to your enquiry.
          </p>

          <!-- Submit Button -->
          <button type="submit" class="w-full py-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold rounded-lg text-sm sm:text-base transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
            <span>Send Enquiry</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </form>

        <!-- Success Feedback State -->
        <div id="enquiry-success-state" class="hidden text-center py-8 space-y-4">
          <div class="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h4 class="text-xl font-bold text-white">Thank You for Your Enquiry!</h4>
          <p class="text-sm text-slate-300 max-w-md mx-auto">
            One of our TechAcademy training experts will be in touch shortly to go over your requirements.
          </p>
          <button onclick="window.closeEnquireModal()" class="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg text-sm transition-colors">
            Close Window
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modalEl);

  if (typeof initCountrySelectors === "function") {
    initCountrySelectors();
  }

  // Close handlers
  const closeBtn = document.getElementById("close-modal-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeEnquireModal);
  }

  modalEl.addEventListener("click", (e) => {
    if (e.target === modalEl) closeEnquireModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
      closeEnquireModal();
    }
  });
}

function openEnquireModal(context = "") {
  initEnquireModal();
  const modalEl = document.getElementById("enquire-modal");
  const headingText = document.getElementById("modal-heading-text");
  const contextInput = document.getElementById("enquiry-source-context");
  const form = document.getElementById("techacademy-enquiry-form");
  const successState = document.getElementById("enquiry-success-state");

  if (modalEl) {
    if (context && headingText) {
      headingText.innerText = context.includes("PRINCE2") || context.includes("Course") 
        ? `Enquire for: ${context}` 
        : "Talk to a Learning Expert";
    }
    if (contextInput) contextInput.value = context || "General";
    if (form) form.classList.remove("hidden");
    if (successState) successState.classList.add("hidden");

    modalEl.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeEnquireModal() {
  const modalEl = document.getElementById("enquire-modal");
  if (modalEl) {
    modalEl.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const form = document.getElementById("techacademy-enquiry-form");
  const successState = document.getElementById("enquiry-success-state");

  if (form && successState) {
    form.classList.add("hidden");
    successState.classList.remove("hidden");
  }
}

if (typeof window !== "undefined") {
  window.initEnquireModal = initEnquireModal;
  window.openEnquireModal = openEnquireModal;
  window.closeEnquireModal = closeEnquireModal;
  window.handleEnquirySubmit = handleEnquirySubmit;
}
