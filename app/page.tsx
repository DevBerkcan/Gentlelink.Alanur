"use client";

import { useState } from "react";
import { ProfileCard } from "@/components/ProfileCard";
import { LinkButton } from "@/components/LinkButton";
import { Footer } from "@/components/Footer";
import { ShareButton } from "@/components/ShareButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactModal } from "@/components/ContactModal";
import { useAnalytics } from "@/hooks/useAnalytics";
import { socialLinks } from "@/lib/config";

export default function Home() {
  useAnalytics();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="profile-page relative min-h-screen transition-colors duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Floating Share Button */}
      <ShareButton variant="floating" />

      {/* Main content */}
      <main className="relative flex min-h-screen items-center justify-center px-3 sm:px-4 py-16 sm:py-20">
        {/* Main card container */}
        <div className="w-full max-w-md">
          {/* Card with shadow */}
          <div className="profile-panel relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 transition-colors duration-300">
            {/* Profile section */}
            <ProfileCard onContactClick={() => setIsContactOpen(true)} />

            {/* Links section */}
            <div className="mt-6 space-y-3">
              {socialLinks.map((link, index) => (
                <LinkButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                  position={index}
                  variant={link.variant}
                />
              ))}
            </div>

            {/* Footer */}
            <Footer />
          </div>

          {/* Decorative glow effects */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-rose-300/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-pink-300/10 blur-3xl" />
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
