
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackCard from './components/PackCard';
import Footer from './components/Footer';
import { PACKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Info Banner */}
        <section className="bg-orange-500 py-3 text-white text-center font-black text-sm tracking-widest overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee uppercase">
            🚀 Livraison gratuite sur les packs EFÂ et TCHÉKÉÉ • Fraîcheur garantie • Livraison en moins de 90 minutes chrono •
          </div>
        </section>

        {/* Pack Section */}
        <section id="packs" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">Nos Packs Prêts à Livrer</h2>
              <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg pt-2">
                Simplifiez l'approvisionnement de vos événements. Choisissez votre pack, on livre glacé.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {PACKS.map((pack) => (
                <PackCard key={pack.id} pack={pack} />
              ))}
            </div>
          </div>
        </section>

  {/* AI Advisor Section removed */}

        {/* Why Us */}
        <section id="about" className="py-24 bg-white px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/40/800/800" 
                alt="Boissons fraîches" 
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-100 rounded-[3rem] -z-0" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">
                La fraîcheur <span className="text-blue-600">irréprochable</span> pour vos invités
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ahan Fifa est le leader de la livraison de boissons à Abomey-Calavi. Nous garantissons une température optimale de service dès l'arrivée de notre livreur.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-gray-50 rounded-3xl">
                  <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-orange-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Rapidité 90min</h4>
                    <p className="text-gray-600">Zone Abomey-Calavi couverte en un temps record.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-6 bg-gray-50 rounded-3xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Glacé à point</h4>
                    <p className="text-gray-600">Livré à la température idéale pour une consommation immédiate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-widest">Ils nous font confiance</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Mervie A.", text: "Service impeccable pour ma dot. Les boissons étaient glacées comme promis !", avatar: "https://i.pravatar.cc/150?u=1" },
                { name: "Arnaud K.", text: "Le pack TCHÉKÉÉ est parfait pour les anniversaires. Très économique et rapide.", avatar: "https://i.pravatar.cc/150?u=2" },
                { name: "Lucia S.", text: "Commande passée par WhatsApp, reçue en moins de 1h. Franchement, top !", avatar: "https://i.pravatar.cc/150?u=3" }
              ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 italic text-gray-600 relative">
                  <div className="absolute -top-4 left-8 text-orange-500 opacity-20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.31 0-6 2.69-6 6v10h10V14H7.38c.64-1.94 2.47-3.33 4.62-3.33V8H10zm12 0c-3.31 0-6 2.69-6 6v10h10V14h-6.62c.64-1.94 2.47-3.33 4.62-3.33V8h-2z" /></svg>
                  </div>
                  <p className="mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name} />
                    <span className="font-bold text-gray-900 not-italic">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Button for WhatsApp */}
      <a 
        href={`https://wa.me/22969696998`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default App;
