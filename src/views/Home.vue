<template>
    <div class="home">
        <BlogPost :post="welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Blogs</h3>
                <div class="blog-cards">
                    <BlogCard
                        :post="post"
                        v-for="(post, index) in sampleBlogCards"
                        :key="index"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
export default {
    name: "Home",
    components: { BlogPost, BlogCard },
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
            sampleBlogCards: [
                {
                    blogTitle: "Blog Card #1",
                    blogCoverPhoto: "stock-1",
                    blogDate: "Jan 2, 2022",
                },
                {
                    blogTitle: "Blog Card #2",
                    blogCoverPhoto: "stock-2",
                    blogDate: "Jan 2, 2022",
                },
                {
                    blogTitle: "Blog Card #3",
                    blogCoverPhoto: "stock-3",
                    blogDate: "Jan 2, 2022",
                },
                {
                    blogTitle: "Blog Card #4",
                    blogCoverPhoto: "stock-4",
                    blogDate: "Jan 2, 2022",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}
</style>
