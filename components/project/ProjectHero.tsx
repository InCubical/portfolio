import Container from "../Container";
import LineReveal from "../LineReveal";

export default function ProjectHero({
  title,
  image,
  background,
  tone = "light",
}: {
  title: string;
  image: string;
  /** CSS background shorthand, used instead of `image` when supplied. */
  background?: string;
  /** `dark` flips the title to light type for dark-ground heroes. */
  tone?: "light" | "dark";
}) {
  return (
    <section
      id="slider"
      className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={background ? { background } : { backgroundImage: `url('${image}')` }}
      />
      {!background && <div className="absolute inset-0 bg-black/10" />}

      <Container className="relative z-10">
        <div className="text-center">
          <h2
            className="hero-display"
            style={{
              fontSize: "clamp(48px, 8vw, 100px)",
              ...(tone === "dark" ? { color: "#f0fafa" } : null),
            }}
          >
            <LineReveal animateOnLoad lines={[title]} />
          </h2>
        </div>
      </Container>

      {/* Decorative slider controls (single slide) */}
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-3xl text-white/80">
        <i className="icon-angle-left" />
      </div>
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-3xl text-white/80">
        <i className="icon-angle-right" />
      </div>
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-1 text-sm font-semibold text-white/80">
        <div>01</div>
        <span>/</span>
        <div>01</div>
      </div>
    </section>
  );
}
