<template>
    <div class="searchForm">
      <form id="searchForm" action="/js/a/test/testTree/listData" method="post" class="form-inline" data-page-no="" data-page-size="" data-order-by="">
        <div class="form-group">
          <label class="control-label">节点名称：</label>
          <div class="control-inline">
            <input type="text" id="treeName" name="treeName" value="" maxlength="200" class="form-control width-120">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">备注信息：</label>
          <div class="control-inline">
            <input type="text" id="remarks" name="remarks" value="" maxlength="500" class="form-control width-120">
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">状态：</label>
          <div class="control-inline width-120">

            <select id="status" name="status" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
              <option value="">&nbsp;</option><option value="0">正常</option><option value="2">停用</option></select><span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-status-container"><span class="select2-selection__rendered" id="select2-status-container" title="正常">正常</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>					</div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-sm">查询</button>
          <button type="reset" class="btn btn-default btn-sm">重置</button>
        </div>
        <input id="pageNo" name="pageNo" type="hidden" value=""><input id="pageSize" name="pageSize" type="hidden" value=""><input id="orderBy" name="orderBy" type="hidden" value=""></form>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
