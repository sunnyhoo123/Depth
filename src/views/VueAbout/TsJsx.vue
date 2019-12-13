<script>
import Vue from "vue"
import vueClassComponent from "vue-class-component"

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
  // computed
  get getText() {
    return `${this.name}(${this.id})`
  }
  // 方法
  alert(val) {
    console.log("%c%s","color: red; background: yellow; font-size: 24px;", val);
  }
  changeFormData() {
    console.log(this.formData);
  }
  changeMsg() {
    this.msg = "chang";
    this.msg1 = this.$refs.msgDiv.innerHTML
    this.$nextTick(() => {
      this.msg2 = this.$refs.msgDiv.innerHTML
    })
    this.msg3 = this.$refs.msgDiv.innerHTML
  }
}
</script>

<style scoped lang="scss">
@import "style/var.scss";
@import "style/global.scss";
@mixin fontStyle($backgroundColor: #0d0, $fontSize: 14px) {
  color: $font-color;
  font-size: $fontSize;
}
$font-color: #919bb2;

.vue-about {
  .active {
    color: $font-color;
    &:hover {
      color: #0d0;
    }
	}
	.text-danger {
		font-size: 20px;
	}
	.class-array {
    height: 30px;
  }
  .child {
    @include fontStyle($fontSize: 16px)
  }
  .flex {
    align-items: center;
    @extend .display-flex;
  }
  .computed {
    @extend .flex;
    .input-width {
      width: 300px;
    }
  }
}
</style>
