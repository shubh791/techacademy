/**
 * TechAcademy - Course Detail Dataset
 * Course: AWS Security Specialty
 * Source of Truth: Aivora X AWS Security Specialty Source HTML
 */

const COURSE_DATA_AWS_SECURITY = {
  id: "aws-security-specialty",
  title: "AWS Security Specialty",
  category: "Cloud Computing",
  categorySlug: "cloud-computing",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cloud Computing", href: "#" },
    { label: "AWS Security Specialty", href: "/courses/aws-security-specialty/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master cloud security with the AWS Security Specialty course. This program equips you with the expertise to secure AWS environments, manage identity and access, implement data protection, and monitor cloud workloads effectively. Learn best practices in cloud security, threat detection, compliance, and incident response while working with real-world AWS services. Graduate with hands-on experience and an industry-recognized certification, demonstrating your ability to secure cloud infrastructures in enterprise environments.",
    highlights: [
      "Master AWS IAM, Key Management Service (KMS), and CloudHSM data encryption",
      "Deploy perimeter defense and threat detection with AWS WAF, Shield, Security Hub, and Detective",
      "Prepare comprehensively for the official AWS Certified Security – Specialty (SCS-C02) exam"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "AWS Security Specialty Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Introduction to Cloud Security",
          "Identity & Access Management (IAM)",
          "AWS Key Management Service (KMS)",
          "Security of Compute Resources",
          "VPC, Security Groups, NACLs, and VPN",
          "Logging, Monitoring & Threat Detection",
          "Incident Response & Disaster Recovery Strategies",
          "Compliance, Governance & Auditing",
          "Data Protection: S3, RDS, and DynamoDB Security",
          "Application Security & Secure Deployment Practices",
          "AWS WAF, Shield, Security Hub, and Detective",
          "Simulating Security Threats and Mitigation Strategies",
          "End-to-End Secured AWS Environment Deployment"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "Basic knowledge of cloud computing and AWS fundamentals is recommended. Familiarity with AWS services like EC2, S3, and IAM will help you grasp advanced security concepts faster. This course is ideal for IT professionals, security enthusiasts, cloud architects, and system administrators looking to specialize in AWS cloud security."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain practical, hands-on experience to:",
        items: [
          "Implement and manage secure AWS environments",
          "Control access and permissions with IAM policies and best practices",
          "Encrypt and protect data across AWS services",
          "Monitor and detect security threats using AWS monitoring tools",
          "Respond effectively to incidents and implement disaster recovery strategies",
          "Ensure compliance with global regulatory standards",
          "Conduct real-world security projects in enterprise AWS environments"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "Specialize in one of the fastest-growing domains in cloud computing",
          "Unlock roles like Cloud Security Engineer, AWS Security Specialist, Cloud Architect, or Security Analyst",
          "Work with top IT companies, security-focused startups, and multinational enterprises",
          "Flexible career options: onsite in metro cities or remote projects with global clients",
          "Earn an average salary of ₹8–12 LPA in India, with senior cloud security roles growing to ₹20+ LPA",
          "Explore international opportunities with salaries ranging from $90,000–$140,000",
          "Build consulting, freelancing, and long-term career opportunities in cloud security"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon completion, you will receive an industry-recognized AWS Security Specialty certification from TechAcademy, validating your expertise in cloud security, compliance, and risk management. You will also receive guidance to pursue advanced security certifications such as Certified Cloud Security Professional (CCSP) or AWS Certified Advanced Networking – Specialty."
      }
    ],
    schedule: {
      duration: "60 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "Flexible schedules for students and working professionals. Join full-time, part-time, or online classes. Live online sessions provide interactive, high-quality learning from anywhere."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with leading IT firms, cloud service providers, and security-focused organizations to secure premium opportunities. With TechAcademy, you’ll graduate job-ready, security-ready, and cloud-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with leading IT firms, cloud service providers, and security-focused organizations to secure premium opportunities. With TechAcademy, you’ll graduate job-ready, security-ready, and cloud-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take AWS Security Specialty Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive AWS security training from anywhere with TechAcademy's certified security mentors. Configure KMS encryption, simulate penetration attacks, and set up Security Hub during live guided labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical cloud security labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review IAM policies, and get instant feedback during live vulnerability testing." },
          { icon: "cap", title: "Global Pool of Best Trainers", desc: "Learn from seasoned AWS-certified security specialists and enterprise SecOps architects." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive screen-sharing, and security toolkits." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel and lodging expenses while receiving premier cloud cybersecurity education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person cybersecurity defense lab at TechAcademy's modern training center with face-to-face mentorship and real-time threat detection drills.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on threat defense in modern lab facilities." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured workstations with enterprise security tools, WAF sandboxes, and SIEM connectors." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow cloud security engineers and compliance analysts." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on complex cryptographic policies and incident mitigation." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, security audit portfolio reviews, and hiring drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master AWS cloud security at your own speed with comprehensive on-demand video lectures, security policy templates, exam cheat sheets, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, security audit templates, and lab walkthroughs anytime, anywhere." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like GuardDuty algorithms, Macie discovery, and KMS envelope encryption." },
          { icon: "document", title: "Comprehensive Code & Notes", desc: "Download step-by-step IAM policy templates, incident response playbooks, and SCS-C02 exam notes." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your technical security queries answered promptly by our expert AWS teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with full-length SCS-C02 mock exams and diagnostic score breakdowns." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy AWS Security certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate AWS cloud security training programs delivered directly at your organization or custom venue, focusing on SOC 2 / ISO 27001 compliance and enterprise cloud defense.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's AWS cloud architecture, threat models, and compliance standards." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior cloud security architects conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's audit deadlines, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill SecOps, DevOps, and cloud engineering teams simultaneously on enterprise cloud hardening." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Mitigate breach risks, automate cloud compliance reporting, and ensure zero-trust cloud architecture." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "LEARN FROM INDUSTRY EXPERTS", description: "Gain knowledge from certified AWS security professionals with real-world experience." },
      { icon: "lightbulb", title: "NEXT-GEN SECURITY COURSE", description: "Master advanced AWS security services, compliance, and threat detection techniques." },
      { icon: "project", title: "REAL-TIME PROJECTS", description: "Work on securing cloud infrastructures and implementing enterprise-grade security measures." },
      { icon: "resources", title: "AI-POWERED RESOURCES", description: "Access labs, simulations, and security tools to reinforce practical learning." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized AWS Security Specialty certification." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into cloud security careers with our assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_AWS_SECURITY };
}
