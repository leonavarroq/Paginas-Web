import { Sede } from "./sedes";

export interface StoreInfo {
  name: string;
  storeCount: number;
  color: string;
  sedes?:Sede[]
}