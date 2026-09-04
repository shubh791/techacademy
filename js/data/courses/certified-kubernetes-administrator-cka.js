/**
 * TechAcademy - Course Detail Dataset
 * Course: Certified Kubernetes Administrator (CKA)
 * Source of Truth: Aivora X CKA Source HTML
 */

const COURSE_DATA_CKA = {
  id: "certified-kubernetes-administrator-cka",
  title: "Certified Kubernetes Administrator (CKA)",
  category: "Cloud Computing",
  categorySlug: "cloud-computing",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Cloud Computing", href: "#" },
    { label: "Certified Kubernetes Administrator (CKA)", href: "/courses/certified-kubernetes-administrator-cka/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master Kubernetes, the leading container orchestration platform, and gain the skills to deploy, manage, and scale containerized applications efficiently. This course prepares you for the Certified Kubernetes Administrator (CKA) certification while providing hands-on experience in managing production-grade Kubernetes clusters. Graduate ready to lead DevOps, cloud, and containerized application projects.",
    highlights: [
      "Deploy, configure, and maintain production-grade Kubernetes clusters with kubeadm & managed cloud engines",
      "Master Pods, Deployments, StatefulSets, Services, Ingress, Persistent Storage, and Network Policies",
      "Complete hands-on preparation for the official Linux Foundation / CNCF CKA performance-based exam"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "Certified Kubernetes Administrator (CKA) Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Introduction to Kubernetes & Container Orchestration",
          "Kubernetes Architecture: Nodes, Pods, Services, and Controllers",
          "Setting Up Kubernetes Clusters: Minikube, kubeadm, and Managed Services",
          "Core Concepts: Deployments, ReplicaSets, StatefulSets, and DaemonSets",
          "Networking in Kubernetes: Services, Ingress, DNS, and Network Policies",
          "Storage Management: Persistent Volumes, Persistent Volume Claims, and Storage Classes",
          "ConfigMaps, Secrets, and Environment Configuration",
          "RBAC & Security Best Practices in Kubernetes",
          "Monitoring, Logging, and Troubleshooting Clusters",
          "Scaling Applications and Clusters: Horizontal & Vertical Pod Autoscaling",
          "Helm Charts & Package Management",
          "Backup, Disaster Recovery, and Cluster Maintenance",
          "Real-World Projects: Deploying Microservices, CI/CD Pipelines, and Multi-Cluster Management",
          "Exam Preparation: Sample Labs, Scenarios, and CKA Exam Practice"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "Basic knowledge of Linux, Docker, and cloud infrastructure is recommended. Familiarity with containerization and DevOps concepts is helpful but not mandatory. This program is ideal for system administrators, DevOps engineers, cloud professionals, and software engineers aiming to specialize in Kubernetes."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain practical, hands-on expertise to:",
        items: [
          "Deploy, manage, and maintain Kubernetes clusters",
          "Scale, monitor, and troubleshoot containerized applications",
          "Implement security, RBAC, and best practices in Kubernetes environments",
          "Automate deployment workflows with Helm and CI/CD pipelines",
          "Configure networking, storage, and service discovery for real-world applications",
          "Optimize clusters for performance, reliability, and high availability",
          "Prepare comprehensively for the CKA certification exam"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU'LL BENEFIT?",
        type: "list",
        items: [
          "Enter one of the fastest-growing fields in cloud and DevOps globally",
          "Unlock roles like Kubernetes Administrator, DevOps Engineer, Cloud Engineer, or SRE",
          "Work with startups, IT firms, cloud service providers, and multinational companies",
          "Flexible career options: onsite in metro cities or remote global projects",
          "Earn an average salary of ₹7–12 LPA in India, with potential growth to ₹20+ LPA",
          "Explore international opportunities with salaries ranging from $70,000–$130,000",
          "Build a future-proof career in containerization, DevOps, and cloud-native technologies"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon successful completion, you will receive the Certified Kubernetes Administrator (CKA) certification from TechAcademy, validating your ability to manage and operate Kubernetes clusters effectively. This certification is globally recognized and prepares you for roles such as Kubernetes Administrator, DevOps Engineer, Cloud Engineer, or Site Reliability Engineer (SRE)."
      }
    ],
    schedule: {
      duration: "80 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "Flexible schedules for students and working professionals. Join full-time, part-time, or online classes. Live online sessions provide the same interactive, high-quality learning experience."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team works with leading cloud, DevOps, and IT companies, ensuring that graduates are job-ready, project-ready, and Kubernetes-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee for all students. Our placement team works with leading cloud, DevOps, and IT companies, ensuring that graduates are job-ready, project-ready, and Kubernetes-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take Certified Kubernetes Administrator (CKA) Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Kubernetes training from anywhere with TechAcademy's certified CKA instructors. Bootstrap multi-node clusters, debug network policies, and configure storage during live terminal labs.",
        features: [
          { icon: "camera", title: "Live Interactive Classes", desc: "Join scheduled online classes with real-time mentor interaction and practical kubectl CLI labs." },
          { icon: "microphone", title: "Direct Instructor Support", desc: "Ask questions, troubleshoot cluster failures, and get instant feedback during live performance scenarios." },
          { icon: "cap", title: "Global Pool of Best Trainers", desc: "Learn from seasoned CNCF-certified Kubernetes engineers running production clusters at scale." },
          { icon: "calendar", title: "Flexible Batch Schedules", desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your schedule." },
          { icon: "globe", title: "Accessible Anywhere", desc: "Attend classes from anywhere with high-speed internet, interactive terminal sharing, and cloud VM labs." },
          { icon: "credit-card", title: "Cost-Effective Learning", desc: "Save on travel and lodging while receiving premier container orchestration education." }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "Immerse yourself in an in-person cloud-native lab at TechAcademy's modern facility with direct face-to-face mentorship and real-time cluster troubleshooting drills.",
        features: [
          { icon: "building", title: "In-Person Classroom Interaction", desc: "Experience focused face-to-face discussions and hands-on cluster management in modern labs." },
          { icon: "tools", title: "Fully Equipped High-End Labs", desc: "Work on pre-configured Linux workstations with multi-node bare-metal and cloud cluster access." },
          { icon: "users", title: "Peer Collaboration & Networking", desc: "Build strong professional connections with fellow DevOps engineers, SREs, and system admins." },
          { icon: "chat", title: "Immediate 1-on-1 Guidance", desc: "Receive instant guidance from mentors on Ingress controllers, PV/PVC storage drivers, and RBAC." },
          { icon: "award", title: "Structured Learning Atmosphere", desc: "Stay disciplined with a dedicated learning schedule and direct access to campus resources." },
          { icon: "shield", title: "100% Placement & Interview Prep", desc: "Participate in mock technical interviews, Kubernetes scenario tests, and campus hiring drives." }
        ]
      },
      {
        id: "online-self-paced",
        title: "Online (Self-Paced)",
        description: "Master Kubernetes administration at your own speed with comprehensive on-demand video lectures, YAML manifest templates, CKA mock exams, and mentor Q&A support.",
        features: [
          { icon: "video", title: "24/7 On-Demand Access", desc: "Access HD video lessons, cluster setup guides, and practical lab walkthroughs anytime, anywhere." },
          { icon: "clock", title: "Learn at Your Own Pace", desc: "Pause, rewind, and re-watch complex topics like etcd backup/restore, CNI plugins, and cluster upgrades." },
          { icon: "document", title: "Comprehensive Code & Notes", desc: "Download step-by-step YAML manifests, kubectl command cheat sheets, and CKA exam tips." },
          { icon: "headset", title: "Dedicated Q&A Support", desc: "Get your technical Kubernetes queries answered promptly by our expert CNCF teaching assistants." },
          { icon: "chart", title: "Self-Assessment Quizzes", desc: "Test your skills with timed, performance-based CKA lab simulator exams." },
          { icon: "certificate", title: "Verified Certificate of Completion", desc: "Receive an accredited TechAcademy CKA certificate upon finishing all modules." }
        ]
      },
      {
        id: "onsite",
        title: "Onsite Training",
        description: "Tailored corporate Kubernetes training programs delivered directly at your organization or custom venue, focusing on containerizing legacy applications and establishing enterprise Kubernetes operations.",
        features: [
          { icon: "briefcase", title: "Custom Enterprise Curriculum", desc: "Tailored syllabus aligned with your company's microservices stack, CI/CD pipelines, and cloud platform." },
          { icon: "location", title: "Training at Your Location", desc: "Our senior Kubernetes architects conduct live workshops at your corporate headquarters." },
          { icon: "clock", title: "Flexible Corporate Scheduling", desc: "Schedule sessions around your team's release sprints, work hours, or offsite retreats." },
          { icon: "users", title: "Team-Wide Collaboration", desc: "Upskill DevOps, platform engineering, and developer teams simultaneously on cloud-native operations." },
          { icon: "graph", title: "Measurable Business ROI", desc: "Standardize application deployments, accelerate time-to-market, and reduce cloud infrastructure costs." },
          { icon: "shield", title: "Dedicated Account Manager", desc: "End-to-end corporate coordination, progress tracking, and detailed employee assessment reports." }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why Choose TechAcademy?",
    items: [
      { icon: "expert", title: "LEARN FROM INDUSTRY EXPERTS", description: "Gain knowledge from certified Kubernetes professionals with real-world experience." },
      { icon: "lightbulb", title: "NEXT-GEN KUBERNETES COURSE", description: "Master advanced container orchestration, deployment, and cluster management techniques." },
      { icon: "project", title: "REAL-TIME PROJECTS", description: "Work on microservices deployment, CI/CD pipelines, and multi-cluster scenarios." },
      { icon: "resources", title: "AI-POWERED RESOURCES", description: "Access curated labs, tutorials, and cloud resources for interactive learning." },
      { icon: "award", title: "EARN A CERTIFICATE", description: "Receive a globally recognized CKA certification." },
      { icon: "guarantee", title: "100% JOB GUARANTEE", description: "Step confidently into Kubernetes and DevOps roles with assured placement support." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { COURSE_DATA_CKA };
}
