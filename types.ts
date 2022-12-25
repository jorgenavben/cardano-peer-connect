export type Cip30Function =
  | 'getNetworkId'
  | 'getUtxos'
  | 'getCollateral'
  | 'getBalance'
  | 'getUsedAddresses'
  | 'getUnusedAddresses'
  | 'getChangeAddress'
  | 'getRewardAddresses'
  | 'signTx'
  | 'signData'
  | 'submitTx';

export type Cbor = string;
export type Bytes = string;

export type Paginate = {
  page: number;
  limit: number;
};

type CoseSign1CborHex = string;
type CoseKeyCborHex = string;

export type Cip30DataSignature = {
  key: CoseKeyCborHex;
  signature: CoseSign1CborHex;
};

export type PeerConnectApi = {
  apiVersion: string;
  name: string;
  icon: string;
  methods: Array<Cip30Function>;
};

export type BrowserConnectApi = {
  [key in Cip30Function]?: Function;
} & {
  apiVersion: string;
  identifier: string;
  icon: string;
};