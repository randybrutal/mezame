<template lang="pug">
    div.footer
        div.left-footer
            div.footer-logo-frame.clearfix
                img.footer-logo(
                    src="../assets/logo.png"
                    alt=""
                    width="100"
                )
                div.logo-text 傷心欲絕真的很難聽
            div.icon-frame
                v-icon(
                    name="brands/facebook"
                    scale="2"
                )
                v-icon(
                    name="brands/instagram"
                    scale="2"
                )
                v-icon(
                    name="brands/behance-square"
                    scale="2"
                )
                v-icon(
                    name="brands/vimeo"
                    scale="2"
                )
        .copyright
            span © 2021 copyright. 一本
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
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
    .footer {
        width: 70%;
        margin: 0 auto;
        padding-bottom: 20px;
        color: #FFF;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .left-footer {
            .footer-logo-frame {
                border-bottom: #FFF solid 1px;
                padding-right: 5px;
                margin-bottom: 10px;
                .footer-logo,
                .logo-text {
                    float: left;
                    height: 95px;
                    line-height: 95px;
                    font-weight: bold;
                    font-size: 20px;
                }
                @media (max-width: 480px) {
                    .logo-text {
                        font-size: 12px;
                    }
                }
            }
            .icon-frame {
                display: flex;
                justify-content: space-around;
            }
            .fa-icon {
                margin: 0 5px;
            }
        }
        .copyright {
            margin-top: 40px;
            font-size: 14px;
        }
    }
</style>
