<template>
  <div style="margin:20px auto;">
    <el-button type='primary' @click="onClick">{{name}}</el-button>
  </div>
</template>


<script>
export default {

  props: {
    name: String,
    onClick: Function,
  },

}
</script>


<style scoped>

</style>
