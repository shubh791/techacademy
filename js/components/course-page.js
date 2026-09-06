/**
 * TechAcademy - Reusable Master Course Page Component
 * Renders the 4 core course-page sections from structured course dataset
 */

/**
 * Returns lightweight purple line SVGs for delivery method feature items
 */
function getDeliveryIconSvg(iconName) {
  const icon = (iconName || "").toLowerCase();
  if (icon === "camera" || icon === "video" || icon === "live") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="14" height="14" rx="2"></rect>
        <polygon points="22 7 16 12 22 17 22 7"></polygon>
      </svg>
    `;
  }
  if (icon === "microphone" || icon === "mic" || icon === "headset" || icon === "interactive") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
        <line x1="12" y1="19" x2="12" y2="23"></line>
        <line x1="8" y1="23" x2="16" y2="23"></line>
      </svg>
    `;
  }
  if (icon === "cap" || icon === "trainer" || icon === "education") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
      </svg>
    `;
  }
  if (icon === "calendar" || icon === "schedule" || icon === "batches") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    `;
  }
  if (icon === "award" || icon === "expertise" || icon === "badge") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    `;
  }
  if (icon === "building" || icon === "venue") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
      </svg>
    `;
  }
  if (icon === "users" || icon === "collaborative" || icon === "team") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    `;
  }
  if (icon === "clock" || icon === "time" || icon === "duration") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    `;
  }
  if (icon === "certificate" || icon === "certification" || icon === "document") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    `;
  }
  if (icon === "guarantee" || icon === "shield" || icon === "placement") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    `;
  }
  if (icon === "projects" || icon === "code" || icon === "terminal") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    `;
  }
  if (icon === "briefcase" || icon === "career" || icon === "job") {
    return `
      <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    `;
  }
  // Default clean circle line icon
  return `
    <svg class="w-5 h-5 text-[#45318A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 14 14"></polyline>
    </svg>
  `;
}

/**
 * Determines the specific visual archetype for a course based on id, category, and title
 */
function getCourseVisualType(courseId, categorySlug, title) {
  const cid = (courseId || "").toLowerCase();
  const cslug = (categorySlug || "").toLowerCase();

  // 1. Artificial Intelligence
  if (cid === "introduction-to-artificial-intelligence") return "ai-intro";
  if (cid === "python-programming-for-ai") return "ai-python";
  if (cid === "data-science-with-python") return "ai-datascience";
  if (cid === "machine-learning") return "ai-ml";
  if (cid === "deep-learning-mastery") return "ai-deeplearning";
  if (cid === "natural-language-processing-nlp") return "ai-nlp";
  if (cid === "computer-vision-with-ai") return "ai-computervision";
  if (cid === "reinforcement-learning-robotics") return "ai-robotics";
  if (cid === "ai-industry-specialized-applications") return "ai-industry";
  if (cid === "ai-tools-frameworks") return "ai-tools";
  if (cid === "responsible-ai-research") return "ai-responsible";
  if (cid === "capstone-projects") return "ai-capstone";
  if (cid === "artificial-intelligence-expert") return "ai-expert";

  // 2. Digital Marketing
  if (cid === "search-engine-optimization") return "dm-seo";
  if (cid === "social-media-marketing") return "dm-smm";
  if (cid === "google-ads") return "dm-googleads";
  if (cid === "meta-ads") return "dm-metaads";
  if (cid === "email-marketing") return "dm-email";
  if (cid === "website-design") return "dm-webdesign";
  if (cid === "ai-video-editing") return "dm-video";
  if (cid === "web-analytics") return "dm-analytics";
  if (cid === "digital-marketing-expert") return "dm-expert";

  // 3. Cloud Computing
  if (cid === "aws-certified-cloud-practitioner") return "cloud-aws-ccp";
  if (cid === "amazon-solution-architect-associate") return "cloud-aws-saa";
  if (cid === "aws-certified-ai-practitioner") return "cloud-aws-aip";
  if (cid === "aws-security-specialty") return "cloud-aws-sec";
  if (cid === "microsoft-azure-fundamentals") return "cloud-azure-az900";
  if (cid === "microsoft-azure-administrator-associate") return "cloud-azure-az104";
  if (cid === "azure-security-engineer-associate") return "cloud-azure-az500";
  if (cid === "google-certified-professional-cloud-architect") return "cloud-gcp";
  if (cid === "certified-kubernetes-administrator-cka") return "cloud-k8s";

  // 4. Cyber Security
  if (cid === "cisco-certified-cyberops") return "cyber-cyberops";
  if (cid === "comptia-security-plus") return "cyber-comptia";
  if (cid === "certified-ethical-hacker-ceh") return "cyber-ceh";
  if (cid === "certified-penetration-testing-professional-cpent") return "cyber-cpent";
  if (cid === "certified-information-systems-auditor-cisa") return "cyber-cisa";
  if (cid === "computer-hacking-forensic-investigator-chfi") return "cyber-chfi";
  if (cid === "certified-information-systems-security-professional-cissp") return "cyber-cissp";
  if (cid === "cyber-security-expert") return "cyber-expert";

  // 5. Network Security
  if (cid === "ccna-security") return "net-ccna";
  if (cid === "ccnp-security") return "net-ccnp";
  if (cid === "paloalto-next-generation-firewall") return "net-paloalto";
  if (cid === "checkpoint-certified-security-administrator-ccsa") return "net-ccsa";
  if (cid === "check-point-certified-security-expert-ccse") return "net-ccse";
  if (cid === "ccie-security-v6") return "net-ccie";

  // Category fallback
  if (cslug === "artificial-intelligence") return "ai-intro";
  if (cslug === "digital-marketing") return "dm-expert";
  if (cslug === "cloud-computing") return "cloud-aws-ccp";
  if (cslug === "cyber-security") return "cyber-comptia";
  if (cslug === "network-security") return "net-ccna";

  return "ai-intro";
}

/**
 * Generates tailored, premium vector SVG paths for each course visual
 */
function getCourseVectorPaths(type) {
  switch (type) {
    case "ai-intro":
      return `
        <!-- Neural Intelligence Core -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="32" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="22" fill="rgba(255,255,255,0.2)" stroke="#C4B5FD" stroke-width="1.5" />
          <circle cx="0" cy="0" r="10" fill="#F59E0B" />
          <g stroke="url(#lineGrad)" stroke-width="2" stroke-linecap="round">
            <line x1="0" y1="-32" x2="0" y2="-75" /><line x1="0" y1="32" x2="0" y2="75" />
            <line x1="-32" y1="0" x2="-75" y2="0" /><line x1="32" y1="0" x2="75" y2="0" />
            <line x1="-22" y1="-22" x2="-55" y2="-55" /><line x1="22" y1="-22" x2="55" y2="-55" />
            <line x1="-22" y1="22" x2="-55" y2="55" /><line x1="22" y1="22" x2="55" y2="55" />
            <path d="M-55,-55 L0,-75 L55,-55 L75,0 L55,55 L0,75 L-55,55 L-75,0 Z" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 4" />
          </g>
          <g fill="#FFFFFF" stroke="#818CF8" stroke-width="2">
            <circle cx="0" cy="-75" r="10" fill="#EDE9FE" /><circle cx="0" cy="75" r="10" fill="#EDE9FE" />
            <circle cx="-75" cy="0" r="10" fill="#EDE9FE" /><circle cx="75" cy="0" r="10" fill="#EDE9FE" />
            <circle cx="-55" cy="-55" r="8" fill="#F59E0B" stroke="#FFFFFF" /><circle cx="55" cy="-55" r="8" fill="#FFFFFF" />
            <circle cx="-55" cy="55" r="8" fill="#FFFFFF" /><circle cx="55" cy="55" r="8" fill="#F59E0B" stroke="#FFFFFF" />
          </g>
        </g>
      `;

    case "ai-python":
      return `
        <!-- Python Programming for AI -->
        <g transform="translate(180, 180)">
          <path d="M-75,-40 L-95,-20 L-95,20 L-75,40" fill="none" stroke="#C4B5FD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
          <path d="M75,-40 L95,-20 L95,20 L75,40" fill="none" stroke="#C4B5FD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.8" />
          <path d="M-35,-45 C-35,-60 -15,-60 0,-60 L20,-60 C35,-60 45,-50 45,-35 L45,-20 L10,-20 C0,-20 -5,-15 -5,-5 L-5,10 L-35,10 C-45,10 -55,0 -55,-15 L-55,-30 C-55,-40 -45,-45 -35,-45 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="-25" cy="-45" r="3.5" fill="#4F46E5" />
          <path d="M35,45 C35,60 15,60 0,60 L-20,60 C-35,60 -45,50 -45,35 L-45,20 L-10,20 C0,20 5,15 5,5 L5,-10 L35,-10 C45,-10 55,0 55,15 L55,30 C55,40 45,45 35,45 Z" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="25" cy="45" r="3.5" fill="#78350F" />
          <circle cx="-70" cy="-65" r="5" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="70" cy="65" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "ai-datascience":
      return `
        <!-- Data Science with Python -->
        <g transform="translate(180, 180)">
          <path d="M-75,-65 L-75,55 L75,55" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2" stroke-linecap="round" />
          <rect x="-60" y="15" width="18" height="40" rx="3" fill="rgba(255,255,255,0.3)" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="-35" y="-15" width="18" height="70" rx="3" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="-10" y="-45" width="18" height="100" rx="3" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" filter="url(#heroGlow)" />
          <rect x="15" y="-5" width="18" height="60" rx="3" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="40" y="-30" width="18" height="85" rx="3" fill="rgba(255,255,255,0.3)" stroke="#FFFFFF" stroke-width="1.5" />
          <path d="M-65,30 Q-20,-60 10,-20 T75,-55" fill="none" stroke="#FDE68A" stroke-width="3" stroke-linecap="round" />
          <circle cx="-50" cy="5" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="-1" cy="-45" r="6" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2" />
          <circle cx="48" cy="-35" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "ai-ml":
      return `
        <!-- Machine Learning Decision Tree & Flow Network -->
        <g transform="translate(180, 180)">
          <g stroke="#C4B5FD" stroke-width="2" stroke-linecap="round">
            <line x1="0" y1="-65" x2="-55" y2="-10" /><line x1="0" y1="-65" x2="55" y2="-10" />
            <line x1="-55" y1="-10" x2="-75" y2="55" /><line x1="-55" y1="-10" x2="-25" y2="55" />
            <line x1="55" y1="-10" x2="25" y2="55" /><line x1="55" y1="-10" x2="75" y2="55" />
            <line x1="-55" y1="-10" x2="25" y2="55" stroke="rgba(255,255,255,0.25)" stroke-dasharray="3 3" />
            <line x1="55" y1="-10" x2="-25" y2="55" stroke="rgba(255,255,255,0.25)" stroke-dasharray="3 3" />
          </g>
          <circle cx="0" cy="-65" r="16" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="-65" r="6" fill="#F59E0B" />
          <circle cx="-55" cy="-10" r="14" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="55" cy="-10" r="14" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-75" cy="55" r="11" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
          <circle cx="-25" cy="55" r="11" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="25" cy="55" r="11" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
          <circle cx="75" cy="55" r="11" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;

    case "ai-deeplearning":
      return `
        <!-- Deep Learning 4-Layer Tensor Matrix -->
        <g transform="translate(180, 180)">
          <g stroke="rgba(255,255,255,0.22)" stroke-width="1.2">
            <line x1="-70" y1="-50" x2="-22" y2="-65" /><line x1="-70" y1="-50" x2="-22" y2="-22" /><line x1="-70" y1="-50" x2="-22" y2="22" /><line x1="-70" y1="-50" x2="-22" y2="65" />
            <line x1="-70" y1="0" x2="-22" y2="-65" /><line x1="-70" y1="0" x2="-22" y2="-22" /><line x1="-70" y1="0" x2="-22" y2="22" /><line x1="-70" y1="0" x2="-22" y2="65" />
            <line x1="-70" y1="50" x2="-22" y2="-65" /><line x1="-70" y1="50" x2="-22" y2="-22" /><line x1="-70" y1="50" x2="-22" y2="22" /><line x1="-70" y1="50" x2="-22" y2="65" />
            <line x1="-22" y1="-22" x2="25" y2="-45" /><line x1="-22" y1="-22" x2="25" y2="0" /><line x1="-22" y1="-22" x2="25" y2="45" />
            <line x1="-22" y1="22" x2="25" y2="-45" /><line x1="-22" y1="22" x2="25" y2="0" /><line x1="-22" y1="22" x2="25" y2="45" />
            <line x1="25" y1="-45" x2="70" y2="-20" /><line x1="25" y1="-45" x2="70" y2="20" />
            <line x1="25" y1="0" x2="70" y2="-20" /><line x1="25" y1="0" x2="70" y2="20" />
            <line x1="25" y1="45" x2="70" y2="-20" /><line x1="25" y1="45" x2="70" y2="20" />
          </g>
          <circle cx="-70" cy="-50" r="9" fill="#EDE9FE" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-70" cy="0" r="9" fill="#EDE9FE" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-70" cy="50" r="9" fill="#EDE9FE" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-22" cy="-65" r="9" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-22" cy="-22" r="11" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="-22" cy="22" r="11" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="-22" cy="65" r="9" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="25" cy="-45" r="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="25" cy="0" r="12" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="25" cy="45" r="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="70" cy="-20" r="10" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="70" cy="20" r="10" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
        </g>
      `;

    case "ai-nlp":
      return `
        <!-- Natural Language Processing (NLP) -->
        <g transform="translate(180, 180)">
          <path d="M-80,0 C-65,-40 -50,40 -35,-60 C-20,60 -5,-30 10,40 C25,-50 40,30 55,-20 C70,20 80,0 80,0" fill="none" stroke="url(#coreGrad)" stroke-width="3" stroke-linecap="round" />
          <path d="M-45,-45 L45,-45 C55,-45 65,-35 65,-25 L65,15 C65,25 55,35 45,35 L0,35 L-20,55 L-20,35 L-45,35 C-55,35 -65,25 -65,15 L-65,-25 C-65,-35 -55,-45 -45,-45 Z" fill="rgba(255,255,255,0.12)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <line x1="-40" y1="-20" x2="15" y2="-20" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
          <line x1="25" y1="-20" x2="40" y2="-20" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <line x1="-40" y1="-5" x2="-5" y2="-5" stroke="#EDE9FE" stroke-width="2.5" stroke-linecap="round" />
          <line x1="5" y1="-5" x2="40" y2="-5" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
          <line x1="-40" y1="10" x2="20" y2="10" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="-65" cy="-55" r="5" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="65" cy="-55" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="70" cy="45" r="5" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
        </g>
      `;

    case "ai-computervision":
      return `
        <!-- Computer Vision with AI -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="68" fill="rgba(255,255,255,0.06)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="6 4" />
          <path d="M-30,-25 L10,-45 L40,-15 L20,30 L-25,35 Z" fill="rgba(255,255,255,0.15)" stroke="#C4B5FD" stroke-width="1.5" />
          <circle cx="0" cy="0" r="18" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <path d="M-80,-55 L-80,-80 L-55,-80" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M55,-80 L80,-80 L80,-55" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M80,55 L80,80 L55,80" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M-55,80 L-80,80 L-80,55" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <line x1="-25" y1="0" x2="-8" y2="0" stroke="#FFFFFF" stroke-width="2" />
          <line x1="8" y1="0" x2="25" y2="0" stroke="#FFFFFF" stroke-width="2" />
          <line x1="0" y1="-25" x2="0" y2="-8" stroke="#FFFFFF" stroke-width="2" />
          <line x1="0" y1="8" x2="0" y2="25" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;

    case "ai-robotics":
      return `
        <!-- Reinforcement Learning & Robotics -->
        <g transform="translate(180, 180)">
          <path d="M-65,0 A65,65 0 1,1 65,0 A65,65 0 0,1 -45,45" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-dasharray="8 6" />
          <polygon points="-52,48 -38,58 -38,40" fill="#F59E0B" />
          <circle cx="-40" cy="40" r="18" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <line x1="-30" y1="30" x2="0" y2="-15" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" />
          <circle cx="0" cy="-15" r="14" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <line x1="10" y1="-15" x2="45" y2="-45" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
          <circle cx="45" cy="-45" r="10" fill="#EDE9FE" stroke="#FFFFFF" stroke-width="2" />
          <path d="M40,-55 C55,-65 65,-55 65,-45" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M55,-40 C65,-35 60,-25 50,-35" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <circle cx="70" cy="-50" r="4.5" fill="#FFFFFF" filter="url(#heroGlow)" />
        </g>
      `;

    case "ai-industry":
      return `
        <!-- AI Industry & Specialized Applications -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="48" fill="rgba(255,255,255,0.1)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="28" fill="url(#coreGrad)" stroke="#818CF8" stroke-width="2" />
          <polygon points="0,-12 10,0 0,12 -10,0" fill="#F59E0B" />
          <rect x="-6" y="-58" width="12" height="12" rx="2" fill="#FFFFFF" />
          <rect x="-6" y="46" width="12" height="12" rx="2" fill="#FFFFFF" />
          <rect x="-58" y="-6" width="12" height="12" rx="2" fill="#FFFFFF" />
          <rect x="46" y="-6" width="12" height="12" rx="2" fill="#FFFFFF" />
          <g transform="rotate(45)">
            <rect x="-6" y="-58" width="12" height="12" rx="2" fill="#F59E0B" />
            <rect x="-6" y="46" width="12" height="12" rx="2" fill="#F59E0B" />
            <rect x="-58" y="-6" width="12" height="12" rx="2" fill="#F59E0B" />
            <rect x="46" y="-6" width="12" height="12" rx="2" fill="#F59E0B" />
          </g>
          <circle cx="-75" cy="-60" r="8" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="75" cy="60" r="8" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
        </g>
      `;

    case "ai-tools":
      return `
        <!-- AI Tools & Frameworks -->
        <g transform="translate(180, 180)">
          <rect x="-55" y="-55" width="110" height="110" rx="18" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <rect x="-42" y="-42" width="36" height="36" rx="8" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <polygon points="-24,-33 -16,-24 -32,-24" fill="#6366F1" />
          <rect x="6" y="-42" width="36" height="36" rx="8" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="24" cy="-24" r="7" fill="#78350F" />
          <rect x="-42" y="6" width="36" height="36" rx="8" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <line x1="-30" y1="24" x2="-18" y2="24" stroke="#78350F" stroke-width="3" stroke-linecap="round" />
          <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <path d="M16,28 L24,18 L32,28" fill="none" stroke="#6366F1" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="0" cy="0" r="12" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
          <circle cx="0" cy="0" r="4" fill="#F59E0B" />
        </g>
      `;

    case "ai-responsible":
      return `
        <!-- Responsible AI & Ethics -->
        <g transform="translate(180, 180)">
          <line x1="0" y1="-65" x2="0" y2="60" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          <line x1="-35" y1="60" x2="35" y2="60" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          <line x1="-65" y1="-35" x2="65" y2="-35" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
          <circle cx="0" cy="-35" r="10" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <line x1="-65" y1="-35" x2="-80" y2="10" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
          <line x1="-65" y1="-35" x2="-50" y2="10" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
          <path d="M-90,10 Q-65,25 -40,10 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="-65" cy="5" r="6" fill="#6366F1" />
          <line x1="65" y1="-35" x2="50" y2="10" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
          <line x1="65" y1="-35" x2="80" y2="10" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" />
          <path d="M40,10 Q65,25 90,10 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="65" cy="5" r="6" fill="#F59E0B" />
        </g>
      `;

    case "ai-capstone":
      return `
        <!-- Capstone Projects Rocket -->
        <g transform="translate(180, 180)">
          <ellipse cx="0" cy="45" rx="65" ry="25" fill="rgba(255,255,255,0.1)" stroke="#C4B5FD" stroke-width="1.5" stroke-dasharray="4 4" />
          <path d="M0,-75 C20,-45 25,0 20,40 L-20,40 C-25,0 -20,-45 0,-75 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="-25" r="10" fill="#4F46E5" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-3" cy="-28" r="3" fill="#FFFFFF" opacity="0.8" />
          <path d="M-20,15 L-48,42 L-20,38 Z" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <path d="M20,15 L48,42 L20,38 Z" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <path d="M-12,42 Q0,75 12,42 Q0,58 -12,42 Z" fill="#F59E0B" stroke="#FDE68A" stroke-width="1.5" />
        </g>
      `;

    case "ai-expert":
      return `
        <!-- Artificial Intelligence Expert (Masters Crest) -->
        <g transform="translate(180, 180)">
          <polygon points="0,-75 60,-20 38,65 -38,65 -60,-20" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <g stroke="rgba(79, 70, 229, 0.4)" stroke-width="1.5">
            <line x1="0" y1="-75" x2="0" y2="65" />
            <line x1="-60" y1="-20" x2="60" y2="-20" />
            <line x1="0" y1="-75" x2="-20" y2="0" /><line x1="0" y1="-75" x2="20" y2="0" />
            <line x1="-20" y1="0" x2="-38" y2="65" /><line x1="20" y1="0" x2="38" y2="65" />
          </g>
          <circle cx="0" cy="0" r="14" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <polygon points="0,-6 2,-2 6,-2 3,1 4,5 0,3 -4,5 -3,1 -6,-2 -2,-2" fill="#FFFFFF" />
          <path d="M-70,10 C-80,40 -60,70 -35,80" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
          <path d="M70,10 C80,40 60,70 35,80" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
        </g>
      `;

    case "dm-seo":
      return `
        <!-- Search Engine Optimization -->
        <g transform="translate(180, 180)">
          <rect x="-70" y="-60" width="140" height="100" rx="10" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <line x1="-70" y1="-40" x2="70" y2="-40" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <circle cx="-15" cy="-5" r="32" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" stroke-width="3" />
          <line x1="8" y1="18" x2="35" y2="45" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" />
          <path d="M-45,20 L-25,5 L-5,15 L25,-25" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <polygon points="18,-28 32,-28 32,-14" fill="#F59E0B" />
          <circle cx="50" cy="-48" r="14" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <text x="50" y="-43" font-size="12" font-weight="bold" fill="#78350F" text-anchor="middle">#1</text>
        </g>
      `;

    case "dm-smm":
      return `
        <!-- Social Media Marketing -->
        <g transform="translate(180, 180)">
          <g stroke="rgba(255,255,255,0.35)" stroke-width="2" stroke-linecap="round">
            <line x1="0" y1="0" x2="-60" y2="-45" /><line x1="0" y1="0" x2="60" y2="-45" />
            <line x1="0" y1="0" x2="-60" y2="45" /><line x1="0" y1="0" x2="60" y2="45" />
          </g>
          <circle cx="0" cy="0" r="26" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <path d="M-8,-6 L4,-12 L4,12 L-8,6 Z" fill="#6366F1" />
          <rect x="-14" y="-5" width="6" height="10" rx="1" fill="#6366F1" />
          <circle cx="-60" cy="-45" r="16" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="60" cy="-45" r="16" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="-60" cy="45" r="14" fill="#EDE9FE" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="60" cy="45" r="14" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;

    case "dm-googleads":
      return `
        <!-- Google Ads & PPC Search Advertising -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="68" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" />
          <circle cx="0" cy="0" r="48" fill="rgba(255,255,255,0.1)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="28" fill="url(#coreGrad)" stroke="#818CF8" stroke-width="2" />
          <line x1="-75" y1="0" x2="-30" y2="0" stroke="#F59E0B" stroke-width="2" />
          <line x1="30" y1="0" x2="75" y2="0" stroke="#F59E0B" stroke-width="2" />
          <line x1="0" y1="-75" x2="0" y2="-30" stroke="#F59E0B" stroke-width="2" />
          <line x1="0" y1="30" x2="0" y2="75" stroke="#F59E0B" stroke-width="2" />
          <g transform="translate(12, 12)">
            <polygon points="0,0 0,32 8,24 16,36 22,32 14,20 24,20" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" />
          </g>
          <rect x="-65" y="-60" width="34" height="20" rx="4" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <text x="-48" y="-46" font-size="10" font-weight="bold" fill="#78350F" text-anchor="middle">AD</text>
        </g>
      `;

    case "dm-metaads":
      return `
        <!-- Meta Ads & Precision Targeting -->
        <g transform="translate(180, 180)">
          <polygon points="-65,-60 65,-60 30,20 -30,20" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <rect x="-18" y="20" width="36" height="35" rx="4" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <line x1="-50" y1="-35" x2="50" y2="-35" stroke="rgba(79,70,229,0.35)" stroke-width="1.5" />
          <circle cx="0" cy="-35" r="8" fill="#FFFFFF" />
          <circle cx="-25" cy="-45" r="5" fill="#F59E0B" /><circle cx="25" cy="-45" r="5" fill="#F59E0B" />
          <polygon points="0,32 6,40 0,48 -6,40" fill="#FFFFFF" />
        </g>
      `;

    case "dm-email":
      return `
        <!-- Email Marketing & CRM -->
        <g transform="translate(180, 180)">
          <rect x="-65" y="-35" width="130" height="80" rx="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <polygon points="-65,-35 0,15 65,-35" fill="rgba(255,255,255,0.25)" stroke="#FFFFFF" stroke-width="2" />
          <rect x="-45" y="-65" width="90" height="50" rx="6" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
          <line x1="-32" y1="-50" x2="10" y2="-50" stroke="#6366F1" stroke-width="3" stroke-linecap="round" />
          <line x1="-32" y1="-38" x2="32" y2="-38" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
          <path d="M75,-25 C85,-10 85,10 75,25" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
        </g>
      `;

    case "dm-webdesign":
      return `
        <!-- Professional Website Design -->
        <g transform="translate(180, 180)">
          <rect x="-70" y="-55" width="140" height="105" rx="8" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <line x1="-70" y1="-35" x2="70" y2="-35" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <circle cx="-58" cy="-45" r="3" fill="#EF4444" /><circle cx="-50" cy="-45" r="3" fill="#F59E0B" /><circle cx="-42" cy="-45" r="3" fill="#10B981" />
          <rect x="-58" y="-22" width="70" height="28" rx="4" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1" />
          <rect x="20" y="-22" width="38" height="60" rx="4" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1" />
          <path d="M-60,55 C-30,20 20,80 60,35" fill="none" stroke="#FDE68A" stroke-width="3" stroke-linecap="round" />
          <circle cx="0" cy="50" r="5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;

    case "dm-video":
      return `
        <!-- AI Video Editing -->
        <g transform="translate(180, 180)">
          <rect x="-70" y="-45" width="140" height="90" rx="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <g fill="#4F46E5">
            <rect x="-60" y="-38" width="10" height="8" rx="1" /><rect x="-42" y="-38" width="10" height="8" rx="1" /><rect x="-24" y="-38" width="10" height="8" rx="1" /><rect x="-6" y="-38" width="10" height="8" rx="1" /><rect x="12" y="-38" width="10" height="8" rx="1" /><rect x="30" y="-38" width="10" height="8" rx="1" /><rect x="48" y="-38" width="10" height="8" rx="1" />
            <rect x="-60" y="30" width="10" height="8" rx="1" /><rect x="-42" y="30" width="10" height="8" rx="1" /><rect x="-24" y="30" width="10" height="8" rx="1" /><rect x="-6" y="30" width="10" height="8" rx="1" /><rect x="12" y="30" width="10" height="8" rx="1" /><rect x="30" y="30" width="10" height="8" rx="1" /><rect x="48" y="30" width="10" height="8" rx="1" />
          </g>
          <circle cx="0" cy="0" r="22" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <polygon points="-6,-10 -6,10 10,0" fill="#FFFFFF" />
          <path d="M55,-60 L60,-50 L70,-45 L60,-40 L55,-30 L50,-40 L40,-45 L50,-50 Z" fill="#FDE68A" filter="url(#heroGlow)" />
        </g>
      `;

    case "dm-analytics":
      return `
        <!-- Web Analytics Intelligence -->
        <g transform="translate(180, 180)">
          <path d="M-60,30 A65,65 0 1,1 60,30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="12" stroke-linecap="round" />
          <path d="M-60,30 A65,65 0 0,1 30,-55" fill="none" stroke="url(#coreGrad)" stroke-width="12" stroke-linecap="round" filter="url(#heroGlow)" />
          <path d="M30,-55 A65,65 0 0,1 60,30" fill="none" stroke="url(#amberGrad)" stroke-width="12" stroke-linecap="round" />
          <rect x="-35" y="-5" width="14" height="40" rx="2" fill="#FFFFFF" opacity="0.8" />
          <rect x="-15" y="-25" width="14" height="60" rx="2" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="1" />
          <rect x="5" y="-45" width="14" height="80" rx="2" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1" />
          <circle cx="0" cy="35" r="8" fill="#FFFFFF" stroke="#818CF8" stroke-width="2" />
          <line x1="0" y1="35" x2="35" y2="-25" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round" />
        </g>
      `;

    case "dm-expert":
      return `
        <!-- Digital Marketing Expert (Masters Crest) -->
        <g transform="translate(180, 180)">
          <polygon points="0,-75 65,-30 45,60 0,75 -45,60 -65,-30" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <path d="M-30,30 L-10,10 L10,25 L35,-25" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <polygon points="25,-32 42,-30 38,-15" fill="#F59E0B" />
          <circle cx="0" cy="-35" r="14" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <polygon points="0,-42 3,-36 8,-36 4,-32 6,-26 0,-29 -6,-26 -4,-32 -8,-36 -3,-36" fill="#FFFFFF" />
          <path d="M-72,0 C-82,35 -60,65 -35,75" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
          <path d="M72,0 C82,35 60,65 35,75" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round" />
        </g>
      `;

    case "cloud-aws-ccp":
    case "cloud-aws-saa":
    case "cloud-aws-aip":
    case "cloud-aws-sec":
      return `
        <!-- AWS Cloud Infrastructure -->
        <g transform="translate(180, 180)">
          <path d="M-55,20 C-75,20 -80,-5 -65,-20 C-70,-45 -40,-60 -15,-50 C0,-70 45,-65 55,-40 C75,-40 85,-15 70,10 C80,25 70,35 50,35 L-50,35 C-65,35 -65,20 -55,20 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <rect x="-35" y="-15" width="22" height="22" rx="4" fill="#4F46E5" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="12" y="-15" width="22" height="22" rx="4" fill="#4F46E5" stroke="#FFFFFF" stroke-width="1.5" />
          <rect x="-12" y="-35" width="24" height="24" rx="4" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <path d="M-40,48 Q0,75 40,48" fill="none" stroke="#F59E0B" stroke-width="4" stroke-linecap="round" />
          <polygon points="36,44 48,50 42,60" fill="#F59E0B" />
          <circle cx="-65" cy="-55" r="7" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="65" cy="-55" r="7" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "cloud-azure-az900":
    case "cloud-azure-az104":
    case "cloud-azure-az500":
      return `
        <!-- Microsoft Azure Cloud Architecture -->
        <g transform="translate(180, 180)">
          <path d="M-50,50 L-10,-55 C-5,-65 10,-65 15,-55 L55,50 C60,60 50,65 40,65 L-40,65 C-50,65 -55,58 -50,50 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <path d="M-10,-55 L15,15 L-30,65" fill="#4F46E5" opacity="0.35" />
          <path d="M15,-55 L40,65 L0,25 Z" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="-65" cy="-20" r="8" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="65" cy="-20" r="8" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "cloud-gcp":
      return `
        <!-- Google Cloud Professional Architect -->
        <g transform="translate(180, 180)">
          <path d="M-45,25 C-65,25 -75,0 -60,-20 C-65,-45 -35,-60 -10,-45 C5,-65 45,-60 55,-35 C75,-35 80,-10 65,15 C75,30 60,40 45,40 L-40,40 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <polygon points="0,-30 16,-20 16,0 0,10 -16,0 -16,-20" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="1.5" />
          <polygon points="-30,0 -18,7 -18,22 -30,30 -42,22 -42,7" fill="#4F46E5" stroke="#FFFFFF" stroke-width="1" />
          <polygon points="30,0 42,7 42,22 30,30 18,22 18,7" fill="#4F46E5" stroke="#FFFFFF" stroke-width="1" />
          <line x1="-18" y1="15" x2="0" y2="5" stroke="#FFFFFF" stroke-width="2" />
          <line x1="18" y1="15" x2="0" y2="5" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;

    case "cloud-k8s":
      return `
        <!-- Certified Kubernetes Administrator (CKA) -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="50" fill="rgba(255,255,255,0.12)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="24" fill="url(#coreGrad)" stroke="#4F46E5" stroke-width="2" />
          <circle cx="0" cy="0" r="8" fill="#F59E0B" />
          <g stroke="#FFFFFF" stroke-width="4" stroke-linecap="round">
            <line x1="0" y1="-24" x2="0" y2="-68" /><line x1="21" y1="-10" x2="55" y2="-38" /><line x1="24" y1="12" x2="65" y2="22" /><line x1="10" y1="24" x2="28" y2="65" />
            <line x1="-10" y1="24" x2="-28" y2="65" /><line x1="-24" y1="12" x2="-65" y2="22" /><line x1="-21" y1="-10" x2="-55" y2="-38" />
          </g>
          <g fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5">
            <circle cx="0" cy="-68" r="6" /><circle cx="55" cy="-38" r="6" /><circle cx="65" cy="22" r="6" /><circle cx="28" cy="65" r="6" /><circle cx="-28" cy="65" r="6" /><circle cx="-65" cy="22" r="6" /><circle cx="-55" cy="-38" r="6" />
          </g>
        </g>
      `;

    case "cyber-cyberops":
      return `
        <!-- Cisco CyberOps SOC Radar -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="65" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="45" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" />
          <line x1="-65" y1="0" x2="65" y2="0" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <line x1="0" y1="-65" x2="0" y2="65" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <path d="M0,0 L45,-45 A65,65 0 0,0 0,-65 Z" fill="url(#coreGrad)" opacity="0.6" />
          <line x1="0" y1="0" x2="45" y2="-45" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="30" cy="-30" r="5.5" fill="#EF4444" stroke="#FFFFFF" stroke-width="1.5" />
          <circle cx="-35" cy="20" r="4.5" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "cyber-comptia":
      return `
        <!-- CompTIA Security+ Shield & Lock -->
        <g transform="translate(180, 180)">
          <path d="M0,-70 L55,-40 C55,25 35,60 0,75 C-35,60 -55,25 -55,-40 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <path d="M0,-55 L40,-30 C40,18 25,48 0,60 C-25,48 -40,18 -40,-30 Z" fill="rgba(79, 70, 229, 0.2)" stroke="#C4B5FD" stroke-width="1.5" />
          <path d="M-15,-5 C-15,-22 15,-22 15,-5 L15,10 L-15,10 Z" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" />
          <rect x="-24" y="0" width="48" height="36" rx="6" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="0" cy="15" r="4" fill="#78350F" />
          <line x1="0" y1="19" x2="0" y2="27" stroke="#78350F" stroke-width="3" stroke-linecap="round" />
        </g>
      `;

    case "cyber-ceh":
      return `
        <!-- Certified Ethical Hacker (CEH) -->
        <g transform="translate(180, 180)">
          <rect x="-70" y="-55" width="140" height="105" rx="8" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <line x1="-70" y1="-32" x2="70" y2="-32" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" />
          <circle cx="-58" cy="-43" r="3" fill="#EF4444" /><circle cx="-50" cy="-43" r="3" fill="#F59E0B" /><circle cx="-42" cy="-43" r="3" fill="#10B981" />
          <path d="M-52,-15 L-38,-2 L-52,11" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
          <line x1="-30" y1="11" x2="-10" y2="11" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
          <g transform="translate(32, 10)">
            <path d="M0,-25 L22,-12 C22,10 12,25 0,30 C-12,25 -22,10 -22,-12 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
            <path d="M-7,2 L-2,7 L8,-3" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      `;

    case "cyber-cpent":
      return `
        <!-- CPENT Advanced Penetration Testing Range -->
        <g transform="translate(180, 180)">
          <polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <g stroke="#C4B5FD" stroke-width="2" stroke-linecap="round">
            <line x1="-35" y1="-20" x2="0" y2="-40" /><line x1="0" y1="-40" x2="35" y2="-20" />
            <line x1="35" y1="-20" x2="35" y2="20" /><line x1="35" y1="20" x2="0" y2="40" />
            <line x1="0" y1="40" x2="-35" y2="20" /><line x1="-35" y1="20" x2="-35" y2="-20" />
          </g>
          <circle cx="0" cy="0" r="18" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <polygon points="0,-8 6,-2 0,4 -6,-2" fill="#78350F" />
          <circle cx="-35" cy="-20" r="7" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="0" cy="-40" r="8" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" />
          <circle cx="35" cy="-20" r="7" fill="#FFFFFF" stroke="#818CF8" stroke-width="1.5" />
          <circle cx="35" cy="20" r="7" fill="#F59E0B" stroke="#FFFFFF" stroke-width="1.5" />
        </g>
      `;

    case "cyber-cisa":
      return `
        <!-- CISA Information Systems Auditing -->
        <g transform="translate(180, 180)">
          <rect x="-55" y="-50" width="110" height="115" rx="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <rect x="-24" y="-62" width="48" height="18" rx="4" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <g transform="translate(-40, -25)">
            <circle cx="8" cy="8" r="6" fill="#10B981" />
            <path d="M5,8 L7,10 L11,6" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
            <line x1="20" y1="8" x2="68" y2="8" stroke="#4F46E5" stroke-width="2.5" stroke-linecap="round" />
            <circle cx="8" cy="28" r="6" fill="#10B981" />
            <path d="M5,28 L7,30 L11,26" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />
            <line x1="20" y1="28" x2="68" y2="28" stroke="#4F46E5" stroke-width="2.5" stroke-linecap="round" />
          </g>
          <g transform="translate(35, 25)">
            <circle cx="0" cy="0" r="22" fill="rgba(255,255,255,0.25)" stroke="#FFFFFF" stroke-width="3" filter="url(#heroGlow)" />
            <line x1="16" y1="16" x2="35" y2="35" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
            <text x="0" y="5" font-size="12" font-weight="bold" fill="#78350F" text-anchor="middle">✓</text>
          </g>
        </g>
      `;

    case "cyber-chfi":
      return `
        <!-- CHFI Digital Forensics & Investigation -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="65" fill="rgba(255,255,255,0.08)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="48" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="8 6" />
          <circle cx="0" cy="0" r="20" fill="url(#coreGrad)" stroke="#4F46E5" stroke-width="2" />
          <circle cx="0" cy="0" r="6" fill="#F59E0B" />
          <path d="M-60,-55 L-15,-15 L18,-35" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
          <circle cx="-60" cy="-55" r="10" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
          <g transform="translate(30, 25)">
            <circle cx="0" cy="0" r="24" fill="rgba(255,255,255,0.2)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
            <line x1="18" y1="18" x2="36" y2="36" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" />
            <text x="0" y="-4" font-size="8" font-family="monospace" font-weight="bold" fill="#FDE68A" text-anchor="middle">1011</text>
            <text x="0" y="8" font-size="8" font-family="monospace" font-weight="bold" fill="#FFFFFF" text-anchor="middle">0100</text>
          </g>
        </g>
      `;

    case "cyber-cissp":
      return `
        <!-- CISSP Information Security Leadership -->
        <g transform="translate(180, 180)">
          <path d="M0,-75 L60,-40 C60,30 35,65 0,80 C-35,65 -60,30 -60,-40 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <g stroke="rgba(79,70,229,0.35)" stroke-width="2">
            <line x1="0" y1="-50" x2="0" y2="50" /><line x1="-50" y1="0" x2="50" y2="0" />
            <line x1="-35" y1="-35" x2="35" y2="35" /><line x1="-35" y1="35" x2="35" y2="-35" />
          </g>
          <polygon points="0,-24 7,-8 24,0 7,8 0,24 -7,8 -24,0 -7,-8" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="5" fill="#FFFFFF" />
          <circle cx="0" cy="-52" r="3.5" fill="#F59E0B" /><circle cx="52" cy="0" r="3.5" fill="#F59E0B" />
          <circle cx="0" cy="52" r="3.5" fill="#F59E0B" /><circle cx="-52" cy="0" r="3.5" fill="#F59E0B" />
        </g>
      `;

    case "cyber-expert":
      return `
        <!-- Cyber Security Expert (Grand Master Crest) -->
        <g transform="translate(180, 180)">
          <path d="M0,-80 L65,-40 C65,35 40,70 0,85 C-40,70 -65,35 -65,-40 Z" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="3" filter="url(#heroGlow)" />
          <circle cx="0" cy="-5" r="38" fill="rgba(79,70,229,0.25)" stroke="#C4B5FD" stroke-width="1.5" />
          <polygon points="0,-22 6,-8 20,-2 8,8 10,22 0,14 -10,22 -8,8 -20,-2 -6,-8" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <path d="M-72,5 C-85,45 -60,75 -35,85" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M72,5 C85,45 60,75 35,85" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
        </g>
      `;

    case "net-ccna":
    case "net-ccnp":
      return `
        <!-- Cisco Network Security & Switch Fabric -->
        <g transform="translate(180, 180)">
          <ellipse cx="0" cy="-35" rx="55" ry="18" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <path d="M-55,-35 L-55,30 C-55,42 55,42 55,30 L55,-35" fill="rgba(255,255,255,0.12)" stroke="#FFFFFF" stroke-width="2.5" />
          <ellipse cx="0" cy="30" rx="55" ry="18" fill="none" stroke="#C4B5FD" stroke-width="1.5" />
          <g stroke="#4F46E5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="-30" y1="-35" x2="-8" y2="-35" /><polygon points="-8,-39 0,-35 -8,-31" fill="#4F46E5" />
            <line x1="30" y1="-35" x2="8" y2="-35" /><polygon points="8,-39 0,-35 8,-31" fill="#4F46E5" />
          </g>
          <g transform="translate(0, 15)">
            <path d="M0,-18 L20,-8 C20,12 12,24 0,28 C-12,24 -20,12 -20,-8 Z" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
            <circle cx="0" cy="5" r="3.5" fill="#78350F" />
          </g>
        </g>
      `;

    case "net-paloalto":
      return `
        <!-- Palo Alto Next-Generation Firewall (PAN-OS App-ID) -->
        <g transform="translate(180, 180)">
          <rect x="-65" y="-45" width="130" height="90" rx="10" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <g stroke="rgba(79,70,229,0.3)" stroke-width="1.5">
            <line x1="-65" y1="-20" x2="65" y2="-20" /><line x1="-65" y1="5" x2="65" y2="5" /><line x1="-65" y1="30" x2="65" y2="30" />
            <line x1="-30" y1="-45" x2="-30" y2="-20" /><line x1="15" y1="-45" x2="15" y2="-20" />
            <line x1="-50" y1="-20" x2="-50" y2="5" /><line x1="-5" y1="-20" x2="-5" y2="5" /><line x1="40" y1="-20" x2="40" y2="5" />
          </g>
          <circle cx="0" cy="-5" r="22" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <path d="M0,-14 C6,-8 10,-2 6,6 C2,12 -6,10 -8,4 C-10,-2 -4,-8 0,-14 Z" fill="#FFFFFF" />
          <g fill="#10B981">
            <circle cx="-48" cy="36" r="3" /><circle cx="-36" cy="36" r="3" /><circle cx="-24" cy="36" r="3" />
            <circle cx="24" cy="36" r="3" /><circle cx="36" cy="36" r="3" /><circle cx="48" cy="36" r="3" />
          </g>
        </g>
      `;

    case "net-ccsa":
    case "net-ccse":
      return `
        <!-- Check Point Security Gateway & ClusterXL -->
        <g transform="translate(180, 180)">
          <rect x="-60" y="-35" width="52" height="70" rx="8" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <rect x="8" y="-35" width="52" height="70" rx="8" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <path d="M-8,0 L8,0" stroke="#F59E0B" stroke-width="4" stroke-dasharray="2 2" />
          <circle cx="-34" cy="-15" r="5" fill="#10B981" /><circle cx="-34" cy="5" r="5" fill="#10B981" /><circle cx="-34" cy="22" r="5" fill="#F59E0B" />
          <circle cx="34" cy="-15" r="5" fill="#10B981" /><circle cx="34" cy="5" r="5" fill="#10B981" /><circle cx="34" cy="22" r="5" fill="#F59E0B" />
          <g transform="translate(0, -45)">
            <circle cx="0" cy="0" r="16" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
            <path d="M-5,-1 L-1,4 L7,-4" fill="none" stroke="#78350F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      `;

    case "net-ccie":
      return `
        <!-- Cisco CCIE Security V6 (Elite Masters Crest) -->
        <g transform="translate(180, 180)">
          <polygon points="0,-80 65,-35 45,65 0,80 -45,65 -65,-35" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="3" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="35" fill="none" stroke="rgba(79,70,229,0.3)" stroke-width="2" stroke-dasharray="5 5" />
          <circle cx="0" cy="0" r="20" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" filter="url(#heroGlow)" />
          <polygon points="0,-12 3,-4 11,-4 5,2 7,10 0,5 -7,10 -5,2 -11,-4 -3,-4" fill="#FFFFFF" />
          <path d="M-72,5 C-85,42 -60,75 -35,85" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
          <path d="M72,5 C85,42 60,75 35,85" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
        </g>
      `;

    default:
      return `
        <!-- Default Training Excellence Emblem -->
        <g transform="translate(180, 180)">
          <circle cx="0" cy="0" r="55" fill="url(#coreGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="url(#heroGlow)" />
          <circle cx="0" cy="0" r="38" fill="none" stroke="rgba(79,70,229,0.35)" stroke-width="2" stroke-dasharray="6 4" />
          <polygon points="0,-22 6,-8 20,-2 8,8 10,22 0,14 -10,22 -8,8 -20,-2 -6,-8" fill="url(#amberGrad)" stroke="#FFFFFF" stroke-width="2" />
        </g>
      `;
  }
}

/**
 * Builds the complete vector composition wrapper for the course hero section
 */
function renderCourseHeroVisual(courseData) {
  if (!courseData) return "";

  const courseId = courseData.id || "";
  const categorySlug = courseData.categorySlug || "";
  const title = courseData.title || "";
  const visualType = getCourseVisualType(courseId, categorySlug, title);
  const vectorContent = getCourseVectorPaths(visualType);
  const root = window.location.pathname.includes("/courses/") ? "../../" : "./";
  const imageSrc = `${root}assets/${courseId}/course-icon.png`;

  return `
    <div class="course-hero-visual-wrapper relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[420px] aspect-square flex items-center justify-center pointer-events-none select-none">
      
      <!-- Ambient Radial Backlight Glow -->
      <div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div class="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-purple-400/25 via-indigo-300/15 to-amber-300/15 blur-2xl"></div>
      </div>

      <!-- Subtle Abstract Orbital Rings -->
      <svg class="absolute inset-0 w-full h-full animate-hero-orbit opacity-70" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="180" cy="180" r="165" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1.5" stroke-dasharray="6 8" />
        <circle cx="180" cy="180" r="130" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1" />
        <circle cx="180" cy="180" r="95" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1.5" stroke-dasharray="4 6" />
        
        <!-- Orbital Decorative Spark Nodes -->
        <circle cx="180" cy="15" r="3.5" fill="#F59E0B" opacity="0.9" />
        <circle cx="310" cy="180" r="2.5" fill="#E0E7FF" opacity="0.8" />
        <circle cx="85" cy="275" r="3" fill="#C4B5FD" opacity="0.85" />
        <circle cx="50" cy="180" r="2.5" fill="#F59E0B" opacity="0.75" />
      </svg>

      <!-- Main Course-Specific Floating PNG -->
      <div class="relative z-10 w-full h-full flex items-center justify-center animate-hero-subtle-float">
        <img
          src="${imageSrc}"
          alt="${title} course visual"
          class="relative z-10 w-full h-full max-w-[220px] max-h-[220px] sm:max-w-[270px] sm:max-h-[270px] lg:max-w-[340px] lg:max-h-[340px] object-contain"
          width="340"
          height="340"
          loading="eager"
          decoding="async"
          onerror="this.classList.add('hidden'); this.nextElementSibling.classList.remove('hidden')"
        />

        <!-- Existing course vector is retained only as a missing-asset fallback. -->
        <svg class="hidden absolute inset-0 m-auto w-full h-full max-w-[220px] max-h-[220px] sm:max-w-[270px] sm:max-h-[270px] lg:max-w-[320px] lg:max-h-[320px]" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} fallback visual">
          <defs>
            <!-- Core White-to-Lavender Gradient -->
            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.98" />
              <stop offset="60%" stop-color="#EDE9FE" stop-opacity="0.92" />
              <stop offset="100%" stop-color="#C4B5FD" stop-opacity="0.85" />
            </linearGradient>

            <!-- Warm Amber Accent Gradient -->
            <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FDE68A" />
              <stop offset="100%" stop-color="#F59E0B" />
            </linearGradient>

            <!-- Line Synapse Gradient -->
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#818CF8" stop-opacity="0.4" />
            </linearGradient>

            <!-- Restrained Soft Glow Filter -->
            <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#1E1B4B" flood-opacity="0.3" />
              <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#A78BFA" flood-opacity="0.25" />
            </filter>
          </defs>

          ${vectorContent}
        </svg>
      </div>

    </div>
  `;
}

/**
 * 1. Course Hero Section with Left Course Content & Right Visual Emblem
 */
function renderCourseHero(data) {
  const h = data.hero || {};
  const breadcrumbs = data.breadcrumbs || [];

  const breadcrumbsHtml = breadcrumbs
    .map((b, idx) => {
      const isLast = idx === breadcrumbs.length - 1;
      if (isLast) {
        return `<span class="text-white font-medium" aria-current="page">${b.label}</span>`;
      }
      return `
        <a href="${b.href}" class="hover:text-amber-300 transition-colors">${b.label}</a>
        <span class="text-purple-300/60" aria-hidden="true">/</span>
      `;
    })
    .join("");

  const highlightsHtml = (h.highlights || [])
    .map((hl) => {
      return `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-purple-100 font-medium">
          <svg class="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${hl}</span>
        </li>
      `;
    })
    .join("");

  const badgeHtml = h.badge
    ? `
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm">
        <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
        <span>${h.badge}</span>
      </div>
    `
    : "";

  return `
    <!-- 1. COURSE HERO SECTION -->
    <section class="relative bg-gradient-to-r from-[#4B3294] via-[#52369E] to-[#5B3EA9] text-white py-12 sm:py-16 lg:py-20 overflow-hidden" aria-label="Course Header">
      
      <!-- Atmospheric Glow -->
      <div class="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div class="absolute -top-20 -right-20 w-96 h-96 bg-purple-400/15 blur-3xl rounded-full"></div>
        <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-950/30 blur-3xl rounded-full"></div>
        <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <!-- Breadcrumbs Navigation -->
        <nav class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-purple-200 mb-6" aria-label="Breadcrumb">
          ${breadcrumbsHtml}
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Left Column: Course Details (~68-70% / 8 cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            ${badgeHtml}

            <!-- Course Title -->
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
              ${data.title}
            </h1>

            <!-- Course Exact Introduction -->
            <p class="text-sm sm:text-base lg:text-lg text-purple-100 font-normal leading-relaxed">
              ${h.description}
            </p>

            <!-- Key Course Highlights -->
            <ul class="space-y-2.5 pt-2">
              ${highlightsHtml}
            </ul>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-4">
              <button 
                type="button" 
                data-course-modal-trigger
                class="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all cursor-pointer"
              >
                ${h.primaryCtaText || "Enquire Now"}
              </button>
              
              <a 
                href="${h.secondaryCtaHref || "#course-overview"}" 
                class="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base transition-all cursor-pointer"
              >
                ${h.secondaryCtaText || "View Course Syllabus"}
              </a>
            </div>

          </div>

          <!-- Right Column: Course-Specific Premium Visual (~32-30% / 4 cols) -->
          <div class="flex lg:col-span-4 items-center justify-center relative select-none pointer-events-none" aria-hidden="true">
            ${renderCourseHeroVisual(data)}
          </div>

        </div>

      </div>
    </section>
  `;
}

/**
 * Reusable Course Enquiry Form Component
 * Used in both sidebar placement and modal placement
 */
function renderCourseEnquiryForm(data, options = {}) {
  const isModal = !!options.isModal;
  const prefix = options.idPrefix || (isModal ? "modal" : "sidebar");
  const title = (data && data.title) || "Course";
  const category = (data && data.category) || "";
  const slug = (data && (data.id || data.slug)) || "";

  return `
    <div class="${isModal ? "" : "bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200/90"}">
      
      <div class="mb-5 pb-3 border-b border-slate-100 ${isModal ? "pr-8" : ""}">
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-purple-50 text-[#45318A] border border-purple-200/60 mb-1.5">
          Direct Admissions
        </span>
        <h3 id="${prefix}-enquiry-heading" class="text-xl font-extrabold text-slate-900 leading-snug">
          ${isModal ? "Enquire: " + title : "Contact Us"}
        </h3>
        <p class="text-xs text-slate-500 mt-0.5">Enquire for fees, upcoming batch dates & written job guarantee.</p>
      </div>

      <form id="${prefix}-course-enquiry-form" class="course-enquiry-form space-y-4" data-placement="${prefix}">
        
        <!-- Hidden Course Context Fields -->
        <input type="hidden" name="courseTitle" value="${title}">
        <input type="hidden" name="courseSlug" value="${slug}">
        <input type="hidden" name="courseCategory" value="${category}">
        <input type="hidden" name="enquirySource" value="${prefix}">

        <!-- Who Will Be Funding The Course? -->
        <div class="space-y-2">
          <label class="block text-xs font-bold text-slate-700 tracking-wider uppercase">
            WHO WILL BE FUNDING THE COURSE?
          </label>
          <div class="grid grid-cols-3 gap-2">
            <label class="cursor-pointer flex h-full">
              <input type="radio" name="funding_${prefix}" value="employer" checked class="peer sr-only">
              <div class="px-2.5 py-2 text-center text-xs font-medium rounded-lg border border-slate-200 text-slate-700 bg-slate-50 peer-checked:bg-[#45318A] peer-checked:text-white peer-checked:border-[#45318A] transition-all flex items-center justify-center min-h-[42px] h-full w-full overflow-hidden">
                My employer
              </div>
            </label>
            <label class="cursor-pointer flex h-full">
              <input type="radio" name="funding_${prefix}" value="self" class="peer sr-only">
              <div class="px-2.5 py-2 text-center text-xs font-medium rounded-lg border border-slate-200 text-slate-700 bg-slate-50 peer-checked:bg-[#45318A] peer-checked:text-white peer-checked:border-[#45318A] transition-all flex items-center justify-center min-h-[42px] h-full w-full overflow-hidden">
                I will
              </div>
            </label>
            <label class="cursor-pointer flex h-full">
              <input type="radio" name="funding_${prefix}" value="not_sure" class="peer sr-only">
              <div class="px-2.5 py-2 text-center text-xs font-medium rounded-lg border border-slate-200 text-slate-700 bg-slate-50 peer-checked:bg-[#45318A] peer-checked:text-white peer-checked:border-[#45318A] transition-all flex items-center justify-center min-h-[42px] h-full w-full overflow-hidden">
                Not sure
              </div>
            </label>
          </div>
        </div>

        <!-- Name* -->
        <div>
          <label for="${prefix}-enquiry-name" class="block text-xs font-semibold text-slate-700 mb-1">Name*</label>
          <input 
            type="text" 
            id="${prefix}-enquiry-name" 
            name="name"
            required 
            placeholder="Enter your name" 
            class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#45318A] focus:border-transparent transition-all bg-white"
          />
        </div>

        <!-- Company Email* -->
        <div>
          <label for="${prefix}-enquiry-email" class="block text-xs font-semibold text-slate-700 mb-1">Company Email*</label>
          <input 
            type="email" 
            id="${prefix}-enquiry-email" 
            name="email"
            required 
            placeholder="name@company.com" 
            class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#45318A] focus:border-transparent transition-all bg-white"
          />
        </div>

        <!-- Mobile* with Country Code & Flag Selector -->
        <div class="relative z-20">
          <label for="${prefix}-enquiry-phone" class="block text-xs font-semibold text-slate-700 mb-1">Mobile*</label>
          <div class="flex items-stretch rounded-lg border border-slate-300 focus-within:ring-2 focus-within:ring-[#45318A] focus-within:border-transparent overflow-visible bg-white relative">
            <!-- Embedded Country Selector Component -->
            <div id="${prefix}-country-selector" data-country-selector data-default="in" data-input-name="countryCode" class="shrink-0"></div>
            <div class="w-px h-5 bg-slate-200 shrink-0 self-center"></div>
            <input 
              type="tel" 
              id="${prefix}-enquiry-phone" 
              name="phone"
              required 
              placeholder="Mobile Number*" 
              class="w-full px-3 py-2.5 border-0 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 rounded-r-lg bg-transparent"
            />
          </div>
        </div>

        <!-- Message (Optional) -->
        <div>
          <label for="${prefix}-enquiry-message" class="block text-xs font-semibold text-slate-700 mb-1">Message (Optional)</label>
          <textarea 
            id="${prefix}-enquiry-message" 
            name="message"
            rows="2" 
            placeholder="Tell us about your learning goals or batch timing..." 
            class="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#45318A] focus:border-transparent transition-all bg-white resize-none"
          ></textarea>
        </div>

        <!-- Disclaimer Text -->
        <p class="text-[11px] text-slate-500 leading-relaxed">
          By submitting your details you agree to be contacted by TechAcademy regarding course information and promotions.
        </p>

        <!-- Submit CTA Button -->
        <div>
          <button 
            type="submit" 
            id="${prefix}-enquiry-submit-btn"
            class="w-full py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <span>Enquire Now</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

        <!-- Feedback confirmation banner -->
        <div id="${prefix}-enquiry-success-msg" class="hidden p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-medium text-center">
          ✓ Thank you! An admissions consultant will get in touch with you shortly.
        </div>
      </form>
    </div>
  `;
}

/**
 * Contextual SVG Icon for Course Benefit Cards
 */
function getBenefitIconSvg(title, desc, index) {
  const combined = ((title || "") + " " + (desc || "")).toLowerCase();

  // 1. Roles / Career / Leadership / Opportunities
  if (
    combined.includes("role") ||
    combined.includes("career") ||
    combined.includes("job") ||
    combined.includes("engineer") ||
    combined.includes("developer") ||
    combined.includes("specialist") ||
    combined.includes("consultant") ||
    combined.includes("lead")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    `;
  }

  // 2. Salary / High Demand / Compensation / ROI / Value
  if (
    combined.includes("salary") ||
    combined.includes("compensation") ||
    combined.includes("package") ||
    combined.includes("earning") ||
    combined.includes("growth") ||
    combined.includes("lpa") ||
    combined.includes("$") ||
    combined.includes("roi") ||
    combined.includes("demand")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    `;
  }

  // 3. Global Opportunities / Worldwide / Industry
  if (
    combined.includes("global") ||
    combined.includes("international") ||
    combined.includes("worldwide") ||
    combined.includes("enterprise") ||
    combined.includes("abroad") ||
    combined.includes("network")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke-width="1.8"></circle>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
      </svg>
    `;
  }

  // 4. Security / Cloud / Governance / Compliance
  if (
    combined.includes("security") ||
    combined.includes("defense") ||
    combined.includes("cloud") ||
    combined.includes("protect") ||
    combined.includes("govern") ||
    combined.includes("compliance") ||
    combined.includes("safe") ||
    combined.includes("threat")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    `;
  }

  // 5. Practical Skills / Hands-on / Projects / Code / Lab / Tools
  if (
    combined.includes("practical") ||
    combined.includes("hands-on") ||
    combined.includes("code") ||
    combined.includes("project") ||
    combined.includes("portfolio") ||
    combined.includes("tool") ||
    combined.includes("lab") ||
    combined.includes("build")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></polyline>
        <polyline points="8 6 2 12 8 18" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"></polyline>
      </svg>
    `;
  }

  // 6. Analytics / Marketing / Campaign / Optimization / Performance
  if (
    combined.includes("analytic") ||
    combined.includes("marketing") ||
    combined.includes("target") ||
    combined.includes("metric") ||
    combined.includes("campaign") ||
    combined.includes("optimiz") ||
    combined.includes("performance")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    `;
  }

  // 7. Certification / Credentials / Validation
  if (
    combined.includes("certif") ||
    combined.includes("credential") ||
    combined.includes("validate") ||
    combined.includes("accredit") ||
    combined.includes("badge")
  ) {
    return `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
      </svg>
    `;
  }

  // 8. Foundations / Mastery / Knowledge Fallback based on index
  const fallbackIcons = [
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`,
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`,
    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M5 13l4 4L19 7"></path></svg>`
  ];

  return fallbackIcons[index % fallbackIcons.length];
}

/**
 * Normalizes raw benefit strings or objects into { title, description }
 */
function formatBenefitItem(rawItem, courseTitle, index) {
  if (!rawItem) return null;

  if (typeof rawItem === "object" && rawItem.title && (rawItem.description || rawItem.desc)) {
    return {
      title: rawItem.title,
      description: rawItem.description || rawItem.desc,
      icon: rawItem.icon
    };
  }

  const str = typeof rawItem === "string" ? rawItem.trim() : String(rawItem);
  if (!str) return null;

  if (str.includes(":")) {
    const parts = str.split(":");
    const candidateTitle = parts[0].trim();
    const candidateDesc = parts.slice(1).join(":").trim();
    if (candidateTitle.length < 50 && candidateDesc.length > 5) {
      return {
        title: candidateTitle,
        description: candidateDesc
      };
    }
  }

  if (str.includes(" – ") || str.includes(" - ")) {
    const delimiter = str.includes(" – ") ? " – " : " - ";
    const parts = str.split(delimiter);
    const candidateTitle = parts[0].trim();
    const candidateDesc = parts.slice(1).join(delimiter).trim();
    if (candidateTitle.length < 45 && candidateDesc.length > 5) {
      return {
        title: candidateTitle,
        description: candidateDesc
      };
    }
  }

  let title = "Career Advancement";
  const lower = str.toLowerCase();
  if (lower.includes("role") || lower.includes("job") || lower.includes("intern") || lower.includes("specialist") || lower.includes("engineer") || lower.includes("developer") || lower.includes("analyst")) {
    title = "In-Demand Career Roles";
  } else if (lower.includes("salary") || lower.includes("lpa") || lower.includes("$") || lower.includes("₹") || lower.includes("package") || lower.includes("compensation") || lower.includes("earning")) {
    title = "Competitive Compensation";
  } else if (lower.includes("global") || lower.includes("international") || lower.includes("worldwide") || lower.includes("abroad")) {
    title = "Global Opportunities";
  } else if (lower.includes("firm") || lower.includes("startup") || lower.includes("company") || lower.includes("enterprise") || lower.includes("industr") || lower.includes("organization")) {
    title = "Enterprise & Industry Demand";
  } else if (lower.includes("practical") || lower.includes("hands-on") || lower.includes("project") || lower.includes("portfolio") || lower.includes("code") || lower.includes("tools") || lower.includes("lab")) {
    title = "Hands-On Practical Skills";
  } else if (lower.includes("foundation") || lower.includes("start") || lower.includes("kickstart") || lower.includes("step into") || lower.includes("enter") || lower.includes("begin")) {
    title = "Strong Domain Foundations";
  } else if (lower.includes("future-proof") || lower.includes("advance") || lower.includes("grow") || lower.includes("leadership") || lower.includes("future")) {
    title = "Future-Proof Career Growth";
  } else if (lower.includes("freelanc") || lower.includes("consult") || lower.includes("flexible")) {
    title = "Flexible & Freelance Paths";
  } else if (lower.includes("certif") || lower.includes("credential") || lower.includes("validate") || lower.includes("accredit")) {
    title = "Professional Certification";
  } else {
    const fallbacks = [
      "Skill Mastery",
      "Career Pathways",
      "Industry Applications",
      "Professional Growth",
      "Practical Confidence",
      "Certification Readiness"
    ];
    title = fallbacks[index % fallbacks.length];
  }

  return {
    title: title,
    description: str
  };
}

/**
 * Fallback benefits generator if course data lacks an overview.benefits item
 */
function deriveFallbackBenefits(data) {
  const t = data.title || "this course";
  return [
    `Career Opportunities: Qualify for high-demand industry roles and unlock new career progression in ${t}.`,
    `Practical Hands-On Competency: Gain real-world execution skills and industry-standard best practices.`,
    `Globally Recognized Credential: Validate your expertise with accredited certifications valued worldwide.`,
    `Enterprise Ready: Master the frameworks, methodologies, and tools actively deployed across leading teams.`
  ];
}

/**
 * 2. COURSE OVERVIEW + SIDEBAR SECTION
 */
function renderCourseOverview(data) {
  const o = data.overview || {};
  const tabs = o.tabs || [];
  const schedule = data.schedule || o.schedule || {};

  // 1. Tab buttons
  const tabButtonsHtml = tabs
    .map((tab, idx) => {
      const isActive = idx === 0;
      return `
        <button 
          type="button" 
          class="course-tab-btn px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
            isActive
              ? "bg-[#45318A] text-white shadow-sm"
              : "bg-white text-slate-700 hover:bg-purple-50 hover:text-[#45318A] border border-slate-200/80"
          }"
          data-tab-target="${tab.id}"
          role="tab"
          aria-selected="${isActive ? "true" : "false"}"
          aria-controls="panel-${tab.id}"
        >
          ${tab.label}
        </button>
      `;
    })
    .join("");

  // 2. Tab panels
  const tabPanelsHtml = tabs
    .map((tab, idx) => {
      const isHidden = idx !== 0;
      let contentHtml = "";

      if (tab.id === "benefits" || tab.type === "benefits") {
        let rawItems = (tab.items && tab.items.length > 0) ? tab.items : (data.benefits || []);
        if (!rawItems || rawItems.length === 0) {
          rawItems = deriveFallbackBenefits(data);
        }
        const formattedBenefits = rawItems.slice(0, 6).map((item, i) => formatBenefitItem(item, data.title, i)).filter(Boolean);
        const cardsHtml = formattedBenefits.map((b, i) => {
          const iconSvg = getBenefitIconSvg(b.title, b.description, i);
          return `
            <div class="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:border-[#45318A]/30 transition-all flex items-start gap-3.5 group">
              <div class="w-10 h-10 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-[#45318A] shrink-0 mt-0.5 group-hover:bg-[#45318A] group-hover:text-amber-300 transition-colors">
                ${iconSvg}
              </div>
              <div class="space-y-1 min-w-0 flex-1">
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 leading-snug group-hover:text-[#45318A] transition-colors">
                  ${b.title}
                </h4>
                <p class="text-xs text-slate-600 leading-relaxed font-normal">
                  ${b.description}
                </p>
              </div>
            </div>
          `;
        }).join("");

        contentHtml = `
          <div class="space-y-4">
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-1.5">${tab.title || "How You’ll Benefit"}</h3>
              ${tab.intro ? `<p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${tab.intro}</p>` : ""}
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4.5 pt-1">
              ${cardsHtml}
            </div>
          </div>
        `;
      } else if (tab.id === "syllabus") {
        const visibleCount = tab.initialVisibleCount || 6;
        const totalItems = tab.items.length;
        const hasMore = totalItems > visibleCount;

        const itemsHtml = tab.items
          .map((item, i) => {
            const isInitiallyHidden = hasMore && i >= visibleCount;
            return `
              <li class="syllabus-item flex items-start gap-3 py-2 border-b border-slate-100 last:border-0 ${
                isInitiallyHidden ? "hidden syllabus-extra-item" : ""
              }">
                <div class="w-5 h-5 rounded-full bg-purple-100 text-[#45318A] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                  ${i + 1}
                </div>
                <span class="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">${item}</span>
              </li>
            `;
          })
          .join("");

        const showMoreBtn = hasMore
          ? `
            <div class="pt-4">
              <button 
                type="button" 
                id="syllabus-toggle-btn" 
                class="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#45318A] hover:text-[#2c1d5e] transition-colors cursor-pointer"
                aria-expanded="false"
              >
                <span id="syllabus-toggle-text">Show more</span>
                <svg id="syllabus-toggle-icon" class="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          `
          : "";

        contentHtml = `
          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-4">${tab.title}</h3>
            <ul class="divide-y divide-slate-100" id="syllabus-items-list">
              ${itemsHtml}
            </ul>
            ${showMoreBtn}
          </div>
        `;
      } else if (tab.type === "prose") {
        contentHtml = `
          <div class="space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2">${tab.title}</h3>
            <p class="text-xs sm:text-sm sm:text-base text-slate-700 leading-relaxed">${tab.content}</p>
          </div>
        `;
      } else if (tab.type === "list_with_intro") {
        const itemsHtml = tab.items
          .map((item) => {
            return `
              <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="leading-relaxed">${item}</span>
              </li>
            `;
          })
          .join("");

        contentHtml = `
          <div class="space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2">${tab.title}</h3>
            ${tab.intro ? `<p class="text-xs sm:text-sm sm:text-base text-slate-700 leading-relaxed mb-3">${tab.intro}</p>` : ""}
            <ul class="space-y-2.5">
              ${itemsHtml}
            </ul>
          </div>
        `;
      } else if (tab.type === "bullets") {
        const itemsHtml = tab.items
          .map((item) => {
            return `
              <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                <div class="w-1.5 h-1.5 rounded-full bg-[#45318A] shrink-0 mt-2"></div>
                <span class="leading-relaxed">${item}</span>
              </li>
            `;
          })
          .join("");

        contentHtml = `
          <div class="space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2">${tab.title}</h3>
            <ul class="space-y-2.5">
              ${itemsHtml}
            </ul>
          </div>
        `;
      } else if (tab.type === "list") {
        const itemsHtml = (tab.items || [])
          .map((item) => {
            const text = typeof item === "object" ? ((item.title ? `${item.title}: ` : "") + (item.description || item.desc || "")) : String(item);
            return `
              <li class="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-medium">
                <svg class="w-4 h-4 text-[#45318A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="leading-relaxed">${text}</span>
              </li>
            `;
          })
          .join("");

        contentHtml = `
          <div class="space-y-3">
            <h3 class="text-lg sm:text-xl font-bold text-slate-900 mb-2">${tab.title || "Key Details"}</h3>
            ${tab.intro ? `<p class="text-xs sm:text-sm sm:text-base text-slate-700 leading-relaxed mb-3">${tab.intro}</p>` : ""}
            <ul class="space-y-2.5">
              ${itemsHtml}
            </ul>
          </div>
        `;
      }

      return `
        <div 
          id="panel-${tab.id}" 
          class="course-tab-panel ${isHidden ? "hidden" : ""}" 
          role="tabpanel" 
          aria-labelledby="${tab.id}"
        >
          ${contentHtml}
        </div>
      `;
    })
    .join("");

  return `
    <!-- 2. COURSE OVERVIEW + SIDEBAR SECTION -->
    <section class="py-12 sm:py-16 bg-white border-b border-slate-100" id="course-overview" aria-label="Course Overview and Admissions">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Overview Heading -->
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">
          ${o.heading || "Course Overview"}
        </h2>

        <!-- 2-Column Responsive Layout (~68% Content / ~32% Sidebar) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <!-- LEFT SIDE: Interactive Tabs & Content (~68%) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Horizontal Tab Switcher -->
            <div class="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Course Sections">
              ${tabButtonsHtml}
            </div>

            <!-- Active Tab Content Container -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 min-h-[340px]">
              ${tabPanelsHtml}
            </div>

            <!-- Standalone Yellow "Enquire now" CTA (Opens Reusable Modal) -->
            <div class="pt-2">
              <button 
                type="button" 
                id="overview-enquire-now-btn"
                data-course-modal-trigger
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <span>Enquire now</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>

          </div>

          <!-- RIGHT SIDEBAR: Enquiry Card & Batch Schedule (~32%) -->
          <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-24" id="enquire-sidebar">
            
            <!-- Card 1: Reusable Enquiry Form (Sidebar Placement) -->
            ${renderCourseEnquiryForm(data, { isModal: false, idPrefix: "sidebar" })}

            <!-- Card 2: Real Course Duration & Batch Schedule from HTML -->
            <div class="bg-gradient-to-br from-slate-900 to-[#1e1b4b] rounded-2xl p-6 text-white shadow-lg border border-white/10 space-y-4">
              
              <div class="flex items-center gap-3 border-b border-white/10 pb-3">
                <div class="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white leading-tight">Course Duration</h4>
                  <p class="text-xs text-amber-400 font-semibold">${schedule.duration || "40 Hours"}</p>
                </div>
              </div>

              <div class="space-y-2 text-xs">
                <div class="flex items-center justify-between py-1 border-b border-white/5">
                  <span class="text-slate-300">Weekday Batches</span>
                  <span class="font-semibold text-white">${schedule.weekday || "Monday – Friday"}</span>
                </div>
                <div class="flex items-center justify-between py-1 border-b border-white/5">
                  <span class="text-slate-300">Weekend Batches</span>
                  <span class="font-semibold text-white">${schedule.weekend || "Saturday & Sunday"}</span>
                </div>
              </div>

              <p class="text-[11px] text-slate-300 leading-relaxed">
                ${schedule.note || "Flexible schedules available full-time, part-time, or online."}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

/**
 * 3. PURPLE COURSE CTA (Job Guarantee Banner)
 */
function renderCourseCTA(data) {
  const cta = data.cta || data.jobGuarantee || {};
  const eyebrow = cta.eyebrow || "ASSURED CAREER OUTCOME";
  const title = cta.title || "100% JOB GUARANTEE";
  const description = cta.description || "";
  const buttonLabel = cta.buttonLabel || cta.ctaText || "Enquire for Placement Support";

  return `
    <!-- 3. PURPLE COURSE CTA -->
    <section class="py-8 sm:py-10 bg-white" aria-label="Course Call to Action">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="relative bg-[#45318A] text-white p-7 sm:p-9 lg:p-11 shadow-sm overflow-hidden rounded-[3px]">
          
          <!-- Subtle Translucent Ambient Glow Behind Heading (Reference Effect) -->
          <div class="absolute -left-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

          <!-- Subtle 3D Isometric Geometric Line Art on Right (~25-30%) -->
          <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none hidden md:block overflow-hidden" aria-hidden="true">
            <svg class="w-full h-full object-cover" viewBox="0 0 260 200" fill="none" stroke="currentColor" stroke-width="1.2">
              <path d="M180,20 L220,43 L180,66 L140,43 Z" stroke="#E9D5FF" />
              <path d="M140,43 L140,89 L180,112 L180,66 Z" stroke="#E9D5FF" />
              <path d="M180,66 L180,112 L220,89 L220,43 Z" stroke="#E9D5FF" />
              <path d="M220,89 L260,112 L220,135 L180,112 Z" stroke="#E9D5FF" />
              <path d="M180,112 L180,158 L220,181 L220,135 Z" stroke="#E9D5FF" />
              <path d="M220,135 L220,181 L260,158 L260,112 Z" stroke="#E9D5FF" />
              <path d="M140,89 L180,112 L140,135 L100,112 Z" stroke="#E9D5FF" />
              <path d="M100,112 L100,158 L140,181 L140,135 Z" stroke="#E9D5FF" />
              <path d="M140,135 L140,181 L180,158 L180,112 Z" stroke="#E9D5FF" />
              <path d="M220,43 L260,20 L300,43 L260,66 Z" stroke="#E9D5FF" />
              <path d="M260,66 L260,112" stroke="#E9D5FF" />
              <path d="M140,43 L100,20 L140,-3 L180,20" stroke="#E9D5FF" />
              <path d="M100,20 L100,66 L140,89" stroke="#E9D5FF" />
            </svg>
          </div>

          <!-- Left Content (~70-75%) -->
          <div class="max-w-3xl relative z-10 space-y-3.5">
            
            ${
              eyebrow
                ? `
                  <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-slate-950 font-extrabold text-[11px] tracking-wider uppercase rounded-[2px] shadow-xs">
                    ${eyebrow}
                  </div>
                `
                : ""
            }

            <h2 class="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-white leading-tight">
              ${title}
            </h2>

            <p class="text-xs sm:text-sm sm:text-base text-purple-100/90 font-normal leading-relaxed max-w-2xl">
              ${description}
            </p>

            <div class="pt-2">
              <button 
                type="button" 
                data-course-modal-trigger
                class="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-sm sm:text-base px-6 py-3 rounded-[3px] shadow-sm hover:shadow transition-all cursor-pointer group"
              >
                <span>${buttonLabel}</span>
                <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

/**
 * 4. WAYS TO TAKE SECTION
 */
function renderCourseDelivery(data) {
  const d = data.delivery || {};
  const methods = d.methods || d.modes || data.deliveryMethods || [];
  const heading = d.heading || d.title || "Ways to take Training";

  if (!methods || methods.length === 0) return "";

  // 1. Tab buttons
  const tabButtonsHtml = methods
    .map((m, idx) => {
      const isActive = idx === 0;
      return `
        <button 
          type="button" 
          class="delivery-tab-btn px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold rounded-[2px] transition-colors cursor-pointer whitespace-nowrap ${
            isActive
              ? "bg-[#45318A] text-white shadow-xs"
              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
          }"
          data-delivery-target="${m.id}"
          role="tab"
          aria-selected="${isActive ? "true" : "false"}"
          aria-controls="delivery-panel-${m.id}"
        >
          ${m.title}
        </button>
      `;
    })
    .join("");

  // 2. Tab panels
  const tabPanelsHtml = methods
    .map((m, idx) => {
      const isHidden = idx !== 0;

      const featuresHtml = (m.features || [])
        .map((f) => {
          const iconSvg = getDeliveryIconSvg(f.icon);
          return `
            <div class="space-y-2">
              <div class="flex items-center gap-2.5">
                <span class="shrink-0">
                  ${iconSvg}
                </span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  ${f.title}
                </h4>
              </div>
              <div class="h-[1.5px] bg-[#45318A]/25 w-full"></div>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ${f.desc || f.description || ""}
              </p>
            </div>
          `;
        })
        .join("");

      return `
        <div 
          id="delivery-panel-${m.id}" 
          class="delivery-panel ${isHidden ? "hidden" : ""} space-y-6" 
          role="tabpanel"
        >
          <p class="text-sm sm:text-base text-slate-700 leading-relaxed max-w-5xl">
            ${m.description}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 pt-2">
            ${featuresHtml}
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <!-- 4. WAYS TO TAKE SECTION (Reference Layout) -->
    <section class="py-12 sm:py-16 bg-white" id="course-delivery" aria-label="Course Delivery Options">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          ${heading}
        </h2>

        <!-- Compact Horizontal Tabs Row -->
        <div class="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Delivery Methods">
          ${tabButtonsHtml}
        </div>

        <!-- Dynamic Panels (Open Layout, No Large Enclosing Card) -->
        <div class="pt-2">
          ${tabPanelsHtml}
        </div>

        <!-- Yellow Enquire CTA (Opens Reusable Modal) -->
        <div class="pt-4">
          <button 
            type="button" 
            data-course-modal-trigger
            class="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-[3px] bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm sm:text-base shadow-xs hover:shadow transition-all cursor-pointer group"
          >
            <span>Enquire now</span>
            <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </section>
  `;
}

/**
 * 5. Why Choose TechAcademy Section
 */
function renderCourseWhyChoose(data) {
  const wc = data.whyChoose || {};
  const items = wc.items || [];

  const itemsHtml = items
    .map((item, idx) => {
      let iconSvg = "";
      if (item.icon === "expert") {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>`;
      } else if (item.icon === "course") {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`;
      } else if (item.icon === "projects") {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`;
      } else if (item.icon === "resources") {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`;
      } else if (item.icon === "certificate") {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`;
      } else {
        iconSvg = `<svg class="w-6 h-6 text-[#45318A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`;
      }

      return `
        <div class="flex flex-col items-center text-center space-y-3 p-4">
          <!-- Centered Icon -->
          <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shadow-sm">
            ${iconSvg}
          </div>

          <!-- Subtle Indicator Dot / Divider -->
          <div class="w-8 h-0.5 rounded-full bg-purple-200"></div>

          <!-- Heading -->
          <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">
            ${item.title}
          </h3>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ${item.description}
          </p>
        </div>
      `;
    })
    .join("");

  return `
    <!-- 5. WHY CHOOSE SECTION -->
    <section class="py-14 sm:py-20 bg-white" aria-label="Why Choose TechAcademy">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            ${wc.heading || "Why choose TechAcademy"}
          </h2>
        </div>

        <!-- 3 Columns × 2 Rows on Desktop, 2 Columns on Tablet, 1 Column on Mobile -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          ${itemsHtml}
        </div>

      </div>
    </section>
  `;
}

/**
 * Shared Course Enquiry Modal Component
 */
function renderCourseModal(data) {
  return `
    <!-- Reusable Course Enquiry Modal -->
    <div 
      id="course-enquiry-modal" 
      class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-heading"
    >
      <div class="bg-white rounded-2xl shadow-2xl max-w-lg sm:max-w-xl w-full p-6 sm:p-8 relative border border-slate-200/90 max-h-[90vh] flex flex-col justify-between overflow-y-auto my-auto animate-dropdownFade">
        
        <!-- Accessible Top-Right Close Button -->
        <button 
          type="button" 
          id="course-modal-close-btn"
          onclick="closeCourseEnquiryModal()" 
          class="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#45318A] cursor-pointer"
          aria-label="Close modal"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        ${renderCourseEnquiryForm(data, { isModal: true, idPrefix: "modal" })}
      </div>
    </div>
  `;
}

/**
 * Master Course Page Renderer
 * Renders sections in the strict specified order:
 * 1. Course Hero
 * 2. Course Overview + Sidebar
 * 3. Purple Course CTA
 * 4. Ways to Take Course
 * 5. Why Choose TechAcademy
 * 6. Course Enquiry Modal
 */
function renderCoursePage(data, containerId = "course-page-root") {
  const container = document.getElementById(containerId);
  if (!container || !data) return;

  try {
    container.innerHTML = `
      ${renderCourseHero(data)}
      ${renderCourseOverview(data)}
      ${renderCourseCTA(data)}
      ${renderCourseDelivery(data)}
      ${renderCourseWhyChoose(data)}
      ${renderCourseModal(data)}
    `;
  } catch (renderErr) {
    console.error("Error rendering course page HTML:", renderErr);
  }

  try {
    setupCoursePageInteractions(data);
  } catch (interactionErr) {
    console.error("Error setting up course page interactions:", interactionErr);
  }
}

/**
 * Interactive controller for tabs, syllabus toggle, delivery methods, and enquiry form
 */
function setupCoursePageInteractions(data) {
  let lastActiveEnquireTrigger = null;

  // 1. Initialize Country Dial Code Selectors (both sidebar & modal)
  if (typeof initCountrySelectors === "function") {
    initCountrySelectors();
  }

  // 2. Modal open/close functions
  function openCourseEnquiryModal(triggerElement) {
    const modal = document.getElementById("course-enquiry-modal");
    if (!modal) return;

    lastActiveEnquireTrigger = triggerElement || document.activeElement;

    // Reset modal notification and submit button
    const successMsg = document.getElementById("modal-enquiry-success-msg");
    if (successMsg) successMsg.classList.add("hidden");

    const submitBtn = document.getElementById("modal-enquiry-submit-btn");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Enquire Now</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>';
      submitBtn.classList.remove("bg-emerald-500", "text-white");
      submitBtn.classList.add("bg-amber-400", "text-slate-950");
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Focus first input in modal
    setTimeout(() => {
      const firstInput = document.getElementById("modal-enquiry-name");
      if (firstInput) firstInput.focus();
    }, 60);
  }

  function closeCourseEnquiryModal() {
    const modal = document.getElementById("course-enquiry-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";

      // Close any active country dropdown in modal
      const dropdowns = modal.querySelectorAll(".country-dropdown");
      dropdowns.forEach((d) => d.classList.add("hidden"));
      const countryBtns = modal.querySelectorAll(".country-btn");
      countryBtns.forEach((b) => b.setAttribute("aria-expanded", "false"));

      // Restore focus to original triggering CTA
      if (lastActiveEnquireTrigger && typeof lastActiveEnquireTrigger.focus === "function") {
        lastActiveEnquireTrigger.focus();
      }
    }
  }

  window.openCourseEnquiryModal = openCourseEnquiryModal;
  window.closeCourseEnquiryModal = closeCourseEnquiryModal;
  window.openGlobalEnquireModal = openCourseEnquiryModal;
  window.closeGlobalEnquireModal = closeCourseEnquiryModal;

  // 3. Bind Standalone Yellow CTA Buttons (Event Delegation)
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-course-modal-trigger]");
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      openCourseEnquiryModal(trigger);
    }
  });

  // 4. Modal Backdrop click & Escape key listeners
  const modal = document.getElementById("course-enquiry-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeCourseEnquiryModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const isModalOpen = modal && !modal.classList.contains("hidden");
      if (isModalOpen) {
        closeCourseEnquiryModal();
      }
    }
  });

  // 5. Overview Tabs Switcher
  const tabBtns = document.querySelectorAll(".course-tab-btn");
  const tabPanels = document.querySelectorAll(".course-tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-tab-target");

      // Update button styles
      tabBtns.forEach((b) => {
        b.classList.remove("bg-[#45318A]", "text-white", "shadow-sm");
        b.classList.add("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("bg-[#45318A]", "text-white", "shadow-sm");
      btn.classList.remove("bg-white", "text-slate-700", "hover:bg-purple-50", "hover:text-[#45318A]", "border", "border-slate-200/80");
      btn.setAttribute("aria-selected", "true");

      // Update panel visibility
      tabPanels.forEach((panel) => {
        if (panel.id === `panel-${targetId}`) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
    });
  });

  // 6. Syllabus Show More / Show Less Toggle
  const syllabusToggleBtn = document.getElementById("syllabus-toggle-btn");
  const extraItems = document.querySelectorAll(".syllabus-extra-item");
  const toggleText = document.getElementById("syllabus-toggle-text");
  const toggleIcon = document.getElementById("syllabus-toggle-icon");

  if (syllabusToggleBtn && extraItems.length > 0) {
    syllabusToggleBtn.addEventListener("click", () => {
      const isExpanded = syllabusToggleBtn.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        extraItems.forEach((item) => item.classList.add("hidden"));
        syllabusToggleBtn.setAttribute("aria-expanded", "false");
        if (toggleText) toggleText.textContent = "Show more";
        if (toggleIcon) toggleIcon.classList.remove("rotate-180");
      } else {
        extraItems.forEach((item) => item.classList.remove("hidden"));
        syllabusToggleBtn.setAttribute("aria-expanded", "true");
        if (toggleText) toggleText.textContent = "Show less";
        if (toggleIcon) toggleIcon.classList.add("rotate-180");
      }
    });
  }

  // 7. Delivery Methods Switcher
  const deliveryBtns = document.querySelectorAll(".delivery-tab-btn");
  const deliveryPanels = document.querySelectorAll(".delivery-panel");

  deliveryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-delivery-target");

      deliveryBtns.forEach((b) => {
        b.classList.remove("bg-[#45318A]", "text-white", "shadow-xs");
        b.classList.add("bg-slate-100", "text-slate-800", "hover:bg-slate-200");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("bg-[#45318A]", "text-white", "shadow-xs");
      btn.classList.remove("bg-slate-100", "text-slate-800", "hover:bg-slate-200");
      btn.setAttribute("aria-selected", "true");

      deliveryPanels.forEach((panel) => {
        if (panel.id === `delivery-panel-${targetId}`) {
          panel.classList.remove("hidden");
        } else {
          panel.classList.add("hidden");
        }
      });
    });
  });

  // 8. Form Submissions Handling (Both Sidebar & Modal)
  const forms = document.querySelectorAll(".course-enquiry-form");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const prefix = form.getAttribute("data-placement") || (form.id.includes("modal") ? "modal" : "sidebar");
      const submitBtn = form.querySelector("button[type='submit']");
      const successMsg = document.getElementById(`${prefix}-enquiry-success-msg`);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Submitted ✓";
        submitBtn.classList.remove("bg-amber-400", "text-slate-950");
        submitBtn.classList.add("bg-emerald-500", "text-white");
      }

      if (successMsg) {
        successMsg.classList.remove("hidden");
      }

      // If modal submission, gracefully close and reset after 2.4s
      if (prefix === "modal") {
        setTimeout(() => {
          closeCourseEnquiryModal();
          form.reset();
          if (successMsg) successMsg.classList.add("hidden");
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Enquire Now</span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>';
            submitBtn.classList.remove("bg-emerald-500", "text-white");
            submitBtn.classList.add("bg-amber-400", "text-slate-950");
          }
        }, 2400);
      }
    });
  });
}

if (typeof window !== "undefined") {
  window.renderCoursePage = renderCoursePage;
  window.renderCourseEnquiryForm = renderCourseEnquiryForm;
}
