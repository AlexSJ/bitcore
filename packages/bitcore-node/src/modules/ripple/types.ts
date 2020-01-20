import { ITransaction } from '../../models/baseTransaction';
import { IBlock } from '../../models/baseBlock';
import { ICoin } from '../../models/coin';

export type IXrpBlock = IBlock & {};
export type IXrpTransaction = ITransaction & {
  from: string;
};

export type XrpTransactionJSON = {
  txid: string;
  chain: string;
  network: string;
  blockHeight: number;
  blockHash: string;
  blockTime: string;
  blockTimeNormalized: string;
  fee: number;
  value: number;
  from: string;
};

export type IXrpCoin = ICoin & {};
