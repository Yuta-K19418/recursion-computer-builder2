export type ComputerPart = {
  Type: string;
  "Part Number": string;
  Brand: string;
  Model: string;
  Rank: number;
  Benchmark: number;
};

export type SelectionForm = {
  cpu: {
    model: string;
    brand: string;
  };
  gpu: {
    model: string;
    brand: string;
  };
  memoryCard: {
    quantity: string;
    model: string;
    brand: string;
  };
  storage: {
    type: Storage;
    storageCapacity: string;
    brand: string;
    model: string;
  };
};

export const Storage = {
  notSelected: "",
  hdd: "HDD",
  ssd: "SSD",
} as const;

export type Storage = typeof Storage[keyof typeof Storage];

export interface SelectStorageBrandAction {
  storageCapacity: string;
  brand: string;
}
