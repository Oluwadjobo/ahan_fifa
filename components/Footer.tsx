
import React from 'react';
import { WHATSAPP_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="logo.png" alt="Ahan Fifa" className="w-16 h-16" />
            <span className="text-2xl font-black tracking-tighter uppercase">AHAN <span className="text-orange-500">FIFA</span></span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Votre partenaire fraîcheur privilégié à Abomey-Calavi. Livraison express de boissons glacées pour tous vos moments de joie.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-xl font-black uppercase tracking-widest text-orange-500">Nous trouver</h4>
          <ul className="text-gray-300 space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-orange-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Atrokpocodji, Route de l'Université, Abomey-Calavi</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href={`tel:+${WHATSAPP_PHONE}`} className="hover:text-white transition-colors">+{WHATSAPP_PHONE}</a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-black uppercase tracking-widest text-orange-500">Service Express</h4>
          <p className="text-gray-300 text-lg">7j/7 : 08h00 - 22h30</p>
          <div className="pt-2">
            <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full font-black text-sm uppercase">Livraison 90min Chrono</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-20 pt-10 text-center text-gray-500 font-medium">
        <p>&copy; {new Date().getFullYear()} AHAN FIFA. C'EST FRAIS, C'EST CHAP !</p>
      </div>
    </footer>
  );
};

export default Footer;
