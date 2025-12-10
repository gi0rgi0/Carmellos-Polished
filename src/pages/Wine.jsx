import { Helmet } from "react-helmet";
import useReveal from "../hooks/useReveal";

export default function Wine() {
  const ref = useReveal();

  return (
    <>
      <Helmet>
        <title>Carmello’s Wine List | Fine Italian, Global & Local Wines</title>
        <meta
          name="description"
          content="Explore Carmello’s curated wine list including premium reds, whites, rosé, sparkling wines, and champagne from Italy, Virginia, and beyond."
        />
      </Helmet>

      <div ref={ref} className="text-white px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-6xl font-serif text-gold text-center mb-16">
          Wine List
        </h1>

        {/* ================================
            RED WINES
        ================================= */}
        <WineSection title="Red Wines">
          <WineItem name="Big Cork Vineyards Cabernet Franc" price="$72" />
          <WineItem name="Paradise Springs Melange Red Blend" price="$54" />
          <WineItem name="Casale del Giglio Petit Verdo" price="$50" />
          <WineItem name="Lodali Nebbiolo D'Alba" price="$51" />
          <WineItem name="Alcesti Cabernet Sauvignon" price="$31" />
          <WineItem name="Villa Mottura Primitivo del Salento" price="$33" />
          <WineItem name="Rocche Costamagna Barbera D'Alba" price="$41" />
          <WineItem name="Castello Di Bolgheri Super Tuscan Bolgheri Superiore" price="$190" />
          <WineItem name="Ten Sisters Pinot Noir" price="$45" />
          <WineItem name="Bosco Nestore Pan Montepulciano D'Abruzzo" price="$48" />
          <WineItem name="Baracchi Super Tuscan Ardito" price="$105" />
          <WineItem name='Begali Lorenzo Valpolicella Classico Superiore Ripasso "La Cengia"' price="$39" />
          <WineItem name="Salvano Dolcetto Diano D'Alba" price="$45" />
          <WineItem name="Corte alla Flora Vino Nobile D' Montepulciano" price="$60" />
          <WineItem name="Il Borro Super Tuscan" price="$150" />
          <WineItem name="Borgo Salcetino Chianti Classico Riserva" price="$66" />
          <WineItem name="I Fabbri 'Terra di Lamole' Chianti Classico" price="$75" />
        </WineSection>

        {/* ================================
            ROSÉ WINES
        ================================= */}
        <WineSection title="Rosé Wines">
          <WineItem name="Chevalier Famaey Rosé Malbec" price="$31" />
          <WineItem name="Bricco Del Tatti Rosé Barbera" price="$30" />
        </WineSection>

        {/* ================================
            WHITE WINES
        ================================= */}
        <WineSection title="White Wines">
          <WineItem name="Vignamato Verdicchio Classico" price="$36" />
          <WineItem name="Kaltern Pinot Grigio" price="$35" />
          <WineItem name="La Cappuccina Sauvignon Blanc" price="$33" />
          <WineItem name="La Cappuccina Soave" price="$35" />
          <WineItem name="Volpetti Frascati Superiore" price="$30" />
          <WineItem name="Influence Riesling" price="$35" />
          <WineItem name="Durin Vermentino" price="$45" />
          <WineItem name='Alcesti Chardonnay "Bibesia"' price="$38" />
          <WineItem name="Barbi Orvieto Classico" price="$30" />
          <WineItem name="Casale del Giglio Viognier" price="$42" />
          <WineItem name="Salvano Gavi di Gavi" price="$41" />
          <WineItem name="Pappillon Chardonnay Mâcon-Perrone" price="$53" />
          <WineItem name='Casale del Giglio "Satrico"' price="$39" />
          <WineItem name="Lodali Chardonnay Langhe" price="$41" />
          <WineItem name="Villa Chopris Pinot Grigio" price="$48" />
          <WineItem name="Paradise Springs Chardonnay" price="$59" />
          <WineItem name='Lodali "Del Nido" Moscato d’Asti' price="$30" />
        </WineSection>

        {/* ================================
            SPARKLING & CHAMPAGNE
        ================================= */}
        <WineSection title="Sparkling & Champagne">
          <WineItem name="Babbo Prosecco Brut" price="$35" />
          <WineItem name="Brimoncourt Champagne Brut" price="$129" />
          <WineItem name="Trillo Asti Brut" price="$30" />
        </WineSection>
      </div>
    </>
  );
}

/* ===============================
   COMPONENTS
================================*/

function WineSection({ title, children }) {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-serif text-gold mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function WineItem({ name, price }) {
  return (
    <div className="border-b border-gold/30 pb-2">
      <div className="flex justify-between">
        <span className="text-xl text-white">{name}</span>
        <span className="text-xl text-gold">{price}</span>
      </div>
    </div>
  );
}
