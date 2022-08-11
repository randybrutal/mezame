<template lang="pug">
    div.navs-page-wrapper
        PageTitle(:titleText="pageTitle")
        <!-- if need -->
        div.page-filter-container
            div.page-filter-content
        div.page-main-container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// import NavsPageHandle from '@/utils/mixin/NavsPageHandle';
// import PageTitle from '@/components/blocks/PageTitle.vue';

@Component({
    components: {
        // PageTitle
    }
})
export default class BaseComponent extends Vue {
    /*
        本地狀態 (本地的響應式属性)
        data
        computed
    */

    /*
        事件 (通過響應式事件觸發的回調)
        watch
    */

    /*
        生命周期鉤子 (按照它們被调用的顺序)
        beforeCreate
        created
        beforeMount
        mounted
        beforeUpdate
        updated
        activated
        deactivated
        beforeDestroy
        destroyed
    */

    /*
        非響應式的属性 (不依赖響應系统的實例属性)
        methods
    */
}
</script>

<style lang="scss" scoped>

</style>
