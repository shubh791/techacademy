/**
 * TechAcademy - Course Detail Dataset
 * Course: Microsoft Azure Administrator Associate (AZ-104)
 * Source of Truth: Aivora X Azure Administrator Source HTML
 */

const COURSE_DATA_AZURE_ADMIN = {
  id: "microsoft-azure-administrator-associate",
  title: "Microsoft Azure Administrator Associate",
  category: "Cloud Computing",
  categorySlug: "cloud-computing",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cloud Computing", href: "#" },
    { label: "Microsoft Azure Administrator Associate", href: "/courses/microsoft-azure-administrator-associate/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Become a certified Azure Administrator and gain the skills to manage, deploy, and monitor cloud resources in Microsoft Azure. This course equips you with practical, hands-on experience to administer core Azure services, implement security and compliance measures, and optimize cloud solutions. Graduate with the confidence and expertise required to handle real-world Azure environments and take your career to the next level.",
    highlights: [
      "Administer Azure compute, storage, virtual networks, and Entra ID identities",
      "Automate cloud operations using Azure PowerShell, Azure CLI, and ARM / Bicep templates",
      "Prepare thoroughly for the official Microsoft Azure Administrator Associate (AZ-104) certification"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "Microsoft Azure Administrator Associate Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Introduction to Microsoft Azure Administration",
          "Managing Azure Subscriptions, and Resource Groups",
          "Implementing Storage Solutions: Blobs, Files, and Disks",
          "VM Deployment, Configuration & Management",
          "Virtual Networks, NSGs, VPNs, and Load Balancers",
          "Identity & Access Management",
          "Monitoring & Diagnostics",
          "Azure Backup, and Disaster Recovery Solutions",
          "Implementing Security Best Practices",
          "Automation with Azure PowerShell, CLI, and ARM",
          "Optimizing Azure Cost, Performance, and Resource Utilization"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Pre-requisites",
        type: "prose",
        content: "Basic understanding of cloud computing, networking, and IT infrastructure is recommended. Familiarity with Microsoft Azure Fundamentals (AZ-900) is beneficial but not mandatory. This course is suitable for IT professionals, system administrators, and anyone aiming to build a career as an Azure Administrator."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain hands-on skills to:",
        items: [
          "Deploy, manage, and scale Azure resources efficiently",
          "Implement identity and access management solutions",
          "Configure networking, storage, and virtual machines in Azure",
          "Monitor, troubleshoot, and optimize cloud solutions",
          "Automate tasks using Azure PowerShell, CLI, and ARM templates",
          "Ensure security, compliance, and disaster recovery in cloud environments",
          "Prepare for AZ-104 certification and advanced Azure roles"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "Enter the high-demand cloud administration career path",
          "Unlock roles such as Azure Administrator, Cloud Operations Engineer, or IT Cloud Specialist",
          "Work with IT firms, startups, and enterprises leveraging Azure services",
          "Flexible career options: onsite in major cities or remote cloud projects",
          "Earn an average salary of ₹5–7 LPA in India, with growth potential to ₹12+ LPA",
          "Explore international opportunities with salaries ranging from $60,000–$90,000",
          "Gain expertise for long-term, future-proof careers in cloud computing"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon successful completion, you will earn the Microsoft Azure Administrator Associate (AZ-104) certification from TechAcademy, validating your ability to manage and maintain Azure environments. This certification is globally recognized and opens pathways to roles such as Azure Administrator, Cloud Engineer, IT Support Specialist, or Cloud Consultant."
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
    description: "We provide a 100% written job guarantee for all students. Our placement team partners with top IT companies, cloud service providers, and enterprises using Azure solutions. At TechAcademy, you’ll graduate job-ready, cloud-ready, and career-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team partners with top IT companies, cloud service providers, and enterprises using Azure solutions. At TechAcademy, you’ll graduate job-ready, cloud-ready, and career-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take Microsoft Azure Administrator Associate Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Azure administration training from anywhere with TechAcademy's certified cloud instructors. Deploy Azure VMs, manage VNet peering, and automate tasks using PowerShell during live guided labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical Azure administration labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, debug ARM templates, and get instant feedback during live infrastructure provisioning." },
          { icon: "cap", title: "Global Pool of Best Trainers", desc: "Learn from seasoned Microsoft Certified Azure Administrators managing large enterprise tenants." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive screen-sharing, and Azure subscriptions." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel and lodging expenses while receiving premier cloud administration education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person cloud infrastructure lab at TechAcademy's modern training center with direct face-to-face mentorship and guided Azure sandbox access.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on system administration in modern facilities." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured workstations with enterprise Azure subscriptions and automation tools." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow system administrators, DevOps engineers, and cloud aspirants." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on virtual networking, storage replication, and Azure Backup." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, administration scenario reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master Azure administration at your own speed with comprehensive on-demand video lectures, PowerShell scripts, ARM templates, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, resource management guides, and lab walkthroughs anytime, anywhere." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like Azure Load Balancers, Application Gateways, and Bicep scripts." },
          { icon: "document", title: "Comprehensive Code & Notes", desc: "Download step-by-step PowerShell snippets, ARM templates, and AZ-104 exam cram notes." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your administrative and configuration queries answered promptly by our expert Azure assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with full-length AZ-104 practice exams and diagnostic score breakdowns." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy Azure Administrator certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Azure administration training programs delivered directly at your organization or custom venue, focusing on standardizing your company's cloud infrastructure operations.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's Azure tenant, subscription governance, and cost optimization." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Azure cloud consultants conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's maintenance windows, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill IT operations, system administrators, and infrastructure teams simultaneously." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Automate manual admin tasks, optimize cloud resource utilization, and eliminate downtime." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "LEARN FROM INDUSTRY EXPERTS", description: "Gain guidance from certified Azure professionals with real-world experience." },
      { icon: "lightbulb", title: "NEXT-GEN CLOUD COURSE", description: "Master Azure administration tools, services, and best practices." },
      { icon: "project", title: "REAL-TIME PROJECTS", description: "Deploy and manage Azure resources in live lab environments." },
      { icon: "resources", title: "AI-POWERED RESOURCES", description: "Access interactive tutorials, labs, and study materials." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized Microsoft Azure Administrator Associate certification." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into cloud roles with our assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_AZURE_ADMIN };
}
