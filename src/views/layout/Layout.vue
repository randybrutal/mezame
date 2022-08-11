<template lang="pug">
    .app-wrapper
        Navbar
        transition(
            name="fade-transform"
            mode="out-in"
        )
            router-view
        Footer
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import Footer from '@/components/Footer.vue';

@Component({
    components: {
        Navbar,
        HeaderBar,
        Footer
        // Sidebar,
        // AppMain
    }
})
export default class Layout extends Vue {
    protected trans = false;

    protected routeName = '';

    protected created() {
        if (this.$route.name) {
            this.routeName = this.$route.name;
        }
    }

    @Watch('$route')
    protected routeChange(val: any) {
        this.routeName = val.name;
        this.trans = !this.trans;
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    // min-width: 1100px;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
</style>
