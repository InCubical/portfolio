import Container from "../Container";
import LineReveal from "../LineReveal";

export default function ProjectHero({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section
      id="slider"
      className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-black/10" />

      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="hero-display" style={{ fontSize: "clamp(48px, 8vw, 100px)" }}>
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
