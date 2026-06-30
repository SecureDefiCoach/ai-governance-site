"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  domains,
  totalSkills,
  totalDomains,
  categories,
  type CapabilityDomain,
} from "@/data/capabilities";

const categoryColors: Record<CapabilityDomain["category"], string> = {
  Defensive: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Offensive: "bg-red-500/10 text-red-400 border-red-500/20",
  Intelligence: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Engineering: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Governance: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Capabilities() {
  const [activeFilter, setActiveFilter] = useState<
    CapabilityDomain["category"] | "All"
  >("All");
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? domains
      : domains.filter((d) => d.category === activeFilter);

  const filteredCount = filtered.reduce((sum, d) => sum + d.skillCount, 0);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 text-xs">
                AI-Augmented Cybersecurity
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Capabilities
              </h1>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                {totalSkills} executable cybersecurity skills across{" "}
                {totalDomains} domains — from threat hunting and red teaming to
                AI governance and compliance frameworks. Each skill is mapped to
                MITRE ATT&CK, NIST CSF, and D3FEND.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: totalSkills.toString(), label: "Total Skills" },
                { value: totalDomains.toString(), label: "Domains" },
                { value: "12+", label: "Frameworks Mapped" },
                {
                  value: categories.length.toString(),
                  label: "Capability Areas",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* Filter Bar */}
        <section className="sticky top-16 z-40 border-b bg-background/80 backdrop-blur-lg">
          <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
            <Button
              size="sm"
              variant={activeFilter === "All" ? "default" : "outline"}
              onClick={() => setActiveFilter("All")}
            >
              All ({totalSkills})
            </Button>
            {categories.map((cat) => {
              const count = domains
                .filter((d) => d.category === cat.name)
                .reduce((sum, d) => sum + d.skillCount, 0);
              return (
                <Button
                  key={cat.name}
                  size="sm"
                  variant={activeFilter === cat.name ? "default" : "outline"}
                  onClick={() => setActiveFilter(cat.name)}
                >
                  {cat.name} ({count})
                </Button>
              );
            })}
          </div>
        </section>

        {/* Domain Grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filtered.length} domains &middot; {filteredCount} skills
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((domain) => {
              const isExpanded = expandedDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  onClick={() =>
                    setExpandedDomain(isExpanded ? null : domain.id)
                  }
                  className="group flex flex-col rounded-lg border p-5 text-left transition-all hover:border-foreground/20 hover:bg-muted/40"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-medium leading-snug group-hover:text-foreground">
                        {domain.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                        {domain.description}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md bg-muted px-2.5 py-1 text-sm font-semibold tabular-nums">
                      {domain.skillCount}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${categoryColors[domain.category]}`}
                    >
                      {domain.category}
                    </span>
                    {domain.frameworks.slice(0, 2).map((fw) => (
                      <span
                        key={fw}
                        className="inline-flex items-center rounded-full border border-border/60 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>

                  {/* Expanded: Sample Skills */}
                  {isExpanded && (
                    <div className="mt-4 border-t pt-3">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Sample Skills
                      </p>
                      <ul className="space-y-1.5">
                        {domain.sampleSkills.map((skill) => (
                          <li
                            key={skill}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* Framework Coverage */}
        <section className="bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Framework Coverage
            </h2>
            <p className="mt-2 text-muted-foreground">
              Every skill is mapped to industry-standard frameworks for
              traceability and audit evidence.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "MITRE ATT&CK",
                  detail: "Technique-level mapping across tactics",
                },
                {
                  name: "NIST CSF 2.0",
                  detail: "Function and category alignment",
                },
                {
                  name: "MITRE D3FEND",
                  detail: "Defensive technique countermeasures",
                },
                {
                  name: "OWASP Top 10",
                  detail: "Web and API vulnerability coverage",
                },
                {
                  name: "CIS Controls",
                  detail: "Implementation group mapping",
                },
                {
                  name: "NIST 800-53",
                  detail: "Security control family alignment",
                },
                {
                  name: "CRI Profile",
                  detail: "Financial services control coverage",
                },
                {
                  name: "ISO 42001",
                  detail: "AI management system requirements",
                },
              ].map((fw) => (
                <div
                  key={fw.name}
                  className="rounded-lg border p-4 transition-colors hover:bg-muted/40"
                >
                  <p className="font-medium">{fw.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {fw.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              From Skills to Outcomes
            </h2>
            <p className="mt-4 text-muted-foreground">
              These capabilities power threat-informed risk assessments, AI
              governance programs, and compliance audits for financial services.
              See them in action.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/portfolio">
                <Button size="lg">View Portfolio</Button>
              </a>
              <a href="/methodology">
                <Button size="lg" variant="outline">
                  Our Methodology
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
