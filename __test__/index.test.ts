import { expect } from "chai";
import "mocha";
import * as tool from "../index";

describe("测试", () => {
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

  let testStr3 = `周末福利
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
        `
  let testStr2 = `
        ?羊城首家专注产后运动恢复塑身馆苏晴教练『骨盆修复』小班体验课 ✚ 赠1次骨盆检测，戳▼
        
        http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3723
        
        『产后收腹』小班课仍可报名，戳▼
        
        http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453
        
        ?全国首家李欣普拉提孕动主题店李华敏团队产后运动修复体验课（私教），戳▼
        
        http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535`

  it("test getTradeUrl", () => {
    
    let arr = tool.getTradeUrl(testStr1);
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
  it('getTradeUrl with https', () => {
    let arr = tool.getTradeUrl(testStr3)
    expect(arr.length).to.be.equal(7)
    expect(arr).to.include('http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770')
    expect(arr).to.include('https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')
    expect(arr).to.include('https://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=2713')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3581')
    expect(arr).to.include('http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3426')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3436')
  })
  it('test getTradeUrls', () => {
    let arr = tool.getTradeUrls(testStr1, testStr2)
    expect(arr.length).to.be.equal(11)
    expect(arr).to.include('http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770')
    expect(arr).to.include('https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')
    expect(arr).to.include('https://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=2713')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3581')
    expect(arr).to.include('http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3426')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3436')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3723')
    expect(arr).to.include('http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453')
    expect(arr).to.include('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')
    expect(arr).to.include('http://szmuyingzhan.ihealthcoming.com/conference/views/success.html?userId=298&channel=yuejk&date=2018-07-30&vHMC=66&vHMP=szyueer1&isYun=true')
  })
  it('replaceAllForString', () => {
    let testStr4 = `
      ?羊城首家专注产后运动恢复塑身馆苏晴教练『骨盆修复』小班体验课 ✚ 赠1次骨盆检测，戳▼
      
      http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3723
      
      『产后收腹』小班课仍可报名，戳▼
      
      http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453&vHMC=66&vHMP=yueer
      http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453&vHMC=66&vHMP=yueer
      
      ?全国首家李欣普拉提孕动主题店李华敏团队产后运动修复体验课（私教），戳▼
      
      http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535`

    let targetStr = tool.replaceAllForString(testStr4, 'http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453&vHMC=66&vHMP=yueer', 'http://www.baidu.com')

    expect(targetStr).to.be.equal(`
      ?羊城首家专注产后运动恢复塑身馆苏晴教练『骨盆修复』小班体验课 ✚ 赠1次骨盆检测，戳▼
      
      http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3723
      
      『产后收腹』小班课仍可报名，戳▼
      
      http://www.baidu.com
      http://www.baidu.com
      
      ?全国首家李欣普拉提孕动主题店李华敏团队产后运动修复体验课（私教），戳▼
      
      http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535`)
  })

  it('isOurWeixinURL', () => {
    expect(tool.isOurWeixinURL('http://www.baidu.com')).to.be.false
    expect(tool.isOurWeixinURL('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')).to.be.true
    expect(tool.isOurWeixinURL('https://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')).to.be.true
    expect(tool.isOurWeixinURL('http://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')).to.be.true
    expect(tool.isOurWeixinURL('https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')).to.be.true
  });
  it('getUrlIds', () => {
    // 商品详情
    let activityUrlIds = tool.getUrlIds('https://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')
    expect(activityUrlIds.length).to.be.equal(1)
    expect(activityUrlIds).to.include(3535)

    // 健康早报
    let morningPaperIds = tool.getUrlIds('http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770')
    expect(morningPaperIds.length).to.be.equal(1)
    expect(morningPaperIds).to.include(3770)

    //健康知识库
    let knowledgeIds = tool.getUrlIds('https://webchat.ihealthcoming.com/knowledgebase/views/knowledge_detail.html?bookId=4184&vHMC=11&vHMP=youer&vNum=1&vLAST=youer')
    expect(knowledgeIds.length).to.be.equal(1)
    expect(knowledgeIds).to.include(4184)

    //月子中心详情
    let yeuziIds = tool.getUrlIds('http://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')
    expect(yeuziIds.length).to.be.equal(1)
    expect(yeuziIds).to.include(3323)
    
    // 健康活动
    let welfareIds = tool.getUrlIds('http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618')
    expect(welfareIds.length).to.be.equal(1)
    expect(welfareIds).to.include(3618)
    let classH5Ids = tool.getUrlIds('https://webchat.ihealthcoming.com/miniProgramShare/views/classShare.html?vHMC=66-40093-2&vHMP=yueer4&classId=97&classType=1&chapterId=1523&from=timeline&isappinstalled=0&followAssistant=1')
    expect(classH5Ids.length).to.be.equal(2)
    expect(classH5Ids).to.include(97)
    expect(classH5Ids).to.include(1523)
  })
  it('test isEmptyObject', () => {
    expect(tool.isEmptyObject({})).to.be.true
    expect(tool.isEmptyObject({a:'b'})).to.be.false
    expect(tool.isEmptyObject(null)).to.be.true
    expect(tool.isEmptyObject(undefined)).to.be.true
  })
  it("test clearObject", () => {
    expect(tool.clearObject({ a: '1', b: 'o' })).to.deep.equal({ b: 'o',a:'1'})
    expect(tool.clearObject({ a: '1', b: 'o',c:null,d:undefined })).to.deep.equal({ b: 'o',a:'1'})
    expect(tool.clearObject({ a: '1', b: 'o',c:null,d:undefined,e:0 })).to.deep.equal({ b: 'o',a:'1',e:0})
    expect(tool.clearObject(null)).to.equal(null)
    expect(tool.clearObject(undefined)).to.equal(undefined)
    expect(tool.clearObject(0)).to.equal(0)
  });
});
