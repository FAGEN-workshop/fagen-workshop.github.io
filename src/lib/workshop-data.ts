export interface NavItem {
  label: string;
  href: string;
  anchor: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Person {
  name: string;
  affiliation: string;
  bio: string;
  focus?: string;
  statusLabel?: string;
  postProposal?: boolean;
  role?: string;
  profileUrl?: string;
  imageUrl?: string;
  imagePosition?: string;
  assets?: string[];
  note?: string;
}

export interface ScheduleItem {
  time: string;
  event: string;
  detail?: string;
  note?: string;
}

export interface Sponsor {
  name: string;
  url: string;
  logo?: string;
  /** Optional Tailwind max-height class to override the default `max-h-12`.
   *  Use this for square-aspect logos that look smaller than wide text logos. */
  maxHeightClass?: string;
}

export const site = {
  shortTitle: "FMAI",
  title: "Failure Modes in Agentic AI",
  tagline: "Reproducible Triggers, Trace Diagnostics, and Verified Fixes",
  conferenceLabel: "ICML 2026 Workshop",
  domain: "fmai-workshop.github.io",
  description:
    "ICML 2026 workshop on actionable failure modes in agentic AI: reproducible triggers, trace diagnostics, and verified fixes.",
  heroBlurb:
    "Foundation-model agents fail in ways that compound across tool calls, memory, and recovery. FMAI is a venue for research that defines these failures, reproduces them, diagnoses traces, and verifies fixes.",
  openReviewUrl:
    "https://openreview.net/group?id=ICML.cc/2026/Workshop/FMAI#tab-recent-activity",
  submissionDeadlineLabel: "May 8, 2026 (AOE)",
  submissionDeadlineIso: "2026-05-09T11:59:00Z",
  suggestedDeadlineLabel: "April 24, 2026 (AOE)",
  suggestedDeadlineIso: "2026-04-25T11:59:00Z",
  contactEmail: "fmaiworkshop@gmail.com",
  xUrl: "https://x.com/FmaiWorkshop",
  xHandle: "@FmaiWorkshop",
};

export const navigation: NavItem[] = [
  { label: "Call for Papers", href: "/#cfp", anchor: "cfp" },
  { label: "Dates", href: "/#dates", anchor: "dates" },
  { label: "Speakers", href: "/#speakers", anchor: "speakers" },
  { label: "Schedule", href: "/#schedule", anchor: "schedule" },
  { label: "Organizers", href: "/#organizers", anchor: "organizers" },
  { label: "Sponsors", href: "/#sponsors", anchor: "sponsors" },
  { label: "Contact", href: "/#contact", anchor: "contact" },
];

export const overviewParagraphs = [
  "Agent quality depends on long-horizon interaction. Small mistakes at each step compound through tool calls, memory writes, and recovery decisions, shifting the reliability and safety of the whole system.",
  "FMAI focuses on four research outputs: operational definitions, reproducible triggers, comparable diagnostics, and verified fixes.",
];

export const focusAreas: FocusArea[] = [
  {
    title: "Failure Taxonomies and Mechanisms",
    description:
      "Operational definitions, triggering preconditions, minimal reproductions, composable failure primitives, and falsifiable mechanistic hypotheses.",
  },
  {
    title: "Closed-loop Evaluation and Trace Diagnostics",
    description:
      "Long-horizon evaluation protocols, interpretable process metrics, counterfactual tests, and logging tools that expose failures beyond terminal success.",
  },
  {
    title: "Training and Systems Interventions",
    description:
      "Mitigations, recovery strategies, tool and memory interface improvements, reward and budget design, and repair mechanisms with verifiable trade-offs.",
  },
];

// TODO: Sponsor attribution for the Best Paper Award is pending — update copy
// once the sponsoring organization is confirmed.
export const cfpBullets = [
  "Please use an ICML template for your submission. Max 8 pages excluding references and appendix.",
  "This is a non-archival venue. Authors retain rights and can publish their work elsewhere. Dual submission is allowed.",
  "Accepted papers are eligible for a Best Paper Award.",
];

export const topicsOfInterest = [
  "Operational definitions with clear failure boundaries.",
  "Reproducible triggers or minimal reproductions.",
  "Comparable evaluation protocols or trace-level diagnostics.",
  "Mitigation, repair, or intervention strategies with explicit evidence about what improves and what does not.",
];

export const sponsors: Sponsor[] = [
  {
    name: "O2",
    url: "https://o2tech.ai/",
    logo: "/sponsors/o2.png",
    maxHeightClass: "max-h-20",
  },
  {
    name: "Abaka",
    url: "https://www.abaka.ai",
    logo: "/sponsors/abaka.svg",
    maxHeightClass: "h-11",
  },
  {
    name: "Eight Sleep",
    url: "https://www.eightsleep.com/",
    logo: "/sponsors/eightsleep.svg",
    maxHeightClass: "h-11",
  },
];

export const speakers: Person[] = [
  {
    name: "Yoshua Bengio",
    affiliation: "Universite de Montreal, LawZero, and Mila",
    bio: "Yoshua Bengio is a Full Professor of Computer Science at Université de Montréal, Founder of Mila (the Quebec AI Institute), and Co-President of LawZero. A recipient of the 2018 Turing Award alongside Geoffrey Hinton and Yann LeCun, his research spans deep learning foundations and, increasingly, AI safety and the governance of frontier systems.",
    focus: "AI safety, frontier model governance, and deep learning foundations",
    profileUrl: "https://yoshuabengio.org/en",
    imageUrl: "/people/yoshua-bengio.jpg",
    assets: ["GFlowNets", "International AI Safety Report"],
    postProposal: true,
  },
  {
    name: "James Zou",
    affiliation: "Stanford University and CZ Biohub",
    bio: "James Zou is an Associate Professor of Biomedical Data Science, Computer Science, and Electrical Engineering at Stanford. His work focuses on making AI more reliable, human-compatible, and statistically rigorous, with major applications in health and biomedicine.",
    focus: "Tool use failures and automated red-teaming",
    profileUrl: "https://med.stanford.edu/profiles/james-zou",
    imageUrl: "/people/james-zou.jpg",
    assets: ["AvaTaR", "AutoRedTeamer"],
  },
  {
    name: "Bo Li",
    affiliation: "University of Illinois Urbana-Champaign and Virtue AI",
    bio: "Bo Li is the Wexler AI Scholar and an Associate Professor at UIUC, where she works on trustworthy machine learning, AI safety, security, privacy, and robustness. She is also the founder and CEO of Virtue AI.",
    focus: "Agent attack surfaces and tool-chain exploits",
    profileUrl: "https://siebelschool.illinois.edu/about/people/faculty/lbo",
    imageUrl: "/people/bo-li.jpg",
    assets: ["ShieldAgent", "AutoRedTeamer"],
  },
  {
    name: "Iryna Gurevych",
    affiliation: "TU Darmstadt and MBZUAI",
    bio: "Iryna Gurevych is a Professor of Computer Science at TU Darmstadt and founder of the UKP Lab. Her research spans natural language processing, trustworthy AI, and machine learning methods for robust and interpretable language systems.",
    focus: "Long-horizon drift and error localization",
    profileUrl: "https://www.informatik.tu-darmstadt.de/ukp/ukp_home/head_ukp/index.en.jsp",
    imageUrl: "/people/iryna-gurevych.png",
    assets: ["OpenFactCheck", "Error localization for long-form QA"],
  },
  {
    name: "Greg Durrett",
    affiliation: "New York University",
    bio: "Greg Durrett is an Associate Professor at NYU whose research centers on natural language processing, factuality, verification, and reasoning with language models in knowledge-intensive settings.",
    focus: "Verification gaps and grounded checking",
    profileUrl: "https://gregdurrett.github.io/",
    imageUrl: "/people/greg-durrett.png",
    assets: ["MiniCheck", "Molecular Facts"],
  },
  {
    name: "Samy Bengio",
    affiliation: "Apple and EPFL",
    bio: "Samy Bengio is a longtime AI research leader whose work spans large-scale machine learning, reasoning, and evaluation. He has held senior research leadership roles at Apple, Google, and major ML conferences.",
    focus: "Reasoning brittleness and evaluation artifacts",
    profileUrl: "https://bengio.abracadoudou.com/",
    imageUrl: "/people/samy-bengio.jpg",
    assets: ["The Illusion of Thinking", "Reasoning's Razor"],
  },
  {
    name: "Nouha Dziri",
    affiliation: "Allen Institute for AI",
    bio: "Nouha Dziri is a researcher at AI2 working on large language models with a focus on reasoning limits, faithfulness, post-training, and safety-oriented evaluation.",
    focus: "Faithfulness failures and feedback grounding",
    profileUrl: "https://nouhadziri.github.io/",
    imageUrl: "/people/nouha-dziri.jpg",
    assets: ["FaithDial", "BEGIN"],
  },
  {
    name: "Maarten Sap",
    affiliation: "Carnegie Mellon University and AI2",
    bio: "Maarten Sap is an Assistant Professor at Carnegie Mellon University and a part-time researcher at AI2. His work studies social intelligence, human-centered language systems, safety risks, and how people interact with language agents.",
    focus: "Social failure modes and human-agent risk",
    profileUrl: "https://maartensap.com/aboutme.html",
    imageUrl: "/people/maarten-sap.webp",
    assets: ["SOTOPIA", "SOTOPIA-pi"],
  },
  {
    name: "Yi Dong",
    affiliation: "NVIDIA Research",
    bio: "Yi Dong is a principal research scientist at NVIDIA working on reasoning models and virtual agents. His research spans model reliability, prolonged reinforcement learning, and practical agent deployment for enterprise settings.",
    focus: "Tool and runtime reliability, plus system regressions",
    profileUrl: "https://research.nvidia.com/person/yi-dong",
    imageUrl: "/people/yi-dong.jpg",
    assets: ["ProRL", "ProRLv2"],
  },
  {
    name: "Yu Su",
    affiliation: "The Ohio State University and industry",
    bio: "Yu Su is an Associate Professor at The Ohio State University whose work studies grounded language understanding, web agents, interactive systems, and evaluation in realistic environments.",
    focus: "Web-agent failures and online evaluation gaps",
    profileUrl: "https://ysu1989.github.io/",
    imageUrl: "/people/yu-su.jpeg",
    assets: ["Online-Mind2Web", "SEEACT"],
  },
  {
    name: "Rishi Bommasani",
    affiliation: "Stanford HAI",
    bio: "Rishi Bommasani is a Senior Research Scholar at Stanford HAI whose work examines the societal, economic, and governance implications of frontier AI. He will speak on the economics and governance of frontier AI.",
    focus: "Frontier AI governance and deployment implications",
    profileUrl: "https://hai.stanford.edu/people/rishi-bommasani",
    imageUrl: "/people/rishi-bommasani.png",
    assets: ["Foundation Models", "HELM"],
    postProposal: true,
  },
];

export const organizers: Person[] = [
  {
    name: "Zihan Wang",
    affiliation: "Northwestern University",
    role: "Workshop Operations",
    bio: "Zihan Wang is a PhD student at Northwestern University working on reinforcement learning for reasoning agents in multi-turn stochastic environments. He leads overall workshop operations, including submissions, program assembly, and day-of execution.",
    profileUrl: "https://zihanwang314.github.io/",
    imageUrl: "/people/zihan-wang.png",
  },
  {
    name: "Canyu Chen",
    affiliation: "Northwestern University",
    role: "Reviews",
    bio: "Canyu Chen is a PhD student at Northwestern University whose research focuses on foundation-model agents, trustworthiness, and multimodality. He leads the contributed-paper workflow, reviewer coordination, and evaluation quality.",
    profileUrl: "https://canyuchen.github.io/",
    imageUrl: "/people/canyu-chen.jpg",
  },
  {
    name: "David Acuna",
    affiliation: "NVIDIA Research",
    role: "Reviews",
    bio: "David Acuna is a Senior Research Scientist at NVIDIA Research working on reasoning models, synthetic data, inference-time scaling, agents, and reinforcement learning. He supports reviews, speaker coordination, and external outreach.",
    profileUrl: "https://www.cs.toronto.edu/~davidj/",
    imageUrl: "/people/david-acuna.jpg",
  },
  {
    name: "Jaehun Jung",
    affiliation: "NVIDIA Research and University of Washington",
    role: "Website and Artifacts",
    bio: "Jaehun Jung studies how to train and evaluate models with other models under minimal human supervision. He leads evaluation-facing aspects of the workshop, including website artifacts and reproducibility expectations.",
    profileUrl: "https://jaehunjung.com/",
    imageUrl: "/people/jaehun-jung.png",
  },
  {
    name: "Andrew Zhou",
    affiliation: "O2 Lab",
    bio: "",
    profileUrl: "https://o2tech.ai/",
    imageUrl: "/people/andrew-zhou.png",
  },
  {
    name: "Niloofar Mireshghallah",
    affiliation: "humans& and Carnegie Mellon University",
    role: "Panel",
    bio: "Niloofar Mireshghallah works at the intersection of privacy, NLP, and the societal implications of machine learning. She leads discussion design, panel structure, and community-engagement planning for the workshop.",
    profileUrl: "https://mireshghallah.github.io/",
    imageUrl: "/people/niloofar-mireshghallah.png",
  },
  {
    name: "Yejin Choi",
    affiliation: "Stanford University",
    role: "Speaker and Awards",
    bio: "Yejin Choi is a Professor of Computer Science at Stanford and a Senior Fellow at HAI. Her research spans language, reasoning, model behavior, evaluation, and human-centered foundation models and agents.",
    profileUrl: "https://yejinc.github.io/",
    imageUrl: "/people/yejin-choi.png",
  },
  {
    name: "Dawn Song",
    affiliation: "University of California, Berkeley",
    role: "Speaker and Awards",
    bio: "Dawn Song is a Professor of Computer Science at UC Berkeley whose work focuses on security, privacy, adversarial robustness, and trustworthy machine learning in realistic deployment settings.",
    profileUrl: "https://dawnsong.io/",
    imageUrl: "/people/dawn-song.png",
  },
  {
    name: "Manling Li",
    affiliation: "Northwestern University and Amazon Scholar",
    role: "Speaker and Awards",
    bio: "Manling Li is an Assistant Professor at Northwestern University whose research focuses on grounded reasoning and multimodal knowledge for foundation-model agents. She leads coverage of world-facing agent failures and grounding-related themes.",
    profileUrl: "https://limanling.github.io/",
    imageUrl: "/people/manling-li.jpg",
  },
];

export const schedule: ScheduleItem[] = [
  {
    time: "08:00 - 08:10",
    event: "Opening remarks",
    detail: "Framing the workshop and the central failure-mode agenda",
  },
  {
    time: "08:10 - 08:50",
    event: "Keynote 1",
    detail: "TBD",
  },
  {
    time: "08:50 - 09:30",
    event: "Keynote 2",
    detail: "TBD",
  },
  {
    time: "09:30 - 10:10",
    event: "Contributed spotlights",
    detail: "Five to eight short talks from accepted contributions",
  },
  {
    time: "10:10 - 10:40",
    event: "Coffee break",
  },
  {
    time: "10:40 - 11:20",
    event: "Keynote 3",
    detail: "TBD",
  },
  {
    time: "11:20 - 12:00",
    event: "Keynote 4",
    detail: "TBD",
  },
  {
    time: "12:00 - 14:00",
    event: "Lunch and posters",
  },
  {
    time: "14:00 - 14:40",
    event: "Keynote 5",
    detail: "TBD",
  },
  {
    time: "14:40 - 15:20",
    event: "Keynote 6",
    detail: "TBD",
  },
  {
    time: "15:20 - 15:50",
    event: "Coffee break",
  },
  {
    time: "15:50 - 16:50",
    event: "Panel discussion",
    detail: "Panelists TBD",
  },
  {
    time: "16:50 - 17:00",
    event: "Closing remarks and awards",
  },
];
