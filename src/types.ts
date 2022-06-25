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
    benchmark: number;
  };
  gpu: {
    model: string;
    brand: string;
    benchmark: number;
  };
  memoryCard: {
    quantity: string;
    model: string;
    brand: string;
    benchmark: number;
  };
  storage: {
    type: Storage;
    storageCapacity: string;
    brand: string;
    model: string;
    benchmark: number;
  };
};

/* eslint-disable @typescript-eslint/no-redeclare */
export const Storage = {
  notSelected: "",
  hdd: "HDD",
  ssd: "SSD",
} as const;

export type Storage = typeof Storage[keyof typeof Storage];
/* eslint-enable @typescript-eslint/no-redeclare */

export interface SelectMemoryCardBrandAction {
  quantity: string;
  brand: string;
}

export interface SelectStorageBrandAction {
  storageCapacity: string;
  brand: string;
}

export interface SelectedPC {
  form: SelectionForm;
  gamingBenchMarks: BenchMarks;
  workBenchMarks: BenchMarks;
}

export interface BenchMarks {
  cpuScore: number;
  gpuScore: number;
  memoryCardScore: number;
  storageScore: number;
}
