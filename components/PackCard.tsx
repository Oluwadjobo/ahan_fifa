
import React from 'react';
import { Pack } from '../types';
import { WHATSAPP_PHONE } from '../constants';

interface PackCardProps {
  pack: Pack;
}

const PackCard: React.FC<PackCardProps> = ({ pack }) => {
  const handleOrder = () => {
    const encodedMessage = encodeURIComponent(pack.whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col group border border-gray-100">
      <div className={`p-8 text-white bg-gradient-to-br ${pack.gradient} relative overflow-hidden`}>
        <div className="absolute -right-4 -bottom-4 opacity-10 rotate-12 transition-transform group-hover:scale-110">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.44c-.31.17-.66.25-1 .25s-.69-.08-1-.25l-7.97-4.44C2.21 17.21 2 16.88 2 16.5v-9c0-.38.21-.71.53-.88l7.97-4.44c.31-.17.66-.25 1-.25s.69.08 1 .25l7.97 4.44c.32.17.53.5.53.88v9z"/></svg>
        </div>
        <h3 className="text-3xl font-black mb-1">{pack.name}</h3>
        <p className="text-white/80 font-medium">{pack.bottles}</p>
      </div>
      
      <div className="p-8 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 leading-relaxed">{pack.description}</p>
        
        <ul className="space-y-3 mb-8">
          {pack.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="text-3xl font-black text-gray-900 mb-6">{pack.price}</div>
          <button 
            onClick={handleOrder}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${
              pack.id === 'gbadou' 
              ? 'bg-gray-900 text-white hover:bg-gray-800' 
              : 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-100'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Commander via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackCard;
