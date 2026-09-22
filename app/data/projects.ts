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
        body: "M & S Associates works across real estate, construction and architectural design. I owned brand and revenue, which in a market this crowded meant fixing the story before touching the spend.",
      },
      {
        heading: "Positioning first",
        level: 2,
        body: "Every competitor in this market says the same three things about trust, quality and experience. None of it separates anyone. I repositioned how the company presented itself so that a buyer could tell within a sentence what M & S actually did differently, then rebuilt the brand surface around that answer.",
      },
      {
        heading: "The web layer, shipped myself",
        level: 2,
        body: "I built and deployed the website in React and Firebase rather than waiting on a queue. Owning the code meant a property, a campaign or a new service could go live the day it was decided, and the site could be shaped around how buyers actually moved through it rather than around a template.",
      },
      {
        heading: "Demand across two businesses",
        level: 2,
        body: "Real estate and construction are different buyers with different timelines, so they got different programmes: organic search and performance media for the property listings, and a slower, credibility led motion for the design and build side.",
      },
      {
        heading: "Pipeline the sales team could work",
        level: 2,
        body: "The point was never traffic. It was qualified enquiries landing with enough context attached that the sales team knew which property, which budget and which stage before they picked up the phone.",
      },
      {
        full: true,
        body: "The edge came from sharper research, tighter targeting and creative that did not look like everyone else's. In a market where everyone buys the same keywords, that is the whole game.",
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
        body: "Malnad Herbals makes natural skin and hair products: vegan, cruelty free, no parabens, no GMO. I built the brand end to end, from the packaging on the shelf to the programmes that sold it.",
      },
      {
        heading: "A brand that had to survive being picked up",
        level: 2,
        body: "Consumer beauty is judged in about two seconds, in hand, next to a competitor. The identity and the product design had to carry the ethical position on sight, without a paragraph explaining it, and then hold up equally in a feed at thumbnail size.",
      },
      {
        heading: "Built for the shelf and the scroll",
        level: 2,
        body: "Packaging, promotional creative and social content made as one system rather than as separate jobs, so the product a customer saw in an ad was recognisably the product that arrived in the box.",
      },
      {
        heading: "Everywhere the buyer already was",
        level: 2,
        body: "The brand ran on its own site and across the marketplaces customers actually shop on, with the listings, the imagery and the copy treated as a conversion surface in their own right rather than as an afterthought.",
      },
      {
        heading: "Performance media with nowhere to hide",
        level: 2,
        body: "Search, display and video programmes pointed at a funnel built to turn attention into a second purchase, not just a first one. Consumer is unforgiving that way. A brand that only ever wins the first order does not survive its own ad budget.",
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
        body: "Elegant Spaces builds and designs. Good work, almost no visibility, and a local market where the competitor with the better shopfront wins the enquiry regardless of who builds better.",
      },
      {
        heading: "The diagnosis",
        level: 2,
        body: "The problem was not demand. People were already searching for exactly what this company did. The problem was that when they searched, Elegant Spaces was not there, and when they arrived by any other route there was nothing that made the quality of the work obvious. So the work started with being findable and being credible, in that order.",
      },
      {
        heading: "Organic search as the foundation",
        level: 2,
        body: "A search programme built around the services people actually type, not the ones the industry likes to call them. Construction and architectural design get searched for in plain language, and matching that language was most of the win.",
      },
      {
        heading: "Performance media on top",
        level: 2,
        body: "Paid programmes across search and display to cover the ground the organic work had not reached yet, and to hold position on the terms that mattered most while the slower work compounded underneath.",
      },
      {
        heading: "The brand surface, on and offline",
        level: 2,
        body: "A design and build firm gets judged on physical things. The catalogue, the banners, the cards and the site had to say the same thing in the same voice, because a prospect often meets two of them before they ever meet a person.",
      },
      {
        heading: "Owning the local map",
        level: 2,
        body: "Listings and directory presence tightened up so that a local search resolved to this company, with consistent detail everywhere it appeared.",
      },
      {
        full: true,
        body: "Took a company that did strong work nobody could find, and made it the one that turns up and looks the part when someone local goes looking.",
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
    slug: "geena-apparel",
    title: "Geena Apparel",
    thumb: `${R}/geena-apparel/packing_box.jpg`,
    hero: `${R}/geena-apparel/packing_box.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Geena Apparel sells Indian wedding apparel online. A rich, specific niche, and one where the usual e-commerce playbook flattens exactly the thing people are buying.",
      },
      {
        heading: "The niche was the strategy",
        level: 2,
        body: "Wedding apparel is not bought the way ordinary clothing is bought. It is emotional, occasion led, researched for weeks and tied to tradition. Treating it as generic fashion retail would have cost the brand the only advantage it had, so everything got built around the cultural specificity rather than in spite of it.",
      },
      {
        heading: "Content that respected the occasion",
        level: 2,
        body: "Social programmes built around the traditions the clothing belongs to, showing the pieces in the context people imagine wearing them in. That is what earns a following in a niche this personal.",
      },
      {
        heading: "The storefront as conversion surface",
        level: 2,
        body: "The shopping experience reworked so the apparel carried the page: better merchandising, a cleaner path from browsing to checkout, and product presentation that did justice to garments people were about to spend significantly on.",
      },
      {
        heading: "Demand and lifecycle",
        level: 2,
        body: "Performance media to reach buyers actively looking, a search foundation tuned to how this customer actually phrases things, and lifecycle email keeping buyers close to new collections between the long gaps that a wedding purchase naturally leaves.",
      },
      {
        full: true,
        body: "The brand was never only selling clothing. It was selling participation in something, and the growth work only started performing once it was built to say so.",
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
  {
    slug: "nexus-servicing",
    title: "Nexus Servicing",
    thumb: `${R}/nexus-servicing/Website.jpg`,
    hero: `${R}/nexus-servicing/Logo.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Nexus Servicing repairs appliances and handles plumbing and electrical work, door to door. The entire business depends on being the one that gets called when something breaks.",
      },
      {
        heading: "Intent is everything here",
        level: 2,
        body: "Nobody researches appliance repair for a fortnight. A machine breaks, someone searches, and they call one of the first credible options. There is no brand loyalty to build on and no consideration phase to nurture. So the whole programme was pointed at being present and convincing in the ninety seconds that decision takes.",
      },
      {
        heading: "Search, built for urgency",
        level: 2,
        body: "An organic foundation covering every appliance and trade the business services, matched to how people describe a problem rather than how a technician would. Someone types what broke, not what the repair is called.",
      },
      {
        heading: "Paid coverage on the moments that convert",
        level: 2,
        body: "Performance media concentrated on the highest intent searches in the service area, because in this category the click that arrives during a problem is worth many times the one that arrives during a browse.",
      },
      {
        heading: "Speed as a conversion feature",
        level: 2,
        body: "The landing experiences were built to load fast on a phone on mobile data, which is the actual condition someone is in when their washing machine has just flooded the kitchen. Slow pages do not lose you a ranking here so much as they lose you the call.",
      },
      {
        heading: "Awareness underneath it",
        level: 2,
        body: "Social and display carried recognition in the service area so the name was already familiar by the time it appeared in a list of search results.",
      },
      {
        full: true,
        body: "Positioned a local services business to be the default call in its area, with a funnel that took someone from a broken appliance to a booked visit without a single step in between that asked them to wait.",
      },
    ],
    gallery: [
      `${R}/nexus-servicing/Logo.jpg`,
      `${R}/nexus-servicing/Website.jpg`,
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
