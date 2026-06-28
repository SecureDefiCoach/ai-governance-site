"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioEntries } from "@/data/portfolio";

const categories = [
  "All",
  "Risk Assessment",
  "AI Governance",
  "Controls & Compliance",
  "Tooling & Automation",
] as const;

function statusVariant(status: string) {
  switch (status) {
    case "Published":
      return "default" as const;
    case "In Progress":
      return "secondary" as const;
    default:
      return "outline" as const;
  }
}

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-6">
                Portfolio
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Work{" "}
                <span className="text-muted-foreground">Samples</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Sanitized case studies and methodology artifacts from
                real engagements — threat-informed risk assessment, CRI
                gap analysis, AI governance, and audit automation.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={cat === "All" ? "default" : "outline"}
                className="cursor-default text-xs"
              >
                {cat}
              </Badge>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {portfolioEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/portfolio/${entry.slug}`}
              >
                <Card className="group h-full transition-colors hover:border-foreground/20">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="text-xs"
                      >
                        {entry.category}
                      </Badge>
                      <Badge
                        variant={statusVariant(entry.status)}
                        className="text-xs"
                      >
                        {entry.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      {entry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {entry.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
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
      </main>

      <Footer />
    </div>
  );
}
