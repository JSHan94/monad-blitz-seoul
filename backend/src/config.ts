import { config as initConfig } from 'dotenv'
import { getEnv } from './lib/env'

initConfig()

export const config = {
  l1ChainId: getEnv('L1_CHAIN_ID', ''),
}
