export interface Analyze {
  id: number;
  asset: string;
  investment: number;
  time_frame: number;
  transactions_cost: number;
  total_return: number;
  net_return: number;
  percentage_return: number;
  last_transaction: number;
  possible_transaction: number;
  possible_transaction_type: string;
  return_buy_and_hold: string;
  percentage_buy_and_hold: string;
  created_at: string;
}


export interface StrategyParams {
  strategy: string;
  symbol: string;
  investment: number;
  timeFrame: number;
}
