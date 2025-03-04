import * as CONTS from "./data-contracts";
import { ApiConfig, RequestParams } from "./http-client";
import * as xcore from '@xxyy/core';
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
            body =  body || null;
            var sign = accessKey ? uuid + '|' + xcore.CryptoUtil.hmacSHA256(JSON.stringify(body), accessKey) : null;
            var _secure = (_token != null && _token != undefined) || accessKey;
            if (_secure) {
                params.secure = true;
                params.headers = {
                    Authorization: `Bearer ${_token}`,
                    "tinyfx-sign": sign
                }
            }
            return params;
        }
    };

    goldGgk = new GoldGgk(config);
}

export const api = {
    get goldGgk() { return goldGgk; },
    CONTS,
    init
};