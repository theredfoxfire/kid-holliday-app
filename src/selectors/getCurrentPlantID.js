// @flow

import type {RootState} from '../types/RootState';

export default function getCurrentPlantID(state: RootState) {
  return state.selectedPlant;
}
