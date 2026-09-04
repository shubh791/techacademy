/**
 * TechAcademy - Course Detail Dataset
 * Course: CCNA Security
 * Source of Truth: Aivora X CCNA Security Source HTML
 */

const COURSE_DATA_CCNA_SECURITY = {
  id: "ccna-security",
  title: "CCNA Security",
  category: "Network Security",
  categorySlug: "network-security",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Network Security", href: "#" },
    { label: "CCNA Security", href: "/courses/ccna-security/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "The CCNA Security course is a gateway to those looking for jobs in the field of network security. This beginner’s level certification course improves your ability to install, monitor, troubleshooting of network devices to maintain confidentiality, integrity and availability of network data and devices.",
    highlights: [
      "Master Cisco router security, ASA firewall technologies, VPNs, and Intrusion Prevention Systems (IPS)",
      "Implement AAA security, TACACS+, RADIUS, and secure access management",
      "Comprehensive preparation for Cisco Network Security certification with in-house 24/7 hardware labs"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "CCNA Security Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Security Concepts",
          "Secure Access",
          "Virtual Private Network (VPN)",
          "Secure Routing and Switching",
          "Cisco Firewall Technologies",
          "Intrusion Prevention System (IPS)",
          "Content and Endpoint Security"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Pre-requisites",
        type: "prose",
        content: "As such, there are no formal pre-requisites to pursue this course. However, the candidate needs to have a basic understanding of Internet and computer science. Also, before taking up the exam, it is necessary to be prepared with the exam topics."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "What Will You Learn ?",
        type: "list_with_intro",
        intro: "During the course time, you will learn about the components of a comprehensive network security policy that can be used to counter network security threats in an organization:",
        items: [
          "Learn to secure networks in medium and large-scale organizations",
          "Understand common threats like email-based and web-based attacks",
          "Implement security on Cisco routers and understand firewall technologies",
          "Learn to implement the common security principles like confidentiality, integrity, availability"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "How you'll benefit ?",
        type: "list",
        items: [
          "The Cisco Certified Network Associate Security (CCNA Security) professional is trained to secure the network from potential threats and is a valuable asset for any IT firm",
          "The average salary of a CCNA Security certified professional ranges between ₹10 lakhs to ₹15 lakhs in India",
          "Most shared jobs related to the CCNA security certificate are network engineer, specialist, manager, and administrator",
          "Understand in-depth capability in the technologies that Cisco practices in its security configuration",
          "Network security jobs are projected to grow rapidly, opening doors to high-paying careers globally"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "Certification",
        type: "prose",
        content: "TechAcademy helps you prepare for the CISCO certification exams. Once you are ready for the exam, register at Pearson Vue. We make sure that all our students are well-trained before they appear for the exam. The duration of the exam is 120 minutes and you can expect about 100-120 questions. After you pass the exam, you receive a global CCNA Security certificate from CISCO."
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
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. TechAcademy arranges personalized interviews with companies like HCL, TCS, Accenture, Ericsson, Aricent, Tech Mahindra, Wipro, and Infosys.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. TechAcademy arranges personalized interviews with companies like HCL, TCS, Accenture, Ericsson, Aricent, Tech Mahindra, Wipro, and Infosys.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take CCNA Security Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Cisco network security training from anywhere with TechAcademy's certified CCIE instructors. Configure Cisco ASA firewalls, establish site-to-site IPsec VPNs, and practice access lists in live remote hardware labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical Cisco CLI security labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review firewall rules, and get instant feedback during live packet tracer & GNS3 sessions." },
          { icon: "cap", title: "Cisco Certified Instructors", desc: "Learn from industry experts and Cisco-certified professionals with over 10+ years of network security experience." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to balance your schedule." },
          { icon: "globe", title: "24/7 Online Hardware Labs", desc: "Access real Cisco routers, switches, and ASA firewalls remotely anytime, anywhere." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel expenses while receiving premier Cisco network security education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in our premier Cisco network hardware lab at TechAcademy's campus. Benefit from direct face-to-face mentorship, physical rack cabling, and live device configuration drills.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on physical rack configuration." },
          { icon: "tools", title: "Complete Lab Solutions", desc: "Work on in-house labs equipped with the latest Cisco ASA, routers, switches, and dedicated lab assistants." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow network engineers and security administrators." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors for complex VPN routing, NAT rules, and zone-based firewalls." },
          { icon: "award", title: "Authorised Course Content", desc: "100% authentic course content based directly on the official Cisco certification blueprint." },
          { icon: "shield", title: "100% Written Job Guarantee", desc: "Participate in mock technical interviews, English communication prep, and campus placement drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master CCNA Security at your own speed with comprehensive on-demand video lectures, 50+ lab workbook exercises with step-by-step solutions, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, topology diagrams, and packet capture walkthroughs anytime." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like Cryptography, PKI, and IPS signatures." },
          { icon: "document", title: "Cisco-Based Study Material", desc: "Download complete study materials, 50+ lab workbook solutions, and Cisco command cheat sheets." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your network configuration queries answered promptly by our expert Cisco teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with module quizzes, topology challenges, and Cisco practice exams." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy CCNA Security certificate upon finishing all labs." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Cisco network security training programs delivered directly at your organization or custom venue, focusing on securing enterprise campus networks and perimeter firewalls.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's network infrastructure, firewall vendor stack, and security policies." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Cisco-certified security architects conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's maintenance windows, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill network operations (NOC), security operations (SOC), and infrastructure teams simultaneously." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Harden internal network perimeters, prevent unauthorized access, and ensure network uptime." },
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
      { icon: "award", title: "AUTHORISED COURSE CONTENT", description: "The CCNA Security course content is 100% authentic and based directly on the official Cisco syllabus." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "We provide a written guarantee that each and every student of ours will be placed in renowned IT firms." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CCNA_SECURITY };
}
