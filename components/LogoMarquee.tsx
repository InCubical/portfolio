import type { CSSProperties } from "react";
import {
  siGoogleads,
  siGoogleanalytics,
  siGooglemarketingplatform,
  siGoogletagmanager,
  siGooglesearchconsole,
  siMeta,
  siHubspot,
  siMailchimp,
  siSemrush,
  siWordpress,
  siFigma,
  siNotion,
  siShopify,
  siWix,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siHtml5,
  siCss,
  siTailwindcss,
  siPython,
  siDjango,
  siFlask,
  siFirebase,
  siGooglecloud,
  siVercel,
} from "simple-icons";

type Item =
  | { kind: "icon"; title: string; path: string; hex: string }
  | { kind: "img"; title: string; src: string };

const icon = (i: { title: string; path: string; hex: string }): Item => ({
  kind: "icon",
  title: i.title,
  path: i.path,
  hex: `#${i.hex}`,
});

// Marketing & analytics → design → Adobe stack (real SVGs from the project's
// own asset library) → the JavaScript / Python engineering stack.
const MARKETING = [
  siGoogleads,
  siGoogleanalytics,
  siGooglemarketingplatform,
  siGoogletagmanager,
  siGooglesearchconsole,
  siMeta,
  siHubspot,
  siMailchimp,
  siSemrush,
].map(icon);

const DESIGN = [siWordpress, siFigma, siNotion, siShopify, siWix].map(icon);

const ADOBE: Item[] = [
  { kind: "img", title: "Adobe Photoshop", src: "/images/icons/4.svg" },
  { kind: "img", title: "Adobe Illustrator", src: "/images/icons/2.svg" },
  { kind: "img", title: "Adobe InDesign", src: "/images/icons/3.svg" },
  { kind: "img", title: "Adobe After Effects", src: "/images/icons/1.svg" },
  { kind: "img", title: "Adobe Premiere Pro", src: "/images/icons/5.svg" },
];

const DEV = [
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siHtml5,
  siCss,
  siTailwindcss,
  siPython,
  siDjango,
  siFlask,
  siFirebase,
  siGooglecloud,
  siVercel,
].map(icon);

const LOGOS: Item[] = [...MARKETING, ...DESIGN, ...ADOBE, ...DEV];

export default function LogoMarquee({ speed = 85 }: { speed?: number }) {
  // Two identical copies + translateX(-50%) => perfectly seamless loop.
  const track = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee" aria-hidden>
      <div
        className="marquee__track"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {track.map((l, i) => (
          <span key={i} className="logo-item" title={l.title}>
            {l.kind === "icon" ? (
              <svg viewBox="0 0 24 24" width="34" height="34" fill={l.hex} aria-hidden>
                <path d={l.path} />
              </svg>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={l.src} alt="" height={34} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
