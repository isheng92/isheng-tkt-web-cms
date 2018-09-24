/*数据正则校验工具*/

export default {
  install (Vue) {
    /** 验证是否是手机号 */
    Vue.prototype.isMobile = function(val) {
      let mobile = /^1[3|4|5|6|7|8|9]\d{9}$/
      return mobile.test(val);
    };

    /** 验证邮箱*/
    Vue.prototype.isEmail = function (val) {
      let email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      return email.test(val);
    };

  }/*install*/

}/*export default */

