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
  "Lansweeper": "https://www.lansweeper.com/",
  "Intune": "https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune",
  "ServiceNow": "https://www.servicenow.com/",
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

        <Separator />

        {/* Engagement Success Factors */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Engagement Success Factors
            </h2>
            <p className="mt-4 text-muted-foreground">
              A defensible risk assessment requires more than a good framework.
              These six factors — grounded in NIST, ISACA, ISO 27005, and
              FAIR — determine whether an engagement produces actionable
              results or a checkbox exercise.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
                title: "Clean Data Inputs",
                description:
                  "Quality asset inventories, vulnerability scan results, control test evidence, and system logs. Garbage in, garbage out — the assessment is only as defensible as the data behind it.",
                sources: "NIST SP 800-30, ISO 27005, FAIR",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Strong Stakeholder Support",
                description:
                  "Executive sponsorship, engaged risk owners, and cross-functional participation. Without business unit involvement, assessments stay theoretical and no one owns the residual risk.",
                sources: "ISACA, NIST RMF, Security Executive Council",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                ),
                title: "Clear Scope & Risk Criteria",
                description:
                  "Defined boundaries, risk tolerance thresholds, and regulatory applicability established before any technical work begins. Without explicit criteria, assessments devolve into generic vulnerability listings.",
                sources: "NIST SP 800-30, ISO 27005, NIST CSF 2.0",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                ),
                title: "Agreed Methodology & Definitions",
                description:
                  "Everyone working from the same risk model, terminology, and scoring criteria. If 'likelihood' and 'impact' mean different things to different participants, results cannot be defended or compared over time.",
                sources: "FAIR, ISO 27005, NIST SP 800-30",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.54 23.54 0 0 0-2.688 6.413A12.02 12.02 0 0 1 2.25 12c0-2.291.637-4.436 1.75-6.273m13.23 4.42a23.54 23.54 0 0 1 2.688 6.413A12.02 12.02 0 0 0 21.75 12c0-2.291-.637-4.436-1.75-6.273M4.26 10.147A23.473 23.473 0 0 1 12 8.25a23.473 23.473 0 0 1 7.74 1.897M12 2.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                  </svg>
                ),
                title: "Skilled Practitioners",
                description:
                  "Analysts trained in MITRE ATT&CK, FAIR, CRI Profile, and NIST frameworks. Poorly trained analysts and a superficial culture lead directly to checkbox assessments and unconvincing risk narratives.",
                sources: "ISACA, FAIR Institute, NIST",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                  </svg>
                ),
                title: "Transparent Traceability",
                description:
                  "Every finding traceable from MITRE technique to mitigation to control gap to risk score to remediation. In audits, regulatory inquiries, or incidents, you must show how you arrived at each conclusion.",
                sources: "NIST SP 800-30, ISO 27001, COBIT 2019",
              },
            ].map((factor) => (
              <Card key={factor.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {factor.icon}
                  </div>
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {factor.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground/60">
                    {factor.sources}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Operational Deliverables */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Beyond the Report
              </h2>
              <p className="mt-4 text-muted-foreground">
                Most risk assessments end with a PDF. This methodology
                produces operational artifacts that plug directly into the
                organization&apos;s monitoring and reporting stack — every
                deliverable is driven by the threat profile, not generic
                templates.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Threat-Targeted KPIs & KRIs",
                  description:
                    "Key Performance Indicators and Key Risk Indicators derived directly from the threat profile — not generic compliance metrics. Each KPI traces to a specific MITRE technique and the controls that mitigate it, so leadership measures what actually matters for their threat landscape.",
                  examples: [
                    "Mean time to detect per profiled technique",
                    "Coverage % by MITRE mitigation category",
                    "Control test currency (days since last validated)",
                    "Open vulnerability count by threat-relevant CVE",
                  ],
                },
                {
                  title: "Splunk Logging Requirements",
                  description:
                    "Specific log sources, event types, and data fields required to detect the techniques in the threat profile. Ensures the SIEM is capturing the telemetry needed for detection — not just collecting everything and hoping.",
                  examples: [
                    "Required log sources per ATT&CK technique",
                    "Data field specifications for detection coverage",
                    "Log retention requirements by criticality tier",
                    "Gap analysis: what is logged vs. what is needed",
                  ],
                },
                {
                  title: "Splunk Alert Triggers",
                  description:
                    "Detection rules and correlation searches configured for the specific MITRE techniques identified in the threat profile. Each alert maps to a technique, a data source, and a response playbook — turning the threat profile into active defense.",
                  examples: [
                    "Alert rules per profiled ATT&CK technique",
                    "Correlation searches for technique chaining",
                    "Threshold tuning based on environment baseline",
                    "Response playbook linkage per alert",
                  ],
                },
                {
                  title: "Microsoft Teams Dashboards",
                  description:
                    "Professional dashboards integrated into Microsoft Teams where stakeholders already work. Coverage status, risk heat maps, KRI trends, and remediation progress — all visible without logging into a separate tool.",
                  examples: [
                    "Executive coverage dashboard (Level 1)",
                    "Risk heat map with drill-down to technique",
                    "KRI trend tracking with threshold alerts",
                    "Remediation progress by risk owner",
                  ],
                },
              ].map((item) => (
                <Card key={item.title} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-4 space-y-1.5">
                      {item.examples.map((ex) => (
                        <div
                          key={ex}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                          {ex}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
