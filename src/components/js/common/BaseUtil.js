// /************************** 自定义公共工具类******************/

export default {
  install (Vue, options) {

    /** 判断是否为null, 或"" */
    Vue.prototype.isEmpty = function (val) {
      return null == val || val.trim(val).length === 0;
    };

    /** 判断是否不为空 */
    Vue.prototype.isNotEmpty = function (val) {
      return !this.isEmpty(val);
    };

    /** json转字符串 */
    Vue.prototype.jsonToString = function (jsonData) {
      if (jsonData) {
        return JSON.stringify(jsonData);
      }
      return "";
    };

    /** 字符串转json */
    Vue.prototype.stringToJson = function (string) {
      if (string) {
        return JSON.parse(string);
      }
      return null;
    };

    /*在Date原型上增加Format格式化方法*/
    Date.prototype.dataFormat = function (fmt) {
      let o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    };

    /** 消息提示框 */
    Vue.prototype.alertMsg = function (_msg) {
      let htmlStr = '<div id="myAlert" class="alert alert-success">'
        + '<a href="#" class="close" data-dismiss="alert">&times;</a>'
        + '<strong>提示消息！</strong>' + _msg
        + '</div>';
      return htmlStr;
    };

    /** 正确或错误的消息提示 */
    Vue.prototype.alertTap = function (_msg, bool) {
      if (!_msg) {
        _msg = '错误信息获取失败！';
        if (bool) {
          _msg = '成功信息获取失败！';
        }
      }
      let classStyle = 'alert-warning';
      let message = '<strong>出错了！</strong>' + _msg;
      if (bool) {
        classStyle = 'alert-success';
        message = '<strong>成功了！</strong>' + _msg
      }
      let html = '<div id="myAlert" class="alert alert-success">'
        + '<a href="#" class="close" data-dismiss="alert">&times;</a>'
        + _msg
        + '</div>';
      return html
    };

    /** get请求 */
    Vue.prototype.httpGet = function (_url, _params) {
      return this.httpHandler(_url, _params, "GET");
    };

    /** post请求 */
    Vue.prototype.httpPost = function (_url, _params) {
      return this.httpHandler(_url, _params, "POST");
    };

    /** 执行get或post请求 */
    Vue.prototype.httpHandler = function (_url, _params, _httpMethod) {
      this.$http({
        method: _httpMethod ? _httpMethod : "POST",
        url: _url,
        params: _params
      }).then(function (res) {
        return res;
      }).catch(function (err) {
          this.alertTap("系统异常", false);
      });
    };

  } /*install*/

}/*export default */

