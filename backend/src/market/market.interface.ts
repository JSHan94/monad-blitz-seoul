export interface MarketItemData { 
  id: string
  owner: string
  successCnt: number
  tryCnt: number
  price: number
}
export interface MarketItemListResponse {
  data: MarketItemData[]
}