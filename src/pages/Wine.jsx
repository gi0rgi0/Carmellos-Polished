export default function Wine() {
  const wines = [
    {name:"Big Cork Vineyards Cabernet Franc", price:"$72", type:"Cabernet Franc"},
    {name:"Paradise Springs Melange Red Blend", price:"$54", type:"Red Blend"},
    {name:"Casale del Giglio Petit Verdo", price:"$50", type:"Red Blend"},
    {name:"Lodali Nebbiolo D'Alba", price:"$51", type:"Nebbiolo"},
    {name:"Alcesti Cabernet Sauvignon", price:"$31", type:"Cabernet Sauvignon"},
    {name:"Villa Mottura Primitivo del Salento", price:"$33", type:"Primitivo"},
    {name:"Rocche Costamagna Barbera D'Alba", price:"$41", type:"Barbera"},
    {name:"Castello Di Bolgheri Super Tuscan Bolgheri Superiore", price:"$190", type:"Super Tuscan"},
    {name:"Ten Sisters Pinot Noir", price:"$45", type:"Pinot Noir"},
    {name:"Bosco Nestore Pan Montepulciano D’Abruzzo", price:"$48", type:"Montepulciano"},
    {name:"Baracchi Super Tuscan Ardito", price:"$105", type:"Super Tuscan"},
    {name:"Begali Lorenzo Valpolicella Classico Superiore Ripasso 'La Cengia'", price:"$39", type:"Ripasso"},
    {name:"Salvano Dolcetto Diano D'Alba", price:"$45", type:"Dolcetto"},
    {name:"Corte alla Flora Vino Nobile Di Montepulciano", price:"$60", type:"Montepulciano"},
    {name:"Il Borro Super Tuscan", price:"$150", type:"Super Tuscan"},
    {name:"Borgo Salcetino Chianti Classico Riserva", price:"$66", type:"Chianti"},
    {name:"I Fabbri 'Terra di Lamole' Chianti Classico", price:"$75", type:"Chianti"},
    {name:"Chevalier Famaey Rose Malbec", price:"$31", type:"Rosé"},
    {name:"Bricco Del Tatti Rose Barbera", price:"$30", type:"Rosé"}
  ];

  const groups = {};
  wines.forEach(w => {
    if (!groups[w.type]) groups[w.type] = [];
    groups[w.type].push(w);
  });

  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 container mx-auto">
      <h1 className="text-5xl font-serif text-gold mb-12 text-center">
        Wine List
      </h1>

      {Object.keys(groups).map(type => (
        <div key={type} className="mb-12">
          <h2 className="text-3xl font-serif text-gold mb-4 border-l-4 border-gold pl-4">
            {type}
          </h2>

          <div className="space-y-4">
            {groups[type].map((wine, i) => (
              <div key={i} className="flex justify-between border-b border-gold/20 pb-2">
                <span className="text-lg">{wine.name}</span>
                <span className="text-gold text-lg">{wine.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
