import { expect } from "chai";
import "mocha";
import { getTradeUrl } from "../index";

describe("测试", () => {
  it("test getTradeUrl", () => {
    let testStr1 = `周末福利
        给〖孕期妈妈〗
        525孕妇照免费拍（仅剩99个名额）
        「报名」http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3426
        
        孕妈运动训练，专属一对一私教体验课：
        「体验」http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3581
        
        三甲名医四维彩超，给宝宝的第一张【照片】
        预约免排队，还有独！家！特！惠！
        「参与」?http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=2713
        
        给〖产后妈妈〗
        蓝丝带产后修复服务，体验过的妈妈说很舒服哦[奸笑]
        （骨盆康复、子宫复旧、温宫散寒……….）
        「体验」http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3436
        
        〖一起来〗
        年度“孕妇节”盛典邀您参与，有豪礼?
        （同时招募表演嘉宾+观众哦）
        「报名」https://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618
        
        测试链接来了
        https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323
        http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770
还有博览会的链接哦
http://szmuyingzhan.ihealthcoming.com/conference/views/success.html?userId=298&channel=yuejk&date=2018-07-30&vHMC=66&vHMP=szyueer1&isYun=true还哦哦哦`;

    let arr = getTradeUrl(testStr1);
    expect(arr.length).to.be.equal(8);
    expect(arr).to.include(
      "http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770"
    );
    expect(arr).to.include(
      "https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323"
    );
    expect(arr).to.include(
      "https://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618"
    );
    expect(arr).to.include(
      "http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=2713"
    );
    expect(arr).to.include(
      "http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3581"
    );
    expect(arr).to.include(
      "http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3426"
    );
    expect(arr).to.include(
      "http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3436"
    );
    expect(arr).to.include(
      "http://szmuyingzhan.ihealthcoming.com/conference/views/success.html?userId=298&channel=yuejk&date=2018-07-30&vHMC=66&vHMP=szyueer1&isYun=true"
    );
  });
});
