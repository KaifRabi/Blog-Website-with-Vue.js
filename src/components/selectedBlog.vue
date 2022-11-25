<template>
    <div
    class="container mx-auto px-8 rounded-lg"
  >
  <div class="cursor-pointer w-max my-4 font-bold py-4 px-4  border border-1 border-black"
    @click="emptySelectedBlog()"
  >Go Back</div>
    <!-- title -->
    <h3 class="py-2 px-2 font-bold text-3xl md:text-7xl">{{ storeData[0].title }}</h3>
    <img
      :src="require('../assets/' + storeData[0].img)"
      class="w-full rounded-xl"
      alt="blog image"
    />
    <!-- description -->
    <p class="py-2 px-2 text-lg text-gray-500">{{ storeData[0].description }}</p>
    <!-- content -->
    <p class="text-lg leading-10">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia, atque, quis sequi vitae dolores voluptas totam illum sint minima, nulla voluptatem incidunt deserunt aliquid temporibus harum. Autem explicabo est nisi provident? Deserunt, neque repudiandae saepe doloremque qui delectus libero veniam quisquam impedit perferendis possimus, harum modi eveniet cupiditate consequuntur? Illo placeat non laudantium odit vitae, consequuntur accusantium, cumque officia harum, inventore tempora dolore ducimus nisi aut numquam eligendi ipsa molestiae omnis iste doloribus beatae earum rerum deserunt facere. Molestiae nesciunt harum quibusdam dicta eligendi soluta ipsam non? Voluptates fugiat rem provident nisi error! Ut pariatur esse ea atque? Quisquam nulla consectetur autem. Quae beatae possimus quos? Nam enim ex doloremque accusantium quidem quis repellendus veniam! Delectus nam eius provident, voluptate commodi ducimus sequi placeat maxime tempora vel hic natus? Est dolorum, vel alias ipsa sit delectus optio quos dolor, laborum quo blanditiis esse id, quibusdam eius? Itaque error placeat eaque! Unde qui dignissimos autem sunt nostrum itaque, accusamus, magni illum assumenda recusandae necessitatibus adipisci aperiam molestiae doloribus fugiat reiciendis quod impedit! Totam aliquid voluptatum iusto. Quia error suscipit quasi ducimus aliquam, quos laboriosam magnam, iusto, blanditiis illum culpa repudiandae est dolore quaerat id et? Numquam, tempore pariatur animi, dolor voluptas atque delectus cum cumque quos deleniti commodi, ad id? Iusto, est recusandae repudiandae, tenetur ipsam sapiente at totam ab veritatis illum deserunt debitis tempora consequatur fugiat quas, libero hic voluptate molestiae quae. Numquam ut quo accusantium repellendus rerum illo sed dolores autem, esse corrupti ab? Saepe reiciendis, similique minus quo ut quidem optio rem. Neque beatae est officiis minima quas ab nobis saepe dignissimos accusamus excepturi ducimus tempora dicta maiores hic qui nam rerum exercitationem aliquid eum, alias blanditiis, animi odit facere. Laudantium repudiandae iure accusamus at sequi sunt magnam ipsam vitae autem aut atque cupiditate doloribus, nisi non?
    </p>
    <!-- author -->
    <p class="pt-8 font-bold text-gray-500">Writte by:</p>

    <div class="flex gap-2 py-4 items-center px-2">
      <img
        class="w-12 h-12 rounded-full"
        :src="require('../assets/' + storeData[0].user.img)"
      />
      <p class="font-bold text-lg">{{ storeData[0].user.name }}</p>
    </div>
    <hr />
    <!-- comments -->
    <div class="pt-8">
        <p class="font-medium text-lg">Comments</p>
        <p class="py-4 px-3 outline outline-1 outline-gray-600" v-for="(comment, index) in storeData[0].comments" :key="index">
            {{comment}}
        </p>
    </div>
    <!-- Write a comment -->
    <form>
        <input v-model="newComment" class="py-4 px-2 focus:outline-none" type="text" placeholder="type a comment"/>
    </form>
    <a class="bg-blue-400 py-2 px-2 rounded-md text-white font-bold"
        @click="submitComment()"
    >Submit</a>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                newComment: ''
            }
        },
        methods: {
            submitComment() {
                this.$store.dispatch('addComment', this.newComment)
                this.newComment = ''
            },
            emptySelectedBlog() {
                this.$store.dispatch('emptySelectedBlog')
            }
        },
        computed: {
            storeData() {
                return this.$store.state.blogData.filter(e => e.title === this.$store.state.selectedBlog)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>