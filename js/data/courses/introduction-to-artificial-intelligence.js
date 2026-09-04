/**
 * TechAcademy - Course Detail Dataset
 * Course: Introduction to Artificial Intelligence
 * Source of Truth: Aivora X
 */

const COURSE_DATA_INTRO_AI = {
  id: "introduction-to-artificial-intelligence",
  title: "Introduction to Artificial Intelligence",
  category: "Artificial Intelligence",
  categorySlug: "artificial-intelligence",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Artificial Intelligence", href: "#" },
    { label: "Introduction to Artificial Intelligence", href: "/courses/introduction-to-artificial-intelligence/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master the fundamentals of Artificial Intelligence and explore how AI is transforming industries, businesses, and daily life. This course introduces you to the core concepts, applications, and tools of AI, giving you the foundation to pursue advanced learning and career opportunities.",
    highlights: [
      "Understand AI foundations, core concepts, and real-world applications",
      "Hands-on exposure with TensorFlow, OpenAI, and Google AI tools",
      "Beginner-friendly curriculum with zero prior coding required"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "Introduction to Artificial Intelligence Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "What is Artificial Intelligence.",
          "History & Evolution of AI.",
          "What is Machine Learning.",
          "Understanding chatbots.",
          "Natural Language Processing (NLP).",
          "Prompt engineering.",
          "Computer Vision & Image Recognition.",
          "OpenAI, TensorFlow, Google AI.",
          "AI in Everyday Life: Health, Finance & Education.",
          "AI in Business: Automation & Data-Driven Decision Making.",
          "Future Trends & Career Opportunities in AI."
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "Prerequisites",
        type: "prose",
        content: "There are no prerequisites for this course, making it suitable for students, professionals, and entrepreneurs from any background. Basic computer skills and curiosity about technology are sufficient. No coding knowledge is required, as tools and concepts will be introduced step by step."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "What Will You Learn?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain practical insights into the world of Artificial Intelligence. This course will help you:",
        items: [
          "Understand AI foundations, core concepts, and applications",
          "Explore Machine Learning, Deep Learning & NLP at a beginner level",
          "Use AI tools like TensorFlow, Google AI, and OpenAI",
          "Learn how AI is applied in industries like finance, healthcare, and marketing",
          "Develop awareness of ethical and responsible AI practices",
          "Build a strong foundation to pursue advanced AI and ML courses"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "How You’ll Benefit?",
        type: "list",
        items: [
          "Kickstart your journey in AI and future technologies",
          "Become eligible for entry-level roles like AI Assistant, Data Analyst Intern, or Junior AI Support Specialist",
          "Work with IT firms, startups, and AI-focused companies",
          "Flexible career options: onsite in major cities or remote project-based opportunities",
          "Earn an average salary of ₹3–4.5 LPA in India, with growth to ₹6–8 LPA as you gain skills",
          "International opportunities starting at $35,000–$50,000 annually",
          "Build a strong foundation for freelancing, consulting, or advancing into Machine Learning and Deep Learning careers"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "Certification",
        type: "prose",
        content: "Upon completion of the Introduction to Artificial Intelligence course, you’ll receive an industry-recognized certification from TechAcademy. You will also be guided to pursue global credentials such as Microsoft AI Fundamentals or Google Cloud AI Fundamentals, opening pathways for entry-level AI and tech roles across industries."
      }
    ],
    schedule: {
      duration: "40 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "We offer flexible schedules for students and working professionals. You can join full-time, part-time, or online batches. Our live online classes ensure the same level of high-quality learning with the flexibility to study from anywhere."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% job guarantee in writing to our students. Our placement team connects with top IT companies, AI startups, and digital businesses to secure opportunities for beginners. Since AI is being adopted across industries—IT, healthcare, retail, finance, and education—our placement network ensures wide career coverage. With our training, you’ll graduate job-ready, project-ready, and future-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% job guarantee in writing to our students. Our placement team connects with top IT companies, AI startups, and digital businesses to secure opportunities for beginners. Since AI is being adopted across industries—IT, healthcare, retail, finance, and education—our placement network ensures wide career coverage. With our training, you’ll graduate job-ready, project-ready, and future-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take Introduction to Artificial Intelligence Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive training from home with TechAcademy's expert instructors, mirroring the classroom schedule for a comprehensive learning journey. Engage directly with expert instructors and peers without compromising on the quality of interaction.",
        features: [
          {
            icon: "camera",
            title: "Live Interactive Classes",
            desc: "Join scheduled online classes with real-time mentor interaction and peer discussions."
          },
          {
            icon: "microphone",
            title: "Direct Instructor Support",
            desc: "Engage directly with instructors, ask questions, and clarify concepts instantly."
          },
          {
            icon: "cap",
            title: "Global Pool of Best Trainers",
            desc: "We handpick from a global pool of expert trainers with 10+ years of real-world AI experience."
          },
          {
            icon: "calendar",
            title: "Flexible Batch Schedules",
            desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine."
          },
          {
            icon: "award",
            title: "Hands-on Toolkits & Labs",
            desc: "Gain practical exposure with TensorFlow, OpenAI, and Google AI development tools."
          }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "In-person, immersive classroom training in state-of-the-art learning facilities with dedicated hands-on guidance, networking opportunities, and group problem-solving.",
        features: [
          {
            icon: "building",
            title: "Modern Training Venues",
            desc: "High-quality classroom facilities designed for comfortable, distraction-free learning."
          },
          {
            icon: "users",
            title: "Collaborative Learning",
            desc: "Engage in peer networking, group discussions, and interactive team problem-solving."
          },
          {
            icon: "certificate",
            title: "Accredited Certification",
            desc: "Complete practical coursework and graduate with accredited TechAcademy credentials."
          },
          {
            icon: "calendar",
            title: "Structured Timetable",
            desc: "Scheduled classroom hours with direct faculty guidance and campus resources."
          },
          {
            icon: "expert",
            title: "In-Person Mentorship",
            desc: "Get 1-on-1 feedback and practical troubleshooting from experienced AI instructors."
          }
        ]
      },
      {
        id: "full-time",
        title: "Full-Time Batches",
        description: "Fast-track your AI skills with intensive full-time learning sessions designed for students and career switchers looking to master AI foundations rapidly.",
        features: [
          {
            icon: "calendar",
            title: "Weekday Batches",
            desc: "Monday – Friday intensive schedule with daily mentor-led learning sessions."
          },
          {
            icon: "clock",
            title: "Accelerated 40-Hour Track",
            desc: "Complete the entire comprehensive curriculum in focused, continuous learning sprints."
          },
          {
            icon: "projects",
            title: "Daily Guided Lab Work",
            desc: "Work on practical case studies and toolkits to start building your AI portfolio."
          },
          {
            icon: "users",
            title: "Dedicated Cohort",
            desc: "Collaborate and practice with a focused peer group throughout the course duration."
          },
          {
            icon: "guarantee",
            title: "100% Job Guarantee Track",
            desc: "Benefit from written placement guarantee and dedicated career advisory support."
          }
        ]
      },
      {
        id: "part-time",
        title: "Part-Time Batches",
        description: "A balanced learning schedule tailored specifically for working professionals, offering weekend flexibility to upskill in Artificial Intelligence without interrupting your work commitments.",
        features: [
          {
            icon: "calendar",
            title: "Weekend Batches",
            desc: "Saturday & Sunday flexible sessions designed around your professional work routine."
          },
          {
            icon: "headset",
            title: "Continuous Mentor Support",
            desc: "Get your doubts resolved through dedicated support channels during weekdays."
          },
          {
            icon: "cap",
            title: "Same Accredited Curriculum",
            desc: "Receive the exact same 40-hour syllabus, practical tools, and global certification."
          },
          {
            icon: "clock",
            title: "Flexible Study Pace",
            desc: "Review recorded class sessions and practical assignments at your own pace."
          },
          {
            icon: "briefcase",
            title: "Career Transition Guidance",
            desc: "Tailored career coaching for working professionals looking to transition to AI roles."
          }
        ]
      }
    ]
  },
  whyChoose: {
    heading: "Why choose TechAcademy",
    items: [
      {
        icon: "expert",
        title: "LEARN FROM INDUSTRY EXPERTS",
        description: "Learn directly from AI professionals with hands-on industry experience, bringing you practical insights along with theory."
      },
      {
        icon: "course",
        title: "NEXT-GEN AI COURSE",
        description: "Build a strong foundation with a curriculum focused on the latest AI tools, techniques, and real-world applications."
      },
      {
        icon: "projects",
        title: "REAL-TIME PROJECTS",
        description: "Work on guided projects and case studies that help you apply concepts and start building a professional portfolio."
      },
      {
        icon: "resources",
        title: "AI-POWERED RESOURCES",
        description: "Get access to curated study material, datasets, and toolkits that simplify complex AI concepts for easy learning."
      },
      {
        icon: "certificate",
        title: "EARN A CERTIFICATE",
        description: "Earn a globally recognized certification that strengthens your credibility and opens doors to new opportunities."
      },
      {
        icon: "guarantee",
        title: "100% JOB GUARANTEE",
        description: "Step confidently into the AI industry with our assured placement support and written job guarantee."
      }
    ]
  }
};

if (typeof window !== "undefined") {
  window.COURSE_DATA_INTRO_AI = COURSE_DATA_INTRO_AI;
}
