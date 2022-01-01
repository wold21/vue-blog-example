<template>
    <div class="home">
        <BlogPost :post="welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
export default {
    name: "Home",
    components: { BlogPost },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome",
                blogPost:
                    "가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하",
                welcomeScreen: true,
                photo: "coding",
            },
            sampleBlogPost: [
                {
                    title: "This is a Filter Title 1",
                    blogHTML: "This is a Filter Blog Post Title",
                    blogCoverPhoto: "beautiful-stories",
                },
                {
                    title: "This is a Filter Title 2",
                    blogHTML: "This is a Filter Blog Post Title",
                    blogCoverPhoto: "designed-for-everyone",
                },
            ],
        };
    },
};
</script>
