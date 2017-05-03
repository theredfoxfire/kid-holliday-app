// @flow

export type CostData = {
  id: number;
  analysisTitle: string;
  expense: number;
  income: number;
  analysisDate: string;
};
// TODO Validate Cost Detail
export type CostDetail = {
  plantID: number;
  userID: number;
  id: number;
  title: string;
  farmingProductionCost: number;
  seedsCost: number;
  fertilizerCost: number;
  labourCost: number;
  totalExpense: number;
  firstHarvest: number;
  endHarvest: string;
  price: number;
  grossIncome: string;
  netIncome: string;
  createdAt: string;
  depreciation: number;
  depreciationPercent: string;
  linkPdf: string;
};
