<template>
  <!-- <YtoPage title showIcon> -->
  <div class="orderImport">
    <!-- 查询 导入 模板 -->
    <div class="search-box">
      <el-form
        ref="form"
        :model="form"
        :inline="true"
        class="demo-form-inline"
        @submit.native.prevent
      >
        <el-form-item label="运单号" prop="userName" label-width="54px">
          <el-input
            style="width: 160px"
            size="mini"
            v-model.trim="form.menuName"
            placeholder="请输入运单号"
            clearable
            @keyup.enter.native="queryName"
          >
            <i slot="suffix" class="el-input__icon el-icon-search"></i
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-group">
          <div class="btn-style" @click="cqueryMenuList">查询</div>

          <el-upload
            class="upload-demo"
            action="/postStation/op/uploadBatchExpress"
            :limit="1"
            ref="upload"
            accept="xls，.xlsx"
            :before-upload="beforeUpload"
            :on-success="onSuccess"
            :on-progress="onProgress"
            :on-error="onError"
            :show-file-list="false"
            :data="uploadData"
            name="batchImportExcel"
            :headers="headers"
          >
            <div class="btn-style" @click="batchImport">批量导入</div>
          </el-upload>
          <div class="btn-style" @click="templateDownload">模板下载</div>
        </el-form-item>
      </el-form>
    </div>
    <!-- 内容 -->
    <div class="body-content">
      <!-- 寄件人 -->
      <div class="send-form">
        <el-form
          ref="resultForm"
          :inline="true"
          :model="resultForm"
          class="result-form"
          label-position="right"
          label-width="100px"
        >
          <div class="form-row">
            <el-form-item label="运单号" prop="userName">
              YT2070208115587
            </el-form-item>
          </div>
          <el-form-item label="寄件人信息" prop="userName">
            姓名
            <el-input
              style="width: 120px"
              size="mini"
              v-model.trim="resultForm.userName"
              :disabled="!(resultForm.userName == '')"
            ></el-input>
          </el-form-item>
          <el-form-item label="省市区" prop="userName">
            <el-cascader
              size="mini"
              v-model="province"
              :options="provinceOptions"
              @change="provinceChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="联系方式" prop="userName">
            <el-input
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input>
          </el-form-item>
          <el-form-item label="客户编码" prop="userName">
            <el-input
              style="width: 160px"
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="userName">
            <el-input
              style="width: 435px"
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 收件人 -->
      <div class="receive-form">
        <el-form
          ref="resultForm"
          :inline="true"
          :model="resultForm"
          class="result-form"
          label-position="right"
          label-width="100px"
        >
          <el-form-item label="收件人信息" prop="userName">
            姓名
            <el-input
              style="width: 120px"
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input> </el-form-item
          ><el-form-item label="省市区" prop="userName">
            <el-cascader
              size="mini"
              v-model="province"
              :options="provinceOptions"
              @change="provinceChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="联系方式" prop="userName">
            <el-input
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="userName">
            <el-input
              style="width: 435px"
              size="mini"
              v-model.trim="resultForm.menuName"
              :disabled="!(resultForm.menuName == '')"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <!-- 增值保价服务 -->
      <div class="server-form">
        <el-form
          ref="resultForm"
          :inline="true"
          :model="resultForm"
          class="result-form"
          label-width="100px"
          label-position="right"
        >
          <div class="form-row">
            <el-form-item
              label="增值服务类型"
              prop="userName"
              label-width="100px"
            >
              <el-radio-group v-model="serviceType">
                <el-radio :label="0">保价</el-radio>
                <el-radio :label="1">代收</el-radio>
                <el-radio :label="2">到付</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item :label="serviceType | serviceTitle">
            <el-input
              type="number"
              style="width: 160px"
              size="mini"
              placeholder="1-300000"
              v-model="form.severMoney"
            ></el-input>
          </el-form-item>
          <el-form-item label="服务费：" v-if="serviceType == 0">
            <span class="server-money">99元<!-- {{}} --></span>
            <span class="server-explain"
              >（说明：保价服务需要额外收费，请点击</span
            >
            <span class="check-dialog-link" @click="checkDialogVisible = true"
              >查看</span
            >
            <span class="server-explain">收费标准及不予保价范围）</span>
          </el-form-item>
          <div class="form-row">
            <el-form-item label="货物内容" prop="userName">
              <el-input
                type="textarea"
                style="width: 435px"
                v-model.trim="resultForm.menuName"
                resize="none"
                rows="4"
              ></el-input>
            </el-form-item>

            <el-form-item label="重量" prop="userName">
              <el-input
                size="mini"
                v-model.trim="resultForm.menuName"
              ></el-input>
            </el-form-item>
            <el-form-item label="数量" prop="userName">
              <el-input
                size="mini"
                v-model.trim="resultForm.menuName"
              ></el-input>
            </el-form-item>
          </div>
          <div class="form-row row-btn">
            <el-form-item>
              <div class="btn-style" @click="serverSubmit">修改</div>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <!-- 服务费标准弹框 -->
    <el-dialog
      class="check-dialog"
      title="保价服务说明"
      :visible.sync="checkDialogVisible"
      width="600px"
      top="5vh"
    >
      <div class="server-standard">
        <el-row style="margin-bottom: 8px">
          <el-col :span="3" class="standard-title">保费标准</el-col>
        </el-row>
        <el-row style="margin-bottom: 17px">
          <el-col class="standard-statement">
            声明：保价价值高于3万元，系统默认保价金额3万元;保价金额低于100元,系统默认保
            价金额100元
          </el-col>
        </el-row>
        <el-row class="standard-list" type="flex" justify="center">
          <el-col :span="6" class="standard-list-left">保价金额（元）</el-col>
          <el-col :span="6">保费（元）</el-col>
        </el-row>
        <el-row class="standard-list" type="flex" justify="center">
          <el-col :span="6" class="standard-list-left">100(含)-1000(含)</el-col>
          <el-col :span="6" class="standard-list-right">1 </el-col> </el-row
        ><el-row class="standard-list" type="flex" justify="center">
          <el-col :span="6" class="standard-list-left">1000-2000(含) </el-col>
          <el-col :span="6" class="standard-list-right">2 </el-col> </el-row
        ><el-row class="standard-list" type="flex" justify="center">
          <el-col :span="6" class="standard-list-left">2000-1万(含)</el-col>
          <el-col :span="6" class="standard-list-right">
            保价金额*3%</el-col
          > </el-row
        ><el-row
          class="standard-list"
          type="flex"
          justify="center"
          style="margin-bottom: 23px"
        >
          <el-col :span="6" class="standard-list-left">1000-2000(含)</el-col>
          <el-col :span="6" class="standard-list-right">保价金额*5% </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <el-col>说明：系统将按照填写的保价金额区间计算额外收取的保费</el-col>
        </el-row>
      </div>
      <div class="cant-standard">
        <el-row style="margin-bottom: 20px">
          <el-col :span="5" class="standard-title">不予保价范围</el-col>
        </el-row>
        <div class="contraband-list">
          <el-row>
            <el-col :span="1">-</el-col
            ><el-col :span="23">违法违规禁寄品</el-col>
          </el-row>
          <el-row>
            <el-col :span="1">-</el-col
            ><el-col :span="23"
              >易碎品：玻璃类（如灯管、灯泡等玻璃制品）、陶瓷类、石膏类，以及
              不易妥善包装及不可估量价值的物品，如：玉雕、木雕艺术品等
              ；3c类电子 产品含有易碎屏幕尺寸超过15.6寸的</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="1">-</el-col
            ><el-col :span="23"
              >不易贮存、保鲜的时令水果和特产（包括水产品）</el-col
            >
          </el-row>
          <el-row>
            <el-col :span="1">-</el-col><el-col :span="23">鲜活动植物</el-col>
          </el-row>
          <el-row>
            <el-col :span="1">-</el-col
            ><el-col :span="23"
              >中国大陆境内无修复或定损技术能力的精密货品；</el-col
            >
          </el-row>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <div
          class="footer-btn btn-style btn-style-cancel"
          @click="checkDialogVisible = false"
        >
          取 消
        </div>
        <div
          class="footer-btn btn-style btn-style-confirm"
          @click="checkDialogVisible = false"
        >
          确 定
        </div>
      </div>
    </el-dialog>
  </div>
  <!-- </YtoPage> -->
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: '',
  data () {
    return {
      form: {

      },
      resultForm: {
        userName: '李杨杨',
        menuName: ''
      },
      provinceOptions: [],
      province: '',
      serviceType: 0, // 增值服务类型
      serviceTypeTitle: '',
      checkDialogVisible: false,
      loadingInstance: null,
      uploadData: {},
      headers: {

      }
    };
  },
  components: {},
  mounted () {
    // this.headers = {
    //   orgCode: this.userInfo.orgCode,
    //   token: getStore('yz-token'),
    //   stationCode: this.userInfo.stationCode
    // };
  },
  methods: {
    queryName () {
      console.log('触发');
    },
    cqueryMenuList () {
      console.log('查询');
    },
    // 批量导入
    batchImport () {

    },
    // 模板下载
    templateDownload () {

    },
    // 省市区
    provinceChange () {

    },
    // 增值服务提交
    serverSubmit () {
    },
    // 录单导入
    onProgress (event, file, fileList) {
      console.log(event, file, fileList);
      this.loadingInstance = Loading.service({
        lock: true,
        text: '加载中，请稍后...',
        background: 'rgba(255, 255, 255, 0.7)'
      });
    },
    // 上传前判断
    beforeUpload (file) {
      console.log(file);
      var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1);
      const extension = testmsg === 'xls';
      const extension2 = testmsg === 'xlsx';
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!extension && !extension2) {
        this.$message({
          message: '上传文件只能是 xls、xlsx格式!',
          type: 'warning'
        });
        return extension || extension2;
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 1MB!',
          type: 'warning'
        });
        return isLt2M;
      }
    },
    // 上传成功回调
    onSuccess (res, file) {
      console.log(res, file);
      // if (res.code == 200) {
      //   this.total = res.total;
      //   this.successTotal = res.success;
      //   this.failTotal = res.fail;
      //   this.failPath = res.importFailExcelFilePath;
      //   this.dialogVisible = true;
      // } else {
      //   this.$message.error(res.message);
      // }
      this.$refs['upload'].clearFiles();
      this.loadingInstance && this.loadingInstance.close();
    },
    // 上传失败回调
    onError () {
      this.loadingInstance && this.loadingInstance.close();
      console.log('error');
    }
  },
  filters: {
    serviceTitle: function (val) {
      switch (val) {
        case 0: return '保价金额';
        case 1: return '代收金额';
        case 2: return '到付金额';
      }
    }
  }
};
</script>
<style lang="less" scoped>
.orderImport {
  width: 100%;
  height: 100vh;
  background: #dde7f3;
  font-family: PingFangSC-Regular, PingFang SC;
  /deep/ .el-form--inline {
    .el-form-item {
      margin-bottom: 10px;
      margin-right: 0;
      .el-form-item__content {
        .el-input__inner {
          padding: 0 10px;
          font-size: 14px;
        }
        .is-disabled .el-input__inner {
          color: #666666;
        }
      }
      .el-form-item__label {
        padding: 0 10px 0 0;
        color: #000000;
      }
    }
  }
  .search-box {
    height: 40px;
    background: #fff;
    padding: 0 44px 10px;
    font-size: 14px;
    font-weight: 400;
    background: #dde7f3;
    box-shadow: 0px 1px 0px 0px #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .el-form--inline {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .el-form-item {
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
    .btn-group {
      /deep/ .el-form-item__content {
        width: 460px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .body-content {
    width: 100%;
    .send-form {
      width: 100%;
    }
    .receive-form {
      width: 100%;
    }
    .server-form {
      width: 100%;
      .el-form {
        .el-form-item {
          .check-dialog-link {
            color: #6383b6;
            text-decoration: underline;
          }
          .server-explain {
            color: #a2a5ac;
          }
        }
        .row-btn {
          display: flex;
          justify-content: flex-end;
          .btn-style {
            width: 64px;
          }
        }
      }
    }
  }
  .check-dialog {
    /deep/ .el-dialog {
      background-color: #dde7f3;
      .el-dialog__header {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        background-color: #6383b6;
        text-align: left;
        padding: 13px 20px;
        .el-dialog__title {
          color: #ffffff;
        }
        .el-dialog__headerbtn {
          top: unset;
          .el-dialog__close {
            color: #ffffff;
          }
        }
      }
      .el-dialog__body {
        padding: 27px 35px 10px 35px;
        .server-standard {
          .standard-title {
            font-size: 16px;
            line-height: 16px;
            font-weight: 400;
            color: #333333;
          }
          .standard-statement {
            font-size: 14px;
            font-weight: 400;
            color: #d26b6b;
            text-align: left;
            line-height: 20px;
          }
          .standard-list {
            margin-bottom: 27px;
            font-size: 14px;
            line-height: 14px;
            font-weight: 400;
            text-align: left;
            color: #333333;
            div {
              margin: 0 40px;
            }
            .standard-list-right {
              color: #d26b6b;
            }
          }
        }
        .cant-standard {
          text-align: left;
          .standard-title {
            font-size: 16px;
            line-height: 16px;
            font-weight: 400;
            color: #333333;
          }
          .contraband-list {
            padding: 20px 17px 12px;
            background: #ebf0f7;
            font-size: 14px;
            border-radius: 4px;
            line-height: 20px;
            letter-spacing: 1px;
            .el-row {
              margin-bottom: 8px;
            }
          }
        }
      }
      .el-dialog__footer {
        text-align: unset;
        .dialog-footer {
          display: flex;
          justify-content: center;
          .footer-btn {
            width: 100px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            box-sizing: border-box;
            margin: 0 12px;
          }
          .btn-style-confirm {
            background-color: #6383b6;
            color: #ffffff;
          }
          .btn-style-cancel {
            background-color: #f5f7fa;
            color: #333333;
            border: 1px solid #dcdfe6;
          }
        }
      }
    }
  }
  .btn-style {
    width: 96px;
    height: 28px;
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
    border-radius: 4px;
    border: 0px solid #6383b6;
    background-color: #6383b6;
    color: #ffffff;
    cursor: pointer;
    user-select: none;
    text-align: center;
  }
}
</style>
