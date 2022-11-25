<template>
  <div
    class="w-80 rounded-lg shadow-xl cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
    v-show="this.data.title.toLowerCase().includes(this.$store.state.searchedBlog.toLowerCase())"
    @click="clicked()"
  >
    <img
      :src="require('../assets/' + data.img)"
      class="w-80 rounded-xl"
      alt="blog image"
    />
    <!-- title -->
    <h3 class="py-2 px-2 font-bold text-xl">{{ data.title }}</h3>
    <!-- description -->
    <p class="py-2 px-2 text-gray-500">{{ data.description }}</p>
    <!-- author -->
    <div class="flex gap-2 py-4 items-center px-2">
      <img
        class="w-12 h-12 rounded-full"
        :src="require('../assets/' + data.user.img)"
      />
      <p class="font-bold text-lg">{{ data.user.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
   methods: {
    clicked(){
      this.$store.dispatch("clickedBlog", this.data.title);
    },
  },
  computed: {
    search() {
      return this.$store.state.search;
    }
  },
};
</script>

<style lang="scss" scoped></style>
