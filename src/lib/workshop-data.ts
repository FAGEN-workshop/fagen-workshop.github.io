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

export interface NewsItem {
  /** Display date (e.g. "April 19, 2026"). */
  date: string;
  /** ISO date for sorting and machine readability (YYYY-MM-DD). */
  iso: string;
  title: string;
  body?: string;
  link?: { label: string; href: string };
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
  shortTitle: "FAGEN",
  title: "Failure Modes in Agentic AI",
  tagline: "Reproducible Triggers, Trace Diagnostics, and Verified Fixes",
  conferenceLabel: "ICML 2026 Workshop",
  domain: "fagen-workshop.github.io",
  description:
    "ICML 2026 workshop on actionable failure modes in agentic AI: reproducible triggers, trace diagnostics, and verified fixes.",
  openReviewUrl:
    "https://openreview.net/group?id=ICML.cc/2026/Workshop/FAGEN#tab-recent-activity",
  submissionDeadlineLabel: "May 11, 2026 (AOE)",
  submissionDeadlineIso: "2026-05-12T11:59:00Z",
  notificationDateLabel: "May 22, 2026 (AOE)",
  notificationDateIso: "2026-05-23T11:59:00Z",
  contactEmail: "fagenworkshop@gmail.com",
  xUrl: "https://x.com/FAGENWorkshop",
  xHandle: "@FAGENWorkshop",
};

export const navigation: NavItem[] = [
  { label: "News", href: "/#news", anchor: "news" },
  { label: "About", href: "/#about", anchor: "about" },
  { label: "Speakers", href: "/#speakers", anchor: "speakers" },
  { label: "Call for Papers", href: "/#cfp", anchor: "cfp" },
  { label: "Dates", href: "/#dates", anchor: "dates" },
  { label: "Schedule", href: "/#schedule", anchor: "schedule" },
  { label: "Organizers", href: "/#organizers", anchor: "organizers" },
  { label: "Sponsors", href: "/#sponsors", anchor: "sponsors" },
  { label: "Contact", href: "/#contact", anchor: "contact" },
];

export const news: NewsItem[] = [
  {
    date: "April 19, 2026",
    iso: "2026-04-19",
    title: "Workshop X account is live",
    body: "Follow @FAGENWorkshop for deadline reminders, accepted-paper highlights, and program updates.",
    link: { label: "Follow @FAGENWorkshop", href: "https://x.com/FAGENWorkshop" },
  },
  {
    date: "April 17, 2026",
    iso: "2026-04-17",
    title: "OpenReview submissions are open",
    body: "The submission portal is now live. Submission deadline May 11 (AOE); notifications by May 22.",
    link: {
      label: "Open OpenReview",
      href: "https://openreview.net/group?id=ICML.cc/2026/Workshop/FAGEN#tab-recent-activity",
    },
  },
  {
    date: "March 20, 2026",
    iso: "2026-03-20",
    title: "Workshop accepted at ICML 2026!",
  },
];

export const aboutParagraphs = [
  "Reliability has been studied in ML for a long time, mostly through robustness benchmarks, adversarial evaluation, and red-teaming on chat-style language models. Foundation-model agents push the question somewhere harder. An agent run goes for hundreds of steps, each step depending on tool calls and memory writes from the steps before it. When the run breaks, it rarely breaks at the obvious moment. A bad assumption at step 3 quietly contaminates step 50, and by step 200 the agent has been wrong for a while without noticing. It might have spent its budget on the wrong subtask. It might be reading from memory it polluted itself. Or it landed on an answer at step 12 and spent the rest of the run defending it.",
  "FAGEN is a place to take these failures seriously. The workshop is organized around four kinds of contributions. Definitions matter: what does \"failure\" actually mean here, beyond the loose way the term gets thrown around? Reproducible triggers matter at least as much. We want the smallest setup that breaks the agent the same way every time, so other groups can build on the case. Diagnostics should look at the trace itself, not just the final score, because final-score evaluation hides almost everything interesting. And the fixes worth presenting are the ones that admit what they cost in latency, in capability, or in how well they generalize.",
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
    name: "Yu Su",
    affiliation: "NeoCognition / OSU",
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
  {
    name: "Andrea Zanette",
    affiliation: "Carnegie Mellon University",
    bio: "Andrea Zanette is an Assistant Professor at Carnegie Mellon University in the ECE department, with a courtesy appointment in the Machine Learning Department. His research spans reinforcement learning theory, LLM reasoning and alignment, and how RL with text feedback shapes the capabilities and failure modes of language-model agents.",
    focus: "RL training and feedback failures in language-model agents",
    profileUrl: "https://azanette.com/",
    imageUrl: "/people/andrea-zanette.png",
    assets: ["Maximum Likelihood RL", "RL with Text Feedback"],
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
    name: "Zihan Wang",
    affiliation: "Abaka AI",
    bio: "",
    profileUrl: "https://www.abaka.ai/",
    imageUrl: "/people/2zihanwang.png",
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
