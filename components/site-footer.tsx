export const dynamic = "auto";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export async function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © 2026 Patel Varnikumar. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>

            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}