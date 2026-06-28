"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const timeline = [
  {
    period: "2010 — 2016",
    role: "IT Management",
    detail:
      "Built and managed enterprise IT infrastructure — servers, databases, networks, and end-user systems. Hands-on with the full technology stack before moving to the audit side.",
  },
  {
    period: "2016 — 2022",
    role: "IT Audit",
    detail:
      "Transitioned to IT audit under ISACA COBIT methodology. Designed and executed audits for enterprise systems, access controls, change management, and data integrity.",
  },
  {
    period: "2022 — Present",
    role: "IT Risk & AI Governance",
    detail:
      "Specialized in threat-informed risk assessment, AI governance, and CRI Profile implementation for financial services. Building a governed AI workforce for audit automation.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                About
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Tristan{" "}
                <span className="text-muted-foreground">Jones</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Senior IT Auditor specializing in AI risk assessment,
                threat-informed controls, and governance frameworks for
                financial services. 15+ years spanning infrastructure,
                audit, and risk advisory.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Career Arc
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From building systems to auditing them to governing AI that
            augments the work.
          </p>

          <div className="mt-12 space-y-8">
            {timeline.map((item) => (
              <div key={item.period} className="flex gap-6">
                <div className="w-36 shrink-0">
                  <span className="text-sm font-medium text-primary">
                    {item.period}
                  </span>
                </div>
                <div className="border-l pl-6">
                  <h3 className="font-semibold">{item.role}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What Sets This Apart
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Technical Depth",
                  description:
                    "I built servers and databases before I audited them. When I assess a control, I understand the system underneath it — not just the policy document.",
                },
                {
                  step: "02",
                  title: "Threat-Informed",
                  description:
                    "Every assessment starts with the threat landscape, not the compliance checklist. Controls exist to mitigate specific adversary behaviors — MITRE ATT&CK is the map.",
                },
                {
                  step: "03",
                  title: "AI-Augmented",
                  description:
                    "A governed AI workforce handles repetitive analysis while I focus on judgment. Same rigor I apply to client controls, I apply to my own AI agents.",
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

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Certifications
            </h2>
            <p className="mt-4 text-muted-foreground">
              Active and in-progress credentials.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "CISA", full: "Certified Information Systems Auditor", org: "ISACA", active: true },
              { name: "AAIA", full: "Advanced in AI Audit", org: "ISACA", active: true },
              { name: "AWS AIF", full: "AWS Certified AI Practitioner", org: "AWS", active: true },
              { name: "CRISC", full: "Certified in Risk & IS Control", org: "ISACA", active: false },
              { name: "AAIR", full: "Advanced in AI Risk", org: "ISACA", active: false },
            ].map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border p-4 transition-colors hover:border-foreground/20"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{cert.name}</p>
                  <Badge variant={cert.active ? "default" : "outline"} className="text-xs">
                    {cert.active ? "Active" : "In Progress"}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.full}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.org}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
