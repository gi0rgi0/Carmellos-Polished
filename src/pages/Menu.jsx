export default function Menu(){
  const appetizers = [{'name': 'Baked Brie', 'desc': 'almonds, amaretto, honey', 'price': '$12'}, {'name': 'Stuffed Mushroom Caps', 'desc': 'backfin crabmeat stuffing, button mushrooms, butter', 'price': '$15'}, {'name': 'Clams Casino', 'desc': 'butter, bacon, bell pepper, top neck clams', 'price': '$15'}, {'name': 'Carciofi Fritti', 'desc': 'artichoke hearts, mozzarella, lightly breaded, tomato sauce', 'price': '$12'}, {'name': 'Insalate Caprese', 'desc': 'sliced tomato, mozzarella, olive oil, balsamic reduction', 'price': '$12'}, {'name': 'Mussels', 'desc': 'white wine sauce or red sauce', 'price': '$13'}];
  const soups = [{'name': 'Tortellini en Brodo', 'desc': 'chicken broth, veal stuffed tortellini', 'price': '$8'}, {'name': 'Stracciatella alla Romana', 'desc': 'scrambled egg, chicken broth, spinach, Parmigiano', 'price': '$8'}, {'name': 'Zuppa del Giorno', 'desc': 'soup of the day', 'price': '$9'}];
  const salads = [{'name': 'Insalata della Casa', 'desc': 'mixed greens, grape tomatoes, chickpeas, Kalamata olives, creamy Italian dressing', 'price': '$7'}, {'name': 'Caesar Salad', 'desc': 'chopped romaine, Parmigiano, croutons, Caesar dressing', 'price': '$9'}];
  const entrees = [{'name': 'Ravioli Cardinale Con Aragosta', 'desc': 'lobster-filled ravioli, crema rosa sauce, caviar, jumbo lump crabmeat', 'price': '$34'}, {'name': 'Cannelloni Alla Toscana', 'desc': 'seasoned ground veal, pasta shells, mozzarella, cream sauce', 'price': '$23'}, {'name': 'Tortellini con Panna', 'desc': 'seasoned veal tortellini, cream sauce, peas, mushrooms, prosciutto', 'price': '$23'}, {'name': 'Linguine Pescatore', 'desc': 'homemade linguini, mussels, clams, bay scallops, shrimp, calamari, marinara sauce', 'price': '$35'}, {'name': 'Scampi Gamberi', 'desc': 'homemade linguine, jumbo shrimp, garlic, lemon, parsley, white wine, butter', 'price': '$28'}, {'name': 'Carne Carmello', 'desc': 'veal ($26) or chicken ($23), peas, mushrooms, diced tomato, spring onions, marsala wine sauce, capellini', 'price': 'Varies'}, {'name': 'Lasagna Bolognese', 'desc': 'sheet pasta, bolognese meat sauce, ricotta cheese, mozzarella', 'price': '$20'}, {'name': 'Ravioli Fiorentini', 'desc': 'cheese-filled ravioli, cream sauce, spinach', 'price': '$20'}, {'name': 'Parmigiana', 'desc': 'chicken ($23), veal ($25), eggplant ($20), lightly breaded, tomato sauce, mozzarella cheese', 'price': 'Varies'}, {'name': 'Saltimbocca alla Romana', 'desc': 'veal medallions, sage, prosciutto, mozzarella, demi-glace', 'price': '$28'}];
  const desserts = [{'name': 'Tiramisu', 'desc': 'espresso-soaked ladyfingers, mascarpone cream, chocolate', 'price': '$9'}, {'name': 'Lemon Berry Mascarpone Cake', 'desc': 'lemon, berry, mascarpone', 'price': '$9'}, {'name': 'Limoncello Cake', 'desc': 'lemon sponge with limoncello cream', 'price': '$9'}, {'name': 'Chocolate Mousse Cake', 'desc': 'rich chocolate mousse', 'price': '$9'}, {'name': 'Black Forest Cake', 'desc': 'chocolate, cherry, whipped cream', 'price': '$9'}, {'name': 'Strawberry Vanilla Mousse Cake', 'desc': 'strawberry + vanilla mousse', 'price': '$9'}, {'name': 'Cannoli Siciliana', 'desc': 'crispy shell with sweet ricotta filling', 'price': '$9'}, {'name': 'N.Y. Style Cheesecake', 'desc': 'classic cheesecake', 'price': '$9'}, {'name': 'Gelato', 'desc': 'Italian ice cream', 'price': '$9'}];

  const Section = ({title,items}) => (
    <div className="mb-12">
      <h2 className="text-3xl font-serif text-gold mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((i,idx)=>(
          <div key={idx} className="flex justify-between border-b border-gold/20 pb-2">
            <div>
              <h3 className="text-xl font-semibold">{i.name}</h3>
              <p className="text-gray-300 text-sm">{i.desc}</p>
            </div>
            <div className="text-gold text-lg ml-4 whitespace-nowrap">{i.price}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen pt-20 px-6 container mx-auto">
      <h1 className="text-5xl font-serif text-gold mb-10 text-center">Menu</h1>
      <Section title="Appetizers" items={appetizers}/>
      <Section title="Soups" items={soups}/>
      <Section title="Salads" items={salads}/>
      <Section title="Entrées" items={entrees}/>
      <Section title="Desserts" items={desserts}/>
    </div>
  );
}
