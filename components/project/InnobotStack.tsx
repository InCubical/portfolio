import "@/app/innobot-stack.css";

/* The acquisition stack built and operated at Innobot Health.
   Tool names live inside the structured rails rather than in prose:
   the paragraphs stay at system level, the rails carry the evidence. */

type Tool = { label: string; current?: boolean; replaced?: boolean };

const LAYERS: { name: string; desc: string; tools: Tool[] }[] = [
  {
    name: "Measurement",
    desc: "Nothing was being measured, so nothing could be argued about. This went in first, because every decision after it depends on being able to tell what actually happened.",
    tools: [
      { label: "Google Analytics 4" },
      { label: "Search Console" },
      { label: "Tag Manager" },
      { label: "Microsoft Clarity" },
    ],
  },
  {
    name: "Demand",
    desc: "Performance media and an organic programme that compounds, both pointed at surfaces built to receive them rather than at a homepage.",
    tools: [
      { label: "Google Ads" },
      { label: "Organic search" },
      { label: "The web layer" },
    ],
  },
  {
    name: "Outbound",
    desc: "Signal based sequences across email and professional networks, aimed only at the accounts and the titles worth having.",
    tools: [
      { label: "Instantly", current: true },
      { label: "Valley", current: true },
      { label: "Expandi", replaced: true },
    ],
  },
  {
    name: "Pipeline",
    desc: "Where a reply stops being a reply and becomes an opportunity somebody owns, with the context already attached to it.",
    tools: [
      { label: "Monday.com CRM", current: true },
      { label: "HubSpot", replaced: true },
    ],
  },
  {
    name: "Proof",
    desc: "The content that closes rather than the content that decorates. A prospect sees their own workflow automated, in a video made for them.",
    tools: [
      { label: "HeyGen" },
      { label: "ElevenLabs" },
      { label: "Higgsfield" },
    ],
  },
];

const DECISIONS = [
  {
    from: "HubSpot",
    to: "Monday.com",
    desc: "The CRM was not the constraint on paper and was very much the constraint in practice. Moving a live pipeline between systems is unglamorous, risky, and the right call when the tool is shaping the process instead of serving it.",
  },
  {
    from: "Expandi",
    to: "Valley",
    desc: "Outbound on professional networks ran on one platform until the use cases outgrew it. I moved the motion across rather than defending the original choice, because the sequence matters and the software running it does not.",
  },
];

const FUNNEL = [
  {
    n: "01",
    t: "Demand capture",
    d: "Search, performance media and outbound all running into one path rather than three.",
  },
  {
    n: "02",
    t: "Conversion surface",
    d: "The site, plus a landing experience per campaign that finishes the sentence the ad started.",
  },
  {
    n: "03",
    t: "Reply",
    d: "Sequences answered by a person, intent read, the thread kept warm while the cycle runs long.",
  },
  {
    n: "04",
    t: "Qualification",
    d: "Separating a polite reply from a real opportunity before anyone spends a call on it.",
  },
  {
    n: "05",
    t: "Demo",
    d: "Handed to the sales team with the account, the problem and the history already attached.",
  },
  {
    n: "06",
    t: "Proof",
    d: "A video built for that prospect, showing the agents we would run on their own workflow.",
  },
];

export default function InnobotStack() {
  return (
    <section className="st-sec">
      <div className="st-inner">
        <div className="st-head">
          <span className="section-label">The stack</span>
          <h2 className="st-h">
            I inherited a WordPress site. <em>Nothing else.</em>
          </h2>
          <p className="st-p">
            No analytics, no tag management, no CRM worth the name, no outbound, no paid
            programmes, no measurement of any kind. There was a website, and there was a sales
            team, and between those two things there was nothing at all.
          </p>
          <p className="st-p">
            Everything below I chose, wired together and still operate. Not a plan I handed to an
            agency. The actual stack, running in production, for a US revenue cycle company selling
            into hospital finance.
          </p>
        </div>

        <div className="st-ba">
          <div className="st-ba-col">
            <span className="st-ba-k">Day one</span>
            <h3 className="st-ba-t">A WordPress site and a sales team</h3>
            <p className="st-ba-d">
              The site was the whole marketing function. Nobody could say where a lead came from,
              because nothing was instrumented to answer the question. There was no way to be wrong
              on purpose, which sounds comfortable and is actually the problem.
            </p>
          </div>
          <div className="st-ba-col is-after">
            <span className="st-ba-k">Now</span>
            <h3 className="st-ba-t">A full funnel with one owner</h3>
            <p className="st-ba-d">
              Demand capture, conversion architecture, outbound at scale, a CRM the process fits,
              measurement that survives scrutiny, and a content pipeline that produces the proof
              which closes the deal. One person owns the whole path, and a team I hired runs inside
              it.
            </p>
          </div>
        </div>

        <div className="st-layers">
          {LAYERS.map((l) => (
            <div className="st-layer" key={l.name}>
              <h3 className="st-layer-n">{l.name}</h3>
              <p className="st-layer-d">{l.desc}</p>
              <div className="st-tools">
                {l.tools.map((t) => (
                  <span
                    key={t.label}
                    className={`st-tool${t.current ? " is-current" : ""}${
                      t.replaced ? " is-replaced" : ""
                    }`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="st-head">
          <h2 className="st-h">
            Two of these are <em>replacements.</em>
          </h2>
          <p className="st-p">
            Picking a tool is easy and everybody does it. Deciding a year in that it is the wrong
            one, and moving a live pipeline onto something better without losing a week of
            production, is the part that is actually the job. Both of these were my call.
          </p>
        </div>

        <div className="st-calls">
          {DECISIONS.map((d) => (
            <div className="st-call" key={d.from}>
              <div className="st-call-move">
                <span className="st-tool is-replaced">{d.from}</span>
                <span className="st-call-arrow">→</span>
                <span className="st-tool is-current">{d.to}</span>
              </div>
              <p className="st-call-d">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="st-head">
          <h2 className="st-h">
            Then it stopped being a <em>one person problem.</em>
          </h2>
          <p className="st-p">
            I edited the video myself before there was anybody to edit it. That works right up until
            the volume makes it the most expensive hour in the week, so I hired editors, built the
            pipeline they work inside, and now I direct it instead of doing it.
          </p>
          <p className="st-p">
            The pipeline itself is the interesting part. A cloned voice and a pixel accurate
            presenter let us put our CEO in a video made for one prospect, with generated b-roll
            behind her, in the time it used to take to schedule a shoot. That is what goes out after
            a demo, and it is why the proof arrives while the conversation is still warm.
          </p>
        </div>

        <div className="st-funnel">
          {FUNNEL.map((f) => (
            <div className="st-step" key={f.n}>
              <span className="st-step-n">{f.n}</span>
              <h3 className="st-step-t">{f.t}</h3>
              <p className="st-step-d">{f.d}</p>
            </div>
          ))}
        </div>

        <p className="st-closer">
          One person, whole funnel, first touch to <em>booked meeting.</em>
        </p>
      </div>
    </section>
  );
}
