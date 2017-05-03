// @flow
import fetchJSON from '../helpers/fetchJSON';
import formatUrlEncoded from '../helpers/formatUrlEncoded';
import type {AnalyticForm} from '../types/Analytic';
import formatToCamelCase from '../helpers/formatToCamelCase';

let CostAPI = {
  async getCostAnalyticTimeLine(token: string) {
    let result = await fetchJSON(`/costanalytictimeline?token=${token}`);
    let analysis = [];
    if (Array.isArray(result.message)) {
      result.message.map((cost) => {
        let data = formatToCamelCase(cost);
        let normalize = {
          ...data,
          farmingProductionCost: data.saprotanCost ? data.saprotanCost : 0,
        };
        analysis.push(normalize);
      });
    } else {
      throw new Error('Get Cost Analytic Failed!');
    }
    return analysis;
  },
  async getCostAnalyticDetail(token: string, plantID: string) {
    let result = await fetchJSON(`/costanalyticfordetailplants/${plantID}?token=${token}`);
    if (result.result === 'sukses') {
      return result.message;
    } else {
      throw new Error('Get Cost Analytic Detail Failed!');
    }
  },
  addNewAnalysis(token: string, analyticData: AnalyticForm) {
    let newAnalysis = {
      title: analyticData.title,
      plant_id: analyticData.plantID,
      saprotan_cost: analyticData.farmingProductionCost,
      seeds_cost: analyticData.othersExpense,
      fertilizer_cost: analyticData.fieldRentCost,
      labour_cost: analyticData.labourCost,
      total_expense: analyticData.totalExpense,
      first_harvest: analyticData.firstHarvest,
      end_harvest: analyticData.endHarvest,
      depreciation: analyticData.depreciation,
      price: analyticData.price,
      gross_income: analyticData.grossIncome,
      net_income: analyticData.netIncome,
    };
    let urlEncoded = formatUrlEncoded(newAnalysis);
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncoded,
    };
    return fetchJSON(`/costanalyticstore?token=${token}`, options);
  },
  deleteAnalytic(token: string, analyticID: string) {
    return fetchJSON(`/costanalyticdelete/${analyticID}?token=${token}`);
  },
};

export default CostAPI;
