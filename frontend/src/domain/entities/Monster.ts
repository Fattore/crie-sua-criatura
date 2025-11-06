export interface Attribute {
    name: string;
    value: number;
    modifier: number;
  }
  
  export interface Defense {
    total: number;
    fortitude: number;
    reflexes: number;
    will: number;
  }
  
  export interface Action {
    name: string;
    type: string;
    damage?: string;
    description?: string;
  }
  
  export interface Monster {
    id: string;
    name: string;
    type: string;
    vd: number; // Valor de Desafio
    attributes: {
      for: Attribute;
      agi: Attribute;
      int: Attribute;
      pre: Attribute;
      vig: Attribute;
    };
    defense: Defense;
    initiative: {
      value: number;
      skill: string;
    };
    hitPoints: number;
    displacement: string;
    actions: Action[];
    disturbingPresence?: string;
    description: string;
  }