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

import {
  DahuFeatureServiceApplyToBeReferrerRequest,
  DahuFeatureServiceApplyToBeReferrerResponse,
  DahuFeatureServiceCreateReferralWithdrawOrderRequest,
  DahuFeatureServiceCreateReferralWithdrawOrderResponse,
  DahuFeatureServiceGetReferralWithdrawConfigRequest,
  DahuFeatureServiceGetReferralWithdrawConfigResponse,
  DahuFeatureServiceGetReferralWithdrawOrdersRequest,
  DahuFeatureServiceGetReferralWithdrawOrdersResponse,
  DahuFeatureServiceGetReferrerInfoRequest,
  DahuFeatureServiceGetReferrerInfoResponse,
  DahuFeatureServiceRefereeUsersRequest,
  DahuFeatureServiceRefereeUsersResponse,
  DahuFeatureServiceReferralWithdrawOrderQueryRequest,
  DahuFeatureServiceReferralWithdrawOrderQueryResponse,
  DahuFeatureServiceReferrerDailyRecordsRequest,
  DahuFeatureServiceReferrerDailyRecordsResponse,
  DahuFeatureServiceReferrerDailyUserRecordsRequest,
  DahuFeatureServiceReferrerDailyUserRecordsResponse,
  DahuFeatureServiceRefPingRequest,
  DahuFeatureServiceRefPingResponse,
  DahuFeatureServiceUserDailyRecordsRequest,
  DahuFeatureServiceUserDailyRecordsResponse,
  RpcStatus,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class V1<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description 申请成为代理，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceApplyToBeReferrer
   * @summary 申请成为代理
   * @request POST:/v1/referral/applyToBeReferrer
   * @secure
   */
  referralServiceApplyToBeReferrer = (body: DahuFeatureServiceApplyToBeReferrerRequest, params: RequestParams = {}) =>
    this.request<DahuFeatureServiceApplyToBeReferrerResponse, RpcStatus>({
      path: `/v1/referral/applyToBeReferrer`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 创建提现订单，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceCreateReferralWithdrawOrder
   * @summary 创建提现订单
   * @request POST:/v1/referral/createWithdrawOrder
   * @secure
   */
  referralServiceCreateReferralWithdrawOrder = (
    body: DahuFeatureServiceCreateReferralWithdrawOrderRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceCreateReferralWithdrawOrderResponse, RpcStatus>({
      path: `/v1/referral/createWithdrawOrder`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ping 详情
   *
   * @tags 测试, 分组2
   * @name ReferralServicePing
   * @summary ping 摘要
   * @request POST:/v1/referral/ping
   * @secure
   */
  referralServicePing = (body: DahuFeatureServiceRefPingRequest, params: RequestParams = {}) =>
    this.request<DahuFeatureServiceRefPingResponse, RpcStatus>({
      path: `/v1/referral/ping`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取代理人下的用户列表，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceRefereeUsers
   * @summary 获取代理人下的用户列表
   * @request POST:/v1/referral/refereeUsers
   * @secure
   */
  referralServiceRefereeUsers = (body: DahuFeatureServiceRefereeUsersRequest, params: RequestParams = {}) =>
    this.request<DahuFeatureServiceRefereeUsersResponse, RpcStatus>({
      path: `/v1/referral/refereeUsers`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取代理人某个日期下用户的佣金日报列表，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceReferrerDailyUserRecords
   * @summary 获取代理人某个日期下用户的佣金日报列表
   * @request POST:/v1/referral/referrerDailyUserRecords
   * @secure
   */
  referralServiceReferrerDailyUserRecords = (
    body: DahuFeatureServiceReferrerDailyUserRecordsRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceReferrerDailyUserRecordsResponse, RpcStatus>({
      path: `/v1/referral/referrerDailyUserRecords`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取代理人信息，参数不用传，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceGetReferrerInfo
   * @summary 获取代理人信息
   * @request POST:/v1/referral/referrerInfo
   * @secure
   */
  referralServiceGetReferrerInfo = (body: DahuFeatureServiceGetReferrerInfoRequest, params: RequestParams = {}) =>
    this.request<DahuFeatureServiceGetReferrerInfoResponse, RpcStatus>({
      path: `/v1/referral/referrerInfo`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取代理人佣金日报列表，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceReferrerDailyRecords
   * @summary 获取代理人佣金日报列表
   * @request POST:/v1/referral/referrerRecords
   * @secure
   */
  referralServiceReferrerDailyRecords = (
    body: DahuFeatureServiceReferrerDailyRecordsRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceReferrerDailyRecordsResponse, RpcStatus>({
      path: `/v1/referral/referrerRecords`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取某个用户佣金日报列表，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceUserDailyRecords
   * @summary 获取某个用户佣金日报列表
   * @request POST:/v1/referral/userRecords
   * @secure
   */
  referralServiceUserDailyRecords = (body: DahuFeatureServiceUserDailyRecordsRequest, params: RequestParams = {}) =>
    this.request<DahuFeatureServiceUserDailyRecordsResponse, RpcStatus>({
      path: `/v1/referral/userRecords`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取提现配置，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceGetReferralWithdrawConfig
   * @summary 获取提现配置
   * @request POST:/v1/referral/withdrawConfig
   * @secure
   */
  referralServiceGetReferralWithdrawConfig = (
    body: DahuFeatureServiceGetReferralWithdrawConfigRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceGetReferralWithdrawConfigResponse, RpcStatus>({
      path: `/v1/referral/withdrawConfig`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 查询订单支付状态，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceReferralWithdrawOrderQuery
   * @summary 查询订单支付状态
   * @request POST:/v1/referral/withdrawOrderQuery
   * @secure
   */
  referralServiceReferralWithdrawOrderQuery = (
    body: DahuFeatureServiceReferralWithdrawOrderQueryRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceReferralWithdrawOrderQueryResponse, RpcStatus>({
      path: `/v1/referral/withdrawOrderQuery`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description 获取提现订单列表，必须有登录态
   *
   * @tags 代理
   * @name ReferralServiceGetReferralWithdrawOrders
   * @summary 获取提现订单列表
   * @request POST:/v1/referral/withdrawOrders
   * @secure
   */
  referralServiceGetReferralWithdrawOrders = (
    body: DahuFeatureServiceGetReferralWithdrawOrdersRequest,
    params: RequestParams = {},
  ) =>
    this.request<DahuFeatureServiceGetReferralWithdrawOrdersResponse, RpcStatus>({
      path: `/v1/referral/withdrawOrders`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
