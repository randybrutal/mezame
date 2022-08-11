<template lang="pug">
    div
        button.ad2hs-prompt(type="button") Install Web App
        div.ios-prompt
            span.pwa-close-icon(style="color: rgb(187, 187, 187); float: right; margin-top: -14px; margin-right: -11px;") &times;
            p(style="margin-top: -3px; line-height: 1.3rem;") To install this Web App in your iPhone/iPad press
                img(
                    src="../assets/images/share.svg"
                    style="display: inline-block; margin-top: 4px; margin-bottom: -4px; height: 30px; width: auto;"
                )
                | and then
                span
                    img(
                        src="../assets/images/a2hs.svg"
                        style="height:30px; width: auto; vertical-align:bottom;"
                    )
                    | Add to Home Screen.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PwaPop extends Vue {
}
</script>

<style lang="scss">
    .ad2hs-prompt {
        background-color: rgb(59, 134, 196); /* Blue */
        border: none;
        display: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;

        position: fixed;
        margin: 0 1rem 1rem;
        left: 0;
        right: 0;
        bottom: 50px;
        width: calc(100% - 32px);
    }
    .ios-prompt {
        background-color: #fcfcfc;
        border: 1px solid #666;
        display: none;
        padding: 0.8rem 1rem 0 0.5rem;
        text-decoration: none;
        font-size: 16px;
        color: #555;
        position: fixed;
        margin: 0 auto 1rem;
        left: 1rem;
        right: 1rem;
        bottom: 0;
    }
</style>
