"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const certifications = [
  { name: "CISA", full: "Certified Information Systems Auditor", issuer: "ISACA #252955101", detail: "IT audit, controls, and assurance for enterprise systems" },
  { name: "AAIA", full: "Advanced in AI Audit", issuer: "ISACA #420788", detail: "AI system auditing — risk, bias, governance, and compliance" },
  { name: "AWS AIF", full: "AWS Certified AI Practitioner", issuer: "AWS #521927105", detail: "AI/ML concepts, responsible AI, and AWS AI services" },
  { name: "CRISC", full: "Certified in Risk & IS Control", issuer: "ISACA", upcoming: true, detail: "IT risk identification, assessment, response, and monitoring" },
  { name: "AAIR", full: "Advanced in AI Risk", issuer: "ISACA", upcoming: true, detail: "AI risk governance, lifecycle risk management, and AI risk programs" },
];

const portfolioItems = [
  {
    title: "Threat-Informed Risk Assessment",
    description:
      "Methodology for mapping MITRE ATT&CK techniques to control environments in financial services, with evidence-based coverage validation.",
    tags: ["MITRE ATT&CK", "Risk Assessment", "Financial Services"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "CRI Coverage Framework",
    description:
      "Operationalizing the Cyber Risk Institute Profile for community banks — gap analysis methodology with quantified coverage ratings.",
    tags: ["CRI Profile", "Gap Analysis", "Banking"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "AI Governance Case Studies",
    description:
      "Evidence portfolio spanning three governance layers — operational, strategic, and regulatory — with real-world AI audit scenarios.",
    tags: ["AI Governance", "Case Studies", "Audit"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Integrated Risk Deliverables",
    description:
      "Analysis outputs delivered into SharePoint and MS Lists via Power Automate — not Excel attachments. Findings, controls, and risk tracking live where the organization works.",
    tags: ["SharePoint", "Power Automate", "MS Lists"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "MITRE Validation Methodology",
    description:
      "Two-layer validation framework — reasoning validation grounded in source material, and controls validation mapped to MITRE mitigations.",
    tags: ["MITRE", "Validation", "Controls"],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
            <div className="max-w-3xl">
              <TooltipProvider>
                <div className="flex flex-wrap gap-2 mb-6">
                  {certifications.map((cert) => (
                    <Tooltip key={cert.name}>
                      <TooltipTrigger>
                        <Badge
                          variant={cert.upcoming ? "outline" : "default"}
                          className="text-xs cursor-default"
                        >
                          {cert.name}
                          {cert.upcoming && (
                            <span className="ml-1 opacity-60">2026</span>
                          )}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-center">
                          <p className="font-medium">{cert.full}</p>
                          <p className="mt-0.5 opacity-80">{cert.detail}</p>
                          <p className="mt-0.5 opacity-60">{cert.issuer}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                AI Governance &{" "}
                <span className="text-muted-foreground">
                  IT Risk Advisory
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
                15+ years spanning the full IT lifecycle — from building servers
                and databases in the datacenter, to designing controls, auditing
                enterprise systems, and managing risk for financial services.
                I bring hands-on technical depth to threat-informed risk
                assessment, AI governance, and control design that integrates
                directly into business processes.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">View Portfolio</Button>
                <Button size="lg" variant="outline">
                  Read Methodology
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* What I Do */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What I Do
            </h2>
            <p className="mt-4 text-muted-foreground">
              I help financial institutions understand and manage the risks that
              emerge when AI meets regulatory compliance. My approach is
              threat-informed, evidence-based, and grounded in frameworks that
              regulators recognize.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {portfolioItems.map((item) => (
              <Card
                key={item.title}
                className="group transition-colors hover:border-foreground/20"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Approach */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Approach
              </h2>
              <p className="mt-4 text-muted-foreground">
                Every assessment starts with understanding the threat landscape,
                not the compliance checklist. Controls exist to mitigate specific
                risks — if you can&apos;t trace a control back to a threat, you
                can&apos;t validate its effectiveness.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Threat Mapping",
                  description:
                    "Identify relevant MITRE ATT&CK techniques for your industry and environment. Focus on what adversaries actually do, not theoretical risks.",
                },
                {
                  step: "02",
                  title: "Controls Validation",
                  description:
                    "Map existing controls to threat mitigations. Quantify coverage using evidence-based ratings — not opinions, not checkboxes.",
                },
                {
                  step: "03",
                  title: "Gap Remediation",
                  description:
                    "Prioritize gaps by exploitability and business impact. Deliver actionable recommendations with implementation guidance.",
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

        {/* Frameworks */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Frameworks & Standards
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Grounded in the frameworks that matter to regulators, auditors, and
            boards.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "NIST AI RMF", category: "AI Risk" },
              { name: "ISO 42001", category: "AI Management" },
              { name: "MITRE ATT&CK", category: "Threat Intelligence" },
              { name: "CRI Profile", category: "Financial Services" },
              { name: "EU AI Act", category: "Regulation" },
              { name: "OWASP LLM Top 10", category: "AI Security" },
              { name: "CIS Benchmarks", category: "Hardening Standards" },
              { name: "COBIT 2019", category: "IT Governance" },
            ].map((fw) => (
              <div
                key={fw.name}
                className="rounded-lg border p-4 transition-colors hover:border-foreground/20"
              >
                <p className="font-medium">{fw.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {fw.category}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* Mentors */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Mentors
            </h2>
            <p className="mt-4 text-muted-foreground">
              I owe my level of expertise to these three professionals. Each
              shaped a different dimension of how I approach risk, audit, and
              governance work.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Neil Lindholm",
                linkedin: "https://www.linkedin.com/in/neil-lindholm-1277758/",
                contribution:
                  "Recruited me from IT management and trained me in ISACA COBIT-based audit methodology — the foundation of everything I do.",
              },
              {
                name: "Satya Vithala",
                linkedin: "https://www.linkedin.com/in/satyavithala/",
                contribution:
                  "Trained me in MITRE ATT&CK, CRI Profile, and threat-informed risk assessment to meet regulatory requirements.",
              },
              {
                name: "Vince Werling",
                linkedin: "https://www.linkedin.com/in/vwerling/",
                contribution:
                  "Shaped my ability to turn technical analysis into corporate audit deliverables with enterprise impact at S&P Global.",
              },
            ].map((mentor) => (
              <a
                key={mentor.name}
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-lg border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-foreground">
                      {mentor.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      View on LinkedIn
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {mentor.contribution}
                </p>
              </a>
            ))}
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-muted-foreground">
              Available for consulting engagements in AI governance, IT risk
              assessment, and threat-informed audit for financial services.
            </p>
            <Button size="lg" className="mt-8">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
