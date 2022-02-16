<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" circle @click="dialogvisible = true" style="margin-bottom: 10px; background-color: #6867AC"></el-button>
    <div class="container">
      <table>
        <tr>
          <th class="uzunSatir" style="font-weight: bold; font-size: 30px">HEDEFLERİM</th>
        </tr>
        <tr v-for="t in tasks" :key="t.id">
          <td :class="[t.isFinished ? 'finishedWork' : '', 'uzunSatir', 'tasks']">{{ t.content }}</td>
          <td>
            <input
              type="checkbox"
              :id="t.id"
              v-model="t.isFinished"
              @click="changeFinish(t.id)"
              class="checkbox"
            />
          </td>
        </tr>
      </table>
    </div>
    <addTaskDialog v-if="dialogvisible" :dialogvisible.sync="dialogvisible" />
  </div>
</template>

<script>
  import addTaskDialog from "../components/addTask";
  export default {
    name: "Home",
    data() {
      return {
        dialogvisible: false,
        finishedDialogVisible: false
      };
    },
    computed: {
      tasks: function () {
        return this.$store.getters.getTodoList;
      },
    },
    components: { addTaskDialog },
    methods: {
      changeFinish(id) {
        this.$store.getters.getFinished(id).isFinished = !this.$store.getters.getFinished(id).isFinished;
        return this.$store.getters.getFinished(id).isFinished;
      },
    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    font-family: Verdana;
  }

  .uzunSatir {
    width: 800px;
  }

  table {
    background-color: #F7F7E8;
  }

  table tr td,
  th {
    height: 50px;
    font-size: 22px;
  }

  .checkbox{
    width: 30px;
    height: 30px;
  }

  .tasks{
    text-align: left;
  }
  .finishedWork{
    text-decoration: line-through;
    color: gray;
  }
</style>
