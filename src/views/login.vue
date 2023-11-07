<template>
  <div id="my-demo-ts">
    <div class="demo-login">
      <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px" class="demo-ruleForm" :size="formSize" status-icon label-position="left">
        <el-row>
          <el-col :span="24">
            <h3 class="title">demo登录</h3>
          </el-col>
          <el-col :span="24">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="play" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"  placeholder="abcd@1234" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" style="width:100%;" @click="submitForm(ruleFormRef)">
                登录
              </el-button>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item>
              <el-button style="width:100%;" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

  </div>
  <div>
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
//此处要声明lang=“ts”不然引入FormInstance, FormRules会报错
import { defineComponent, ref, reactive } from "vue";
import { useRouter } from "vue-router";
//表单验证
import type { FormInstance, FormRules } from "element-plus";
//接口
import { loginApi } from "@/api/login";

const router = useRouter();

const bgHight = window.innerHeight + "px";
//用于控制该表单内组件的尺寸
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  password: "",
});
//验证规则
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
//表单验证+调用虚拟接口
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(ruleForm);
      loginApi(ruleForm).then((res) => {
        console.log(res);
        router.push("/test");
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
//重置

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped>
#my-demo-ts {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
}
.demo-login {
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 4px;
  background: aliceblue;
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: blueviolet;
  margin: 0;
}

.bg-bubbles li {
  position: absolute;
  bottom: -160px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.36);
  list-style: none;
  animation: square 15s infinite;
  transition-timing-function: linear;
  border-radius: 10px;
}

.bg-bubbles li:nth-child(1) {
  left: 10%;
}

.bg-bubbles li:nth-child(2) {
  left: 20%;
  width: 90px;
  height: 90px;
  animation-delay: 2s;
  animation-duration: 7s;
}

.bg-bubbles li:nth-child(3) {
  left: 25%;
  animation-delay: 4s;
}

.bg-bubbles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-duration: 8s;
  background-color: rgba(255, 255, 255, 0.3);
}

.bg-bubbles li:nth-child(5) {
  left: 70%;
}

.bg-bubbles li:nth-child(6) {
  left: 80%;
  width: 120px;
  height: 120px;
  animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}

.bg-bubbles li:nth-child(7) {
  left: 32%;
  width: 160px;
  height: 160px;
  animation-delay: 2s;
}

.bg-bubbles li:nth-child(8) {
  left: 55%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
  animation-duration: 15s;
}

.bg-bubbles li:nth-child(9) {
  left: 25%;
  width: 10px;
  height: 10px;
  animation-delay: 2s;
  animation-duration: 12s;
  background-color: rgba(255, 255, 255, 0.3);
}

.bg-bubbles li:nth-child(10) {
  left: 85%;
  width: 160px;
  height: 160px;
  animation-delay: 5s;
}

@keyframes square {
  0% {
    opacity: 0.5;
    transform: translateY(0px) rotate(45deg);
  }
  25% {
    opacity: 0.75;
    transform: translateY(-400px) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
</style>