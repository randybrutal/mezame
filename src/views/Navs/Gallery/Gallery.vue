<template lang="pug">
    div.gallery
        .image-grid(v-for="item in rawData.photoset")
            .image-wrap(:style="{ 'background-image': 'url(' + item.primary_photo_extras.url_m + ')' }")
                span.image-title {{ item.title._content }}
                .image-inner(
                    @click="goToAlbum(item.id)"
                )
        //- vs-card(
        //-     type="2"
        //-     v-for="item in rawData.photoset"
        //-     :key="item.primary"
        //-     @click="goToAlbum(item.id)"
        //- )
        //-     template(#title)
        //-         h3 {{ item.title._content }}
        //-     template(#img)
        //-         img(
        //-             :src="item.primary_photo_extras.url_o"
        //-             alt=""
        //-             width="50%"
        //-         )
        //-     template(#text)
        //-         p {{ item.description._content }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getAlbum } from '@/api';

@Component
export default class Gallery extends Vue {
    protected rawData = {};

    protected created() {
        this.getAlbumGo();
    }

    protected async getAlbumGo() {
        const { data } = await getAlbum({
            primary_photo_extras: 'owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_m, url_o'
        });
        if (data) {
            this.rawData = data.photosets;
        }
    }

    protected goToAlbum(id: string) {
        this.$router.push({
            name: 'Album',
            query: {
                id
            }
        });
    }
}
</script>
<style scoped lang="scss">
    .gallery /deep/{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        // justify-content: flex-start;
        flex-wrap: wrap;
        // align-items: flex-start;
        align-content: flex-start;
        // grid-template-columns: repeat(auto-fill, 20%);
        .vs-card-content {
            // display: inline-block;
            float: left;
            margin: 10px 10px;
            max-width: 320px;
        }
        .image-grid {
            width: 25%;
            height: 25%;
            margin: 10px 0;
            padding: 10px;
            .image-wrap {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-position: 50% 50%;
                .image-title {
                    position: absolute;
                    bottom: 20px;
                    left: 20px;
                    color: #FFF;
                    font-size: 20px;
                }
                .image-inner {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(255, 255, 255, 0)31%);
                    background: -moz-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(255, 255, 255, 0)31%);
                    background: -webkit-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(255, 255, 255, 0)31%);
                    background: -o-linear-gradient(0deg, rgba(0, 0, 0, 1)0%, rgba(255, 255, 255, 0)31%);
                    opacity: 1;
                }
                &:hover {
                    cursor: pointer;
                    opacity: 0.6;
                    .image-title {
                        transition: all .5s;
                        transform: translateX(15px);
                    }
                }
            }
        }
        @media (max-width: 980px) {
            .image-grid {
                width: 33%;
            }
        }
        @media (max-width: 767px) {
            .image-grid {
                width: 50%;
                height: 35%;
            }
        }
        @media (max-width: 480px) {
            .image-grid {
                width: 100%;
            }
        }
    }
</style>
