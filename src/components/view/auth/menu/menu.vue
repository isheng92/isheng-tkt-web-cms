<template>
  <div class="table-responsive">
    <!--搜索区-->
    <div>
      <form class="bs-example bs-example-form" role="form">
        <div class="input-group">
          <span class="input-group-addon">菜单名称</span>
          <input type="text" class="form-control" placeholder="菜单名称">
          <span class="input-group-addon">权限码</span>
          <input type="text" class="form-control" placeholder="菜单名称">
        </div>
        <br>
        <div class="input-group">
          <div class="input-group-btn">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              菜单类型
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
              <li><a href="#">根菜单</a></li>
              <li><a href="#">菜单</a></li>
              <li><a href="#">按钮</a></li>
            </ul>
          </div>
          <input type="text" class="form-control">
        </div>
      </form>
    </div>
    <!-- 数据展示区 -->
    <div>
      <table class="table table-bordered table-hover table-striped">
        <caption>权限列表</caption>
        <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>权限名称</th>
          <th>权限类型</th>
          <th>权限码</th>
          <th>权限地址</th>
          <th>创建人</th>
          <th>创建时间</th>
          <th>更新人</th>
          <th>更新时间</th>
          <th>说明备注</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="obj in objList">
          <td><input type="checkbox"></td>
          <td title="菜单名称">{{obj.name}}</td>
          <td title="菜单类型">{{obj.menuType}}</td>
          <td title="识别码">{{obj.code}}</td>
          <td title="地址URL">{{obj.code}}</td>
          <td title="创建人">{{obj.createUser}}</td>
          <td title="创建时间">{{obj.createTime}}</td>
          <td title="更新人">{{obj.updateUser}}</td>
          <td title="更新时间">{{obj.updateTime}}</td>
          <td title="备注说明">{{obj.remark}}</td>
          <td>
            <a href="#" title="详情" style="margin-left: 10px;"><span class="glyphicon glyphicon-list-alt"></span></a>
            <a href="#" title="修改" style="margin-left: 10px;"><span class="glyphicon glyphicon-edit"></span></a>
            <a href="#" title="删除" style="margin-left: 10px;"><span class="glyphicon glyphicon-remove"></span></a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
  import "@/components/js/common/BaseUtil.js"

export default {
  name: 'Menu',
  data: function () {
    return {
      title: '菜单列表',
      objList: [],
    }
  },
  methods: {
    list: function () {
      let res = this.httpPost("/menu/list", null);
      this.alertMsg(this.jsonToString(res));
    },
    detail: function () {

    },
    update: function () {

    },
    del: function () {

    }
  },
  mounted: function () {
    this.list()
  },
}
</script>

<style scoped>

</style>
