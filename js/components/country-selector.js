/**
 * TechAcademy - Custom Country Dial Code & Flag Selector
 * Provides a responsive, search-filtered country selector with high-res flag imagery
 */

const COUNTRIES_DATA = [
  { name: "United Kingdom", code: "gb", dial: "+44" },
  { name: "United States", code: "us", dial: "+1" },
  { name: "India", code: "in", dial: "+91" },
  { name: "Australia", code: "au", dial: "+61" },
  { name: "Canada", code: "ca", dial: "+1" },
  { name: "Germany", code: "de", dial: "+49" },
  { name: "France", code: "fr", dial: "+33" },
  { name: "United Arab Emirates", code: "ae", dial: "+971" },
  { name: "Saudi Arabia", code: "sa", dial: "+966" },
  { name: "Singapore", code: "sg", dial: "+65" },
  { name: "Ireland", code: "ie", dial: "+353" },
  { name: "South Africa", code: "za", dial: "+27" },
  { name: "New Zealand", code: "nz", dial: "+64" },
  { name: "Switzerland", code: "ch", dial: "+41" },
  { name: "Netherlands", code: "nl", dial: "+31" },
  { name: "Sweden", code: "se", dial: "+46" },
  { name: "Norway", code: "no", dial: "+47" },
  { name: "Denmark", code: "dk", dial: "+45" },
  { name: "Spain", code: "es", dial: "+34" },
  { name: "Italy", code: "it", dial: "+39" },
  { name: "Qatar", code: "qa", dial: "+974" },
  { name: "Kuwait", code: "kw", dial: "+965" },
  { name: "Bahrain", code: "bh", dial: "+973" },
  { name: "Oman", code: "om", dial: "+968" },
  { name: "Malaysia", code: "my", dial: "+60" },
  { name: "Hong Kong", code: "hk", dial: "+852" },
  { name: "Japan", code: "jp", dial: "+81" },
  { name: "South Korea", code: "kr", dial: "+82" },
  { name: "Belgium", code: "be", dial: "+32" },
  { name: "Austria", code: "at", dial: "+43" },
  { name: "Portugal", code: "pt", dial: "+351" },
  { name: "Poland", code: "pl", dial: "+48" },
  { name: "Brazil", code: "br", dial: "+55" },
  { name: "Mexico", code: "mx", dial: "+52" },
  { name: "Nigeria", code: "ng", dial: "+234" },
  { name: "Kenya", code: "ke", dial: "+254" },
  { name: "Egypt", code: "eg", dial: "+20" },
  { name: "Pakistan", code: "pk", dial: "+92" },
  { name: "Bangladesh", code: "bd", dial: "+880" },
  { name: "Philippines", code: "ph", dial: "+63" },
  { name: "Indonesia", code: "id", dial: "+62" },
  { name: "Thailand", code: "th", dial: "+66" },
  { name: "Vietnam", code: "vn", dial: "+84" },
  { name: "Turkey", code: "tr", dial: "+90" },
  { name: "Israel", code: "il", dial: "+972" },
  { name: "Greece", code: "gr", dial: "+30" },
  { name: "Czech Republic", code: "cz", dial: "+420" },
  { name: "Romania", code: "ro", dial: "+40" },
  { name: "Hungary", code: "hu", dial: "+36" },
  { name: "Finland", code: "fi", dial: "+358" },
  { name: "Argentina", code: "ar", dial: "+54" },
  { name: "Chile", code: "cl", dial: "+56" },
  { name: "Colombia", code: "co", dial: "+57" },
  { name: "Cyprus", code: "cy", dial: "+357" },
  { name: "Luxembourg", code: "lu", dial: "+352" },
  { name: "Malta", code: "mt", dial: "+356" },
  { name: "Iceland", code: "is", dial: "+354" }
];

function initCountrySelectors() {
  const containers = document.querySelectorAll("[data-country-selector]");
  containers.forEach(container => setupSingleSelector(container));
}

function setupSingleSelector(container) {
  if (container.dataset.initialized) return;
  container.dataset.initialized = "true";

  const defaultCode = container.dataset.default || "gb";
  let selected = COUNTRIES_DATA.find(c => c.code === defaultCode) || COUNTRIES_DATA[0];

  const inputName = container.dataset.inputName || "countryCode";
  const isDark = container.dataset.theme === "dark";

  container.innerHTML = `
    <div class="relative w-full h-full flex items-center">
      <input type="hidden" name="${inputName}" id="${container.id ? container.id + '-hidden' : 'country-hidden'}" value="${selected.dial}">
      
      <!-- Trigger Button -->
      <button 
        type="button" 
        class="country-btn flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-medium ${isDark ? 'text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80' : 'text-slate-800 hover:text-slate-950 bg-slate-50 hover:bg-slate-100'} transition-all shrink-0 cursor-pointer select-none rounded-l-xl focus:outline-none h-full min-h-[44px]"
        aria-expanded="false"
        aria-haspopup="listbox"
      >
        <img 
          src="https://flagcdn.com/w40/${selected.code}.png" 
          srcset="https://flagcdn.com/w80/${selected.code}.png 2x" 
          alt="${selected.name} flag" 
          class="country-flag-img w-5 h-3.5 object-cover rounded-xs shadow-xs shrink-0" 
          loading="lazy"
        />
        <span class="country-dial-text font-semibold">${selected.dial}</span>
        <svg class="w-3.5 h-3.5 text-slate-400 chevron-icon transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      <!-- Dropdown Menu -->
      <div class="country-dropdown hidden absolute top-full left-0 mt-1.5 w-72 sm:w-80 ${isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'} border rounded-2xl shadow-2xl z-50 p-2 overflow-hidden animate-dropdownFade">
        
        <!-- Search Input -->
        <div class="p-1.5 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} mb-1.5">
          <div class="relative flex items-center">
            <svg class="w-4 h-4 text-slate-400 absolute left-2.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Search country or code..." 
              class="country-search w-full pl-8 pr-3 py-1.5 text-xs sm:text-sm rounded-lg ${isDark ? 'bg-slate-800/80 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'} border focus:outline-none focus:ring-1 focus:ring-amber-400 transition-all"
            />
          </div>
        </div>

        <!-- Country Options List -->
        <ul class="country-list max-h-56 overflow-y-auto space-y-0.5 text-xs sm:text-sm custom-scrollbar" role="listbox">
          ${COUNTRIES_DATA.map(c => `
            <li 
              role="option" 
              data-dial="${c.dial}" 
              data-code="${c.code}" 
              data-name="${c.name}"
              class="country-option flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${c.code === selected.code ? (isDark ? 'bg-amber-400/15 text-amber-300 font-semibold' : 'bg-purple-50 text-[#4B3294] font-semibold') : (isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-700')}"
            >
              <div class="flex items-center gap-2.5 truncate pr-2">
                <img 
                  src="https://flagcdn.com/w40/${c.code}.png" 
                  srcset="https://flagcdn.com/w80/${c.code}.png 2x" 
                  alt="${c.name} flag" 
                  class="w-4 h-3 object-cover rounded-xs shrink-0" 
                  loading="lazy"
                />
                <span class="truncate">${c.name}</span>
              </div>
              <span class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} font-medium shrink-0">${c.dial}</span>
            </li>
          `).join('')}
        </ul>

      </div>
    </div>
  `;

  const btn = container.querySelector(".country-btn");
  const dropdown = container.querySelector(".country-dropdown");
  const searchInput = container.querySelector(".country-search");
  const list = container.querySelector(".country-list");
  const hiddenInput = container.querySelector("input[type=hidden]");
  const flagImg = container.querySelector(".country-flag-img");
  const dialText = container.querySelector(".country-dial-text");
  const chevron = container.querySelector(".chevron-icon");

  function openDropdown() {
    dropdown.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    chevron.classList.add("rotate-180");
    searchInput.value = "";
    filterCountries("");
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeDropdown() {
    dropdown.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    chevron.classList.remove("rotate-180");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeDropdown();
    } else {
      document.querySelectorAll(".country-dropdown").forEach(d => d.classList.add("hidden"));
      document.querySelectorAll(".country-btn").forEach(b => b.setAttribute("aria-expanded", "false"));
      document.querySelectorAll(".chevron-icon").forEach(c => c.classList.remove("rotate-180"));
      openDropdown();
    }
  });

  function filterCountries(query) {
    const q = query.toLowerCase().trim();
    const options = list.querySelectorAll(".country-option");
    options.forEach(opt => {
      const name = (opt.dataset.name || "").toLowerCase();
      const dial = (opt.dataset.dial || "").toLowerCase();
      if (name.includes(q) || dial.includes(q)) {
        opt.classList.remove("hidden");
      } else {
        opt.classList.add("hidden");
      }
    });
  }

  searchInput.addEventListener("input", (e) => {
    filterCountries(e.target.value);
  });

  list.addEventListener("click", (e) => {
    const option = e.target.closest(".country-option");
    if (!option) return;

    const code = option.dataset.code;
    const dial = option.dataset.dial;
    const name = option.dataset.name;

    selected = { code, dial, name };
    hiddenInput.value = dial;
    dialText.innerText = dial;
    flagImg.src = `https://flagcdn.com/w40/${code}.png`;
    flagImg.srcset = `https://flagcdn.com/w80/${code}.png 2x`;
    flagImg.alt = `${name} flag`;

    list.querySelectorAll(".country-option").forEach(opt => {
      opt.className = `country-option flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${opt.dataset.code === code ? (isDark ? 'bg-amber-400/15 text-amber-300 font-semibold' : 'bg-purple-50 text-[#4B3294] font-semibold') : (isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-700')}`;
    });

    closeDropdown();
    const phoneInput = container.closest("form")?.querySelector("input[type=tel]");
    if (phoneInput) phoneInput.focus();
  });

  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCountrySelectors();
});

if (typeof window !== "undefined") {
  window.initCountrySelectors = initCountrySelectors;
  window.COUNTRIES_DATA = COUNTRIES_DATA;
}
