import {
  Instagram,
  Mail,
  Link,
  Building2,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export interface LinkConfig {
  label: string;
  href: string;
  icon: LucideIcon;
  variant: "primary" | "secondary";
}

export const profileConfig = {
  name: "Alanur Millihuzin",
  title: "Soziologie Studentin & Marketing Enthusiastin",
  description:
    "Fokus auf Gesellschaft, Kommunikation und digitale Markenauftritte.",
  image: "/alanur_bild.jpg",
};

export const socialLinks: LinkConfig[] = [
  {
    label: "GentleGroup",
    href: "https://www.gentlegroup.de",
    icon: Building2,
    variant: "primary",
  },
  {
    label: "Meine Links",
    href: "/Test", // Hier später den Amazon-Link eintragen.
    icon: Link,
    variant: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alanur-millihuzin-1aa8bb394/",
    icon: Linkedin,
    variant: "primary",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/alanur.alh/",
    icon: Instagram,
    variant: "secondary",
  },
  {
    label: "E-Mail",
    href: "mailto:alanur@gentlegroup.de",
    icon: Mail,
    variant: "secondary",
  },
];

export const siteConfig = {
  name: "Alanur Millihuzin - Soziologie & Marketing",
  description: "Soziologie Studentin mit Fokus auf Marketing und Kommunikation",
  url: "https://berkcandaily.vercel.app",
};
