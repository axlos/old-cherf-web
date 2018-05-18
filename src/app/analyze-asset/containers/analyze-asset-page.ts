import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as AnalyzeAssetActions from '../actions/analyze-asset.actions';
import * as fromAnalyzeAsset from '../reducers';
import { Analyze, StrategyParams } from '../models/analyze';

@Component({
  template: `
    <analyze-asset></analyze-asset>
  `,
  styles: [],
})
export class AnalyzeAssetPageComponent implements OnInit {

  analyze$: Observable<Analyze>;
  searchQuery$: Observable<StrategyParams>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<fromAnalyzeAsset.State>) {
    this.analyze$ = store.pipe(select(fromAnalyzeAsset.getAnalyze));
    this.searchQuery$ = store.pipe(select(fromAnalyzeAsset.getAnalyzeAssetPageQuery));
    this.loading$ = store.pipe(select(fromAnalyzeAsset.getAnalyzeAssetPageLoading));
    this.error$ = store.pipe(select(fromAnalyzeAsset.getAnalyzeAssetPageError));
  }

  ngOnInit(): void {
    this.store.dispatch(new AnalyzeAssetActions.Strategy({
      strategy: '',
      symbol: '',
      investment: 0,
      timeFrame: 0,
    }));
  }

}
