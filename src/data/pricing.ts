export type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Recon",
    price: "$99",
    cadence: "/mo",
    blurb: "Continuous surface mapping for a single target.",
    features: [
      "1 target / continuous recon",
      "Full attack-surface graph",
      "Weekly autonomous scans",
      "Markdown reports",
    ],
  },
  {
    name: "Operator",
    price: "$999",
    cadence: "/mo",
    blurb: "The full swarm against your production estate.",
    features: [
      "Up to 25 targets",
      "8-agent parallel hunt",
      "Adversarial validation",
      "APT-grade attack chains",
      "Real-time WebSocket streaming",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$9,999",
    cadence: "/mo",
    blurb: "Unlimited scope, on your infrastructure.",
    features: [
      "Unlimited targets",
      "Self-hosted engine",
      "Custom hunter agents",
      "SSO, audit log, SLA",
      "Dedicated solutions team",
    ],
  },
];
