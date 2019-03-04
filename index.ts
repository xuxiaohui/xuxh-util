/**
 * 获取页面中对应域名的所有链接
 * @param str 
 */
function getTradeUrl(str: string): string[] {
  let urlArr: string[] = [];
  let regPro = /(http(s?):\/\/(\w+.ihealthcoming.com|\w+.baymy.cn)[A-Za-z0-9_\-/.?=&;#]*)/g;
  let element = checkHtmlStr(str);
  if (element) {
    (element.match(regPro) || []).forEach(function(item) {
      if (urlArr.indexOf(item) < 0) {
        urlArr.push(item);
      }
    });
  }
  return urlArr;
}

/**
 * 提取对应文本中的有效链接地址
 * @param contents 需要处理的
 * @return {*}
 */
function getTradeUrls(...contents:string[]): string[] {
  let arr: string[] = [];
  for (let content of contents) {
    arr.push(content);
  }
  return getTradeUrlsForArr(arr);
}

function getTradeUrlsForArr(arr: string[]): string[] {
  let retArr: string[] = [];
  arr.forEach(item => {
    retArr = retArr.concat(getTradeUrl(item));
  });
  return retArr;
}

/**
 * 更改url中某个参数的值
 * @param url 待更改的url链接
 * @param arg 参数名称
 * @param arg_val 参数值
 */
function changeURLArg(url: string, arg: string, arg_val: string) {
  let pattern = arg + "=([^&]*)";
  let replaceText = arg + "=" + arg_val;
  if (url.match(pattern)) {
    let tmp = url.replace(
      new RegExp("(" + arg + "=)([^&]*)", "gi"),
      replaceText
    );
    return tmp;
  } else {
    if (url.match("[?]")) {
      return url + "&" + replaceText;
    } else {
      return url + "?" + replaceText;
    }
  }
}

/**
 * 替换字符串
 * @param content 待替换的字符串
 * @param tradeStr 被替换的字符串
 * @param targetStr 将要替换成的字符串
 */
function replaceAllForString(
  content: string,
  tradeStr: string,
  targetStr: string
): string {
  tradeStr = tradeStr.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  return content.replace(new RegExp(tradeStr, "g"), targetStr);
}

/**
 * 判断链接是不是我们域名的url
 * @param url
 */
function isOurWeixinURL(url: string): boolean {
  let regPro = /(http(s?):\/\/(\w+.ihealthcoming.com|\w+.baymy.cn)[A-Za-z0-9_\-/.?=&;#]*)/g;
  return regPro.test(url);
}

/**
 * 从给定的url中提取出对应的id值
 * @param url
 */
function getUrlIds(url: string): number[] {
  let reg = /id=([0-9]+)/gi;
  let ids: number[] = [];
  while (reg.test(url)) {
    ids.push(parseInt(RegExp.$1));
  }
  return ids;
}

/**
 * 对链接中需要转义的html符号进行转义
 * @param str
 */
function checkHtmlStr(str: string): string {
  let s : string = "";
  if (str.length == 0) return "";
  s = str.replace(/&amp;/g, "&");
  s = s.replace(/&lt;/g, "<");
  s = s.replace(/&gt;/g, ">");
  s = s.replace(/&nbsp;/g, " ");
  s = s.replace(/&#39;/g, "'");
  s = s.replace(/&quot;/g, '"');
  return s;
}

/**
 * 判断一个对象是否是空对象
 */
function isEmptyObject(obj:any):Boolean {
  if (!obj) return true
  let name
  for (name in obj) {
    return false
  }
  return true
}

/**
 * 清理对象中的空值和undefined值
 */
function clearObject(params:any): any {
  if (!params || isEmptyObject(params)) return params
  let keys = Object.keys(params)
  /** 删除失效的查询属性 **/
  keys.forEach((key: any) => {
    if (!params[key]) {
      if (!isNaN(parseInt(params[key])) && parseInt(params[key]) === 0) {
      } else {
        delete params[key]
      }
    }
  })
  return params
}

/**
 * 对广告列表进行分类存储
 * @param arr 待处理的数组
 */
function sortAdverts(arr:Array<any>):Array<any>{
  let resultArr:Array<Object> = [];
  let currObj:any = {};
  if (arr && arr.length) {
    arr.forEach(item => {
      if (+item.adSet === 22) {
        item.getNum = item.getNum && item.getNum > 0 ? item.getNum : 3;
        item.list = new Array(item.getNum).map(() => { return {} })
      }
      if (currObj && item.adSet === currObj.key) {
        currObj.arr.push(item)
      } else {
        if (currObj && currObj.key) {
           resultArr.push(currObj) 
        }
        currObj = {
          key:item.adSet,
          arr:[item]
        }
      }
    })
    currObj && currObj.key && resultArr.push(currObj)
  }
  return resultArr;
}

/**
 * 生成一个跳转的链接
 * @param path 需要处理的链接
 * @param params 需要带上的参数
 */
function makePath(path:string, params:Object):string {
    let obj = clearObject(params);
    let arr = Object.keys(obj).sort();
    let resultPath : string = path;
    arr.forEach(item => {
        resultPath = changeURLArg(resultPath, item, obj[item] && obj[item].toString());
    });
    return resultPath;
}

const exportObj = {
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
};

module.exports = exportObj;