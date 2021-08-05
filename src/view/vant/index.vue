<template>
	<div class="myVant">
		<!-- <img :src="srcBase" alt="">
		<div class="testCalc aaaa" ref="testCalc">哈哈Calc</div>
		<div class="testAttr" title="停在这就能看到我">嘿嘿Attr</div>
		<div class="headImg">
			<van-uploader v-model="fileList" :after-read="afterRead" accept="image/*" max-count="1" :deletable="false">
				<img src="../../assets/logo.png" />
			</van-uploader>
		</div>

		<div class="showText">{{ dateTime }}</div>
		<div class="action-sheet">
			<span @click="toShowAction">点我点我</span>
			<van-action-sheet v-model="show" title="选他选他">
				<div class="action-content">内容</div>
				<div class="action-button">
					<van-button @click="cancel">取消</van-button>
					<van-button type="primary" @click="confirm">确认</van-button>
				</div>
			</van-action-sheet>
		</div>
		<form ref="jsForm">
			<span @click="clickInput">上传</span><span>{{ filesName }}</span>
			<input type="file" style="display: none" @change="getFromData($event)" />
		</form>
		<van-picker :columns="currentDate" title="自定义列排序">
			<template #option="item"> {{ item.foo }} </template>
		</van-picker>
		<van-datetime-picker v-model="currentDate" type="year-month">
			<template #option="item">{{ item }} {{ 111 }} </template>
		</van-datetime-picker>
		<van-button type="primary" @click="ctest">点击</van-button>
		<van-loading /> -->
		<!-- 识别 \n 换行符 -->
		<!-- <div style="white-space: pre-line">{{ filterHtml() }}</div>
		<div>{{ stringHtml }}</div>
		<div class="num-test">{{numTest}}</div> -->

		<van-progress :percentage="50"  :show-pivot="false"/>
		
		
		<!-- <van-form>
			<van-field v-model="value1" name="pattern" placeholder="正则校验" :rules="[{validator: _value1, message: '请输入正确内容' }]" />
			<van-field readonly clickable name="datetimePicker" :value="dateValue" label="时间选择" placeholder="点击选择时间" @click="showPicker = true"
			:rules="[{ validator: asyncValidator, message: '请输入正确内容' }]" />
			<van-popup v-model="showPicker" position="bottom">
				<van-datetime-picker type="time" @confirm="onConfirm" @cancel="showPicker = false" />
			</van-popup>
		</van-form>
 -->

		<!-- <van-tabs v-model="activeTab">
			<van-tab title="创新金点子" class="good-idea">
				<div class="gi-describe">
					<div class="title">描述</div>
					<div class="d-field">
						<van-field v-model="form.ideaDesc" rows="5" autosize type="textarea" maxlength="200" placeholder="请输入10字以上的产品建议内容，以便我们更好的改善（必填）"
						show-word-limit></van-field>
					</div>
				</div>
				<div class="gi-imgList">
					<div class="title">
						照片<span class="img-num">({{ form.imgPath.length }}/4)</span>
					</div>
					<div class="d-img-uploader"></div>
				</div>
				<div class="gi-info">
					<div class="title">联系方式</div>
					<div class="info-phone">
						<van-field v-model="form.phone" type="text" label="手机号" placeholder="请输入手机号"></van-field>
					</div>
				</div>
				<div class="gi-btn">
					<div class="btn-submit van-bg-primary-color">提交</div>
				</div>
			</van-tab>
			<van-tab title="记录" class="idea-record">
				<div class="gi-record" v-for="(record, i) in list" :key="i">
					<div class="gi-record-createTime">
						<div class="title">
							创建时间<span class="createTime">{{ record.createTime }}</span>
						</div>
					</div>
					<div class="gi-record-describe">
						<div class="title">描述</div>
						<div class="record-describe">
							{{ record.ideaDesc }}
						</div>
					</div>
					<div class="gi-record-imgList">
						<div class="title">图片</div>
						<div class="record-imgList">
							<div class="rc-img" v-for="(item, index) in record.imgPath" :key="index">
								<img class="img" :src="item" alt="" />
							</div>
						</div>
					</div>
					<div class="gi-record-info">
						<div class="title">
							联系方式<span class="record-info">{{ record.phone }}</span>
						</div>
					</div>
				</div>
			</van-tab>
		</van-tabs> -->

	</div>
</template>

<script>
	/* eslint-disable */
	// import { Toast } from 'vant'
	// import src from '../../assets/srcBase.txt'
	export default {
		data() {
			return {
				fileList: [],
				dateTime: new Date().getDate(),
				show: false,
				fileMsg: [],
				filesName: '',
				formData: new FormData(),
				minDate: new Date(2020),
				maxDate: new Date(2025),
				currentDate: [{
					foo: 1,
					bar: 2
				}, {
					foo: 2,
					bar: 2
				}],
				toast: null,
				stringHtml: `Hello\nworld`,
				activeTab: 0,
				form: {
					phone: '', // 联系方式
					ideaDesc: '', // 描述
					imgPath: [], //图片路径
				},
				list: [],
				isLoading: false,
				srcBase: '',
				numTest: 0,
				dateValue: '',
				showPicker: false,
				value1: '',
				list:[ 
					['red','big'],['red','s'],['red','big']]
			}
		},
		components: {},
		mounted() {
			// this.toast = Toast.loading({
			//   duration: 0, // 持续展示 toast
			//   // forbidClick: true
			// });
			this.list = [{
					createTime: '', //创建时间
					phone: '', // 联系方式
					ideaDesc: '', // 描述
					imgPath: [], //图片路径
				},
				{
					createTime: '', //创建时间
					phone: '', // 联系方式
					ideaDesc: '', // 描述
					imgPath: [], //图片路径
				},
				{
					createTime: '', //创建时间
					phone: '', // 联系方式
					ideaDesc: '', // 描述
					imgPath: [], //图片路径
				}
			];
			// this.try();
			// let abcd = document.getElementsByClassName('testCalc aaaa');
			this.$refs.testCalc.style.fontSize = '24px';
			// console.log(abcd,'adbc');
			// abcd[0].style.fontSize = '18px';
			this.numTest = 2.69787.toFixed(2);

		},
		methods: {
			_value1(val) {
				console.log('val', val);
				return false;
			},
			asyncValidator(val) {
				console.log('val', val);
				return false;
			},
			onConfirm(time) {
				this.value = time;
				this.showPicker = false;
			},
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file, 'file');
			},
			toShowAction() {
				this.show = true;
			},
			confirm() {
				this.show = false;
				this.$toast('你点确定干嘛呀');
			},
			cancel() {
				this.show = false;
				this.$toast('就你，你点取消了');
			},
			getFromData(e) {
				let formFiles = e.target.files;
				let form = this.$refs.jsForm[0].files[0];
				this.filesName = this.filesName + form.name;
				for (let i = 0; i < formFiles.length; i++) {
					this.formData.append('attachment', formFiles[i])
					console.log(formFiles[i], '111')
					'18px';
				}
				console.log(this.formData.getAll('attachment'))
			},
			clickInput() {
				this.$refs.jsForm[0].click();
			},
			ctest() {
				console.log(this.$loading);
				// this.toast.clear();
			},
			filterHtml() {
				return `Hello\nworld`;
			},
			try () {
				var imgWidth, imgHeight;
				newImage.src = src;
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				canvas.width = 800;
				canvas.height = (800 * imgHeight) / imgWidth;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
				var base64 = canvas.toDataURL('image/jpeg', 0.6);
				console.log('base64', base64);
				return base64;
			}
		}
	}
</script>

<style scoped>
.myVant {
	width: 100%;
	height: 100%;
  background-color: #ffffff !important;
	padding: 30px 0;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}

/*.testCalc {
  background-color: #0ff000;
  width: calc(100% - 50px);
}

.testAttr {
  background-color: #0ff0f0;
}

.testAttr:hover::after {
  content: " (" attr(title) ")";
}

.headImg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
}

.headImg img {
  width: 80px;
  height: 80px;
}

.action-content {
  width: 100%;
  height: 200px;
}

.action-button {
  display: flex;
  justify-content: space-around;
  align-items: center;
} */
	.myVant {
		width: 100%;
		height: 100%;
		background-color: #e9e9e9;


	}

	/deep/ .van-tabs {}

	.van-tabs__wrap {
		background-color: #fff;

	}

	.van-tabs__nav {}

	.van-tabs__line {
		width: 20px;
	}

	.good-idea {
		width: 100%;
		height: 100%;




	}

	.gi-describe {
		margin: 8px;
		background-color: #fff;


	}

	.title {
		display: flex;
		align-items: center;
		padding: 0 12px;
		height: 46px;
		font-size: 16px;
		font-weight: 500;
		color: #222222;
	}

	.d-field {
		height: 120px;

	}

	.van-field__control {
		height: 78px !important;
	}

	.gi-imgList {
		height: 144px;
		background-color: #fff;
		margin: 0 8px 8px;


	}

	.title {
		display: flex;
		align-items: center;
		padding: 0 12px;
		height: 46px;
		font-size: 16px;
		font-weight: 500;
		color: #222222;

	}

	.img-num {
		font-size: 12px;
		color: #555555;
		font-weight: 400;
		margin-left: 8px;
	}

	.d-img-uploader {
		height: 98px;
	}

	.gi-info {
		margin: 0 8px;
		background-color: #fff;


	}

	.title {
		display: flex;
		align-items: center;
		padding: 0 12px;
		height: 46px;
		font-size: 16px;
		font-weight: 500;
		color: #222222;
	}

	.info-phone {}

	.van-cell {
		padding: 12px;

	}

	.van-field__label {
		flex: none !important;
	}

	.gi-btn {
		height: 50px;
		margin: 8px 16px;
		border-radius: 8px;
		overflow: hidden;

	}

	.btn-submit {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		color: #fff;
		font-size: 16px;
		font-weight: 400;
	}

	.idea-record {
		width: 100%;

	}

	.gi-refresh {}

	.gi-record {
		margin: 8px 8px 0 8px;
		height: 322px;
		background-color: #fff;
		font-size: 14px;
		font-weight: 400;
		color: #222222;
		overflow: hidden;
		border-radius: 6px 6px 0px 0px;




	}

	.gi-record-createTime {}

	.title {
		display: flex;
		align-items: center;
		padding: 12px;

	}

	.createTime {
		margin-left: 16px;
		color: #888888;
	}

	.gi-record-describe {}

	.title {
		display: flex;
		align-items: center;
		padding: 12px;
	}

	.record-describe {
		height: 60px;
		overflow: auto;
		color: #888888;
		padding: 0 12px;
		line-height: 20px;
		margin-bottom: 12px;
	}

	.gi-record-imgList {}

	.title {
		display: flex;
		align-items: center;
		height: 44px;
		padding: 12px;
	}

	.record-imgList {
		width: 100%;
		height: 75px;
		display: flex;
		justify-content: flex-start;
		align-items: center;

	}

	.rc-img {
		width: 74px;
		height: 75px;
		border-bottom: 1px solid #e5e5e5;
		margin-left: 12px;

	}

	.img {
		width: 74px;
		height: 74px;
	}

	.gi-record-info {
		padding: 12px;

	}

	.title {
		display: flex;
		align-items: center;
	}

	.record-info {
		margin-left: 16px;
		color: #888888;
	}
</style>
