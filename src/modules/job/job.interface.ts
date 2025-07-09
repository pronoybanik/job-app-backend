
export type TContractType = 'full-time' | 'part-time';

export interface TJob {
  companyName: string;
  position: string;
  contractType: TContractType;
  location: string;
}


