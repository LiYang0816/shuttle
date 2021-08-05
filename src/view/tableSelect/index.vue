<template>
	<div class="tableSelect">
		<!--  @selection-change="selectTableRowChange"   -->
		<el-table ref="tableSelect" :data="tableData" style="width: 100%" @select="selectTableRow" @select-all="selectTableRows" >
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column prop="ids" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
		:page-sizes="[10, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
		</el-pagination>

		<el-button @click="clickRow">点击</el-button>
	</div>
</template>

<script>
	export default {
		name: 'tableSelect',
		data() {
			return {
				tableData: [],
				currentPage: 1,
				selectData: []
			}
		},
		components: {},
		mounted() {
			this.tableData = this.queryTableData();
		},
		methods: {
			handleCurrentChange(val) {
				this.currentPage = val;
				console.log(this.currentPage);
				this.tableData = this.queryTableData();
				this.clickRow();
			},
			handleSizeChange() {

			},
			clickRow() {
				// console.log(this.selectData, 'this.selectDate');
				// setTimeout(() => {
					this.$nextTick(()=>{
						this.tableData.map((row) => {
							if (this.selectData[this.currentPage]?.rows.includes(row.ids)) {
								this.$refs.tableSelect.toggleRowSelection(row, true);
							}
						})
					})
				// }, 0);
			},
			selectTableRow(s, row) {
				if (this.selectData[this.currentPage].rows.includes(row.ids)) {
					this.selectData[this.currentPage].rows.splice(this.selectData[this.currentPage ].rows.indexOf(row.ids), 1);
					this.$refs.tableSelect.toggleRowSelection(row, false);
				}else{
					this.selectData[this.currentPage].rows.push(row.ids);
				}
				// this.selectData.push(row.ids);
				console.log(this.selectData, 'this.selectDate');
			},
			selectTableRows(s){
				this.selectData[this.currentPage] = {
					pageNo: this.currentPage,
					rows: s.map((row) => row.ids)
				}
				console.log(this.selectData,s, 'selectTableRowChange');
			},
			// selectTableRowChange(s) {
			// 	this.selectData[this.currentPage] = {
			// 		pageNo: this.currentPage,
			// 		rows: s.map((row) => row.ids)
			// 	}
			// 	console.log(this.selectData,s, 'selectTableRowChange');
			// },
			queryTableData() {
				const list = [{
					ids: 1 + (this.currentPage - 1) * 10,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					ids: 2 + (this.currentPage - 1) * 10,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					ids: 3 + (this.currentPage - 1) * 10,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					ids: 4 + (this.currentPage - 1) * 10,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ids: 5 + (this.currentPage - 1) * 10,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					ids: 6 + (this.currentPage - 1) * 10,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					ids: 7 + (this.currentPage - 1) * 10,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}, {
					ids: 8 + (this.currentPage - 1) * 10,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					ids: 9 + (this.currentPage - 1) * 10,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				}, {
					ids: 10 + (this.currentPage - 1) * 10,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}];
				return list;
			}
		}
	}
</script>

<style scoped lang="less">
</style>
