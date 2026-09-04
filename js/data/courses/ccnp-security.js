/**
 * TechAcademy - Course Detail Dataset
 * Course: CCNP Security
 * Source of Truth: Aivora X CCNP Security Source HTML
 */

const COURSE_DATA_CCNP_SECURITY = {
  id: "ccnp-security",
  title: "CCNP Security",
  category: "Network Security",
  categorySlug: "network-security",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Network Security", href: "#" },
    { label: "CCNP Security", href: "/courses/ccnp-security/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "CCNP Security certification program is basically meant for candidates looking for a career in network security using vendor specific devices like ASA Firewall, switches and IPS Systems. The basic learning includes choosing, deploying, supporting, and troubleshooting firewalls, VPNS, WSA, ESA and ISE Solutions.",
    highlights: [
      "Master Cisco Identity Services Engine (ISE), Firepower Threat Defense (FTD), and Next-Gen Firewalls",
      "Implement advanced access control, 802.1X web authentication, endpoint posture, and trustsec",
      "Complete preparation for Cisco CCNP Security Core (SCOR) and concentration exams"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "CCNP Security Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Course Introduction & Lab Architecture",
          "Threat Mitigation through Identity Services",
          "Cisco ISE Fundamentals",
          "Advance Access Control & 802.1X",
          "Web Authentication and Guest Access",
          "Endpoint Access Control & Posture",
          "Troubleshooting Network Access Control",
          "Firepower Threat Defense (FTD) Configuration & VPNs"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Pre-requisites",
        type: "prose",
        content: "According to the CISCO website, a valid CCNA Security certification or equivalent network security experience can act as a prerequisite. Also, before taking up the exam, it is necessary to be thorough with the exam topics."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "What Will You Learn ?",
        type: "list_with_intro",
        intro: "During the course period, you will learn to operate and implement core security technologies across enterprise networks:",
        items: [
          "Learn how to design and identify VPN solutions and technologies",
          "Know how to operate and implement core security technologies for medium and large-scale industries",
          "Learn how to configure and troubleshoot FTD firewalls and VPNs",
          "Implement Cisco ISE for network access control and endpoint posture enforcement"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "How you’ll benefit?",
        type: "list",
        items: [
          "According to a study conducted by CISCO, professionals who hold the CCNP Security certification receive 10-20% higher compensation",
          "With CCNP Security certification, you will increase your chances to get a valuable high-paying job in the IT industry",
          "Professionals with a CCNP certification can work globally across expanding IT industries in India, UK, USA, UAE, and Australia",
          "A CCNP certified professional in India gets an average package of ₹8 lakhs to ₹14+ lakhs in the industry",
          "The CCNP certification also acts as a prerequisite for CCIE Security V6 and opens doors to senior engineering positions"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "Certification",
        type: "prose",
        content: "TechAcademy helps you prepare for the CISCO certification exams. Once you are ready for the exam, you need to register at Pearson Vue. The duration of the exam is 120 minutes and you can expect about 100-120 questions. To earn the certificate, you need to pass a core exam and a security concentration exam of your choice. After passing the exams, you receive a global CCNP Security certificate from CISCO."
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
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. Our placement team arranges personalized interviews with companies like HCL, TCS, Accenture, Ericsson, Aricent, Tech Mahindra, Wipro, and Infosys.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. Our placement team arranges personalized interviews with companies like HCL, TCS, Accenture, Ericsson, Aricent, Tech Mahindra, Wipro, and Infosys.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take CCNP Security Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive CCNP Security training from anywhere with TechAcademy's expert Cisco security instructors. Deploy Cisco ISE node topologies, configure FTD policies, and debug 802.1X authentications in live remote hardware labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical Cisco ISE / Firepower labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review policy sets, and get instant feedback during live complex security troubleshooting." },
          { icon: "cap", title: "Cisco Certified Instructors", desc: "Learn from senior Cisco-certified professionals with over 10+ years of enterprise security design experience." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your schedule." },
          { icon: "globe", title: "24/7 Online Hardware Labs", desc: "Access dedicated Cisco ISE servers, ASA, and FTD firewalls remotely anytime, anywhere." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel expenses while receiving premier CCNP Security engineering education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in our advanced Cisco enterprise security lab at TechAcademy's campus. Benefit from direct face-to-face mentorship, hardware rack access, and complex security integration labs.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on enterprise security implementation." },
          { icon: "tools", title: "Complete Lab Solutions", desc: "Work on dedicated hardware racks equipped with Cisco ISE, Firepower appliances, and switches." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow senior network engineers and security consultants." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors for TrustSec, SGT propagation, and complex posture rules." },
          { icon: "award", title: "Authorised Course Content", desc: "100% authentic course content based directly on the official Cisco CCNP Security syllabus." },
          { icon: "shield", title: "100% Written Job Guarantee", desc: "Participate in mock technical interviews, design scenario tests, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master CCNP Security at your own speed with comprehensive on-demand video lectures, 50+ enterprise lab workbooks with step-by-step solutions, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, topology diagrams, and ISE policy walkthroughs anytime." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like Profiling, Posture, and TACACS+ deployments." },
          { icon: "document", title: "Cisco-Based Study Material", desc: "Download complete study materials, 50+ lab workbook solutions, and SCOR exam notes." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your network security queries answered promptly by our expert Cisco teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with SCOR practice tests and diagnostic score breakdowns." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy CCNP Security certificate upon finishing all labs." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Cisco CCNP Security training programs delivered directly at your organization or custom venue, focusing on implementing zero-trust network access (ZTNA) and Cisco ISE architecture.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's network security architecture, Cisco ISE deployment, and compliance." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Cisco security architects conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's maintenance windows, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill enterprise network engineering and SOC teams simultaneously on Cisco security technologies." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Enforce granular identity-based access control, reduce breach risks, and streamline network audits." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "CISCO CERTIFIED INSTRUCTORS", description: "Our trainers are industry experts and Cisco-certified professionals with more than 10 years of experience." },
      { icon: "lightbulb", title: "FLEXIBLE BATCH TIMING", description: "TechAcademy offers flexible batch timings for students and working professionals on weekdays and weekends." },
      { icon: "project", title: "COMPLETE LAB SOLUTIONS", description: "We have in-house labs equipped with latest devices and available 24/7 along with qualified lab assistants." },
      { icon: "resources", title: "CISCO-BASED STUDY MATERIAL", description: "Professionally designed complete study material including workbooks with 50+ individual labs with solutions." },
      { icon: "award", title: "AUTHORISED COURSE CONTENT", description: "The CCNP Security course content is 100% authentic and based on the official Cisco syllabus." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "We provide a written guarantee that each and every student of ours will be placed in renowned IT firms." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CCNP_SECURITY };
}
