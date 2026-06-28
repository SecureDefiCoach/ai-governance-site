export type PortfolioEntry = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: "Risk Assessment" | "AI Governance" | "Controls & Compliance" | "Tooling & Automation";
  status: "Published" | "In Progress" | "Coming Soon";
  date: string;
  sections: { title: string; body: string }[];
};

export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: "threat-informed-risk-assessment",
    title: "Threat-Informed Risk Assessment",
    description:
      "Methodology for mapping MITRE ATT&CK techniques to control environments in financial services, with evidence-based coverage validation.",
    tags: ["MITRE ATT&CK", "Risk Assessment", "Financial Services"],
    category: "Risk Assessment",
    status: "Coming Soon",
    date: "2026-06-28",
    sections: [],
  },
  {
    slug: "cri-coverage-framework",
    title: "CRI Coverage Framework",
    description:
      "Operationalizing the Cyber Risk Institute Profile for community banks — gap analysis methodology with quantified coverage ratings.",
    tags: ["CRI Profile", "Gap Analysis", "Banking"],
    category: "Controls & Compliance",
    status: "Coming Soon",
    date: "2026-06-28",
    sections: [],
  },
  {
    slug: "ai-governance-case-studies",
    title: "AI Governance Case Studies",
    description:
      "Evidence portfolio spanning three governance layers — operational, strategic, and regulatory — with real-world AI audit scenarios.",
    tags: ["AI Governance", "Case Studies", "Audit"],
    category: "AI Governance",
    status: "Coming Soon",
    date: "2026-06-28",
    sections: [],
  },
  {
    slug: "integrated-risk-deliverables",
    title: "Integrated Risk Deliverables",
    description:
      "Analysis outputs delivered into SharePoint and MS Lists via Power Automate — not Excel attachments. Findings, controls, and risk tracking live where the organization works.",
    tags: ["SharePoint", "Power Automate", "MS Lists"],
    category: "Tooling & Automation",
    status: "Coming Soon",
    date: "2026-06-28",
    sections: [],
  },
  {
    slug: "mitre-validation-methodology",
    title: "MITRE Validation Methodology",
    description:
      "Two-layer validation framework — reasoning validation grounded in source material, and controls validation mapped to MITRE mitigations.",
    tags: ["MITRE", "Validation", "Controls"],
    category: "Controls & Compliance",
    status: "Coming Soon",
    date: "2026-06-28",
    sections: [],
  },
];
