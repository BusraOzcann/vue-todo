<template>
  <el-dialog :visible="dialogvisible" @close="$emit('update:dialogvisible', false)" :show-close="true">
    <el-input
      placeholder="Hedef içeriği"
      v-model="content"
      clearable>
    </el-input>
    <el-button type="info" round @click="addTask" icon="el-icon-check" style="margin-top: 5px"></el-button>
  </el-dialog>
</template>

<script>
export default {
  name: "addTask",
  props: ["dialogvisible"],
  data(){
    return {
      content:""
    }
  },
  methods: {
    addTask() {
      this.$store.commit("createTask", this.content);
      this.$emit('update:dialogvisible', false)
    }
  }
};
</script>

<style scoped>

</style>