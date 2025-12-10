import { Helmet } from "react-helmet";
import useReveal from "../hooks/useReveal";

export default function Home() {
  const heroRef = useReveal();
  const storyRef = useReveal();

  return (
    <>
      <Helmet>
        <title>Carmello’s Restaurant & Wine Bar | Fine Italian Dining in Charlottesville</title>
        <meta
          name="description"
          content="Exquisite Northern Italian cuisine in Charlottesville for over 31 years. Enjoy handcrafted dishes, refined wines, and warm hospitality."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[85vh] flex items-center justify-center text-white"
      >
        <img
          src="/images/dining.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-serif text-gold mb-6 drop-shadow-lg">
            Carmello’s Restaurant & Wine Bar
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Charlottesville’s premier destination for fine Northern Italian cuisine.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        ref={storyRef}
        className="py-24 px-6 max-w-5xl mx-auto text-white text-center"
      >
        <h2 className="text-5xl font-serif text-gold mb-10">Our Story</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Carmello’s Restaurant & Wine Bar has proudly held the title of
          Charlottesville’s premier Italian dining establishment for a
          remarkable 31 years. Our legacy is rooted in the time-honored recipes
          of the restaurant’s founders, Bill and Stella Hedges, originating from
          the rustic landscapes of northern Italy.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          Our wine aficionados have meticulously curated an extensive list,
          showcasing some of the finest vintages from around the globe. One of
          the hallmarks of Carmello’s is our unwavering commitment to preserving
          our family-owned character throughout the years.
        </p>

        <p className="text-xl text-gray-300 leading-relaxed mt-6">
          We cordially invite you to experience firsthand why we’ve earned a
          reputation as Charlottesville’s preeminent Italian dining destination.
          We eagerly anticipate the opportunity to delight you with our culinary
          offerings and warm hospitality.
        </p>
      </section>
    </>
  );
}
