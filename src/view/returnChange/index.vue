<template>
  <div class="returnChage" v-title="'退回更址打印'">
    <!-- 输入信息 -->
    <div class="in-form">
      <van-form ref="form">
        <van-field
          v-model.trim="form.waybillNo"
          name="waybillNo"
          label="运单号码"
          right-icon="scan"
          placeholder="请输入或扫描单号"
          class="in-form-field"
          @blur="waybillPreview(form.waybillNo)"
          @click-right-icon="scanClick"
          :rules="[{ required: true, message: '运单号码不能为空' }]"
        />
        <van-field
          ref="inputWeight"
          v-model="form.inputWeight"
          :disabled="useTake"
          clearable
          name="inputWeight"
          label="重量"
          placeholder="请输入重量"
          class="in-form-field"
          :rules="[
            {
              required: true,
              message: '重量不能为空',
            },
            {
              validator: checkInputWeight,
              message: '输入重不能小于0',
            },
          ]"
        />
        <van-cell center title="使用揽收重">
          <template #right-icon>
            <van-switch
              v-model="useTake"
              active-color="#2482fc"
              size="24"
              @change="changeUseTake"
            />
          </template>
        </van-cell>
      </van-form>
    </div>
    <!-- 打印预览 -->
    <div class="preview">
      <div class="preview-print">
        <span>打印预览</span>
      </div>
      <div style="cursor: pointer; color: #2482fc" @click="modify">
        <i></i>
        <span>修改</span>
      </div>
    </div>
    <!-- 查询信息 -->
    <div class="d-info">
      <div class="no-data" v-if="previewStatus == '1'">
        <img src="@/assets/img/noData.png" alt="" />
      </div>
      <!-- 选择 -->
      <div class="choose-print" v-if="previewStatus == '2'">
        <div style="color: #faad14">
          【<span
            style="text-decoration: underline; cursor: pointer"
            @click="getCheckWayBill"
          >
            {{ waybillTip }}</span
          >】
          {{ promptCopy }}
        </div>
        <div class="choose-btn">
          <div
            type="primary"
            style="
              width: 165px;
              height: 98px;
              text-align: center;
              padding: 10px 10px;
            "
            @click="returnPrint"
          >
            <img style="width: 48px; height: 48px" src="" alt="" />
            <div>对该件退回打印</div>
          </div>
          <div
            type="primary"
            style="
              width: 165px;
              height: 98px;
              text-align: center;
              padding: 10px 10px;
            "
            plain
            @click="changePrint"
          >
            <img style="width: 48px; height: 48px" src="" alt="" />
            <div>对该件更址打印</div>
          </div>
        </div>
      </div>
      <!-- 正常预览 -->
      <div v-else-if="previewStatus == '3'" class="nor-print">
        <div style="color: #faad14; margin-bottom: 10px">
          【<span
            style="text-decoration: underline; cursor: pointer"
            @click="getCheckWayBill"
          >
            {{ waybillTip }} </span
          >】
          {{ promptCopy }}
        </div>
        <div class="nor-form">
          <van-cell-group>
            <van-field
              class="nor-field"
              v-model="preForm.receiverName"
              label="收件人"
              placeholder="请输入用户名"
            />
            <van-field
              class="nor-field"
              v-model="preForm.contact"
              label="联系方式"
              placeholder="请输入用户名"
            />
            <van-field
              class="nor-field"
              v-model="preForm.wholeAddress"
              label="收件地址"
              placeholder="请输入用户名"
            />
            <van-field
              class="nor-field"
              v-model="preForm.desOrgName"
              label="目的网点"
              placeholder="请输入用户名"
            />
            <van-field
              class="nor-field"
              v-model="preForm.threeSectionCode"
              label="新三段码"
              placeholder="请输入用户名"
            />
          </van-cell-group>
        </div>
      </div>
      <!-- 不可打印 -->
      <div v-else-if="previewStatus == '4'" class="error-print">
        <div style="color: #ca373c">
          【<span
            style="text-decoration: underline; cursor: pointer"
            @click="getCheckWayBill"
          >
            {{ waybillTip }} </span
          >】
          {{ promptCopy }}
        </div>
        <div class="tip"></div>
      </div>
    </div>
    <div class="printBtn">
      <van-button :disabled="disabledPBtn" size="large" color="#2482fc"
        >确认打印</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'returnChage',
  data () {
    return {
      form: {
        waybillNo: '',
        inputWeight: ''
      },
      disabledPBtn: false,
      useTake: false,
      preForm: {

      },
      previewStatus: '3',
      waybillTip: '',
      promptCopy: ''
    };
  },
  components: {},
  mounted () { },
  methods: {
    // 重量校验
    checkInputWeight (value) {
      if (value && value <= 0) {
        return false;
      } else {
        return true;
      }
    },
    // 改变开关状态
    changeUseTake () {
      if (this.useTake) {
        console.log(this.$refs.inputWeight);
        this.$refs.inputWeight.resetValidation();
      }
    },
    // 输入运单号
    inputWayBill (prop) {
      this[prop].waybillNo = this[prop].waybillNo.toUpperCase();
      let value = this[prop].waybillNo;
      let reg = new RegExp('([0-9a-zA-Z]{20})([0-9a-zA-Z]{1,})', 'g');
      value = value.replace(/[^0-9a-zA-Z]/g, '');
      value = value.replace(reg, '$1');
      this[prop].waybillNo = value;
    },
    waybillPreview () {
      this.inputWayBill('form');
    },
    // 扫描二维码
    scanClick () {

    },
    // 打印退回
    returnPrint () {

    },
    // 打印更址
    changePrint () {

    },
    // 跳转
    getCheckWayBill () {

    },
    // 修改跳转页
    modify () {
      this.$router.push({
        path: '/rcModify'
      });
    }
  }
};
</script>

<style lang="less" scoped>
.returnChage {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
  display: flex;
  flex-direction: column;
  .in-form {
    width: 100%;
    background-color: #f5f5f5;
    .in-form-field {
      margin-bottom: 10px;
    }
  }

  .preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    & div {
      margin: 17px 15px;
      font-size: 14px;
      font-weight: 500;
    }
    .preview-print {
      font-weight: 500;
    }
  }

  .d-info {
    width: 100%;
    overflow: scroll;
    flex-grow: 1;
    .no-data {
      width: 100%;
      & img {
        width: 100%;
      }
    }

    .choose-print {
      .choose-btn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
      }
    }
    .nor-print {
      .nor-field {
        padding: 17px 15px;
      }
    }
    // .error-print {
    // }
  }
  .info-tip {
    padding: 15px;
    color: #ee5454;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  .printBtn {
    width: 345px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 10px;
    overflow: hidden;
  }
}
</style>
