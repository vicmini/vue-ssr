<template>
  <div>
    <div v-for="topic in topics">
      <p>topic.title</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
const fetchInitialData = ({ store, route }) => {
  return store.dispatch("getTopics");
};
// asyncData留占位过程 异步请求 告知ssr 先去占位
export default {
  name: "Topics",
  asyncData: fetchInitialData,
  computed: {
    ...mapGetters({
      topics: "getTopics"
    })
  },
  mounted() {
    fetchInitialData({ store: this.$store });
  }
};
</script>
<style scoped>
</style>
