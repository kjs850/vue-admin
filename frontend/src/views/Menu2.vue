<template>
    <div>
        <b-jumbotron header="Menu2">
            <b-table striped hover :items="users" />
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Menu2',
        data: function () {
            return {
                users: []
            }
        },
        mounted: function(){
            this.getUsers();
        },
        methods: {
            getUsers: function () {
                const baseURI = '/user/api/list';
                this.$http.get(`${baseURI}`)
                    .then((result) => {
                        this.users = result.data
                    })
            }
        }
    }
</script>