<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Steps from './common/Steps.vue'
let timer: NodeJS.Timeout | null = null // 节流
const tableRef = ref<HTMLElement | null>(null)
const tableData = reactive([
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  },
  {
    operateTime: 'xxx',
    sname: 'xxx',
    dname: 'xxx',
    serial: 'xxx',
    record: 'xxx',
  }
])
const tableHeight = ref()

onMounted(() => {
  // table 动态高度
  tableHeight.value = tableRef.value!.clientHeight
  window.onresize = () => {
    if(timer) {
      return
    }
    timer = setTimeout(() => {
      tableHeight.value = tableRef.value!.clientHeight
      timer = null
    }, 500);
  }
})

</script>
<template>
  <Steps />
  <div ref="tableRef" class="table box">
    <el-table :data="tableData" :height="tableHeight"
        :default-sort="{ prop: 'date', order: 'descending' }" style="width: 100%">
        <el-table-column width="90"></el-table-column>
        <el-table-column type="index" label="序号" width="100" />
        <el-table-column label="操作时间" min-width="120" >
          <template #default="scope">
            <span>{{scope.row.operateTime.slice(0,10).split('-')[1] + '-' + scope.row.operateTime.slice(0,10).split('-')[2] + '-' + scope.row.operateTime.slice(0,10).split('-')[0] + scope.row.operateTime.slice(10,)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="sname" label="姓名" min-width="120" />
        <el-table-column prop="dname" label="设备名称" min-width="150" />
        <el-table-column prop="serial" label="设备序列号" min-width="150" />
        <el-table-column label="跟踪记录" width="230">
          <template #default="scope">
            <span v-text="scope.row.record"></span>
          </template>
        </el-table-column>
        <template v-slot:empty>
          <span class="empty">当前暂无跟踪记录</span>
        </template>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
.table {
  height: calc(100vh - 330px);
  margin: auto;
  padding-bottom: 10px;
}
</style>