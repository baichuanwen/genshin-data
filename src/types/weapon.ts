type AscensionMaterial = {
  _id: number;
  id: string;
  name: string;
  amount: number;
  rarity: number;
};

export type WeaponAscension = {
  ascension: number;
  level: number;
  cost: number;
  materials: AscensionMaterial[];
};

type WeaponRefinement = {
  refinement: number;
  desc: string;
};

type StatLevel = {
  ascension: number;
  level: number;
  primary: number;
  secondary?: number;
};

type WeaponStat = {
  primary: string;
  secondary?: string;
  levels: StatLevel[];
};

export interface Weapon {
  _id: number;
  id: string;
  name: string;
  description: string;
  rarity: number;
  type: string;
  domain: string;
  passive: string;
  bonus: string;
  stats: WeaponStat;
  ascensions: WeaponAscension[];
  refinement_raw: {
    name: string;
    template: string;
    params: [string[]];
  };
  refinements: WeaponRefinement[];
}
