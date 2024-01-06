import {TokenTransfer} from '@multiversx/sdk-core/out';

import BigNumber from 'bignumber.js';

export const formatTransactionAmount = (amount: BigNumber.Value) => {
  return TokenTransfer.egldFromBigInteger(amount).toPrettyString();
};
