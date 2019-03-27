<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <router-link to="/menu1">menu1</router-link>
                    <router-link to="/menu2">menu2</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<style scoped>
    a{
        color: hsla(0,0%,100%,.5);
        display: block;
        padding: 0.5rem 1rem;
    }
</style>
<script>
    export default {
        name: 'Header'
    }
</script>