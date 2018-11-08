/**
 * 获取页面中对应域名的所有链接
 * @param str 
 */
export function getTradeUrl(str: string): string[] {
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
export function getTradeUrls(...contents:string[]): string[] {
  let arr: string[] = [];
  for (let content of contents) {
    arr.push(content);
  }
  return getTradeUrlsForArr(arr);
}

export function getTradeUrlsForArr(arr: string[]): string[] {
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
export function changeURLArg(url: string, arg: string, arg_val: string) {
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
export function replaceAllForString(
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
export function isOurWeixinURL(url: string): boolean {
  let regPro = /(http(s?):\/\/(\w+.ihealthcoming.com|\w+.baymy.cn)[A-Za-z0-9_\-/.?=&;#]*)/g;
  return regPro.test(url);
}

/**
 * 从给定的url中提取出对应的id值
 * @param url
 */
export function getUrlIds(url: string): number[] {
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
function checkHtmlStr(str: String): String {
  let s = "";
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
export function isEmptyObject(obj:any):Boolean {
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
export function clearObject(params:any): any {
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
