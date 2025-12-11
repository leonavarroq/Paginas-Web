export interface Flavor {
  id: string;
  name: string;
  description: string;
  category: 'barquilla' | 'tina' | 'especial';
  priceSmall: number;
  imageUrl: string;
  isNew: boolean;
}

export interface Filters {
  category: ('barquilla' | 'tina' | 'especial')[];
  maxPrice: number;
  showNew: boolean;
}

export interface FlavorCardProps {
  flavor: Flavor;
}