<template>
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div class="main-center col-span-1 md:col-span-3 space-y-4">
            <div class="bg-white border border-gray-200 rounded-lg">
                <form v-on:submit.prevent="submitForm" class="p-4 flex space-x-4">
                    <input v-model="query" type="search" class="p-4 w-full bg-gray-100 rounded-lg"
                           placeholder="What are you looking for?">

                    <button class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </button>
                </form>
            </div>

            <div
                class="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                v-if="users.length"
            >
                <div class="p-4 text-center bg-gray-100 rounded-lg flex flex-col items-center"
                     v-for="user in users"
                     v-bind:key="user.id"
                >
                    <img :src="user.get_avatar" class="mb-6 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-full object-cover">

                    <p>
                        <strong>
                            <RouterLink :to="{name:'profile', params:{'id':user.id}}">
                                {{ user.name }}
                            </RouterLink>
                        </strong>
                    </p>

                    <div class="mt-6 flex space-x-8 justify-around">
                        <p class="text-xs text-gray-500">{{ user.friends_count }} friends</p>
                        <p class="text-xs text-gray-500">{{ user.posts_count }} posts</p>
                    </div>
                </div>

            </div>

            <div v-for="post in posts"
                 v-bind:key="post.id"
                 class="p-4 bg-white border border-gray-200 rounded-lg">
                <FeedItem v-bind:post="post"/>
            </div>

        </div>
        <div class="main-right hidden lg:block col-span-1 space-y-4">
            <PeopleYouMayKnow/>
            <Trends/>
        </div>
    </div>
</template>

<script>
import PeopleYouMayKnow from "@/components/PeopleYouMayKnow.vue";
import Trends from "@/components/Trends.vue";
import axios from "axios";
import FeedItem from "@/components/FeedItem.vue";

export default {
    name: "SearchView",
    components: {Trends, PeopleYouMayKnow, FeedItem},

    data() {
        return {
            query: '',
            users: [],
            posts: [],
        }
    },

    methods: {
        submitForm() {
            console.log("submit from", this.query)
            axios
                .post('/api/search/', {
                    query: this.query
                })
                .then(response => {
                    console.log("response", response.data)
                    this.users = response.data.users
                    this.posts = response.data.posts
                })
                .catch(error => {
                    console.log('error', error)
                })
        }
    }

}
</script>