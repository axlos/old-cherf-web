import { Action } from '@ngrx/store';
import { Analyze, StrategyParams } from '../models/analyze';

export enum AnalyzeAssetActionTypes {
  Strategy = '[Analyze Asset] Strategy',
  StrategySuccess = '[Analyze Asset] Strategy Success',
  StrategyFail = '[Analyze Asset] Strategy Fail'
}

export class Strategy implements Action {
  readonly type = AnalyzeAssetActionTypes.Strategy;

  constructor(public payload: StrategyParams) {
  }
}

export class StrategySuccess implements Action {
  readonly type = AnalyzeAssetActionTypes.StrategySuccess;

  constructor(public payload: Analyze) {
  }
}

export class StrategyFail implements Action {
  readonly type = AnalyzeAssetActionTypes.StrategyFail;

  constructor(public payload: any) {
  }
}

export type AnalyzeAssetActionsUnion =
  | Strategy
  | StrategySuccess
  | StrategyFail;
