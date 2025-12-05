export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        <img
          src="/images/dining.jpg"   // Public folder path
          alt="Carmello's Restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl font-serif text-gold mb-4 drop-shadow-xl">
            Carmello’s Restaurant & Wine Bar
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Exquisite Northern Italian cuisine served with timeless elegance for over 33 years.
          </p>
        </div>
      </section>


      {/* OUR STORY SECTION */}
      <section className="bg-black text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-gold mb-10">
            Our Story
          </h2>

          <p className="text-xl leading-relaxed text-gray-200 mb-6">
            Carmello’s Restaurant & Wine Bar has proudly stood as Charlottesville’s premier
            destination for authentic Italian dining for over 31 unforgettable years. Our story 
            begins with the cherished family recipes of founders Bill and Stella Hedges, whose 
            culinary traditions trace back to the rustic, breathtaking landscapes of northern Italy.
          </p>

          <p className="text-xl leading-relaxed text-gray-200 mb-6">
            At Carmello’s, we remain devoted to crafting exquisite Northern Italian cuisine, 
            prepared with time-honored methods and served within an atmosphere that beautifully 
            blends rustic charm with refined elegance. Our wine connoisseurs have meticulously 
            curated an exceptional list, showcasing standout vintages from renowned regions 
            across the globe.
          </p>

          <p className="text-xl leading-relaxed text-gray-200 mb-6">
            Yet, what truly sets Carmello’s apart is our unwavering commitment to preserving the 
            warm, family-owned character that has defined us for decades. Many of our guests 
            become familiar friends — often greeted by name — and building lasting relationships 
            with our patrons remains one of our greatest joys.
          </p>

          <p className="text-xl leading-relaxed text-gray-200">
            We invite you to discover for yourself why Carmello’s continues to be celebrated as 
            Charlottesville’s foremost Italian dining experience. We look forward to welcoming 
            you and sharing our passion for fine food, exceptional wine, and genuine hospitality.
          </p>

        </div>
      </section>

    </div>
  );
}
