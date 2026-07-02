"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const layers = [
  {
    name: "Knowledge",
    subtitle: "Methodologies, standards, decision logic",
    description: "The professional expertise layer — codified methodologies, regulatory standards, templates, decision trees, and lessons learned from real engagements. Knowledge is authored by domain experts and captured in versioned, reusable formats.",
    examples: ["MITRE ATT&CK mappings", "CRI control frameworks", "Audit playbooks", "Threat modeling templates"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Capability",
    subtitle: "Versioned, testable packages",
    description: "Portable capability packages (.acf) that bundle purpose, tools, workflows, evidence requirements, quality gates, failure modes, and validation tests into one consumable unit — like a software package for professional work.",
    examples: ["817 cybersecurity skills", "Network recovery package", "AI governance assessment", "Threat-informed risk assessment"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    name: "Orchestration",
    subtitle: "Routing, handoff, escalation",
    description: "Selects the right tools and executors for each capability based on confidence scores, cost, and availability. Resolves dependency graphs, manages handoffs between executors, and escalates when quality gates are not met.",
    examples: ["Tool registry (81+ tools)", "Dependency resolution", "Confidence-based routing", "Escalation policies"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    name: "Execution",
    subtitle: "Models, scripts, humans, APIs",
    description: "The interchangeable compute layer. Local models for private work, frontier models for complex reasoning, deterministic scripts for known patterns, and humans for judgment calls. The capability package does not care which executor runs it.",
    examples: ["Ollama (local, offline)", "Claude Opus (frontier)", "Bash scripts", "Human analyst review"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    name: "Evidence",
    subtitle: "Logs, artifacts, continuous learning",
    description: "Every execution produces evidence — structured logs, before/after state, quality gate results, and PASS/FAIL outcomes. Evidence feeds back into the knowledge layer, creating a continuous improvement loop.",
    examples: ["Recovery logs", "Splunk observability", "Audit artifacts", "Validation test results"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const capabilities = [
  { name: "CRI Coverage Classification", status: "Pilot", executor: "Local / Cloud" },
  { name: "Executive Observation Writing", status: "Pilot", executor: "Local" },
  { name: "Control Design Assessment", status: "Experimental", executor: "Local / Cloud" },
  { name: "Control-to-RG Mapping", status: "Experimental", executor: "Local / Cloud" },
  { name: "MITRE Technique-to-CRI Mapping", status: "Experimental", executor: "Local / Cloud" },
  { name: "Gap Assessment Narrative", status: "Experimental", executor: "Local / Cloud" },
  { name: "Evidence Validation", status: "Experimental", executor: "Local / Cloud" },
  { name: "Finding Generation", status: "Experimental", executor: "Local / Cloud" },
  { name: "CIS Benchmark Scan & Report", status: "Experimental", executor: "Script" },
  { name: "Workpaper Generation", status: "Experimental", executor: "Local / Cloud" },
  { name: "Network Connectivity Recovery", status: "Production", executor: "Script / Local" },
  { name: "Data Analytics & Executive Dashboards", status: "Experimental", executor: "Local / Cloud" },
];

const engagement = {
  client: "Heritage Community Bank",
  type: "Threat-Informed Cyber Risk Assessment",
  trigger: "3 FDIC MRAs — Q1 2026 IT examination (Composite Rating 3)",
  profile: "$1.2B assets | 8 branches | 320 employees | State-chartered, FDIC-insured",
  frameworks: ["SCF 2026.1 (1,468 controls)", "CRI Profile v2.2", "MITRE ATT&CK v16", "NIST CSF 2.0"],
  riskDomains: ["Access Control (R-AC-1 to R-AC-4)", "Asset Management (R-AM-1 to R-AM-3)", "Governance (R-GV-1 to R-GV-8)"],
  dataEnvironment: {
    name: "Heritage_Risk_Assessment_Data",
    platform: "AWS VPC (us-east-1)",
    encryption: "AES-256 at rest, TLS in transit",
    access: "Two-door model: bank uploads, firm reads. Data never leaves.",
    logging: "CloudTrail + S3 access logs forwarded to bank SIEM",
    destruction: "NIST SP 800-88 at engagement close with attestation",
  },
  deliverables: [
    { id: "DEL-001", name: "Engagement Charter", status: "Complete", href: "/deliverables/DEL-001_Engagement_Charter.html", description: "Scope, methodology, stakeholders, AI governance, regulatory basis (3 MRAs)" },
    { id: "DEL-002", name: "Engagement Letter", status: "Complete", href: "/deliverables/DEL-002_Engagement_Letter.html", description: "Professional services agreement with data handling, AI oversight, NDA for CSI" },
    { id: "DEL-003", name: "Scope Document", status: "Complete", href: "/deliverables/DEL-003_Scope_Document.html", description: "Assessment targets, exclusions, MRA-to-deliverable mapping, risk scoring" },
    { id: "DEL-004", name: "Board Risk Appetite Questionnaire", status: "Complete", href: "/deliverables/DEL-004_Board_Risk_Appetite_Questionnaire.html", description: "8-domain risk appetite instrument — 5 directors, 30 questions (MRA 2026-IT-002)" },
    { id: "DEL-005", name: "Board Risk Appetite Report", status: "Complete", href: "/deliverables/DEL-005_Board_Risk_Appetite_Report.html", description: "Baseline 1.39/5.0, 25 consensus areas, 6 Board motions, severity calibration" },
    { id: "DEL-006", name: "Information Request List", status: "Complete", href: "/deliverables/DEL-006_Information_Request_List.html", description: "52 items across 9 categories, 7-wave schedule, POC assignments" },
  ],
  upcoming: [
    "DEL-007 Evidence Tracker", "DEL-008 MITRE ATT&CK Workbook", "DEL-009 CRI Profile Workbook",
    "DEL-010 Coverage Dashboard", "DEL-011 Risk Register", "DEL-012 Threat Profile",
    "DEL-013 Threat Library", "DEL-014 Executive Dashboard", "DEL-015 Board Presentation",
    "DEL-016 Technical Appendix", "DEL-017 Management Response", "DEL-018 Final Report",
    "DEL-019 Lessons Learned"
  ],
};

const observabilityStack = [
  { tool: "Splunk", role: "Centralized log ingestion, search, and alerting for all inference activity" },
  { tool: "JSONL Pipeline", role: "Structured event logging with sanitization — only operational telemetry is stored" },
  { tool: "CloudTrail", role: "AWS audit trail for all Bedrock API calls" },
  { tool: "Canary Tests", role: "Automated leak detection — planted sensitive strings must never appear in logs" },
];

const principles = [
  {
    title: "Every Capability Earns Trust",
    description: "New capabilities follow a probation model: Experimental, Pilot, Production, Review Required, Retired. 50 successful executions before production status.",
  },
  {
    title: "No Observability, No Production",
    description: "Every capability requires an observability contract before reaching production — job ID, acceptance metric, escalation threshold, and Splunk dashboard.",
  },
  {
    title: "Privacy by Architecture",
    description: "Distinct data boundaries at every layer. Local execution stays on-device. Cloud stays within a private account. Privacy is structural, not policy.",
  },
  {
    title: "Measure Like an Auditor",
    description: "Don't ask 'does this prompt work?' Ask 'what evidence demonstrates this capability is reliable enough to trust with production work?'",
  },
];

const osPrinciples = [
  {
    title: "Capabilities, Not Agents",
    description: "The organizing principle is WHAT work gets done, not WHO performs it. Agents are interchangeable execution resources — the capability package is the durable abstraction.",
  },
  {
    title: "Executors Are Interchangeable",
    description: "Today's executor might be a 14B local model. Tomorrow it might be a 70B cloud model, a frontier model, a script, or a human analyst. The capability package does not care.",
  },
  {
    title: "Capabilities Compose Like Software",
    description: "Each capability declares its inputs, outputs, dependencies, and version. A dependency registry resolves the graph before execution — enabling complex professional work without hard-coding workflows.",
  },
  {
    title: "Confidence Drives Routing",
    description: "Every capability has an operational confidence score per executor type. If a local model scores 0.61 on a task, the orchestrator escalates to a frontier model. Model selection is policy-driven, not manual.",
  },
  {
    title: "Evidence Is a First-Class Layer",
    description: "Every execution produces structured proof — before/after state, quality gate results, and PASS/FAIL outcomes. Evidence feeds back into the knowledge layer for continuous improvement.",
  },
  {
    title: "Six Registries, One System",
    description: "Capability, Tool, Workflow, Evidence, Validation, and Dependency registries form the operating system. Models are compute engines. The registries are the platform.",
  },
];

function statusColor(status: string) {
  switch (status) {
    case "Production": return "default";
    case "Pilot": return "secondary";
    case "Experimental": return "outline";
    default: return "outline";
  }
}

export default function Lab() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                AI Governance Lab
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Capability{" "}
                <span className="text-muted-foreground">Operating System</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Professional methodologies codified as portable, versioned,
                testable capability packages — from control assessment to
                compliance scanning to evidence validation. A five-layer
                architecture separates knowledge from execution: capabilities
                are the durable abstraction, executors are interchangeable.
                Every capability is measured, monitored, and continuously
                improved.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Architecture */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Architecture
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Five layers — knowledge flows down through capability packages to
            interchangeable executors. Evidence flows back up for continuous
            improvement. Agents disappear as the organizing principle.
          </p>

          <div className="mt-12 space-y-4">
            {layers.map((layer, i) => (
              <div key={layer.name} className="group">
                <Card className="transition-colors hover:border-foreground/20">
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {layer.icon}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <CardTitle className="text-lg">{layer.name}</CardTitle>
                        <span className="text-xs text-muted-foreground">{layer.subtitle}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{layer.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {layer.examples.map((ex) => (
                          <Badge key={ex} variant="secondary" className="text-xs">
                            {ex}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="h-4 w-4 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Capabilities */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Capability Registry
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Each capability is a versioned, testable package — purpose, tools,
              workflow, evidence requirements, quality gates, and failure modes
              bundled together. Capabilities earn trust through a probation
              model and are executor-agnostic.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="flex items-center justify-between rounded-lg border bg-background p-4 transition-colors hover:border-foreground/20"
                >
                  <div>
                    <p className="font-medium text-sm">{cap.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Executor: {cap.executor}</p>
                  </div>
                  <Badge variant={statusColor(cap.status)} className="text-xs">
                    {cap.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Active Engagement */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Active Engagement
              </h2>
              <Badge variant="default" className="text-xs">Live</Badge>
            </div>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              A complete consulting engagement built end-to-end — from signed
              agreements through data environment provisioning to evidence
              collection. Every deliverable demonstrates the capability
              framework in action. The engagement is the product.
            </p>

            {/* Client Card */}
            <Card className="mt-10">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{engagement.client}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{engagement.type}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">Demo Engagement</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Profile</p>
                    <p className="text-sm">{engagement.profile}</p>
                    <p className="text-sm text-muted-foreground mt-1">{engagement.trigger}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Frameworks</p>
                    <div className="flex flex-wrap gap-1.5">
                      {engagement.frameworks.map((f) => (
                        <Badge key={f} variant="secondary" className="text-xs">{f}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Data Environment */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Secure Data Environment</p>
                  <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                      </svg>
                      <span className="text-sm font-medium">{engagement.dataEnvironment.name}</span>
                      <Badge variant="outline" className="text-xs ml-auto">{engagement.dataEnvironment.platform}</Badge>
                    </div>
                    <div className="grid gap-1.5 text-xs text-muted-foreground pl-6">
                      <p>{engagement.dataEnvironment.encryption}</p>
                      <p>{engagement.dataEnvironment.access}</p>
                      <p>{engagement.dataEnvironment.logging}</p>
                      <p>{engagement.dataEnvironment.destruction}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Risk Domains */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Assessment Risk Domains</p>
                  <div className="flex flex-wrap gap-2">
                    {engagement.riskDomains.map((d) => (
                      <Badge key={d} variant="secondary" className="text-xs">{d}</Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Deliverables */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Engagement Deliverables
                  </p>
                  <div className="space-y-2">
                    {engagement.deliverables.map((d) => {
                      const inner = (
                        <>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-muted-foreground w-16">{d.id}</span>
                            <div>
                              <p className="text-sm font-medium">{d.name}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{d.description}</p>
                            </div>
                          </div>
                          <Badge
                            variant={d.status === "Complete" ? "default" : "outline"}
                            className="text-xs ml-4 shrink-0"
                          >
                            {d.status}
                          </Badge>
                        </>
                      );
                      return d.href ? (
                        <a
                          key={d.id}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-lg border bg-background p-3 transition-colors hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div
                          key={d.id}
                          className="flex items-center justify-between rounded-lg border bg-background p-3"
                        >
                          {inner}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Upcoming */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    Remaining Deliverables
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {engagement.upcoming.map((name) => (
                      <Badge key={name} variant="outline" className="text-xs text-muted-foreground">{name}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Governance Principles */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Governance Principles
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The same questions an auditor asks about IT controls apply to AI
            capabilities: Is it designed appropriately? Is it operating
            effectively? How do we know?
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-4">
                <span className="text-4xl font-bold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Capability Operating System */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Operating System Principles
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Most AI systems jump from knowledge to execution. The missing
              layer is capability packaging — portable, versioned bundles that
              any compliant executor can consume. Models become interchangeable
              compute engines. The registries are the platform.
            </p>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {osPrinciples.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <span className="text-4xl font-bold text-primary/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Observability */}
        <section>
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Observability Stack
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Every inference event is logged, sanitized, and shipped to Splunk.
              Operational telemetry only — content is hashed, not stored.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {observabilityStack.map((item) => (
                <div
                  key={item.tool}
                  className="rounded-lg border bg-background p-4 transition-colors hover:border-foreground/20"
                >
                  <p className="font-medium text-sm">{item.tool}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Toolset */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Toolset
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The platforms and services powering the governance lab — from
            risk assessment to observability to automated compliance.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Amazon Web Services (AWS)", detail: "Cloud infrastructure, Bedrock AI, CloudTrail audit" },
              { name: "Splunk", detail: "SIEM, log ingestion, AI inference observability" },
              { name: "ServiceNow", detail: "IT service management — incident, change, asset" },
              { name: "Microsoft Power BI", detail: "Executive dashboards and audit analytics" },
              { name: "Microsoft Lists", detail: "Control registers, risk logs, finding trackers" },
              { name: "Power Automate", detail: "Workflow automation — findings routing, alerts" },
              { name: "Google Cloud", detail: "Secondary cloud platform and CLI tooling" },
              { name: "CIS-CAT", detail: "Automated CIS Benchmark compliance scanning" },
              { name: "Ollama", detail: "Local inference engine — private model execution" },
              { name: "NVIDIA NIM", detail: "121 cloud models — free tier research inference" },
              { name: "Claude Code", detail: "L3 operations manager — strategy and orchestration" },
              { name: "GitHub", detail: "Source control, CI/CD, portfolio hosting" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="rounded-lg border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
              >
                <p className="font-medium text-sm">{tool.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{tool.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
