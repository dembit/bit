
export enum ActionType {
  WS_CONNECTED = "WS_CONNECTED",
  WS_DISCONNECTED = "WS_DISCONNECTED",
  WS_MESSAGE = "WS_MESSAGE",
  WS_SEND_MESSAGE = "WS_SEND_MESSAGE",
}

export interface MessageModel {
  type: string;
  value: GetTikersName 
}
export interface Tiker extends SubscriberType {
  baseCurrency: string;
  feeCurrency: string;
  id: string;
  provideLiquidityRate: string;
  quantityIncrement: string;
  quoteCurrency: string;
  takeLiquidityRate: string;
  tickSize: string;
};

export interface GetTikersName {
  id: 1;
  jsonrpc: string;
  result: Tiker[];
}

export interface SubscriberType {
  ask?: string;
  bid?: string;
  high?: string;
  last?: string;
  low?: string;
  open?: string;
  symbol?: string;
  timestamp?: string;
  volume?: string;
  volumeQuote?: string;
}
export interface SubscribeType {
  jsonrpc: string;
  method: string;
  params: SubscriberType;
}
