/**
 * TechAcademy - Course Detail Dataset
 * Course: AWS Certified Cloud Practitioner
 * Source of Truth: Aivora X AWS Cloud Practitioner Source HTML
 */

const COURSE_DATA_AWS_CCP = {
  id: "aws-certified-cloud-practitioner",
  title: "AWS Certified Cloud Practitioner",
  category: "Cloud Computing",
  categorySlug: "cloud-computing",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cloud Computing", href: "#" },
    { label: "AWS Certified Cloud Practitioner", href: "/courses/aws-certified-cloud-practitioner/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Kickstart your cloud computing journey with the AWS Certified Cloud Practitioner course. This beginner-friendly program provides a comprehensive overview of Amazon Web Services (AWS), its core services, cloud concepts, and best practices. Learn to navigate the AWS ecosystem, understand security, compliance, and billing, and build a strong foundation to pursue advanced AWS certifications and cloud roles. Graduate with practical cloud skills and industry-recognized certification that make you job-ready.",
    highlights: [
      "Master fundamental AWS services: EC2, S3, RDS, VPC, Lambda, and IAM security",
      "Understand AWS global infrastructure, pricing models, billing, and cost optimization",
      "Complete preparation for the official AWS Certified Cloud Practitioner (CLF-C02) exam"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "AWS Certified Cloud Practitioner Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Introduction to Cloud Computing & AWS Ecosystem",
          "AWS Global Infrastructure & Regions",
          "Core AWS Services: Compute, Storage, Database, Networking",
          "Cloud Security Basics: IAM, Policies & Best Practices",
          "AWS Billing, Pricing, and Cost Optimization",
          "Cloud Deployment & Management Tools: AWS Management Console, CLI, and SDKs",
          "Monitoring & Logging: CloudWatch, CloudTrail, and Trusted Advisor",
          "Introduction to Serverless & Containers on AWS",
          "Compliance, Governance & Shared Responsibility Model",
          "Cloud Architecture Best Practices & Well-Architected Framework"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "No prior cloud or technical experience is required. This course is ideal for students, professionals, and entrepreneurs seeking to gain a solid understanding of AWS fundamentals. Basic computer skills and internet knowledge are sufficient."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain hands-on experience and practical skills to:",
        items: [
          "Understand AWS cloud concepts, core services, and global infrastructure",
          "Navigate the AWS Management Console, CLI, and SDKs",
          "Implement basic security, identity, and access management",
          "Manage billing, cost optimization, and resource monitoring",
          "Explore serverless computing and containerization basics",
          "Learn cloud best practices and architecture principles"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "Enter one of the fastest-growing and most in-demand tech careers globally",
          "Unlock roles like Cloud Support Associate, Cloud Operations Specialist, and Junior Cloud Engineer",
          "Work with IT firms, startups, and multinational companies using AWS cloud",
          "Flexible career options: onsite in major cities or remote cloud projects",
          "Earn an average salary of ₹3–5 LPA in India, with potential growth to ₹8+ LPA",
          "Explore international opportunities with salaries ranging from $50,000–$75,000",
          "Build expertise for freelancing, consulting, and career advancement in cloud computing"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon successful completion, you will receive an industry-recognized AWS Certified Cloud Practitioner certification from TechAcademy. This credential validates your knowledge of AWS cloud concepts and services, preparing you for roles such as Cloud Support Associate, Cloud Operations Specialist, or entry-level Cloud Engineer. You will also be guided to pursue advanced AWS certifications like Solutions Architect – Associate or AWS Developer Associate."
      }
    ],
    schedule: {
      duration: "40 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "Flexible schedules for students and working professionals. Join full-time, part-time, or online classes. Live online sessions ensure interactive, high-quality learning from anywhere."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with top IT firms, cloud-focused startups, and multinational companies using AWS. At TechAcademy, you’ll graduate job-ready, project-ready, and future-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team collaborates with top IT firms, cloud-focused startups, and multinational companies using AWS. At TechAcademy, you’ll graduate job-ready, project-ready, and future-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take AWS Certified Cloud Practitioner Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive AWS Cloud Practitioner training from anywhere with TechAcademy's certified cloud instructors. Navigate the AWS console, launch EC2 instances, and configure S3 buckets in live guided labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical AWS console labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, review service architectures, and get instant feedback during live sessions." },
          { icon: "cap", title: "Global Pool of Best Trainers", desc: "Learn from seasoned AWS-certified cloud engineers and enterprise architects." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive screen-sharing, and AWS Free Tier accounts." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Eliminate travel and lodging expenses while receiving premier cloud computing education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person cloud computing lab at TechAcademy's modern training center with direct face-to-face mentorship and guided AWS Free Tier lab sessions.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on cloud labs in modern facilities." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured workstations with fast connectivity and cloud management tools." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow cloud aspirants, developers, and IT administrators." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on IAM policies, billing alerts, and infrastructure setup." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, exam question reviews, and campus recruitment drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master AWS fundamentals at your own speed with comprehensive on-demand video lectures, exam cheat sheets, practice mock tests, and dedicated mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, architecture diagrams, and lab walkthroughs anytime, anywhere." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch foundational concepts like VPC subnets, S3 storage tiers, and IAM roles." },
          { icon: "document", title: "Comprehensive Code & Notes", desc: "Download step-by-step AWS CLI cheat sheets, exam cram sheets, and service comparison matrices." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your cloud concept queries answered promptly by our expert AWS teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your exam readiness with full-length CLF-C02 mock exams and diagnostic score breakdowns." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy Cloud Practitioner certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate AWS Cloud Practitioner training programs delivered directly at your organization or custom venue, focusing on cloud literacy and organizational cloud migration readiness.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's AWS cloud adoption roadmap and cost governance goals." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior AWS instructors conduct live workshops at your corporate offices or campus." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's project deliverables, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill cross-functional engineering, operations, and IT management teams simultaneously." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Accelerate cloud migration, optimize AWS billing, and establish strong security best practices." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "LEARN FROM INDUSTRY EXPERTS", description: "Gain insights from AWS-certified professionals with real-world experience." },
      { icon: "lightbulb", title: "NEXT-GEN CLOUD COURSE", description: "Master fundamental AWS services, security, and best practices." },
      { icon: "project", title: "REAL-TIME PROJECTS", description: "Work on guided cloud projects to build practical skills." },
      { icon: "resources", title: "AI-POWERED RESOURCES", description: "Access curated study materials, labs, and cloud toolkits." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized AWS Cloud Practitioner certification." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into your cloud career with assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_AWS_CCP };
}
