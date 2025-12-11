import { Flavor } from '@/types/flavor';

export const mockFlavors: Flavor[] = [

    {
    id: 'f007',
    name: 'Barquilla Twin',
    description: 'Refrescante helado de mantecado y chocolate.',
    category: 'barquilla',
    priceSmall: 2.50,
    imageUrl: '/images/barquillatwin.jpg', 
    isNew: true,
  },
  {
    id: 'f001',
    name: 'Parchita con Mantecado',
    description: 'Refrescante helado de parchita con pirulin.',
    category: 'tina',
    priceSmall: 2.50,
    imageUrl: '/images/parchita.jpg', 
    isNew: true,
  },
  {
    id: 'f002',
    name: 'Fresa con Mantecado',
    description: 'El clásico de fresas frescas mezclado con crema de leche.',
    category: 'tina',
    priceSmall: 2.50,
    imageUrl: '/images/fresa.jpg',
    isNew: false,
  },
  {
    id: 'f003',
    name: 'Chocolate',
    description: 'Helado clásico de chocolate con pirulin y sirope',
    category: 'tina',
    priceSmall: 3.00,
    imageUrl: '/images/chocolate.jpg',
    isNew: false,
  },

  {
    id: 'f004',
    name: 'Tina 23 Oz.',
    description: 'Llevalo con fruta o topping, excelente opcion para compartir en pareja.',
    category: 'especial',
    priceSmall: 6.00,
    imageUrl: '/images/tinaxl.jpg',
    isNew: false,
  },

    {
    id: 'f005',
    name: 'Cesta de Coco.',
    description: 'No esperes mas para disfrutar este manjar!',
    category: 'especial',
    priceSmall: 2.50,
    imageUrl: '/images/cestacoco.jpg',
    isNew: false,
  },
];