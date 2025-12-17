
import { Pack } from './types';

export const WHATSAPP_PHONE = "22969696998";

export const PACKS: Pack[] = [
  {
    id: 'efa',
    name: 'EFÂ',
    description: 'Le pack essentiel pour vos petits comités.',
    bottles: '48 bouteilles',
    price: '19.190 FCFA',
    priceValue: 19190,
    features: ['Mélange bières et sucreries', 'Livraison gratuite', 'Prêt à consommer'],
    gradient: 'from-[#f37021] to-[#ff9f68]',
    whatsappMessage: 'Bonjour Ahan Fifa, je souhaite commander le pack *EFÂ* (19.190 FCFA). Pouvez-vous m\'indiquer la marche à suivre ?'
  },
  {
    id: 'tchekee',
    name: 'TCHÉKÉÉ',
    description: 'Idéal pour les fêtes et les grands rassemblements.',
    bottles: '120 bouteilles',
    price: '42.590 FCFA',
    priceValue: 42590,
    features: ['Mélange bières et sucreries', 'Livraison gratuite', 'Service prioritaire'],
    gradient: 'from-[#00b4db] to-[#0054a6]',
    whatsappMessage: 'Bonjour Ahan Fifa, je souhaite commander le pack *TCHÉKÉÉ* (42.590 FCFA). Pouvez-vous m\'indiquer la marche à suivre ?'
  },
  {
    id: 'gbadou',
    name: 'GBADOU',
    description: 'Composez votre pack sur mesure selon vos envies.',
    bottles: 'À la carte',
    price: 'Sur devis',
    features: ['Choix libre des boissons', 'Conseils personnalisés', 'Quantité flexible'],
    gradient: 'from-[#ffd700] to-[#b8860b]',
    whatsappMessage: 'Bonjour Ahan Fifa, je souhaite personnaliser mon pack *GBADOU*. Pouvez-vous m\'aider à composer ma commande ?'
  }
];
