/**
 * TechAcademy - Course Detail Dataset
 * Course: CISA (Certified Information Systems Auditor)
 * Source of Truth: Aivora X CISA Source HTML
 */

const COURSE_DATA_CISA = {
  id: "certified-information-systems-auditor-cisa",
  title: "CISA ( Certified Information Systems Auditor )",
  category: "Cyber Security",
  categorySlug: "cyber-security",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cyber Security", href: "#" },
    { label: "CISA ( Certified Information Systems Auditor )", href: "/courses/certified-information-systems-auditor-cisa/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master information systems auditing, control, and assurance with the globally acclaimed CISA (Certified Information Systems Auditor) training. This course equips you with the knowledge and expertise to audit IT systems, implement governance frameworks, assess vulnerabilities, and ensure enterprise compliance. Graduate with the skills and confidence to clear the ISACA CISA exam and lead cybersecurity audits in global organizations.",
    highlights: [
      "Master ISACA's 5 CISA domains: Auditing Process, IT Governance, Acquisition & Development, Operations & Resilience, and Asset Protection",
      "Learn to evaluate IT controls, perform compliance audits, and manage organizational cybersecurity risks",
      "Complete preparation for the official ISACA Certified Information Systems Auditor (CISA) exam"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "CISA ( Certified Information Systems Auditor ) Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Domain 1: Information System Auditing Process",
          "Domain 2: Governance and Management of IT",
          "Domain 3: Information Systems Acquisition, Development, and Implementation",
          "Domain 4: Information Systems Operations and Business Resilience",
          "Domain 5: Protection of Information Assets & Cybersecurity Controls",
          "IT Audit Planning, Risk Assessment & Execution",
          "Regulatory Compliance: SOX, GDPR, ISO 27001, and NIST Frameworks",
          "Disaster Recovery, Business Continuity & Incident Response Auditing",
          "CISA Exam Practice Questions, Scenarios & Simulation Drills"
        ],
        initialVisibleCount: 5
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "There are no formal prerequisites to attend the training. However, having basic IT, networking, or auditing knowledge is helpful. This course is ideal for IT auditors, compliance officers, risk managers, and cybersecurity professionals seeking global ISACA certification."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain practical auditing and governance skills to:",
        items: [
          "Plan, execute, and report on comprehensive information systems audits in accordance with ISACA standards",
          "Evaluate IT governance structures, policies, and risk management strategies",
          "Assess controls for system development, acquisition, and project management",
          "Review IT operational controls, data backup mechanisms, and disaster recovery plans",
          "Evaluate logical and physical security controls to protect information assets from cyber threats"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "CISA is recognized globally as the gold standard certification for IS audit and control professionals",
          "Unlock high-paying career roles such as IT Auditor, Internal Auditor, Compliance Manager, Information Security Officer",
          "Work with Big 4 consulting firms (Deloitte, PwC, EY, KPMG), multinational banks, and tech corporations",
          "Average salary of a CISA certified professional ranges between ₹10–18+ LPA in India and $110,000–$140,000 internationally",
          "Build expertise for consulting, independent auditing, and executive advisory positions"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "TechAcademy provides comprehensive training to help you clear the ISACA CISA exam. Upon successful completion of our program, you receive an accredited TechAcademy CISA training completion certificate and full guidance for scheduling and passing the official ISACA CISA exam."
      }
    ],
    schedule: {
      duration: "40 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "TechAcademy offers flexible batch timings for students and working professionals. We provide full-time as well as part-time courses so that students can complete their courses as per their convenience."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team partners with leading consulting firms, financial institutions, and multinational corporations looking for certified IT auditors. With TechAcademy, you'll graduate job-ready, audit-ready, and future-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team partners with leading consulting firms, financial institutions, and multinational corporations looking for certified IT auditors. With TechAcademy, you'll graduate job-ready, audit-ready, and future-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take CISA Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive CISA training from anywhere with TechAcademy's ISACA-certified lead auditors. Analyze real-world audit case studies, evaluate IT controls, and practice exam simulations in live interactive sessions.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical IT audit case studies." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review audit risk matrices, and get instant feedback during live governance workshops." },
          { icon: "cap", title: "ISACA Certified Instructors", desc: "Learn from senior CISA/CISM certified lead auditors with over 10+ years of enterprise audit experience." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your professional schedule." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive screen-sharing, and study portals." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel and lodging expenses while receiving premier IS audit education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person IT audit lab at TechAcademy's modern training center with direct face-to-face mentorship and collaborative audit review sessions.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on audit case studies in modern facilities." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured workstations with enterprise audit frameworks and compliance templates." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow IT auditors, compliance officers, and risk managers." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on complex domain questions and audit sampling methodologies." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, audit portfolio reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master CISA domains at your own speed with comprehensive on-demand video lectures, ISACA-aligned question banks, exam flashcards, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, domain summaries, and audit framework walkthroughs anytime." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like BCP/DRP auditing, cryptography controls, and IT governance." },
          { icon: "document", title: "ISACA-Aligned Study Material", desc: "Download comprehensive study guides, 1,000+ practice question banks, and CISA cram sheets." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your auditing and compliance queries answered promptly by our expert CISA teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with full-length timed CISA practice exams and diagnostic score breakdowns." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy CISA training certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate CISA and IT audit training programs delivered directly at your organization or custom venue, focusing on internal controls, regulatory compliance, and cybersecurity governance.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's IT audit roadmap, risk governance, and regulatory requirements." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior lead auditors conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's internal audit cycles, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill internal audit, compliance, and cybersecurity governance teams simultaneously." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Strengthen internal IT controls, streamline regulatory audits, and reduce enterprise compliance risks." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "ISACA CERTIFIED INSTRUCTORS", description: "Learn from senior CISA/CISM certified lead auditors with over 10+ years of real-world auditing experience." },
      { icon: "lightbulb", title: "NEXT-GEN AUDIT CURRICULUM", description: "Master modern ISACA auditing standards, cloud security audits, and compliance frameworks." },
      { icon: "project", title: "REAL-TIME AUDIT SCENARIOS", description: "Work through practical audit case studies and simulation exercises based on real business environments." },
      { icon: "resources", title: "PREMIUM STUDY MATERIAL", description: "Access comprehensive ISACA-aligned study guides, question banks, and exam prep workbooks." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized certification validating your information systems auditing expertise." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into high-demand IT auditing and governance careers with assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CISA };
}
