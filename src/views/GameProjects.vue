<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      The following are some games and other projects I've created either for game jams, fun, experimentation or to showcase my skills..
    </div>

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
