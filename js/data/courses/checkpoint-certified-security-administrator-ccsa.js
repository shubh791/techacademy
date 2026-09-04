/**
 * TechAcademy - Course Detail Dataset
 * Course: CCSA (Checkpoint Certified Security Administrator)
 * Source of Truth: Aivora X CCSA Source HTML
 */

const COURSE_DATA_CCSA = {
  id: "checkpoint-certified-security-administrator-ccsa",
  title: "CCSA (Checkpoint Certified Security Administrator)",
  category: "Network Security",
  categorySlug: "network-security",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Network Security", href: "#" },
    { label: "CCSA (Checkpoint Certified Security Administrator)", href: "/courses/checkpoint-certified-security-administrator-ccsa/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Check Point is renowned as a leading provider of software and combined hardware products for IT security. CCSA Training deals with various security administration tasks on Check Point software blades. It covers all you need to start-up, configure and manage daily operations of Check Point Security Gateway on the GAiA operating system. The certification will validate your knowledge and skills in security management using Check Point products.",
    highlights: [
      "Deploy, configure, and manage Check Point Security Gateway & Management Server on GAiA R80/R81",
      "Implement security policies, NAT rules, permission profiles, user authentication, and IPsec VPNs",
      "Prepare for the Check Point Certified Security Administrator (CCSA #156-215.81) certification"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "CCSA (Checkpoint Certified Security Administrator) Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Install R80/R81 Security Gateway & Management Server",
          "Configure Objects and Security Rule Base",
          "Configure Security Policy and NAT Rules",
          "Define Permission Profiles & Administrator Roles",
          "Configure Site-to-Site & Remote Access Virtual Private Network",
          "Configure Check Point Clustering (ClusterXL)",
          "Perform Periodic Administrator Tasks, Backups & Licensing",
          "Monitoring Traffic with SmartView Tracker and SmartLog"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Pre-requisites",
        type: "prose",
        content: "As such, there are no formal pre-requisites to pursue this course. However, the candidate needs to have a basic understanding of networking to pursue this course. Also, before taking up the exam, it is necessary to be thorough with the exam topics."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "What Will You Learn ?",
        type: "list_with_intro",
        intro: "During the CCSA course training, you will introduce yourself to Check Point Architecture, security policy management, VPN concepts, and administrator tasks:",
        items: [
          "Learn how to defend against network threats using Check Point GAiA",
          "Evaluate existing security policies and optimize the rule base",
          "Know how to manage user access to corporate LANs",
          "Monitor suspicious network activities and analyze attacks in medium and large-scale organizations",
          "Learn how to troubleshoot network connections and implement Check Point backup techniques"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "How you'll benefit?",
        type: "list",
        items: [
          "CCSA certification strengthens credibility within organizations and greatly improves job opportunities",
          "CCSAs rank higher than other security vendor professionals with premium salary compensation",
          "The average salary of a CCSA certified professional in the US is $101,000 and is more than ₹10–15+ lakhs in India",
          "Networking professionals with Checkpoint administration skills make 9% higher above-average industry salaries",
          "Opens doors to multiple senior network security opportunities globally"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "Certification",
        type: "prose",
        content: "TechAcademy helps you prepare for the Check Point certification exams. Once you are ready for the exam, you register at Pearson Vue. The duration of the exam is 90 minutes with 90 questions. You need 70% to pass. After passing, you receive a global Check Point Certified Security Administrator (CCSA) certificate."
      }
    ],
    schedule: {
      duration: "24 Hours",
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
    heading: "Ways to take CCSA Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Check Point security training from anywhere with TechAcademy's certified CCSA instructors. Configure SmartConsole, deploy GAiA Security Gateways, and manage IPsec VPNs during live remote labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical SmartConsole labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review security rule bases, and get instant feedback during live configuration workshops." },
          { icon: "cap", title: "Check Point Certified Instructors", desc: "Learn from industry experts and Check Point-certified professionals with over 10+ years of experience." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine." },
          { icon: "globe", title: "24/7 Online Hardware Labs", desc: "Access dedicated Check Point GAiA appliances and virtual management servers remotely anytime, anywhere." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel expenses while receiving premier Check Point security administration training." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in our dedicated network security lab at TechAcademy's campus with direct face-to-face mentorship and real Check Point hardware configuration drills.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on GAiA administration in modern lab facilities." },
          { icon: "tools", title: "Complete Lab Solutions", desc: "Work on in-house labs equipped with Check Point firewall appliances and qualified lab assistants." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow network security administrators and engineers." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors for NAT rules, SmartEvent monitoring, and cluster failover." },
          { icon: "award", title: "Authorised Course Content", desc: "100% authentic course content based directly on the official Check Point CCSA syllabus." },
          { icon: "shield", title: "100% Written Job Guarantee", desc: "Participate in mock technical interviews, configuration reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master Check Point CCSA at your own speed with comprehensive on-demand video lectures, 30+ lab workbooks with step-by-step solutions, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, SmartConsole walkthroughs, and practical lab exercises anytime." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like ClusterXL, SmartUpdate licensing, and rule optimization." },
          { icon: "document", title: "Check Point-Based Study Material", desc: "Download complete study materials including workbooks with 30+ individual labs and CCSA notes." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your firewall administration queries answered promptly by our expert Check Point teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your skills with module quizzes, rule base challenges, and CCSA practice exams." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy Check Point certificate upon finishing all labs." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Check Point CCSA training programs delivered directly at your organization or custom venue, focusing on administering and securing your company's Check Point perimeter.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's Check Point gateway deployment, security blades, and policies." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Check Point consultants conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's maintenance windows, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill enterprise IT administrators and network engineers simultaneously on Check Point GAiA." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Optimize firewall rule bases, streamline security audits, and enhance corporate gateway uptime." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "CHECK POINT CERTIFIED INSTRUCTORS", description: "Our trainers are industry experts and Check Point-certified professionals with more than 10 years of experience." },
      { icon: "lightbulb", title: "FLEXIBLE BATCH TIMING", description: "TechAcademy offers flexible batch timings for students and working professionals on weekdays and weekends." },
      { icon: "project", title: "COMPLETE LAB SOLUTIONS", description: "In-house labs equipped with Checkpoint firewall devices and available 24/7 along with qualified lab assistants." },
      { icon: "resources", title: "CHECK POINT-BASED STUDY MATERIAL", description: "Professionally designed complete study material including workbooks with 30+ individual labs with solutions." },
      { icon: "award", title: "AUTHORISED COURSE CONTENT", description: "The CCSA course content is 100% authentic and based directly on the official Check Point syllabus." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "We provide a written guarantee that each and every student of ours will be placed in renowned IT firms." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CCSA };
}
