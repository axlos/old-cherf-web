import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AnalyzeAssetService } from '../services/analyze-asset.service';
import { AnalyzeAssetActionTypes, StrategyFail, StrategySuccess } from '../actions/analyze-asset.actions';

@Injectable()
export class AnalyzeAssetEffects {

  @Effect()
  analyze$: Observable<Action> = this.actions$
    .ofType(AnalyzeAssetActionTypes.Strategy)
    .switchMap(() => this.analyzeAssetService.analyze()
      .map(analyze => new StrategySuccess(analyze))
      .catch(err => Observable.of(new StrategyFail(err)))
    );

  constructor(private actions$: Actions, private analyzeAssetService: AnalyzeAssetService) {
  }

}
