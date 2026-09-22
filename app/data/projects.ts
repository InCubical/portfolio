export type ProjectBlock = {
  heading?: string;
  level?: 2 | 3;
  body: string;
  full?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  thumb: string;
  hero: string;
  /** CSS background shorthand, used instead of `hero` when supplied. */
  heroBackground?: string;
  /** `dark` flips the hero title to light type. */
  heroTone?: "light" | "dark";
  featured: boolean;
  blocks: ProjectBlock[];
  gallery?: string[];
  /** Renders a bespoke showcase section in place of the image gallery. */
  showcase?: "innobot";
};

const R = "/images/projects";

export const projects: Project[] = [
  {
    slug: "innobot-health",
    title: "Innobot Health",
    thumb: `${R}/innobot-health/thumb.svg`,
    hero: `${R}/innobot-health/thumb.svg`,
    heroBackground:
      "radial-gradient(60% 55% at 20% 15%, rgba(47,211,200,0.22), transparent 70%), radial-gradient(55% 50% at 85% 80%, rgba(47,211,200,0.14), transparent 72%), #050708",
    heroTone: "dark",
    featured: true,
    showcase: "innobot",
    blocks: [
      {
        full: true,
        body: "Innobot Health sells revenue cycle automation into US hospitals and physician groups. I own how the company acquires customers, and the brand surface all of it travels on.",
      },
      {
        heading: "Read the business first",
        level: 2,
        body: "This is a long, high trust sale into hospital finance and physician group leadership. Nobody signs from an ad, and no single channel closes anything on its own. So the job was never to buy traffic. It was to build a path a sceptical committee could walk down over months without losing the thread, and to know at every step which part of that path was working.",
      },
      {
        heading: "Signal based outbound",
        level: 2,
        body: "Outreach at scale, aimed only at the accounts and the titles worth having. Segmented by what the buyer actually owns rather than by whatever the list happened to come sorted by, so the first line of every sequence is about their problem instead of my product.",
      },
      {
        heading: "Performance media",
        level: 2,
        body: "Paid programmes pointed at conversion surfaces built for them, never at a homepage. Each campaign has a landing experience that continues the sentence the ad started, and the measurement behind it exists to tell me which part of the funnel is lying to me.",
      },
      {
        heading: "An organic programme that compounds",
        level: 2,
        body: "The search foundation, the structured data and a content programme built so the work done this quarter is still earning next year. Service pages for every automated workflow the product covers, each one written for a specific buyer with a specific problem, not for a keyword.",
      },
      {
        heading: "The conversion architecture",
        level: 2,
        body: "Eight automated service pages, three pages written for hospitals, provider groups and billing companies respectively, the platform page, and the trust and security material a healthcare buyer asks for before procurement will talk to you. Every one of them is a place a campaign can legitimately land.",
      },
      {
        heading: "The brand surface",
        level: 2,
        body: "The site, the landing experiences, the creative, the social and the video. Building the demand and building the thing it points at in the same pair of hands means the two never drift, and a test ships the same week I think of it.",
      },
      {
        full: true,
        body: "What follows is the whole of it. First the stack I inherited, chose, replaced and still operate, then the design system the brand surface runs on, because I built that before I built the site.",
      },
    ],
  },
  {
    slug: "msa",
    title: "MSA",
    thumb: `${R}/msa/Logo.jpg`,
    hero: `${R}/msa/Branding.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "M & S Associates was a marketplace before anyone local was calling it that. Demand on one side, supply on the other, and a business that only worked if both sides turned up.",
      },
      {
        heading: "Which side breaks first",
        level: 2,
        body: "A marketplace fails on its thinner side, so the opening question was never how to get more traffic. It was which side runs out first, and what it costs to keep that side stocked. Every decision after that followed from the answer, which is why the spend was never split evenly between buyers and sellers the way it would have been if I had arrived with a template.",
      },
      {
        heading: "The web layer, shipped myself",
        level: 2,
        body: "I built and deployed the platform in React and Firebase rather than waiting in a queue behind somebody else's roadmap. Owning the code meant a listing type, a campaign or an entire new service could go live the day it was decided, and the product could be shaped around how people actually moved through it.",
      },
      {
        heading: "Demand on every surface that paid",
        level: 2,
        body: "Performance media across search and social, run as one programme rather than as separate channels reporting to separate people. Property is researched publicly and decided privately, so the job was to be present through a long consideration window without paying twice for the same person.",
      },
      {
        heading: "Measurement that survived a Monday meeting",
        level: 2,
        body: "Analytics, search coverage and session behaviour wired up properly, because the fastest way to lose an argument about budget is to be the only person in the room without a number. The reporting existed to tell me which part of the funnel was lying, and it usually was.",
      },
      {
        heading: "I had the sales team as well",
        level: 2,
        body: "Marketing that hands leads to a sales team it does not speak to is marketing that gets blamed for the pipeline and never gets to fix it. I ran both. So the targeting, the ad, the landing experience and what the salesperson actually said on the call were one decision instead of four, and when something was not converting I could change any part of it by Friday.",
      },
      {
        full: true,
        body: "In a market where every competitor says the same three things and buys the same twenty keywords, the edge came from sharper research, tighter targeting and creative that did not look like everyone else's. That is the entire game. Most firms never play it.",
      },
    ],
    gallery: [
      `${R}/msa/Branding.jpg`,
      `${R}/msa/card_1.jpg`,
      `${R}/msa/Website-01.jpg`,
      `${R}/msa/Instagram_1.jpg`,
      `${R}/msa/Instagram_2.jpg`,
      `${R}/msa/Instagram_3.jpg`,
      `${R}/msa/Letter_Head_1.jpg`,
      `${R}/msa/Letter_Head_2.jpg`,
      `${R}/msa/Logo.jpg`,
    ],
  },
  {
    slug: "malnad-herbals",
    title: "Malnad Herbals",
    thumb: `${R}/malnad-herbals/Trushyne.png`,
    hero: `${R}/malnad-herbals/Trupthi.png`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "They handed me a logo. That was the brand. The products existed, barely, still in testing, and there was nothing to show anyone.",
      },
      {
        heading: "Everything, starting from a logo",
        level: 2,
        body: "No website, no packaging, no photography, no accounts, no listings, no category presence of any kind. I built all of it. That is either the best or the worst way to learn a category depending on which week you ask me, and it is the reason I will never again believe a brand problem is only a brand problem.",
      },
      {
        heading: "The product before the marketing",
        level: 2,
        body: "I designed the products themselves, not just the campaigns pointed at them. Natural, vegan and cruelty free are claims a customer has to believe in about two seconds while holding a bottle next to a competitor, so the packaging had to carry the whole ethical position on sight and still read at thumbnail size in a feed.",
      },
      {
        heading: "The factory floor",
        level: 2,
        body: "I spent more time in package printing factories than in a design tool. Going back and forth on proofs, standing over runs, checking boxes coming off the line and rejecting the ones that looked correct on a screen and wrong in a hand. Nothing teaches you what a brand actually is faster than watching one get manufactured badly.",
      },
      {
        heading: "Rendering what did not exist yet",
        level: 2,
        body: "The range was still in testing, so there was nothing to photograph and no budget to wait. I built the products in Blender and rendered the whole line before the line was real. The launch creative shipped ahead of the product, which is the only reason the launch happened when it did.",
      },
      {
        heading: "Selling on somebody else's platform",
        level: 2,
        body: "I set the brand up across Amazon, Flipkart and Meesho and owned the listings end to end. Marketplaces do not reject you politely. A listing that trips a compliance check simply stops existing, so the packaging had to satisfy each platform's rules as well as the customer, and the outer cartons had to survive their logistics rather than my expectations of it.",
      },
      {
        heading: "The programmes on top",
        level: 2,
        body: "Only once all of that existed did the paid and social programmes go on top, built to turn attention into a second purchase rather than a first one. A consumer brand that only ever wins the first order does not survive its own ad budget.",
      },
      {
        full: true,
        body: "Consumer taught me unit economics the hard way. Every rupee of spend had to come back, and the dashboard said so within the week. I have run every channel since with that clock in my head.",
      },
    ],
    gallery: [
      `${R}/malnad-herbals/card_1.jpg`,
      `${R}/malnad-herbals/logo.jpg`,
      `${R}/malnad-herbals/website.jpg`,
      `${R}/malnad-herbals/branding.jpg`,
      `${R}/malnad-herbals/Bread_Oil.jpg`,
      `${R}/malnad-herbals/canno.png`,
      `${R}/malnad-herbals/Domino.png`,
      `${R}/malnad-herbals/Insta_Glow.png`,
      `${R}/malnad-herbals/Insta_Glow_Plus.png`,
      `${R}/malnad-herbals/Revive.png`,
      `${R}/malnad-herbals/Trupthi.png`,
      `${R}/malnad-herbals/Trushyne.png`,
      `${R}/malnad-herbals/Instagram_1.jpg`,
      `${R}/malnad-herbals/Instagram_2.jpg`,
      `${R}/malnad-herbals/Instagram_3.jpg`,
      `${R}/malnad-herbals/Instagram_4.jpg`,
    ],
  },
  {
    slug: "elegant-spaces",
    title: "Elegant Spaces",
    thumb: `${R}/elegant-spaces/Brading_and_dipaly.jpg`,
    hero: `${R}/elegant-spaces/Catalogue.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "A few engineers and architects who left to start their own firm. Genuinely good at the work, and completely invisible everywhere the work was not.",
      },
      {
        heading: "The diagnosis",
        level: 2,
        body: "The problem was never demand. People were already searching for exactly what this firm did, in plain language, every week. The problem was that the firm was not there when they looked, and that anyone who did arrive by some other route found nothing that made the quality of the work obvious. Findable first, credible second. In that order, because credibility you cannot reach is a brochure.",
      },
      {
        heading: "The identity, and the one I lost",
        level: 2,
        body: "They had a vision for the logo and I put a lot of directions in front of them. They chose the one I liked least. It is their firm and their name, so it was their call to make, and I still think they got it wrong. Then I built the entire identity around their answer and did it properly, because a brand you are sulking about is a brand you deliver badly, and that is a worse outcome than losing an argument about a logo.",
      },
      {
        heading: "Organic search as the foundation",
        level: 2,
        body: "A search programme built around the services people actually type, not the ones the industry prefers to call them. Construction and architectural design get searched for in ordinary words, and matching that language rather than correcting it was most of the win.",
      },
      {
        heading: "The website and the brand surface",
        level: 2,
        body: "A design and build firm is judged on physical things. The site, the catalogue, the banners and the cards all had to say the same thing in the same voice, because a prospect usually meets two of them before they ever meet a person.",
      },
      {
        heading: "Performance media on top",
        level: 2,
        body: "Paid programmes across search and display to hold ground the organic work had not reached yet, and to stay present on the terms that mattered most while the slower asset compounded underneath it.",
      },
      {
        heading: "A CRM, because it is B2B",
        level: 2,
        body: "Architectural work is a long, considered, expensive decision. An enquiry that lands on a Tuesday and gets remembered on a Friday is an enquiry that has already gone elsewhere, so they got a CRM and, more importantly, a process to go with it. Software does not fix follow up. It just makes it obvious who is not doing it.",
      },
      {
        full: true,
        body: "Took a firm that did strong work nobody could find, and made it the one that turns up and looks the part when someone local goes looking.",
      },
    ],
    gallery: [
      `${R}/elegant-spaces/Banner_1.jpg`,
      `${R}/elegant-spaces/Bill.jpg`,
      `${R}/elegant-spaces/Brading_and_dipaly.jpg`,
      `${R}/elegant-spaces/Business_Card_1.jpg`,
      `${R}/elegant-spaces/Catalogue.jpg`,
      `${R}/elegant-spaces/Logo.jpg`,
      `${R}/elegant-spaces/Quotation.jpg`,
    ],
  },
  {
    slug: "nexus-servicing",
    title: "Nexus Servicing",
    thumb: `${R}/nexus-servicing/Website.jpg`,
    hero: `${R}/nexus-servicing/Logo.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Appliance repair, door to door, in a category where the whole business is being the phone that rings. The most competitive space I have worked in, and the thing that finally won it cost almost nothing.",
      },
      {
        heading: "The entire funnel is ninety seconds",
        level: 2,
        body: "Nobody researches appliance repair for a fortnight. A machine breaks, someone searches, and they call one of the first credible options. There is no brand to build on and no consideration phase to nurture. So everything was pointed at being present and convincing inside the ninety seconds that decision actually takes.",
      },
      {
        heading: "Live at six in the morning",
        level: 2,
        body: "Things break before work and at weekends. The campaigns went live at six, because the call that comes in at half past six goes to whoever was already awake, and the competitor still asleep does not get a second chance at that customer. Category this tight, the schedule is a strategy.",
      },
      {
        heading: "Search built for how people describe a problem",
        level: 2,
        body: "An organic foundation and a paid programme covering every appliance and trade the business serviced, matched to how someone describes what broke rather than what a technician would call the repair. People type what happened, not what the fix is named.",
      },
      {
        heading: "Speed as a conversion feature",
        level: 2,
        body: "The landing experiences were built to load fast on a phone on mobile data, because that is the actual condition someone is in when their washing machine has just emptied itself across the kitchen. A slow page here does not cost you a ranking so much as it costs you the call.",
      },
      {
        heading: "The sticker that beat the ad platform",
        level: 2,
        body: "The best thing I built there was a QR sticker. Every technician carried them and left one on the appliance after the job. Months later, when something else in the house failed, that customer did not open a search engine and hand us straight back to the auction. They scanned the sticker and came directly to us. We turned a one-off repair into a channel we owned, in a category where every competitor was renting theirs by the click.",
      },
      {
        heading: "The handoff, end to end",
        level: 2,
        body: "Calls landing with the sales team, dispatched to technicians, worked, and then the feedback coming back round to tell us which campaigns were producing jobs worth having rather than just jobs. A lead that becomes a cancelled visit is a cost, and the reporting had to be honest enough to say so.",
      },
      {
        full: true,
        body: "Positioned a local services business as the default call in its area, with a funnel that took someone from a broken appliance to a booked visit with nothing in between asking them to wait. The most competitive category I have worked in, and what won it was a sticker.",
      },
    ],
    gallery: [
      `${R}/nexus-servicing/Logo.jpg`,
      `${R}/nexus-servicing/Website.jpg`,
    ],
  },
  {
    slug: "geena-apparel",
    title: "Geena Apparel",
    thumb: `${R}/geena-apparel/packing_box.jpg`,
    hero: `${R}/geena-apparel/packing_box.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Geena Apparel sells Indian wedding apparel. I did the brand. That is all I did here, and this page is not going to pretend otherwise.",
      },
      {
        heading: "The identity",
        level: 2,
        body: "Wedding apparel is not bought the way ordinary clothing is bought. It is emotional, occasion led, researched for weeks and tied to tradition, and the usual e-commerce styling flattens exactly the thing people are paying for. So the identity was built around the cultural specificity rather than in spite of it.",
      },
      {
        heading: "The collateral",
        level: 2,
        body: "Logo, packaging, catalogue and the printed pieces that travel with an order. For a brand selling something people keep, the box it arrives in is doing as much work as anything on the website, and it is the part most brands treat as freight.",
      },
      {
        full: true,
        body: "No campaigns, no funnel, no pipeline, no numbers. A brand system, delivered, and nothing else. Every other project on this site is one I owned end to end, so it seemed worth saying plainly which one I did not.",
      },
    ],
    gallery: [
      `${R}/geena-apparel/card_1.jpg`,
      `${R}/geena-apparel/packing_box_2.jpg`,
      `${R}/geena-apparel/Letter_Head.jpg`,
      `${R}/geena-apparel/Logo.jpg`,
      `${R}/geena-apparel/packing_box.jpg`,
      `${R}/geena-apparel/Website.jpg`,
      `${R}/geena-apparel/Catalogue.png`,
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(slug: string, count = 4): Project[] {
  return projects.filter((p) => p.slug !== slug).slice(0, count);
}
