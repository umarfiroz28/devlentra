import type { LucideIcon } from "lucide-react";
import { Code2, Compass, Gauge, Palette, Rocket, SearchCheck } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description: "We understand your business, users, goals, and required features.",
    icon: SearchCheck,
  },
  {
    title: "Plan",
    description:
      "We define the right technology stack, pages, user flows, and delivery roadmap.",
    icon: Compass,
  },
  {
    title: "Design",
    description: "We create modern UI layouts focused on trust, clarity, and conversion.",
    icon: Palette,
  },
  {
    title: "Develop",
    description:
      "We build responsive, scalable, and production-ready websites or applications.",
    icon: Code2,
  },
  {
    title: "Optimize",
    description: "We improve performance, SEO, mobile experience, and usability.",
    icon: Gauge,
  },
  {
    title: "Launch & Support",
    description: "We deploy, test, hand over, and support future improvements.",
    icon: Rocket,
  },
];
