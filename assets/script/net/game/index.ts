import * as CONTS from "./data-contracts";
import { ApiConfig, RequestParams } from "./http-client";
import { GoldGgk } from "./GoldGgk";

var config: ApiConfig<any>;
var goldGgk: GoldGgk = new GoldGgk();

function init(baseUrl: string, baseParams: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal"> = {}, getJwtTokenFunc: () => string | null, uuid, accessKey) {
  config = {
    baseUrl: baseUrl,
    baseApiParams: baseParams,
    securityWorker: (data: any, body: unknown) => {
      var params: RequestParams = {};
      var _token = getJwtTokenFunc();
      var _secure = (_token != null && _token != undefined) || accessKey;
      if (_secure) {
        params.secure = true;
        params.headers = {
          token: _token,
        };
      }
      return params;
    },
  };

  goldGgk = new GoldGgk(config);
}

export const api = {
  get goldGgk() {
    return goldGgk;
  },
  CONTS,
  init,
};
