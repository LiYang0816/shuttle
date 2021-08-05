<template>
	<div id="juzhong">
		<div class="father-div">
			<div class="son-div"></div>
		</div>
		<el-checkbox-group v-model="checkList">
			<el-checkbox label="aaa">复选框a</el-checkbox>
			<el-checkbox label="bbb">复选框b</el-checkbox>
			<el-checkbox label="ccc">复选框c</el-checkbox>
			<el-checkbox label="ddd">复选框d</el-checkbox>
			<el-checkbox label="eee">复选框e</el-checkbox>
		</el-checkbox-group>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				checkList: ['aaa','bbb','ccc']
			}
		},
		created() {},
		mounted() {

		},
		methods: {

		}

	}
</script>
<style scoped>
	#juzhong {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	/* .father-div{
		width: 100%;
		height: 100%;
		background-color: #dda820;
		position: relative;
	}
	.son-div{
		width: 100px;
		height: 100px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: #aad820;
	} */
</style>
