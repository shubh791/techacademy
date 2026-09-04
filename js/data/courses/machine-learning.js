/**
 * TechAcademy - Course Detail Dataset
 * Course: Machine Learning
 * Source of Truth: Aivora X Machine Learning Source HTML
 */

const COURSE_DATA_MACHINE_LEARNING = {
  id: "machine-learning",
  title: "Machine Learning",
  category: "Artificial Intelligence",
  categorySlug: "artificial-intelligence",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Artificial Intelligence", href: "#" },
    { label: "Machine Learning", href: "/courses/machine-learning/" }
  ],
  hero: {
    badge: "Online and Live Classroom Training Available",
    description: "Master the principles of Machine Learning and discover how algorithms can learn from data to make predictions and decisions. This course introduces you to the foundations of ML, core algorithms, and real-world applications, equipping you with the skills to work on AI-driven projects and pursue advanced roles in data science and AI.",
    highlights: [
      "Master supervised, unsupervised, and reinforcement learning foundations",
      "Work with core ML algorithms, feature engineering, and neural network basics",
      "Build, evaluate, and optimize predictive models with hands-on projects"
    ],
    primaryCtaText: "Enquire Now",
    primaryCtaHref: "#enquire-sidebar",
    secondaryCtaText: "View Course Syllabus",
    secondaryCtaHref: "#course-overview"
  },
  overview: {
    heading: "Machine Learning Training Overview",
    tabs: [
      {
        id: "syllabus",
        label: "Course syllabus",
        title: "Course Outline",
        type: "list",
        items: [
          "Machine Learning & AI Ecosystem",
          "Types of Machine Learning",
          "Python Essentials for ML",
          "Key Algorithms",
          "Feature Engineering & Data Preprocessing",
          "Model Training, Testing & Evaluation",
          "Overfitting, Underfitting & Optimization Techniques",
          "Neural Networks & Deep Learning Basics",
          "Real-World Applications",
          "Future of Machine Learning & Career Paths"
        ],
        initialVisibleCount: 6
      },
      {
        id: "prerequisites",
        label: "Prerequisites",
        title: "PRE-REQUISITES",
        type: "prose",
        content: "Basic understanding of Python and data handling is recommended, though beginners with logical thinking can also join. Completing “Data Science with Python” before this course is helpful but not mandatory."
      },
      {
        id: "what-you-learn",
        label: "What you'll learn",
        title: "WHAT WILL YOU LEARN?",
        type: "list_with_intro",
        intro: "At TechAcademy, you’ll gain hands-on knowledge of Machine Learning concepts and applications:",
        items: [
          "Understand supervised, unsupervised, and reinforcement learning models",
          "Work with ML algorithms for prediction and classification",
          "Learn to prepare, clean, and process datasets for model building",
          "Evaluate model performance and optimize accuracy",
          "Explore neural networks and basics of Deep Learning",
          "Apply ML concepts in real-world case studies and projects",
          "Build a portfolio of ML projects to showcase to employers"
        ]
      },
      {
        id: "benefits",
        label: "Benefits",
        title: "HOW YOU’LL BENEFIT?",
        type: "list",
        items: [
          "Kickstart your career in Machine Learning and AI",
          "Become eligible for roles like ML Engineer, Data Scientist, or AI Specialist",
          "Work with IT firms, AI startups, and data-driven companies",
          "Flexible opportunities: full-time corporate jobs, freelancing, or remote roles",
          "Average starting salary of ₹5–7 LPA in India, with growth up to ₹12–15 LPA",
          "International opportunities starting at $55,000–$80,000 annually",
          "Build a solid base to advance into Deep Learning, Computer Vision, and NLP"
        ]
      },
      {
        id: "certification",
        label: "Certification",
        title: "CERTIFICATION",
        type: "prose",
        content: "Upon completing the Machine Learning course, you’ll receive an industry-recognized certification from TechAcademy. You’ll also be guided towards global certifications like AWS Machine Learning Specialty or Microsoft Azure AI Engineer Associate, enhancing your career opportunities in AI and ML roles."
      }
    ],
    schedule: {
      duration: "40 Hours",
      weekday: "Monday – Friday",
      weekend: "Saturday & Sunday",
      note: "We offer flexible schedules for students and working professionals. You can join full-time, part-time, or online batches. Our live online classes provide the same high-quality learning with the flexibility to study from anywhere."
    }
  },
  cta: {
    eyebrow: "ASSURED CAREER OUTCOME",
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee to all students. Our placement team collaborates with IT companies, AI startups, and enterprise firms adopting ML solutions. Since Machine Learning is in demand across industries like healthcare, finance, retail, and technology, our network ensures wide career coverage. With TechAcademy, you’ll graduate job-ready, project-ready, and future-ready.",
    buttonLabel: "Enquire for Placement Support",
    buttonHref: "#enquire-sidebar"
  },
  jobGuarantee: {
    title: "100% JOB GUARANTEE",
    description: "We provide a 100% written job guarantee to all students. Our placement team collaborates with IT companies, AI startups, and enterprise firms adopting ML solutions. Since Machine Learning is in demand across industries like healthcare, finance, retail, and technology, our network ensures wide career coverage. With TechAcademy, you’ll graduate job-ready, project-ready, and future-ready.",
    ctaText: "Enquire for Placement Support",
    ctaHref: "#enquire-sidebar"
  },
  delivery: {
    heading: "Ways to take Machine Learning Training",
    methods: [
      {
        id: "online-live",
        title: "Online Live Training",
        description: "Experience live, interactive Machine Learning training from home with TechAcademy's expert instructors, mirroring the classroom schedule for a comprehensive learning journey. Engage directly with expert instructors, ask questions, and build models in real time.",
        features: [
          {
            icon: "camera",
            title: "Live Interactive Classes",
            desc: "Join scheduled online classes with real-time mentor interaction and practical model building."
          },
          {
            icon: "microphone",
            title: "Direct Instructor Support",
            desc: "Engage directly with instructors, ask questions, and debug algorithms instantly."
          },
          {
            icon: "cap",
            title: "Global Pool of Best Trainers",
            desc: "Learn from experienced ML engineers and AI professionals with real-world industry background."
          },
          {
            icon: "calendar",
            title: "Flexible Batch Schedules",
            desc: "Choose between Weekday (Mon–Fri) or Weekend (Sat–Sun) batches to fit your routine."
          },
          {
            icon: "award",
            title: "Hands-on ML Toolkits",
            desc: "Work with Scikit-learn, NumPy, Pandas, and neural network toolkits in interactive labs."
          }
        ]
      },
      {
        id: "classroom",
        title: "Classroom Training",
        description: "In-person, immersive classroom training in state-of-the-art learning facilities with dedicated hands-on guidance, group case studies, and collaborative algorithm design.",
        features: [
          {
            icon: "building",
            title: "Modern Training Venues",
            desc: "High-tech AI labs designed for comfortable, distraction-free learning."
          },
          {
            icon: "users",
            title: "Collaborative Learning",
            desc: "Engage in peer networking, group discussions, and interactive team ML projects."
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
            desc: "Receive 1-on-1 feedback and practical troubleshooting from experienced ML engineers."
          }
        ]
      },
      {
        id: "full-time",
        title: "Full-Time Batches",
        description: "Fast-track your Machine Learning career with intensive full-time learning sessions designed for students and career switchers looking to master ML rapidly.",
        features: [
          {
            icon: "calendar",
            title: "Weekday Batches",
            desc: "Monday – Friday intensive schedule with daily mentor-led learning sessions."
          },
          {
            icon: "clock",
            title: "Accelerated 40-Hour Track",
            desc: "Complete the entire machine learning curriculum in focused, continuous learning sprints."
          },
          {
            icon: "projects",
            title: "Daily Guided Lab Work",
            desc: "Work on predictive modeling, classification systems, and recommendation engines."
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
        description: "A balanced learning schedule tailored specifically for working professionals, offering weekend flexibility to upskill in Machine Learning without interrupting your career.",
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
            desc: "Tailored career coaching for working professionals looking to transition to ML Engineer roles."
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
        description: "Gain practical insights from ML engineers and AI professionals who work on real projects."
      },
      {
        icon: "course",
        title: "NEXT-GEN ML COURSE",
        description: "A curriculum designed around the latest ML tools, algorithms, and applications."
      },
      {
        icon: "projects",
        title: "REAL-TIME PROJECTS",
        description: "Work on predictive modeling, classification systems, and recommendation engines to build your portfolio."
      },
      {
        icon: "resources",
        title: "ML-POWERED RESOURCES",
        description: "Access curated datasets, coding templates, and case studies for simplified learning."
      },
      {
        icon: "certificate",
        title: "EARN A CERTIFICATE",
        description: "Receive a globally recognized certification that validates your expertise."
      },
      {
        icon: "guarantee",
        title: "100% JOB GUARANTEE",
        description: "Secure your future with placement support and a written job guarantee."
      }
    ]
  }
};

if (typeof window !== "undefined") {
  window.COURSE_DATA_MACHINE_LEARNING = COURSE_DATA_MACHINE_LEARNING;
}
