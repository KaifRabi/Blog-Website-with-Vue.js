<template>
    <header class="text-center py-16">
        <h1 class="text-6xl font-bold font-mono text-blue-600">Blog website</h1>
        <p class="text-lg w-80 mx-auto text-gray-500 mt-4 leading-6">awesome place to make oneself productive and entertaiend through daily updates.</p>
        <form class="relative w-max mx-auto mt-8">
            <input 
            v-model="search"
            @input="searchBlog()"
            type="text" class="bg-gray-100 rounded-md py-3 w-80 shadow-lg pl-3 text-lg focus:outline-blue-600"
                placeholder="Search for articles"
            />
            <a class="absolute cursor-pointer right-3 top-[8px] bg-blue-600 text-lg py-1 px-5 rounded-md text-white font-medium"
            >Go</a>
        </form>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                search: ''
            }
        },
        methods: {
            searchBlog(){
                this.$store.dispatch('s', this.search)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>