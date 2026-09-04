/**
 * TechAcademy - Centralized Course Catalogue & Dataset
 * Single source of truth derived from Aivora X with exact categories, groups, and course names.
 */

const TECHACADEMY_COURSE_CATEGORIES = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    column: 1,
    groups: [
      {
        type: "regular",
        title: null,
        courses: [
          {
            name: "Introduction to Artificial Intelligence",
            href: "/courses/introduction-to-artificial-intelligence/",
            code: "AI-101"
          },
          {
            name: "Python Programming for AI",
            href: "/courses/python-programming-for-ai/",
            code: "PY-AI"
          },
          {
            name: "Data Science with Python",
            href: "/courses/data-science-with-python/",
            code: "DS-PY"
          }
        ]
      },
      {
        type: "popular",
        title: "Popular Courses",
        courses: [
          {
            name: "Machine Learning",
            href: "/courses/machine-learning/",
            badge: "POPULAR",
            code: "ML-101"
          },
          {
            name: "Deep Learning Mastery",
            href: "/courses/deep-learning-mastery/",
            code: "DL-101"
          },
          {
            name: "Natural Language Processing (NLP)",
            href: "/courses/natural-language-processing-nlp/",
            code: "NLP-101"
          },
          {
            name: "Computer vision with AI",
            href: "/courses/computer-vision-with-ai/",
            code: "CV-AI"
          },
          {
            name: "Reinforcement Learning & Robotics",
            href: "/courses/reinforcement-learning-robotics/",
            code: "RL-ROB"
          },
          {
            name: "AI in Industry & Specialized Applications",
            href: "/courses/ai-industry-specialized-applications/",
            code: "AI-IND"
          },
          {
            name: "AI Tools & Frameworks",
            href: "/courses/ai-tools-frameworks/",
            code: "AI-TOOLS"
          },
          {
            name: "Responsible AI & Research",
            href: "/courses/responsible-ai-research/",
            code: "AI-RESP"
          },
          {
            name: "Capstone Projects",
            href: "/courses/capstone-projects/",
            code: "AI-CAP"
          }
        ]
      },
      {
        type: "masters",
        title: "Masters Program",
        courses: [
          {
            name: "Artificial Intelligence Expert",
            href: "/courses/artificial-intelligence-expert/",
            badge: "MASTERS",
            code: "AI-EXP"
          }
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    column: 2,
    groups: [
      {
        type: "regular",
        title: null,
        courses: [
          {
            name: "Search Engine Optimization",
            href: "/courses/search-engine-optimization/",
            code: "DM-SEO"
          },
          {
            name: "Social Media Marketing",
            href: "/courses/social-media-marketing/",
            code: "DM-SMM"
          },
          {
            name: "Google Ads",
            href: "/courses/google-ads/",
            code: "DM-GADS"
          },
          {
            name: "Meta Ads",
            href: "/courses/meta-ads/",
            code: "DM-META"
          },
          {
            name: "Email Marketing",
            href: "/courses/email-marketing/",
            code: "DM-EML"
          },
          {
            name: "Website Design",
            href: "/courses/website-design/",
            code: "DM-WEB"
          },
          {
            name: "AI Video Editing",
            href: "/courses/ai-video-editing/",
            code: "DM-VID"
          },
          {
            name: "Web Analytics",
            href: "/courses/web-analytics/",
            code: "DM-ANA"
          }
        ]
      },
      {
        type: "masters",
        title: "Masters Program",
        courses: [
          {
            name: "Digital Marketing Expert",
            href: "/courses/digital-marketing-expert/",
            badge: "MASTERS",
            code: "DM-EXP"
          }
        ]
      }
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    slug: "cloud-computing",
    column: 2,
    groups: [
      {
        type: "regular",
        title: null,
        courses: [
          {
            name: "AWS Certified Cloud Practitioner",
            href: "/courses/aws-certified-cloud-practitioner/",
            code: "AWS-CCP"
          },
          {
            name: "Amazon Solution Architect – Associate",
            href: "/courses/amazon-solution-architect-associate/",
            code: "AWS-SAA"
          },
          {
            name: "AWS Certified AI Practitioner",
            href: "/courses/aws-certified-ai-practitioner/",
            code: "AWS-AIP"
          },
          {
            name: "AWS Security Specialty",
            href: "/courses/aws-security-specialty/",
            code: "AWS-SEC"
          },
          {
            name: "Microsoft Azure Fundamentals",
            href: "/courses/microsoft-azure-fundamentals/",
            code: "AZ-900"
          },
          {
            name: "Microsoft Azure Administrator Associate",
            href: "/courses/microsoft-azure-administrator-associate/",
            code: "AZ-104"
          },
          {
            name: "Azure Security Engineer Associate",
            href: "/courses/azure-security-engineer-associate/",
            code: "AZ-500"
          },
          {
            name: "Google Certified Professional Cloud Architect",
            href: "/courses/google-certified-professional-cloud-architect/",
            code: "GCP-PCA"
          },
          {
            name: "Certified Kubernetes Administrator (CKA)",
            href: "/courses/certified-kubernetes-administrator-cka/",
            code: "K8S-CKA"
          }
        ]
      }
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    slug: "cyber-security",
    column: 3,
    groups: [
      {
        type: "regular",
        title: null,
        courses: [
          {
            name: "Cisco Certified CyberOps",
            href: "/courses/cisco-certified-cyberops/",
            code: "CS-COPS"
          },
          {
            name: "CompTIA Security+",
            href: "/courses/comptia-security-plus/",
            code: "COMP-SEC"
          }
        ]
      },
      {
        type: "popular",
        title: "Popular Courses",
        courses: [
          {
            name: "C|EH ( Certified Ethical Hacker )",
            href: "/courses/certified-ethical-hacker-ceh/",
            badge: "POPULAR",
            code: "EC-CEH"
          },
          {
            name: "CPENT ( Certified Penetration Testing Professional )",
            href: "/courses/certified-penetration-testing-professional-cpent/",
            code: "EC-CPENT"
          },
          {
            name: "CISA ( Certified Information Systems Auditor )",
            href: "/courses/certified-information-systems-auditor-cisa/",
            code: "ISACA-CISA"
          },
          {
            name: "CHFI (Computer Hacking Forensic Investigator)",
            href: "/courses/computer-hacking-forensic-investigator-chfi/",
            code: "EC-CHFI"
          },
          {
            name: "CISSP ( Certified Information Systems Security Professional )",
            href: "/courses/certified-information-systems-security-professional-cissp/",
            code: "ISC2-CISSP"
          }
        ]
      },
      {
        type: "masters",
        title: "Masters Program",
        courses: [
          {
            name: "Cyber Security Expert",
            href: "/courses/cyber-security-expert/",
            badge: "MASTERS",
            code: "CS-EXP"
          }
        ]
      }
    ]
  },
  {
    id: "network-security",
    title: "Network Security",
    slug: "network-security",
    column: 3,
    groups: [
      {
        type: "regular",
        title: null,
        courses: [
          {
            name: "CCNA Security",
            href: "/courses/ccna-security/",
            code: "CISCO-CCNA"
          },
          {
            name: "CCNP Security",
            href: "/courses/ccnp-security/",
            code: "CISCO-CCNP"
          },
          {
            name: "Paloalto Next Generation Firewall",
            href: "/courses/paloalto-next-generation-firewall/",
            code: "PAN-PCNSE"
          },
          {
            name: "CCSA (Checkpoint Certified Security Administrator)",
            href: "/courses/checkpoint-certified-security-administrator-ccsa/",
            code: "CP-CCSA"
          },
          {
            name: "CCSE (Check Point Certified Security Expert)",
            href: "/courses/check-point-certified-security-expert-ccse/",
            code: "CP-CCSE"
          }
        ]
      },
      {
        type: "masters",
        title: "Masters Program",
        courses: [
          {
            name: "CCIE Security V6",
            href: "/courses/ccie-security-v6/",
            badge: "MASTERS",
            code: "CISCO-CCIE"
          }
        ]
      }
    ]
  }
];

// Flattened list for instant autocomplete search indexing
const TECHACADEMY_COURSES = [];
TECHACADEMY_COURSE_CATEGORIES.forEach((category) => {
  category.groups.forEach((group) => {
    group.courses.forEach((course) => {
      TECHACADEMY_COURSES.push({
        id: course.href.replace(/^\/courses\/|\/$/g, ""),
        name: course.name,
        category: category.title,
        topic: group.title || category.title,
        badge: course.badge || (group.type === "popular" ? "POPULAR" : (group.type === "masters" ? "MASTERS" : null)),
        featured: group.type === "popular" || group.type === "masters",
        code: course.code,
        href: course.href,
        delivery: ["Online Instructor-led", "Classroom", "Online Self-paced", "Onsite"]
      });
    });
  });
});

const TECHACADEMY_POPULAR_TOPICS = [
  { name: "Artificial Intelligence", filter: "Artificial Intelligence" },
  { name: "Machine Learning", filter: "Machine Learning" },
  { name: "Cyber Security", filter: "Cyber Security" },
  { name: "Ethical Hacking (CEH)", filter: "Certified Ethical Hacker" },
  { name: "Cloud Computing", filter: "Cloud Computing" },
  { name: "AWS Cloud Practitioner", filter: "AWS Certified Cloud Practitioner" },
  { name: "Digital Marketing", filter: "Digital Marketing" },
  { name: "Network Security", filter: "Network Security" },
  { name: "Data Science with Python", filter: "Data Science with Python" },
  { name: "CISSP", filter: "CISSP" }
];

if (typeof window !== "undefined") {
  window.TECHACADEMY_COURSE_CATEGORIES = TECHACADEMY_COURSE_CATEGORIES;
  window.TECHACADEMY_COURSES = TECHACADEMY_COURSES;
  window.TECHACADEMY_POPULAR_TOPICS = TECHACADEMY_POPULAR_TOPICS;
}
