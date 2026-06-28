"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const tiers = [
  {
    name: "L1 — Local Private",
    location: "Mac Studio (M4 Max, 36GB)",
    models: ["Qwen2.5 14B (text)", "Qwen2.5-VL 7B (vision)"],
    role: "On-device execution engine. Nothing leaves the machine. Handles assessments, classification, document extraction, and compliance scanning.",
    privacy: "Fully offline",
    cost: "$0",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
  {
    name: "L2 — Cloud Private",
    location: "AWS Bedrock + NVIDIA NIM",
    models: ["Claude Sonnet 4.6 (Bedrock)", "Llama 3.3 70B (NIM)", "121 models via NIM"],
    role: "Private cloud inference within a controlled AWS boundary. Managed services with full audit trails. No infrastructure to maintain.",
    privacy: "Private account boundary",
    cost: "~$15-50/mo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 .75-7.425A4.502 4.502 0 0 0 13.5 6 4.5 4.5 0 0 0 9.17 8.537A4.499 4.499 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
  {
    name: "L3 — Public",
    location: "Claude Code (VS Code)",
    models: ["Claude Opus / Sonnet"],
    role: "Operations manager — strategy, orchestration, and workforce optimization. Designs work packages, measures outcomes, and continuously improves the system.",
    privacy: "Third-party API",
    cost: "Subscription",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const capabilities = [
  { name: "CRI Coverage Classification", status: "Pilot", tier: "L1" },
  { name: "Executive Observation Writing", status: "Pilot", tier: "L1" },
  { name: "Control Design Assessment", status: "Experimental", tier: "L1/L2" },
  { name: "Control-to-RG Mapping", status: "Experimental", tier: "L1/L2" },
  { name: "MITRE Technique-to-CRI Mapping", status: "Experimental", tier: "L1/L2" },
  { name: "Gap Assessment Narrative", status: "Experimental", tier: "L1/L2" },
  { name: "Evidence Validation", status: "Experimental", tier: "L1/L2" },
  { name: "Finding Generation", status: "Experimental", tier: "L1/L2" },
  { name: "CIS Benchmark Scan & Report", status: "Experimental", tier: "L1" },
  { name: "Workpaper Generation", status: "Experimental", tier: "L1/L2" },
  { name: "KPI & KRI Definition and Implementation", status: "Experimental", tier: "L1/L2" },
  { name: "Data Analytics & Executive Dashboards", status: "Experimental", tier: "L1/L2" },
];

const observabilityStack = [
  { tool: "Splunk", role: "Centralized log ingestion, search, and alerting for all inference activity" },
  { tool: "JSONL Pipeline", role: "Structured event logging with sanitization — only operational telemetry is stored" },
  { tool: "CloudTrail", role: "AWS audit trail for all Bedrock API calls" },
  { tool: "Canary Tests", role: "Automated leak detection — planted sensitive strings must never appear in logs" },
];

const principles = [
  {
    title: "Every Capability Earns Trust",
    description: "New AI capabilities follow a probation model: Experimental, Pilot, Production, Review Required, Retired. 50 successful executions before production status.",
  },
  {
    title: "No Observability, No Production",
    description: "Every capability requires an observability contract before reaching production — job ID, acceptance metric, escalation threshold, and Splunk dashboard.",
  },
  {
    title: "Privacy by Architecture",
    description: "Three tiers with distinct data boundaries. L1 stays on-device. L2 stays within a private cloud account. L3 handles strategy only. Privacy is structural, not policy.",
  },
  {
    title: "Measure Like an Auditor",
    description: "Don't ask 'does this prompt work?' Ask 'what evidence demonstrates this capability is reliable enough to trust with production work?'",
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
                A Governed AI{" "}
                <span className="text-muted-foreground">Workforce</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Purpose-built AI agents trained to perform IT risk and audit
                functions — from control assessment to compliance scanning to
                evidence validation. A three-tier architecture provides the
                infrastructure: local models for private execution, cloud for
                scale, and a frontier model managing the workforce. Every agent
                is measured, monitored, and continuously improved.
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
            Three tiers — local private, cloud private, and public — each with
            a distinct role and privacy boundary.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <Card key={tier.name} className="group transition-colors hover:border-foreground/20">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {tier.icon}
                  </div>
                  <CardTitle className="text-lg">{tier.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">{tier.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tier.role}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tier.models.map((model) => (
                      <Badge key={model} variant="secondary" className="text-xs">
                        {model}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{tier.privacy}</span>
                    <span className="text-muted-foreground">{tier.cost}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Capabilities */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Agent Registry
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Each agent is trained to perform a specific IT risk or audit
              function. Like employees, they are hired one at a time, measured
              against acceptance criteria, supervised through observability, and
              required to earn trust before reaching production.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="flex items-center justify-between rounded-lg border bg-background p-4 transition-colors hover:border-foreground/20"
                >
                  <div>
                    <p className="font-medium text-sm">{cap.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Tier: {cap.tier}</p>
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

        {/* Observability */}
        <section className="bg-muted/30">
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
