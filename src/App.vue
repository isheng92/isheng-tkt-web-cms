<template>
  <div id="app">
    <!--系统提示信息-->
    <AlertMsg></AlertMsg>
    <!--页面头部-->
    <Top></Top>
    <!--页面左边导航-->
    <Left></Left>
    <!--页面中间搜索区域-->
    <Search></Search>
    <!--列表展示区-->
    <Middle></Middle>
    <!--页面底部固定区域-->
    <Foot></Foot>

    <router-view/>
  </div>
</template>

<script>
  /*提示信息*/
  import AlertMsg from "@/components/view/common/alertMsg.vue"
  /*头部区域 */
  import Top from "@/components/view/layout/top.vue"
  /*左边导航*/
  import Left from "@/components/view/layout/left.vue"
  /*搜索提交区域*/
  import Search from "@/components/view/layout/search.vue"
  /*中间数据区域*/
  import Middle from '@/components/view/layout/middle.vue'
  /*底部固定区域*/
  import Foot from "@/components/view/layout/foot.vue"

export default {
  name: 'App',
  components: {AlertMsg, Top, Left, Search, Middle, Foot},
}
</script>

<style>

</style>
