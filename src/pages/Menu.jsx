import { Helmet } from "react-helmet";
import useReveal from "../hooks/useReveal";

export default function Menu() {
  const appsRef = useReveal();
  const soupsRef = useReveal();
  const saladsRef = useReveal();
  const entreesRef = useReveal();
  const dessertsRef = useReveal();

  return (
    <>
      <Helmet>
        <title>Carmello’s Menu | Authentic Northern Italian Cuisine</title>
        <meta
          name="description"
          content="Explore Carmello’s handcrafted Northern Italian dishes including seafood, pasta, veal, chicken, appetizers, soups, salads, and desserts."
        />
      </Helmet>

      <div className="text-white px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-6xl font-serif text-gold text-center mb-16">
          Our Menu
        </h1>

        {/* ==========================
            APPETIZERS
        =========================== */}
        <section ref={appsRef} className="mb-20">
          <h2 className="text-4xl font-serif text-gold mb-8">Antipasti</h2>

          <MenuItem name="Baked Brie" desc="almonds, amaretto, honey" price="$12" />
          <MenuItem name="Stuffed Mushroom Caps" desc="backfin crabmeat stuffing, button mushrooms, butter" price="$15" />
          <MenuItem name="Clams Casino" desc="butter, bacon, bell pepper, top neck clams" price="$15" />
          <MenuItem name="Carciofi Fritti" desc="artichoke hearts, mozzarella, lightly breaded, tomato sauce" price="$12" />
          <MenuItem name="Insalate Caprese" desc="sliced tomato, mozzarella, olive oil, balsamic reduction" price="$12" />
          <MenuItem name="Mussels" desc="white wine sauce or red sauce" price="$13" />
        </section>

        {/* ==========================
            SOUPS
        =========================== */}
        <section ref={soupsRef} className="mb-20">
          <h2 className="text-4xl font-serif text-gold mb-8">Zuppe</h2>

          <MenuItem name="Tortellini en Brodo" desc="chicken broth, veal stuffed tortellini" price="$8" />
          <MenuItem name="Stracciatella alla Romana" desc="scrambled egg, chicken broth, spinach, Parmigiano" price="$8" />
          <MenuItem name="Zuppa del Giorno" desc="soup of the day" price="$9" />
        </section>

        {/* ==========================
            SALADS
        =========================== */}
        <section ref={saladsRef} className="mb-20">
          <h2 className="text-4xl font-serif text-gold mb-8">Insalate</h2>

          <MenuItem name="Insalata della Casa" desc="mixed greens, grape tomatoes, chickpeas, Kalamata olives, creamy Italian dressing" price="$7" />
          <MenuItem name="Caesar Salad" desc="chopped romaine, Parmigiano, croutons, Caesar dressing" price="$9" />
        </section>

        {/* ==========================
            ENTREES
        =========================== */}
        <section ref={entreesRef} className="mb-20">
          <h2 className="text-4xl font-serif text-gold mb-8">Piatti Principali</h2>

          <MenuItem name="Ravioli Cardinale Con Aragosta" desc="lobster-filled ravioli, crema rosa sauce, caviar, jumbo lump crabmeat" price="$34" />
          <MenuItem name="Cannelloni Alla Toscana" desc="seasoned ground veal, pasta shells, mozzarella, cream sauce" price="$23" />
          <MenuItem name="Tortellini con Panna" desc="seasoned veal tortellini, cream sauce, peas, mushrooms, prosciutto" price="$23" />
          <MenuItem name="Linguine Pescatore" desc="homemade linguini, mussels, clams, bay scallops, shrimp, calamari, marinara sauce" price="$35" />
          <MenuItem name="Scampi Gamberi" desc="homemade linguine, jumbo shrimp, garlic, lemon, parsley, white wine, butter" price="$28" />
          <MenuItem name="Carne Carmello" desc="veal ($26) or chicken ($23), peas, mushrooms, diced tomato, spring onions, marsala wine sauce, capellini" price="Varies" />
          <MenuItem name="Lasagna Bolognese" desc="sheet pasta, bolognese meat sauce, ricotta cheese, mozzarella" price="$20" />
          <MenuItem name="Ravioli Fiorentini" desc="cheese-filled ravioli, cream sauce, spinach" price="$20" />
          <MenuItem name="Parmigiana" desc="chicken ($23), veal ($25), eggplant ($20), lightly breaded, tomato sauce, mozzarella cheese" price="Varies" />
          <MenuItem name="Saltimbocca alla Romana" desc="veal medallions, sage, prosciutto, mozzarella, demi-glace" price="$28" />
        </section>

        {/* ==========================
            DESSERTS
        =========================== */}
        <section ref={dessertsRef} className="mb-10">
          <h2 className="text-4xl font-serif text-gold mb-8">Dolci</h2>

          <MenuItem name="Tiramisu" desc="espresso-soaked ladyfingers, mascarpone cream, chocolate" price="$9" />
          <MenuItem name="Lemon Berry Mascarpone Cake" desc="lemon, berry, mascarpone" price="$9" />
          <MenuItem name="Limoncello Cake" desc="lemon sponge with limoncello cream" price="$9" />
          <MenuItem name="Chocolate Mousse Cake" desc="rich chocolate mousse" price="$9" />
          <MenuItem name="Black Forest Cake" desc="chocolate, cherry, whipped cream" price="$9" />
          <MenuItem name="Strawberry Vanilla Mousse Cake" desc="strawberry + vanilla mousse" price="$9" />
          <MenuItem name="Cannoli Siciliana" desc="crispy shell with sweet ricotta filling" price="$9" />
          <MenuItem name="N.Y. Style Cheesecake" desc="classic cheesecake" price="$9" />
          <MenuItem name="Gelato" desc="Italian ice cream" price="$9" />
        </section>
      </div>
    </>
  );
}

/* ===============================
   MENU ITEM COMPONENT
================================*/
function MenuItem({ name, desc, price }) {
  return (
    <div className="mb-6 border-b border-gold/30 pb-4">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
        <span className="text-xl text-gold">{price}</span>
      </div>
      <p className="text-gray-300 mt-1">{desc}</p>
    </div>
  );
}
