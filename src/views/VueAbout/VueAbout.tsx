import Vue from "vue"
import vueClassComponent from "vue-class-component"
import { Input, Col } from "element-ui";

@vueClassComponent({
  // computed: {
  //   ...mapState(users.MODULE_PATH, ['personalInfo', 'skin']),
  // },
  props: {
    name: {
      type: String,
      default: "this is prop"
    }
  },
  // methods: {
  //   ...mapActions()
  // }
})
export default class VueAbout extends Vue {
  // initial data
  id = "myId"
  render(h) {
    return (
      <div class="vue-about">
        <div class="computed">
          {/* <Input value={this.id} placeholder="请输入要翻转的文字" class="input-width" onInput={this.handleInput}></Input> */}
          <el-input value={this.id} placeholder="请输入要翻转的文字" class="input-width" onInput={this.handleInput}></el-input>
          <span>computed后的值：</span>
        </div>
      </div>
    )
  }
  mounted() {

  }
  // computed
  // get getText() {
  //   return `${this.name}(${this.id})`
  // }
  // 方法
  handleInput(val) {
    this.id = val;
  }
}
