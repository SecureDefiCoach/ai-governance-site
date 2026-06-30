"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

const frameworkUrls: Record<string, string> = {
  "NIST CSF 2.0": "https://www.nist.gov/cyberframework",
  "NIST CSF 2.0 GV": "https://www.nist.gov/cyberframework",
  "NIST SP 800-30": "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
  "NIST SP 800-53": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
  "NIST SP 800-88": "https://csrc.nist.gov/pubs/sp/800/88/r1/final",
  "NIST AI RMF": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
  "MITRE ATT&CK": "https://attack.mitre.org/",
  "MITRE ATT&CK Mitigations": "https://attack.mitre.org/mitigations/enterprise/",
  "MITRE Navigator": "https://mitre-attack.github.io/attack-navigator/",
  "CRI Profile": "https://cyberriskinstitute.org/the-profile/",
  "CRI Profile Response Guidance": "https://cyberriskinstitute.org/the-profile/",
  "CRI Response Guidance": "https://cyberriskinstitute.org/the-profile/",
  "SCF": "https://www.securecontrolsframework.com/",
  "COBIT 2019": "https://www.isaca.org/resources/cobit",
  "ISO 42001": "https://www.iso.org/standard/81230.html",
  "ISO 27001": "https://www.iso.org/standard/27001",
  "ISO 27005": "https://www.iso.org/standard/80585.html",
  "CIS Benchmarks": "https://www.cisecurity.org/cis-benchmarks",
  "FAIR": "https://www.fairinstitute.org/what-is-fair",
  "EU AI Act": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32024R1689",
  "OWASP LLM Top 10": "https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/",
  "Lansweeper": "https://www.lansweeper.com/",
  "Intune": "https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune",
  "ServiceNow": "https://www.servicenow.com/",
  "AWS VPC": "https://aws.amazon.com/vpc/",
};

const nistFunctions = [
  { fn: "Govern", color: "bg-violet-500/10 text-violet-600", stages: [1] },
  { fn: "Identify", color: "bg-blue-500/10 text-blue-600", stages: [2, 3, 4, 5] },
  { fn: "Protect", color: "bg-green-500/10 text-green-600", stages: [6] },
  { fn: "Detect", color: "bg-yellow-500/10 text-yellow-700", stages: [7, 8, 9] },
  { fn: "Respond", color: "bg-orange-500/10 text-orange-600", stages: [10, 11] },
  { fn: "Recover", color: "bg-red-500/10 text-red-600", stages: [12] },
];

function getNistFunction(stageNum: number) {
  return nistFunctions.find((f) => f.stages.includes(stageNum));
}

const stages = [
  {
    num: 1,
    title: "Regulatory Scoping",
    gate: "Engagement Approval",
    description:
      "Define the organizational context, applicable regulations, and asset boundaries. Before any client data is received, a dedicated infrastructure environment is provisioned — isolated VPC, dedicated databases, and VPN-secured access. Client data is never commingled across engagements. Data handling protocols, sensitivity classifications, and AI processing boundaries are defined and agreed upon before technical work begins.",
    inputs: [
      "Prior audit reports and findings",
      "Regulatory filings and exam history",
      "Organizational charts and business unit mapping",
      "Data classification and sensitivity requirements",
    ],
    deliverables: [
      "Scope document",
      "Regulatory applicability map",
      "Asset inventory boundaries",
      "Data handling and security protocol",
      "Dedicated client environment (VPC, databases, VPN)",
    ],
    frameworks: ["COBIT 2019", "ISO 42001", "NIST CSF 2.0 GV", "ISO 27001"],
    tools: ["MS Lists", "ServiceNow", "AWS VPC"],
    highlight:
      "Each engagement operates in a dedicated, isolated environment — separate VPC, separate databases, VPN-secured access. Client data is never mixed.",
  },
  {
    num: 2,
    title: "Asset Identification & Classification",
    gate: "Asset Inventory Approved",
    description:
      "Identify and classify all organizational assets — data repositories, hardware, software, network infrastructure — by business criticality and sensitivity. This establishes what you are protecting before assessing what threatens it. Without a classified asset inventory, threat profiling is abstract and coverage analysis has no anchor.",
    inputs: [
      "ServiceNow CMDB (hardware, software, network)",
      "Network discovery scans (Nmap, Lansweeper)",
      "Software inventory (SCCM, Intune, Jamf)",
      "Cloud service inventory (AWS, Azure, GCP)",
      "Data flow diagrams and data classification records",
    ],
    deliverables: [
      "Classified asset inventory",
      "Data inventory with sensitivity tiers",
      "Business criticality ratings",
      "System boundary documentation",
    ],
    frameworks: ["NIST CSF 2.0", "COBIT 2019", "ISO 27001"],
    tools: ["ServiceNow", "Lansweeper", "MS Lists", "Intune"],
    highlight:
      "You cannot assess what threatens you until you know what you are protecting and how critical it is.",
  },
  {
    num: 3,
    title: "Threat Profiling",
    gate: "Threat Model Sign-Off",
    description:
      "Select the MITRE ATT&CK techniques most relevant to the organization based on industry vertical, size, geography, and known adversary targeting patterns. This profile becomes the foundation for likelihood — grounded in how adversaries actually operate, not subjective opinion.",
    inputs: [
      "Threat intelligence feeds (FS-ISAC, CISA)",
      "SIEM alert trends and log analysis",
      "Sector-specific advisories and IOCs",
    ],
    deliverables: [
      "Threat profile document",
      "Selected ATT&CK technique set",
      "Targeting relevance rationale",
    ],
    frameworks: ["MITRE ATT&CK", "NIST SP 800-30"],
    tools: ["MITRE Navigator", "L3 AI strategy"],
    highlight: "Drives likelihood — the engine of the entire assessment.",
  },
  {
    num: 4,
    title: "Control Inventory",
    gate: "Control Inventory Validated",
    description:
      "Catalog the organization's existing controls against recognized control frameworks. Map each control to a standardized taxonomy so coverage can be measured consistently. The classified asset inventory from Stage 2 anchors every control to the assets it protects.",
    inputs: [
      "Classified asset inventory (from Stage 2)",
      "ServiceNow GRC control catalog",
      "Policy and procedure documentation",
      "Existing control matrices and spreadsheets",
    ],
    deliverables: [
      "Control register",
      "SCF/CRI control mapping",
      "Control ownership matrix",
    ],
    frameworks: ["SCF", "CRI Profile", "NIST SP 800-53"],
    tools: ["MS Lists", "L1/L2 classification", "ServiceNow"],
  },
  {
    num: 5,
    title: "Control-to-Mitigation Mapping",
    gate: "Mapping Reviewed",
    description:
      "Map each control to the specific MITRE mitigations it addresses for each selected technique. Control test history validates whether the control actually works — a control that has not been tested in 18 months is weighted differently than one tested last quarter.",
    inputs: [
      "ServiceNow GRC control test history",
      "Control effectiveness ratings",
      "Last-tested dates and test evidence",
    ],
    deliverables: [
      "Mitigation coverage matrix",
      "Control-to-technique traceability",
    ],
    frameworks: ["MITRE ATT&CK Mitigations", "CRI Response Guidance"],
    tools: ["MS Lists", "L1/L2 mapping engine", "ServiceNow GRC"],
  },
  {
    num: 6,
    title: "Coverage Analysis",
    gate: "Coverage Rated & Reviewed",
    description:
      "Rate coverage for each Response Guidance requirement using evidence-based verdicts: Covered, Partial, or No Coverage. Vulnerability scan results and penetration test findings validate whether controls are working in practice — not just documented on paper.",
    inputs: [
      "Vulnerability scan results (Nessus, Qualys, Tenable)",
      "Penetration test reports",
      "Configuration audit outputs (CIS-CAT)",
      "System and application logs",
    ],
    deliverables: [
      "Level 1 — Executive coverage dashboard",
      "Level 2 — Domain coverage matrix",
      "Level 3 — RG control coverage detail",
    ],
    frameworks: ["CRI Profile Response Guidance", "SCF"],
    tools: ["MS Lists", "Excel", "PowerBI"],
  },
  {
    num: 7,
    title: "Likelihood Rating",
    gate: "Likelihood Justified",
    description:
      "Derive likelihood from the threat profile — not from a committee vote or subjective scale. Active vulnerabilities from scans increase likelihood. SIEM data shows whether techniques are already being attempted against the organization. Likelihood is defensible because it traces to observed adversary behavior and real telemetry.",
    inputs: [
      "Active vulnerability data from scans",
      "SIEM alert trends and incident history",
      "Threat intelligence reports",
      "Exploit availability data (KEV catalog)",
    ],
    deliverables: [
      "Likelihood rating per technique",
      "Threat frequency evidence",
      "Targeting relevance justification",
    ],
    frameworks: ["MITRE ATT&CK", "NIST SP 800-30", "FAIR"],
    tools: ["L3 AI analysis", "Threat intelligence feeds", "Splunk"],
    highlight:
      "Likelihood is not a guess — it is grounded in how adversaries actually target this type of organization.",
  },
  {
    num: 8,
    title: "Impact Assessment",
    gate: "Impact Validated",
    description:
      "Determine impact based on what is exposed when coverage gaps exist. Business impact analysis data and asset criticality ratings quantify the consequence. If a technique succeeds because controls are missing or partial, what is the business, regulatory, and operational consequence?",
    inputs: [
      "Business impact analysis (BIA)",
      "Data classification inventory",
      "Asset criticality ratings",
      "Regulatory penalty exposure",
    ],
    deliverables: [
      "Impact rating per technique",
      "Exposure analysis per gap",
      "Business consequence mapping",
    ],
    frameworks: ["NIST SP 800-30", "COBIT 2019", "FAIR"],
    tools: ["L1/L2 impact analysis", "MS Lists"],
    highlight:
      "Impact is driven by coverage gaps — what breaks when the adversary gets through.",
  },
  {
    num: 9,
    title: "Risk Rating",
    gate: "Risk Scores Approved",
    description:
      "Combine likelihood and impact to produce a risk score for each technique. Visualize across the full threat profile as a risk heat map. Every score traces back to the threat profile (likelihood) and coverage gaps (impact) — fully defensible, no opinion required.",
    inputs: [
      "Prior risk register entries",
      "Risk appetite and tolerance statements",
      "Historical risk assessment results",
    ],
    deliverables: [
      "Risk score per technique",
      "Risk heat map",
      "Risk register entries",
    ],
    frameworks: ["NIST AI RMF", "ISO 27005", "FAIR"],
    tools: ["PowerBI", "MS Lists", "Excel"],
  },
  {
    num: 10,
    title: "Gap Prioritization",
    gate: "Prioritization Reviewed",
    description:
      "Rank gaps by risk score, not by compliance order or alphabetical listing. The highest-risk gaps — where likelihood is high and coverage is weakest — get addressed first. This ensures remediation effort is directed where it reduces the most risk.",
    inputs: [
      "Existing remediation backlog",
      "Budget and resource constraints",
      "Regulatory deadlines and exam schedules",
    ],
    deliverables: [
      "Prioritized gap register",
      "Risk-ranked remediation queue",
    ],
    frameworks: ["CRI Profile", "NIST CSF 2.0"],
    tools: ["MS Lists", "Power Automate"],
  },
  {
    num: 11,
    title: "Remediation Design",
    gate: "Remediation Plan Approved",
    description:
      "Design controls to close the highest-risk gaps. Each recommendation traces back to the specific MITRE mitigation it addresses, the gap it closes, and the risk it reduces. Assign owners, timelines, and success criteria.",
    inputs: [
      "Vendor and product capability assessments",
      "Change management records (ServiceNow)",
      "Implementation precedents and lessons learned",
    ],
    deliverables: [
      "Remediation plan with owners",
      "Control design specifications",
      "Implementation timeline",
    ],
    frameworks: ["SCF", "CIS Benchmarks", "NIST SP 800-53"],
    tools: ["SharePoint", "MS Lists", "Power Automate"],
  },
  {
    num: 12,
    title: "Evidence Packaging & Data Destruction",
    gate: "Executive Sign-Off",
    description:
      "Bundle the complete evidence chain — from threat profile through coverage analysis to risk ratings and remediation plans — into deliverables for the board, regulators, and audit committee. Every finding traces from adversary technique to control gap to business risk. Upon client acceptance, all engagement data is destroyed: the dedicated VPC is terminated, databases are purged, and all client artifacts are removed. A formal data destruction attestation is issued with timestamped CloudTrail evidence documenting every deletion. Physical media sanitization is covered by the cloud provider's SOC 2 and ISO 27001 controls.",
    inputs: [
      "Audit trail and activity logs",
      "Compliance tracking dashboards",
      "Prior board reporting packages",
      "CloudTrail deletion logs",
    ],
    deliverables: [
      "Executive summary",
      "Board-ready risk report",
      "Evidence packages per finding",
      "Regulatory compliance mapping",
      "Data destruction attestation with CloudTrail evidence",
    ],
    frameworks: ["COBIT 2019", "ISO 27001", "NIST SP 800-88", "CRI Profile"],
    tools: ["PowerBI", "SharePoint", "Splunk observability", "AWS VPC"],
    highlight:
      "At engagement close, all client data is destroyed and a formal attestation is issued — timestamped deletion logs backed by SOC 2 and ISO 27001 physical media controls.",
  },
];

export default function Methodology() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                Methodology
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Threat-Informed{" "}
                <span className="text-muted-foreground">
                  Risk Assessment
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                A 12-stage process grounded in NIST CSF 2.0 that transforms
                threat intelligence into defensible risk ratings. Likelihood
                comes from how adversaries actually target your type of
                organization. Impact comes from what is exposed when coverage
                has gaps. Every finding traces from technique to control to
                business risk.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* NIST CSF 2.0 Frame */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Framework Foundation
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Each stage maps to a NIST CSF 2.0 function. The framework
              provides the structure — the methodology provides the
              execution.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {nistFunctions.map((f) => (
                <div
                  key={f.fn}
                  className={`rounded-lg px-4 py-3 ${f.color} border`}
                >
                  <p className="text-sm font-semibold">{f.fn}</p>
                  <p className="text-xs opacity-70 mt-0.5">
                    {f.stages.length === 1
                      ? `Stage ${f.stages[0]}`
                      : `Stages ${f.stages[0]}–${f.stages[f.stages.length - 1]}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Process Stages */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            The Process
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            12 stages from scoping to evidence packaging. Each stage has a
            gate — work does not advance without validated deliverables.
          </p>

          <div className="mt-12 space-y-8">
            {stages.map((stage) => {
              const nist = getNistFunction(stage.num);
              return (
                <Card
                  key={stage.num}
                  className="group transition-colors hover:border-foreground/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-bold text-primary/20 leading-none mt-1">
                          {String(stage.num).padStart(2, "0")}
                        </span>
                        <div>
                          <CardTitle className="text-lg">
                            {stage.title}
                          </CardTitle>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {nist && (
                              <Badge
                                className={`text-xs ${nist.color} border-0`}
                              >
                                {nist.fn}
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              Gate: {stage.gate}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stage.description}
                    </p>

                    {stage.highlight && (
                      <div className="mt-4 rounded-md bg-primary/5 border border-primary/10 px-4 py-3">
                        <p className="text-sm font-medium text-primary">
                          {stage.highlight}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          <span className="text-blue-600">&#9654;</span> Data Inputs
                        </p>
                        <ul className="space-y-1">
                          {stage.inputs.map((inp) => (
                            <li
                              key={inp}
                              className="text-xs text-muted-foreground"
                            >
                              {inp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Deliverables
                        </p>
                        <ul className="space-y-1">
                          {stage.deliverables.map((d) => (
                            <li
                              key={d}
                              className="text-xs text-muted-foreground"
                            >
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Frameworks
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.frameworks.map((f) => {
                            const url = frameworkUrls[f];
                            return url ? (
                              <a
                                key={f}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                  {f}
                                </Badge>
                              </a>
                            ) : (
                              <Badge
                                key={f}
                                variant="secondary"
                                className="text-xs"
                              >
                                {f}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                          Tools
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {stage.tools.map((t) => (
                            <Badge
                              key={t}
                              variant="outline"
                              className="text-xs"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* CTA to Approach */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  The Approach Behind the Process
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Why threat-informed changes everything. How AI augments
                  without replacing professional judgment. What makes an
                  engagement succeed. What you get beyond the report.
                </p>
              </div>
              <Link href="/approach">
                <Button size="lg" variant="outline">
                  View Approach
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
