
import React, { useState } from 'react';
import { getDrinkRecommendation } from '../services/geminiService';
import { RecommendationResponse } from '../types';
import { PACKS } from '../constants';

const AiAssistant: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [formData, setFormData] = useState({
    eventType: 'Anniversaire',
    guestCount: 20,
    duration: '4 heures'
  });

  const handleConsult = async () => {
    setLoading(true);
    try {
      const result = await getDrinkRecommendation(formData);
      setRecommendation(result);
    } catch (error) {
      console.error("Failed to get recommendation", error);
    } finally {
      setLoading(false);
    }
  };

  const recommendedPack = recommendation ? PACKS.find(p => p.id === recommendation.packId) : null;

  return (
    <section id="ai-advisor" className="py-20 bg-blue-50 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Nouveau</span>
          <h2 className="text-4xl font-black mt-4 text-gray-900">Le Conseiller IA Ahan Fifa</h2>
          <p className="text-gray-600 mt-2">Laissez notre intelligence artificielle planifier vos boissons parfaitement.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Type d'événement</label>
              <select 
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              >
                <option>Anniversaire</option>
                <option>Mariage / Dot</option>
                <option>After-work</option>
                <option>Soirée entre amis</option>
                <option>Cérémonie religieuse</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nombre d'invités</label>
              <input 
                type="number"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.guestCount}
                onChange={(e) => setFormData({...formData, guestCount: parseInt(e.target.value)})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Durée estimée</label>
              <input 
                type="text"
                placeholder="Ex: 5 heures, Toute la nuit"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
              />
            </div>

            <button 
              onClick={handleConsult}
              disabled={loading}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Obtenir un conseil
                </>
              )}
            </button>
          </div>

          <div className={`p-8 flex flex-col justify-center transition-all ${recommendation ? 'bg-orange-50' : 'bg-gray-50'}`}>
            {!recommendation && !loading && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <p className="text-gray-500 italic">Remplissez les informations pour recevoir une recommandation personnalisée basée sur vos besoins.</p>
              </div>
            )}

            {recommendation && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                <h3 className="text-2xl font-black text-gray-900">Notre suggestion :</h3>
                <div className="bg-white p-4 rounded-2xl border-l-4 border-orange-500 shadow-sm">
                  <p className="font-bold text-orange-600 text-lg uppercase tracking-wider">{recommendedPack?.name || 'GBADOU'}</p>
                  <p className="text-gray-700 mt-2">{recommendation.reason}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-widest mb-1">Mélange suggéré</h4>
                  <p className="text-blue-600 font-medium">{recommendation.suggestedMix}</p>
                </div>
                <button 
                  className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200"
                  onClick={() => {
                     const msg = encodeURIComponent(`Bonjour Ahan Fifa, j'ai utilisé l'IA pour mon événement (${formData.eventType}, ${formData.guestCount} pers). Elle me suggère le pack ${recommendedPack?.name}. Pouvons-nous en discuter ?`);
                     window.open(`https://wa.me/22969696998?text=${msg}`, '_blank');
                  }}
                >
                  Commander cette sélection
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;
