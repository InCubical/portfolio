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

/* ── The brand law ────────────────────────────────────────────── */

const LAW = [
  <>
    <b>Ground is #050708, never pure black.</b> Pure black reads as a hole punched in the panel on
    an OLED screen, and the teal mist has nothing to sit against. Sections may drop to true black,
    but only as a recessed band.
  </>,
  <>
    <b>Teal means value or success. Nothing else is ever teal.</b> And labels are never teal when
    the value is, so the eye lands on the number rather than the word beside it.
  </>,
  <>
    <b>Amber means a human is needed</b> or something is waiting. <code>#e85d69</code> means
    blocking, and only blocking. <code>#e63946</code> is the hero pain accent and is never a UI
    state. Three colours, three meanings, no overlap.
  </>,
  <>
    <b>Every card is the same glass.</b> <code>rgba(13,17,21,0.42)</code>, blur 16px, saturate 1.6,
    a 1px <code>#1a2429</code> border and an inset top line at 7% white. Radius 22 for stage cards,
    16 for general, 24 for bento.
  </>,
  <>
    <b>Three type voices, one job each.</b> Fraunces light for display with italic on the accent
    phrase only, Syne for interface and headings, IBM Plex Mono for every label, identifier and
    number, uppercase and tabular so figures line up in a column.
  </>,
  <>
    <b>One card, one view.</b> The density caps are hard: eight rows, five chips, four lines, two
    findings. Past that the card is lying about how simple the product is.
  </>,
  <>
    <b>Recognise, then transform.</b> Consecutive stages show the same card changing state, never a
    fresh card. The viewer should never have to re-find their place.
  </>,
  <>
    <b>Glow is layered, never a single blur.</b> Halo at 8 to 12 times the core at 6 to 10% opacity,
    a mid pass at 3 to 4 times, then the core at full with a near-white centre.
  </>,
  <>
    <b>Entrances run 0.6 to 0.7 seconds, ease-out, staggered 0.1 to 0.15.</b> Never ease-in on an
    entrance. Two or three moving things per composition, never more.
  </>,
  <>
    <b>No invented statistics.</b> Any number on screen that is not sourced gets labelled
    illustrative, on the site and in the deck alike. It is the rule that costs the most and earns
    the most.
  </>,
];

const SWATCHES = [
  { hex: "#050708", use: "Ground. Never pure black." },
  { hex: "#0d1115", use: "Surface. What a card sits on before the glass." },
  { hex: "#1a2429", use: "Border. Enough to separate, quiet enough to ignore." },
  { hex: "#2fd3c8", use: "Value or success. Nothing else is teal." },
  { hex: "#f59e0b", use: "A human is needed, or something is waiting." },
  { hex: "#e85d69", use: "Blocking. Only ever blocking." },
];

const STATS = [
  { n: "28+", l: "Routes live" },
  { n: "8", l: "Automated service pages" },
  { n: "3", l: "Audience pages" },
  { n: "1", l: "Design system behind all of it" },
];

/* ── The claim film ───────────────────────────────────────────── */
// The record, the stages and every figure below are transcribed from the
// site's own claim-flow data, which publishes them under an illustrative
// framing. Nothing here is invented.

const RECORD = [
  { k: "Claim ID", v: "CLM-2026-48212" },
  { k: "Format", v: "UB-04 · Institutional" },
  { k: "Payer", v: "Anthem BCBS · PPO" },
  { k: "Billed", v: "$4,862.00" },
  { k: "Source", v: "Report agent", good: true },
  { k: "Received", v: "09:42:18" },
];

const STAGES = [
  {
    n: "01",
    t: "Intake",
    d: "A claim arrives one of seven ways, and the channel is recorded with it.",
    items: ["API connection", "Scheduled export", "Report agent · charges", "Report agent · denials", "Report agent · A/R"],
  },
  {
    n: "02",
    t: "Routing",
    d: "Every event has exactly one next action and exactly one queue.",
    items: ["Eligibility · 14", "Authorization · 09", "Claim status · 22", "Adjustments · 06", "Appeals · 04"],
  },
  {
    n: "03",
    t: "Execution",
    d: "Five levels of support, tried in order, each one cheaper than the next.",
    items: ["APIs", "AI agents", "Chatbots", "Voice calls", "Human support"],
    human: true,
  },
  {
    n: "04",
    t: "Write-back",
    d: "Every result returns to the system of record. Nothing lives only here.",
    items: ["Eligibility results", "Authorization status", "Payer response", "Notes", "Payments posted"],
  },
  {
    n: "05",
    t: "Analytics",
    d: "What actually happened, with the caveats attached to it.",
    items: ["1,000 tasks", "96% success rate", "Cost to collect 2.2%", "Denial rate 4%"],
  },
];

const AGENTS = [
  { n: "APIs", d: "Exchange information directly between systems.", ink: "#2fd3c8" },
  { n: "AI agents", d: "Complete tasks in portals, just as a person would.", ink: "#65a8dc" },
  { n: "Chatbots", d: "Use chat to request information and follow up.", ink: "#b3a0ec" },
  { n: "Voice calls", d: "Call to obtain information and resolve tasks.", ink: "#b3a0ec" },
  { n: "Human support", d: "Handle work that needs a person's judgment.", ink: "#edbf7d" },
];

const AR_AGING = [
  { bucket: "0–30 days", amount: "$12M", v: 1 },
  { bucket: "31–60 days", amount: "$8M", v: 8 / 12 },
  { bucket: "61–90 days", amount: "$5M", v: 5 / 12 },
  { bucket: "91+ days", amount: "$3M", v: 3 / 12 },
];

const MIX = [
  { label: "API integration", pct: "42%", n: 42, ink: "#2fd3c8" },
  { label: "Portal agent", pct: "33%", n: 33, ink: "#65a8dc" },
  { label: "Conversational AI", pct: "15%", n: 15, ink: "#b3a0ec" },
  { label: "Manual", pct: "10%", n: 10, ink: "#edbf7d" },
];

const OUTCOMES = [
  { label: "Paid", n: 60, ink: "#2fd3c8" },
  { label: "Partial", n: 24, ink: "#21abab" },
  { label: "Pending", n: 12, ink: "#f59e0b" },
  { label: "Denied", n: 4, ink: "#e85d69" },
];

const TILES = [
  { v: "2.2%", l: "Cost to collect" },
  { v: "1.4", l: "Touches per encounter" },
  { v: "4%", l: "Denial rate" },
  { v: "96%", l: "Success rate" },
];

/* ── Trend chart ──────────────────────────────────────────────── */
// Geometry lifted verbatim from the live site: the pain and outcomes charts
// are the same six curves with different colour ramps and legends.

const CURVES = [
  "M60,265 C200,255 340,240 480,215 C620,190 720,160 780,135",
  "M60,250 C200,236 340,215 480,185 C620,150 720,118 780,90",
  "M60,235 C200,218 340,190 480,155 C620,118 720,80 780,55",
  "M60,220 C200,200 340,170 480,130 C620,90 720,55 780,32",
  "M60,205 C200,182 340,150 480,108 C620,68 720,38 780,18",
  "M60,190 C200,165 340,128 480,85 C620,45 720,20 780,8",
];
const ENDPOINTS = [135, 90, 55, 32, 18, 8];
const GRID_Y = [60, 130, 200, 270];

const RAMPS = {
  pain: ["#ff8593", "#f25a6b", "#e63946", "#d2374a", "#b02a3a", "#8a1f2d"],
  outcomes: ["#c8e8e6", "#5fe0d6", "#2fd3c8", "#21abab", "#127e8a", "#075269"],
} as const;

function TrendChart({
  variant,
  legend,
}: {
  variant: keyof typeof RAMPS;
  legend: string[];
}) {
  const ramp = RAMPS[variant];
  const gid = (i: number) => `ib-${variant}-grad-${i + 1}`;

  return (
    <div className="ib-chart">
      <svg viewBox="0 0 800 320" preserveAspectRatio="none" aria-hidden>
        <defs>
          {ramp.map((c, i) => (
            <linearGradient key={c + i} id={gid(i)} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c} stopOpacity="0.6" />
              <stop offset="100%" stopColor={c} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {GRID_Y.map((y) => (
          <line key={y} className="ib-grid-line" x1="60" y1={y} x2="780" y2={y} />
        ))}

        <text className="ib-axis-text" x="0" y="65">High</text>
        <text className="ib-axis-text" x="0" y="275">Low</text>
        <line className="ib-grid-line" x1="780" y1="40" x2="780" y2="280" />
        <text className="ib-axis-text" x="780" y="30" textAnchor="end">Now</text>

        {CURVES.map((d, i) => (
          <path key={`a${i}`} d={`${d} L780,290 L60,290 Z`} fill={`url(#${gid(i)})`} />
        ))}
        {CURVES.map((d, i) => (
          <path
            key={`l${i}`}
            className="ib-chart-line"
            vectorEffect="non-scaling-stroke"
            stroke={ramp[i]}
            d={d}
          />
        ))}
        {ENDPOINTS.map((cy, i) => (
          <circle key={`d${i}`} cx="780" cy={cy} r="4" fill={ramp[i]} />
        ))}

        <text className="ib-axis-text" x="60" y="310">Month 1</text>
        <text className="ib-axis-text" x="420" y="310" textAnchor="middle">Month 6</text>
        <text className="ib-axis-text" x="780" y="310" textAnchor="end">Month 12</text>
      </svg>
      <div className="ib-legend">
        {legend.map((l, i) => (
          <span key={l}>
            <i style={{ background: ramp[i] }} />
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── IRIS flow ────────────────────────────────────────────────── */

const WORKFLOWS = [
  "Patient Scheduling",
  "Eligibility Verification",
  "Prior Authorization",
  "Charge Capture",
  "Claim Scrubbing",
  "Payment Posting",
  "Denial Management",
  "Revenue Reporting",
];
const rowY = (i: number) => 40 + i * 85;
const HUB = { x: 760, y: 340 };

function IrisFlow() {
  return (
    <div className="ib-flow">
      <svg viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <linearGradient id="ibFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2fd3c8" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#2fd3c8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c8e8e6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="ibHubGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c8e8e6" />
            <stop offset="50%" stopColor="#2fd3c8" />
            <stop offset="100%" stopColor="#21abab" />
          </linearGradient>
          <radialGradient id="ibHubHalo">
            <stop offset="0%" stopColor="#2fd3c8" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#2fd3c8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2fd3c8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {WORKFLOWS.map((w, i) => (
          <text key={w} className="ib-flow-label" x="20" y={rowY(i) + 7}>
            {w}
          </text>
        ))}

        {WORKFLOWS.map((w, i) => (
          <path
            key={`p-${w}`}
            className="ib-flow-line"
            vectorEffect="non-scaling-stroke"
            d={`M310,${rowY(i)} C500,${rowY(i)} 620,${HUB.y} ${HUB.x},${HUB.y}`}
          />
        ))}

        <circle cx={HUB.x} cy={HUB.y} r="150" fill="url(#ibHubHalo)" />
        <circle cx={HUB.x} cy={HUB.y} r="66" fill="url(#ibHubGrad)" />
        <text
          className="ib-flow-hub-text"
          x={HUB.x}
          y={HUB.y + 15}
          textAnchor="middle"
        >
          IRIS
        </text>
      </svg>
    </div>
  );
}

/* ── Facility mockup ──────────────────────────────────────────── */

const FACILITIES = [
  { name: "Main Hospital", completed: 44, total: 50 },
  { name: "North Campus", completed: 30, total: 40 },
  { name: "Outpatient", completed: 24, total: 30 },
  { name: "South Clinic", completed: 20, total: 22 },
];

function FacilityBoard() {
  return (
    <div className="ib-mock">
      <div className="ib-mock-top">
        <span className="ib-mock-title">
          <span className="ib-dot" />
          IRIS · Facility Overview
        </span>
        <span className="ib-pill">System-wide</span>
      </div>
      <div className="ib-mock-kpis">
        <div className="ib-mock-kpi">
          <span className="ib-mock-kpi-n">118</span>
          <span className="ib-mock-kpi-l">Checks completed</span>
        </div>
        <div className="ib-mock-kpi">
          <span className="ib-mock-kpi-n g">24</span>
          <span className="ib-mock-kpi-l">Open items</span>
        </div>
        <div className="ib-mock-kpi">
          <span className="ib-mock-kpi-n">142</span>
          <span className="ib-mock-kpi-l">Tasks in sample</span>
        </div>
      </div>
      <div className="ib-mock-rows">
        {FACILITIES.map((f) => (
          <div className="ib-mock-row" key={f.name}>
            <span className="ib-mock-name">{f.name}</span>
            <span className="ib-mock-bar">
              <span style={{ width: `${(f.completed / f.total) * 100}%` }} />
            </span>
            <span className="ib-mock-pct">
              {f.completed}/{f.total}
            </span>
          </div>
        ))}
      </div>
      <p className="ib-caption">Illustrative data</p>
    </div>
  );
}

/* ── The exhibit ──────────────────────────────────────────────── */

export default function InnobotSystem() {
  return (
    <section className="ib-exhibit">
      <div className="ib-exhibit-inner">
        <div className="ib-plate">
          <span className="section-label">The design system</span>
          <h2>
            I built the system before I built the <em>site.</em>
          </h2>
          <p>
            Everything inside the frame below is Innobot&rsquo;s own brand, rebuilt here from its
            source of truth and running live on this page rather than screenshotted. It sits in its
            own container deliberately: this is their design language on display, not mine.
          </p>
        </div>

        <div className="ib-frame">
          <div className="ib-chrome">
            <div className="ib-chrome-dots">
              <span />
              <span />
              <span />
            </div>
            <span className="ib-chrome-url">innobothealth.com · design system</span>
          </div>

          <div className={`ib-sys ${syne.variable} ${fraunces.variable} ${plexMono.variable}`}>
            {/* Intro */}
            <div className="ib-block">
              <span className="ib-label">The brief</span>
              <h2 className="ib-h">
                One system, <em>every surface.</em>
              </h2>
              <p className="ib-body">
                Innobot sells revenue cycle automation into hospital finance. The committee is
                sceptical by default, the cycle is long, and the first thing anyone judges is
                whether the company looks like it can be trusted with their claims.
              </p>
              <p className="ib-body">
                So the surface could not look like a guess. I wrote the system first and built the
                site on top of it, which is the only reason one person can keep this many pages
                coherent and still ship a new one in an afternoon.
              </p>
            </div>

            {/* The law */}
            <div className="ib-block">
              <span className="ib-label">01 · The law</span>
              <h2 className="ib-h">
                Rules, with <em>reasons attached.</em>
              </h2>
              <p className="ib-body">
                A design system is not a colour palette. It is the set of arguments nobody has to
                have twice. Every rule below is written with the reason next to it, because a rule
                without a reason gets broken the first time it is inconvenient.
              </p>
              <ul className="ib-rules">
                {LAW.map((r, i) => (
                  <li className="ib-rule" key={i}>
                    <span className="ib-rule-n">{String(i + 1).padStart(2, "0")}</span>
                    <p className="ib-rule-t">{r}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palette */}
            <div className="ib-block">
              <span className="ib-label">02 · Palette</span>
              <h2 className="ib-h">
                Colour that <em>means something.</em>
              </h2>
              <p className="ib-body">
                Six values carry the whole site. Three hold structure, three hold state, and state
                colour is never decorative. Once colour carries meaning, an operations dashboard
                reads at a glance and nobody has to learn a legend to use it.
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

            {/* Type */}
            <div className="ib-block">
              <span className="ib-label">03 · Type</span>
              <h2 className="ib-h">
                Three voices, <em>one page.</em>
              </h2>
              <p className="ib-body">
                Fraunces carries the display line, kept light, with italic reserved for the one word
                that matters. Syne runs the interface. IBM Plex Mono handles labels, identifiers and
                numbers. A reader never has to work out which register they are in.
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

            {/* Controls */}
            <div className="ib-block">
              <span className="ib-label">04 · Controls</span>
              <h2 className="ib-h">
                Two buttons. <em>That is the whole set.</em>
              </h2>
              <p className="ib-body">
                A primary and a ghost, both fully round, and a mono label pill in three states. Any
                more than this and a page starts offering the reader choices instead of a next step.
                The primary carries a sliding arrow so the action reads as movement.
              </p>
              <div className="ib-controls">
                <button type="button" className="ib-btn">
                  Request a demo
                </button>
                <button type="button" className="ib-btn-ghost">
                  Explore the platform
                </button>
                <span className="ib-badge">
                  <span className="ib-dot" />
                  Live
                </span>
                <span className="ib-pill is-value">Cleared</span>
                <span className="ib-pill is-human">Needs review</span>
                <span className="ib-pill is-blocked">Blocked</span>
              </div>
            </div>

            {/* Glass */}
            <div className="ib-block">
              <span className="ib-label">05 · Surface</span>
              <h2 className="ib-h">
                Glass, <em>done properly.</em>
              </h2>
              <p className="ib-body">
                Cards are translucent over a teal mist that advances as you scroll. It looks like a
                styling choice and it is closer to a browser-internals problem: blur refuses to
                composite inside a fixed ancestor, a finished entrance animation quietly kills the
                blur behind the nav, and the build tool drops half the webkit pair depending on
                declaration order.
              </p>
              <p className="ib-body">
                Each of those cost a day to find. The cards below use the real mechanism, not a
                picture of it.
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
                <p className="ib-caption">Illustrative figures</p>
              </div>
            </div>

            {/* Bento */}
            <div className="ib-block">
              <span className="ib-label">06 · Bento</span>
              <h2 className="ib-h">
                One card, <em>many shapes.</em>
              </h2>
              <p className="ib-body">
                The service pages are built from a twelve column bento. One card definition spans
                different widths and frames a different product view inside the same inner panel, so
                a page can be composed rather than designed. Hover any card: the border warms, it
                lifts three pixels, a teal bloom comes in from the top and a hairline sweeps across
                the bottom.
              </p>
              <div className="ib-bento">
                <div className="ib-bento-card is-wide">
                  <span className="ib-bento-icon">01</span>
                  <h3 className="ib-bento-title">Eligibility, checked before the visit</h3>
                  <p className="ib-bento-desc">
                    The wide card carries a full product view. Rows use the same state colours as
                    everything else.
                  </p>
                  <div className="ib-bento-preview">
                    <div className="ib-row">
                      <span className="ib-row-k">Coverage active</span>
                      <span className="ib-row-v is-value">Verified</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">Plan mismatch</span>
                      <span className="ib-row-v is-human">Review</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">Payer unreachable</span>
                      <span className="ib-row-v is-blocked">Blocked</span>
                    </div>
                    <div className="ib-pills">
                      <span className="ib-pill">Aetna</span>
                      <span className="ib-pill">BCBS</span>
                      <span className="ib-pill">Cigna</span>
                    </div>
                  </div>
                </div>

                <div className="ib-bento-card is-narrow">
                  <span className="ib-bento-icon">02</span>
                  <h3 className="ib-bento-title">Clean claim rate</h3>
                  <p className="ib-bento-desc">
                    The narrow card carries one number and nothing else.
                  </p>
                  <div className="ib-bento-preview">
                    <span className="ib-stat-big">98.2%</span>
                    <span className="ib-bar">
                      <span style={{ width: "98%" }} />
                    </span>
                    <p className="ib-caption">Illustrative</p>
                  </div>
                </div>

                <div className="ib-bento-card is-half">
                  <span className="ib-bento-icon">03</span>
                  <h3 className="ib-bento-title">Denials, worked by reason code</h3>
                  <p className="ib-bento-desc">
                    Half width, list view. Density is capped at eight rows on purpose.
                  </p>
                  <div className="ib-bento-preview">
                    <div className="ib-row">
                      <span className="ib-row-k">CO-97 bundled</span>
                      <span className="ib-row-v">42</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">CO-16 missing info</span>
                      <span className="ib-row-v">28</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">PR-204 not covered</span>
                      <span className="ib-row-v is-human">11</span>
                    </div>
                  </div>
                </div>

                <div className="ib-bento-card is-half">
                  <span className="ib-bento-icon">04</span>
                  <h3 className="ib-bento-title">Posting, reconciled nightly</h3>
                  <p className="ib-bento-desc">
                    Same card, same inner panel, a different view. Nothing bespoke.
                  </p>
                  <div className="ib-bento-preview">
                    <div className="ib-row">
                      <span className="ib-row-k">Remits matched</span>
                      <span className="ib-row-v is-value">1,204</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">Variance flagged</span>
                      <span className="ib-row-v is-human">7</span>
                    </div>
                    <div className="ib-row">
                      <span className="ib-row-k">Unapplied cash</span>
                      <span className="ib-row-v">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="ib-caption">Illustrative data throughout</p>
            </div>

            {/* The claim film */}
            <div className="ib-block">
              <span className="ib-label">07 · The claim film</span>
              <h2 className="ib-h">
                One claim, <em>followed all the way through.</em>
              </h2>
              <p className="ib-body">
                The hardest thing to explain about this product is that it is not one feature, it is
                a path. So the page does not describe the path, it runs it: a single claim enters at
                the top and you watch the same record move through five stages as you scroll. Not
                five panels swapping over, one continuous shot.
              </p>
              <p className="ib-body">
                That is the system&rsquo;s own rule about recognising before transforming, applied at
                page scale. Because the card never gets replaced, nobody has to re-find their place,
                and the argument lands without a word of explanation.
              </p>

              <dl className="ib-record">
                {RECORD.map((r) => (
                  <div key={r.k}>
                    <dt>{r.k}</dt>
                    <dd className={r.good ? "is-value" : undefined}>{r.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="ib-stages">
                {STAGES.map((s) => (
                  <div className="ib-stage" key={s.n}>
                    <span className="ib-stage-n">{s.n}</span>
                    <h3 className="ib-stage-t">{s.t}</h3>
                    <p className="ib-stage-d">{s.d}</p>
                    <ul className="ib-stage-list">
                      {s.items.map((it, i) => (
                        <li
                          key={it}
                          className={s.human && i === s.items.length - 1 ? "is-human" : undefined}
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="ib-caption">Illustrative record · transcribed from the live claim flow</p>
            </div>

            {/* Agents */}
            <div className="ib-block">
              <span className="ib-label">08 · The agents</span>
              <h2 className="ib-h">
                Five levels of support, <em>and a colour each.</em>
              </h2>
              <p className="ib-body">
                Automation is sold as a binary and it never is one. The platform tries five methods
                in order, cheapest and most reliable first, and falls down the ladder only when a
                level fails. Showing the ladder honestly is a better argument than claiming full
                automation, because the buyer already knows full automation is not real.
              </p>
              <p className="ib-body">
                Each method carries its own ink, and those four hexes are sourced rather than
                chosen: they are the same colours the platform publishes its processing mix in. The
                last rung is amber, because amber means a human is needed, and that is exactly what
                it means here too.
              </p>
              <div className="ib-agents">
                {AGENTS.map((a) => (
                  <div className="ib-agent" key={a.n}>
                    <span className="ib-agent-ink" style={{ background: a.ink }} />
                    <span className="ib-agent-n">{a.n}</span>
                    <span className="ib-agent-d">{a.d}</span>
                    <span className="ib-pill">{a.ink}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts */}
            <div className="ib-block">
              <span className="ib-label">09 · Data visualisation</span>
              <h2 className="ib-h">
                Same geometry, <em>opposite story.</em>
              </h2>
              <p className="ib-body">
                The problem chart and the outcome chart are the same six curves. Identical paths,
                identical grid, identical endpoints. Only the colour ramp and the legend change. A
                reader recognises the second chart instantly as the first one inverted, which is the
                entire argument the page is making, delivered before they read a word.
              </p>
              <div className="ib-charts">
                <div className="ib-chart-card">
                  <div className="ib-chart-head">
                    <h3 className="ib-chart-title">Without automation</h3>
                    <span className="ib-pill is-blocked">Drifting</span>
                  </div>
                  <TrendChart
                    variant="pain"
                    legend={["Days in A/R", "Denial rate", "Rework hours", "Cost to collect", "Write-offs", "Backlog"]}
                  />
                </div>
                <div className="ib-chart-card">
                  <div className="ib-chart-head">
                    <h3 className="ib-chart-title">With IRIS</h3>
                    <span className="ib-pill is-value">Improving</span>
                  </div>
                  <TrendChart
                    variant="outcomes"
                    legend={["Clean claims", "First-pass yield", "Staff capacity", "Cash velocity", "Net collection", "Throughput"]}
                  />
                </div>
              </div>
              <p className="ib-caption">Illustrative shapes · not performance claims</p>
            </div>

            {/* Platform dashboards */}
            <div className="ib-block">
              <span className="ib-label">10 · Dashboards</span>
              <h2 className="ib-h">
                Every panel ships with <em>its own caveat.</em>
              </h2>
              <p className="ib-body">
                The platform and service pages are mostly dashboards, and the discipline that makes
                them credible is not the styling. It is that each one carries a note limiting what it
                claims. A submission is not an approval. A passed check is not a payment. Coverage
                confirmed for a visit does not guarantee it gets paid.
              </p>
              <p className="ib-body">
                Writing the caveat into the component, rather than leaving it to whoever fills the
                panel in, is the difference between a dashboard a hospital CFO trusts and one they
                quietly discount. It costs conversions on the page and wins them in the room.
              </p>

              <div className="ib-dash">
                <div className="ib-panel">
                  <div className="ib-panel-h">
                    <h3 className="ib-panel-t">A/R Aging</h3>
                    <span className="ib-panel-s">$28M outstanding · Illustrative</span>
                  </div>
                  <ul className="ib-bars">
                    {AR_AGING.map((a) => (
                      <li key={a.bucket}>
                        <span className="ib-bars-top">
                          {a.bucket}
                          <strong>{a.amount}</strong>
                        </span>
                        <span className="ib-track">
                          <i style={{ width: `${a.v * 100}%` }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="ib-note">
                    <b>Note.</b> Aging reflects billed balances, not expected collections. A bucket
                    shrinking is not the same as cash arriving.
                  </p>
                </div>

                <div className="ib-panel">
                  <div className="ib-panel-h">
                    <h3 className="ib-panel-t">Processing mix</h3>
                    <span className="ib-panel-s">1,000 work items · Illustrative</span>
                  </div>
                  <ul className="ib-bars">
                    {MIX.map((m) => (
                      <li key={m.label}>
                        <span className="ib-bars-top">
                          {m.label}
                          <strong>{m.pct}</strong>
                        </span>
                        <span className="ib-track">
                          <i style={{ width: `${m.n}%`, background: m.ink }} />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="ib-note">
                    <b>Note.</b> Ten percent stays manual by design. A mix that claimed zero would be
                    the least believable number on the page.
                  </p>
                </div>

                <div className="ib-panel">
                  <div className="ib-panel-h">
                    <h3 className="ib-panel-t">Claim outcomes</h3>
                    <span className="ib-panel-s">100 claims in sample · Illustrative</span>
                  </div>
                  <div className="ib-stack">
                    {OUTCOMES.map((o) => (
                      <span key={o.label} style={{ width: `${o.n}%`, background: o.ink }} />
                    ))}
                  </div>
                  <div className="ib-legend">
                    {OUTCOMES.map((o) => (
                      <span key={o.label}>
                        <i style={{ background: o.ink }} />
                        {o.label} {o.n}
                      </span>
                    ))}
                  </div>
                  <p className="ib-note">
                    <b>Note.</b> Paid and partially paid are counted separately on purpose. Merging
                    them is the most common way this chart gets used to mislead.
                  </p>
                </div>

                <div className="ib-panel">
                  <div className="ib-panel-h">
                    <h3 className="ib-panel-t">Operating metrics</h3>
                    <span className="ib-panel-s">Illustrative</span>
                  </div>
                  <div className="ib-tiles">
                    {TILES.map((t) => (
                      <div className="ib-tile" key={t.l}>
                        <span className="ib-tile-v">{t.v}</span>
                        <span className="ib-tile-l">{t.l}</span>
                      </div>
                    ))}
                  </div>
                  <p className="ib-note">
                    <b>Note.</b> Every figure on this page is illustrative. None of it is a
                    performance claim, and the system labels it that way so nobody has to ask.
                  </p>
                </div>
              </div>
            </div>

            {/* Product surfaces */}
            <div className="ib-block">
              <span className="ib-label">11 · Product surfaces</span>
              <h2 className="ib-h">
                Showing the product <em>without a screenshot.</em>
              </h2>
              <p className="ib-body">
                Screenshots age badly and leak real data. Every product view on the site is built
                from the same design tokens as the page around it, so the product always looks
                current and never shows a patient. On the left, the eight revenue cycle workflows
                converging on one engine. On the right, a multi-facility board built from the same
                rows, bars and mono labels as everything else.
              </p>
              <div className="ib-duo">
                <IrisFlow />
                <FacilityBoard />
              </div>
            </div>

            {/* Scale */}
            <div className="ib-block">
              <span className="ib-label">12 · Scale</span>
              <h2 className="ib-h">
                The system had to <em>hold.</em>
              </h2>
              <p className="ib-body">
                Eight automated service pages, three audience pages, the platform, and the blog,
                case studies, careers, whitepapers and trust pages behind them. Built on Next.js 16
                and React 19. Page families share one component set and one scoped stylesheet, so a
                change to a card lands everywhere at once instead of in eleven places by hand.
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

            <p className="ib-closer">The site is the argument. It has to look like the product works.</p>
            <a
              className="ib-visit"
              href="https://innobothealth.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit innobothealth.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
