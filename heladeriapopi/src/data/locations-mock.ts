import { StoreInfo } from "@/types/storeinfo";

const COLOR_SEDE = "#ffff00"

export const storeLocations: {[key:string]: StoreInfo}= {
  'Vargas': {
    name: 'La Guaira',
    storeCount: 4,
    color: COLOR_SEDE,
    sedes:[
      { name: "La Guaira", address: "Direccion", phone: "0212-0000000" },
      { name: "Catia La Mar", address: "Direccion", phone: "0212-0000000" },
    ]
  },
    'Miranda': {
    name: 'Miranda',
    storeCount: 4,
    color: COLOR_SEDE,
    sedes:[
      { name: "Chacao", address: "Direccion", phone: "0212-0000000" },
      { name: "Los Teques", address: "Direccion", phone: "0212-0000000" },
    ]
  },
  'Portuguesa': {
    name: 'Portuguesa',
    storeCount: 1,
    color: COLOR_SEDE,
    sedes:[
      { name: "Guanare", address: "C.C Ciudad Traki", phone: "0281-0000000" },
    ],
  },
  'Lara': {
    name: 'Lara',
    storeCount: 3,
    color: COLOR_SEDE,
    sedes:[
      { name: "Barquisimeto - Zona Centro", address: "Av. Libertador", phone: "0251-0000000" },
      { name: "Barquisimeto - Zona Oeste", address: "C.C Ciudad Crepuscular", phone: "0251-0000000" },
      { name: "Cabudare", address: "C.C Ciudad Traki", phone: "0251-0000000" }
    ]
  },
};