"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const frameworkUrls: Record<string, string> = {
  "NIST CSF 2.0": "https://www.nist.gov/cyberframework",
  "NIST CSF 2.0 GV": "https://www.nist.gov/cyberframework",
  "NIST SP 800-30": "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
  "NIST SP 800-53": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
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
};

const nistFunctions = [
  { fn: "Govern", color: "bg-violet-500/10 text-violet-600", stages: [1] },
  { fn: "Identify", color: "bg-blue-500/10 text-blue-600", stages: [2, 3, 4] },
  { fn: "Protect", color: "bg-green-500/10 text-green-600", stages: [5] },
  { fn: "Detect", color: "bg-yellow-500/10 text-yellow-700", stages: [6, 7, 8] },
  { fn: "Respond", color: "bg-orange-500/10 text-orange-600", stages: [9, 10] },
  { fn: "Recover", color: "bg-red-500/10 text-red-600", stages: [11] },
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
      "Define the organizational context, applicable regulations, and asset boundaries. Establish the scope of the assessment and align with stakeholder expectations before any technical work begins.",
    inputs: [
      "Prior audit reports and findings",
      "Regulatory filings and exam history",
      "Organizational charts and business unit mapping",
    ],
    deliverables: [
      "Scope document",
      "Regulatory applicability map",
      "Asset inventory boundaries",
    ],
    frameworks: ["COBIT 2019", "ISO 42001", "NIST CSF 2.0 GV"],
    tools: ["MS Lists", "ServiceNow"],
  },
  {
    num: 2,
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
    num: 3,
    title: "Control Inventory",
    gate: "Control Inventory Validated",
    description:
      "Catalog the organization's existing controls against recognized control frameworks. Map each control to a standardized taxonomy so coverage can be measured consistently. Discovery tools and the CMDB feed the actual asset and control landscape — what is deployed, not what is documented.",
    inputs: [
      "ServiceNow CMDB (hardware, software, network)",
      "Network discovery scans (Nmap, Lansweeper)",
      "Software inventory (SCCM, Intune, Jamf)",
      "Hardware asset registers",
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
    num: 4,
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
    num: 5,
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
    num: 6,
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
    num: 7,
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
    num: 8,
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
    num: 9,
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
    num: 10,
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
    num: 11,
    title: "Evidence Packaging",
    gate: "Executive Sign-Off",
    description:
      "Bundle the complete evidence chain — from threat profile through coverage analysis to risk ratings and remediation plans — into deliverables for the board, regulators, and audit committee. Every finding traces from adversary technique to control gap to business risk.",
    inputs: [
      "Audit trail and activity logs",
      "Compliance tracking dashboards",
      "Prior board reporting packages",
    ],
    deliverables: [
      "Executive summary",
      "Board-ready risk report",
      "Evidence packages per finding",
      "Regulatory compliance mapping",
    ],
    frameworks: ["COBIT 2019", "ISO 27001", "CRI Profile"],
    tools: ["PowerBI", "SharePoint", "Splunk observability"],
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
                An 11-stage process grounded in NIST CSF 2.0 that transforms
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
            11 stages from scoping to evidence packaging. Each stage has a
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

        {/* Key Principle */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Why Threat-Informed?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Traditional risk assessments start with the compliance
                checklist and work backward. This methodology starts with
                the threat landscape and works forward. Controls exist to
                mitigate specific adversary behaviors — if you cannot trace
                a control back to a threat, you cannot validate its
                effectiveness. If you cannot trace a risk rating back to
                observed adversary behavior, the rating is opinion, not
                evidence.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Threat Profile Drives Likelihood",
                  description:
                    "Likelihood is derived from adversary targeting patterns — industry, geography, organization size — not from subjective scales or committee votes.",
                },
                {
                  step: "02",
                  title: "Coverage Gaps Drive Impact",
                  description:
                    "Impact is determined by what is exposed when controls are missing or partial. The coverage analysis tells you exactly where the organization is vulnerable.",
                },
                {
                  step: "03",
                  title: "Every Finding Is Traceable",
                  description:
                    "From MITRE technique to mitigation to control gap to risk score to remediation — every finding has a complete evidence chain that a regulator can follow.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-4xl font-bold text-primary/20">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
