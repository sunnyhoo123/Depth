<template>
  <div class="elselectcom">
    <el-select v-model="food" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label">
      </el-option>
    </el-select>
    <span>
      您选择的是：{{ food }}
    </span>
  </div>
	
</template>

<script>
export default {
  name: "Elselectcom",
  components: {
  },
  data() {
    return {
      options: [{
        value: "选项0",
        label: "所有"
      }, {
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }],
      food:"",
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang='less' scoped>
	
</style>