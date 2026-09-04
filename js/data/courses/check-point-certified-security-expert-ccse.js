/**
 * TechAcademy - Course Detail Dataset
 * Course: CCSE (Check Point Certified Security Expert)
 * Source of Truth: Aivora X CCSE Source HTML
 */

const COURSE_DATA_CCSE = {
  id: "check-point-certified-security-expert-ccse",
  title: "CCSE (Check Point Certified Security Expert)",
  category: "Network Security",
  categorySlug: "network-security",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Network Security", href: "#" },
    { label: "CCSE (Check Point Certified Security Expert)", href: "/courses/check-point-certified-security-expert-ccse/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "CCSE course teaches how to build, modify, deploy and troubleshoot Check Point Security Systems on the Check Point tools. You will also have a hands-on lab experience on how to debug firewall processes, optimize VPN performance and upgrade Management Servers. This course is valuable for those looking to push their career in Network security.",
    highlights: [
      "Advanced Check Point debugging, Kernel diagnostics (fw ctl), and performance tuning",
      "Build, test, and troubleshoot ClusterXL High Availability and CoreXL acceleration",
      "Prepare for the Check Point Certified Security Expert (CCSE #156-315.81) certification"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "CCSE (Check Point Certified Security Expert) Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Security Gateway Backup and Management Server Architecture",
          "Build, Test and Troubleshoot a Clustered Security Gateway (ClusterXL)",
          "Upgrade and Troubleshoot a Management Server (MDS / SmartCenter)",
          "Configure and Maintain Security Acceleration Solutions (SecureXL & CoreXL)",
          "Manage, Test and Optimize Corporate Site-to-Site & Remote VPN Tunnels",
          "Advanced User Management and Identity Awareness",
          "Advanced Kernel Debugging and Firewall Process Inspection",
          "Threat Prevention Engine Optimization and Compliance Reporting"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Pre-requisites",
        type: "prose",
        content: "According to the Check Point website, it is required to complete the CCSA certification (R80/R81) to pursue the course. You will also need to have the basic knowledge of Windows Server, UNIX/Linux, and enterprise networking."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "What Will You Learn ?",
        type: "list_with_intro",
        intro: "During the CCSE course training, you will learn to debug firewall processes, optimize VPN tunnels, and master clustering and acceleration:",
        items: [
          "Learn how to build, test and troubleshoot numerous deployment scenarios",
          "You will learn how to build, modify, deploy and troubleshoot Check Point Security Systems on the GAiA operating system distinguishing you from your peers",
          "Understand how to apply insider tips troubleshooting Check Point Security Systems",
          "Learn how to migrate to a clustering security solution",
          "Know how to create events for compliance reporting",
          "Learn to manage internal and external access to corporate resources"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "How you'll benefit?",
        type: "list",
        items: [
          "Attaining a CCSE certification is a great way to further your career and become a senior IT security professional",
          "The CCSE certification will make you eligible for higher ranking jobs within organizations with increased job responsibilities",
          "The salary of a CCSE certified professional in the IT industry reaches up to ₹15–21+ lakhs in India",
          "No doubt, CCSE certification is a globally recognized credential opening doors to high-paying jobs worldwide"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "Certification",
        type: "prose",
        content: "TechAcademy helps you prepare for the Check Point certification exams. Once you are ready for the exam, register at Pearson Vue. The duration of the exam is 90 minutes with 90 questions. You need 70% to pass. After passing, you receive a global Check Point Certified Security Expert (CCSE) certificate."
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
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. Our placement team arranges personalized interviews with leading IT firms and global networking giants.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "Everything said, we provide a 100% job guarantee in writing to our students. We work with multinational companies and have an unmatched track record of placing our students in renowned workplaces. Our placement team arranges personalized interviews with leading IT firms and global networking giants.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take CCSE Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Check Point CCSE expert training from anywhere with TechAcademy's certified instructors. Debug firewall kernels, tune SecureXL acceleration, and troubleshoot complex VPN tunnels in real time.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical GAiA kernel debugging labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review firewall logs, and get instant feedback during live troubleshooting drills." },
          { icon: "cap", title: "Check Point Certified Instructors", desc: "Learn from senior Check Point CCSE/CCSM-certified professionals with 10+ years of enterprise experience." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your schedule." },
          { icon: "globe", title: "24/7 Online Hardware Labs", desc: "Access high-performance Check Point GAiA clustering labs remotely anytime, anywhere." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel expenses while receiving premier Check Point expert security training." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in our advanced Check Point engineering lab at TechAcademy's campus with direct face-to-face mentorship and hands-on ClusterXL testing.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on advanced security implementation in modern labs." },
          { icon: "tools", title: "Complete Lab Solutions", desc: "Work on dedicated hardware appliances equipped with Check Point GAiA R80/R81 and acceleration cards." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow senior network security engineers and architects." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors for complex CoreXL tuning, fw monitor packet analysis, and VPN routing." },
          { icon: "award", title: "Authorised Course Content", desc: "100% authentic course content based directly on the official Check Point CCSE syllabus." },
          { icon: "shield", title: "100% Written Job Guarantee", desc: "Participate in mock technical interviews, showreel reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master Check Point CCSE at your own speed with comprehensive on-demand video lectures, 30+ expert lab workbooks with step-by-step solutions, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, kernel inspection guides, and lab walkthroughs anytime." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like ClusterXL sync, SecureXL templates, and Threat Emulation." },
          { icon: "document", title: "Check Point-Based Study Material", desc: "Download complete study materials including workbooks with 30+ individual labs and CCSE notes." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your technical queries answered promptly by our expert Check Point teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your skills with module quizzes, diagnostic challenges, and CCSE practice exams." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy CCSE certificate upon finishing all labs." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Check Point CCSE training programs delivered directly at your organization or custom venue, focusing on enterprise clustering, acceleration, and incident troubleshooting.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's Check Point infrastructure, MDS architecture, and security policies." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Check Point architects conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's maintenance windows, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill enterprise network engineering and SOC teams simultaneously on Check Point expert technologies." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Accelerate incident resolution, optimize gateway throughput, and minimize downtime across corporate gateways." },
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
      { icon: "award", title: "AUTHORISED COURSE CONTENT", description: "The CCSE course content is 100% authentic and based directly on the official Check Point CCSE syllabus." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "We provide a written guarantee that each and every student of ours will be placed in renowned IT firms." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CCSE };
}
