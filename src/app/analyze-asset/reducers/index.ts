import { ActionReducerMap, createFeatureSelector, createSelector, } from '@ngrx/store';

import * as fromAnalyzeAsset from './analyze-asset.reducer';
import * as fromAnalyzeAssetPage from './analyze-asset-page.reducer';
import * as fromRoot from '../../reducers';

export interface AnalyzeAssetState {
  analyze: fromAnalyzeAsset.State;
  analyzeAssetPage: fromAnalyzeAssetPage.State;
}

export interface State extends fromRoot.State {
  analyzeAsset: AnalyzeAssetState;
}

export const reducers: ActionReducerMap<AnalyzeAssetState> = {
  analyze: fromAnalyzeAsset.reducer,
  analyzeAssetPage: fromAnalyzeAssetPage.reducer,
};

export const selectAnalyzeAssetState = createFeatureSelector<AnalyzeAssetState>('analyzeAsset');

// Analyze asset selector

export const selectAnalyzeState = createSelector(
  selectAnalyzeAssetState,
  state => state.analyze
);

export const getAnalyze = createSelector(
  selectAnalyzeState,
  fromAnalyzeAsset.getAnalyze
);

// Analyze asset page selector

export const selectAnalyzeAssetPageSate = createSelector(
  selectAnalyzeAssetState,
  state => state.analyzeAssetPage
);

export const getAnalyzeAssetPageQuery = createSelector(
  selectAnalyzeAssetPageSate,
  fromAnalyzeAssetPage.getQuery
);

export const getAnalyzeAssetPageLoading = createSelector(
  selectAnalyzeAssetPageSate,
  fromAnalyzeAssetPage.getLoading
);

export const getAnalyzeAssetPageError = createSelector(
  selectAnalyzeAssetPageSate,
  fromAnalyzeAssetPage.getError
);
