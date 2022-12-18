<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { pageRouter } from '@/router/pageRouter';
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router'
import { invoke } from '@tauri-apps/api/tauri'
import { ElMessage, FormInstance } from 'element-plus';

const router = useRouter()
const route = useRoute()
const currentPage = ref('')
const system = navigator.userAgent.indexOf('Mac') !== -1
const dialogFormVisible = ref(false)
const formRef = ref<FormInstance>()

const formData = reactive({
  surname: "",
  firstName: "",
  gender: "",
  birth: "",
  height: "",
  weight: "",
  address: "",
  phone: "",
  email: "",
  treatingDoctorId: ""
})
const validateId = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9]*$/
  if (value === '' || value === undefined) {
    callback(new Error("aaa"))
  } else if(!reg.test(value)) {
    callback(new Error("bbb"))
  } else {
    callback()
  }
}

const rules = reactive({
  surname: [
    { required: true, trigger: 'blur' }
  ],
  firstName: [
    { required: true, trigger: 'blur' },
  ],
  gender: [
    { required: true, trigger: 'blur' },
  ],
  birth: [
    { required: true, trigger: 'blur' },
  ],
  treatingDoctorId: [
    { trigger: 'blur', validator: validateId },
  ],
})



onMounted(() => {
  currentPage.value = route.fullPath
})

const changeRoute = (routeRaw: RouteRecordRaw) => {
  currentPage.value = routeRaw.path
  router.push(routeRaw.path)
}

const create_patients = () => {
  dialogFormVisible.value = true

  return
}

const cancel = (fromEl: FormInstance | undefined) => {
  if(!fromEl) return
  dialogFormVisible.value = false
  fromEl.resetFields()
}
const submit = async (fromEl: FormInstance | undefined) => {
  if(!fromEl) return

  await fromEl.validate((valid, fields) => {
    if(valid) {
      console.log(formData);
      
      invoke('create_patient', {
        patientData: JSON.stringify(formData)
      }).then(res => {
        console.log(res);
        
      }).catch(err => {
        console.log(err);
    
      })
    } else {
      ElMessage.closeAll()
      ElMessage.warning('请输入完整')
    }
  })
}

</script>
<template>
  <header class="flex-jc-center" data-tauri-drag-region>
    <div class="fn_buttons flex" :style="{right: system ? '20px' : '', left: system ? '' : 0}">
      <div class="menu-icon cs" @click="create_patients"><svg-icon icon-class="xinjian"></svg-icon></div>
      <div class="menu-icon cs"><svg-icon icon-class="shangchuan"></svg-icon></div>
    </div>
    <div class="page_menu flex flex-ai-center">
      <div v-for="item in pageRouter">
        <div :class="{'active_page': item.path === currentPage}" @click="changeRoute(item)">
          {{item.meta.title}}
        </div>
      </div>
    </div>
  </header>

  <el-dialog  v-model="dialogFormVisible" title="添加患者" width="600" :show-close="false" destroy-on-close>
    <el-form :model="formData" ref="formRef" :rules="rules">
      <el-row :gutter="24">
        <el-col :span="12">
          <h3>患者信息</h3>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item prop="surname">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.surname" placeholder="请输入姓" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="firstName">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.firstName" placeholder="请输入名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item prop="gender">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.gender" placeholder="请输入性别" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="birth">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.birth" placeholder="请输入出生日期" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item prop="height">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.height" placeholder="请输入身高" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="weight">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.weight" placeholder="请输入体重" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item prop="treatingDoctorId">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.treatingDoctorId" placeholder="请输入id" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <el-col :span="12">
          <h3>联系方式</h3>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item prop="address">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.address" placeholder="请输入地址" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item prop="phone">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.phone" placeholder="请输入手机号" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item prop="email">
            <div class="red-point"></div>
            <el-input width="50%" maxlength="25" v-model.trim="formData.email" placeholder="请输入电子邮箱" />
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-row :gutter="24" justify="end">
        <div class="buttons">
          <el-button @click="cancel(formRef)">Default</el-button>
          <el-button @click="submit(formRef)" type="success">Success</el-button>
        </div>
      </el-row>
    </el-form>
  </el-dialog>
</template>
<style lang="scss" scoped>
.active_page {
  color: #FFC639;
}
.buttons {
  padding-right: 10px;
}
h3 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

header {
  height: 50px;
  background-color: #1A874F;
  position: relative;
  .fn_buttons {
    position: absolute;
    top: 0;
    bottom: 0;
    .menu-icon {
      color: #fff; font-size: 20px;
      display: flex;
      align-items: center;
      margin-left: 30px;
    }
  }
  .page_menu {
    color: #fff;
    font-size: 16px;
    >:first-child {
      margin-left: 0;
    }
    div {
      text-align: center;
      cursor: pointer;
      margin-left: 20px;
    }
  }
}
</style>