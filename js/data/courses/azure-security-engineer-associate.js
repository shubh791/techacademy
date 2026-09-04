/**
 * TechAcademy - Course Detail Dataset
 * Course: Azure Security Engineer Associate (AZ-500)
 * Source of Truth: Aivora X Azure Security Engineer Source HTML
 */

const COURSE_DATA_AZURE_SECURITY = {
  id: "azure-security-engineer-associate",
  title: "Azure Security Engineer Associate",
  category: "Cloud Computing",
  categorySlug: "cloud-computing",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cloud Computing", href: "#" },
    { label: "Azure Security Engineer Associate", href: "/courses/azure-security-engineer-associate/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master the skills needed to secure cloud environments with Microsoft Azure. This course equips you with practical, hands-on experience to implement advanced security controls, manage identity and access, and protect data and applications in the cloud. Graduate with the expertise to design and maintain secure Azure environments while preparing for the Azure Security Engineer Associate (AZ-500) certification.",
    highlights: [
      "Manage identity, access, and governance using Microsoft Entra ID (Azure AD), PIM, and RBAC",
      "Implement network security, NSGs, Azure Firewall, DDoS protection, and Key Vault encryption",
      "Configure threat detection and automated incident response with Microsoft Defender for Cloud and Microsoft Sentinel"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "Azure Security Engineer Associate Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Introduction to Azure Security",
          "Managing Identity and Access: NSGs, Firewalls, and DDoS Protection",
          "Encryption, Key Vault, and Storage Security",
          "Implementing Endpoint & Application Security",
          "Monitoring & Threat Detection: Configuring Security Policies and Compliance",
          "Automating Security Operations: Incident Response, Investigation, and Remediation",
          "Advanced Threat Protection & Security Best Practices"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "A basic understanding of cloud computing, Azure services, and networking concepts is recommended. Familiarity with Microsoft Azure Administrator Associate (AZ-104) is beneficial but not mandatory. This course is ideal for IT security professionals, system administrators, and anyone aiming to specialize in cloud security."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain practical, hands-on expertise to:",
        items: [
          "Implement identity, access, and governance solutions in Azure",
          "Secure network infrastructure and applications using advanced tools",
          "Protect data with encryption, key management, and storage security",
          "Monitor and detect threats using Azure Security Center and Sentinel",
          "Automate security operations and enforce compliance policies",
          "Respond to and remediate security incidents effectively",
          "Prepare for the AZ-500 certification and advanced cloud security roles"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "Enter the fast-growing field of cloud security with global demand",
          "Unlock roles such as Azure Security Engineer, Cloud Security Analyst, or IT Security Consultant",
          "Work with enterprises, IT firms, cloud service providers, and global organizations",
          "Flexible career options: onsite in major cities or remote cloud security projects",
          "Earn an average salary of ₹6–9 LPA in India, with potential growth to ₹15+ LPA",
          "Explore international opportunities with salaries ranging from $70,000–$110,000",
          "Gain specialized skills for long-term, future-proof careers in cloud and cybersecurity"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon completion, you will earn the Azure Security Engineer Associate (AZ-500) certification from TechAcademy, validating your skills in securing cloud environments. This certification is globally recognized and opens pathways to roles such as Azure Security Engineer, Cloud Security Specialist, IT Security Consultant, or Cloud Compliance Analyst."
      }
    ],
    schedule: {
      duration: "70 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "Flexible schedules for students and working professionals. Join full-time, part-time, or online classes. Live online sessions provide the same interactive, high-quality learning experience."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with top IT companies, cloud security firms, and multinational organizations adopting Azure security frameworks. At TechAcademy, you’ll graduate job-ready, security-ready, and cloud-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with top IT companies, cloud security firms, and multinational organizations adopting Azure security frameworks. At TechAcademy, you’ll graduate job-ready, security-ready, and cloud-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take Azure Security Engineer Associate Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Azure security training from anywhere with TechAcademy's certified Azure security engineers. Configure Microsoft Sentinel, deploy Azure Bastion, and implement PIM during live guided labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical Azure security labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review Entra ID permissions, and get instant feedback during live SIEM hunting sessions." },
          { icon: "cap", title: "Global Pool of Best Trainers", desc: "Learn from seasoned Microsoft Certified Azure Security Engineers protecting enterprise workloads." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your schedule." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive screen-sharing, and Azure subscriptions." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Save on travel and lodging while receiving premier Microsoft Azure security training." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person cloud security center at TechAcademy's modern facility with direct face-to-face mentorship and real-time incident response drills.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on security architecture in modern facilities." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured workstations with enterprise access to Microsoft Sentinel and Defender for Cloud." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow cloud security engineers and IT administrators." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on conditional access, Key Vault integration, and threat hunting." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, security portfolio reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master Azure security at your own speed with comprehensive on-demand video lectures, AZ-500 exam practice tests, ARM templates, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, security policy guides, and lab walkthroughs anytime, anywhere." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like KQL queries, Sentinel analytics rules, and NSG flow logs." },
          { icon: "document", title: "Comprehensive Code & Notes", desc: "Download step-by-step Azure Policy definitions, KQL cheat sheets, and AZ-500 study guides." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your cloud security queries answered promptly by our expert Microsoft Azure teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your knowledge after each module with quizzes, lab challenges, and AZ-500 practice exams." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy Azure Security certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Azure security training programs delivered directly at your organization or custom venue, focusing on securing enterprise Azure landing zones and Sentinel SIEM integration.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's Azure tenant, compliance standards, and SecOps framework." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Azure security architects conduct live workshops at your corporate offices or campus." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's security sprints, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill SOC, DevOps, and cloud engineering teams simultaneously on Microsoft security solutions." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Reduce mean time to detect (MTTD), automate remediation, and strengthen enterprise cloud compliance." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "LEARN FROM INDUSTRY EXPERTS", description: "Gain guidance from certified Azure security professionals with real-world experience." },
      { icon: "lightbulb", title: "NEXT-GEN CLOUD SECURITY COURSE", description: "Master security tools, practices, and compliance strategies in Azure." },
      { icon: "project", title: "REAL-TIME PROJECTS", description: "Implement security solutions in live lab environments." },
      { icon: "resources", title: "AI-POWERED RESOURCES", description: "Access interactive tutorials, labs, and curated study materials." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized Azure Security Engineer Associate certification." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into cloud security roles with our assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_AZURE_SECURITY };
}
