"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
      "Catalog the organization's existing controls against recognized control frameworks. Map each control to a standardized taxonomy so coverage can be measured consistently.",
    deliverables: [
      "Control register",
      "SCF/CRI control mapping",
      "Control ownership matrix",
    ],
    frameworks: ["SCF", "CRI Profile", "NIST SP 800-53"],
    tools: ["MS Lists", "L1/L2 classification"],
  },
  {
    num: 4,
    title: "Control-to-Mitigation Mapping",
    gate: "Mapping Reviewed",
    description:
      "Map each control to the specific MITRE mitigations it addresses for each selected technique. This establishes the direct relationship between what the organization has and what adversaries do — the bridge between controls and threats.",
    deliverables: [
      "Mitigation coverage matrix",
      "Control-to-technique traceability",
    ],
    frameworks: ["MITRE ATT&CK Mitigations", "CRI Response Guidance"],
    tools: ["MS Lists", "L1/L2 mapping engine"],
  },
  {
    num: 5,
    title: "Coverage Analysis",
    gate: "Coverage Rated & Reviewed",
    description:
      "Rate coverage for each Response Guidance requirement using evidence-based verdicts: Covered, Partial, or No Coverage. Produce the three-level drill-down dashboards that make coverage visible from executive summary to individual control detail.",
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
      "Derive likelihood from the threat profile — not from a committee vote or subjective scale. Assess how frequently adversaries employ each selected technique against organizations of this type, region, and size. Likelihood is defensible because it traces to observed adversary behavior.",
    deliverables: [
      "Likelihood rating per technique",
      "Threat frequency evidence",
      "Targeting relevance justification",
    ],
    frameworks: ["MITRE ATT&CK", "NIST SP 800-30", "FAIR"],
    tools: ["L3 AI analysis", "Threat intelligence feeds"],
    highlight:
      "Likelihood is not a guess — it is grounded in how adversaries actually target this type of organization.",
  },
  {
    num: 7,
    title: "Impact Assessment",
    gate: "Impact Validated",
    description:
      "Determine impact based on what is exposed when coverage gaps exist. If a technique succeeds because controls are missing or partial, what is the business consequence? Impact flows directly from the coverage analysis — the gaps tell you where you are vulnerable.",
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

                    <div className="mt-6 grid gap-6 sm:grid-cols-3">
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
                          {stage.frameworks.map((f) => (
                            <Badge
                              key={f}
                              variant="secondary"
                              className="text-xs"
                            >
                              {f}
                            </Badge>
                          ))}
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
