export type CapabilityDomain = {
  id: string;
  name: string;
  description: string;
  skillCount: number;
  category: "Offensive" | "Defensive" | "Governance" | "Engineering" | "Intelligence";
  frameworks: string[];
  sampleSkills: string[];
};

export const domains: CapabilityDomain[] = [
  {
    id: "cloud-security",
    name: "Cloud Security",
    description:
      "AWS, Azure, and GCP security posture assessment, misconfig detection, and cloud-native control design.",
    skillCount: 66,
    category: "Defensive",
    frameworks: ["CIS Benchmarks", "NIST 800-53", "CSA CCM"],
    sampleSkills: [
      "Analyzing cloud storage access patterns",
      "Auditing cloud with CIS Benchmarks",
      "Analyzing Office 365 audit logs for compromise",
    ],
  },
  {
    id: "threat-hunting",
    name: "Threat Hunting",
    description:
      "Proactive hypothesis-driven hunts across endpoints, network, and identity telemetry.",
    skillCount: 58,
    category: "Defensive",
    frameworks: ["MITRE ATT&CK", "NIST CSF"],
    sampleSkills: [
      "Analyzing persistence mechanisms in Linux",
      "Analyzing PowerShell Empire artifacts",
      "Analyzing ransomware network indicators",
    ],
  },
  {
    id: "threat-intelligence",
    name: "Threat Intelligence",
    description:
      "APT tracking, campaign attribution, IOC management, and intelligence-driven defense.",
    skillCount: 52,
    category: "Intelligence",
    frameworks: ["MITRE ATT&CK", "STIX/TAXII", "Diamond Model"],
    sampleSkills: [
      "Analyzing APT group with MITRE Navigator",
      "Analyzing campaign attribution evidence",
      "Analyzing certificate transparency for phishing",
    ],
  },
  {
    id: "web-application-security",
    name: "Web Application Security",
    description:
      "OWASP Top 10, auth bypass, injection testing, and secure code review for web applications.",
    skillCount: 46,
    category: "Offensive",
    frameworks: ["OWASP Top 10", "OWASP ASVS", "CWE"],
    sampleSkills: [
      "Exploiting IDOR vulnerabilities",
      "Bypassing authentication with forced browsing",
      "Exploiting broken link hijacking",
    ],
  },
  {
    id: "network-security",
    name: "Network Security",
    description:
      "Packet analysis, IDS/IPS, firewall rules, segmentation, and wireless security assessments.",
    skillCount: 45,
    category: "Defensive",
    frameworks: ["NIST 800-53", "CIS Controls"],
    sampleSkills: [
      "Analyzing network traffic with Wireshark",
      "Analyzing network flow data with NetFlow",
      "Analyzing network packets with Scapy",
    ],
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    description:
      "Disk imaging, memory forensics, artifact recovery, and chain-of-custody evidence handling.",
    skillCount: 41,
    category: "Intelligence",
    frameworks: ["NIST 800-86", "ACPO Guidelines"],
    sampleSkills: [
      "Acquiring disk image with dd and dcfldd",
      "Analyzing browser forensics with Hindsight",
      "Analyzing disk image with Autopsy",
    ],
  },
  {
    id: "identity-access-management",
    name: "Identity & Access Management",
    description:
      "Active Directory, Entra ID, OAuth, RBAC audit, privilege escalation detection, and zero-trust identity.",
    skillCount: 40,
    category: "Defensive",
    frameworks: ["NIST 800-63", "CIS Controls", "CRI Profile"],
    sampleSkills: [
      "Auditing Entra ID with AADInternals",
      "Attacking OAuth with device code phishing",
      "Performing service account audit",
    ],
  },
  {
    id: "malware-analysis",
    name: "Malware Analysis",
    description:
      "Static and dynamic analysis, reverse engineering, sandbox evasion detection, and malware family classification.",
    skillCount: 39,
    category: "Intelligence",
    frameworks: ["MITRE ATT&CK", "YARA", "D3FEND"],
    sampleSkills: [
      "Analyzing Cobalt Strike beacon configuration",
      "Analyzing Android malware with APKTool",
      "Analyzing bootkit and rootkit samples",
    ],
  },
  {
    id: "red-teaming",
    name: "Red Teaming & Offensive Security",
    description:
      "Adversary simulation, C2 infrastructure, credential access, privilege escalation, and purple team exercises.",
    skillCount: 38,
    category: "Offensive",
    frameworks: ["MITRE ATT&CK", "PTES", "CBEST"],
    sampleSkills: [
      "Building C2 redirector infrastructure",
      "Abusing DPAPI for credential access",
      "Abusing shadow credentials for privesc",
    ],
  },
  {
    id: "soc-operations",
    name: "SOC Operations",
    description:
      "SIEM correlation, alert triage, playbook development, and security operations center workflow.",
    skillCount: 35,
    category: "Defensive",
    frameworks: ["NIST CSF", "MITRE ATT&CK", "ITIL"],
    sampleSkills: [
      "Analyzing Windows event logs in Splunk",
      "Analyzing DNS logs for exfiltration",
      "Building automated malware submission pipeline",
    ],
  },
  {
    id: "container-security",
    name: "Container Security",
    description:
      "Docker and Kubernetes hardening, image scanning, RBAC audit, and runtime protection.",
    skillCount: 33,
    category: "Engineering",
    frameworks: ["CIS Kubernetes Benchmark", "NIST 800-190"],
    sampleSkills: [
      "Analyzing Kubernetes audit logs",
      "Auditing Kubernetes RBAC privilege escalation",
      "Benchmarking Kubernetes with kube-bench",
    ],
  },
  {
    id: "ot-ics-security",
    name: "OT/ICS Security",
    description:
      "SCADA, PLCs, historian servers, and industrial control system threat detection and hardening.",
    skillCount: 29,
    category: "Defensive",
    frameworks: ["IEC 62443", "NIST 800-82", "MITRE ICS"],
    sampleSkills: [
      "Detecting attacks on SCADA systems",
      "Detecting anomalies in industrial control systems",
      "Detecting attacks on historian servers",
    ],
  },
  {
    id: "security-operations",
    name: "Security Operations",
    description:
      "Log analysis, SOAR automation, memory forensics, and operational security monitoring across platforms.",
    skillCount: 28,
    category: "Defensive",
    frameworks: ["NIST CSF", "MITRE D3FEND"],
    sampleSkills: [
      "Analyzing API gateway access logs",
      "Analyzing Azure activity logs for threats",
      "Analyzing memory forensics with LiME and Volatility",
    ],
  },
  {
    id: "api-security",
    name: "API Security",
    description:
      "OWASP API Top 10, broken auth, rate limiting, shadow API discovery, and API gateway hardening.",
    skillCount: 28,
    category: "Engineering",
    frameworks: ["OWASP API Top 10", "OpenAPI"],
    sampleSkills: [
      "Detecting API enumeration attacks",
      "Detecting broken object property level authorization",
      "Detecting shadow API endpoints",
    ],
  },
  {
    id: "incident-response",
    name: "Incident Response",
    description:
      "IR playbooks, log correlation, containment procedures, and post-incident analysis for security events.",
    skillCount: 26,
    category: "Defensive",
    frameworks: ["NIST 800-61", "SANS IR", "MITRE ATT&CK"],
    sampleSkills: [
      "Analyzing Linux audit logs for intrusion",
      "Analyzing network traffic for incidents",
      "Analyzing security logs with Splunk",
    ],
  },
  {
    id: "vulnerability-management",
    name: "Vulnerability Management",
    description:
      "Patch management, vulnerability aging, SLA tracking, exception processes, and scanner orchestration.",
    skillCount: 25,
    category: "Governance",
    frameworks: ["CVSS", "NIST 800-40", "CIS Controls"],
    sampleSkills: [
      "Building patch Tuesday response process",
      "Building vulnerability aging and SLA tracking",
      "Implementing patch management workflow",
    ],
  },
  {
    id: "penetration-testing",
    name: "Penetration Testing",
    description:
      "External recon, internal network testing, API security testing, and structured pentest reporting.",
    skillCount: 21,
    category: "Offensive",
    frameworks: ["PTES", "OWASP", "NIST 800-115"],
    sampleSkills: [
      "Conducting external reconnaissance with OSINT",
      "Conducting internal network penetration test",
      "Conducting API security testing",
    ],
  },
  {
    id: "devsecops",
    name: "DevSecOps",
    description:
      "CI/CD pipeline security, SAST/DAST integration, container scanning, and code signing.",
    skillCount: 18,
    category: "Engineering",
    frameworks: ["OWASP SAMM", "NIST SSDF"],
    sampleSkills: [
      "Building DevSecOps pipeline with GitLab CI",
      "Implementing Aqua Security for container scanning",
      "Implementing code signing for artifacts",
    ],
  },
  {
    id: "zero-trust-architecture",
    name: "Zero Trust Architecture",
    description:
      "Microsegmentation, identity-aware proxy, ZTNA, and continuous verification design patterns.",
    skillCount: 18,
    category: "Engineering",
    frameworks: ["NIST 800-207", "CISA ZTA"],
    sampleSkills: [
      "Configuring microsegmentation for zero trust",
      "Configuring AWS Verified Access for ZTNA",
      "Configuring identity-aware proxy with Google IAP",
    ],
  },
  {
    id: "endpoint-security",
    name: "Endpoint Security",
    description:
      "HIDS configuration, Windows Defender hardening, event log tuning, and endpoint detection and response.",
    skillCount: 17,
    category: "Defensive",
    frameworks: ["CIS Benchmarks", "MITRE ATT&CK"],
    sampleSkills: [
      "Configuring host-based intrusion detection",
      "Configuring Windows event logging for detection",
      "Configuring Windows Defender advanced settings",
    ],
  },
  {
    id: "cryptography",
    name: "Cryptography",
    description:
      "HSM management, PKI, TLS configuration, certificate authority operations, and crypto protocol review.",
    skillCount: 16,
    category: "Engineering",
    frameworks: ["NIST 800-57", "FIPS 140-3"],
    sampleSkills: [
      "Configuring HSM for key storage",
      "Configuring certificate authority with OpenSSL",
      "Configuring TLS 1.3 for secure communications",
    ],
  },
  {
    id: "phishing-defense",
    name: "Phishing & Social Engineering Defense",
    description:
      "BEC detection, phishing URL analysis, reporting workflows, and user awareness program design.",
    skillCount: 16,
    category: "Defensive",
    frameworks: ["MITRE ATT&CK", "NIST CSF"],
    sampleSkills: [
      "Detecting business email compromise",
      "Analyzing malicious URL with URLScan",
      "Building phishing reporting button workflow",
    ],
  },
  {
    id: "ai-security",
    name: "AI Security",
    description:
      "LLM red teaming, MCP server auditing, prompt injection testing, and AI model vulnerability assessment.",
    skillCount: 14,
    category: "Governance",
    frameworks: ["NIST AI RMF", "OWASP LLM Top 10", "ISO 42001"],
    sampleSkills: [
      "Continuous LLM red teaming with PromptFoo",
      "Auditing MCP servers for tool poisoning",
      "Assessing vector and embedding weaknesses",
    ],
  },
  {
    id: "ransomware-defense",
    name: "Ransomware Defense",
    description:
      "Ransomware playbooks, decoy file deployment, payment tracking, and CISA framework implementation.",
    skillCount: 13,
    category: "Defensive",
    frameworks: ["CISA", "MITRE ATT&CK", "NIST CSF"],
    sampleSkills: [
      "Building ransomware playbook with CISA framework",
      "Deploying decoy files for ransomware detection",
      "Analyzing ransomware payment wallets",
    ],
  },
  {
    id: "mobile-security",
    name: "Mobile Security",
    description:
      "iOS and Android app security testing, deeplink exploitation, and mobile malware behavior analysis.",
    skillCount: 13,
    category: "Offensive",
    frameworks: ["OWASP MASVS", "MITRE ATT&CK Mobile"],
    sampleSkills: [
      "Analyzing iOS app security with Objection",
      "Detecting mobile malware behavior",
      "Exploiting deeplink vulnerabilities",
    ],
  },
  {
    id: "compliance-governance",
    name: "Compliance & Governance",
    description:
      "CMMC, NIST RMF, risk assessment frameworks, privacy compliance, and regulatory audit execution.",
    skillCount: 13,
    category: "Governance",
    frameworks: ["NIST 800-30", "CMMC", "NIST RMF", "GDPR"],
    sampleSkills: [
      "Achieving CMMC Level 2 compliance",
      "Conducting cyber risk assessment with NIST 800-30",
      "Executing NIST RMF authorization to operate",
    ],
  },
  {
    id: "supply-chain-security",
    name: "Supply Chain Security",
    description:
      "SBOM analysis, dependency confusion detection, and malicious package identification across ecosystems.",
    skillCount: 8,
    category: "Engineering",
    frameworks: ["NIST SSDF", "SLSA", "CycloneDX"],
    sampleSkills: [
      "Analyzing SBOM for supply chain vulnerabilities",
      "Detecting dependency confusion",
      "Detecting malicious npm packages",
    ],
  },
  {
    id: "threat-detection",
    name: "Threat Detection & Deception",
    description:
      "Golden ticket detection, insider threat UEBA, living-off-the-land detection, honeytokens, and cloud decoys.",
    skillCount: 13,
    category: "Defensive",
    frameworks: ["MITRE ATT&CK", "MITRE D3FEND", "MITRE Engage"],
    sampleSkills: [
      "Detecting golden ticket forgery",
      "Detecting insider threat with UEBA",
      "Deploying Active Directory honeytokens",
    ],
  },
  {
    id: "hardware-firmware-security",
    name: "Hardware & Firmware Security",
    description:
      "UEFI firmware auditing, Secure Boot bypass detection, bootkit hunting, and blockchain protocol analysis.",
    skillCount: 8,
    category: "Engineering",
    frameworks: ["NIST 800-193", "TCG"],
    sampleSkills: [
      "Auditing UEFI firmware with CHIPSEC",
      "Detecting Secure Boot bypass",
      "Hunting bootkits in EFI system partition",
    ],
  },
];

export const totalSkills = domains.reduce((sum, d) => sum + d.skillCount, 0);
export const totalDomains = domains.length;

export const categories = [
  { name: "Defensive" as const, description: "Detection, monitoring, and incident response" },
  { name: "Offensive" as const, description: "Penetration testing and adversary simulation" },
  { name: "Intelligence" as const, description: "Threat intelligence and forensic analysis" },
  { name: "Engineering" as const, description: "Secure architecture and DevSecOps" },
  { name: "Governance" as const, description: "Risk management, compliance, and AI governance" },
] as const;
