<template>
    <div>
        <b-jumbotron header="Menu1">
            <div v-for="item in news" v-bind:key="item.id">{{ item.title }}</div>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Menu1',
        data: function () {
            return {
                news: []
            }
        },
        mounted: function(){
            this.getNews();
        },
        methods: {
            getNews: function () {
                const baseURI = 'https://api.hnpwa.com/v0/news/1.json';
                this.$http.get(`${baseURI}`)
                    .then((result) => {
                        this.news = result.data
                    })
            }
        }
    }
</script>