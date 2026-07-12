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
  featured: boolean;
  blocks: ProjectBlock[];
  gallery: string[];
};

const R = "/images/projects";

export const projects: Project[] = [
  {
    slug: "elegant-spaces",
    title: "Elegant Spaces",
    thumb: `${R}/elegant-spaces/Brading_and_dipaly.jpg`,
    hero: `${R}/elegant-spaces/Catalogue.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Elegant Spaces, a service-based company specializing in construction and architectural design, needed stronger online visibility and a wider reach in its local market. Here's a breakdown of the services delivered and the research behind them:",
      },
      {
        heading: "SEO (Search Engine Optimization)",
        level: 2,
        body: "A comprehensive SEO strategy lifted Elegant Spaces' online presence, helping them appear prominently in search results for their services.",
      },
      {
        heading: "Social Media Marketing",
        level: 2,
        body: "Targeted campaigns across social platforms engaged the audience and built a strong online community.",
      },
      {
        heading: "Google Ads",
        level: 2,
        body: "Carefully managed Google Ads campaigns, spanning search and display, increased visibility, drove website traffic, and generated leads.",
      },
      {
        heading: "Market Research",
        level: 2,
        body: "Research into comparable local companies surfaced best practices, market trends, and opportunities for Elegant Spaces.",
      },
      {
        heading: "Print Media",
        level: 2,
        body: "Print materials, from posters and banners to business cards, flyers and brochures, kept a consistent, professional brand image across every offline touchpoint.",
      },
      {
        heading: "Business Listings",
        level: 2,
        body: "Listings on preferred platforms and directories strengthened local visibility and reputation.",
      },
      {
        full: true,
        body: "The goal throughout was to position Elegant Spaces as a leading provider in the construction and architectural design industry. A blend of digital marketing, SEO and market research worked to boost their online presence and drive growth in the local market.",
      },
      {
        full: true,
        body: "Together, these efforts showcased Elegant Spaces' expertise, professionalism, and commitment to delivering exceptional service to their clients.",
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
        body: "Geena Apparel, an e-commerce brand specializing in Indian-style wedding apparel, sits in a rich cultural niche full of distinct challenges and opportunities. The focus was to amplify its online presence while celebrating its cultural identity. Here's an overview of the services delivered:",
      },
      {
        heading: "Social Media Marketing",
        level: 2,
        body: "The cultural niche called for a tailored approach. Campaigns across social platforms celebrated Indian traditions and showcased the exquisite wedding apparel, engaging the audience and building a strong online community.",
      },
      {
        heading: "Google Ads",
        level: 2,
        body: "To expand reach and promote the culturally rich wedding apparel, carefully managed Google Ads campaigns used diverse formats and strategies, aligned with the brand's identity to captivate the right audience and drive online sales.",
      },
      {
        heading: "Local SEO (Search Engine Optimization)",
        level: 2,
        body: "Comprehensive local SEO fine-tuned content, listings and visibility to strengthen Geena Apparel's presence within its niche and attract nearby customers who valued its heritage.",
      },
      {
        heading: "E-commerce Optimization",
        level: 2,
        body: "The e-commerce experience was refined for a seamless shopping journey that let the wedding apparel shine.",
      },
      {
        heading: "Email Marketing",
        level: 2,
        body: "Email marketing kept buyers engaged with new collections, special offers, and cultural insights.",
      },
      {
        heading: "Company Listings on Preferred Platforms",
        level: 2,
        body: "Listings on preferred platforms and directories improved local visibility and reputation, feeding a streamlined conversion funnel.",
      },
      {
        full: true,
        body: "Geena Apparel, as an e-commerce brand, was not just about selling clothing; it was about preserving and promoting cultural traditions through style and fashion. The project celebrated the brand's cultural richness, addressed its challenges, and set out to boost engagement, online sales, and the broader recognition of its one-of-a-kind collection within the digital retail landscape.",
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
    slug: "malnad-herbals",
    title: "Malnad Herbals",
    thumb: `${R}/malnad-herbals/Trushyne.png`,
    hero: `${R}/malnad-herbals/Trupthi.png`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Malnad Herbals is a product-based company creating beauty products for skin and hair, with a strong emphasis on natural, ethical values: vegan, GMO-free, cruelty-free and paraben-free. The work spanned a comprehensive range of tasks, a holistic approach to brand development and marketing.",
      },
      {
        heading: "Product Design",
        level: 2,
        body: "Visually appealing, user-friendly product designs resonated with the brand's natural and ethical values.",
      },
      {
        heading: "Branding Design",
        level: 2,
        body: "A brand identity reflected Malnad Herbals' commitment to herbal, cruelty-free products, with consistency and recognition across the market.",
      },
      {
        heading: "Marketing Collateral",
        level: 2,
        body: "Banners, posters, flyers and brochures communicated the brand's unique selling points to potential customers.",
      },
      {
        heading: "E-commerce Listing",
        level: 2,
        body: "Products were listed across e-commerce platforms, from the official website to Amazon, Flipkart, Meesho and Myntra, for wider reach and accessibility.",
      },
      {
        heading: "Social Media Marketing",
        level: 2,
        body: "Social media strategies grew and engaged the brand's online community through content creation, management and audience interaction.",
      },
      {
        heading: "Google Ads",
        level: 2,
        body: "Carefully managed Google Ads, spanning search, display, YouTube and pre-roll, captured attention, drove traffic and boosted online sales.",
      },
      {
        full: true,
        body: "The work was underpinned by a commitment to align Malnad Herbals' brand and products with its core values of natural, ethical, responsible beauty. Research, combined with the client's insights, shaped a cohesive, compelling brand presence in a competitive market.",
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
    slug: "msa",
    title: "MSA",
    thumb: `${R}/msa/Logo.jpg`,
    hero: `${R}/msa/Branding.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "M & S Associates is a dynamic company spanning real estate, construction and architectural design. The project covered a diverse array of services across all three, focused on funneling conversions through effective digital marketing.",
      },
      {
        full: true,
        heading: "Real Estate Sales",
        level: 2,
        body: "M & S Associates handled an extensive range of properties, from flats, plots and houses to commercial, residential, industrial and agricultural land. The approach was tailored to connect with the right customers through the tactics below:",
      },
      {
        heading: "SEO (Search Engine Optimization)",
        level: 3,
        body: "A comprehensive SEO strategy put M & S Associates' listings prominently in search results, drawing the attention of potential investors.",
      },
      {
        heading: "Social Media Marketing",
        level: 3,
        body: "Campaigns across social platforms showcased available properties and engaged potential buyers.",
      },
      {
        heading: "Google Ads",
        level: 3,
        body: "Carefully managed Google Ads, spanning search, display and pre-roll, were designed to capture the attention of prospective real estate investors.",
      },
      {
        heading: "Email Marketing",
        level: 3,
        body: "Email campaigns kept potential buyers informed about new property listings and investment opportunities.",
      },
      {
        heading: "Company Listings on Preferred Platforms",
        level: 3,
        body: "Listings on preferred platforms and directories strengthened local visibility, reputation and the conversion funnel.",
      },
      {
        full: true,
        heading: "Construction and Architectural Design",
        level: 2,
        body: "M & S Associates also offered comprehensive construction and architectural design services, promoted through digital marketing channels built to drive conversions.",
      },
      {
        heading: "Social Media Marketing",
        level: 3,
        body: "Social media campaigns accentuated the company's expertise in construction and architectural design, engaging potential clients.",
      },
      {
        heading: "Google Ads",
        level: 3,
        body: "Google Ads for the construction and design services, across search, display and other formats, reached the right audience and fed the conversion funnel.",
      },
      {
        full: true,
        body: "The core objective was to market M & S Associates' real estate, construction and architectural design services to a broader audience. Stronger online presence through SEO, targeted marketing and platform listings worked to boost conversions and drive growth across these sectors.",
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
    slug: "nexus-servicing",
    title: "Nexus Servicing",
    thumb: `${R}/nexus-servicing/Website.jpg`,
    hero: `${R}/nexus-servicing/Logo.jpg`,
    featured: true,
    blocks: [
      {
        full: true,
        body: "Nexus Servicing offers door-to-door servicing for electronic appliances alongside plumbing and electrical work. Its priority was lead generation and conversion in the local market. The strategy centered on SEO and search ads, plus Google AMP pages for faster loading and stronger rankings.",
      },
      {
        heading: "SEO (Search Engine Optimization)",
        level: 2,
        body: "A comprehensive SEO strategy lifted Nexus Servicing's visibility and attracted local customers seeking electronic and plumbing/electrical services, with the website and content optimized to capture leads.",
      },
      {
        heading: "Search Engine Ads",
        level: 2,
        body: "With lead generation front and center, carefully managed search ads, especially on Google, were pivotal. Targeted ads engaged customers actively seeking these services locally.",
      },
      {
        heading: "Google AMP Pages",
        level: 2,
        body: "Google AMP (Accelerated Mobile Pages) delivered faster-loading landing pages and better rankings, improving user experience, visibility and lead generation.",
      },
      {
        heading: "Branding and Local Targeting",
        level: 2,
        body: "While SEO and search ads drove lead generation, other channels handled branding and local targeting, with social media and display ads built to raise awareness and recognition among local customers.",
      },
      {
        heading: "Service Portfolio",
        level: 2,
        body: "Nexus Servicing covered a comprehensive range, from air conditioning, microwaves, refrigerators, washing machines, TVs and chimneys to plumbing and electrical work. The marketing was tailored to showcase these services to local customers in need.",
      },
      {
        heading: "Google Ads",
        level: 2,
        body: "Carefully managed Google Ads, spanning search, display, YouTube and pre-roll, captured attention, drove traffic and boosted sales.",
      },
      {
        full: true,
        body: "The core objective was to position Nexus Servicing as the preferred provider for electronic and plumbing/electrical services locally. SEO, search ad campaigns and Google AMP together worked to optimize lead generation and conversions.",
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
