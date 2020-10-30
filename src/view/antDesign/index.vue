<template>
  <div class="antDesign">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      sub-title="This is a subtitle"
      :ghost="false"
      @back="() => null"
    />
    <!-- <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="初次">
        <a-input v-model="form.name" />
      </a-form-model-item>
    </a-form-model>-->
    <!-- <a-input-group size="large">
      <a-row :gutter="8">
        <a-col :span="5">
          <a-input default-value="0571" />
        </a-col>
        <a-col :span="8">
          <a-input default-value="26888888" />
        </a-col>
      </a-row>
    </a-input-group>-->
    <!-- <a-input-group compact>
      <a-input style="width: 20%" default-value="0571" />
      <a-input style="width: 30%" default-value="26888888" />
    </a-input-group>-->
    <!-- <a-input-group compact>
      <a-select default-value="Zhejiang">
        <a-select-option value="Zhejiang">Zhejiang</a-select-option>
        <a-select-option value="Jiangsu">Jiangsu</a-select-option>
      </a-select>
      <a-input style="width: 50%" default-value="Xihu District, Hangzhou" />
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-select default-value="Option1">
        <a-select-option value="Option1">Option1</a-select-option>
        <a-select-option value="Option2">Option2</a-select-option>
      </a-select>
      <a-input style="width: 50%" default-value="input content" />
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-input style="width: 50%" default-value="input content" />
      <a-date-picker style="width: 50%" />
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-select default-value="Option1-1">
        <a-select-option value="Option1-1">Option1-1</a-select-option>
        <a-select-option value="Option1-2">Option1-2</a-select-option>
      </a-select>
      <a-select default-value="Option2-2">
        <a-select-option value="Option2-1">Option2-1</a-select-option>
        <a-select-option value="Option2-2">Option2-2</a-select-option>
      </a-select>
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-select default-value="1">
        <a-select-option value="1">Between</a-select-option>
        <a-select-option value="2">Except</a-select-option>
      </a-select>
      <a-input style=" width: 100px; text-align: center" placeholder="Minimum" />
      <a-input
        style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
        placeholder="~"
        disabled
      />
      <a-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-select default-value="Sign Up">
        <a-select-option value="Sign Up">Sign Up</a-select-option>
        <a-select-option value="Sign In">Sign In</a-select-option>
      </a-select>
      <a-auto-complete
        :data-source="dataSource"
        style="width: 200px"
        placeholder="Email"
        @change="handleChange"
      />
    </a-input-group>-->
    <br />
    <!-- <a-input-group compact>
      <a-select style="width: 30%" default-value="Home">
        <a-select-option value="Home">Home</a-select-option>
        <a-select-option value="Company">Company</a-select-option>
      </a-select>
      <a-cascader style="width: 70%" :options="options" placeholder="Select Address" />
    </a-input-group>-->
    <!-- <a-carousel :after-change="onChange">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </a-carousel> -->
    <!-- <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <a-icon :type="loading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload> -->
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
      <a slot="age" slot-scope="ages">{{ ages }}</a>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
          "
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a>Invite 一 {{ record.name }}</a>
        <a-divider type="vertical" />
        <a>Delete</a>
        <a-divider type="vertical" />
        <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      </span>
    </a-table>
  </div>
</template>

<script>
// const options = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];
// function getBase64 (img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
export default {
  name: '',
  data () {
    return {
      // labelCol: { span: 4 },
      // wrapperCol: { span: 14 },
      // form: {
      //   name: ''
      // }
      // options,
      // dataSource: [],
      // loading: false,
      // imageUrl: '',
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 35,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
      columns: [
        {
          dataIndex: 'name',
          key: 'name',
          slots: { title: 'customTitle' }, // 列表头自定义渲染
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          scopedSlots: { customRender: 'age' }, // 列内容自定义渲染
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          scopedSlots: { customRender: 'tags' },
        },
        {
          title: 'Action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  components: {},
  mounted () { },
  methods: {
    // handleChange (value) {
    //   this.dataSource =
    //     !value || value.indexOf('@') >= 0
    //       ? []
    //       : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`];
    // },
    // onChange (a, b, c) {
    //   console.log(a, b, c);
    // },
    // handleChange (info) {
    // if (info.file.status === 'uploading') {
    //   this.loading = true;
    //   return;
    // }
    // if (info.file.status === 'done') {
    // Get this url from response in real world.
    // getBase64(info.file.originFileObj, imageUrl => {
    //   this.imageUrl = imageUrl;
    //   this.loading = false;
    // });
    // }
    // },
    // beforeUpload (file) {
    //   console.log(file, '数据')
    //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    // if (!isJpgOrPng) {
    //   this.$message.error('You can only upload JPG file!');
    // }
    // const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isLt2M) {
    //   this.$message.error('Image must smaller than 2MB!');
    // }
    // return isJpgOrPng;
    // },
  }
}
</script>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>