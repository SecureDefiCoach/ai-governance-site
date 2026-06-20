import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Credentials
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>CISA — Certified Information Systems Auditor</li>
              <li>AAIA — Advanced in AI Audit</li>
              <li>AWS AIF — AWS AI Practitioner</li>
              <li>CRISC — Certified in Risk & IS Control</li>
              <li>AAIR — Advanced in AI Risk</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Specializations
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>AI Risk Assessment</li>
              <li>Threat-Informed Controls</li>
              <li>CRI Profile Implementation</li>
              <li>MITRE ATT&CK for Financial Services</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="https://www.linkedin.com/in/itauditorjones" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/itauditorjones" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  GitHub
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tristan Jones. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
