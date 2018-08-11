export function getTradeUrl(str: String): Array<String> {
  let urlArr: Array<String> = [];
  let regPro = /(http(s?):\/\/(\w+.ihealthcoming.com|\w+.baymy.cn)[A-Za-z0-9_\-/.?=&;#]*)/g
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
