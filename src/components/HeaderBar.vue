<template lang="pug">
    div.headerbar
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class HeaderBar extends Vue {
    protected active = 'Home';

    protected created() {
        this.active = this.$route.meta.upStair;
    }

    @Watch('$route')
    protected routeChange(val: any) {
        this.active = val.meta.upStair;
    }
}
</script>
<style scoped lang="scss">
    .headerbar /deep/{
        width: 100%;
        // max-height: 675px;
        // height: 200px;
        // overflow: hidden;
        .video-style {
            width: 100%;
            height: 100%;
        }
    }
</style>
