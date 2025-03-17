/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BestShooterBLLBetDto {
  /** 是否进球 */
  isWin?: boolean;
  /**
   * 上一次下注结果金额
   * @format double
   */
  preResultAmount?: number;
  /**
   * 中奖金额（不包含JP奖金）
   * @format double
   */
  winAmount?: number;
  /**
   * 上一次赌注基础金额
   * @format double
   */
  preBaseBet?: number;
  /**
   * 上一次赌注金额
   * @format double
   */
  preBet?: number;
  /**
   * 上一次下注加倍数
   * @format double
   */
  preBetMultiple?: number;
  /**
   * Lucky值
   * @format int32
   */
  luckyValue?: number;
  /**
   * lucky抽奖阈值
   * @format int32
   */
  luckyValueLimit?: number;
  /** 是否可触发Lucky抽奖 */
  isTriggerLuck?: boolean;
  /**
   * Goal进度
   * @format int32
   */
  goalProgress?: number;
  /**
   * Goal最大值
   * @format int32
   */
  maxGoal?: number;
  /**
   * 用户账户余额
   * @format double
   */
  balance?: number;
  /** 是否惊喜奖励 */
  isSurprise?: boolean;
  /** 是否强制结算 */
  isCollect?: boolean;
  /**
   * Jackpot奖池金额
   * @format double
   */
  jackpotAmount?: number;
  /** Jackpot抽奖是否中奖 */
  isWinJackpot?: boolean;
  /**
   * Jackpot奖励金额
   * @format double
   */
  jackpotRaffleAmount?: number;
  /**
   * 上一个球星id
   * @format int32
   */
  preStarID?: number;
  /**
   * 当前是第几次踢球
   * @format int32
   */
  sumBetNum?: number;
  /**
   * 最大下注值
   * @format double
   */
  maxStake?: number;
  /** 国家编码 */
  countryId?: string | null;
  /**
   * 当前用户Jackpot累计值
   * @format double
   */
  jackpotValue?: number;
  /**
   * 触发Jackpot抽奖阈值
   * @format double
   */
  jackpotCfgValue?: number;
  /** 是否触发Jackpot抽奖 */
  isTriggerJackpotRaffle?: boolean;
  /**
   * 用户基础下注额
   * @format double
   */
  baseBet?: number;
}

/** 踢球Ipo */
export interface BestShooterBLLBetIpo {
  /**
   * 下注总额（this.Bet * this.BetMultiple）
   * @format double
   */
  totalBet?: number;
  /**
   * 赌注
   * @format double
   */
  bet?: number;
  /**
   * 赌注倍数
   * @format double
   */
  betMultiple?: number;
  /**
   * 位置
   * @format int32
   */
  place?: number;
  /**
   * 位置对应的倍数
   * @format double
   */
  placeMultiple?: number;
  /** 国家编码 */
  operatorID?: string | null;
  jackpotPool?: BestShooterDALBsPoolJackpotEO;
}

export interface BestShooterBLLJackpotListDto {
  mobile?: string | null;
  userName?: string | null;
  amount?: string | null;
  date?: string | null;
  /** @format int64 */
  winAmount?: number;
}

export interface BestShooterBLLJackpotListIpo {
  /**
   * 当前页码
   * @format int32
   * @min 1
   * @max 2147483647
   */
  pageIndex?: number;
  /**
   * 页条数
   * @format int32
   * @min 1
   * @max 20
   */
  pageSize?: number;
}

export interface BestShooterBLLLoadDto {
  /** 上一次踢球结果 */
  isWin?: boolean;
  /**
   * 上一次下注结果金额
   * @format double
   */
  preResultAmount?: number;
  /**
   * 中奖金额（不包含JP奖金）
   * @format double
   */
  winAmount?: number;
  /**
   * 用户基础下注额
   * @format double
   */
  baseBet?: number;
  /**
   * 上一次下注基础金额
   * @format double
   */
  preBaseBet?: number;
  /**
   * 上一次下注金额
   * @format double
   */
  preBet?: number;
  /**
   * 赌注倍数
   * @format double
   */
  preBetMultiple?: number;
  /**
   * 用户当前lucky值
   * @format int32
   */
  luckyValue?: number;
  /**
   * lucky抽奖阈值
   * @format int32
   */
  luckyValueLimit?: number;
  /** 是否可触发Lucky抽奖 */
  isTriggerLuck?: boolean;
  /**
   * 目标进度
   * @format int32
   */
  goalProgress?: number;
  /**
   * 最大Goal值
   * @format int32
   */
  maxGoal?: number;
  /**
   * 用户账户余额
   * @format double
   */
  balance?: number;
  /** 是否惊喜奖励 */
  isSurprise?: boolean;
  /** 是否强制结算 */
  isCollect?: boolean;
  /**
   * Jackpot奖池金额
   * @format double
   */
  jackpotAmount?: number;
  /** Jackpot抽奖是否中奖 */
  isWinJackpot?: boolean;
  /**
   * Jackpot奖励金额
   * @format double
   */
  jackpotRaffleAmount?: number;
  /**
   * 当前第几次踢球，最小值为0
   * @format int32
   */
  sumBetNum?: number;
  /**
   * 最大下注值
   * @format double
   */
  maxStake?: number;
  /** 国家编码 */
  countryId?: string | null;
  /**
   * 球星等级
   * @format int32
   */
  preStarGrade?: number;
  /**
   * 当前用户Jackpot累计值
   * @format double
   */
  jackpotValue?: number;
  /**
   * 触发Jackpot抽奖阈值
   * @format double
   */
  jackpotCfgValue?: number;
  /** 是否触发了Jackpot抽奖 */
  isTriggerJackpotRaffle?: boolean;
  /** 所有球星球星位置、倍数 */
  starPositionMultiples?: Record<string, BestShooterBLLStarPositionMultiples[]>;
  /** 基础下注额对应的Jackpot奖金数据 */
  betAmountMapJackpotBonus?: Record<string, number[]>;
}

export interface BestShooterBLLLuckyIpo {
  /** 用户id */
  userId?: string | null;
  /** Lucky主订单Id */
  orderId?: string | null;
  /** lucky抽奖订单id */
  raffleOrderId?: string | null;
  /** @format date-time */
  addTimeNow?: string;
  /** @format date-time */
  updateTimeNow?: string;
  /** 国家编码 */
  operatorID?: string | null;
}

export interface BestShooterBLLServicesLuckyLuckyRaffleDto {
  isWin?: boolean;
  /**
   * lucky中奖金额
   * @format double
   */
  winAmount?: number;
  /**
   * 余额
   * @format double
   */
  balance?: number;
}

/** 游戏初始化，球星位置、倍数缓存 */
export interface BestShooterBLLStarPositionMultiples {
  /**
   * 位置
   * @format int32
   */
  position?: number;
  /** 倍数（实际值，保留两位小数） */
  multiples?: string | null;
}

export interface BestShooterDALBsPoolJackpotEO {
  hasOriginal?: boolean;
  originalOperatorID?: string | null;
  originalCurrencyID?: string | null;
  operatorID?: string | null;
  currencyID?: string | null;
  /** @format int64 */
  amount?: number;
  /** @format date-time */
  recDate?: string;
}

export interface DragonTowerBLLBetDto {
  playerInfo?: DragonTowerBLLPlayerInfo;
  resultInfo?: DragonTowerBLLResultInfo;
}

export interface DragonTowerBLLBetIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format int32 */
  floorId?: number;
  /** @format int32 */
  cellId?: number;
}

export interface DragonTowerBLLCollectDto {
  playerInfo?: DragonTowerBLLPlayerInfo;
  gameInfo?: DragonTowerBLLGameInfo;
}

export interface DragonTowerBLLCollectIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DragonTowerBLLFloorInfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  openCellId?: number;
  cellTypeList?: number[] | null;
}

export interface DragonTowerBLLGameInfo {
  /** @format double */
  baseBet?: number;
  /** @format int32 */
  level?: number;
  /** @format double */
  win?: number;
  floorInfoList?: DragonTowerBLLFloorInfo[] | null;
  /** @format int32 */
  gameStatus?: number;
}

export interface DragonTowerBLLLevelMeta {
  /** @format int32 */
  level?: number;
  /** @format int32 */
  cellAmount?: number;
  /** @format int32 */
  mineAmount?: number;
}

export interface DragonTowerBLLLoadDto {
  playerInfo?: DragonTowerBLLPlayerInfo;
  gameInfo?: DragonTowerBLLGameInfo;
  meta?: DragonTowerBLLMeta;
}

export interface DragonTowerBLLLoadIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DragonTowerBLLMeta {
  levelMeta?: DragonTowerBLLLevelMeta[] | null;
  /** @format double */
  minBet?: number;
  /** @format double */
  maxBet?: number;
}

export interface DragonTowerBLLPlayerInfo {
  /** @format double */
  balance?: number;
}

export interface DragonTowerBLLResultInfo {
  gameInfo?: DragonTowerBLLGameInfo;
}

export interface DragonTowerBLLStartGameDto {
  resultInfo?: DragonTowerBLLResultInfo;
}

export interface DragonTowerBLLStartGameIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format double */
  baseBet?: number;
  /** @format int32 */
  level?: number;
}

export interface DwinPokerBLLBetDto {
  playerInfo?: DwinPokerBLLPlayerInfo;
  resultInfo?: DwinPokerBLLResultInfo;
  jpInfo?: DwinPokerBLLJPInfo;
}

export interface DwinPokerBLLBetIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format int32 */
  chipsId?: number;
  /** @format double */
  multi?: number;
  /** @format int32 */
  type?: number;
}

export interface DwinPokerBLLChips {
  /** @format int32 */
  chipsId?: number;
  /** @format double */
  bet?: number;
  jpRewardList?: number[] | null;
}

export interface DwinPokerBLLCollectDto {
  playerInfo?: DwinPokerBLLPlayerInfo;
  gameInfo?: DwinPokerBLLGameInfo;
  historyList?: DwinPokerBLLHistory[] | null;
  jpInfo?: DwinPokerBLLJPInfo;
}

export interface DwinPokerBLLCollectIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DwinPokerBLLGameInfo {
  /** @format int64 */
  oriChipsId?: number;
  /** @format int32 */
  roundIdx?: number;
  /** @format int32 */
  cardIdx?: number;
  /** @format double */
  baseBet?: number;
  /** @format double */
  multi?: number;
  /** @format double */
  totalBet?: number;
  /** @format double */
  betResult?: number;
  /** @format int32 */
  gameStatus?: number;
  /** @format int32 */
  star?: number;
}

export interface DwinPokerBLLHistory {
  /** @format int32 */
  card?: number;
  isTriggerJpReward?: boolean;
  /** @format double */
  betResult?: number;
}

export interface DwinPokerBLLJPInfo {
  /** @format double */
  value?: number;
}

export interface DwinPokerBLLJackpotDto {
  jpInfo?: DwinPokerBLLJPInfo;
}

export interface DwinPokerBLLJackpotIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DwinPokerBLLJpHistory {
  /** @format int64 */
  recDate?: number;
  mobile?: string | null;
  /** @format double */
  win?: number;
}

export interface DwinPokerBLLJpHistoryDto {
  /** @format int32 */
  pageIdx?: number;
  jpHistoryList?: DwinPokerBLLJpHistory[] | null;
}

export interface DwinPokerBLLJpHistoryIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format int32 */
  pageIdx?: number;
  /** @format int32 */
  pageSize?: number;
}

export interface DwinPokerBLLJpRewardInfo {
  isTriggerJpReward?: boolean;
  /** @format int32 */
  jpRewardIndex?: number;
  /** @format double */
  jpReward?: number;
}

export interface DwinPokerBLLLoadDto {
  playerInfo?: DwinPokerBLLPlayerInfo;
  gameInfo?: DwinPokerBLLGameInfo;
  /** @format int32 */
  betResetStatus?: number;
  historyList?: DwinPokerBLLHistory[] | null;
  jpInfo?: DwinPokerBLLJPInfo;
  meta?: DwinPokerBLLPokerMeta;
}

export interface DwinPokerBLLLoadIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DwinPokerBLLPlayerInfo {
  /** @format double */
  balance?: number;
}

export interface DwinPokerBLLPokerMeta {
  chipsList?: DwinPokerBLLChips[] | null;
  /** @format int32 */
  maxStar?: number;
  /** @format double */
  maxBet?: number;
  /** @format double */
  rankReward?: number;
}

export interface DwinPokerBLLRankDetail {
  /** @format int32 */
  rank?: number;
  mobile?: string | null;
  /** @format double */
  win?: number;
}

export interface DwinPokerBLLRankDto {
  rankInfoArr?: DwinPokerBLLRankInfo[] | null;
}

export interface DwinPokerBLLRankInfo {
  /** @format int64 */
  endTime?: number;
  rankDetailList?: DwinPokerBLLRankDetail[] | null;
}

export interface DwinPokerBLLRankIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface DwinPokerBLLResultInfo {
  gameInfo?: DwinPokerBLLGameInfo;
  /** @format int32 */
  card?: number;
  jpRewardInfo?: DwinPokerBLLJpRewardInfo;
}

export interface GoldGgkBLLBetSvcBetDto {
  playerInfo?: GoldGgkBLLLoadSvcPlayerInfo;
  resultInfo?: GoldGgkBLLBetSvcResultInfo;
}

export interface GoldGgkBLLBetSvcBetIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format int32 */
  chipsId?: number;
}

export interface GoldGgkBLLBetSvcJpRewardInfo {
  isTriggerJpReward?: boolean;
}

export interface GoldGgkBLLBetSvcResultInfo {
  cardTable?: GoldGgkBLLBetSvcResultNum[] | null;
  /** @format double */
  totalReward?: string | number;
  gameInfo?: GoldGgkBLLLoadSvcGameInfo;
  winNums?: number[] | null;
  isTriggerJp?: boolean;
}

export interface GoldGgkBLLBetSvcResultNum {
  /** @format int32 */
  num?: number;
  /** @format int32 */
  rewardType?: number;
  /** @format int32 */
  rewardIdx?: number;
}

export interface GoldGgkBLLLoadSvcChips {
  /** @format int32 */
  chipsId?: number;
  /** @format double */
  bet?: number;
  prizeList?: number[] | null;
  jackpotList?: number[] | null;
  /** @format double */
  jpReward?: number;
  /** @format double */
  maxReward?: number;
}

export interface GoldGgkBLLLoadSvcGameInfo {
  /** @format double */
  chipsId?: number;
  /** @format int32 */
  freeSpinNum?: number;
  /** @format int32 */
  roundIdx?: number;
}

export interface GoldGgkBLLLoadSvcGgkMeta {
  chipsList?: GoldGgkBLLLoadSvcChips[] | null;
}

export interface GoldGgkBLLLoadSvcLoadDto {
  playerInfo?: GoldGgkBLLLoadSvcPlayerInfo;
  gameInfo?: GoldGgkBLLLoadSvcGameInfo[] | null;
  meta?: GoldGgkBLLLoadSvcGgkMeta;
}

export interface GoldGgkBLLLoadSvcLoadIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface GoldGgkBLLLoadSvcPlayerInfo {
  /** @format double */
  balance?: number;
}

export interface MinesBLLBetDto {
  playerInfo?: MinesBLLPlayerInfo;
  resultInfo?: MinesBLLResultInfo;
}

export interface MinesBLLBetIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format int32 */
  cellId?: number;
}

export interface MinesBLLCellInfo {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  isOpen?: number;
  /** @format int32 */
  type?: number;
}

export interface MinesBLLCollectDto {
  playerInfo?: MinesBLLPlayerInfo;
  gameInfo?: MinesBLLGameInfo;
}

export interface MinesBLLCollectIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface MinesBLLGameInfo {
  /** @format double */
  baseBet?: number;
  /** @format int32 */
  mines?: number;
  /** @format double */
  win?: number;
  cellInfo?: MinesBLLCellInfo[] | null;
  /** @format int32 */
  gameStatus?: number;
  /** @format double */
  curRate?: number;
  /** @format double */
  nextRate?: number;
}

export interface MinesBLLLoadDto {
  playerInfo?: MinesBLLPlayerInfo;
  gameInfo?: MinesBLLGameInfo;
  meta?: MinesBLLMeta;
}

export interface MinesBLLLoadIpo {
  userId?: string | null;
  currencyId?: string | null;
}

export interface MinesBLLMeta {
  /** @format int32 */
  minMine?: number;
  /** @format int32 */
  maxMine?: number;
  /** @format double */
  minBet?: number;
  /** @format double */
  maxBet?: number;
}

export interface MinesBLLPlayerInfo {
  /** @format double */
  balance?: number;
}

export interface MinesBLLResultInfo {
  gameInfo?: MinesBLLGameInfo;
}

export interface MinesBLLStartGameDto {
  resultInfo?: MinesBLLResultInfo;
}

export interface MinesBLLStartGameIpo {
  userId?: string | null;
  currencyId?: string | null;
  /** @format double */
  baseBet?: number;
  /** @format int32 */
  mines?: number;
}

export interface XxyyGameEAPIServicesGameEngineLoginDto {
  userId?: string | null;
  providerId?: string | null;
  operatorId?: string | null;
  countryId?: string | null;
  currencyId?: string | null;
  langId?: string | null;
  operatorLangs?: string[] | null;
  lobbyUrl?: string | null;
  bankUrl?: string | null;
  appServerToken?: string | null;
}

export interface XxyyGameEAPIServicesGameEngineLoginIpo {
  appId?: string | null;
  ticket?: string | null;
  userId?: string | null;
}

export interface XxyyGameEAPIServicesPlayerInfo {
  /** @format double */
  balance?: number;
}

export interface XxyyGameEAPIServicesSyncDto {
  playerInfo?: XxyyGameEAPIServicesPlayerInfo;
}

export interface XxyyGameEAPIServicesSyncIpo {
  userId?: string | null;
  currencyId?: string | null;
}
