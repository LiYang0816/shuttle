<template>
  <!-- 表单cell -->
  <div class="yCell">
    <div ref="yCell" class="yCell-body" @click="cClick">
      <div
        :class="{
          'yCell-font': true,
          'yCell-font-link': linkShow,
          'yCell-font-error': cssError,
        }"
      >
        <!-- input -->
        <div :class="{ 'yCell-value': true, 'yCell-value-error': cssError }">
          <slot name="value">
            <input
              type="text"
              v-bind="$attrs"
              v-bind:value="value"
              v-on="inputListeners"
              :placeholder="placeholder"
              class="item-required"
              :disabled="disabled"
            />
          </slot>
          <slot></slot>
        </div>
        <!-- 是否必选 -->
        <div
          v-if="requireShow"
          :class="{ 'yCell-select': true, 'yCell-select-error': cssError }"
        >
          <slot name="require">(必填)</slot>
        </div>
      </div>
      <!-- 箭头 -->
      <!-- <div class="yCell-link" v-if="linkShow">
        <img src="@/assets/img/icon_fanhui.svg" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'yCell',
  props: {
    // 是否必选
    requireShow: {
      type: Boolean,
      default: () => false
    },
    // input输入
    inputValue: {
      type: Function
    },
    // input输入时
    inputIn: {
      type: Function
    },
    // input初始值
    inputInit: {
      type: String
    },
    // 是否显示箭头
    linkShow: {
      type: Boolean,
      default: () => false
    },
    // 是否可输入
    disabled: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => '请输入名称'
    },
    value: {
      type: String,
      default: () => ''
    },
    cssError: {
      type: Boolean
    }
  },
  data () {
    return {
      foucusFlag: false,
      inputValueData: '',
      timer: null,
      inputFlag: true
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
  components: {},
  mounted () {

  },
  methods: {
    // 点击事件
    cClick () {
      this.$emit('cClick');
    }
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
.yCell {
  width: 100%;
  height: 100%;
  .yCell-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .yCell-font {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .yCell-value {
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        .item-required {
          width: 100%;
        }
        .item-required::-webkit-input-placeholder {
          /* WebKit, Blink, Edge */
          color: #cccccc;
        }
        .item-required::-moz-placeholder {
          /* Mozilla Firefox 19+ */
          color: #cccccc;
        }
        .item-required:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 */
          color: #cccccc;
        }
        .item-required:-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #cccccc;
        }
      }
      .yCell-value-error {
        width: 80%;
      }
      .yCell-select {
        display: none;
      }
      .yCell-select-error {
        display: block;
        color: #f35252;
      }
    }
    .yCell-font-link {
      width: 85%;
    }
    .yCell-font-error {
      width: 100%;
    }
    .yCell-link {
      width: 22px;
      height: 22px;
      // position: absolute;
      // right: 0;
      font-size: 16px;
    }
  }
}
</style>