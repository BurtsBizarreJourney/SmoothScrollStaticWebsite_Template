import Hero from "./components/Hero";
import ScrollPinReveal from "./components/ScrollPinReveal";
import AnimatedToggle from "./components/AnimatedToggle";
import RevealCards from "./components/RevealCards";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="section" id="reveal">
        <div className="container section-head">
          <p className="eyebrow">Reemplaza este texto</p>
          <h2>Una secuencia controlada por el scroll.</h2>
          <p>
            Esta sección se queda fija mientras avanzas el scroll, y las
            imágenes van cambiando según tu progreso — la misma técnica
            detrás de la mayoría de las páginas de producto &ldquo;cinemáticas&rdquo;.
          </p>
        </div>
        <ScrollPinReveal
          scrollLengthVh={280}
          frames={[
            { alt: "Primer fotograma de ejemplo", caption: "Fotograma 1 — reemplaza con tu imagen" },
            { alt: "Segundo fotograma de ejemplo", caption: "Fotograma 2 — reemplaza con tu imagen" },
            { alt: "Tercer fotograma de ejemplo", caption: "Fotograma 3 — reemplaza con tu imagen" },
            { alt: "Cuarto fotograma de ejemplo", caption: "Fotograma 4 — reemplaza con tu imagen" },
          ]}
        />
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Cómo funciona</p>
            <h2>Un toggle con transición animada.</h2>
          </div>
          <AnimatedToggle
            states={[
              {
                key: "estado-a",
                label: "Estado A",
                title: "Primer estado",
                description:
                  "Describe aquí el primer escenario de tu producto o servicio.",
              },
              {
                key: "estado-b",
                label: "Estado B",
                title: "Segundo estado",
                description:
                  "Describe aquí el segundo escenario — qué cambia y por qué importa.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Beneficios</p>
            <h2>Tarjetas que aparecen al hacer scroll.</h2>
          </div>
          <RevealCards
            cards={[
              {
                title: "Primer beneficio",
                description: "Explica aquí el primer punto fuerte de tu oferta.",
              },
              {
                title: "Segundo beneficio",
                description: "Explica aquí el segundo punto fuerte de tu oferta.",
              },
              {
                title: "Tercer beneficio",
                description: "Explica aquí el tercer punto fuerte de tu oferta.",
              },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
