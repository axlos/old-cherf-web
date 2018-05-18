import { Analyze } from '../models/analyze';
import { AnalyzeAssetActionsUnion, AnalyzeAssetActionTypes } from '../actions/analyze-asset.actions';

export interface State {
  analyze: Analyze | null;
}

export const initialState: State = {
  analyze: null,
};

export function reducer(state = initialState, action: AnalyzeAssetActionsUnion): State {
  switch (action.type) {
    case AnalyzeAssetActionTypes.StrategySuccess: {
      return {
        ...state,
        analyze: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getAnalyze = (state: State) => state.analyze;
