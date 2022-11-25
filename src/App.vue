<template>
  <div id="app">
    <Header v-show="!storeData.selectedBlog"/>
    <div 
    v-show="!storeData.selectedBlog"
    class="flex justify-center flex-wrap mx-auto gap-4 max-w-[1000px]">
      <Blog v-for="(data, index) in storeData.blogData" :data="data" :key="index" />
    </div>
    <SelectedBlog v-show="storeData.selectedBlog" />

  </div>
</template>

<script>
import Header from "@/components/headerPart.vue";
import Blog from "@/components/blogPost.vue";
import SelectedBlog from "@/components/selectedBlog.vue";
export default {
  name: "App",
  components: {
    Header,
    Blog,
    SelectedBlog
  },
  computed: {
    storeData() {
      return this.$store.state;
    },
  },
};
</script>

<style></style>
