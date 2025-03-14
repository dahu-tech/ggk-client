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

import { GoldGgkBLLBetSvcBetDto, GoldGgkBLLBetSvcBetIpo, GoldGgkBLLLoadSvcLoadDto, GoldGgkBLLLoadSvcLoadIpo } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class GoldGgk<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags GoldGgk
   * @name Load
   * @request POST:/api/GoldGgk/Load
   * @secure
   */
  load = (data: GoldGgkBLLLoadSvcLoadIpo, params: RequestParams = {}) =>
    this.request<GoldGgkBLLLoadSvcLoadDto, any>({
      path: `/v1/ggk/load`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags GoldGgk
   * @name Bet
   * @request POST:/api/GoldGgk/Bet
   * @secure
   */
  bet = (data: GoldGgkBLLBetSvcBetIpo, params: RequestParams = {}) =>
    this.request<GoldGgkBLLBetSvcBetDto, any>({
      path: `/api/GoldGgk/Bet`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
