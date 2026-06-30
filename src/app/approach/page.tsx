"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Approach() {
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
                Approach
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Why Threat-Informed{" "}
                <span className="text-muted-foreground">
                  Changes Everything
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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
          </div>
        </section>

        <Separator />

        {/* Three Principles */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
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

        {/* AI-Augmented, Human-Governed */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              AI-Augmented, Human-Governed
            </h2>
            <p className="mt-4 text-muted-foreground">
              This methodology leverages AI to process the scale of modern
              risk assessment — mapping tens of thousands of data points
              across controls, mitigations, techniques, and regulatory
              requirements. AI facilitates the analysis. A certified
              professional makes the judgment calls.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-semibold text-lg">What AI Does</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Processes 10,000+ control-to-mitigation data points that would take weeks manually",
                  "Maps controls to MITRE techniques and CRI diagnostic statements at scale",
                  "Identifies coverage gaps across the full control inventory consistently",
                  "Generates draft coverage verdicts, KPIs, and logging requirements for review",
                  "Maintains traceability chains from technique to finding to recommendation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">What the Professional Does</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Reviews and validates every AI-generated mapping and coverage verdict",
                  "Applies professional judgment to risk ratings, likelihood, and impact",
                  "Approves each stage gate before work advances — no auto-progression",
                  "Makes remediation prioritization decisions based on business context",
                  "Signs off on evidence packages and board-ready deliverables",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-primary/10 bg-primary/5 px-6 py-5">
            <p className="text-sm font-medium text-primary">
              AI handles the scale. The certified professional handles the
              judgment. Every stage gate requires human review and approval
              — AI-generated analysis is an input to professional decision-making,
              never a substitute for it.
            </p>
          </div>
        </section>

        <Separator />

        {/* Engagement Success Factors */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
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
          </div>
        </section>

        <Separator />

        {/* Operational Deliverables */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
