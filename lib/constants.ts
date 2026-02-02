export const SITE = {
  name: 'Meristem',
  company: 'Meristem Works',
  location: 'Ciudad de Mexico',
  tagline: 'Deterministic tools for human-controlled AI.',
  email: 'hola@meristem.mx',
  description:
    'AI tools with human oversight. Every action requires approval. Full traceability, zero autonomous execution.',
}

export const URLS = {
  lens: 'https://lens.meristem.mx',
  docs: '/docs',
  security: '#trust',
  contact: `mailto:${SITE.email}`,
  status: '/status',
  pricing: '/pricing',
}

export const HERO = {
  // Alternative: "Human-controlled software for high-trust environments."
  headline: 'AI tools that require human approval.',
  subheadline:
    'Deterministic AI tools for teams that need control, auditability, and zero surprises.',
  primaryCta: { label: 'Try Meristem Lens', href: URLS.lens },
  secondaryCta: { label: 'Read the security model', href: URLS.security },
}

export const WHAT_IS = {
  heading: 'What is Meristem',
  paragraph:
    'Meristem is not a single product. It is a company that builds deterministic, ledger-first software tools \u2014 each designed so that AI assists but never decides. Every Meristem product records every action in an append-only ledger, requires human approval before execution, and produces outputs that can be replayed and verified.',
  bullets: [
    {
      title: 'One company, multiple products.',
      text: 'Meristem Lens is the first. Others follow the same principles.',
    },
    {
      title: 'Ledger-native.',
      text: 'Every action, proposal, and decision is recorded. Nothing is deleted. Everything is auditable.',
    },
    {
      title: 'Human authority is architectural, not optional.',
      text: 'No Meristem product can take irreversible action without explicit human approval. This is enforced by design, not by policy.',
    },
    {
      title: 'Deterministic by default.',
      text: 'Given the same inputs and ledger state, every Meristem product produces the same output. Reproducibility is a requirement, not a feature.',
    },
  ],
}

export const WHY_EXISTS = {
  heading: 'The problem with AI you can\u2019t audit',
  paragraphs: [
    'Most AI-powered tools operate as black boxes. They make decisions you can\u2019t trace, take actions you can\u2019t reproduce, and change behavior in ways you can\u2019t explain. For teams in regulated industries, security-sensitive environments, or any organization that needs to answer \u201Cwhy did this happen?\u201D \u2014 that\u2019s not acceptable.',
    'Meristem exists because we believe AI tools should be:',
  ],
  bullets: [
    {
      title: 'Explainable.',
      text: 'If a tool can\u2019t show its reasoning in plain text, it shouldn\u2019t be making decisions.',
    },
    {
      title: 'Reproducible.',
      text: 'Run the same analysis twice, get the same result. No hidden state, no model drift, no surprises.',
    },
    {
      title: 'Controllable.',
      text: 'The human approves. The tool executes. Not the other way around.',
    },
    {
      title: 'Auditable.',
      text: 'Every action is recorded in an append-only ledger with timestamps, actors, and checksums. If an auditor asks what happened, the ledger answers.',
    },
  ],
  closing:
    'We don\u2019t build AI that replaces judgment. We build AI that supports it \u2014 visibly, traceably, and under your control.',
}

export const PRINCIPLES = {
  heading: 'How every Meristem product works',
  items: [
    {
      title: 'Determinism',
      description:
        'Same inputs, same outputs. Every time. No hidden state, no model drift, no probabilistic surprises.',
    },
    {
      title: 'Ledger-first',
      description:
        'Every action is recorded in an append-only ledger. Entries are timestamped, hash-chained, and never deleted. The ledger is the source of truth.',
    },
    {
      title: 'Human-in-the-loop',
      description:
        'AI proposes. Humans approve. No Meristem product takes irreversible action without explicit human authorization.',
    },
    {
      title: 'Read-only before action',
      description:
        'Meristem tools observe and analyze first. Anything that modifies state requires a separate, auditable approval step.',
    },
    {
      title: 'Reproducibility',
      description:
        'Every analysis can be replayed from the ledger. If an auditor, regulator, or team lead asks \u201Cwhat happened?\u201D \u2014 the answer is in the record.',
    },
  ],
}

export const PRODUCT_LENS = {
  heading: 'Meristem Lens',
  subheading: 'Code analysis with human oversight',
  description:
    'Meristem Lens scans your codebase for dependency vulnerabilities and exposed secrets. Every scan is initiated by you \u2014 manually or on your schedule. Every finding is recorded in an append-only audit ledger. Nothing runs autonomously.',
  capabilities: [
    'Dependency vulnerability scanning',
    'Secrets detection',
    'Scan dashboard with findings, runs, and trends',
    'Append-only audit ledger with full traceability',
    'Integration with Azure DevOps and GitHub',
  ],
  doesNot: [
    {
      title: 'Does not execute code in your environment.',
      text: 'Lens uses a device-based scanning protocol. Your code is analyzed locally. No cloud execution.',
    },
    {
      title: 'Does not make decisions.',
      text: 'Findings are presented. Humans prioritize and act.',
    },
    {
      title: 'Does not run autonomously.',
      text: 'Every scan requires initiation. No background processes, no silent monitoring.',
    },
    {
      title: 'Does not store your source code.',
      text: 'Scans produce findings and metadata. Your code stays where it is.',
    },
    {
      title: 'Does not self-trigger actions based on model output.',
      text: 'No thresholds, no background agents, no autonomous escalation.',
    },
  ],
  safe: 'Lens was built for teams that have rejected other tools because they couldn\u2019t explain what happens to their code. Every Lens operation is logged, reproducible, and auditable. There is no autonomous behavior. There is no black box.',
  cta: { label: 'Go to Meristem Lens', href: URLS.lens },
}

export const TRUST = {
  heading: 'Built for teams that answer to auditors',
  intro:
    'Meristem products are designed for environments where \u201Ctrust me\u201D is not an acceptable answer.',
  sections: [
    {
      title: 'Auditability',
      text: 'Every action produces a ledger entry with: timestamp, actor, action type, inputs, outputs, and a SHA-256 checksum. The ledger is append-only. Entries cannot be modified or deleted. Any historical state can be reconstructed by replaying the ledger from the beginning.',
    },
    {
      title: 'Security posture',
      bullets: [
        'Device-based scanning: your code never leaves your infrastructure',
        'Encrypted credential storage',
        'Role-based access control',
        'No autonomous network access',
        'No telemetry that isn\u2019t explicitly documented',
      ],
    },
    {
      title: 'Compliance readiness',
      text: 'Meristem\u2019s ledger-first architecture produces audit trails that align with requirements from SOC 2, ISO 27001, and similar frameworks. We do not claim certification \u2014 we claim that our architecture makes certification easier because traceability is built in, not bolted on.',
    },
    {
      title: 'No vendor lock-in',
      text: 'Ledger data is stored in NDJSON \u2014 a plain-text, human-readable format. You can read, export, and process your audit trail with any tool. If you stop using Meristem, your data is yours, in a format you can open with a text editor.',
    },
  ],
}

export const FOOTER = {
  columns: [
    {
      title: 'Product',
      links: [
        { label: 'Meristem Lens', href: URLS.lens },
        { label: 'Pricing', href: URLS.pricing },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#what' },
        { label: 'Security', href: URLS.security },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: URLS.docs },
        { label: 'Contact', href: URLS.contact },
        { label: 'Status', href: URLS.status },
      ],
    },
  ],
  clarification: 'Meristem is the company. Meristem Lens is a product.',
}
