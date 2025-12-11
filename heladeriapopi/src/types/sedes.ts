export interface Sede {
  name: string;
  address?: string;
  phone?: string;
}

export interface TooltipPosition {
  x: number;
  y: number;
}

export interface SedesTooltipProps {
  sedes: Sede[];
  stateName: string;
  position: TooltipPosition;  
}