import { IBM_Plex_Mono } from "next/font/google";
import "@/app/innobot.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ib-mono",
  display: "swap",
});

/**
 * Innobot case-study hero. The mark is painted through a CSS mask rather
 * than placed as artwork, so the palette supplies its colour and a teal
 * sweep can travel through the letterforms.
 */
export default function InnobotHero({
  title,
  eyebrow = "Design system · Brand · Full funnel demand",
}: {
  title: string;
  eyebrow?: string;
}) {
  return (
    <section className={`ibh ${plexMono.variable}`}>
      <div className="ibh-glow" aria-hidden />
      <h1 className="sr-only">{title}</h1>
      <div className="ibh-mark" role="img" aria-label={`${title} logo`} />
      <p className="ibh-eyebrow">{eyebrow}</p>
    </section>
  );
}
