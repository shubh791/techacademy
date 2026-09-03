/**
 * TechAcademy - Course & Topic Dataset
 * Derived directly from the original Knowledge Academy source of truth
 */
const TECHACADEMY_COURSES = [
  {
    id: "prince2-found-pract",
    name: "PRINCE2® Foundation & Practitioner",
    category: "Project Management",
    topic: "PRINCE2®",
    badge: "20% OFF",
    featured: true,
    code: "PRINCE2-FP",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced", "Onsite"]
  },
  {
    id: "prince2-7th-edition",
    name: "PRINCE2® 7th Edition Certification",
    category: "Project Management",
    topic: "PRINCE2®",
    badge: "NEW",
    featured: true,
    code: "PRINCE2-7",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced", "Onsite"]
  },
  {
    id: "prince2-agile",
    name: "PRINCE2 Agile® Foundation and Practitioner",
    category: "Agile & Scrum",
    topic: "PRINCE2®",
    featured: true,
    code: "PRINCE2-AG",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "agile-pm",
    name: "AgilePM® Foundation & Practitioner Certification",
    category: "Agile & Scrum",
    topic: "Agile",
    featured: true,
    code: "AGILE-PM",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "safe-leading",
    name: "Certified Scaled Agile Framework Leading SAFe®",
    category: "Agile & Scrum",
    topic: "Agile",
    code: "SAFE-LEAD",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "itil-v5-foundation",
    name: "ITIL® Version 5 Foundation Certification Course",
    category: "IT Service Management",
    topic: "ITIL® Certification",
    featured: true,
    badge: "POPULAR",
    code: "ITIL-V5",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced", "Onsite"]
  },
  {
    id: "itil-4-foundation",
    name: "ITIL® 4 Foundation Certification",
    category: "IT Service Management",
    topic: "ITIL® Certification",
    code: "ITIL-4",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "lean-six-sigma-green",
    name: "Lean Six Sigma Green Belt Certification",
    category: "Business Improvement",
    topic: "Lean Six Sigma Certification",
    featured: true,
    code: "LSS-GB",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "lean-six-sigma-black",
    name: "Lean Six Sigma Black Belt Certification",
    category: "Business Improvement",
    topic: "Lean Six Sigma Certification",
    code: "LSS-BB",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "lean-six-sigma-yellow",
    name: "Lean Six Sigma Yellow Belt Certification",
    category: "Business Improvement",
    topic: "Lean Six Sigma Certification",
    code: "LSS-YB",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "scrum-master",
    name: "Scrum Master Certification (PSM / CSM)",
    category: "Agile & Scrum",
    topic: "Scrum Certification",
    featured: true,
    code: "SCRUM-M",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "scrum-product-owner",
    name: "Scrum Product Owner Certification (PSPO)",
    category: "Agile & Scrum",
    topic: "Scrum Certification",
    code: "SCRUM-PO",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "pmp-exam-prep",
    name: "PMP® Exam Prep Certification Training",
    category: "Project Management",
    topic: "PMP®",
    featured: true,
    badge: "GLOBALLY RECOGNISED",
    code: "PMP-PREP",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "capm-cert",
    name: "CAPM® Certified Associate in Project Management",
    category: "Project Management",
    topic: "PMP®",
    code: "CAPM-01",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "togaf-9-part1-2",
    name: "TOGAF® 9 Certified (Part 1 & Part 2)",
    category: "Enterprise Architecture",
    topic: "TOGAF®",
    featured: true,
    code: "TOGAF-9",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "togaf-standard-10",
    name: "TOGAF® Standard 10th Edition Training",
    category: "Enterprise Architecture",
    topic: "TOGAF®",
    code: "TOGAF-10",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "iso-9001-lead-auditor",
    name: "ISO 9001 Lead Auditor Certification Training",
    category: "ISO & Compliance",
    topic: "ISO 9001",
    featured: true,
    code: "ISO-9001-LA",
    delivery: ["Online Instructor-led", "Classroom", "Onsite"]
  },
  {
    id: "iso-27001-lead-implementer",
    name: "ISO 27001 Information Security Management",
    category: "ISO & Compliance",
    topic: "ISO 9001",
    code: "ISO-27001",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "business-analysis-practice",
    name: "Business Analysis Practice (BCS / IIBA)",
    category: "Business Analysis",
    topic: "Business Analysis Courses",
    featured: true,
    code: "BA-PRACT",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "iiba-cbap",
    name: "IIBA® CBAP Certified Business Analysis Professional",
    category: "Business Analysis",
    topic: "Business Analysis Courses",
    code: "IIBA-CBAP",
    delivery: ["Online Instructor-led", "Online Self-paced"]
  },
  {
    id: "apm-pmq",
    name: "APM PMQ Project Management Qualification",
    category: "Project Management",
    topic: "APM",
    featured: true,
    code: "APM-PMQ",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "apm-pfq",
    name: "APM Project Fundamentals Qualification (PFQ)",
    category: "Project Management",
    topic: "APM",
    code: "APM-PFQ",
    delivery: ["Online Instructor-led", "Online Self-paced"]
  },
  {
    id: "msp-found-pract",
    name: "MSP® Managing Successful Programmes Training",
    category: "Project Management",
    topic: "MSP Training",
    code: "MSP-FP",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "change-mgmt-pract",
    name: "Change Management™ Foundation & Practitioner",
    category: "Business Improvement",
    topic: "Change Management Certification",
    code: "CHG-MGMT",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "cipd-level-5",
    name: "CIPD Level 5 Associate Diploma in People Management",
    category: "HR & Leadership",
    topic: "CIPD Qualification",
    code: "CIPD-L5",
    delivery: ["Online Instructor-led", "Online Self-paced"]
  },
  {
    id: "ilm-level-3",
    name: "ILM Level 3 Award in Leadership & Management",
    category: "HR & Leadership",
    topic: "ILM Level 3",
    code: "ILM-L3",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "excel-masterclass",
    name: "Microsoft Excel Masterclass (Beginner to Advanced)",
    category: "Office Applications",
    topic: "Microsoft Excel Courses",
    code: "MS-EXCEL",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "power-bi-training",
    name: "Microsoft Power BI Training Masterclass",
    category: "Data & Analytics",
    topic: "Power BI",
    code: "MS-PBI",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "software-testing-istqb",
    name: "Software Testing Foundation (ISTQB® Certified)",
    category: "Software & Testing",
    topic: "Software Testing Courses",
    code: "ISTQB-F",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "ai-chatgpt-intro",
    name: "Artificial Intelligence & ChatGPT Masterclass",
    category: "Artificial Intelligence",
    topic: "Artificial Intelligence Courses",
    badge: "TRENDING",
    code: "AI-CHATGPT",
    delivery: ["Online Instructor-led", "Online Self-paced"]
  },
  {
    id: "mor-management-risk",
    name: "MoR® Management of Risk Foundation & Practitioner",
    category: "Risk & Governance",
    topic: "MoR® Management of Risk",
    code: "MOR-FP",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "cissp-security",
    name: "CISSP® Certified Information Systems Security Professional",
    category: "Cyber Security",
    topic: "CISSP",
    code: "CISSP-SEC",
    delivery: ["Online Instructor-led", "Classroom"]
  },
  {
    id: "gdpr-practitioner",
    name: "Certified EU GDPR Practitioner & Foundation",
    category: "Compliance & Legal",
    topic: "GDPR",
    code: "GDPR-PRACT",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "azure-admin-az104",
    name: "Microsoft Azure Administrator (AZ-104)",
    category: "Cloud Computing",
    topic: "Microsoft Azure",
    code: "AZ-104",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  },
  {
    id: "aws-solutions-architect",
    name: "AWS Certified Solutions Architect – Associate",
    category: "Cloud Computing",
    topic: "AWS",
    code: "AWS-SAA",
    delivery: ["Online Instructor-led", "Classroom", "Online Self-paced"]
  }
];

const TECHACADEMY_POPULAR_TOPICS = [
  { name: "PRINCE2®", filter: "PRINCE2®" },
  { name: "Agile", filter: "Agile" },
  { name: "ITIL® Certification", filter: "ITIL® Certification" },
  { name: "Lean Six Sigma Certification", filter: "Lean Six Sigma Certification" },
  { name: "Scrum Certification", filter: "Scrum Certification" },
  { name: "PMP®", filter: "PMP®" },
  { name: "TOGAF®", filter: "TOGAF®" },
  { name: "ISO 9001", filter: "ISO 9001" },
  { name: "Business Analysis Courses", filter: "Business Analysis Courses" },
  { name: "APM", filter: "APM" }
];

if (typeof window !== "undefined") {
  window.TECHACADEMY_COURSES = TECHACADEMY_COURSES;
  window.TECHACADEMY_POPULAR_TOPICS = TECHACADEMY_POPULAR_TOPICS;
}
