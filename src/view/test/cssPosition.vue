<template>
  <!-- 搜索下拉框被隐藏 -->
  <!-- 原因：vant-field组件css设置了overflow:hidden -->
  <!-- 解决方法：将overflow:hidden;改为overflow:visible; -->
  <div class="cssPosition">
    <van-form class="materialForm">
      <van-field
        class="material-item"
        type="text"
        name="所属组织"
        label="所属组织"
        readonly
      >
        <template #input>
          <yCell
            :requireShow="true"
            :placeholder="orgPlaceholder"
            @inputValue="getOrgValue"
          >
            <div v-show="showSearchOrg" class="result-wrap">
              <div
                class="org-wrap"
                v-if="orgList != null && orgList.length > 0"
              >
                <div
                  class="org-item"
                  v-for="(item, index) in orgList"
                  :key="index"
                  @click="chooseOrg(item)"
                >
                  {{ item.orgName }}
                </div>
              </div>

              <div class="org-wrap no-data" v-else>
                <div class="org-item">暂无数据</div>
              </div>
            </div>
          </yCell>
        </template>
      </van-field>
    </van-form>
  </div>
</template>

<script>
import yCell from '../components/yCell'
export default {
  name: '',
  data () {
    return {
      form: {
        waybillNo: '',
        signoffFlg: '是',
        org: ''
      },
      activeShow: false,
      actions: [{ name: '是' }, { name: '否' }],
      cssError: false,
      validateError: false,
      foucusFlag: false,
      orgPlaceholder: '请输入组织机构代码、名称',
      showSearchOrg: false,
      orgList: []
    }
  },
  components: {
    yCell
  },
  mounted () { },
  methods: {
    onSelect (item) {
      this.activeShow = false;
      this.form.signoffFlg = item.name;
    },
    // 新增保存
    save () {
      console.log(this.form.waybillNo);
      if (this.form.org == '') {
        this.cssError = true;
      } else {
        this.cssError = false;
      }
      if (this.form.waybillNo == '') {
        this.validateError = true;
      } else {
        this.validateError = false;
      }
    },
    // 调所属组织
    toOrg () {

    },
    // 获取输入的名称
    getValue (val) {
      console.log(val);
      this.form.waybillNo = val;
    },
    // 获取输入的所属组织
    getOrgValue (val) {
      console.log(val);
      this.form.recordTime = val;
      this.searchInfo();
    },
    chooseOrg () {
      this.clearText(); // 清除查询输入
      this.tableData.push({
        waybillNo: '哈哈哈',
        signoffFlg: '是',
        recordTime: '上海静安区静安门'
      }, {
        waybillNo: '哈哈哈',
        signoffFlg: '是',
        recordTime: '上海静安区静安门'
      })
    },
    // 模糊搜索
    searchInfo () {
      // console.log('输入');
      if (!this.form.recordTime) {
        return this.showSearchOrg = false;
      }
      this.showSearchOrg = true;
      this.orgList = [{
        orgName: 'hhh'
      }, {
        orgName: 'hhh'
      }]
    },
    // 清楚搜索
    clearText () {
      this.form.recordTime = '';
      this.orgList = [];
      this.showSearchOrg = false;
    },
  }
}
</script>

<style lang="less" scoped>
.cssPosition {
  height: 100vh;
  .materialForm {
    height: 430px;
    .material-item {
      padding: 13px 15px;
      /deep/ .van-cell {
        padding: 0px;
      }
      .item-required {
        width: 100%;
      }
      .result-wrap {
        width: 268px;
        position: absolute;
        overflow: hidden;
        left: -10px;
        display: flex;
        justify-content: center;
        background-color: rgba(255, 255, 0, 0.5);
        .org-wrap {
          width: 100%;
          padding-left: 10px;
          padding-top: 10px;
          box-sizing: border-box;
          background-color: rgba(255, 0, 255, 0.5);
          box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
          .org-item {
            width: 100%;
            height: 20px;
            margin-bottom: 10px;
            font-size: 14px;
            color: #333;
            font-weight: 400;
          }
        }
        .no-data {
          padding-top: 10px;
        }
      }
    }
    .item-font-color {
      /deep/ .van-field__control {
        color: #cccccc;
      }
    }
    /deep/ .van-field--error {
      .van-field__value {
        display: flex;
        .van-field__body {
          width: 50%;
          .van-field__control::placeholder {
            color: #cccccc;
            font-size: 14px;
          }
        }
        .van-field__error-message {
          width: 50%;
          font-size: 14px;
        }
      }
    }
  }
  .addBtn {
    width: 345px;
    margin: 0 auto;
    .addBtn-confim {
      width: 100%;
      height: 44px;
      border-radius: 5px;
      background: #2482fc;
      font-size: 16px;
      color: #ffffff;
      line-height: 44px;
      text-align: center;
    }
  }
}
</style>