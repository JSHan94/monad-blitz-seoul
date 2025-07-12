
export interface PlayHistoryData {
  txHash: string
  address: string
  level: number
  success: boolean
}
export interface PlayHistoryListResponse  {
  data: PlayHistoryData[]
}