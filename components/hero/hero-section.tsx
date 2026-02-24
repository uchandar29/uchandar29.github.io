"use client";

import Image from "next/image";
import { Download, Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedName } from "@/components/hero/animated-name";
import { StatusBadge } from "@/components/hero/status-badge";
import { personalInfo } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center pt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-20">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-5">
          {/* Photo - shown first on mobile, second on desktop */}
          <div className="flex justify-center lg:order-2 lg:col-span-2 lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-background shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio - shown second on mobile, first on desktop */}
          <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:col-span-3 lg:items-start lg:text-left">
            <StatusBadge
              graduationDate={personalInfo.graduationDate}
              openToRelocation={personalInfo.openToRelocation}
            />

            <AnimatedName name={personalInfo.name} />

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl text-justify">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <Button asChild size="lg" className="rounded-full gap-2">
                <a href={personalInfo.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full"
                asChild
              >
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full"
                asChild
              >
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full"
                asChild
              >
                <a
                  href={personalInfo.links.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                >
                  <BookOpen className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
