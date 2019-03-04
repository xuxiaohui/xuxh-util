import { expect } from "chai";
import "mocha";
import {
    getTradeUrl,
    getTradeUrls,
    getTradeUrlsForArr,
    changeURLArg,
    replaceAllForString,
    isOurWeixinURL,
    getUrlIds,
    isEmptyObject,
    clearObject,
    sortAdverts,
    makePath
} from "../index";

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
  it('getTradeUrl with https', () => {
    let arr = getTradeUrl(testStr3)
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
    let arr = getTradeUrls(testStr1, testStr2)
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

    let targetStr = replaceAllForString(testStr4, 'http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3453&vHMC=66&vHMP=yueer', 'http://www.baidu.com')

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
    expect(isOurWeixinURL('http://www.baidu.com')).to.be.false
    expect(isOurWeixinURL('http://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')).to.be.true
    expect(isOurWeixinURL('https://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')).to.be.true
    expect(isOurWeixinURL('http://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')).to.be.true
    expect(isOurWeixinURL('https://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')).to.be.true
  });
  it('getUrlIds', () => {
    // 商品详情
    let activityUrlIds = getUrlIds('https://webchat.ihealthcoming.com/webchatpay/views/ecshop_detail.html?ativityId=3535')
    expect(activityUrlIds.length).to.be.equal(1)
    expect(activityUrlIds).to.include(3535)

    // 健康早报
    let morningPaperIds = getUrlIds('http://webchat.baymy.cn/yuedoctor/views/morning_paper.html?id=3770')
    expect(morningPaperIds.length).to.be.equal(1)
    expect(morningPaperIds).to.include(3770)

    //健康知识库
    let knowledgeIds = getUrlIds('https://webchat.ihealthcoming.com/knowledgebase/views/knowledge_detail.html?bookId=4184&vHMC=11&vHMP=youer&vNum=1&vLAST=youer')
    expect(knowledgeIds.length).to.be.equal(1)
    expect(knowledgeIds).to.include(4184)

    //月子中心详情
    let yeuziIds = getUrlIds('http://webchat.baymy.cn/yuezicenter/views/yuezi_detail.html?id=3323')
    expect(yeuziIds.length).to.be.equal(1)
    expect(yeuziIds).to.include(3323)
    
    // 健康活动
    let welfareIds = getUrlIds('http://webchat.ihealthcoming.com/welfare/views/welfare_detail.html?id=3618')
    expect(welfareIds.length).to.be.equal(1)
    expect(welfareIds).to.include(3618)
    let classH5Ids = getUrlIds('https://webchat.ihealthcoming.com/miniProgramShare/views/classShare.html?vHMC=66-40093-2&vHMP=yueer4&classId=97&classType=1&chapterId=1523&from=timeline&isappinstalled=0&followAssistant=1')
    expect(classH5Ids.length).to.be.equal(2)
    expect(classH5Ids).to.include(97)
    expect(classH5Ids).to.include(1523)
  })
  it('test isEmptyObject', () => {
    expect(isEmptyObject({})).to.be.true
    expect(isEmptyObject({a:'b'})).to.be.false
    expect(isEmptyObject(null)).to.be.true
    expect(isEmptyObject(undefined)).to.be.true
  })
  it("test clearObject", () => {
    expect(clearObject({ a: '1', b: 'o' })).to.deep.equal({ b: 'o',a:'1'})
    expect(clearObject({ a: '1', b: 'o',c:null,d:undefined })).to.deep.equal({ b: 'o',a:'1'})
    expect(clearObject({ a: '1', b: 'o',c:null,d:undefined,e:0 })).to.deep.equal({ b: 'o',a:'1',e:0})
    expect(clearObject(null)).to.equal(null)
    expect(clearObject(undefined)).to.equal(undefined)
    expect(clearObject(0)).to.equal(0)
  });
  it("test sortAdverts", () => {
    let testArr = [{ "adId": 523, "adTital": "本地活动", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/yuedoctor/views/yue_list.html?adId=523", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00","dataStyle": 2 }, { "adId": 524, "adTital": "月子中心", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=29", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00", "getNum": 8, "dataStyle": 5 }, { "adId": 546, "adTital": "月嫂", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=37", "startDate": "2018-06-20 00:00:00", "endDate": "2024-06-20 00:00:00", "getNum": 5, "dataStyle": 5 }, { "adId": 526, "adTital": "时光留影", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=30", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00", "getNum": 20, "dataStyle": 5 }, { "adId": 525, "adTital": "现代孕妈妈", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=31", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00", "getNum": 5, "dataStyle": 5 }, { "adId": 527, "adTital": "产检分娩", "adType": 1, "adSet": 22, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=32", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00", "getNum": 5, "dataStyle": 5 }, { "adId": 528, "adTital": "情感咨询", "adType": 1, "adSet": 22, "usePosOrder": 0, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=33", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-04 00:00:00", "getNum": 5, "dataStyle": 5 }, { "adId": 529, "adTital": "好物甄选", "adType": 1, "adSet": 22, "usePosOrder": 0, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=34", "startDate": "2018-06-04 00:00:00", "endDate": "2024-06-30 00:00:00", "getNum": 5, "dataStyle": 5 }]
    let adMessageList = sortAdverts(testArr);
    expect(adMessageList.length).to.be.eq(1)
    expect(adMessageList[0].key).to.be.eq(22)
    expect(adMessageList[0].arr.length).to.be.eq(8)
    expect(adMessageList[0].arr[0].getNum).to.be.eq(3)
    expect(adMessageList[0].arr[1].getNum).to.be.eq(8)

    let testArr1 = [{ "adId": 595, "adTital": "妈妈精品课", "adPhoto": "http://file.ihealthcoming.com/manage/image/C8359F6A61C00001F3F9AB5A17A0A300", "adType": 4, "adSet": 35, "usePosOrder": 1, "startDate": "2018-09-04 00:00:00", "endDate": "2025-09-13 00:00:00", "dataStyle": 2 }, { "adId": 597, "adTital": "热门系列课", "adMsg": "热门系列课", "adType": 1, "adSet": 22, "usePosOrder": 1, "adUrl": "http://webchat.ihealthcoming.com/yuedoctor/views/yue_list.html?adId=597", "startDate": "2018-09-13 00:00:00", "endDate": "2025-09-13 00:00:00", "getNum": 4, "dataStyle": 2 }, { "adId": 600, "adTital": "孕妈妈", "adPhoto": "http://file.ihealthcoming.com/manage/image/C820D34A80F0000160131FD0E0D05A70", "adMsg": "孕妈妈", "adType": 1, "adSet": 36, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=58", "startDate": "2018-09-04 00:00:00", "endDate": "2021-09-08 00:00:00", "dataStyle": 6 }, { "adId": 603, "adTital": "宝宝", "adPhoto": "http://file.ihealthcoming.com/manage/image/C8211212B50000013BCCB1D01960156B", "adMsg": "宝宝", "adType": 1, "adSet": 36, "usePosOrder": 1, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=60", "startDate": "2018-09-05 00:00:00", "endDate": "2021-09-08 00:00:00", "dataStyle": 6 }, { "adId": 601, "adTital": "产后妈妈", "adPhoto": "http://file.ihealthcoming.com/manage/image/C82107D3C78000015ED71710169013D4", "adMsg": "产后妈妈", "adType": 1, "adSet": 36, "usePosOrder": 1, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=59", "startDate": "2018-09-05 00:00:00", "endDate": "2021-09-08 00:00:00", "dataStyle": 6 }, { "adId": 598, "adTital": "推荐课程", "adType": 1, "adSet": 22, "usePosOrder": 1, "adUrl": "http://webchat.ihealthcoming.com/public/views/public_index.html?pageId=3130", "startDate": "2018-09-21 00:00:00", "endDate": "2025-09-21 00:00:00", "getNum": 5, "dataStyle": 7 }]
    let adMessageList1 = sortAdverts(testArr1);
    expect(adMessageList1.length).to.be.eq(4);
    expect(adMessageList1[0].key).to.be.eq(35);
    expect(adMessageList1[0].arr.length).to.be.eq(1);
    expect(adMessageList1[1].key).to.be.eq(22);
    expect(adMessageList1[1].arr.length).to.be.eq(1);
    expect(adMessageList1[2].key).to.be.eq(36);
    expect(adMessageList1[2].arr.length).to.be.eq(3);
    expect(adMessageList1[3].key).to.be.eq(22);
    expect(adMessageList1[3].arr.length).to.be.eq(1);
  });
  it("test makePath", ()=>{
      expect(makePath('pages/sharepage/sharepage', {})).to.be.eq("pages/sharepage/sharepage")
      expect(makePath('pages/sharepage/sharepage', {
          test: true,
          abc: null,
          de: undefined,
          xy: '',
          flag: false
      })).to.be.eq("pages/sharepage/sharepage?test=true")
      expect(makePath("https://webchat.ihealthcoming.com/webchatpay/views/min_pro_detail.html?id=4539", {
        vHMC:66,
        vHMP:'yueer1'
      })).to.be.eq('https://webchat.ihealthcoming.com/webchatpay/views/min_pro_detail.html?id=4539&vHMC=66&vHMP=yueer1')
      expect(makePath("https://webchat.ihealthcoming.com/webchatpay/views/min_pro_detail.html?id=4539", {
        vHMC:66,
        vHMP:'yueer1',
        test: true,
        abc: null,
        de: undefined,
        xy: '',
        flag: false
      })).to.be.eq('https://webchat.ihealthcoming.com/webchatpay/views/min_pro_detail.html?id=4539&test=true&vHMC=66&vHMP=yueer1')
  })
});
