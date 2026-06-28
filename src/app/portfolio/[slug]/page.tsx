import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { portfolioEntries } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioEntries.map((e) => ({ slug: e.slug }));
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = portfolioEntries.find((e) => e.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <Link href="/portfolio">
              <Button variant="ghost" size="sm" className="mb-8">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Portfolio
              </Button>
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{entry.category}</Badge>
              {entry.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {entry.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {entry.description}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Updated {entry.date}
            </p>
          </div>
        </section>

        <Separator />

        <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {entry.sections.length === 0 ? (
            <div className="rounded-lg border border-dashed p-12 text-center">
              <p className="text-muted-foreground">
                Content is being prepared. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {entry.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
