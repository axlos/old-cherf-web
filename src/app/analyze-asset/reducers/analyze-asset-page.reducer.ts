import { AnalyzeAssetActionsUnion, AnalyzeAssetActionTypes } from '../actions/analyze-asset.actions';
import { StrategyParams } from '../models/analyze';

export interface State {
  query: StrategyParams | null;
  loading: boolean;
  error: string;
}

const initialState: State = {
  query: null,
  loading: false,
  error: '',
};

export function reducer(state = initialState, action: AnalyzeAssetActionsUnion): State {
  switch (action.type) {
    case AnalyzeAssetActionTypes.Strategy: {
      const query = action.payload;
      if (query === null) {
        return {
          loading: false,
          error: '',
          query: {
            strategy: '',
            symbol: '',
            investment: 0,
            timeFrame: 0,
          }
        };
      }
      return {
        ...state,
        loading: true,
        error: '',
        query,
      };
    }
    case AnalyzeAssetActionTypes.StrategySuccess: {
      return {
        loading: false,
        error: '',
        query: state.query,
      };
    }
    case AnalyzeAssetActionTypes.StrategyFail: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
