export interface NavItem {
  label: string;
  href: string;
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
  assets?: string[];
  note?: string;
}

export interface ScheduleItem {
  time: string;
  event: string;
  detail?: string;
  note?: string;
}

export interface SubmissionDetail {
  label: string;
  detail: string;
}

export const site = {
  shortTitle: "FMAI",
  fullTitle:
    "Failure Modes in Agentic AI (FMAI): Reproducible Triggers, Trace Diagnostics, and Verified Fixes",
  conferenceLabel: "ICML 2026 Workshop",
  domain: "fmai-workshop.github.io",
  description:
    "FMAI is an ICML 2026 workshop on actionable failure modes in agentic AI, centered on reproducible triggers, trace diagnostics, and verified fixes.",
  openReviewUrl:
    "https://openreview.net/group?id=ICML.cc/2026/Workshop/FMAI#tab-recent-activity",
  submissionDeadlineUtc: "May 4, 2026, 11:59 PM UTC",
  submissionDeadlineLocal: "May 4, 2026, 6:59 PM CDT",
  submissionAccountNote: "Requires an OpenReview account.",
  heroBlurb:
    "Foundation-model agents are now deployed in browsing, scientific analysis, and long-horizon decision-making. FMAI creates a focused venue for turning agent failures into concrete research assets: clear definitions, reproducible triggers, comparable diagnostics, and verified repair strategies.",
  status:
    "OpenReview submissions are now open for FMAI. See the deadline below and submit through the official venue page.",
  formatNote:
    "The accepted proposal plans a fully in-person workshop with keynote talks, contributed spotlights, posters, and a panel discussion. Livestreaming and fallback remote support may be arranged for exceptional cases.",
  venueNote:
    "Workshop date, room, and camera-ready timeline are still to be published through the official ICML 2026 workshop schedule.",
  contactEmail: "fmaiworkshop@gmail.com",
};

export const pcOverview =
  "The program committee is being assembled with coverage across agents, safety, evaluation, and multimodality.";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Submit Paper", href: "/submit" },
  { label: "Speakers", href: "/speakers" },
  { label: "Schedule", href: "/schedule" },
  { label: "Organizers", href: "/organizers" },
  { label: "Contact", href: "/contact" },
];

export const overviewParagraphs = [
  "Agent quality is governed by long-horizon interaction. Small stepwise mistakes can compound through tool calls, memory writes, and recovery decisions, shifting the reliability and safety boundaries of the whole system.",
  "FMAI focuses on actionable failure modes in closed-loop agent systems. We treat failures as first-class research objects and push toward four concrete deliverables: operational definitions, reproducible triggers, comparable diagnostics, and verifiable fixes.",
  "We especially welcome work that turns vague failure anecdotes into reusable scientific artifacts that other researchers can reproduce, measure, stress-test, and improve upon.",
];

export const focusAreas: FocusArea[] = [
  {
    title: "Failure Taxonomies and Mechanisms",
    description:
      "Operational definitions, triggering preconditions, minimal reproductions, composable failure primitives, and falsifiable mechanistic hypotheses for agent failures.",
  },
  {
    title: "Closed-loop Evaluation and Trace Diagnostics",
    description:
      "Long-horizon or open-world evaluation protocols, interpretable process metrics, counterfactual tests, and logging tools that expose failures beyond terminal success.",
  },
  {
    title: "Training and Systems Interventions",
    description:
      "Mitigations, recovery strategies, tool and memory interface improvements, reward and budget design, and repair mechanisms with clearly verifiable trade-offs.",
  },
];

export const contributionNotes = [
  "OpenReview submissions are now open for FMAI.",
  "Submission deadline: May 4, 2026, 11:59 PM UTC (May 4, 2026, 6:59 PM CDT).",
  "Submit through the official OpenReview venue page. An OpenReview account is required.",
  "High-quality negative results are encouraged when they include controlled failure cases, clear attribution, and transferable lessons for the field.",
];

export const submissionDetails: SubmissionDetail[] = [
  {
    label: "Title",
    detail: "Provide a paper title of up to 250 characters.",
  },
  {
    label: "Authors",
    detail:
      "Add author OpenReview profiles when available, or author email addresses if a profile is not found.",
  },
  {
    label: "Keywords",
    detail: "Prepare a comma-separated list of keywords for your submission.",
  },
  {
    label: "TL;DR",
    detail: "An optional one-sentence summary can be included, up to 250 characters.",
  },
  {
    label: "Abstract",
    detail: "Prepare an abstract of up to 5000 characters.",
  },
  {
    label: "PDF",
    detail: "Upload a PDF only, with a maximum file size of 50MB.",
  },
  {
    label: "License",
    detail:
      "OpenReview requires a license selection when you complete the submission form.",
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

export const proposalSpeakers = speakers.filter((speaker) => !speaker.postProposal);

export const additionalConfirmedSpeakers = speakers.filter(
  (speaker) => speaker.postProposal,
);

export const organizers: Person[] = [
  {
    name: "Zihan Wang",
    affiliation: "Northwestern University",
    role: "Workshop Operations Owner",
    bio: "Zihan Wang is a PhD student at Northwestern University working on reinforcement learning for reasoning agents in multi-turn stochastic environments. He leads overall workshop operations, including submissions, program assembly, and day-of execution.",
    imageUrl: "/people/zihan-wang.png",
  },
  {
    name: "Canyu Chen",
    affiliation: "Northwestern University",
    role: "Review Owner",
    bio: "Canyu Chen is a PhD student at Northwestern University whose research focuses on foundation-model agents, trustworthiness, and multimodality. He leads the contributed-paper workflow, reviewer coordination, and evaluation quality.",
    profileUrl: "https://canyuchen.github.io/",
    imageUrl: "/people/canyu-chen.jpg",
  },
  {
    name: "David Acuna",
    affiliation: "NVIDIA Research",
    role: "Review Owner",
    bio: "David Acuna is a Senior Research Scientist at NVIDIA Research working on reasoning models, synthetic data, inference-time scaling, agents, and reinforcement learning. He supports reviews, speaker coordination, and external outreach.",
    profileUrl: "https://www.cs.toronto.edu/~davidj/",
    imageUrl: "/people/david-acuna.jpg",
  },
  {
    name: "Jaehun Jung",
    affiliation: "NVIDIA Research and University of Washington",
    role: "Website and Artifact Owner",
    bio: "Jaehun Jung studies how to train and evaluate models with other models under minimal human supervision. He leads evaluation-facing aspects of the workshop, including website artifacts and reproducibility expectations.",
    profileUrl: "https://jaehunjung.com/",
    imageUrl: "/people/jaehun-jung.png",
  },
  {
    name: "Niloofar Mireshghallah",
    affiliation: "humans& and Carnegie Mellon University",
    role: "Panel Coordinator and Designer",
    bio: "Niloofar Mireshghallah works at the intersection of privacy, NLP, and the societal implications of machine learning. She leads discussion design, panel structure, and community-engagement planning for the workshop.",
    profileUrl: "https://niloofar.info/",
    imageUrl: "/people/niloofar-mireshghallah.jpg",
  },
  {
    name: "Yejin Choi",
    affiliation: "Stanford University",
    role: "Speaker and Award Owner",
    bio: "Yejin Choi is a Professor of Computer Science at Stanford and a Senior Fellow at HAI. Her research spans language, reasoning, model behavior, evaluation, and human-centered foundation models and agents.",
    profileUrl: "https://cs.stanford.edu/~yejin/",
    imageUrl: "/people/yejin-choi.jpeg",
  },
  {
    name: "Dawn Song",
    affiliation: "University of California, Berkeley",
    role: "Speaker and Award Owner",
    bio: "Dawn Song is a Professor of Computer Science at UC Berkeley whose work focuses on security, privacy, adversarial robustness, and trustworthy machine learning in realistic deployment settings.",
    profileUrl: "https://dawnsong.io/",
    imageUrl: "/people/dawn-song.jpg",
  },
  {
    name: "Manling Li",
    affiliation: "Northwestern University and Amazon Scholar",
    role: "Speaker and Award Owner",
    bio: "Manling Li is an Assistant Professor at Northwestern University whose research focuses on grounded reasoning and multimodal knowledge for foundation-model agents. She leads coverage of world-facing agent failures and grounding-related themes.",
    profileUrl: "https://manlingli.github.io/",
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
    detail: "James Zou",
  },
  {
    time: "08:50 - 09:30",
    event: "Keynote 2",
    detail: "Bo Li",
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
    detail: "Iryna Gurevych",
  },
  {
    time: "11:20 - 12:00",
    event: "Keynote 4",
    detail: "Greg Durrett",
  },
  {
    time: "12:00 - 14:00",
    event: "Lunch and posters",
  },
  {
    time: "14:00 - 14:40",
    event: "Keynote 5",
    detail: "Samy Bengio",
  },
  {
    time: "14:40 - 15:20",
    event: "Keynote 6",
    detail: "Nouha Dziri",
  },
  {
    time: "15:20 - 15:50",
    event: "Coffee break",
  },
  {
    time: "15:50 - 16:50",
    event: "Panel discussion",
    detail: "Maarten Sap, Yi Dong, Yu Su, Nouha Dziri, and Bo Li",
  },
  {
    time: "16:50 - 17:00",
    event: "Closing remarks and awards",
  },
];

export const resources = [
  {
    label: "Primary contact",
    detail: "fmaiworkshop@gmail.com",
  },
  {
    label: "Current sponsor",
    detail: "Sponsors currently listed for the public site are Abaka AI and O2 Lab. The accepted proposal also notes at least $1,000 of Abaka AI support for student support and awards.",
  },
  {
    label: "Submission status",
    detail:
      "OpenReview submissions are now open. Deadline: May 4, 2026, 11:59 PM UTC (May 4, 2026, 6:59 PM CDT).",
  },
  {
    label: "Website",
    detail: "Public workshop site: fmai-workshop.github.io",
  },
];
