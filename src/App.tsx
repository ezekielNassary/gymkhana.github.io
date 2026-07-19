import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Beer, 
  Wine, 
  GlassWater, 
  Compass, 
  AlertTriangle, 
  CreditCard, 
  Search,
  LucideIcon
} from 'lucide-react';

interface MenuItemType {
  name: string;
  tot: string;
  bottle: string;
}

interface MenuDataType {
  [key: string]: MenuItemType[];
}

// Menu Data
const menuData: MenuDataType = {
  WHISKY: [
    { name: "JW Red Label 750ml", tot: "4,000", bottle: "80,000" },
    { name: "JW Black Label 750ml", tot: "6,000", bottle: "135,000" },
    { name: "Jameson 750ml", tot: "4,000", bottle: "80,000" },
    { name: "Jack Daniel's 700ml", tot: "6,000", bottle: "120,000" },
    { name: "Glenfiddich 12 Years 750ml", tot: "7,000", bottle: "150,000" },
    { name: "Glenfiddich 15 Years 750ml", tot: "8,000", bottle: "200,000" },
    { name: "Singleton 12 Years 750ml", tot: "6,000", bottle: "120,000" },
    { name: "Singleton 15 Years 750ml", tot: "8,000", bottle: "200,000" },
    { name: "Monkey Shoulder 700ml", tot: "6,000", bottle: "120,000" },
    { name: "Jameson Black Barrel 750ml", tot: "6,000", bottle: "130,000" },
    { name: "Ballantine 750ml", tot: "4,000", bottle: "70,000" },
    { name: "Ballantine 200ml", tot: "-", bottle: "25,000" },
    { name: "JW Black Label 200ml", tot: "-", bottle: "30,000" },
    { name: "Jameson 200ml", tot: "-", bottle: "30,000" },
  ],
  GIN: [
    { name: "Gordon's", tot: "4,000", bottle: "70,000" },
    { name: "Gordon's (S)", tot: "-", bottle: "20,000" },
    { name: "Tanqueray", tot: "4,000", bottle: "75,000" },
    { name: "Bombay Sapphire", tot: "5,000", bottle: "100,000" },
    { name: "Hendrick's Gin", tot: "6,000", bottle: "130,000" },
    { name: "Konyagi", tot: "-", bottle: "8,000" },
  ],
  VODKA: [
    { name: "Smirnoff Vodka", tot: "3,000", bottle: "65,000" },
    { name: "Absolut Vodka", tot: "4,000", bottle: "70,000" },
    { name: "Smirnoff Vodka (Small)", tot: "-", bottle: "17,000" },
  ],
  COGNAC: [
    { name: "Hennessy VS", tot: "7,000", bottle: "140,000" },
    { name: "Hennessy VSOP", tot: "9,500", bottle: "215,000" },
    { name: "Rémy Martin VSOP", tot: "4,000", bottle: "85,000" },
    { name: "Martell VSOP", tot: "4,000", bottle: "85,000" },
    { name: "Napolion", tot: "4,000", bottle: "85,000" },
  ],
  RUM: [
    { name: "Captain Morgan Dark", tot: "3,000", bottle: "65,000" },
    { name: "Captain Morgan Spiced", tot: "3,000", bottle: "65,000" },
    { name: "Bacardi White", tot: "3,000", bottle: "65,000" },
  ],
  "LIQUEURS & APÉRITIFS": [
    { name: "Amarula 750ml", tot: "5,000", bottle: "90,000" },
    { name: "Amarula 350ml", tot: "-", bottle: "60,000" },
    { name: "Baileys", tot: "4,000", bottle: "70,000" },
    { name: "Jägermeister", tot: "4,000", bottle: "80,000" },
    { name: "Campari", tot: "4,000", bottle: "85,000" },
    { name: "Cointreau", tot: "4,000", bottle: "90,000" },
  ]
};

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-3 mb-4 mt-8 group">
    <div className="bg-[#002147] p-2 rounded-full text-white ring-4 ring-[#C5A059]/20 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl font-serif font-bold text-[#002147] tracking-wider uppercase border-b-2 border-[#C5A059] flex-grow pb-1">
      {title}
    </h2>
  </div>
);

const MenuItem = ({ item, index }: { item: MenuItemType; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="grid grid-cols-[1fr_80px_100px] py-2 border-b border-[#002147]/10 items-center hover:bg-[#C5A059]/5 px-2 rounded-sm transition-colors"
  >
    <span className="text-sm font-medium text-gray-800">{item.name}</span>
    <span className="text-xs font-bold text-center text-[#002147]">{item.tot}</span>
    <span className="text-xs font-bold text-right text-[#002147]">{item.bottle}</span>
  </motion.div>
);

const CategoryCard = ({ title, items, icon }: { title: string; items: MenuItemType[]; icon: LucideIcon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-lg border-2 border-[#C5A059] p-4 overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A059]/5 rounded-bl-full -mr-10 -mt-10" />
    <SectionHeader title={title} icon={icon} />
    <div className="grid grid-cols-[1fr_80px_100px] mb-2 px-2 text-[10px] font-bold text-white bg-[#002147] rounded-t py-1 uppercase tracking-tighter">
      <span>Item</span>
      <span className="text-center">Tot (TZS)</span>
      <span className="text-right">Bottle (TZS)</span>
    </div>
    <div className="space-y-0">
      {items.map((item, idx) => (
        <MenuItem key={item.name} item={item} index={idx} />
      ))}
    </div>
  </motion.div>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMenu = Object.entries(menuData).reduce((acc, [category, items]) => {
    const filtered = items.filter(i => i.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filtered.length > 0) acc[category] = filtered;
    return acc;
  }, {} as MenuDataType);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#002147] font-sans selection:bg-[#C5A059] selection:text-white pb-12">
      {/* Decorative Border */}
      <div className="fixed inset-4 border-2 border-[#C5A059]/30 pointer-events-none z-50 rounded-lg" />
      
      {/* Header Section */}
      <header className="relative pt-12 pb-8 px-6 text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10"
        >
          <div className="w-24 h-24 mx-auto mb-4 border-4 border-[#002147] rounded-full p-1 flex items-center justify-center bg-white shadow-xl">
            <div className="text-[#002147] font-bold text-center leading-tight text-[10px]">
              <div className="border-b border-[#002147] pb-1">DAR ES SALAAM</div>
              <div className="pt-1">GYMKHANA CLUB</div>
            </div>
          </div>
          <p className="text-[#002147] font-serif tracking-widest text-sm font-semibold uppercase">Dar Es Salaam Gymkhana Club</p>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-[2px] w-12 bg-[#C5A059]" />
            <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <h1 className="text-4xl md:text-5xl font-serif font-black text-[#002147] tracking-tighter uppercase italic">
              Spirits Menu
            </h1>
            <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <div className="h-[2px] w-12 bg-[#C5A059]" />
          </div>
          <div className="inline-block bg-[#002147] text-white px-6 py-1 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg">
            DIGITAL EDITION
          </div>
        </motion.div>
      </header>

      {/* Search Bar */}
      <div className="max-w-md mx-auto px-6 mb-8 relative z-20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C5A059]" size={18} />
          <input 
            type="text"
            placeholder="Search for a drink..."
            className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-[#C5A059]/40 bg-white focus:border-[#C5A059] focus:outline-none shadow-sm transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredMenu['WHISKY'] && <CategoryCard title="Whisky" items={filteredMenu['WHISKY']} icon={Compass} />}
          
          <div className="space-y-8">
            {filteredMenu['GIN'] && <CategoryCard title="Gin" items={filteredMenu['GIN']} icon={Wine} />}
            {filteredMenu['VODKA'] && <CategoryCard title="Vodka" items={filteredMenu['VODKA']} icon={GlassWater} />}
          </div>

          {filteredMenu['COGNAC'] && <CategoryCard title="Cognac" items={filteredMenu['COGNAC']} icon={Beer} />}
          
          <div className="space-y-8">
            {filteredMenu['RUM'] && <CategoryCard title="Rum" items={filteredMenu['RUM']} icon={Compass} />}
            {filteredMenu["LIQUEURS & APÉRITIFS"] && (
              <CategoryCard 
                title="Liqueurs & Apéritifs" 
                items={filteredMenu["LIQUEURS & APÉRITIFS"]} 
                icon={Wine} 
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer Notices */}
      <footer className="max-w-4xl mx-auto px-6 mt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-yellow-200 shadow-sm"
          >
            <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight">Alcohol is not sold to persons under 18 years of age.</p>
              <p className="text-[10px] text-gray-500 italic mt-1 text-red-600">Please drink responsibly.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-blue-200 shadow-sm"
          >
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight">WE ARE CASHLESS</p>
              <p className="text-[10px] text-gray-500 mt-1">
                All payments are accepted via card, mobile money, and other electronic methods only.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-8 bg-[#C5A059]" />
            <span className="font-serif italic text-xl text-[#002147]">Karibu Sana.</span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">© 2024 Dar Es Salaam Gymkhana Club</p>
        </div>
      </footer>

      {/* Mobile Sticky Nav / Cart (Optional concept) */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
      >
        <button className="bg-[#002147] text-[#C5A059] px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 border-2 border-[#C5A059]">
          <Compass size={18} />
          CATEGORIES
        </button>
      </motion.div>
    </div>
  );
};

export default App;
