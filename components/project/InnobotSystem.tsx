import { Syne, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "@/app/innobot.css";

// Innobot's own three type voices, loaded only on the route that renders them.
const syne = Syne({ subsets: ["latin"], variable: "--ib-syne", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ib-fraunces",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ib-mono",
  display: "swap",
});

const SWATCHES = [
  { hex: "#050708", use: "Ground. Never pure black, it reads as a hole on an OLED panel." },
  { hex: "#0d1115", use: "Surface. What a card sits on before the glass goes over it." },
  { hex: "#1a2429", use: "Border. Present enough to separate, quiet enough to ignore." },
  { hex: "#2fd3c8", use: "Value or success. Nothing else is ever allowed to be teal." },
  { hex: "#f59e0b", use: "A human is needed here. The only amber on the system." },
  { hex: "#e85d69", use: "Blocking. Reserved for work that has actually stopped." },
];

const STATS = [
  { n: "28+", l: "Routes live" },
  { n: "8", l: "Automated service pages" },
  { n: "3", l: "Audience pages" },
  { n: "1", l: "Design system behind all of it" },
];

const RULES = [
  <>
    Write <code>-webkit-backdrop-filter</code> first and the standard property last. LightningCSS
    dedupes the pair and keeps whichever came last, so the obvious ordering ships prefix-only CSS
    and the blur dies silently in production.
  </>,
  <>
    Never put <code>fill: both</code> on an entrance animation. A finished one pins its element to
    its own compositing layer forever, and Chromium excludes composited layers from a fixed
    element&rsquo;s backdrop, so the nav stops blurring what is behind it.
  </>,
  <>
    Scope every page-family stylesheet. Scoping only protects you if both sides are scoped: one
    unscoped <code>.hero</code> anywhere still wins every property your own rule does not set.
  </>,
  <>
    Client logos arrive in eight different brand palettes, so none of them ship as artwork. Each
    one becomes an alpha silhouette rendered as a CSS mask: the file supplies the shape, the
    system supplies the colour.
  </>,
  <>
    No invented statistics. Any figure on screen that is not sourced gets labelled illustrative,
    on the site and in the pitch deck alike.
  </>,
];

export default function InnobotSystem() {
  return (
    <section className={`ib-sys ${syne.variable} ${fraunces.variable} ${plexMono.variable}`}>
      <div className="ib-inner">
        {/* Intro */}
        <div className="ib-block">
          <span className="ib-label">The system</span>
          <h2 className="ib-h">
            One system, <em>every surface.</em>
          </h2>
          <p className="ib-body">
            Innobot sells revenue cycle automation into hospital finance. The committee is
            sceptical by default, the cycle is long, and the first thing anyone judges is whether
            the company looks like it can be trusted with their claims. So the surface could not
            look like a guess.
          </p>
          <p className="ib-body">
            I built the design system first and the site on top of it. Every page since has been an
            instance of the same rules rather than a fresh opinion, which is the only reason one
            person can keep a site this size coherent.
          </p>
        </div>

        {/* 01 Palette */}
        <div className="ib-block">
          <span className="ib-label">01 · Palette</span>
          <h2 className="ib-h">
            Colour that <em>means something.</em>
          </h2>
          <p className="ib-body">
            Six values carry the whole site. Three hold the structure and three hold state, and
            state colour is never decorative. Teal means value or success. Amber means a human is
            needed. Red means blocked. Once colour carries meaning, an operations dashboard reads
            at a glance and nobody has to learn a legend to use it.
          </p>
          <div className="ib-swatches">
            {SWATCHES.map((s) => (
              <div className="ib-swatch" key={s.hex}>
                <div className="ib-chip" style={{ background: s.hex }} />
                <span className="ib-hex">{s.hex}</span>
                <span className="ib-use">{s.use}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 02 Type */}
        <div className="ib-block">
          <span className="ib-label">02 · Type</span>
          <h2 className="ib-h">
            Three voices, <em>one page.</em>
          </h2>
          <p className="ib-body">
            Fraunces carries the display line, kept light, with italic reserved for the one word
            that matters. Syne runs the interface and every section heading. IBM Plex Mono handles
            labels, identifiers and numbers, uppercase and tabular so figures line up in a column.
            A reader never has to work out which register they are in.
          </p>
          <div className="ib-specimens">
            <div className="ib-spec">
              <span className="ib-spec-meta">
                Fraunces
                <br />
                Display · 300
              </span>
              <span className="ib-spec-fraunces">
                Revenue cycle, <em>automated.</em>
              </span>
            </div>
            <div className="ib-spec">
              <span className="ib-spec-meta">
                Syne
                <br />
                UI · 600
              </span>
              <span className="ib-spec-syne">Section headings and interface</span>
            </div>
            <div className="ib-spec">
              <span className="ib-spec-meta">
                IBM Plex Mono
                <br />
                Labels · 400
              </span>
              <span className="ib-spec-mono">Claim 0042 · 00.00 · Tabular</span>
            </div>
          </div>
        </div>

        {/* 03 Glass */}
        <div className="ib-block">
          <span className="ib-label">03 · Surface</span>
          <h2 className="ib-h">
            Glass, <em>done properly.</em>
          </h2>
          <p className="ib-body">
            Cards are translucent over a teal mist that advances as you scroll. It looks like a
            styling choice and it is closer to a browser-internals problem. Backdrop blur refuses
            to composite inside a fixed ancestor, a finished entrance animation quietly kills the
            blur behind the nav, and the build tool drops half of the webkit pair depending on
            which order you declared them in.
          </p>
          <p className="ib-body">
            Each of those cost a day to find. They are written down now, so they cost nobody else
            one. The cards below use the real mechanism, not a picture of it.
          </p>
          <div className="ib-glass-stage">
            <div className="ib-cards">
              <div className="ib-card">
                <span className="ib-card-k">Clean claims</span>
                <span className="ib-card-v is-value">98.2%</span>
                <span className="ib-card-n">Teal, because this is value delivered.</span>
              </div>
              <div className="ib-card">
                <span className="ib-card-k">Needs review</span>
                <span className="ib-card-v is-human">14</span>
                <span className="ib-card-n">Amber, because a person has to act.</span>
              </div>
              <div className="ib-card">
                <span className="ib-card-k">Blocked</span>
                <span className="ib-card-v is-blocked">3</span>
                <span className="ib-card-n">Red, because the work has stopped.</span>
              </div>
            </div>
            <p className="ib-caption">
              Illustrative figures · the system labels every unsourced number this way
            </p>
          </div>
        </div>

        {/* 04 Scale */}
        <div className="ib-block">
          <span className="ib-label">04 · Scale</span>
          <h2 className="ib-h">
            The system had to <em>hold.</em>
          </h2>
          <p className="ib-body">
            Eight automated service pages, three audience pages, the platform, and then the blog,
            case studies, careers, whitepapers and trust pages behind them. Built on Next.js 16 and
            React 19. Page families share one component set and one scoped stylesheet, so a change
            to a card lands everywhere at once instead of in eleven places by hand.
          </p>
          <div className="ib-stats">
            {STATS.map((s) => (
              <div className="ib-stat" key={s.l}>
                <span className="ib-stat-n">{s.n}</span>
                <span className="ib-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 05 The rules */}
        <div className="ib-block">
          <span className="ib-label">05 · The rules</span>
          <h2 className="ib-h">
            Written down so they <em>stay fixed.</em>
          </h2>
          <p className="ib-body">
            A design system is not the colours. It is the set of decisions nobody has to make
            twice. These are the ones that were expensive enough to be worth documenting.
          </p>
          <ul className="ib-rules">
            {RULES.map((r, i) => (
              <li className="ib-rule" key={i}>
                <span className="ib-rule-n">{String(i + 1).padStart(2, "0")}</span>
                <p className="ib-rule-t">{r}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="ib-closer">
          The site is the argument. It has to look like the product works.
        </p>
        <a
          className="ib-visit"
          href="https://innobothealth.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit innobothealth.com →
        </a>
      </div>
    </section>
  );
}
