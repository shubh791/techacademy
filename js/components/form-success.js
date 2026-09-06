/**
 * TechAcademy - Universal Frontend Form Success & Reset Utility
 * Provides a standardized, interactive form success experience across all forms:
 * - HTML5 Form validation check
 * - Prevents default browser reload
 * - Replaces submit button text with animated/bold checkmark
 * - Displays success message/banner for ~3.5 seconds
 * - Full form fields reset
 * - Restores country dial code selector to its default country
 * - Restores resume file input custom labels
 * - Gracefully dismisses parent modal if applicable
 */

(function () {
  function initFrontendFormSuccess(form, options) {
    if (!form) return;
    options = options || {};

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Check form validity
      if (typeof form.checkValidity === "function" && !form.checkValidity()) {
        if (typeof form.reportValidity === "function") {
          form.reportValidity();
        }
        return;
      }

      var duration = options.duration || 3500;
      var successText = options.successText || "Submitted Successfully ✓";
      var submitBtn = options.submitBtn || form.querySelector("button[type='submit']");
      var successNotif = options.successNotif || 
        form.querySelector(".form-success-notification") || 
        document.getElementById(form.id + "-success-notification") ||
        document.getElementById(form.id + "-success-msg") ||
        document.getElementById(form.id + "-success") ||
        document.getElementById(form.id + "-thanks") ||
        document.getElementById("modal-success-notification") ||
        document.getElementById("placement-success-notification") ||
        document.getElementById("contact-success-notification");

      var originalBtnHtml = "";
      var originalBtnClasses = "";

      if (submitBtn) {
        originalBtnHtml = submitBtn.innerHTML;
        originalBtnClasses = submitBtn.className;
        submitBtn.disabled = true;
        submitBtn.innerHTML = "<span>" + successText + "</span>";
        submitBtn.classList.remove("bg-[#45318A]", "hover:bg-[#341F69]", "bg-[#002353]", "hover:bg-[#001738]", "bg-amber-400", "hover:bg-amber-300");
        submitBtn.classList.add("bg-emerald-600", "text-white");
      }

      if (successNotif) {
        successNotif.classList.remove("hidden");
      }

      setTimeout(function () {
        // 1. Reset form fields
        form.reset();

        // 2. Reset country selectors inside the form
        var countrySelectors = form.querySelectorAll("[data-country-selector]");
        countrySelectors.forEach(function (cs) {
          if (typeof window.resetCountrySelector === "function") {
            window.resetCountrySelector(cs);
          }
        });

        // 3. Reset custom resume file label if present
        var resumeLabel = form.querySelector("#resume-file-name") || document.getElementById("resume-file-name");
        if (resumeLabel) {
          resumeLabel.textContent = "Choose PDF, DOC, or DOCX";
          resumeLabel.classList.remove("text-[#45318A]", "font-semibold");
        }

        // 4. Hide success notification
        if (successNotif) {
          successNotif.classList.add("hidden");
        }

        // 5. Restore submit button
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.className = originalBtnClasses;
        }

        // 6. Dismiss modal if configured or in standard modals
        if (typeof options.onComplete === "function") {
          options.onComplete();
        } else {
          if (typeof window.closeGlobalEnquireModal === "function") window.closeGlobalEnquireModal();
          if (typeof window.closeJobAppModal === "function") window.closeJobAppModal();
          if (typeof window.closeEnquireModal === "function") window.closeEnquireModal();
          if (typeof window.closeOffersModal === "function") window.closeOffersModal();
          if (typeof window.closeCoursesEnquiryModal === "function") window.closeCoursesEnquiryModal();
          if (typeof window.closeCourseEnquiryModal === "function") window.closeCourseEnquiryModal();
        }
      }, duration);
    });
  }

  // Auto-bind helper for common form IDs
  function bindAllSiteForms() {
    var formIds = [
      "contact-page-form",
      "job-placement-form",
      "modal-enquire-form",
      "courses-modal-enquiry-form",
      "offers-enquiry-form",
      "home-contact-form",
      "techacademy-enquiry-form"
    ];

    formIds.forEach(function (id) {
      var form = document.getElementById(id);
      if (form && !form.dataset.successInitialized) {
        form.dataset.successInitialized = "true";
        initFrontendFormSuccess(form);
      }
    });

    // Also bind any form with class .course-enquiry-form
    document.querySelectorAll(".course-enquiry-form").forEach(function (form) {
      if (!form.dataset.successInitialized) {
        form.dataset.successInitialized = "true";
        initFrontendFormSuccess(form);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    bindAllSiteForms();
  });

  if (typeof window !== "undefined") {
    window.initFrontendFormSuccess = initFrontendFormSuccess;
    window.bindAllSiteForms = bindAllSiteForms;
  }
})();
