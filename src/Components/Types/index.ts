export interface ICoin {
  id: string;
  name: string;
  market_cap_rank: string;
  image: string;
  current_price: number;
  price_change_24h: number;
  market_cap: number;
}

interface ICurrency {
  [x: string]: number;
}
interface IMarketData {
  price_change_percentage_7d: number;
  price_change_percentage_30d: number;
  price_change_percentage_1y: number;
  circulating_supply: number;
  market_cap_rank: number;
  ath: ICurrency;
  current_price: ICurrency;
  market_cap: ICurrency;
  total_volume: ICurrency;
}

export interface ICoinInfo {
  name: string;
  symbol: string;
  image: { [x: string]: string };
  description: { [x: string]: string };
  market_data: IMarketData;
}
