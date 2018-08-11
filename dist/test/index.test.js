"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
var index_1 = require("../src/index");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.testGetTradeUrl = function () {
        var testStr1 = "\u5468\u672B\u798F\u5229\uE312\n        \u7ED9\u3016\u5B55\u671F\u5988\u5988\u3017\n        525\u5B55\u5987\u7167\u514D\u8D39\u62CD\uFF08\u4EC5\u526999\u4E2A\u540D\u989D\uFF09\n        \u300C\u62A5\u540D\u300D\uE231http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3426\n        \n        \u5B55\u5988\u8FD0\u52A8\u8BAD\u7EC3\uFF0C\u4E13\u5C5E\u4E00\u5BF9\u4E00\u79C1\u6559\u4F53\u9A8C\u8BFE\uFF1A\n        \u300C\u4F53\u9A8C\u300D\uE231http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3581\n        \n        \u4E09\u7532\u540D\u533B\u56DB\u7EF4\u5F69\u8D85\uFF0C\u7ED9\u5B9D\u5B9D\u7684\u7B2C\u4E00\u5F20\u3010\u7167\u7247\u3011\n        \u9884\u7EA6\u514D\u6392\u961F\uFF0C\u8FD8\u6709\u72EC\uFF01\u5BB6\uFF01\u7279\uFF01\u60E0\uFF01\n        \u300C\u53C2\u4E0E\u300D?http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=2713\n        \n        \u7ED9\u3016\u4EA7\u540E\u5988\u5988\u3017\n        \u84DD\u4E1D\u5E26\u4EA7\u540E\u4FEE\u590D\u670D\u52A1\uFF0C\u4F53\u9A8C\u8FC7\u7684\u5988\u5988\u8BF4\u5F88\u8212\u670D\u54E6[\u5978\u7B11]\n        \uFF08\u9AA8\u76C6\u5EB7\u590D\u3001\u5B50\u5BAB\u590D\u65E7\u3001\u6E29\u5BAB\u6563\u5BD2\u2026\u2026\u2026.\uFF09\n        \u300C\u4F53\u9A8C\u300D\uE231http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3436\n        \n        \u3016\u4E00\u8D77\u6765\u3017\n        \u5E74\u5EA6\u201C\u5B55\u5987\u8282\u201D\u76DB\u5178\u9080\u60A8\u53C2\u4E0E\uFF0C\u6709\u8C6A\u793C\uE112?\n        \uFF08\u540C\u65F6\u62DB\u52DF\u8868\u6F14\u5609\u5BBE+\u89C2\u4F17\u54E6\uFF09\n        \u300C\u62A5\u540D\u300D\uE231https://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618\n        \n        \u6D4B\u8BD5\u94FE\u63A5\u6765\u4E86\n        https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323\n        http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770\n\u8FD8\u6709\u535A\u89C8\u4F1A\u7684\u94FE\u63A5\u54E6\nhttp://szmuyingzhan.ihealthcoming.com/conference/views/success.html?userId=298&channel=yuejk&date=2018-07-30&vHMC=66&vHMP=szyueer1&isYun=true\u8FD8\u54E6\u54E6\u54E6";
        var arr = index_1.getTradeUrl(testStr1);
        chai_1.expect(arr.length).to.be.equal(7);
    };
    __decorate([
        mocha_typescript_1.test
    ], Test.prototype, "testGetTradeUrl", null);
    Test = __decorate([
        mocha_typescript_1.suite("A suite")
    ], Test);
    return Test;
}());
