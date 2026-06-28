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
import Link from "next/link";
import { portfolioEntries } from "@/data/portfolio";

const certifications = [
  { name: "CISA", full: "Certified Information Systems Auditor", issuer: "ISACA #252955101", detail: "IT audit, controls, and assurance for enterprise systems" },
  { name: "AAIA", full: "Advanced in AI Audit", issuer: "ISACA #420788", detail: "AI system auditing — risk, bias, governance, and compliance" },
  { name: "AWS AIF", full: "AWS Certified AI Practitioner", issuer: "AWS #521927105", detail: "AI/ML concepts, responsible AI, and AWS AI services" },
  { name: "CRISC", full: "Certified in Risk & IS Control", issuer: "ISACA", upcoming: true, detail: "IT risk identification, assessment, response, and monitoring" },
  { name: "AAIR", full: "Advanced in AI Risk", issuer: "ISACA", upcoming: true, detail: "AI risk governance, lifecycle risk management, and AI risk programs" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Risk Assessment": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  ),
  "Controls & Compliance": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  "AI Governance": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
    </svg>
  ),
  "Tooling & Automation": (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
};

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
                <Link href="/portfolio">
                  <Button size="lg">View Portfolio</Button>
                </Link>
                <Link href="/lab">
                  <Button size="lg" variant="outline">
                    Explore the Lab
                  </Button>
                </Link>
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
            {portfolioEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/portfolio/${entry.slug}`}
              >
                <Card className="group h-full transition-colors hover:border-foreground/20">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {categoryIcons[entry.category]}
                    </div>
                    <CardTitle className="text-lg">{entry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
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
              </Link>
            ))}
          </div>
        </section>

        <Separator />

        {/* Methodology Teaser */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Threat-Informed Methodology
                </h2>
                <p className="mt-4 text-muted-foreground">
                  An 11-stage process grounded in NIST CSF 2.0 — from
                  threat profiling through coverage analysis to evidence
                  packaging. Likelihood is driven by adversary behavior,
                  not opinion. Impact is driven by control gaps, not
                  guesswork. Every finding is traceable.
                </p>
              </div>
              <Link href="/methodology">
                <Button size="lg" variant="outline">
                  View Full Process
                </Button>
              </Link>
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
              { name: "NIST CSF 2.0", category: "Cybersecurity Framework", href: "https://www.nist.gov/cyberframework" },
              { name: "NIST AI RMF", category: "AI Risk", href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf" },
              { name: "MITRE ATT&CK", category: "Threat Intelligence", href: "https://attack.mitre.org/" },
              { name: "CRI Profile", category: "Financial Services", href: "https://cyberriskinstitute.org/the-profile/" },
              { name: "SCF", category: "Secure Controls", href: "https://www.securecontrolsframework.com/" },
              { name: "ISO 42001", category: "AI Management", href: "https://www.iso.org/standard/81230.html" },
              { name: "EU AI Act", category: "Regulation", href: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32024R1689" },
              { name: "OWASP LLM Top 10", category: "AI Security", href: "https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/" },
              { name: "CIS Benchmarks", category: "Hardening Standards", href: "https://www.cisecurity.org/cis-benchmarks" },
              { name: "COBIT 2019", category: "IT Governance", href: "https://www.isaca.org/resources/cobit" },
              { name: "NIST SP 800-53", category: "Security Controls", href: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
              { name: "FAIR", category: "Risk Quantification", href: "https://www.fairinstitute.org/what-is-fair" },
            ].map((fw) => (
              <a
                key={fw.name}
                href={fw.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
              >
                <p className="font-medium group-hover:text-foreground">
                  {fw.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {fw.category}
                </p>
              </a>
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
