<!--系统提示信息-->
<template>
  <div v-show="isShow" v-bind:class="classStyle">
    <a href="#" class="close" data-dismiss="alert"> &times;</a>
    <strong>{{title}}&nbsp;&nbsp;</strong>{{msg}}
  </div>
</template>

<script>
	export default {
		name: "AlertMsg",
    data: function () {
		  return {
          isShow: false,//是否展示提示框
          isSuccess: false,//成功还是失败的提示
          classStyle: "alert alert-warning",//提示层背景样式，默认为出错时的样式
          title: "提示信息！",//提示title
          msg: "提示信息详情未知。",//提示详情
      }
    },
    methods: {
		  showMsg: function (_msg, _isSuccess) {
		    this.isShow = true;
        this.isSuccess = _isSuccess;
        this.msg = _msg;
		    if (_isSuccess) {
		      this.title = "成功了!";
		      this.classStyle = "alert alert-success";
        } else {
		      this.title = "出错了！";
        }
      }
    }
	}
</script>

<style scoped>

</style>
