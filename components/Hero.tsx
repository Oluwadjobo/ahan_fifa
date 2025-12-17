
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center px-6 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.45)), url('https://picsum.photos/id/429/1920/1080')` }}
      />
      
      <div className="relative z-10 max-w-4xl text-white space-y-8">
        <div className="inline-block p-4 bg-white/10 backdrop-blur-xl rounded-full mb-4 animate-pulse">
           <img src="logo.png" alt="Ahan Fifa" className="w-24 h-24 object-contain" />
        </div>
        <h1 className="text-5xl md:text-8xl font-black leading-none drop-shadow-2xl">
          Vos boissons <span className="text-orange-500">fraîches</span> à Calavi
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed">
          Livraison express en 1h30 max. <br className="hidden md:block" />
          Faites de vos fêtes un moment inoubliable avec Ahan Fifa.
        </p>
        <div className="pt-6">
          <a href="#packs" className="bg-orange-500 text-white px-10 py-5 rounded-full text-xl font-black hover:bg-orange-600 transition-all shadow-[0_10px_40px_-10px_rgba(243,112,33,0.5)] hover:scale-105 transform inline-block">
            COMMANDER MAINTENANT
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
