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

export type DahuFeatureServiceApplyToBeReferrerRequest = object;

export interface DahuFeatureServiceApplyToBeReferrerResponse {
  /** 是否是代理 */
  isReferrer?: boolean;

  /**
   * 代理状态
   * @format int32
   */
  status?: number;

  /**
   * 代理级别
   * @format int32
   */
  level?: number;
}

export interface DahuFeatureServiceCreateReferralWithdrawOrderRequest {
  /**
   * 提现类型 1:转账到平台,2:提现到手机银行
   * @format int32
   */
  withdrawType?: number;

  /** 费用 */
  amount?: string;

  /** 收款银行 */
  receivingBankCode?: string;

  /** 收款账号 */
  receivingAccount?: string;

  /** 收款姓名 */
  receivingName?: string;

  /** 支付渠道 */
  payChannel?: string;

  /**
   * 支付方法配置的ID
   * @format int64
   */
  paymentMethodConfigId?: string;
}

export interface DahuFeatureServiceCreateReferralWithdrawOrderResponse {
  /**
   * id
   * @format int64
   */
  id?: string;
}

export type DahuFeatureServiceGetReferralWithdrawConfigRequest = object;

export interface DahuFeatureServiceGetReferralWithdrawConfigResponse {
  /**
   * 提现间隔周期,日：1，周：2，月：3
   * @format int32
   */
  withdrawCycle?: number;

  /**
   * 提现间隔数值
   * @format int32
   */
  withdrawCycleValue?: number;

  /**
   * 周期内已提现次数
   * @format int64
   */
  withdrawCountInCycle?: string;

  /** 提现到平台账号最小金额 */
  withdrawToPlatformMinimum?: string;

  /** 提现到手机银行最小金额 */
  withdrawToMobileMinimum?: string;

  /** 提现到银行卡手续费(example: 0.05 表示 5%) */
  withdrawToMobileFee?: string;
}

export interface DahuFeatureServiceGetReferralWithdrawOrdersRequest {
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页大小
   * @format int32
   */
  pageSize?: number;
}

export interface DahuFeatureServiceGetReferralWithdrawOrdersResponse {
  /**
   * 总页数
   * @format int32
   */
  totalPage?: number;

  /** 记录列表 */
  orders?: DahuFeatureServiceReferralWithdrawOrder[];
}

export type DahuFeatureServiceGetReferrerInfoRequest = object;

export interface DahuFeatureServiceGetReferrerInfoResponse {
  /** 是否已经申请 */
  isApply?: boolean;

  /**
   * 代理状态，0:申请中，1:状态正常，-1:拒绝, -2:冻结
   * @format int32
   */
  status?: number;

  /**
   * 代理级别
   * @format int32
   */
  level?: number;

  /** 代理Code */
  code?: string;

  /** 钱包 */
  balance?: string;

  /** 今日新增 */
  newlyAdded?: string;

  /** 历史总佣金 */
  totalCommission?: string;

  /** 货币 */
  currency?: string;

  /** 货币别名 */
  currencyAlias?: string;

  /**
   * 推荐的人数
   * @format int64
   */
  refereeUserCount?: string;

  /**
   * 今日新增推荐的人数
   * @format int64
   */
  newRefereeUserCount?: string;

  /** 是否是代理用户 */
  isRefereeUser?: boolean;

  /**
   * 剩余申请时间
   * @format int32
   */
  remainApplyTime?: number;
}

export interface DahuFeatureServiceRefPingRequest {
  /**
   * 时间戳
   * The ID of the example item
   * @format int64
   * @example 123
   */
  timestamp?: number;

  /** 留言 */
  info?: string;
}

export interface DahuFeatureServiceRefPingResponse {
  /**
   * 前端时间戳
   * @format int64
   */
  frontTimestamp?: string;

  /**
   * 后端时间戳
   * @format int64
   */
  backTimestamp?: string;

  /** 留言 */
  info?: string;
}

export interface DahuFeatureServiceRefereeUser {
  /** 用户UID，252****515 */
  userId?: string;

  /** 佣金 */
  commission?: string;

  /** 代理佣金 */
  agentCommission?: string;

  /**
   * 创建时间
   * @format int64
   */
  createdTime?: string;
}

export interface DahuFeatureServiceRefereeUsersRequest {
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页大小
   * @format int32
   */
  pageSize?: number;

  /**
   * 用户ID (非必填，不填写差所有的，添了就只查询该用户的)
   * @format int64
   */
  userId?: string;
}

export interface DahuFeatureServiceRefereeUsersResponse {
  /**
   * 推荐的人数
   * @format int64
   */
  refereeUserCount?: string;

  /**
   * 今日新增推荐的人数
   * @format int64
   */
  newRefereeUserCount?: string;

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number;

  /** 记录列表 */
  users?: DahuFeatureServiceRefereeUser[];
}

export interface DahuFeatureServiceReferralWithdrawOrder {
  /**
   * id
   * @format int64
   */
  id?: string;

  /**
   * 用户UID
   * @format int64
   */
  userId?: string;

  /** 国家 */
  country?: string;

  /** 货币类型 */
  currency?: string;

  /** 提现金额 */
  amount?: string;

  /**
   * 提现状态，1:处理中，2:转账中，3:提现成功，-1:提现失败
   * @format int32
   */
  status?: number;

  /**
   * 提现类型 1:转账到平台,2:提现到手机银行
   * @format int32
   */
  withdrawType?: number;

  /**
   * 支付ID
   * @format int64
   */
  transactionId?: string;

  /**
   * 创建时间
   * @format int64
   */
  createdAt?: string;

  /** 收款银行 */
  receivingBank?: string;

  /** 收款账号 */
  receivingAccount?: string;

  /** 收款姓名 */
  receivingName?: string;

  /** 实际到账金额 */
  receivingAmount?: string;

  /** 支付渠道 */
  payChannel?: string;
}

export interface DahuFeatureServiceReferralWithdrawOrderQueryRequest {
  /**
   * 订单ID
   * @format int64
   */
  orderId?: string;
}

export interface DahuFeatureServiceReferralWithdrawOrderQueryResponse {
  /**
   * 状态
   * @format int32
   */
  status?: number;

  /** 充值额度 */
  amount?: string;

  /**
   * 支付ID
   * @format int64
   */
  transactionId?: string;
}

export interface DahuFeatureServiceReferrerDailyRecord {
  /** 日期标签 */
  dailyTag?: string;

  /** 佣金 */
  commission?: string;

  /** 代理佣金 */
  agentCommission?: string;

  /**
   * 创建时间
   * @format int64
   */
  createdTime?: string;
}

export interface DahuFeatureServiceReferrerDailyRecordsRequest {
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页大小
   * @format int32
   */
  pageSize?: number;
}

export interface DahuFeatureServiceReferrerDailyRecordsResponse {
  /**
   * 总页数
   * @format int32
   */
  totalPage?: number;

  /** 记录列表 */
  records?: DahuFeatureServiceReferrerDailyRecord[];

  /** 历史贡献佣金 */
  totalCommission?: string;

  /** 历史代理佣金 */
  totalAgentCommission?: string;

  /** 货币 */
  currency?: string;

  /** 货币别名 */
  currencyAlias?: string;
}

export interface DahuFeatureServiceReferrerDailyUserRecord {
  /** 用户UID，252****515 */
  userId?: string;

  /** 佣金 */
  commission?: string;

  /** 代理佣金 */
  agentCommission?: string;

  /**
   * 创建时间
   * @format int64
   */
  createdTime?: string;
}

export interface DahuFeatureServiceReferrerDailyUserRecordsRequest {
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页大小
   * @format int32
   */
  pageSize?: number;

  /** 日期标签（必填） */
  dailyTag?: string;

  /**
   * 用户ID (非必填，不填写差所有的，添了就只查询该用户的)
   * @format int64
   */
  userId?: string;
}

export interface DahuFeatureServiceReferrerDailyUserRecordsResponse {
  /**
   * 总页数
   * @format int32
   */
  totalPage?: number;

  /** 记录列表 */
  records?: DahuFeatureServiceReferrerDailyUserRecord[];
}

export interface DahuFeatureServiceUserDailyRecord {
  /** 日期标签 */
  dailyTag?: string;

  /** 佣金 */
  commission?: string;

  /** 代理佣金 */
  agentCommission?: string;

  /**
   * 创建时间
   * @format int64
   */
  createdTime?: string;
}

export interface DahuFeatureServiceUserDailyRecordsRequest {
  /**
   * 页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页大小
   * @format int32
   */
  pageSize?: number;

  /**
   * 用户ID (必填)
   * @format int64
   */
  userId?: string;
}

export interface DahuFeatureServiceUserDailyRecordsResponse {
  /** 历史贡献佣金 */
  totalCommission?: string;

  /** 历史代理佣金 */
  totalAgentCommission?: string;

  /**
   * 总页数
   * @format int32
   */
  totalPage?: number;

  /** 货币 */
  currency?: string;

  /** 货币别名 */
  currencyAlias?: string;

  /** 记录列表 */
  records?: DahuFeatureServiceUserDailyRecord[];
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}
